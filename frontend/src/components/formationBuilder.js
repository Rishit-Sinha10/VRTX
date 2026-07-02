// components/FormationBuilder.jsx
"use client";
import { useMemo, useState } from "react";
import { FORMATIONS } from "@/lib/formations";
import PitchLines from "@/components/Pitchlines";
import PlayerSlot from "@/components/playerSlot";
import PlayerPicker from "@/components/player";
import { IoPencil } from "react-icons/io5";
// Replace with a real squad list, e.g. fetched server-side and passed as a prop.
const SQUAD = [
  { id: "p1", name: "Arjun Sharma" },
  { id: "p2", name: "Rahul Verma" },
  { id: "p3", name: "Vikram Singh" },
  { id: "p4", name: "Karan Mehta" },
  { id: "p5", name: "Aditya Rao" },
  { id: "p6", name: "Sanjay Nair" },
];
export default function FormationBuilder() {
  const [formationId, setFormationId] = useState("4-3-3");
  const [lineup, setLineup] = useState({});
  const [activeSlotId, setActiveSlotId] = useState(null);
  const formation = FORMATIONS[formationId];
  const usedPlayerIds = useMemo(
    () => new Set(Object.values(lineup).map((p) => p.id)),
    [lineup],
  );

  function handleSelect(slotId) {
    setActiveSlotId(slotId);
  }

  function handlePick(player) {
    if (!activeSlotId) return;
    setLineup((prev) => ({ ...prev, [activeSlotId]: player }));
    setActiveSlotId(null);
  }

  return (
    <div className="mx-auto w-full max-w-md">
      {/* formation switcher */}
      <div className="mb-3 flex justify-end">
        <div className="flex flex-col gap-1">
          <div className="relative w-fit">
            <input
              id="lineup-name"
              type="text"
              name="lineupName"
              placeholder="Enter Your LineUp Name"
              className="w-80 rounded-md border border-gray-200 bg-white py-2 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lineup}
              onChange={(e) => setLineup(e.target.value)}
              maxLength={40}
            />
            <IoPencil
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              size={18}
            />
          </div>
        </div>
        <select
          value={formationId}
          onChange={(e) => {
            setFormationId(e.target.value);
            setLineup({}); // reset when formation shape changes
          }}
          className="rounded-md border border-gray-200 bg-white px-2 py-1 text-sm text-gray-700"
        >
          {Object.entries(FORMATIONS).map(([key, formation]) => (
            <option key={key} value={key}>
              {formation.name}
            </option>
          ))}
        </select>
      </div>

      {/* pitch */}
      <div
        className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg"
        style={{
          background:
            "linear-gradient(160deg, #0d6b3c 0%, #14934f 55%, #0d6b3c 100%)",
        }}
      >
        <PitchLines />
        {formation.slots.map((slot) => (
          <PlayerSlot
            key={slot.id}
            slot={slot}
            player={lineup[slot.id]}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <PlayerPicker
        open={activeSlotId !== null}
        candidates={SQUAD.filter((p) => !usedPlayerIds.has(p.id))}
        onPick={handlePick}
        onClose={() => setActiveSlotId(null)}
      />
    </div>
  );
}
