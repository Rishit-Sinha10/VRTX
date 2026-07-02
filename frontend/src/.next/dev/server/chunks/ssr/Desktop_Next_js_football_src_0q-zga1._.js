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
"[project]/Desktop/Next.js/football/src/Pitchlines.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/PitchLines.jsx
// Decorative pitch markings, drawn once and layered behind the player slots.
__turbopack_context__.s([
    "default",
    ()=>PitchLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function PitchLines() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 100 100",
        preserveAspectRatio: "none",
        className: "pointer-events-none absolute inset-0 h-full w-full opacity-30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "2",
                y: "2",
                width: "96",
                height: "96",
                fill: "none",
                stroke: "white",
                strokeWidth: "0.3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "2",
                y1: "50",
                x2: "98",
                y2: "50",
                stroke: "white",
                strokeWidth: "0.3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "9",
                fill: "none",
                stroke: "white",
                strokeWidth: "0.3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "50",
                cy: "50",
                r: "0.6",
                fill: "white"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "26",
                y: "2",
                width: "48",
                height: "16",
                fill: "none",
                stroke: "white",
                strokeWidth: "0.3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "38",
                y: "2",
                width: "24",
                height: "7",
                fill: "none",
                stroke: "white",
                strokeWidth: "0.3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "26",
                y: "82",
                width: "48",
                height: "16",
                fill: "none",
                stroke: "white",
                strokeWidth: "0.3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "38",
                y: "91",
                width: "24",
                height: "7",
                fill: "none",
                stroke: "white",
                strokeWidth: "0.3"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
        lineNumber: 5,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$Pitchlines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/src/Pitchlines.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$Pitchlines$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    formation.slots.map((slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerSlot, {
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

//# sourceMappingURL=Desktop_Next_js_football_src_0q-zga1._.js.map