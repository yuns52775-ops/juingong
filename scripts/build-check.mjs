/*
  exFAT does not support symlinks, so `next build` fails when the project
  lives on the external drive. This mirrors the source into an NTFS temp
  directory and builds there instead.

  Note: fs.cpSync hard-crashes Node (0xC0000409) when reading from this
  exFAT volume, so the copy below walks the tree with copyFileSync instead.

  Usage: npm run build:check
*/
import { execSync } from "node:child_process";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { createHash } from "node:crypto";
import os from "node:os";
import path from "node:path";

const ROOT = process.cwd();
const WORK = path.join(os.tmpdir(), "juingong-buildcheck");

/*
  Mirror everything except build output and local-only state. An allowlist
  silently skipped new source folders, which showed up as a broken build
  rather than a missing copy.
*/
const SKIP = new Set([
  "node_modules",
  ".next",
  ".git",
  ".vercel",
  ".claude",
  "scripts",
]);

function copyDir(from, to) {
  mkdirSync(to, { recursive: true });
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else if (entry.isFile()) copyFileSync(src, dest);
  }
}

function run(cmd) {
  execSync(cmd, { cwd: WORK, stdio: "inherit", shell: true });
}

mkdirSync(WORK, { recursive: true });

// Stale copies of deleted files would hide real errors, so each tree is
// cleared before it is rewritten.
for (const entry of readdirSync(ROOT, { withFileTypes: true })) {
  if (SKIP.has(entry.name)) continue;
  const from = path.join(ROOT, entry.name);
  const to = path.join(WORK, entry.name);
  if (entry.isDirectory()) {
    rmSync(to, { recursive: true, force: true });
    copyDir(from, to);
  } else if (entry.isFile()) {
    copyFileSync(from, to);
  }
}

// Reinstall only when the lockfile actually changed. Keeps repeat runs fast.
const lockPath = path.join(ROOT, "package-lock.json");
const stampPath = path.join(WORK, ".lock-stamp");
const lockHash = existsSync(lockPath)
  ? createHash("sha1").update(readFileSync(lockPath)).digest("hex")
  : "none";
const previous = existsSync(stampPath) ? readFileSync(stampPath, "utf8") : "";

if (!existsSync(path.join(WORK, "node_modules")) || previous !== lockHash) {
  console.log("\nInstalling dependencies in " + WORK + "\n");
  run("npm install --no-audit --no-fund");
  writeFileSync(stampPath, lockHash);
}

console.log("\nBuilding in " + WORK + "\n");
run("npx next build");

console.log("\nBuild passed. Safe to push.\n");
