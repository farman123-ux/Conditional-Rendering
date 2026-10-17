import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Hero from "../components/Hero";
import ExampleCard from "../components/ExampleCard";
import { examplesData } from "../data/examples";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Explore Practical Examples Section */}
      <section id="examples-section" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 inline-block mb-3">
                Hands-On Practice
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Explore Practical Examples
              </h2>
              <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl">
                Interact with working implementations of conditional rendering commonly found in modern React web applications.
              </p>
            </div>

            <Link
              to="/examples"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-indigo-600 font-semibold text-sm border border-slate-200 shadow-2xs hover:border-indigo-300 transition-all shrink-0"
            >
              <span>View All 3 Examples</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Exactly 3 large attractive cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examplesData.map((example) => (
              <ExampleCard key={example.id} example={example} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
