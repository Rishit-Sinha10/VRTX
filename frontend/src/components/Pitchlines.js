// components/PitchLines.jsx
// Decorative pitch markings, drawn once and layered behind the player slots.
export default function PitchLines() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
    >
      <rect
        x="2"
        y="2"
        width="96"
        height="96"
        fill="none"
        stroke="white"
        strokeWidth="0.3"
      />
      <line x1="2" y1="50" x2="98" y2="50" stroke="white" strokeWidth="0.3" />
      <circle
        cx="50"
        cy="50"
        r="9"
        fill="none"
        stroke="white"
        strokeWidth="0.3"
      />
      <circle cx="50" cy="50" r="0.6" fill="white" />
      <rect
        x="26"
        y="2"
        width="48"
        height="16"
        fill="none"
        stroke="white"
        strokeWidth="0.3"
      />
      <rect
        x="38"
        y="2"
        width="24"
        height="7"
        fill="none"
        stroke="white"
        strokeWidth="0.3"
      />
      <rect
        x="26"
        y="82"
        width="48"
        height="16"
        fill="none"
        stroke="white"
        strokeWidth="0.3"
      />
      <rect
        x="38"
        y="91"
        width="24"
        height="7"
        fill="none"
        stroke="white"
        strokeWidth="0.3"
      />
    </svg>
  );
}
