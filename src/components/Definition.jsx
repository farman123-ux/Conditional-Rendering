import { useState } from "react";
import { Lightbulb, Check, Code, Laptop, ToggleLeft, ToggleRight, Info } from "lucide-react";
import CodeBlock from "./CodeBlock";

export default function Definition() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const sampleCode = `function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn ? <h2>Welcome Back!</h2> : <h2>Please Login</h2>}
    </div>
  );
}

export default App;`;

  return (
    <section id="definition" className="py-5 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-5 flex flex-col justify-center items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Is Conditional Rendering?
          </h2>
          <p className="mt-3 text-lg text-slate-600 leading-relaxed">
            Let's break down this fundamental React concept into simple, easy-to-understand terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Code size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                The Definition
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                "Conditional rendering in React means displaying different components
                or UI elements depending on whether a condition is true or false."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-indigo-700 font-medium flex items-center gap-1">
              <Check size={14} /> Fundamental to dynamic apps
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Lightbulb size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Simple Explanation
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                "Just like JavaScript uses if/else statements to make decisions,
                React uses conditional rendering to decide what should appear on the screen."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-sky-700 font-medium flex items-center gap-1">
              <Check size={14} /> JavaScript logic inside JSX
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Laptop size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Real-Life Example
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                A website displays a <strong>Login</strong> button when a user is logged out.
                After the user logs in, the website displays a <strong>Dashboard</strong> button instead.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs text-emerald-700 font-medium flex items-center gap-1">
              <Check size={14} /> User state determines UI
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-200 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Simple Example: Login Greeting
              </h3>
            </div>

            <div className="flex items-center gap-3 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
              <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors"
              >
                {isLoggedIn ? (
                  <ToggleRight size={18} className="text-indigo-600" />
                ) : (
                  <ToggleLeft size={18} className="text-slate-400" />
                )}
                <span>isLoggedIn = {isLoggedIn ? "true" : "false"}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
            <div className="lg:col-span-7">
              <CodeBlock code={sampleCode} title="App.jsx" />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs text-left">
                <div
                  className={`p-6 rounded-xl border transition-all duration-200 text-center ${
                    isLoggedIn
                      ? "bg-emerald-50/80 border-emerald-300 text-emerald-900"
                      : "bg-amber-50/80 border-amber-300 text-amber-900"
                  }`}
                >
                  <h4 className="text-2xl font-bold tracking-tight">
                    {isLoggedIn ? "Welcome Back!" : "Please Login"}
                  </h4>
                  <p className="text-xs mt-1 text-slate-600">
                    Rendered because <code className="font-mono bg-white px-1.5 py-0.5 rounded text-xs border border-slate-200">isLoggedIn</code> is{" "}
                    <strong className={isLoggedIn ? "text-emerald-700" : "text-amber-700"}>
                      {isLoggedIn ? "true" : "false"}
                    </strong>
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-left">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="font-bold text-slate-800 block mb-0.5">
                    Expected Output when <code className="text-emerald-600 font-mono">isLoggedIn = true</code>:
                  </span>
                  <p className="text-slate-600">
                    Displays: <span className="font-semibold text-slate-900">"Welcome Back!"</span>.
                    The expression after the <code className="font-mono">?</code> is evaluated and rendered.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <span className="font-bold text-slate-800 block mb-0.5">
                    Expected Output when <code className="text-amber-600 font-mono">isLoggedIn = false</code>:
                  </span>
                  <p className="text-slate-600">
                    Displays: <span className="font-semibold text-slate-900">"Please Login"</span>.
                    The expression after the <code className="font-mono">:</code> is evaluated and rendered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 text-left">
            <h4 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info size={18} className="text-indigo-600" />
              Line-by-Line Explanation for Beginners
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="font-mono text-xs text-indigo-700 font-semibold mb-1">
                  Line 2: const isLoggedIn = true;
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Defines a JavaScript boolean variable holding the condition. This value dictates which element React will show.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="font-mono text-xs text-indigo-700 font-semibold mb-1">
                  Line 6: {"{isLoggedIn ? ... : ...}"}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Curly braces <code className="font-mono">{"{}"}</code> allow JavaScript expressions inside JSX. The ternary operator checks the boolean condition.
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="font-mono text-xs text-indigo-700 font-semibold mb-1">
                  {"<h2>Welcome Back!</h2> : <h2>Please Login</h2>"}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Left side of <code className="font-mono">:</code> renders if true; right side of <code className="font-mono">:</code> renders if false.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
