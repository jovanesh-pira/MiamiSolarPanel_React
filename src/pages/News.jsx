// src/pages/NewsPage.jsx
import React, { useMemo, useState, useEffect } from "react";
import { sanityClient } from "../lib/sanity";
import NewsCard from "../Component/NewsCard";
import Button from "../Component/Button";

const CATEGORIES = ["All", "Technology", "Company", "Projects", "Community"];

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "news"] | order(date desc) {
            _id,
            title,
            category,
            date,
            summary,
            tmb_image
          }
        `
      )
      .then((data) => {
        console.log(data);

        setNews(data.map((item) => ({ ...item, id: item._id })));
        setLoading(false);
      });
  }, []);
  // UI state: selected category and search query

  // Filter news items based on category and search text
  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchQuery =
        query.trim().length === 0 ||
        item.title.toLowerCase().includes(query.toLowerCase());

      return matchCategory && matchQuery;
    });
  }, [news, activeCategory, query]);

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {/* Page container */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Breadcrumb and title */}
          <div className="flex items-start justify-between gap-4">
            {/* Left: breadcrumb */}
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="w-10 h-px bg-slate-300" />
              <span>( News )</span>
            </div>

            {/* Right: optional small text or empty for now */}
            <span className="hidden md:inline-block text-[11px] text-slate-400">
              Miami Solar • Updates, projects and company news
            </span>
          </div>

          {/* Main heading */}
          <header className="mt-4 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              News & Insights
            </h1>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
              Explore the latest developments in solar technology, company
              announcements and project highlights from Miami Solar.
            </p>
          </header>

          {/* Filters row: categories + search */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Search input */}
            <div className="w-full md:w-64">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search news..."
                className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
            </div>
          </div>

          {/* News list */}
          {loading ? (
            <div className="space-y-5">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className="bg-white rounded p-6 h-40 animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-5">
              {filteredNews.map((item) => (
                <NewsCard key={item.id || item._id} item={item} />
              ))}

              {/* Empty state if nothing matches filter */}
              {filteredNews.length === 0 && (
                <p className="text-sm text-slate-500">
                  No articles found for this filter.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
