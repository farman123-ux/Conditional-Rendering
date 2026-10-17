import { Link } from "react-router-dom";
import { Code2, Heart, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                <Code2 size={18} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                React Learn
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A simple place to understand React concepts through practical examples.
              Designed specifically for beginners learning conditional rendering.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-slate-500">
              <span>Made with</span>
              <Heart size={14} className="text-rose-500 fill-rose-500 inline" />
              <span>for curious React learners</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/learn"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  to="/examples"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-sky-400 border border-slate-700/60 font-mono">
                React.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 border border-slate-700/60 font-mono">
                JavaScript ES6+
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-teal-300 border border-slate-700/60 font-mono">
                Tailwind CSS
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-indigo-300 border border-slate-700/60 font-mono">
                React Router v7
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-purple-300 border border-slate-700/60 font-mono">
                Lucide Icons
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 React Learn. Built for learners.</p>
          <div className="flex items-center gap-4">
            <Link to="/learn" className="hover:text-slate-400 transition-colors">
              Core Methods
            </Link>
            <span>•</span>
            <Link to="/examples" className="hover:text-slate-400 transition-colors">
              Live Demos
            </Link>
            <span>•</span>
            <a
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-400 transition-colors inline-flex items-center gap-1"
            >
              React Docs <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
