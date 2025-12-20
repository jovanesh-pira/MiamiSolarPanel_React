import React from "react";

export default function Loading({
  size = 48,
  text = "Loading...",
  variant = "spinner", // 'spinner' or 'skeleton-list'
  count = 3,
}) {
  if (variant === "skeleton-list") {
    return (
      <div className="space-y-5">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="bg-white rounded p-6 h-40 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-[40vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          style={{ width: size, height: size }}
          className="border-4 border-sky-500 border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
        <p className="text-sm text-slate-600" aria-live="polite">
          {text}
        </p>
      </div>
    </div>
  );
}
