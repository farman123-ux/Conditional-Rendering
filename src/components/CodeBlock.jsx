import { useState } from "react";
import { Check, Copy, Code2 } from "lucide-react";

export default function CodeBlock({ code, language = "jsx", title }) {
  const [copied, setCopied] = useState(false);
  const displayTitle = title || (language === "jsx" ? "Example.jsx" : `snippet.${language}`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const lines = (code || "").trim().split("\n");

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-md my-4 text-left font-mono text-sm">
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/90 border-b border-slate-700/80 text-xs text-slate-300">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-slate-400 font-sans ml-2 flex items-center gap-1.5">
            <Code2 size={13} className="text-indigo-400" />
            {displayTitle}
          </span>
        </div>

        <button
          onClick={handleCopy}
          type="button"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors duration-150 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-400"
          title="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400 font-sans font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span className="font-sans">Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="overflow-x-auto p-4 leading-relaxed text-slate-200">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((lineText, idx) => (
              <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                <td className="pr-4 select-none text-right text-slate-600 text-xs w-8 align-top">
                  {idx + 1}
                </td>
                <td className="whitespace-pre font-mono text-[13px] text-slate-200">
                  {colorizeLine(lineText)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function colorizeLine(line) {
  if (line.trim().startsWith("//") || line.trim().startsWith("/*") || line.trim().startsWith("*")) {
    return <span className="text-emerald-400/90 italic">{line}</span>;
  }

  const parts = line.split(/(\b(?:import|export|default|function|const|let|var|return|if|else|from|true|false|null|undefined)\b|[{}()[\]<>?:;,.=])/g);

  return parts.map((part, i) => {
    if (!part) return null;
    if (["import", "export", "default", "from"].includes(part)) {
      return <span key={i} className="text-purple-400 font-semibold">{part}</span>;
    }
    if (["function", "const", "let", "var", "return"].includes(part)) {
      return <span key={i} className="text-rose-400 font-semibold">{part}</span>;
    }
    if (["if", "else"].includes(part)) {
      return <span key={i} className="text-amber-400 font-semibold">{part}</span>;
    }
    if (["true", "false", "null", "undefined"].includes(part)) {
      return <span key={i} className="text-cyan-400 font-semibold">{part}</span>;
    }
    if (part.startsWith('"') || part.startsWith("'") || part.startsWith("`")) {
      return <span key={i} className="text-amber-200">{part}</span>;
    }
    if (["?", ":"].includes(part)) {
      return <span key={i} className="text-yellow-400 font-bold">{part}</span>;
    }
    if (["&&", "||", "===", "!=="].includes(part)) {
      return <span key={i} className="text-pink-400 font-bold">{part}</span>;
    }
    if (["<", ">", "</", "/>"].includes(part)) {
      return <span key={i} className="text-sky-400">{part}</span>;
    }
    return <span key={i}>{part}</span>;
  });
}
