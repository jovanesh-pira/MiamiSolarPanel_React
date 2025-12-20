import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Component/Header";
import { PRODUCTS } from "../Alldata/Products";
import FilterPanel from "../Component/SideBar_Fiter";
import Button from "../Component/Button";
// import { FILTER_OPTIONS } from "../Alldata/FilterOption";

/* ---------- Helpers: normalize fields ---------- */
const getType = (p) => p.type || p.tech || p.techType || "Unknown";
const getWattMin = (p) =>
  typeof p.wattMin === "number"
    ? p.wattMin
    : typeof p.watt === "number"
    ? p.watt
    : p.wattage ?? 0;
const getWattMax = (p) =>
  typeof p.wattMax === "number"
    ? p.wattMax
    : typeof p.watt === "number"
    ? p.watt
    : p.wattage ?? 0;
const getWattAvg = (p) => (getWattMin(p) + getWattMax(p)) / 2;
const getEff = (p) =>
  typeof p.efficiency === "number" ? p.efficiency : p.eff ?? 0;
const getWar = (p) =>
  typeof p.warrantyYears === "number" ? p.warrantyYears : p.warranty ?? 0;
const getName = (p) => p.name || p.title || "Unnamed";
const getImage = (p) => p.image || p.gallery?.[0] || "/images/placeholder.jpg";
const getSlug = (p) => p.slug || p.id;

/* Unique types (normalized) */
const ALL_TYPES = Array.from(new Set(PRODUCTS.map((p) => getType(p))))
  .filter(Boolean)
  .sort();
console.log(ALL_TYPES);
export default function Products() {
  // UI state
  const [query, setQuery] = useState("");
  const [types, setTypes] = useState([]); // selected types
  const [wattMin, setWattMin] = useState(380);
  const [wattMax, setWattMax] = useState(800);
  const [effMin, setEffMin] = useState(0);
  const [warMin, setWarMin] = useState(0);
  const [sortBy, setSortBy] = useState("name-asc");
  const [openFilters, setOpenFilters] = useState(false); // mobile drawer

  const filtered = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      // input search text
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        getName(p).toLowerCase().includes(q) ||
        getType(p).toLowerCase().includes(q);

      // type filter (normalized)
      const matchesType = types.length === 0 || types.includes(getType(p));

      // watt filter — overlap of ranges
      const pMin = getWattMin(p);
      const pMax = getWattMax(p);
      const matchesWatt = pMax >= wattMin && pMin <= wattMax;

      // efficiency / warranty (optional)
      const matchesEff = getEff(p) >= effMin;
      const matchesWar = getWar(p) >= warMin;

      return (
        matchesQuery && matchesType && matchesWatt && matchesEff && matchesWar
      );
    });
    console.log(list);
    // sort
    switch (sortBy) {
      case "watt-desc":
        list = list.sort((a, b) => getWattAvg(b) - getWattAvg(a));
        break;
      case "watt-asc":
        list = list.sort((a, b) => getWattAvg(a) - getWattAvg(b));
        break;
      case "eff-desc":
        list = list.sort((a, b) => getEff(b) - getEff(a));
        break;
      case "eff-asc":
        list = list.sort((a, b) => getEff(a) - getEff(b));
        break;
      case "name-desc":
        list = list.sort((a, b) => getName(b).localeCompare(getName(a)));
        break;
      default:
        list = list.sort((a, b) => getName(a).localeCompare(getName(b))); // name-asc
    }
    return list;
  }, [query, types, wattMin, wattMax, effMin, warMin, sortBy]);

  const resetFilters = () => {
    setQuery("");
    setTypes([]);
    setWattMin(380);
    setWattMax(800);
    setEffMin(0);
    setWarMin(0);
    setSortBy("name-asc");
  };

  const toggleType = (t) =>
    setTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
              All Products
            </h1>
            <p className="text-gray-600 mt-2">
              Filter by type, wattage, efficiency, and warranty — then sort your
              results.
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 hover:bg-gray-900"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Controls row (search + sort + filter button for mobile) */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
          <div className="flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or type…"
              className="w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-xl border border-gray-300 px-3 py-2.5"
          >
            <option value="name-asc">Sort: Name A–Z</option>
            <option value="name-desc">Sort: Name Z–A</option>
            <option value="watt-desc">Sort: Watt ↓</option>
            <option value="watt-asc">Sort: Watt ↑</option>
            <option value="eff-desc">Sort: Efficiency ↓</option>
            <option value="eff-asc">Sort: Efficiency ↑</option>
          </select>
          <button
            onClick={() => setOpenFilters(true)}
            className="sm:hidden rounded-xl border border-gray-300 px-4 py-2.5"
          >
            Filters
          </button>
        </div>

        {/* Layout: Sidebar + Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar (desktop) */}
          <aside className="hidden md:block md:col-span-3">
            <FilterPanel
              {...{
                ALL_TYPES,
                types,
                toggleType,
                wattMin,
                setWattMin,
                wattMax,
                setWattMax,
                effMin,
                setEffMin,
                warMin,
                setWarMin,
                resetFilters,
              }}
            />
          </aside>

          {/* Grid */}
          <div className="md:col-span-9">
            {filtered.length === 0 ? (
              <p className="text-gray-600">No products match your filters.</p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((p) => (
                  <article
                    key={getSlug(p)}
                    className="flex flex-col rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden bg-white"
                  >
                    <img
                      src={getImage(p)}
                      alt={getName(p)}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />

                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {getName(p)}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {getType(p)} • {getWattMin(p)}–{getWattMax(p)}W
                        {getEff(p) ? ` • ${getEff(p)}%` : ""}
                        {getWar(p) ? ` • ${getWar(p)}-year warranty` : ""}
                      </p>

                      {/* Push button to the bottom */}
                      <div className="mt-auto pt-4">
                        <Button
                          to={`/products/${getSlug(p)}`}
                          size="md"
                          variant="primary_outline"
                          className="w-fit"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter drawer */}
        {openFilters && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpenFilters(false)}
            />
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-2xl p-5 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setOpenFilters(false)}
                  className="rounded-md border px-3 py-1.5"
                >
                  Close
                </button>
              </div>
              <FilterPanel
                {...{
                  ALL_TYPES,
                  types,
                  toggleType,
                  wattMin,
                  setWattMin,
                  wattMax,
                  setWattMax,
                  effMin,
                  setEffMin,
                  warMin,
                  setWarMin,
                  resetFilters,
                }}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
