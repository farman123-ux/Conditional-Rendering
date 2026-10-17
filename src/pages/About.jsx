import { Link } from "react-router-dom";
import {
  Code2,
  CheckCircle2,
  Sparkles,
  Terminal
} from "lucide-react";

export default function About() {
  const principles = [
    {
      title: "Simple, Plain English",
      description:
        "No cryptic computer science jargon. Every concept is explained with relatable analogies, line-by-line breakdowns, and clear definitions."
    },
    {
      title: "Interactive Live Sandboxes",
      description:
        "Seeing code is good; playing with code is better. Every single concept and example features an active, working widget you can test in real time."
    },
    {
      title: "Zero Backend Complexity",
      description:
        "Pure frontend React with clean functional components, standard React Hooks, and idiomatic JavaScript. Nothing gets in the way of learning."
    },
    {
      title: "Common Mistakes Unveiled",
      description:
        "We proactively showcase real bugs developers encounter in production (like assignment vs comparison or 0 with &&) so you avoid them early."
    }
  ];

  return (
    <div className="flex-1 flex flex-col bg-slate-50 text-left">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-indigo-50/70 to-white pt-8 pb-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Empowering Developers to Understand Conditional Rendering
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              React Learn was created to provide a beginner-friendly, clean, and interactive educational resource dedicated entirely to mastering conditional logic in React.js.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <Code2 size={20} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Why Focus on Conditional Rendering?
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
            In modern frontend engineering, almost every meaningful user experience relies on condition-based logic:
            loading spinners while data loads, switching between login and profile cards, showing badges when notifications arrive, and toggling password visibility.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            By mastering the four primary techniques—<strong>if/else statements</strong>, the <strong>ternary operator</strong>, <strong>logical AND (&&)</strong>, and <strong>state-driven hooks</strong>—beginners gain the core confidence needed to construct production-ready React interfaces.
          </p>
        </div>

        {/* Educational Principles */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Our Learning Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 size={18} className="text-emerald-500" />
                    <h3 className="text-base font-bold text-slate-900">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Summary */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Terminal size={20} className="text-indigo-600" />
            Built With Modern Best Practices
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            This educational platform runs on lightweight modern tooling:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-indigo-600 block mb-1">
                React 19
              </span>
              <p className="text-xs text-slate-500">Component architecture</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-indigo-600 block mb-1">
                Tailwind CSS
              </span>
              <p className="text-xs text-slate-500">Responsive utilities</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-indigo-600 block mb-1">
                React Router v7
              </span>
              <p className="text-xs text-slate-500">Client-side routing</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-indigo-600 block mb-1">
                Lucide React
              </span>
              <p className="text-xs text-slate-500">Accessible icons</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-sky-600 rounded-2xl p-8 sm:p-10 text-white text-center space-y-4 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Start Learning Conditional Rendering Today
          </h3>
          <p className="text-indigo-100 text-sm sm:text-base max-w-xl mx-auto">
            Explore step-by-step guides, interactive flowcharts, and working code examples.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/learn"
              className="px-6 py-2.5 rounded-xl bg-white text-indigo-700 font-semibold text-sm hover:bg-slate-100 transition-colors shadow-xs"
            >
              Go to Learning Guide
            </Link>
            <Link
              to="/examples"
              className="px-6 py-2.5 rounded-xl bg-indigo-700/60 hover:bg-indigo-700 text-white font-semibold text-sm border border-indigo-400/40 transition-colors"
            >
              Explore Practical Examples
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
