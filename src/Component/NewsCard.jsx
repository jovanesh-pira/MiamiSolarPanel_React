// src/components/NewsCard.jsx
import React from "react";
import Button from "../Component/Button";
import { urlFor } from "../lib/sanity";

export default function NewsCard({ item }) {
  const getImageSrc = (img) => {
    if (!img) return "/images/placeholder.png";
    if (typeof img === "string") return img;
    try {
      return urlFor(img).width(800).quality(80).url();
    } catch (e) {
      return "/images/placeholder.png";
    }
  };

  const imageSrc = getImageSrc(item?.tmb_image);
  const title = item?.title || "Untitled";

  return (
    // Outer card wrapper
    <article className="bg-white rounded-3xl shadow-[0_18px_40px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col md:flex-row">
      {/* Image section */}
      <div className="md:w-2/5">
        <img
          src={urlFor(item.tmb_image).width(800).quality(80).url()}
          alt={item.title}
          className="h-52 md:h-80 w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Text section */}
      <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
        {/* Category and date */}
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-400">
            {item.category}
          </p>
          <p className="text-[11px] text-slate-400 mt-0.5">{item.date}</p>

          {/* Title */}
          <h2 className="mt-3 text-lg md:text-xl font-semibold text-slate-900">
            {item.title}
          </h2>

          {/* Summary */}
          <p className="mt-3 text-sm text-slate-600">{item.summary}</p>
        </div>

        {/* Read more button */}
        <div className="mt-5">
          <Button to={`/news/${item.id}`} size="md" variant="primary_outline">
            Read more
          </Button>
        </div>
      </div>
    </article>
  );
}
