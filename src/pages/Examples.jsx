import { useState } from "react";
import { Sparkles, Search, Filter, Layers } from "lucide-react";
import ExampleCard from "../components/ExampleCard";
import { examplesData } from "../data/examples";

export default function Examples() {
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExamples = examplesData.filter((item) => {
    const matchesDifficulty =
      filterDifficulty === "All" || item.difficulty === filterDifficulty;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.method.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDifficulty && matchesSearch;
  });

  return (
    <div className="flex-1 flex flex-col bg-slate-50">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 to-white py-12 sm:py-16 border-b border-slate-200/80 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Interactive Demos</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Practical React Examples
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Experience conditional rendering in realistic real-world scenarios. Each example features an interactive live sandbox and deep-dive code explanation.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Filter size={13} /> Difficulty:
              </span>
              {["All", "Beginner", "Intermediate"].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setFilterDifficulty(diff)}
                  type="button"
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    filterDifficulty === diff
                      ? "bg-indigo-600 text-white shadow-2xs"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full sm:w-72">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter by keyword..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 text-slate-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Examples Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredExamples.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
              <Layers size={32} className="mx-auto text-slate-400 mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">
                No matching examples
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                We couldn't find any example matching "{searchTerm}".
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilterDifficulty("All");
                }}
                className="px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-semibold hover:bg-indigo-100"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredExamples.map((example) => (
                <ExampleCard key={example.id} example={example} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
