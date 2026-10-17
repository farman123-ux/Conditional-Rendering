import { useState } from "react";
import { ChevronDown, ChevronUp, Play, RotateCcw } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { methodsData } from "../data/learningData";

export default function LearningCards() {
  const [expandedId, setExpandedId] = useState(null);

  const [demoState1, setDemoState1] = useState(true);
  const [demoState2, setDemoState2] = useState(true);
  const [demoState3, setDemoState3] = useState(true);
  const [demoState4, setDemoState4] = useState(false);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="methods" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            4 Conditional Rendering Methods
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Explore the four essential ways to conditionally render JSX elements in React, from fundamental if/else branches to reactive state hooks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {methodsData.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 sm:p-7 text-left">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          {item.tag}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {item.shortDescription}
                  </p>

                  <CodeBlock code={item.code} title={`${item.id}.jsx`} />
                </div>

                <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-mono">
                    {item.keyTakeaway.slice(0, 48)}...
                  </span>

                  <button
                    onClick={() => toggleExpand(item.id)}
                    type="button"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-indigo-50 text-indigo-700 border border-slate-200 hover:border-indigo-300 shadow-2xs transition-all duration-150"
                  >
                    <span>{isExpanded ? "Hide Details" : "Learn More"}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                {isExpanded && (
                  <div className="p-6 bg-slate-50/50 border-t border-slate-200 space-y-5 text-left animate-in fade-in duration-200">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        In-Depth Explanation
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {item.fullDescription}
                      </p>
                    </div>

                    {item.id === "use-state" && (
                      <div className="bg-white p-4 rounded-xl border border-amber-200/80 text-xs text-slate-700 space-y-2">
                        <div className="font-semibold text-amber-800 text-sm">
                          Understanding the useState Anatomy:
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-slate-600">
                          <li>
                            <strong className="text-slate-800">Initial Value:</strong>{" "}
                            <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">useState(false)</code> starts with the message hidden.
                          </li>
                          <li>
                            <strong className="text-slate-800">State Variable:</strong>{" "}
                            <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">showMessage</code> holds the current condition.
                          </li>
                          <li>
                            <strong className="text-slate-800">State Updater:</strong>{" "}
                            <code className="font-mono bg-slate-100 px-1 py-0.5 rounded">setShowMessage(!showMessage)</code> flips the boolean.
                          </li>
                          <li>
                            <strong className="text-slate-800">Re-render:</strong> React detects the change and updates the DOM immediately.
                          </li>
                        </ul>
                      </div>
                    )}

                    <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1.5">
                          <Play size={12} className="fill-indigo-600" />
                          Interactive Mini-Playground
                        </span>
                        <span className="text-[11px] text-slate-400 font-mono">
                          Live Component
                        </span>
                      </div>

                      {item.id === "if-else" && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setDemoState1(!demoState1)}
                              type="button"
                              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium"
                            >
                              Toggle isLoggedIn ({demoState1 ? "true" : "false"})
                            </button>
                            <span className="text-xs text-slate-500">
                              Prop passed to &lt;Greeting /&gt;
                            </span>
                          </div>
                          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                            {demoState1 ? (
                              <h4 className="text-base font-bold text-emerald-600">
                                Welcome Back!
                              </h4>
                            ) : (
                              <h4 className="text-base font-bold text-amber-600">
                                Please Login
                              </h4>
                            )}
                          </div>
                        </div>
                      )}

                      {item.id === "ternary" && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setDemoState2(!demoState2)}
                              type="button"
                              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium"
                            >
                              Toggle isLoggedIn ({demoState2 ? "true" : "false"})
                            </button>
                            <span className="text-xs text-slate-500">
                              Inline JSX Ternary Test
                            </span>
                          </div>
                          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                            {demoState2 ? (
                              <h4 className="text-base font-bold text-indigo-600">
                                Welcome!
                              </h4>
                            ) : (
                              <h4 className="text-base font-bold text-slate-600">
                                Please Login
                              </h4>
                            )}
                          </div>
                        </div>
                      )}

                      {item.id === "logical-and" && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setDemoState3(!demoState3)}
                              type="button"
                              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium"
                            >
                              Toggle hasMessage ({demoState3 ? "true" : "false"})
                            </button>
                            <span className="text-xs text-slate-500">
                              Only renders if condition is truthy
                            </span>
                          </div>
                          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center min-h-[46px] flex items-center justify-center">
                            {demoState3 ? (
                              <p className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                                 You have a new message!
                              </p>
                            ) : (
                              <p className="text-xs text-slate-400 italic">
                                (Nothing rendered: React omits false values)
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {item.id === "use-state" && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setDemoState4(!demoState4)}
                              type="button"
                              className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center gap-1.5"
                            >
                              <RotateCcw size={13} />
                              Toggle Message
                            </button>
                            <span className="text-xs font-mono text-slate-600">
                              showMessage: {demoState4 ? "true" : "false"}
                            </span>
                          </div>
                          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-center min-h-[46px] flex items-center justify-center">
                            {demoState4 ? (
                              <p className="text-sm font-semibold text-amber-800 bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
                                 Hello! This message is visible.
                              </p>
                            ) : (
                              <p className="text-xs text-slate-400 italic">
                                Message is currently hidden. Click "Toggle Message" to reveal!
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
