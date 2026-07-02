import { useState } from "react";

// components/PlayerPicker.jsx
export default function PlayerPicker({ open, candidates, onPick, onClose }) {
  if (!open) return null;
  const [query,setQuery] = useState([]);
  const filtered = candidates.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-xl bg-white p-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-3 text-sm font-semibold text-gray-800">Add player</h2>
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search squad..."
          className="mb-3 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
        />
        <ul className="max-h-64 overflow-y-auto">
          {filtered.length === 0 && (
            <li className="py-6 text-center text-sm text-gray-400">
              No players found
            </li>
          )}
          {filtered.map((p) => (
            <li key={p.id}>
              <button
                onClick={() => {
                  onPick(p);
                  setQuery("");
                }}
                className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left
                           hover:bg-emerald-50"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-700">
                  {p.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <span className="text-sm text-gray-700">{p.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
