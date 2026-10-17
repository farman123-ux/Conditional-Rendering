import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Code2, Lightbulb, Sparkles, Info, ChevronRight, MonitorPlay } from "lucide-react";
import CodeBlock from "../components/CodeBlock";
import { LoginLogoutDemo, PasswordToggleDemo, LoadingDataDemo } from "../components/InteractiveDemos";
import { examplesData } from "../data/examples";

export default function ExampleDetails() {
  const { id } = useParams();
  const example = examplesData.find((item) => item.id === id);

  if (!example) {
    return <Navigate to="/examples" replace />;
  }

  const renderInteractiveDemo = () => {
    switch (example.id) {
      case "login-logout":
        return <LoginLogoutDemo />;
      case "show-hide-password":
        return <PasswordToggleDemo />;
      case "loading-data":
        return <LoadingDataDemo />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-50 py-10 sm:py-14 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Link to="/" className="hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <Link to="/examples" className="hover:text-indigo-600 transition-colors">
              Examples
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-800 font-semibold truncate max-w-[180px] sm:max-w-none">
              {example.shortTitle}
            </span>
          </div>

          <Link
            to="/examples"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs transition-colors shrink-0"
          >
            <ArrowLeft size={15} />
            <span>Back to Examples</span>
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-xs mb-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${example.badgeColor}`}
            >
              {example.difficulty}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 font-mono">
              {example.method}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            {example.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            {example.description}
          </p>

          <div className="mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-indigo-700 font-medium flex items-center gap-2">
            <Lightbulb size={16} />
            <span>{example.conditionExplanation}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <MonitorPlay size={18} className="text-indigo-600" />
                <h2 className="text-base font-bold text-slate-800">
                  Interactive Live Sandbox
                </h2>
              </div>
              <span className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-semibold border border-emerald-200">
                Functional React Component
              </span>
            </div>

            <p className="text-xs text-slate-500">
              Interact with the live widget below to observe how the condition updates and dynamically changes the DOM:
            </p>

            {renderInteractiveDemo()}
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Sparkles size={18} className="text-amber-500" />
              <h2 className="text-base font-bold text-slate-800">
                What You Will Learn
              </h2>
            </div>

            <ul className="space-y-3">
              {example.whatYouWillLearn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2
                    size={16}
                    className="text-emerald-500 shrink-0 mt-0.5"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs mb-8 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Info size={18} className="text-indigo-600" />
            <h2 className="text-base font-bold text-slate-800">
              Expected Output Summary
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                When Condition is True / Active:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {example.expectedOutput.whenTrue}
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-1">
                When Condition is False / Inactive:
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {example.expectedOutput.whenFalse}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs mb-8 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Code2 size={18} className="text-indigo-600" />
              <h2 className="text-base font-bold text-slate-800">
                Complete React Source Code
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-mono">
              React + ES6 + Hooks
            </span>
          </div>

          <p className="text-xs text-slate-500">
            You can copy this complete functional component directly into your own React project to practice:
          </p>

          <CodeBlock code={example.code} title={`${example.id}.jsx`} />
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs mb-8 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <Lightbulb size={18} className="text-indigo-600" />
            <h2 className="text-base font-bold text-slate-800">
              Line-by-Line Explanation for Beginners
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            {example.explanation.map((item, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0 space-y-1.5">
                <code className="text-xs sm:text-sm font-mono font-semibold text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded border border-indigo-100 block w-fit">
                  {item.line}
                </code>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <Link
            to="/examples"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-xs transition-all"
          >
            <ArrowLeft size={16} />
            <span>Back to All Examples</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
