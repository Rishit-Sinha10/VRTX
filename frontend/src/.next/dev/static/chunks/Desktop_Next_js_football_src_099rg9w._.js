(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Next.js/football/src/lib/formations.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Next.js/football/src/Pitchlines.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PitchLines
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function PitchLines() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "4738f270cf7c267a33b7eebdfc98430fe819ddeb3bfbfd376322696880e17da0") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4738f270cf7c267a33b7eebdfc98430fe819ddeb3bfbfd376322696880e17da0";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            className: "pointer-events-none absolute inset-0 h-full w-full opacity-30",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "2",
                    width: "96",
                    height: "96",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "0.3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                    lineNumber: 14,
                    columnNumber: 138
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "2",
                    y1: "50",
                    x2: "98",
                    y2: "50",
                    stroke: "white",
                    strokeWidth: "0.3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                    lineNumber: 14,
                    columnNumber: 226
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "50",
                    r: "9",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "0.3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                    lineNumber: 14,
                    columnNumber: 298
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "50",
                    cy: "50",
                    r: "0.6",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                    lineNumber: 14,
                    columnNumber: 375
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "26",
                    y: "2",
                    width: "48",
                    height: "16",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "0.3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                    lineNumber: 14,
                    columnNumber: 422
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "38",
                    y: "2",
                    width: "24",
                    height: "7",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "0.3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                    lineNumber: 14,
                    columnNumber: 511
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "26",
                    y: "82",
                    width: "48",
                    height: "16",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "0.3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                    lineNumber: 14,
                    columnNumber: 599
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "38",
                    y: "91",
                    width: "24",
                    height: "7",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "0.3"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
                    lineNumber: 14,
                    columnNumber: 689
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Next.js/football/src/Pitchlines.js",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = PitchLines;
var _c;
__turbopack_context__.k.register(_c, "PitchLines");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Next.js/football/src/playerSlot.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayerSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function initials(name) {
    return name.split(" ").map((p)=>p[0]).join("").slice(0, 2).toUpperCase();
}
function PlayerSlot(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "c89c8e8d970c2d557ab0cae7840b130279028aff4d0bc7fbba104cb1c6b92473") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c89c8e8d970c2d557ab0cae7840b130279028aff4d0bc7fbba104cb1c6b92473";
    }
    const { slot, player, onSelect } = t0;
    let t1;
    if ($[1] !== onSelect || $[2] !== slot.id) {
        t1 = ({
            "PlayerSlot[<button>.onClick]": ()=>onSelect(slot.id)
        })["PlayerSlot[<button>.onClick]"];
        $[1] = onSelect;
        $[2] = slot.id;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const t2 = `${slot.top}%`;
    const t3 = `${slot.left}%`;
    let t4;
    if ($[4] !== t2 || $[5] !== t3) {
        t4 = {
            top: t2,
            left: t3
        };
        $[4] = t2;
        $[5] = t3;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const t5 = player ? `${player.name} - ${slot.label}` : `Add player - ${slot.label}`;
    let t6;
    if ($[7] !== player) {
        t6 = player?.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: player.photoUrl,
            alt: player.name,
            className: "h-full w-full rounded-full object-cover"
        }, void 0, false, {
            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
            lineNumber: 46,
            columnNumber: 29
        }, this) : player ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm font-semibold text-white",
            children: initials(player.name)
        }, void 0, false, {
            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
            lineNumber: 46,
            columnNumber: 140
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            className: "h-7 w-7 text-emerald-100/70",
            fill: "currentColor",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.5 0-10.5 1.8-10.5 5.3v2h21v-2c0-3.5-7-5.3-10.5-5.3z"
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                lineNumber: 46,
                columnNumber: 328
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
            lineNumber: 46,
            columnNumber: 224
        }, this);
        $[7] = player;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-white text-emerald-700 shadow ring-2 ring-emerald-900/40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 24 24",
                className: "h-3 w-3",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 3,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 5v14M5 12h14",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                    lineNumber: 54,
                    columnNumber: 269
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
                lineNumber: 54,
                columnNumber: 174
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative flex h-14 w-14 items-center justify-center rounded-full border-2\r\n                   border-lime-300/80 bg-emerald-800/40 shadow-md backdrop-blur-sm\r\n                   transition-transform duration-150 group-hover:scale-105 group-hover:border-lime-300",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== player || $[13] !== slot.label) {
        t9 = player ? player.name.split(" ").slice(-1)[0] : slot.label;
        $[12] = player;
        $[13] = slot.label;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mt-1 text-[10px] font-medium uppercase tracking-wide text-emerald-100/80",
            children: t9
        }, void 0, false, {
            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
            lineNumber: 78,
            columnNumber: 11
        }, this);
        $[15] = t9;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] !== t1 || $[18] !== t10 || $[19] !== t4 || $[20] !== t5 || $[21] !== t8) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t1,
            className: "group absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center focus:outline-none",
            style: t4,
            "aria-label": t5,
            children: [
                t8,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Next.js/football/src/playerSlot.js",
            lineNumber: 86,
            columnNumber: 11
        }, this);
        $[17] = t1;
        $[18] = t10;
        $[19] = t4;
        $[20] = t5;
        $[21] = t8;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    return t11;
}
_c = PlayerSlot;
var _c;
__turbopack_context__.k.register(_c, "PlayerSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Next.js/football/src/formationBuilder.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FormationBuilder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$lib$2f$formations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/src/lib/formations.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$Pitchlines$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/src/Pitchlines.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$playerSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Next.js/football/src/playerSlot.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "a2a58d3e4f90aeffa0527687bfaca869f51909c71108db3dd6186f7eb8fe49b6") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a2a58d3e4f90aeffa0527687bfaca869f51909c71108db3dd6186f7eb8fe49b6";
    }
    const [formationId, setFormationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("4-3-3");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {};
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [lineup, setLineup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [activeSlotId, setActiveSlotId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const formation = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$lib$2f$formations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMATIONS"][formationId];
    let t1;
    if ($[2] !== lineup) {
        t1 = new Set(Object.values(lineup).map(_FormationBuilderAnonymous));
        $[2] = lineup;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const usedPlayerIds = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = function handleSelect(slotId) {
            setActiveSlotId(slotId);
        };
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleSelect = t2;
    let t3;
    if ($[5] !== activeSlotId) {
        t3 = function handlePick(player) {
            if (!activeSlotId) {
                return;
            }
            setLineup({
                "FormationBuilder[handlePick > setLineup()]": (prev)=>({
                        ...prev,
                        [activeSlotId]: player
                    })
            }["FormationBuilder[handlePick > setLineup()]"]);
            setActiveSlotId(null);
        };
        $[5] = activeSlotId;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handlePick = t3;
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "FormationBuilder[<select>.onChange]": (e)=>{
                setFormationId(e.target.value);
                setLineup({});
            }
        })["FormationBuilder[<select>.onChange]"];
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$lib$2f$formations$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FORMATIONS"]).map(_FormationBuilderAnonymous2);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== formationId) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-3 flex justify-end",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: formationId,
                onChange: t4,
                className: "rounded-md border border-gray-200 bg-white px-2 py-1 text-sm text-gray-700",
                children: t5
            }, void 0, false, {
                fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                lineNumber: 109,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[9] = formationId;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            background: "linear-gradient(160deg, #0d6b3c 0%, #14934f 55%, #0d6b3c 100%)"
        };
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$Pitchlines$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[11] = t7;
        $[12] = t8;
    } else {
        t7 = $[11];
        t8 = $[12];
    }
    let t9;
    if ($[13] !== formation.slots || $[14] !== lineup) {
        let t10;
        if ($[16] !== lineup) {
            t10 = ({
                "FormationBuilder[formation.slots.map()]": (slot)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$src$2f$playerSlot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        slot: slot,
                        player: lineup[slot.id],
                        onSelect: handleSelect
                    }, slot.id, false, {
                        fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
                        lineNumber: 133,
                        columnNumber: 60
                    }, this)
            })["FormationBuilder[formation.slots.map()]"];
            $[16] = lineup;
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        t9 = formation.slots.map(t10);
        $[13] = formation.slots;
        $[14] = lineup;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[18] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-lg",
            style: t7,
            children: [
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
            lineNumber: 149,
            columnNumber: 11
        }, this);
        $[18] = t9;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    const t11 = activeSlotId !== null;
    let t12;
    if ($[20] !== usedPlayerIds) {
        t12 = SQUAD.filter({
            "FormationBuilder[SQUAD.filter()]": (p_0)=>!usedPlayerIds.has(p_0.id)
        }["FormationBuilder[SQUAD.filter()]"]);
        $[20] = usedPlayerIds;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "FormationBuilder[<PlayerPicker>.onClose]": ()=>setActiveSlotId(null)
        })["FormationBuilder[<PlayerPicker>.onClose]"];
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    let t14;
    if ($[23] !== handlePick || $[24] !== t11 || $[25] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayerPicker, {
            open: t11,
            candidates: t12,
            onPick: handlePick,
            onClose: t13
        }, void 0, false, {
            fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[23] = handlePick;
        $[24] = t11;
        $[25] = t12;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== t10 || $[28] !== t14 || $[29] !== t6) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-md",
            children: [
                t6,
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[27] = t10;
        $[28] = t14;
        $[29] = t6;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    return t15;
}
_s(FormationBuilder, "FZAgxSKhaW0mKA7SYDWJa+Vi9bQ=");
_c = FormationBuilder;
function _FormationBuilderAnonymous2(f) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Next$2e$js$2f$football$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: f.id,
        children: f.name
    }, f.id, false, {
        fileName: "[project]/Desktop/Next.js/football/src/formationBuilder.js",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function _FormationBuilderAnonymous(p) {
    return p.id;
}
var _c;
__turbopack_context__.k.register(_c, "FormationBuilder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Next_js_football_src_099rg9w._.js.map