/** Sidebar component */
function FilterPanel({
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
}) {
  return (
    <div className="rounded-2xl border border-gray-200 p-5 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">Filters</h3>
        <button
          onClick={resetFilters}
          className="text-sm text-blue-600 hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Type */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Type</p>
        <div className="space-y-2">
          {ALL_TYPES.map((t) => (
            <label key={t} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={types.includes(t)}
                onChange={() => toggleType(t)}
                className="rounded border-gray-300"
              />
              <span className="text-sm text-gray-700">{t}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Wattage */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Wattage (min / max)
        </p>
        <div className="flex items-center gap-3">
          <input
            type="number"
            value={wattMin}
            onChange={(e) => setWattMin(Number(e.target.value))}
            className="w-24 rounded-lg border border-gray-300 px-2 py-1.5"
          />
          <span>—</span>
          <input
            type="number"
            value={wattMax}
            onChange={(e) => setWattMax(Number(e.target.value))}
            className="w-24 rounded-lg border border-gray-300 px-2 py-1.5"
          />
        </div>
      </div>

      {/* Efficiency */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Min efficiency (%)
        </p>
        <input
          type="number"
          value={effMin}
          onChange={(e) => setEffMin(Number(e.target.value))}
          className="w-28 rounded-lg border border-gray-300 px-2 py-1.5"
        />
      </div>

      {/* Warranty */}
      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">
          Min warranty (years)
        </p>
        <input
          type="number"
          value={warMin}
          onChange={(e) => setWarMin(Number(e.target.value))}
          className="w-28 rounded-lg border border-gray-300 px-2 py-1.5"
        />
      </div>
    </div>
  );
}

export default FilterPanel;
