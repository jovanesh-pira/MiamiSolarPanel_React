import React from "react";

export default function Loading({ size = 48, text = "Loading..." }) {
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
