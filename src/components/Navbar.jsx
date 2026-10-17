import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Code2,
  Search,
  Menu,
  X,
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers,
  AlertTriangle
} from "lucide-react";
import { searchIndex } from "../data/learningData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();

  // Filter search results
  const filteredResults = searchQuery.trim() === ""
    ? []
    : searchIndex.filter((item) => {
        const query = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(query) ||
          item.keywords.toLowerCase().includes(query) ||
          item.type.toLowerCase().includes(query)
        );
      });

  // Close search dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectResult = (path) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setMobileMenuOpen(false);
    navigate(path);
  };

  const navLinkClasses = ({ isActive }) =>
    `px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
      isActive
        ? "text-indigo-600 bg-indigo-50/80 font-semibold"
        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100/70"
    }`;

  const getResultIcon = (type) => {
    switch (type) {
      case "Example":
        return <Sparkles size={14} className="text-amber-500" />;
      case "Method":
        return <Layers size={14} className="text-indigo-500" />;
      case "Mistake":
        return <AlertTriangle size={14} className="text-rose-500" />;
      default:
        return <BookOpen size={14} className="text-sky-500" />;
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-indigo-500/50 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-sm shadow-indigo-200 group-hover:scale-105 transition-transform duration-200">
              <Code2 size={22} className="stroke-[2.2]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-lg leading-tight tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                React Learn
              </span>
              <span className="text-[11px] font-medium tracking-wide text-indigo-600/90 uppercase">
                Conditional Rendering
              </span>
            </div>
          </Link>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <NavLink to="/" end className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/learn" className={navLinkClasses}>
              Learn
            </NavLink>
            <NavLink to="/examples" className={navLinkClasses}>
              Examples
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
          </div>

          {/* Right: Search & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Input Container */}
            <div className="relative" ref={searchContainerRef}>
              <div className="relative flex items-center">
                <Search
                  size={16}
                  className="absolute left-3 text-slate-400 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search concepts, examples..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchOpen(true);
                  }}
                  onFocus={() => setIsSearchOpen(true)}
                  className="w-44 sm:w-64 pl-9 pr-8 py-1.5 text-xs sm:text-sm bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-slate-800 placeholder-slate-400 rounded-full border border-slate-200/90 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-150"
                  aria-label="Search learning content"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchOpen(false);
                    }}
                    type="button"
                    className="absolute right-2.5 text-slate-400 hover:text-slate-600 p-0.5 rounded-full"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Live Search Results Dropdown */}
              {isSearchOpen && searchQuery.trim() !== "" && (
                <div className="absolute right-0 mt-2 w-72 sm:w-96 max-h-96 overflow-y-auto bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-left">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Search Results ({filteredResults.length})
                  </div>

                  {filteredResults.length === 0 ? (
                    <div className="px-4 py-6 text-center text-xs text-slate-500">
                      No matching topics found for "{searchQuery}".
                      <p className="mt-1 text-[11px] text-slate-400">
                        Try searching for "ternary", "password", "loading", or "useState".
                      </p>
                    </div>
                  ) : (
                    <ul className="divide-y divide-slate-100">
                      {filteredResults.map((item, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            onClick={() => handleSelectResult(item.path)}
                            className="w-full px-3 py-2.5 text-left flex items-start gap-2.5 hover:bg-indigo-50/70 transition-colors group"
                          >
                            <span className="mt-0.5 p-1 rounded bg-slate-100 group-hover:bg-indigo-100/80 text-slate-600 transition-colors">
                              {getResultIcon(item.type)}
                            </span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <span className="text-xs font-semibold text-slate-800 group-hover:text-indigo-600 truncate">
                                  {item.title}
                                </span>
                                <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 uppercase tracking-wide">
                                  {item.type}
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {item.keywords}
                              </p>
                            </div>
                            <ExternalLink
                              size={12}
                              className="text-slate-300 group-hover:text-indigo-400 mt-1 shrink-0"
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2 rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 px-4 pt-3 pb-4 space-y-1 shadow-lg">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg text-base font-medium ${
                isActive
                  ? "text-indigo-600 bg-indigo-50 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/learn"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg text-base font-medium ${
                isActive
                  ? "text-indigo-600 bg-indigo-50 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
              }`
            }
          >
            Learn
          </NavLink>
          <NavLink
            to="/examples"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg text-base font-medium ${
                isActive
                  ? "text-indigo-600 bg-indigo-50 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
              }`
            }
          >
            Examples
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-lg text-base font-medium ${
                isActive
                  ? "text-indigo-600 bg-indigo-50 font-semibold"
                  : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
              }`
            }
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
}
