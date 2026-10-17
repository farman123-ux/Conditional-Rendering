import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Sparkles, CheckCircle, XCircle, ToggleLeft, ToggleRight } from "lucide-react";

export default function Hero() {
  const [demoCondition, setDemoCondition] = useState(true);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 pt-10 pb-5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-20 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Master{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-sky-600 bg-clip-text text-transparent">
              Conditional Rendering
            </span>{" "}
            in React
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Learn how to display different UI elements based on conditions in React.
            Understand the logic, explore simple examples, and see how conditional
            rendering works in real applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/learn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium text-sm sm:text-base shadow-sm shadow-indigo-300/50 hover:shadow-indigo-300 transition-all duration-150 group"
            >
              <BookOpen size={18} />
              <span>Start Learning</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              to="/examples"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-medium text-sm sm:text-base border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-150"
            >
              <Sparkles size={18} className="text-indigo-600" />
              <span>Explore Examples</span>
            </Link>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600">
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs font-mono font-medium text-slate-700">
              React.js
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs font-mono font-medium text-slate-700">
              JavaScript
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs font-mono font-medium text-slate-700">
              Hooks
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs font-mono font-medium text-slate-700">
              Props
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 shadow-2xs font-mono font-medium text-slate-700">
              React Router
            </span>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-4 gap-3">
            <div className="text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                Visual Logic Diagram
              </span>
              <h2 className="text-base sm:text-lg font-bold text-slate-800">
                Condition → True / False → UI Output
              </h2>
            </div>

            <button
              onClick={() => setDemoCondition(!demoCondition)}
              type="button"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100/80 text-indigo-700 border border-indigo-200 text-xs font-medium transition-all"
            >
              {demoCondition ? (
                <ToggleRight size={18} className="text-indigo-600" />
              ) : (
                <ToggleLeft size={18} className="text-slate-400" />
              )}
              <span>
                Toggle Condition:{" "}
                <strong className={demoCondition ? "text-emerald-700 font-mono" : "text-rose-700 font-mono"}>
                  {demoCondition ? "true" : "false"}
                </strong>
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center pt-6 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col items-center">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                1. Condition
              </span>
              <div className="font-mono text-sm font-semibold text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 w-full">
                isLoggedIn = {demoCondition ? "true" : "false"}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col items-center">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                2. Evaluation
              </span>
              <div
                className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg border text-sm font-semibold w-full transition-colors duration-200 ${
                  demoCondition
                    ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                    : "bg-rose-50 text-rose-800 border-rose-300"
                }`}
              >
                {demoCondition ? (
                  <>
                    <CheckCircle size={16} className="text-emerald-600" />
                    <span>Evaluates to TRUE</span>
                  </>
                ) : (
                  <>
                    <XCircle size={16} className="text-rose-600" />
                    <span>Evaluates to FALSE</span>
                  </>
                )}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col items-center">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                3. UI Output
              </span>
              <div
                className={`px-3 py-1.5 rounded-lg border text-sm font-medium w-full transition-all duration-200 shadow-2xs ${
                  demoCondition
                    ? "bg-emerald-600 text-white border-emerald-700"
                    : "bg-slate-800 text-slate-100 border-slate-900"
                }`}
              >
                {demoCondition ? " <WelcomeDashboard />" : " <LoginPrompt />"}
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500 text-center">
            Click the toggle button above to see how changing the boolean condition instantly swaps the rendered UI element!
          </p>
        </div>
      </div>
    </section>
  );
}
