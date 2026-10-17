import {
  Sliders,
  CheckSquare,
  LayoutTemplate,
  RefreshCw,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { workflowSteps } from "../data/learningData";

export default function Workflow() {
  const getStepIcon = (iconName) => {
    switch (iconName) {
      case "Sliders":
        return <Sliders size={20} className="text-white" />;
      case "CheckSquare":
        return <CheckSquare size={20} className="text-white" />;
      case "LayoutTemplate":
        return <LayoutTemplate size={20} className="text-white" />;
      case "RefreshCw":
        return <RefreshCw size={20} className="text-white" />;
      default:
        return <Sparkles size={20} className="text-white" />;
    }
  };

  return (
    <section id="how-it-works" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How Conditional Rendering Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            React doesn't invent new syntax for conditions. Instead, it harnesses standard JavaScript expressions to dynamically determine which elements to display.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              The 3-Step Lifecycle
            </span>
            <h3 className="text-xl font-bold text-slate-800">
              Condition → Evaluate → Render UI
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex-1 w-full bg-indigo-50/70 border border-indigo-200 rounded-xl p-5 text-center">
              <span className="text-xs font-mono font-bold text-indigo-600 block mb-1">
                STEP A
              </span>
              <h4 className="text-base font-bold text-slate-800">Condition</h4>
              <p className="text-xs text-slate-600 mt-1 font-mono">
                const isMember = true;
              </p>
            </div>

            <ArrowRight size={24} className="text-slate-400 rotate-90 md:rotate-0 shrink-0" />

            <div className="flex-1 w-full bg-purple-50/70 border border-purple-200 rounded-xl p-5 text-center">
              <span className="text-xs font-mono font-bold text-purple-600 block mb-1">
                STEP B
              </span>
              <h4 className="text-base font-bold text-slate-800">Evaluate</h4>
              <p className="text-xs text-slate-600 mt-1 font-mono">
                isMember ? &lt;VIP/&gt; : &lt;Guest/&gt;
              </p>
            </div>

            <ArrowRight size={24} className="text-slate-400 rotate-90 md:rotate-0 shrink-0" />

            <div className="flex-1 w-full bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 text-center">
              <span className="text-xs font-mono font-bold text-emerald-600 block mb-1">
                STEP C
              </span>
              <h4 className="text-base font-bold text-slate-800">Render UI</h4>
              <p className="text-xs text-slate-600 mt-1 font-mono">
                Only &lt;VIP/&gt; is mounted
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {workflowSteps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-200 relative flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-xs mb-4`}
                >
                  {getStepIcon(item.icon)}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Phase 0{item.step}</span>
                <span className="text-indigo-600 font-semibold">Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
