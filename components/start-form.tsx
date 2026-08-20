"use client";

import { ArrowUpRight, Plus, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { THEMES } from "@/lib/themes";

const MAX_PHOTOS = 3;
const AGES = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const GENDERS = [
  { value: "boy", label: "남자아이" },
  { value: "girl", label: "여자아이" },
  { value: "unspecified", label: "선택 안 함" },
];

type Status = "idle" | "generating" | "done";
type Errors = Partial<Record<"photos" | "name" | "theme", string>>;

export function StartForm() {
  const [photos, setPhotos] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("5");
  const [gender, setGender] = useState("unspecified");
  const [themeId, setThemeId] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [dragging, setDragging] = useState(false);
  /*
    Everything here runs in the browser, so before hydration a click on the
    submit button would trigger a native GET submit and wipe the form. The
    button stays disabled until the handler is actually attached.
  */
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Object URLs are revoked whenever the set changes and on unmount.
  useEffect(() => {
    const urls = photos.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [photos]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const addFiles = useCallback((incoming: FileList | null) => {
    if (!incoming) return;
    const images = Array.from(incoming).filter((f) =>
      f.type.startsWith("image/"),
    );
    if (images.length === 0) return;
    setPhotos((prev) => [...prev, ...images].slice(0, MAX_PHOTOS));
    setErrors((prev) => ({ ...prev, photos: undefined }));
  }, []);

  function removePhoto(index: number) {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (photos.length === 0) next.photos = "사진을 한 장 이상 올려주세요.";
    if (name.trim().length === 0) next.name = "아이 이름을 입력해주세요.";
    else if (name.trim().length > 10)
      next.name = "이름은 10자 이내로 입력해주세요.";
    if (!themeId) next.theme = "이야기 테마를 골라주세요.";
    return next;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      document
        .querySelector<HTMLElement>("[data-field-error]")
        ?.scrollIntoView({ block: "center" });
      return;
    }

    setStatus("generating");
    timerRef.current = setTimeout(() => setStatus("done"), 2600);
  }

  function reset() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setStatus("idle");
  }

  const selectedTheme = THEMES.find((t) => t.id === themeId);
  const labelClass = "block text-[15px] font-semibold tracking-tight";
  const helpClass = "mt-1.5 text-[13px] text-ink-soft dark:text-moss";
  const errorClass = "mt-2 text-[13px] font-medium text-accent";
  const fieldClass =
    "mt-3 w-full rounded-field border border-ink/15 bg-paper-raised px-4 py-3 text-[15px] text-ink transition-colors duration-300 hover:border-ink/25 dark:border-paper/15 dark:bg-forest-raised dark:text-paper dark:hover:border-paper/25";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto grid max-w-[1180px] gap-12 px-5 pb-28 sm:px-8 lg:grid-cols-12 lg:gap-10"
    >
      <div className="flex flex-col gap-11 lg:col-span-7">
        {/* Photos */}
        <div>
          <span className={labelClass}>아이 사진</span>
          <p className={helpClass}>
            정면이 잘 나온 사진이면 충분합니다. 최대 {MAX_PHOTOS}장까지 올릴 수
            있고, 여러 장일수록 얼굴이 정확해집니다.
          </p>

          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragging(false);
              addFiles(e.dataTransfer.files);
            }}
            className={`mt-4 rounded-card border border-dashed p-3 transition-colors duration-300 ${
              dragging
                ? "border-accent bg-accent/5"
                : "border-ink/20 dark:border-paper/20"
            }`}
          >
            <div className="grid grid-cols-3 gap-3">
              {previews.map((url, i) => (
                <div
                  key={url}
                  className="group relative aspect-square overflow-hidden rounded-inner bg-ink/5 dark:bg-paper/5"
                >
                  {/* Local object URL, so next/image optimization is skipped. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={url}
                    alt={`올린 사진 ${i + 1}`}
                    className="size-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    aria-label={`사진 ${i + 1} 삭제`}
                    className="absolute top-2 right-2 flex size-7 items-center justify-center rounded-full bg-forest-deep/70 text-paper backdrop-blur-sm transition-transform duration-300 active:scale-[0.92]"
                  >
                    <X weight="light" className="size-4" />
                  </button>
                </div>
              ))}

              {photos.length < MAX_PHOTOS && (
                <button
                  type="button"
                  onClick={() => inputRef.current?.click()}
                  className="flex aspect-square flex-col items-center justify-center gap-2 rounded-inner border border-ink/12 bg-paper-raised text-ink-soft transition-colors duration-300 hover:border-ink/25 hover:text-ink active:scale-[0.98] dark:border-paper/12 dark:bg-forest-raised dark:text-moss dark:hover:border-paper/25 dark:hover:text-paper"
                >
                  <Plus weight="light" className="size-6" />
                  <span className="text-[13px] font-medium">사진 고르기</span>
                </button>
              )}
            </div>
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
          />

          {errors.photos && (
            <p data-field-error className={errorClass}>
              {errors.photos}
            </p>
          )}
        </div>

        {/* Name */}
        <div>
          <label htmlFor="child-name" className={labelClass}>
            아이 이름
          </label>
          <p className={helpClass}>책 속 주인공 이름으로 그대로 들어갑니다.</p>
          <input
            id="child-name"
            type="text"
            value={name}
            maxLength={10}
            onChange={(e) => {
              setName(e.target.value);
              setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            className={fieldClass}
          />
          {errors.name && (
            <p data-field-error className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Age and gender */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label htmlFor="child-age" className={labelClass}>
              나이
            </label>
            <p className={helpClass}>문장의 난이도를 맞추는 데 씁니다.</p>
            <select
              id="child-age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className={fieldClass}
            >
              {AGES.map((value) => (
                <option key={value} value={value}>
                  {value}세
                </option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className={labelClass}>성별</legend>
            <p className={helpClass}>삽화 속 아이 표현에 반영됩니다.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {GENDERS.map((option) => {
                const active = gender === option.value;
                return (
                  <label
                    key={option.value}
                    className={`cursor-pointer rounded-full border px-4 py-2.5 text-[14px] font-medium transition-colors duration-300 ${
                      active
                        ? "border-accent bg-accent text-white"
                        : "border-ink/15 bg-paper-raised text-ink hover:border-ink/30 dark:border-paper/15 dark:bg-forest-raised dark:text-paper dark:hover:border-paper/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={option.value}
                      checked={active}
                      onChange={(e) => setGender(e.target.value)}
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* Theme */}
        <div>
          <fieldset>
            <legend className={labelClass}>이야기 테마</legend>
            <p className={helpClass}>
              고른 테마에 아이 이름과 나이를 넣어 열두 장면이 새로 쓰입니다.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {THEMES.map((theme) => {
                const active = themeId === theme.id;
                return (
                  <label
                    key={theme.id}
                    className={`cursor-pointer rounded-card border p-5 transition-colors duration-300 ${
                      active
                        ? "border-accent bg-accent/8"
                        : "border-ink/12 bg-paper-raised hover:border-ink/25 dark:border-paper/12 dark:bg-forest-raised dark:hover:border-paper/25"
                    }`}
                  >
                    <input
                      type="radio"
                      name="theme"
                      value={theme.id}
                      checked={active}
                      onChange={() => {
                        setThemeId(theme.id);
                        setErrors((prev) => ({ ...prev, theme: undefined }));
                      }}
                      className="sr-only"
                    />
                    <span className="block text-[16px] font-semibold tracking-tight">
                      {theme.name}
                    </span>
                    <span className="mt-1.5 block text-[13px] leading-relaxed text-ink-soft dark:text-moss">
                      {theme.summary}
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
          {errors.theme && (
            <p data-field-error className={errorClass}>
              {errors.theme}
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={!ready || status === "generating"}
            className="group inline-flex items-center gap-3 rounded-full bg-accent py-2.5 pr-2.5 pl-7 text-[15px] font-semibold whitespace-nowrap text-white shadow-[0_10px_30px_-12px_rgba(178,58,87,0.7)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "generating" ? "표지 만드는 중" : "무료로 표지 만들기"}
            <span className="flex size-10 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
              <ArrowUpRight weight="light" className="size-5" />
            </span>
          </button>
          <p className="mt-4 text-[13px] text-ink-soft dark:text-moss">
            여기까지는 비용이 들지 않습니다. 표지를 보고 결정하세요.
          </p>
        </div>
      </div>

      {/* Preview panel */}
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <div className="rounded-card border border-ink/8 bg-paper-raised/70 p-2 dark:border-paper/10 dark:bg-forest-raised/70">
            <div
              aria-live="polite"
              className="relative flex aspect-4/5 items-center justify-center overflow-hidden rounded-inner bg-ink/4 dark:bg-paper/4"
            >
              {status === "idle" && (
                <p className="max-w-[22ch] px-8 text-center text-[14px] leading-relaxed text-ink-soft dark:text-moss">
                  사진과 이름을 입력하면 여기에 표지가 나타납니다.
                </p>
              )}

              {status === "generating" && (
                <div className="absolute inset-0 overflow-hidden bg-ink/6 dark:bg-paper/6">
                  <div className="shimmer absolute inset-0" />
                  <p className="absolute inset-x-0 bottom-8 text-center text-[14px] font-medium">
                    표지를 그리는 중입니다
                  </p>
                </div>
              )}

              {status === "done" && selectedTheme && (
                <Image
                  src={`https://picsum.photos/seed/${selectedTheme.seed}-cover/900/1125`}
                  alt="표지 예시 이미지"
                  fill
                  sizes="(max-width: 1024px) 100vw, 26rem"
                  className="object-cover"
                />
              )}
            </div>
          </div>

          {status === "done" && (
            <div className="mt-5 rounded-card border border-ink/12 bg-paper-raised/60 p-6 dark:border-paper/12 dark:bg-forest-raised/60">
              <p className="text-[15px] leading-relaxed font-semibold tracking-tight">
                위 이미지는 예시입니다
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft dark:text-moss">
                표지 생성 기능은 아직 연결되지 않았습니다. 지금은 화면 흐름만
                확인하실 수 있습니다.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-5 rounded-full border border-ink/15 px-5 py-2.5 text-[14px] font-medium transition-colors duration-300 hover:border-ink/30 active:scale-[0.98] dark:border-paper/15 dark:hover:border-paper/30"
              >
                처음부터 다시
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
