// src/pages/NewsPage.jsx
import React, { useMemo, useState, useEffect } from "react";
import { sanityClient } from "../lib/sanity";
import NewsCard from "../Component/NewsCard";
import Button from "../Component/Button";
import Loading from "../Component/Loading";

export default function NewsPage() {
  const [categories, setCategories] = useState(["All"]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 4;

  useEffect(() => {
    setLoading(true);
    setError(null);
    setCategoriesLoading(true);

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
        setNews(data.map((item) => ({ ...item, id: item._id })));

        // derive categories from fetched data (server-driven)
        const uniqueCats = Array.from(
          new Set(data.map((i) => i.category).filter(Boolean))
        );
        setCategories(["All", ...uniqueCats]);
        setCategoriesLoading(false);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setError("Failed to load news. Please try again.");
        setCategories(["All"]);
        setCategoriesLoading(false);
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

  // If categories change and the active category is no longer available, reset to 'All'
  useEffect(() => {
    if (!categories.includes(activeCategory)) {
      setActiveCategory("All");
    }
  }, [categories]);

  // Reset to first page when filters/search/categories change
  useEffect(() => {
    setPage(1);
  }, [activeCategory, query, categories]);

  // Ensure the current page is within bounds when filtered results change
  useEffect(() => {
    const totalPages = Math.max(1, Math.ceil(filteredNews.length / pageSize));
    if (page > totalPages) setPage(totalPages);
  }, [filteredNews, pageSize]);

  // Pagination calculations
  const total = filteredNews.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const startIndex = (page - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, total);
  const pagedItems = filteredNews.slice(startIndex, endIndex);

  // Build a compact list of page numbers to render
  const pageNumbers = [];
  const maxButtons = 7; // max page buttons to show
  let startPage = Math.max(1, page - Math.floor(maxButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);
  if (endPage - startPage + 1 < maxButtons)
    startPage = Math.max(1, endPage - maxButtons + 1);
  for (let p = startPage; p <= endPage; p++) pageNumbers.push(p);

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
              {categoriesLoading
                ? [1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className="w-20 h-8 bg-slate-200 rounded-full animate-pulse"
                    />
                  ))
                : categories.map((cat) => (
                    <button
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
                    </button>
                  ))}
            </div>
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
            <Loading
              variant="skeleton-list"
              count={pageSize}
              text="Loading news..."
            />
          ) : error ? (
            <div className="text-center p-8">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          ) : (
            <>
              <div className="space-y-5">
                {pagedItems.map((item) => (
                  <NewsCard key={item.id || item._id} item={item} />
                ))}

                {/* Empty state if nothing matches filter */}
                {total === 0 && (
                  <p className="text-sm text-slate-500">
                    No articles found for this filter.
                  </p>
                )}
              </div>

              {total > 0 && (
                <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-sm text-slate-500">
                    Showing {total === 0 ? 0 : startIndex + 1}–{endIndex} of{" "}
                    {total}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      className={`px-3 py-1 rounded ${
                        page === 1 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={page === 1}
                    >
                      Prev
                    </button>

                    {pageNumbers.map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPage(p)}
                        className={`px-3 py-1 rounded ${
                          p === page
                            ? "bg-slate-900 text-white"
                            : "bg-white border border-slate-200 text-slate-600"
                        }`}
                      >
                        {p}
                      </button>
                    ))}

                    <button
                      type="button"
                      onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                      }
                      className={`px-3 py-1 rounded ${
                        page === totalPages
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      disabled={page === totalPages}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
