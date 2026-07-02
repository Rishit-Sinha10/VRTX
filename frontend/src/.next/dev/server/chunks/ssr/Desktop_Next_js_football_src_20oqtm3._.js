module.exports = [
"[project]/Desktop/Next.js/football/src/lib/formations.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/formations.js
// Each formation is a flat list of slots. `top` and `left` are percentages
// so the pitch scales responsively at any container size.
__turbopack_context__.s([
    "FORMATIONS",
    ()=>FORMATIONS
]);
const FORMATIONS = {
    "4-3-3": {
        id: "4-3-3",
        name: "4-3-3",
        slots: [
            // Forwards
            {
                id: "lw",
                role: "FWD",
                label: "LW",
                top: 10,
                left: 22
            },
            {
                id: "st",
                role: "FWD",
                label: "ST",
                top: 10,
                left: 50
            },
            {
                id: "rw",
                role: "FWD",
                label: "RW",
                top: 10,
                left: 78
            },
            // Midfielders
            {
                id: "lcm",
                role: "MID",
                label: "LCM",
                top: 35,
                left: 22
            },
            {
                id: "cm",
                role: "MID",
                label: "CM",
                top: 35,
                left: 50
            },
            {
                id: "rcm",
                role: "MID",
                label: "RCM",
                top: 35,
                left: 78
            },
            // Defenders
            {
                id: "lb",
                role: "DEF",
                label: "LB",
                top: 60,
                left: 12
            },
            {
                id: "lcb",
                role: "DEF",
                label: "LCB",
                top: 60,
                left: 38
            },
            {
                id: "rcb",
                role: "DEF",
                label: "RCB",
                top: 60,
                left: 62
            },
            {
                id: "rb",
                role: "DEF",
                label: "RB",
                top: 60,
                left: 88
            },
            // Goalkeeper
            {
                id: "gk",
                role: "GK",
                label: "GK",
                top: 88,
                left: 50
            }
        ]
    },
    "4-4-2": {
        id: "4-4-2",
        name: "4-4-2",
        slots: [
            {
                id: "st1",
                role: "FWD",
                label: "ST",
                top: 12,
                left: 38
            },
            {
                id: "st2",
                role: "FWD",
                label: "ST",
                top: 12,
                left: 62
            },
            {
                id: "lm",
                role: "MID",
                label: "LM",
                top: 40,
                left: 12
            },
            {
                id: "lcm",
                role: "MID",
                label: "LCM",
                top: 40,
                left: 38
            },
            {
                id: "rcm",
                role: "MID",
                label: "RCM",
                top: 40,
                left: 62
            },
            {
                id: "rm",
                role: "MID",
                label: "RM",
                top: 40,
                left: 88
            },
            {
                id: "lb",
                role: "DEF",
                label: "LB",
                top: 65,
                left: 12
            },
            {
                id: "lcb",
                role: "DEF",
                label: "LCB",
                top: 65,
                left: 38
            },
            {
                id: "rcb",
                role: "DEF",
                label: "RCB",
                top: 65,
                left: 62
            },
            {
                id: "rb",
                role: "DEF",
                label: "RB",
                top: 65,
                left: 88
            },
            {
                id: "gk",
                role: "GK",
                label: "GK",
                top: 88,
                left: 50
            }
        ]
    }
};
}),
"[project]/Desktop/Next.js/football/src/playerSlot.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function initials(name) {
    return name.split(" ").map((p)=>p[0]).join("").slice(0, 2).toUpperCase();
}
function PlayerSlot({ slot, player, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>onSelect(slot.id),
        className: "group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center focus:outline-none",
        style: {
            top: `${slot.top}%`,
            left: `${slot.left}%`
        },
        "aria-label": player ? `${player.name} - ${slot.label}` : `Add player - ${slot.label}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative flex h-14 w-14 items-center justify-center rounded-full border-2   border-lime-300/80 bg-emerald-800/40 shadow-md backdrop-blur-sm   transition-transform duration-150 group-hover:scale-105 group-hover:border-lime-300",
                children: [
                    player?.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: player.photoUrl,
                        alt: player.name,
                        className: "h-full w-full rounded-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this) : player ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-semibold text-white",
                        children: initials(player.name)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 24 24",
                        className: "h-7 w-7 text-emerald-100/70",
                        fill: "currentColor",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.5 0-10.5 1.8-10.5 5.3v2h21v-2c0-3.5-7-5.3-10.5-5.3z"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-emerald-700 shadow ring-2 ring-emerald-900/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            className: "h-3 w-3",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: 3,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 5v14M5 12h14",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mt-1 text-[10px] font-medium uppercase tracking-wide text-emerald-100/80",
                children: player ? player.name.split(" ").slice(-1)[0] : slot.label
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Next.js/football/src/formationBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormationBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$lib$2f$formations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/src/lib/formations.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$playerSlot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/src/playerSlot.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './PlayerPicker'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
// components/FormationBuilder.jsx
"use client";
;
;
;
;
;
;
// Replace with a real squad list, e.g. fetched server-side and passed as a prop.
const SQUAD = [
    {
        id: "p1",
        name: "Arjun Sharma"
    },
    {
        id: "p2",
        name: "Rahul Verma"
    },
    {
        id: "p3",
        name: "Vikram Singh"
    },
    {
        id: "p4",
        name: "Karan Mehta"
    },
    {
        id: "p5",
        name: "Aditya Rao"
    },
    {
        id: "p6",
        name: "Sanjay Nair"
    }
];
function FormationBuilder() {
    const [formationId, setFormationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("4-3-3");
    const [lineup, setLineup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [activeSlotId, setActiveSlotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const formation = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$lib$2f$formations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORMATIONS"][formationId];
    const usedPlayerIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new Set(Object.values(lineup).map((p)=>p.id)), [
        lineup
    ]);
    function handleSelect(slotId) {
        setActiveSlotId(slotId);
    }
    function handlePick(player) {
        if (!activeSlotId) return;
        setLineup((prev)=>({
                ...prev,
                [activeSlotId]: player
            }));
        setActiveSlotId(null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-full max-w-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: formationId,
                    onChange: (e)=>{
                        setFormationId(e.target.value);
                        setLineup({}); // reset when formation shape changes
                    },
                    className: "rounded-md border border-gray-200 bg-white px-2 py-1 text-sm text-gray-700",
                    children: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$lib$2f$formations$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORMATIONS"]).map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: f.id,
                            children: f.name
                        }, f.id, false, {
                            fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg",
                style: {
                    background: "linear-gradient(160deg, #0d6b3c 0%, #14934f 55%, #0d6b3c 100%)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PitchLines, {}, void 0, false, {
                        fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    formation.slots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$playerSlot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            slot: slot,
                            player: lineup[slot.id],
                            onSelect: handleSelect
                        }, slot.id, false, {
                            fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerPicker, {
                open: activeSlotId !== null,
                candidates: SQUAD.filter((p)=>!usedPlayerIds.has(p.id)),
                onPick: handlePick,
                onClose: ()=>setActiveSlotId(null)
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Next_js_football_src_20oqtm3._.js.map