import { Link } from "react-router-dom";
import {
  UserCheck,
  Eye,
  Loader2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import {
  LoginLogoutDemo,
  PasswordToggleDemo,
  LoadingDataDemo
} from "./InteractiveDemos";

export default function ExampleCard({ example }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "UserCheck":
        return <UserCheck size={22} className="text-emerald-600" />;
      case "Eye":
        return <Eye size={22} className="text-blue-600" />;
      case "Loader2":
        return <Loader2 size={22} className="text-purple-600" />;
      default:
        return <Sparkles size={22} className="text-indigo-600" />;
    }
  };

  const renderInteractiveWidget = (id) => {
    switch (id) {
      case "login-logout":
        return <LoginLogoutDemo compact={true} />;
      case "show-hide-password":
        return <PasswordToggleDemo compact={true} />;
      case "loading-data":
        return <LoadingDataDemo compact={true} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden text-left group">
      <div className="p-6 sm:p-7">
        {/* Top Header: Icon & Difficulty Label */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
            {getIcon(example.iconName)}
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${example.badgeColor}`}
            >
              {example.difficulty}
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <span className="text-[11px] font-semibold uppercase tracking-wider text-indigo-600 font-mono">
          {example.method}
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2 group-hover:text-indigo-600 transition-colors">
          {example.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {example.description}
        </p>

        {/* Working Interactive Demo inside the Card */}
        <div className="mb-2">
          {renderInteractiveWidget(example.id)}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">
          Full code & walkthrough available
        </span>

        <Link
          to={`/examples/${example.id}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm transition-all duration-150 group/btn"
        >
          <span>View Example</span>
          <ArrowRight
            size={15}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </div>
  );
}
