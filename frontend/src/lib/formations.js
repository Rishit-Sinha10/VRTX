// lib/formations.js
// Each formation is a flat list of slots. `top` and `left` are percentages
// so the pitch scales responsively at any container size.
export const FORMATIONS = {
  "4-3-3": {
    id: "4-3-3",
    name: "4-3-3",
    slots: [
      // Forwards
      { id: "lw", role: "FWD", label: "LW", top: 10, left: 22 },
      { id: "st", role: "FWD", label: "ST", top: 10, left: 50 },
      { id: "rw", role: "FWD", label: "RW", top: 10, left: 78 },
      // Midfielders
      { id: "lcm", role: "MID", label: "LCM", top: 35, left: 22 },
      { id: "cm", role: "MID", label: "CM", top: 35, left: 50 },
      { id: "rcm", role: "MID", label: "RCM", top: 35, left: 78 },
      // Defenders
      { id: "lb", role: "DEF", label: "LB", top: 60, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 60, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 60, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 60, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-4-2": {
    id: "4-4-2",
    name: "4-4-2",
    slots: [
      { id: "st1", role: "FWD", label: "ST", top: 12, left: 38 },
      { id: "st2", role: "FWD", label: "ST", top: 12, left: 62 },
      { id: "lm", role: "MID", label: "LM", top: 40, left: 12 },
      { id: "lcm", role: "MID", label: "LCM", top: 40, left: 38 },
      { id: "rcm", role: "MID", label: "RCM", top: 40, left: 62 },
      { id: "rm", role: "MID", label: "RM", top: 40, left: 88 },
      { id: "lb", role: "DEF", label: "LB", top: 65, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 65, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 65, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 65, left: 88 },
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-2-3-1": {
    id: "4-2-3-1",
    name: "4-2-3-1",
    slots: [
      // Striker
      { id: "st", role: "FWD", label: "ST", top: 10, left: 50 },
      // Attacking midfield three
      { id: "lw", role: "MID", label: "LW", top: 28, left: 18 },
      { id: "cam", role: "MID", label: "CAM", top: 28, left: 50 },
      { id: "rw", role: "MID", label: "RW", top: 28, left: 82 },
      // Double pivot
      { id: "ldm", role: "MID", label: "CDM", top: 48, left: 35 },
      { id: "rdm", role: "MID", label: "CDM", top: 48, left: 65 },
      // Back four
      { id: "lb", role: "DEF", label: "LB", top: 68, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 68, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 68, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 68, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-2-1-3": {
    id: "4-2-1-3",
    name: "4-2-1-3",
    slots: [
      // Striker
      { id: "lw", role: "FWD", label: "ST", top: 10, left: 50 },
      // Attacking midfield three
      { id: "st", role: "MID", label: "LW", top: 10, left: 18 },
      { id: "rw", role: "MID", label: "CAM", top: 28, left: 50 },
      { id: "cam", role: "MID", label: "RW", top: 10, left: 82 },
      // Double pivot
      { id: "ldm", role: "MID", label: "CDM", top: 46, left: 35 },
      { id: "rdm", role: "MID", label: "CDM", top: 46, left: 65 },
      // Back four
      { id: "lb", role: "DEF", label: "LB", top: 68, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 68, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 68, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 68, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-3-3A": {
    id: "4-3-3-A",
    name: "4-3-3-A",
    slots: [
      // Forwards
      { id: "lw", role: "FWD", label: "LW", top: 10, left: 18 },
      { id: "st", role: "FWD", label: "ST", top: 10, left: 50 },
      { id: "rw", role: "FWD", label: "RW", top: 10, left: 82 },
      // Midfielders
      { id: "lcm", role: "MID", label: "LCM", top: 35, left: 22 },
      { id: "cm", role: "MID", label: "CAM", top: 25, left: 50 },
      { id: "rcm", role: "MID", label: "RCM", top: 35, left: 78 },
      // Defenders
      { id: "lb", role: "DEF", label: "LB", top: 60, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 60, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 60, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 60, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-3-3H": {
    id: "4-3-3-H",
    name: "4-3-3-H",
    slots: [
      // Forwards
      { id: "lw", role: "FWD", label: "LW", top: 10, left: 18 },
      { id: "st", role: "FWD", label: "ST", top: 10, left: 50 },
      { id: "rw", role: "FWD", label: "RW", top: 10, left: 82 },
      // Midfielders
      { id: "lcm", role: "MID", label: "LCM", top: 34, left: 30 },
      { id: "cm", role: "MID", label: "CDM", top: 44, left: 50 },
      { id: "rcm", role: "MID", label: "RCM", top: 34, left: 70 },
      // Defenders
      { id: "lb", role: "DEF", label: "LB", top: 60, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 60, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 60, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 60, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-5-1": {
    id: "4-5-1",
    name: "4-5-1",
    slots: [
      // Forwards
      { id: "st1", role: "FWD", label: "ST", top: 10, left: 50 },
      { id: "st2", role: "FWD", label: "CAM", top: 25, left: 50 },
      { id: "lm", role: "MID", label: "LM", top: 40, left: 12 },
      { id: "lcm", role: "MID", label: "LCM", top: 40, left: 38 },
      { id: "rcm", role: "MID", label: "RCM", top: 40, left: 62 },
      { id: "rm", role: "MID", label: "RM", top: 40, left: 88 },
      // Defenders
      { id: "lb", role: "DEF", label: "LB", top: 60, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 60, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 60, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 60, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "3-5-2": {
    id: "3-5-2",
    name: "3-5-2",
    slots: [
      // Forwards
      { id: "st1", role: "FWD", label: "ST", top: 12, left: 40 },
      { id: "st2", role: "FWD", label: "ST", top: 12, left: 60 },
      // Midfielders
      { id: "lwb", role: "MID", label: "LWB", top: 45, left: 10 },
      { id: "lcm", role: "MID", label: "LCM", top: 40, left: 32 },
      { id: "cm", role: "MID", label: "CM", top: 44, left: 50 },
      { id: "rcm", role: "MID", label: "RCM", top: 40, left: 68 },
      { id: "rwb", role: "MID", label: "RWB", top: 45, left: 90 },
      // Defenders
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 30 },
      { id: "cb", role: "DEF", label: "CB", top: 64, left: 50 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 70 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "3-4-3": {
    id: "3-4-3",
    name: "3-4-3",
    slots: [
      // Forwards
      { id: "lw", role: "FWD", label: "LW", top: 12, left: 22 },
      { id: "st", role: "FWD", label: "ST", top: 10, left: 50 },
      { id: "rw", role: "FWD", label: "RW", top: 12, left: 78 },
      // Midfielders
      { id: "lm", role: "MID", label: "LM", top: 42, left: 12 },
      { id: "lcm", role: "MID", label: "LCM", top: 40, left: 38 },
      { id: "rcm", role: "MID", label: "RCM", top: 40, left: 62 },
      { id: "rm", role: "MID", label: "RM", top: 42, left: 88 },
      // Defenders
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 30 },
      { id: "cb", role: "DEF", label: "CB", top: 64, left: 50 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 70 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "5-3-2": {
    id: "5-3-2",
    name: "5-3-2",
    slots: [
      // Forwards
      { id: "st1", role: "FWD", label: "ST", top: 12, left: 40 },
      { id: "st2", role: "FWD", label: "ST", top: 12, left: 60 },
      // Midfielders
      { id: "lcm", role: "MID", label: "LCM", top: 38, left: 30 },
      { id: "cm", role: "MID", label: "CM", top: 36, left: 50 },
      { id: "rcm", role: "MID", label: "RCM", top: 38, left: 70 },
      // Defenders
      { id: "lwb", role: "DEF", label: "LWB", top: 58, left: 8 },
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 30 },
      { id: "cb", role: "DEF", label: "CB", top: 64, left: 50 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 70 },
      { id: "rwb", role: "DEF", label: "RWB", top: 58, left: 92 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "5-4-1": {
    id: "5-4-1",
    name: "5-4-1",
    slots: [
      // Forward
      { id: "st", role: "FWD", label: "ST", top: 10, left: 50 },
      // Midfielders
      { id: "lm", role: "MID", label: "LM", top: 40, left: 12 },
      { id: "lcm", role: "MID", label: "LCM", top: 38, left: 38 },
      { id: "rcm", role: "MID", label: "RCM", top: 38, left: 62 },
      { id: "rm", role: "MID", label: "RM", top: 40, left: 88 },
      // Defenders
      { id: "lwb", role: "DEF", label: "LWB", top: 58, left: 8 },
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 30 },
      { id: "cb", role: "DEF", label: "CB", top: 64, left: 50 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 70 },
      { id: "rwb", role: "DEF", label: "RWB", top: 58, left: 92 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-1-4-1": {
    id: "4-1-4-1",
    name: "4-1-4-1",
    slots: [
      // Forward
      { id: "st", role: "FWD", label: "ST", top: 10, left: 50 },
      // Attacking midfield four
      { id: "lm", role: "MID", label: "LM", top: 30, left: 12 },
      { id: "lcm", role: "MID", label: "LCM", top: 28, left: 38 },
      { id: "rcm", role: "MID", label: "RCM", top: 28, left: 62 },
      { id: "rm", role: "MID", label: "RM", top: 30, left: 88 },
      // Single pivot
      { id: "cdm", role: "MID", label: "CDM", top: 50, left: 50 },
      // Back four
      { id: "lb", role: "DEF", label: "LB", top: 68, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 68, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 68, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 68, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-4-1-1": {
    id: "4-4-1-1",
    name: "4-4-1-1",
    slots: [
      // Forwards
      { id: "st", role: "FWD", label: "ST", top: 8, left: 50 },
      { id: "cf", role: "FWD", label: "CF", top: 22, left: 50 },
      // Midfielders
      { id: "lm", role: "MID", label: "LM", top: 40, left: 12 },
      { id: "lcm", role: "MID", label: "LCM", top: 40, left: 38 },
      { id: "rcm", role: "MID", label: "RCM", top: 40, left: 62 },
      { id: "rm", role: "MID", label: "RM", top: 40, left: 88 },
      // Defenders
      { id: "lb", role: "DEF", label: "LB", top: 62, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 62, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-1-2-1-2": {
    id: "4-1-2-1-2",
    name: "4-1-2-1-2",
    slots: [
      // Forwards
      { id: "st1", role: "FWD", label: "ST", top: 8, left: 40 },
      { id: "st2", role: "FWD", label: "ST", top: 8, left: 60 },
      // Attacking mid
      { id: "cam", role: "MID", label: "CAM", top: 22, left: 50 },
      // Central pair
      { id: "lcm", role: "MID", label: "LCM", top: 36, left: 32 },
      { id: "rcm", role: "MID", label: "RCM", top: 36, left: 68 },
      // Single pivot
      { id: "cdm", role: "MID", label: "CDM", top: 50, left: 50 },
      // Back four
      { id: "lb", role: "DEF", label: "LB", top: 62, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 62, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-3-2-1": {
    id: "4-3-2-1",
    name: "4-3-2-1",
    slots: [
      // Forward
      { id: "st", role: "FWD", label: "ST", top: 10, left: 50 },
      // Attacking pair
      { id: "lam", role: "MID", label: "LAM", top: 26, left: 35 },
      { id: "ram", role: "MID", label: "RAM", top: 26, left: 65 },
      // Midfield three
      { id: "lcm", role: "MID", label: "LCM", top: 42, left: 25 },
      { id: "cm", role: "MID", label: "CM", top: 44, left: 50 },
      { id: "rcm", role: "MID", label: "RCM", top: 42, left: 75 },
      // Back four
      { id: "lb", role: "DEF", label: "LB", top: 62, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 62, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "3-4-1-2": {
    id: "3-4-1-2",
    name: "3-4-1-2",
    slots: [
      // Forwards
      { id: "st1", role: "FWD", label: "ST", top: 10, left: 40 },
      { id: "st2", role: "FWD", label: "ST", top: 10, left: 60 },
      // Attacking mid
      { id: "cam", role: "MID", label: "CAM", top: 26, left: 50 },
      // Midfield four
      { id: "lm", role: "MID", label: "LM", top: 44, left: 12 },
      { id: "lcm", role: "MID", label: "LCM", top: 42, left: 38 },
      { id: "rcm", role: "MID", label: "RCM", top: 42, left: 62 },
      { id: "rm", role: "MID", label: "RM", top: 44, left: 88 },
      // Defenders
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 30 },
      { id: "cb", role: "DEF", label: "CB", top: 64, left: 50 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 70 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "3-4-2-1": {
    id: "3-4-2-1",
    name: "3-4-2-1",
    slots: [
      // Forward
      { id: "st", role: "FWD", label: "ST", top: 8, left: 50 },
      // Support strikers
      { id: "lst", role: "FWD", label: "LST", top: 24, left: 35 },
      { id: "rst", role: "FWD", label: "RST", top: 24, left: 65 },
      // Midfield four
      { id: "lm", role: "MID", label: "LM", top: 44, left: 12 },
      { id: "lcm", role: "MID", label: "LCM", top: 42, left: 38 },
      { id: "rcm", role: "MID", label: "RCM", top: 42, left: 62 },
      { id: "rm", role: "MID", label: "RM", top: 44, left: 88 },
      // Defenders
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 30 },
      { id: "cb", role: "DEF", label: "CB", top: 64, left: 50 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 70 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
  "4-1-3-2": {
    id: "4-1-3-2",
    name: "4-1-3-2",
    slots: [
      // Forwards
      { id: "st1", role: "FWD", label: "ST", top: 10, left: 40 },
      { id: "st2", role: "FWD", label: "ST", top: 10, left: 60 },
      // Midfield three
      { id: "lm", role: "MID", label: "LM", top: 30, left: 18 },
      { id: "cm", role: "MID", label: "CM", top: 28, left: 50 },
      { id: "rm", role: "MID", label: "RM", top: 30, left: 82 },
      // Single pivot
      { id: "cdm", role: "MID", label: "CDM", top: 48, left: 50 },
      // Back four
      { id: "lb", role: "DEF", label: "LB", top: 62, left: 12 },
      { id: "lcb", role: "DEF", label: "LCB", top: 62, left: 38 },
      { id: "rcb", role: "DEF", label: "RCB", top: 62, left: 62 },
      { id: "rb", role: "DEF", label: "RB", top: 62, left: 88 },
      // Goalkeeper
      { id: "gk", role: "GK", label: "GK", top: 88, left: 50 },
    ],
  },
};