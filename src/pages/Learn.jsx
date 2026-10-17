import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Lightbulb
} from "lucide-react";
import Definition from "../components/Definition";
import Workflow from "../components/Workflow";
import LearningCards from "../components/LearningCards";

export default function Learn() {
  const [selectedScenario, setSelectedScenario] = useState("binary");

  const scenarios = {
    binary: {
      question: "I want to show either Component A OR Component B inside my JSX markup.",
      recommended: "Ternary Operator (? :)",
      reason: "The ternary operator is the standard way to return one of two alternate JSX trees inside JSX curly braces.",
      snippet: "{isLoggedIn ? <Dashboard /> : <LoginForm />}"
    },
    optional: {
      question: "I want to display a badge or warning banner only when a condition is met, and render nothing otherwise.",
      recommended: "Logical AND (&&)",
      reason: "Logical AND does not require an 'else' branch; if the condition is falsy, React displays nothing.",
      snippet: "{unreadCount > 0 && <Badge count={unreadCount} />}"
    },
    earlyReturn: {
      question: "My component needs to show an error screen or loading spinner and stop rendering anything else.",
      recommended: "if/else Statement (Early Return)",
      reason: "Early returns keep your main component code clean, readable, and free of deeply nested JSX conditionals.",
      snippet: "if (hasError) return <ErrorScreen />;\n// Main component JSX follows..."
    },
    interactive: {
      question: "The displayed content needs to change in response to a user clicking a button, checkbox, or switch.",
      recommended: "State-Driven Rendering (useState)",
      reason: "Storing conditions in useState guarantees that React re-renders the component whenever the user interacts.",
      snippet: "const [isOpen, setIsOpen] = useState(false);\n// onClick={() => setIsOpen(!isOpen)}"
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-indigo-50/70 to-white py-12 sm:py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Learning Conditional Rendering
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Master the concepts, logic flow, and coding patterns behind conditional rendering in modern React.js.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Core Definition */}
      <Definition />

      {/* 2. Step by Step Workflow */}
      <Workflow />

      {/* 3. The 4 Methods */}
      <LearningCards />

      {/* 4. Interactive "Which Method Should I Use?" Guide */}
      <section id="decision-helper" className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
  
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Which Method Should You Choose?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Select your use case below to see the recommended React conditional rendering approach.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs text-left">
            {/* Scenario buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              <button
                onClick={() => setSelectedScenario("binary")}
                type="button"
                className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center ${
                  selectedScenario === "binary"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Either / Or Choice
              </button>
              <button
                onClick={() => setSelectedScenario("optional")}
                type="button"
                className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center ${
                  selectedScenario === "optional"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Show or Nothing
              </button>
              <button
                onClick={() => setSelectedScenario("earlyReturn")}
                type="button"
                className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center ${
                  selectedScenario === "earlyReturn"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Early Return / Error
              </button>
              <button
                onClick={() => setSelectedScenario("interactive")}
                type="button"
                className={`p-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center ${
                  selectedScenario === "interactive"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                User Click / Toggle
              </button>
            </div>

            {/* Recommendation Box */}
            <div className="bg-indigo-50/60 rounded-xl p-6 border border-indigo-200/80 space-y-4">
              <div className="flex items-center gap-2 text-indigo-700 font-semibold text-xs uppercase tracking-wider">
                <Lightbulb size={16} />
                <span>Recommended Approach</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {scenarios[selectedScenario].recommended}
                </h3>
                <span className="text-xs bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full font-medium inline-block w-fit">
                  Optimal Choice
                </span>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                {scenarios[selectedScenario].reason}
              </p>

              <div className="bg-slate-900 text-slate-200 p-3.5 rounded-lg font-mono text-xs overflow-x-auto">
                <pre>{scenarios[selectedScenario].snippet}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Call to Action to Examples */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Ready to see full interactive applications?
          </h3>
          <p className="text-slate-600 text-sm">
            Put your learning into action with our 3 hands-on practical examples.
          </p>
          <div>
            <Link
              to="/examples"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-sm transition-all"
            >
              <span>Explore All Examples</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
