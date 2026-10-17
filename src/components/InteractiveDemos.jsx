import { useState } from "react";
import {UserCheck,UserX,Eye,EyeOff,Loader2,RefreshCw,Sparkles,KeyRound} from "lucide-react";


export function LoginLogoutDemo({ compact = false }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-full bg-slate-50/80 rounded-xl p-4 sm:p-5 border border-slate-200">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Live Interactive Demo
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-mono font-medium ${
            isLoggedIn
              ? "bg-emerald-100 text-emerald-800"
              : "bg-slate-200 text-slate-700"
          }`}
        >
          isLoggedIn: {isLoggedIn ? "true" : "false"}
        </span>
      </div>

      {/* Conditional Rendering: Ternary Operator */}
      {isLoggedIn ? (
        <div className="bg-white rounded-xl p-4 border border-emerald-200 shadow-2xs space-y-3 animate-in fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <UserCheck size={20} />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                Welcome back, Farman Khan
              </h4>
              <p className="text-xs text-slate-500">
                alex.dev@reactlearn.com • Member ID: #4092
              </p>
            </div>
          </div>

          {!compact && (
            <div className="bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100 text-xs text-emerald-800 text-left">
            <strong>Private Dashboard unlocked:</strong> You can now view your lessons, certificates, and interactive code snippets.
            </div>
          )}

          <div className="pt-1 flex justify-end">
            <button
              onClick={() => setIsLoggedIn(false)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold transition-colors"
            >
              <UserX size={14} />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3 animate-in fade-in">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
              <UserX size={20} />
            </div>
            <div className="text-left">
              <h4 className="text-sm sm:text-base font-bold text-slate-800">
                Please Log In 
              </h4>
              <p className="text-xs text-slate-500">
                You are currently browsing as a guest learner.
              </p>
            </div>
          </div>

          {!compact && (
            <p className="text-xs text-slate-500 text-left">
              Click the button below to simulate logging in and triggering a React re-render.
            </p>
          )}

          <div className="pt-1 flex justify-end">
            <button
              onClick={() => setIsLoggedIn(true)}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <UserCheck size={14} />
              <span>Log In</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 2. Show & Hide Password Interactive Demo
 */
export function PasswordToggleDemo({ _compact = false } = {}) {
  const [password, setPassword] = useState("ReactRules2026!");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full bg-slate-50/80 rounded-xl p-4 sm:p-5 border border-slate-200">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-mono font-medium ${
            showPassword
              ? "bg-blue-100 text-blue-800"
              : "bg-slate-200 text-slate-700"
          }`}
        >
          type: "{showPassword ? "text" : "password"}"
        </span>
      </div>

      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs space-y-3 text-left">
        <div>
          <label
            htmlFor="password-field"
            className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5"
          >
            <KeyRound size={13} className="text-indigo-600" />
            Secret Key / Password
          </label>
          <div className="relative flex items-center">
            {/* Conditional input type */}
            <input
              id="password-field"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pr-24 pl-3 py-2 rounded-lg border border-slate-300 font-mono text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="Enter password"
            />

            {/* Toggle Button with Conditional Icons & Label */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <>
                  <EyeOff size={14} className="text-slate-600" />
                  <span>Hide</span>
                </>
              ) : (
                <>
                  <Eye size={14} className="text-slate-600" />
                  <span>Show</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. Loading State & Data Display Interactive Demo
 */
export function LoadingDataDemo({ compact = false }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchUserData = () => {
    setIsLoading(true);
    setData(null);

    // Simulate 1.2s API network delay
    setTimeout(() => {
      setData({
        name: "Sarah Chen",
        role: "Senior Frontend Engineer",
        skills: ["React", "JavaScript", "Tailwind CSS"],
        joinedYear: 2024,
        avatarInitials: "SC"
      });
      setIsLoading(false);
    }, 1200);
  };

  const handleReset = () => {
    setData(null);
    setIsLoading(false);
  };

  return (
    <div className="w-full bg-slate-50/80 rounded-xl p-4 sm:p-5 border border-slate-200">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/80">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Live Interactive Demo
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-mono font-medium ${
            isLoading
              ? "bg-amber-100 text-amber-800"
              : data
              ? "bg-purple-100 text-purple-800"
              : "bg-slate-200 text-slate-700"
          }`}
        >
          {isLoading ? "status: 'loading'" : data ? "status: 'loaded'" : "status: 'idle'"}
        </span>
      </div>

      {/* State 1: If loading, show spinner */}
      {isLoading ? (
        <div className="bg-white rounded-xl p-6 border border-amber-200 shadow-2xs text-center space-y-3 min-h-[140px] flex flex-col items-center justify-center">
          <Loader2 size={28} className="text-amber-500 animate-spin" />
          <div>
            <h4 className="text-sm font-bold text-slate-800">
              Fetching User Profile...
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Simulating asynchronous API delay (1.2s)
            </p>
          </div>
        </div>
      ) : data ? (
        /* State 2: If data loaded, show user card */
        <div className="bg-white rounded-xl p-4 border border-purple-200 shadow-2xs space-y-3 text-left animate-in fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center shrink-0">
                {data.avatarInitials}
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 leading-tight">
                  {data.name}
                </h4>
                <p className="text-xs text-slate-500">
                  {data.role} • Joined {data.joinedYear}
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              type="button"
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              title="Reset to idle state"
            >
              <RefreshCw size={15} />
            </button>
          </div>

          <div className="pt-1">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              Verified Tech Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-200 text-xs font-mono font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {!compact && (
            <p className="text-xs text-slate-500 pt-1 border-t border-slate-100">
              💡 Asynchronous data loaded into state, triggering the success view.
            </p>
          )}
        </div>
      ) : (
        /* State 3: Fallback idle state */
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs text-center space-y-3 min-h-[140px] flex flex-col items-center justify-center">
          <p className="text-xs text-slate-600">
            {compact
              ? "Click below to simulate an asynchronous API request."
              : "No profile data loaded yet. Click the button below to simulate fetching data from an API."}
          </p>
          <button
            onClick={fetchUserData}
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <Sparkles size={14} />
            <span>Fetch User Profile</span>
          </button>
        </div>
      )}
    </div>
  );
}
