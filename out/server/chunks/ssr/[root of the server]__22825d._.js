module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/once-ui/components/Arrow.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "active": "Arrow-module-scss-module__p0LJwq__active",
  "arrow": "Arrow-module-scss-module__p0LJwq__arrow",
  "arrowContainer": "Arrow-module-scss-module__p0LJwq__arrowContainer",
  "arrowHead": "Arrow-module-scss-module__p0LJwq__arrowHead",
  "onBackground": "Arrow-module-scss-module__p0LJwq__onBackground",
  "onSolid": "Arrow-module-scss-module__p0LJwq__onSolid",
});
}}),
"[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Flex": (()=>Flex)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Flex = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ as: Component = "div", inline, direction, tabletDirection, mobileDirection, wrap = false, horizontal, vertical, flex, textVariant, textSize, textWeight, textType, onBackground, onSolid, align, top, right, bottom, left, padding, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingX, paddingY, margin, marginLeft, marginRight, marginTop, marginBottom, marginX, marginY, gap, position, center, width, height, maxWidth, minWidth, minHeight, maxHeight, fit = false, fitWidth = false, fitHeight = false, fill = false, fillWidth = false, fillHeight = false, aspectRatio, hide, show, transition, background, solid, opacity, pointerEvents, border, borderTop, borderRight, borderBottom, borderLeft, borderStyle, borderWidth, radius, topRadius, rightRadius, bottomRadius, leftRadius, topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius, overflow, overflowX, overflowY, zIndex, shadow, cursor, className, style, children, ...rest }, ref)=>{
    if (onBackground && onSolid) {
        console.warn("You cannot use both 'onBackground' and 'onSolid' props simultaneously. Only one will be applied.");
    }
    if (background && solid) {
        console.warn("You cannot use both 'background' and 'solid' props simultaneously. Only one will be applied.");
    }
    const getVariantClasses = (variant)=>{
        const [fontType, weight, size] = variant.split("-");
        return [
            `font-${fontType}`,
            `font-${weight}`,
            `font-${size}`
        ];
    };
    const sizeClass = textSize ? `font-${textSize}` : "";
    const weightClass = textWeight ? `font-${textWeight}` : "";
    const variantClasses = textVariant ? getVariantClasses(textVariant) : [
        sizeClass,
        weightClass
    ];
    let colorClass = "";
    if (onBackground) {
        const [scheme, weight] = onBackground.split("-");
        colorClass = `${scheme}-on-background-${weight}`;
    } else if (onSolid) {
        const [scheme, weight] = onSolid.split("-");
        colorClass = `${scheme}-on-solid-${weight}`;
    }
    const generateDynamicClass = (type, value)=>{
        if (!value) return undefined;
        if (value === "transparent") {
            return `transparent-border`;
        }
        if ([
            "surface",
            "page",
            "overlay"
        ].includes(value)) {
            return `${value}-${type}`;
        }
        const parts = value.split("-");
        if (parts.includes("alpha")) {
            const [scheme, , weight] = parts;
            return `${scheme}-${type}-alpha-${weight}`;
        }
        const [scheme, weight] = value.split("-");
        return `${scheme}-${type}-${weight}`;
    };
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(inline ? "display-inline-flex" : "display-flex", padding && `p-${padding}`, paddingLeft && `pl-${paddingLeft}`, paddingRight && `pr-${paddingRight}`, paddingTop && `pt-${paddingTop}`, paddingBottom && `pb-${paddingBottom}`, paddingX && `px-${paddingX}`, paddingY && `py-${paddingY}`, margin && `m-${margin}`, marginLeft && `ml-${marginLeft}`, marginRight && `mr-${marginRight}`, marginTop && `mt-${marginTop}`, marginBottom && `mb-${marginBottom}`, marginX && `mx-${marginX}`, marginY && `my-${marginY}`, gap === "-1" ? direction === "column" || direction === "column-reverse" ? "g-vertical--1" : "g-horizontal--1" : gap && `g-${gap}`, top && `top-${top}`, right && `right-${right}`, bottom && `bottom-${bottom}`, left && `left-${left}`, generateDynamicClass("background", background), generateDynamicClass("solid", solid), generateDynamicClass("border", border || borderTop || borderRight || borderBottom || borderLeft), (border || borderTop || borderRight || borderBottom || borderLeft) && !borderStyle && "border-solid", border && !borderWidth && "border-1", (borderTop || borderRight || borderBottom || borderLeft) && "border-reset", borderTop && "border-top-1", borderRight && "border-right-1", borderBottom && "border-bottom-1", borderLeft && "border-left-1", borderWidth && `border-${borderWidth}`, borderStyle && `border-${borderStyle}`, radius === "full" ? "radius-full" : radius && `radius-${radius}`, topRadius && `radius-${topRadius}-top`, rightRadius && `radius-${rightRadius}-right`, bottomRadius && `radius-${bottomRadius}-bottom`, leftRadius && `radius-${leftRadius}-left`, topLeftRadius && `radius-${topLeftRadius}-top-left`, topRightRadius && `radius-${topRightRadius}-top-right`, bottomLeftRadius && `radius-${bottomLeftRadius}-bottom-left`, bottomRightRadius && `radius-${bottomRightRadius}-bottom-right`, direction && `flex-${direction}`, tabletDirection && `m-flex-${tabletDirection}`, mobileDirection && `s-flex-${mobileDirection}`, pointerEvents && `pointer-events-${pointerEvents}`, transition && `transition-${transition}`, hide && `${hide}-flex-hide`, show && `${show}-flex-show`, opacity && `opacity-${opacity}`, wrap && "flex-wrap", overflow && `overflow-${overflow}`, overflowX && `overflow-x-${overflowX}`, overflowY && `overflow-y-${overflowY}`, flex && `flex-${flex}`, horizontal && (direction === "row" || direction === "row-reverse" || direction === undefined ? `justify-${horizontal}` : `align-${horizontal}`), vertical && (direction === "row" || direction === "row-reverse" || direction === undefined ? `align-${vertical}` : `justify-${vertical}`), center && "center", fit && "fit", fitWidth && "fit-width", fitHeight && "fit-height", fill && "fill", fillWidth && !minWidth && "min-width-0", fillHeight && !minHeight && "min-height-0", fill && "min-height-0", fill && "min-width-0", (fillWidth || maxWidth) && "fill-width", (fillHeight || maxHeight) && "fill-height", shadow && `shadow-${shadow}`, position && `position-${position}`, zIndex && `z-index-${zIndex}`, textType && `font-${textType}`, cursor && `cursor-${cursor}`, colorClass, className, ...variantClasses);
    const parseDimension = (value, type)=>{
        if (value === undefined) return undefined;
        if (typeof value === "number") return `${value}rem`;
        if ([
            "0",
            "1",
            "2",
            "4",
            "8",
            "12",
            "16",
            "20",
            "24",
            "32",
            "40",
            "48",
            "56",
            "64",
            "80",
            "104",
            "128",
            "160"
        ].includes(value)) {
            return `var(--static-space-${value})`;
        }
        if ([
            "xs",
            "s",
            "m",
            "l",
            "xl"
        ].includes(value)) {
            return `var(--responsive-${type}-${value})`;
        }
        return undefined;
    };
    const combinedStyle = {
        maxWidth: parseDimension(maxWidth, "width"),
        minWidth: parseDimension(minWidth, "width"),
        minHeight: parseDimension(minHeight, "height"),
        maxHeight: parseDimension(maxHeight, "height"),
        width: parseDimension(width, "width"),
        height: parseDimension(height, "height"),
        aspectRatio: aspectRatio,
        textAlign: align,
        ...style
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: ref,
        className: classes,
        style: combinedStyle,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Flex.tsx",
        lineNumber: 303,
        columnNumber: 7
    }, this);
});
Flex.displayName = "Flex";
;
}}),
"[project]/src/once-ui/components/Arrow.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Arrow": (()=>Arrow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Arrow.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Arrow = ({ trigger, scale = 0.8, color = "onBackground", style, className })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const triggerElement = document.querySelector(trigger);
        if (triggerElement && ref.current) {
            const handleMouseOver = ()=>{
                ref.current?.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active);
            };
            const handleMouseOut = ()=>{
                ref.current?.classList.remove(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active);
            };
            triggerElement.addEventListener("mouseenter", handleMouseOver);
            triggerElement.addEventListener("mouseleave", handleMouseOut);
            return ()=>{
                triggerElement.removeEventListener("mouseenter", handleMouseOver);
                triggerElement.removeEventListener("mouseleave", handleMouseOut);
            };
        }
    }, [
        trigger
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        position: "relative",
        vertical: "center",
        horizontal: "center",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowContainer, className),
        style: {
            transform: `scale(${scale})`,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrow, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][color]),
                height: 0.1
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Arrow.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowHead, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][color]),
                height: 0.0875
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Arrow.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].arrowHead, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][color]),
                height: 0.0875
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Arrow.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Arrow.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
};
Arrow.displayName = "Arrow";
;
}}),
"[project]/src/once-ui/components/Avatar.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "image": "Avatar-module-scss-module__2IbJlW__image",
  "indicator": "Avatar-module-scss-module__2IbJlW__indicator",
  "l": "Avatar-module-scss-module__2IbJlW__l",
  "m": "Avatar-module-scss-module__2IbJlW__m",
  "position": "Avatar-module-scss-module__2IbJlW__position",
  "s": "Avatar-module-scss-module__2IbJlW__s",
  "value": "Avatar-module-scss-module__2IbJlW__value",
  "xl": "Avatar-module-scss-module__2IbJlW__xl",
  "xs": "Avatar-module-scss-module__2IbJlW__xs",
});
}}),
"[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Text": (()=>Text)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
"use client";
;
;
const Text = ({ as, variant, size, weight, onBackground, onSolid, align, wrap, padding, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingX, paddingY, margin, marginLeft, marginRight, marginTop, marginBottom, marginX, marginY, children, style, className, ...props })=>{
    const Component = as || "span";
    if (variant && (size || weight)) {
        console.warn("When 'variant' is set, 'size' and 'weight' are ignored.");
    }
    if (onBackground && onSolid) {
        console.warn("You cannot use both 'onBackground' and 'onSolid' props simultaneously. Only one will be applied.");
    }
    const getVariantClasses = (variant)=>{
        const [fontType, weight, size] = variant.split("-");
        return [
            `font-${fontType}`,
            `font-${weight}`,
            `font-${size}`
        ];
    };
    const sizeClass = size ? `font-${size}` : "";
    const weightClass = weight ? `font-${weight}` : "";
    const classes = variant ? getVariantClasses(variant) : [
        sizeClass,
        weightClass
    ];
    let colorClass = "";
    if (onBackground) {
        const [scheme, weight] = onBackground.split("-");
        colorClass = `${scheme}-on-background-${weight}`;
    } else if (onSolid) {
        const [scheme, weight] = onSolid.split("-");
        colorClass = `${scheme}-on-solid-${weight}`;
    }
    const generateClassName = (prefix, token)=>{
        return token ? `${prefix}-${token}` : undefined;
    };
    const combinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(...classes, colorClass, className, generateClassName("p", padding), generateClassName("pl", paddingLeft), generateClassName("pr", paddingRight), generateClassName("pt", paddingTop), generateClassName("pb", paddingBottom), generateClassName("px", paddingX), generateClassName("py", paddingY), generateClassName("m", margin), generateClassName("ml", marginLeft), generateClassName("mr", marginRight), generateClassName("mt", marginTop), generateClassName("mb", marginBottom), generateClassName("mx", marginX), generateClassName("my", marginY));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: combinedClasses,
        style: {
            textAlign: align,
            textWrap: wrap,
            ...style
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Text.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
};
Text.displayName = "Text";
;
}}),
"[project]/src/once-ui/components/Skeleton.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "block": "Skeleton-module-scss-module__O9J6-G__block",
  "circle": "Skeleton-module-scss-module__O9J6-G__circle",
  "delay-1": "Skeleton-module-scss-module__O9J6-G__delay-1",
  "delay-2": "Skeleton-module-scss-module__O9J6-G__delay-2",
  "delay-3": "Skeleton-module-scss-module__O9J6-G__delay-3",
  "delay-4": "Skeleton-module-scss-module__O9J6-G__delay-4",
  "delay-5": "Skeleton-module-scss-module__O9J6-G__delay-5",
  "delay-6": "Skeleton-module-scss-module__O9J6-G__delay-6",
  "h-l": "Skeleton-module-scss-module__O9J6-G__h-l",
  "h-m": "Skeleton-module-scss-module__O9J6-G__h-m",
  "h-s": "Skeleton-module-scss-module__O9J6-G__h-s",
  "h-xl": "Skeleton-module-scss-module__O9J6-G__h-xl",
  "h-xs": "Skeleton-module-scss-module__O9J6-G__h-xs",
  "line": "Skeleton-module-scss-module__O9J6-G__line",
  "skeleton": "Skeleton-module-scss-module__O9J6-G__skeleton",
  "skeleton-loading": "Skeleton-module-scss-module__O9J6-G__skeleton-loading",
  "w-l": "Skeleton-module-scss-module__O9J6-G__w-l",
  "w-m": "Skeleton-module-scss-module__O9J6-G__w-m",
  "w-s": "Skeleton-module-scss-module__O9J6-G__w-s",
  "w-xl": "Skeleton-module-scss-module__O9J6-G__w-xl",
  "w-xs": "Skeleton-module-scss-module__O9J6-G__w-xs",
});
}}),
"[project]/src/once-ui/components/Skeleton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Skeleton": (()=>Skeleton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Skeleton.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Skeleton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ shape = "line", width, height, delay, style, className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ...props,
        ref: ref,
        style: style,
        radius: shape === "line" || shape === "circle" ? "full" : undefined,
        inline: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].skeleton, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][shape], width && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["w-" + width], height && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["h-" + height], delay && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["delay-" + delay], className)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Skeleton.tsx",
        lineNumber: 21,
        columnNumber: 7
    }, this);
});
Skeleton.displayName = "Skeleton";
;
}}),
"[project]/src/once-ui/components/SmartImage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SmartImage": (()=>SmartImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Skeleton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const SmartImage = ({ aspectRatio, height, alt = "", isLoading = false, objectFit = "cover", enlarge = false, src, unoptimized = false, priority, sizes = "100vw", ...rest })=>{
    const [isEnlarged, setIsEnlarged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleClick = ()=>{
        if (enlarge) {
            setIsEnlarged(!isEnlarged);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleEscape = (event)=>{
            if (event.key === "Escape" && isEnlarged) {
                setIsEnlarged(false);
            }
        };
        document.addEventListener("keydown", handleEscape);
        return ()=>document.removeEventListener("keydown", handleEscape);
    }, [
        isEnlarged
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isEnlarged) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return ()=>{
            document.body.style.overflow = "auto";
        };
    }, [
        isEnlarged
    ]);
    const calculateTransform = ()=>{
        if (!imageRef.current) return {};
        const rect = imageRef.current.getBoundingClientRect();
        const scaleX = window.innerWidth / rect.width;
        const scaleY = window.innerHeight / rect.height;
        const scale = Math.min(scaleX, scaleY) * 0.9;
        const translateX = (window.innerWidth - rect.width) / 2 - rect.left;
        const translateY = (window.innerHeight - rect.height) / 2 - rect.top;
        return {
            transform: isEnlarged ? `translate(${translateX}px, ${translateY}px) scale(${scale})` : "translate(0, 0) scale(1)",
            transition: "all 0.3s ease-in-out",
            zIndex: isEnlarged ? 2 : undefined
        };
    };
    const isYouTubeVideo = (url)=>{
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        return youtubeRegex.test(url);
    };
    const getYouTubeEmbedUrl = (url)=>{
        const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? `https://www.youtube.com/embed/${match[1]}?controls=0&rel=0&modestbranding=1` : "";
    };
    const isVideo = src?.endsWith(".mp4");
    const isYouTube = isYouTubeVideo(src);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                ref: imageRef,
                fillWidth: true,
                overflow: "hidden",
                position: "relative",
                zIndex: 0,
                cursor: enlarge ? "interactive" : "",
                style: {
                    outline: "none",
                    isolation: "isolate",
                    height: aspectRatio ? "" : height ? `${height}rem` : "100%",
                    aspectRatio,
                    borderRadius: isEnlarged ? "0" : undefined,
                    ...calculateTransform()
                },
                onClick: handleClick,
                ...rest,
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                        shape: "block"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                        lineNumber: 124,
                        columnNumber: 23
                    }, this),
                    !isLoading && isVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: src,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        style: {
                            width: "100%",
                            height: "100%",
                            objectFit: objectFit
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    !isLoading && isYouTube && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        width: "100%",
                        height: "100%",
                        src: getYouTubeEmbedUrl(src),
                        frameBorder: "0",
                        allow: "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: true,
                        style: {
                            objectFit: objectFit
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    !isLoading && !isVideo && !isYouTube && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: alt,
                        priority: priority,
                        sizes: sizes,
                        unoptimized: unoptimized,
                        fill: true,
                        style: {
                            objectFit: objectFit
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            isEnlarged && enlarge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                horizontal: "center",
                vertical: "center",
                position: "fixed",
                background: "overlay",
                onClick: handleClick,
                top: "0",
                left: "0",
                opacity: isEnlarged ? 100 : 0,
                cursor: "interactive",
                transition: "macro-medium",
                style: {
                    width: "100vw",
                    height: "100vh"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    position: "relative",
                    style: {
                        height: "100vh",
                        transform: "translate(-50%, -50%)"
                    },
                    onClick: (e)=>e.stopPropagation(),
                    children: isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: src,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        style: {
                            width: "90vw",
                            height: "auto",
                            objectFit: "contain"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                        lineNumber: 193,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: src,
                        alt: alt,
                        fill: true,
                        sizes: "90vw",
                        unoptimized: unoptimized,
                        style: {
                            objectFit: "contain"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                        lineNumber: 206,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/SmartImage.tsx",
                lineNumber: 168,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
SmartImage.displayName = "SmartImage";
;
}}),
"[project]/src/once-ui/icons.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "iconLibrary": (()=>iconLibrary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/hi2/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ri/index.mjs [app-ssr] (ecmascript)");
;
;
;
const iconLibrary = {
    chevronUp: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronUp"],
    chevronDown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronDown"],
    chevronRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronRight"],
    chevronLeft: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiChevronLeft"],
    refresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineArrowPath"],
    check: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiCheck"],
    light: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineSun"],
    dark: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineMoon"],
    helpCircle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMiniQuestionMarkCircle"],
    infoCircle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiInformationCircle"],
    warningTriangle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiExclamationTriangle"],
    errorCircle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiExclamationCircle"],
    checkCircle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiCheckCircle"],
    eyeDropper: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiEyeDropper"],
    clipboard: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineClipboard"],
    person: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMiniUser"],
    close: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMiniXMark"],
    openLink: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineLink"],
    discord: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaDiscord"],
    google: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGoogle"],
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"],
    arrowUpRight: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiArrowUpRight"],
    minus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMiniMinus"],
    plus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiMiniPlus"],
    calendar: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiCalendar"],
    eye: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineEye"],
    eyeOff: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineEyeSlash"],
    search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineMagnifyingGlass"],
    visa: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RiVisaLine"],
    security: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineShieldCheck"],
    sparkle: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi2$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineSparkles"]
};
}}),
"[project]/src/once-ui/components/Icon.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "l": "Icon-module-scss-module__706Gfa__l",
  "m": "Icon-module-scss-module__706Gfa__m",
  "s": "Icon-module-scss-module__706Gfa__s",
  "xl": "Icon-module-scss-module__706Gfa__xl",
  "xs": "Icon-module-scss-module__706Gfa__xs",
});
}}),
"[project]/src/once-ui/components/IconButton.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "bottom": "IconButton-module-scss-module__B0EJgG__bottom",
  "l": "IconButton-module-scss-module__B0EJgG__l",
  "left": "IconButton-module-scss-module__B0EJgG__left",
  "m": "IconButton-module-scss-module__B0EJgG__m",
  "right": "IconButton-module-scss-module__B0EJgG__right",
  "s": "IconButton-module-scss-module__B0EJgG__s",
  "top": "IconButton-module-scss-module__B0EJgG__top",
});
}}),
"[project]/src/once-ui/components/Tooltip.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Tooltip": (()=>Tooltip)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Tooltip = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ label, prefixIcon, suffixIcon, className, style }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        hide: "m",
        ref: ref,
        style: {
            whiteSpace: "nowrap",
            userSelect: "none",
            ...style
        },
        vertical: "center",
        gap: "4",
        zIndex: 1,
        background: "surface",
        paddingY: "4",
        paddingX: "8",
        radius: "s",
        border: "neutral-medium",
        role: "tooltip",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className),
        children: [
            prefixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: prefixIcon,
                size: "xs"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Tooltip.tsx",
                lineNumber: 38,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingX: "2",
                vertical: "center",
                textVariant: "body-default-xs",
                onBackground: "neutral-strong",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Tooltip.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            suffixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: suffixIcon,
                size: "xs"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Tooltip.tsx",
                lineNumber: 47,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Tooltip.tsx",
        lineNumber: 19,
        columnNumber: 7
    }, this);
});
Tooltip.displayName = "Tooltip";
;
}}),
"[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Icon": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/icons.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Tooltip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const Icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ name, onBackground, onSolid, size = "m", decorative = true, tooltip, tooltipPosition = "top", ...rest }, ref)=>{
    const IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$icons$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["iconLibrary"][name];
    if (!IconComponent) {
        console.warn(`Icon "${name}" does not exist in the library.`);
        return null;
    }
    if (onBackground && onSolid) {
        console.warn("You cannot use both 'onBackground' and 'onSolid' props simultaneously. Only one will be applied.");
    }
    let colorClass = "color-inherit";
    if (onBackground) {
        const [scheme, weight] = onBackground.split("-");
        colorClass = `${scheme}-on-background-${weight}`;
    } else if (onSolid) {
        const [scheme, weight] = onSolid.split("-");
        colorClass = `${scheme}-on-solid-${weight}`;
    }
    const [isTooltipVisible, setTooltipVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHover, setIsHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer;
        if (isHover) {
            timer = setTimeout(()=>{
                setTooltipVisible(true);
            }, 400);
        } else {
            setTooltipVisible(false);
        }
        return ()=>clearTimeout(timer);
    }, [
        isHover
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        inline: true,
        fit: true,
        position: "relative",
        as: "span",
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(colorClass, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size]),
        role: decorative ? "presentation" : undefined,
        "aria-hidden": decorative ? "true" : undefined,
        "aria-label": decorative ? undefined : name,
        onMouseEnter: ()=>setIsHover(true),
        onMouseLeave: ()=>setIsHover(false),
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {}, void 0, false, {
                fileName: "[project]/src/once-ui/components/Icon.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            tooltip && isTooltipVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                position: "absolute",
                zIndex: 1,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][tooltipPosition],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    label: tooltip
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Icon.tsx",
                    lineNumber: 93,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Icon.tsx",
                lineNumber: 92,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Icon.tsx",
        lineNumber: 76,
        columnNumber: 7
    }, this);
});
Icon.displayName = "Icon";
;
}}),
"[project]/src/once-ui/components/StatusIndicator.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "aqua": "StatusIndicator-module-scss-module__SsjJxa__aqua",
  "blue": "StatusIndicator-module-scss-module__SsjJxa__blue",
  "cyan": "StatusIndicator-module-scss-module__SsjJxa__cyan",
  "emerald": "StatusIndicator-module-scss-module__SsjJxa__emerald",
  "gray": "StatusIndicator-module-scss-module__SsjJxa__gray",
  "green": "StatusIndicator-module-scss-module__SsjJxa__green",
  "indigo": "StatusIndicator-module-scss-module__SsjJxa__indigo",
  "l": "StatusIndicator-module-scss-module__SsjJxa__l",
  "m": "StatusIndicator-module-scss-module__SsjJxa__m",
  "magenta": "StatusIndicator-module-scss-module__SsjJxa__magenta",
  "moss": "StatusIndicator-module-scss-module__SsjJxa__moss",
  "orange": "StatusIndicator-module-scss-module__SsjJxa__orange",
  "pink": "StatusIndicator-module-scss-module__SsjJxa__pink",
  "red": "StatusIndicator-module-scss-module__SsjJxa__red",
  "s": "StatusIndicator-module-scss-module__SsjJxa__s",
  "statusIndicator": "StatusIndicator-module-scss-module__SsjJxa__statusIndicator",
  "violet": "StatusIndicator-module-scss-module__SsjJxa__violet",
  "yellow": "StatusIndicator-module-scss-module__SsjJxa__yellow",
});
}}),
"[project]/src/once-ui/components/StatusIndicator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StatusIndicator": (()=>StatusIndicator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StatusIndicator$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/StatusIndicator.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const StatusIndicator = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ size, color, ariaLabel = `${color} status indicator`, className, style, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        style: style,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StatusIndicator$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusIndicator, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StatusIndicator$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StatusIndicator$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][color], className),
        "aria-label": ariaLabel,
        radius: "full",
        ...rest
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/StatusIndicator.tsx",
        lineNumber: 33,
        columnNumber: 7
    }, this);
});
StatusIndicator.displayName = "StatusIndicator";
;
}}),
"[project]/src/once-ui/components/Avatar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Avatar": (()=>Avatar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Avatar.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/SmartImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StatusIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/StatusIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Skeleton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const sizeMapping = {
    xs: 20,
    s: 24,
    m: 32,
    l: 48,
    xl: 160
};
const statusIndicatorSizeMapping = {
    xs: "s",
    s: "s",
    m: "m",
    l: "m",
    xl: "l"
};
const Avatar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ size = "m", value, src, loading, empty, statusIndicator, className, style, ...rest }, ref)=>{
    const isEmpty = empty || !src && !value;
    if (value && src) {
        throw new Error("Avatar cannot have both 'value' and 'src' props.");
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
            ...rest,
            border: "neutral-medium",
            shape: "circle",
            width: size,
            height: size,
            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar} ${className}`,
            "aria-busy": "true",
            "aria-label": "Loading avatar"
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/Avatar.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this);
    }
    const renderContent = ()=>{
        if (isEmpty) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                onBackground: "neutral-medium",
                name: "person",
                size: size,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                "aria-label": "Empty avatar"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Avatar.tsx",
                lineNumber: 63,
                columnNumber: 11
            }, this);
        }
        if (src) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartImage"], {
                radius: "full",
                src: src,
                fill: true,
                alt: "Avatar",
                sizes: `${sizeMapping[size]}px`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].image
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Avatar.tsx",
                lineNumber: 75,
                columnNumber: 11
            }, this);
        }
        if (value) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                as: "span",
                onBackground: "neutral-weak",
                variant: `body-default-${size}`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].value,
                "aria-label": `Avatar with initials ${value}`,
                children: value
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Avatar.tsx",
                lineNumber: 88,
                columnNumber: 11
            }, this);
        }
        return null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        role: "img",
        position: "relative",
        horizontal: "center",
        vertical: "center",
        radius: "full",
        border: "neutral-strong",
        background: "surface",
        style: style,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size]} ${className || ""}`,
        ...rest,
        children: [
            renderContent(),
            statusIndicator && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StatusIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StatusIndicator"], {
                size: statusIndicatorSizeMapping[size],
                color: statusIndicator.color,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className || ""} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].indicator} ${size === "xl" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].position : ""}`,
                "aria-label": `Status: ${statusIndicator.color}`
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Avatar.tsx",
                lineNumber: 119,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Avatar.tsx",
        lineNumber: 104,
        columnNumber: 7
    }, this);
});
Avatar.displayName = "Avatar";
;
}}),
"[project]/src/once-ui/components/AvatarGroup.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "avatar": "AvatarGroup-module-scss-module__q54KJq__avatar",
});
}}),
"[project]/src/once-ui/components/AvatarGroup.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AvatarGroup": (()=>AvatarGroup)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$AvatarGroup$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/AvatarGroup.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Avatar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AvatarGroup = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ avatars, size = "m", reverse = false, limit, className, style, ...rest }, ref)=>{
    const displayedAvatars = limit ? avatars.slice(0, limit) : avatars;
    const remainingCount = limit && avatars.length > limit ? avatars.length - limit : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        position: "relative",
        vertical: "center",
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$AvatarGroup$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatarGroup, className),
        style: style,
        zIndex: 0,
        ...rest,
        children: [
            displayedAvatars.map((avatarProps, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                    position: "relative",
                    size: size,
                    ...avatarProps,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$AvatarGroup$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                    style: {
                        ...avatarProps.style,
                        zIndex: reverse ? displayedAvatars.length - index : index + 1
                    }
                }, index, false, {
                    fileName: "[project]/src/once-ui/components/AvatarGroup.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)),
            remainingCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                value: `+${remainingCount}`,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$AvatarGroup$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].avatar,
                size: size,
                style: {
                    ...style,
                    zIndex: reverse ? -1 : displayedAvatars.length + 1
                }
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/AvatarGroup.tsx",
                lineNumber: 47,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/AvatarGroup.tsx",
        lineNumber: 24,
        columnNumber: 7
    }, this);
});
AvatarGroup.displayName = "AvatarGroup";
;
}}),
"[project]/src/once-ui/components/Badge.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "animation": "Badge-module-scss-module__rQQlyq__animation",
  "shineDefault": "Badge-module-scss-module__rQQlyq__shineDefault",
  "shineHover": "Badge-module-scss-module__rQQlyq__shineHover",
});
}}),
"[project]/src/once-ui/components/ElementType.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ElementType": (()=>ElementType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
;
;
;
;
const isExternalLink = (url)=>/^https?:\/\//.test(url);
const ElementType = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ href, type, onClick, children, className, style, ...props }, ref)=>{
    if (href) {
        const isExternal = isExternalLink(href);
        if (isExternal) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: href,
                target: "_blank",
                rel: "noreferrer",
                ref: ref,
                className: className,
                style: style,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/ElementType.tsx",
                lineNumber: 22,
                columnNumber: 11
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            ref: ref,
            className: className,
            style: style,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/ElementType.tsx",
            lineNumber: 36,
            columnNumber: 9
        }, this);
    }
    if (onClick || type === "submit" || type === "button") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: ref,
            className: className,
            onClick: onClick,
            style: style,
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/ElementType.tsx",
            lineNumber: 50,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        className: className,
        style: style,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/ElementType.tsx",
        lineNumber: 63,
        columnNumber: 7
    }, this);
});
ElementType.displayName = "ElementType";
;
}}),
"[project]/src/once-ui/components/SmartLink.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SmartLink": (()=>SmartLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ElementType.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SmartLink = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ href, prefixIcon, suffixIcon, fillWidth = false, iconSize = "xs", style, className, selected, unstyled = false, children, ...props }, ref)=>{
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            prefixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: prefixIcon,
                size: iconSize
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/SmartLink.tsx",
                lineNumber: 42,
                columnNumber: 24
            }, this),
            children,
            suffixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: suffixIcon,
                size: iconSize
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/SmartLink.tsx",
                lineNumber: 44,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true);
    const commonProps = {
        ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, "reset-button-styles focus-ring align-center display-inline-flex g-8 radius-s", {
            "fill-width": fillWidth,
            "fit-width": !fillWidth,
            "px-2 mx-2": !unstyled
        }),
        style: !unstyled ? {
            ...selected && {
                textDecoration: "underline"
            },
            ...style
        } : {
            textDecoration: "none",
            ...style
        },
        ...props
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"], {
        href: href,
        ...commonProps,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/SmartLink.tsx",
        lineNumber: 74,
        columnNumber: 7
    }, this);
});
SmartLink.displayName = "SmartLink";
;
}}),
"[project]/src/once-ui/components/Badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Badge": (()=>Badge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Badge$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Badge.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Arrow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/SmartLink.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Badge = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ title, icon, arrow = true, children, href, effect = true, ...rest }, ref)=>{
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        id: "badge",
        paddingX: "20",
        paddingY: "12",
        fitWidth: true,
        className: effect ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Badge$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].animation : undefined,
        vertical: "center",
        radius: "full",
        background: "neutral-weak",
        border: "brand-alpha-medium",
        shadow: "l",
        ...rest,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                className: "mr-8",
                size: "s",
                name: icon,
                onBackground: "brand-medium"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Badge.tsx",
                lineNumber: 33,
                columnNumber: 18
            }, this),
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                onBackground: "brand-strong",
                variant: "label-strong-s",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Badge.tsx",
                lineNumber: 35,
                columnNumber: 11
            }, this),
            children,
            arrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                trigger: "#badge"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Badge.tsx",
                lineNumber: 40,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Badge.tsx",
        lineNumber: 20,
        columnNumber: 7
    }, this);
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartLink"], {
            unstyled: true,
            style: {
                borderRadius: "var(--radius-full)"
            },
            href: href,
            ref: ref,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/Badge.tsx",
            lineNumber: 46,
            columnNumber: 9
        }, this);
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(content, {
        ref: ref
    });
});
Badge.displayName = "Badge";
;
}}),
"[project]/src/once-ui/components/Background.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "dots": "Background-module-scss-module__N7VgTa__dots",
  "gradient": "Background-module-scss-module__N7VgTa__gradient",
  "lines": "Background-module-scss-module__N7VgTa__lines",
  "mask": "Background-module-scss-module__N7VgTa__mask",
});
}}),
"[project]/src/once-ui/components/Background.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Background": (()=>Background)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Background.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    } else if (ref && "current" in ref) {
        ref.current = value;
    }
}
const Background = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ gradient = {}, dots = {}, grid = {}, lines = {}, mask = {}, children, className, style, ...rest }, forwardedRef)=>{
    const dotsColor = dots.color ?? "brand-on-background-weak";
    const dotsSize = "var(--static-space-" + (dots.size ?? "24") + ")";
    const [cursorPosition, setCursorPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [smoothPosition, setSmoothPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const backgroundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setRef(forwardedRef, backgroundRef.current);
    }, [
        forwardedRef
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (event)=>{
            if (backgroundRef.current) {
                const rect = backgroundRef.current.getBoundingClientRect();
                setCursorPosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top
                });
            }
        };
        document.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let animationFrameId;
        const updateSmoothPosition = ()=>{
            setSmoothPosition((prev)=>{
                const dx = cursorPosition.x - prev.x;
                const dy = cursorPosition.y - prev.y;
                const easingFactor = 0.05;
                return {
                    x: Math.round(prev.x + dx * easingFactor),
                    y: Math.round(prev.y + dy * easingFactor)
                };
            });
            animationFrameId = requestAnimationFrame(updateSmoothPosition);
        };
        if (mask.cursor) {
            animationFrameId = requestAnimationFrame(updateSmoothPosition);
        }
        return ()=>{
            cancelAnimationFrame(animationFrameId);
        };
    }, [
        cursorPosition,
        mask
    ]);
    const maskStyle = ()=>{
        if (!mask) return {};
        if (mask.cursor) {
            return {
                "--mask-position-x": `${smoothPosition.x}px`,
                "--mask-position-y": `${smoothPosition.y}px`,
                "--mask-radius": `${mask.radius || 50}vh`
            };
        }
        if (mask.x != null && mask.y != null) {
            return {
                "--mask-position-x": `${mask.x}%`,
                "--mask-position-y": `${mask.y}%`,
                "--mask-radius": `${mask.radius || 50}vh`
            };
        }
        return {};
    };
    const remap = (value, inputMin, inputMax, outputMin, outputMax)=>{
        return (value - inputMin) / (inputMax - inputMin) * (outputMax - outputMin) + outputMin;
    };
    const adjustedX = gradient.x != null ? remap(gradient.x, 0, 100, 37.5, 62.5) : 50;
    const adjustedY = gradient.y != null ? remap(gradient.y, 0, 100, 37.5, 62.5) : 50;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: backgroundRef,
        fill: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(mask && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mask, className),
        top: "0",
        left: "0",
        zIndex: 0,
        position: "relative",
        overflow: "hidden",
        style: {
            ...maskStyle(),
            ...style
        },
        ...rest,
        children: [
            gradient.display && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                position: "absolute",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].gradient,
                opacity: gradient.opacity,
                pointerEvents: "none",
                style: {
                    ["--gradient-position-x"]: `${adjustedX}%`,
                    ["--gradient-position-y"]: `${adjustedY}%`,
                    ["--gradient-width"]: gradient.width != null ? `${gradient.width / 4}%` : "25%",
                    ["--gradient-height"]: gradient.height != null ? `${gradient.height / 4}%` : "25%",
                    ["--gradient-tilt"]: gradient.tilt != null ? `${gradient.tilt}deg` : "0deg",
                    ["--gradient-color-start"]: gradient.colorStart ? `var(--${gradient.colorStart})` : "var(--brand-solid-strong)",
                    ["--gradient-color-end"]: gradient.colorEnd ? `var(--${gradient.colorEnd})` : "var(--brand-solid-weak)"
                }
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Background.tsx",
                lineNumber: 194,
                columnNumber: 11
            }, this),
            dots.display && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                position: "absolute",
                top: "0",
                left: "0",
                fill: true,
                pointerEvents: "none",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dots,
                opacity: dots.opacity,
                style: {
                    "--dots-color": `var(--${dotsColor})`,
                    "--dots-size": dotsSize
                }
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Background.tsx",
                lineNumber: 217,
                columnNumber: 11
            }, this),
            lines.display && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                position: "absolute",
                top: "0",
                left: "0",
                fill: true,
                pointerEvents: "none",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].lines,
                opacity: lines.opacity,
                style: {
                    "--lines-angle": `${lines.angle ?? 45}deg`,
                    "--lines-color": `var(--${lines.color ?? "brand-on-background-weak"})`,
                    "--lines-thickness": `${lines.thickness ?? 0.5}px`,
                    "--lines-spacing": `var(--static-space-${lines.size ?? "24"})`,
                    background: `
                repeating-linear-gradient(
                  var(--lines-angle),
                  var(--static-transparent),
                  var(--static-transparent) calc(var(--lines-spacing) - var(--lines-thickness)),
                  var(--lines-color) calc(var(--lines-spacing) - var(--lines-thickness)),
                  var(--lines-color) var(--lines-spacing)
                )
              `
                }
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Background.tsx",
                lineNumber: 234,
                columnNumber: 11
            }, this),
            grid.display && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                position: "absolute",
                top: "0",
                left: "0",
                fill: true,
                pointerEvents: "none",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                opacity: grid.opacity,
                style: {
                    backgroundSize: `
                ${grid.width || "var(--static-space-32)"}
                ${grid.height || "var(--static-space-32)"}`,
                    backgroundPosition: "0 0",
                    backgroundImage: `
                linear-gradient(
                  90deg,
                  var(--${grid.color || "brand-on-background-weak"}) 0,
                  var(--${grid.color || "brand-on-background-weak"}) 1px,
                  var(--static-transparent) 1px,
                  var(--static-transparent) ${grid.width || "var(--static-space-32)"}
                ),
                linear-gradient(
                  0deg,
                  var(--${grid.color || "brand-on-background-weak"}) 0,
                  var(--${grid.color || "brand-on-background-weak"}) 1px,
                  var(--static-transparent) 1px,
                  var(--static-transparent) ${grid.height || "var(--static-space-32)"}
                )
              `
                }
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Background.tsx",
                lineNumber: 260,
                columnNumber: 11
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Background.tsx",
        lineNumber: 178,
        columnNumber: 7
    }, this);
});
Background.displayName = "Background";
;
}}),
"[project]/src/once-ui/components/Button.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "button": "Button-module-scss-module__0_cfXW__button",
  "danger": "Button-module-scss-module__0_cfXW__danger",
  "ghost": "Button-module-scss-module__0_cfXW__ghost",
  "l": "Button-module-scss-module__0_cfXW__l",
  "m": "Button-module-scss-module__0_cfXW__m",
  "primary": "Button-module-scss-module__0_cfXW__primary",
  "s": "Button-module-scss-module__0_cfXW__s",
  "secondary": "Button-module-scss-module__0_cfXW__secondary",
  "tertiary": "Button-module-scss-module__0_cfXW__tertiary",
});
}}),
"[project]/src/once-ui/components/Spinner.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "l": "Spinner-module-scss-module__hP9PFa__l",
  "m": "Spinner-module-scss-module__hP9PFa__m",
  "s": "Spinner-module-scss-module__hP9PFa__s",
  "spin": "Spinner-module-scss-module__hP9PFa__spin",
  "spinner": "Spinner-module-scss-module__hP9PFa__spinner",
  "xl": "Spinner-module-scss-module__hP9PFa__xl",
  "xs": "Spinner-module-scss-module__hP9PFa__xs",
});
}}),
"[project]/src/once-ui/components/Spinner.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Spinner": (()=>Spinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Spinner$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Spinner.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
;
;
;
;
const Spinner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ size = "m", ariaLabel = "Loading", className, style, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        horizontal: "center",
        vertical: "center",
        style: style,
        className: className,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            ref: ref,
            horizontal: "center",
            vertical: "center",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Spinner$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size],
            role: "status",
            "aria-label": ariaLabel,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Spinner$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].spinner
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Spinner.tsx",
                lineNumber: 31,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/Spinner.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Spinner.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, this);
});
Spinner.displayName = "Spinner";
;
}}),
"[project]/src/once-ui/components/Button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Button": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ElementType.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Button.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Spinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Arrow.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = "primary", size = "m", radius, label, weight = "strong", children, prefixIcon, suffixIcon, loading = false, fillWidth = false, justifyContent = "center", href, id, arrowIcon = false, className, style, ...props }, ref)=>{
    const iconSize = size === "l" ? "s" : size === "m" ? "s" : "xs";
    const radiusSize = size === "s" || size === "m" ? "m" : "l";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"], {
        id: id,
        href: href,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size], radius === "none" ? "radius-none" : radius ? `radius-${radiusSize}-${radius}` : `radius-${radiusSize}`, "text-decoration-none", "button", "cursor-interactive", {
            ["fill-width"]: fillWidth,
            ["fit-width"]: !fillWidth,
            ["justify-" + justifyContent]: justifyContent
        }, className),
        style: style,
        ...props,
        children: [
            prefixIcon && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: prefixIcon,
                size: iconSize
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Button.tsx",
                lineNumber: 94,
                columnNumber: 36
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
                size: size
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Button.tsx",
                lineNumber: 95,
                columnNumber: 21
            }, this),
            (label || children) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingX: "4",
                paddingY: "0",
                textWeight: weight,
                textSize: size,
                className: "font-label",
                children: label || children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Button.tsx",
                lineNumber: 97,
                columnNumber: 11
            }, this),
            arrowIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                style: {
                    marginLeft: "calc(-1 * var(--static-space-4))"
                },
                trigger: "#" + id,
                scale: size === "s" ? 0.8 : size === "m" ? 0.9 : 1,
                color: variant === "primary" ? "onSolid" : "onBackground"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Button.tsx",
                lineNumber: 108,
                columnNumber: 11
            }, this),
            suffixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: suffixIcon,
                size: iconSize
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Button.tsx",
                lineNumber: 117,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Button.tsx",
        lineNumber: 68,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/once-ui/components/RevealFx.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "hidden": "RevealFx-module-scss-module__zc9giG__hidden",
  "revealFx": "RevealFx-module-scss-module__zc9giG__revealFx",
  "revealed": "RevealFx-module-scss-module__zc9giG__revealed",
});
}}),
"[project]/src/once-ui/components/RevealFx.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RevealFx": (()=>RevealFx)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/RevealFx.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const RevealFx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, speed = "medium", delay = 0, revealedByDefault = false, translateY, trigger, style, className, ...rest }, ref)=>{
    const [isRevealed, setIsRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(revealedByDefault);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setIsRevealed(true);
        }, delay * 1000);
        return ()=>clearTimeout(timer);
    }, [
        delay
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (trigger !== undefined) {
            setIsRevealed(trigger);
        }
    }, [
        trigger
    ]);
    const getSpeedDuration = ()=>{
        switch(speed){
            case "fast":
                return "1s";
            case "medium":
                return "2s";
            case "slow":
                return "3s";
            default:
                return "2s";
        }
    };
    const getTranslateYValue = ()=>{
        if (typeof translateY === "number") {
            return `${translateY}rem`;
        } else if (typeof translateY === "string") {
            return `var(--static-space-${translateY})`;
        }
        return undefined;
    };
    const translateValue = getTranslateYValue();
    const revealStyle = {
        transitionDuration: getSpeedDuration(),
        transform: isRevealed ? "translateY(0)" : `translateY(${translateValue})`,
        ...style
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        fillWidth: true,
        position: "relative",
        horizontal: "center",
        ref: ref,
        style: revealStyle,
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealFx} ${isRevealed ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].revealed : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden} ${className || ""}`,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/RevealFx.tsx",
        lineNumber: 81,
        columnNumber: 7
    }, this);
});
RevealFx.displayName = "RevealFx";
;
}}),
"[project]/src/once-ui/components/Scroller.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "column": "Scroller-module-scss-module__UoRRFq__column",
  "container": "Scroller-module-scss-module__UoRRFq__container",
  "row": "Scroller-module-scss-module__UoRRFq__row",
  "scrollButton": "Scroller-module-scss-module__UoRRFq__scrollButton",
  "scrollButtonNext": "Scroller-module-scss-module__UoRRFq__scrollButtonNext",
  "scrollButtonPrev": "Scroller-module-scss-module__UoRRFq__scrollButtonPrev",
  "scroller": "Scroller-module-scss-module__UoRRFq__scroller",
});
}}),
"[project]/src/once-ui/components/Fade.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "mask": "Fade-module-scss-module__2Jz5WG__mask",
});
}}),
"[project]/src/once-ui/components/Fade.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Fade": (()=>Fade)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Fade$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Fade.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Fade = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ to = "bottom", base = "page", pattern = {
    display: false,
    size: "4"
}, blur = 0.5, children, ...rest }, ref)=>{
    const getBaseVar = (base)=>{
        if (base === "page") return "var(--page-background)";
        if (base === "surface") return "var(--surface-background)";
        if (base === "overlay") return "var(--backdrop)";
        const [scheme, weight] = base.includes("alpha") ? base.split("-alpha-") : base.split("-");
        return base.includes("alpha") ? `var(--${scheme}-alpha-${weight})` : `var(--${scheme}-background-${weight})`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        fillWidth: true,
        style: {
            "--base-color": getBaseVar(base),
            "--gradient-direction": to === "top" ? "0deg" : to === "right" ? "90deg" : to === "bottom" ? "180deg" : "270deg",
            ...pattern.display && {
                backgroundImage: `linear-gradient(var(--gradient-direction), var(--base-color), transparent), radial-gradient(transparent 1px, var(--base-color) 1px)`,
                backgroundSize: `100% 100%, var(--static-space-${pattern.size}) var(--static-space-${pattern.size})`,
                backdropFilter: `blur(${blur}rem)`
            }
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Fade$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mask,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Fade.tsx",
        lineNumber: 57,
        columnNumber: 7
    }, this);
});
Fade.displayName = "Fade";
;
}}),
"[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IconButton": (()=>IconButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ElementType.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Button.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Tooltip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const IconButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ icon = "refresh", size = "m", id, radius, tooltip, tooltipPosition = "top", variant = "primary", href, children, className, style, ...props }, ref)=>{
    const [isTooltipVisible, setTooltipVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHover, setIsHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let timer;
        if (isHover) {
            timer = setTimeout(()=>{
                setTooltipVisible(true);
            }, 400);
        } else {
            setTooltipVisible(false);
        }
        return ()=>clearTimeout(timer);
    }, [
        isHover
    ]);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children ? children : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: icon,
                size: "s"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/IconButton.tsx",
                lineNumber: 72,
                columnNumber: 32
            }, this),
            tooltip && isTooltipVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                position: "absolute",
                zIndex: 1,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][tooltipPosition],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                    label: tooltip
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/IconButton.tsx",
                    lineNumber: 75,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/IconButton.tsx",
                lineNumber: 74,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true);
    const radiusSize = size === "s" || size === "m" ? "m" : "l";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"], {
        id: id,
        href: href,
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size], className, radius === "none" ? "radius-none" : radius ? `radius-${radiusSize}-${radius}` : `radius-${radiusSize}`, "text-decoration-none", "button", "cursor-interactive", className),
        style: style,
        onMouseEnter: ()=>setIsHover(true),
        onMouseLeave: ()=>setIsHover(false),
        "aria-label": tooltip || icon,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            fill: true,
            center: true,
            children: content
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/IconButton.tsx",
            lineNumber: 109,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/IconButton.tsx",
        lineNumber: 84,
        columnNumber: 7
    }, this);
});
IconButton.displayName = "IconButton";
;
}}),
"[project]/src/once-ui/components/Scroller.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Scroller": (()=>Scroller)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Scroller.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Fade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Fade.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Scroller = ({ children, direction = "row", className, style, onItemClick, ...rest })=>{
    const scrollerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showPrevButton, setShowPrevButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNextButton, setShowNextButton] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const scroller = scrollerRef.current;
        const handleScroll = ()=>{
            if (scroller) {
                const scrollPosition = direction === "row" ? scroller.scrollLeft : scroller.scrollTop;
                const maxScrollPosition = direction === "row" ? scroller.scrollWidth - scroller.clientWidth : scroller.scrollHeight - scroller.clientHeight;
                setShowPrevButton(scrollPosition > 0);
                setShowNextButton(scrollPosition < maxScrollPosition - 1);
            }
        };
        if (scroller && (direction === "row" ? scroller.scrollWidth > scroller.clientWidth : scroller.scrollHeight > scroller.clientHeight)) {
            handleScroll();
            scroller.addEventListener("scroll", handleScroll);
            return ()=>scroller.removeEventListener("scroll", handleScroll);
        }
    }, [
        direction
    ]);
    const handleScrollNext = ()=>{
        const scroller = scrollerRef.current;
        if (scroller) {
            const scrollAmount = direction === "row" ? scroller.clientWidth / 2 : scroller.clientHeight / 2;
            scroller.scrollBy({
                [direction === "row" ? "left" : "top"]: scrollAmount,
                behavior: "smooth"
            });
        }
    };
    const handleScrollPrev = ()=>{
        const scroller = scrollerRef.current;
        if (scroller) {
            const scrollAmount = direction === "row" ? scroller.clientWidth / 2 : scroller.clientHeight / 2;
            scroller.scrollBy({
                [direction === "row" ? "left" : "top"]: -scrollAmount,
                behavior: "smooth"
            });
        }
    };
    const wrappedChildren = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child, index)=>{
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) {
            const { onClick: childOnClick, onKeyDown: childOnKeyDown, ...otherProps } = child.props;
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                ...otherProps,
                onClick: (e)=>{
                    childOnClick?.(e);
                    onItemClick?.(index);
                },
                onKeyDown: (e)=>{
                    childOnKeyDown?.(e);
                    if (e.key === "Enter" || e.key === " ") {
                        childOnClick?.(e);
                        onItemClick?.(index);
                    }
                }
            });
        }
        return child;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        fillWidth: true,
        position: "relative",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container, className),
        style: style,
        ...rest,
        children: [
            showPrevButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Fade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fade"], {
                to: "right",
                width: 4,
                fillHeight: true,
                position: "absolute",
                left: "0",
                zIndex: 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                    icon: direction === "row" ? "chevronLeft" : "chevronUp",
                    onClick: handleScrollPrev,
                    onKeyDown: (e)=>{
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleScrollPrev();
                        }
                    },
                    size: "s",
                    variant: "secondary",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollButton, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollButtonPrev),
                    "aria-label": "Scroll Previous"
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Scroller.tsx",
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Scroller.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                fillWidth: true,
                zIndex: 0,
                position: "relative",
                radius: "m",
                direction: direction,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scroller, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][direction]),
                ref: scrollerRef,
                children: wrappedChildren
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Scroller.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            showNextButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Fade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fade"], {
                to: "left",
                width: 4,
                fillHeight: true,
                position: "absolute",
                right: "0",
                zIndex: 1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                    icon: direction === "row" ? "chevronRight" : "chevronDown",
                    onClick: handleScrollNext,
                    onKeyDown: (e)=>{
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleScrollNext();
                        }
                    },
                    size: "s",
                    variant: "secondary",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollButton, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrollButtonNext),
                    "aria-label": "Scroll Next"
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Scroller.tsx",
                    lineNumber: 143,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Scroller.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Scroller.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
Scroller.displayName = "Scroller";
;
}}),
"[project]/src/once-ui/components/Carousel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Carousel": (()=>Carousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/RevealFx.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/SmartImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Scroller.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Carousel = ({ images = [], indicator = "line", aspectRatio = "16 / 9", sizes, revealedByDefault = false, ...rest })=>{
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(revealedByDefault);
    const [initialTransition, setInitialTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(revealedByDefault);
    const nextImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const transitionTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const preloadNextImage = (nextIndex)=>{
        if (nextIndex >= 0 && nextIndex < images.length) {
            nextImageRef.current = new Image();
            nextImageRef.current.src = images[nextIndex].src;
        }
    };
    const handleImageClick = ()=>{
        if (images.length > 1) {
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);
        }
    };
    const handleControlClick = (nextIndex)=>{
        if (nextIndex !== activeIndex && !transitionTimeoutRef.current) {
            preloadNextImage(nextIndex);
            setIsTransitioning(false);
            transitionTimeoutRef.current = setTimeout(()=>{
                setActiveIndex(nextIndex);
                setTimeout(()=>{
                    setIsTransitioning(true);
                    transitionTimeoutRef.current = undefined;
                }, 300);
            }, 800);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!revealedByDefault && !initialTransition) {
            setIsTransitioning(true);
            setInitialTransition(true);
        }
        return ()=>{
            if (transitionTimeoutRef.current) {
                clearTimeout(transitionTimeoutRef.current);
            }
        };
    }, [
        revealedByDefault,
        initialTransition
    ]);
    if (images.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        fillWidth: true,
        gap: "12",
        direction: "column",
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RevealFx"], {
                onClick: handleImageClick,
                fillWidth: true,
                trigger: isTransitioning,
                translateY: "16",
                aspectRatio: aspectRatio,
                speed: "fast",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartImage"], {
                    sizes: sizes,
                    priority: true,
                    radius: "l",
                    border: "neutral-alpha-weak",
                    alt: images[activeIndex]?.alt,
                    aspectRatio: aspectRatio,
                    src: images[activeIndex]?.src,
                    style: {
                        ...images.length > 1 && {
                            cursor: "pointer"
                        }
                    }
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Carousel.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Carousel.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: indicator === "line" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    gap: "4",
                    paddingX: "s",
                    fillWidth: true,
                    horizontal: "center",
                    children: images.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                            onClick: ()=>handleControlClick(index),
                            style: {
                                background: activeIndex === index ? "var(--neutral-on-background-strong)" : "var(--neutral-alpha-medium)",
                                transition: "background 0.3s ease"
                            },
                            cursor: "interactive",
                            fillWidth: true,
                            height: "2"
                        }, index, false, {
                            fileName: "[project]/src/once-ui/components/Carousel.tsx",
                            lineNumber: 110,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Carousel.tsx",
                    lineNumber: 108,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scroller"], {
                    fillWidth: true,
                    gap: "4",
                    onItemClick: handleControlClick,
                    children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                            style: {
                                border: activeIndex === index ? "2px solid var(--brand-solid-strong)" : "none",
                                borderRadius: "var(--radius-m-nest-4)",
                                transition: "border 0.3s ease"
                            },
                            cursor: "interactive",
                            padding: "4",
                            width: "80",
                            height: "80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SmartImage"], {
                                alt: image.alt,
                                aspectRatio: "1 / 1",
                                sizes: "120px",
                                src: image.src,
                                cursor: "interactive",
                                radius: "m",
                                transition: "macro-medium"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/Carousel.tsx",
                                lineNumber: 141,
                                columnNumber: 19
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/once-ui/components/Carousel.tsx",
                            lineNumber: 129,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Carousel.tsx",
                    lineNumber: 127,
                    columnNumber: 13
                }, this)
            }, void 0, false)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Carousel.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
};
Carousel.displayName = "Carousel";
;
}}),
"[project]/src/once-ui/components/Card.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "card": "Card-module-scss-module__XSjb6G__card",
});
}}),
"[project]/src/once-ui/components/Card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Card": (()=>Card)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Card.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ElementType.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, href, onClick, style, className, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("reset-button-styles", "fill-width", onClick && "focus-ring", onClick && "radius-l"),
        href: href,
        onClick: onClick,
        ref: ref,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            background: "surface",
            transition: "macro-medium",
            border: "neutral-medium",
            cursor: "interactive",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Card$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
            onClick: onClick,
            ...rest,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/Card.tsx",
            lineNumber: 23,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Card.tsx",
        lineNumber: 18,
        columnNumber: 7
    }, this);
});
Card.displayName = "Card";
;
}}),
"[project]/src/once-ui/components/Column.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Column": (()=>Column)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Column = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column",
        ref: ref,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Column.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
});
Column.displayName = "Column";
;
}}),
"[project]/src/once-ui/components/SharedInteractiveStyles.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "checked": "SharedInteractiveStyles-module-scss-module__Kps8sq__checked",
  "container": "SharedInteractiveStyles-module-scss-module__Kps8sq__container",
  "disabled": "SharedInteractiveStyles-module-scss-module__Kps8sq__disabled",
  "element": "SharedInteractiveStyles-module-scss-module__Kps8sq__element",
  "hidden": "SharedInteractiveStyles-module-scss-module__Kps8sq__hidden",
  "icon": "SharedInteractiveStyles-module-scss-module__Kps8sq__icon",
  "indeterminate": "SharedInteractiveStyles-module-scss-module__Kps8sq__indeterminate",
  "scaleIn": "SharedInteractiveStyles-module-scss-module__Kps8sq__scaleIn",
  "scaleInCenter": "SharedInteractiveStyles-module-scss-module__Kps8sq__scaleInCenter",
});
}}),
"[project]/src/once-ui/components/InteractiveDetails.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InteractiveDetails": (()=>InteractiveDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const InteractiveDetails = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ label, description, iconButtonProps, onClick, className, id }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        direction: "column",
        className: className,
        onClick: onClick,
        id: id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                gap: "4",
                vertical: "center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        as: "span",
                        variant: "label-default-m",
                        onBackground: "neutral-strong",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/InteractiveDetails.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    iconButtonProps?.tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                            size: "s",
                            variant: "ghost",
                            icon: "helpCircle",
                            ...iconButtonProps
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/InteractiveDetails.tsx",
                            lineNumber: 27,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/InteractiveDetails.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/InteractiveDetails.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                as: "span",
                variant: "body-default-s",
                onBackground: "neutral-weak",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/InteractiveDetails.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/InteractiveDetails.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
});
InteractiveDetails.displayName = "InteractiveDetails";
;
}}),
"[project]/src/once-ui/components/Checkbox.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Checkbox": (()=>Checkbox)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/SharedInteractiveStyles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InteractiveDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/InteractiveDetails.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const generateId = ()=>`checkbox-${Math.random().toString(36).substring(2, 9)}`;
const Checkbox = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ style, className, isChecked: controlledIsChecked, isIndeterminate = false, onToggle, disabled, ...props }, ref)=>{
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(controlledIsChecked || false);
    const [checkboxId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(generateId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (controlledIsChecked !== undefined) {
            setIsChecked(controlledIsChecked);
        }
    }, [
        controlledIsChecked
    ]);
    const toggleItem = ()=>{
        if (disabled) return;
        if (onToggle) {
            onToggle();
        } else {
            setIsChecked(!isChecked);
        }
    };
    const handleKeyDown = (event)=>{
        if (disabled) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleItem();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        vertical: "center",
        gap: "16",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container, className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled]: disabled
        }),
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "checkbox",
                ref: ref,
                "aria-checked": isIndeterminate ? "mixed" : controlledIsChecked !== undefined ? controlledIsChecked : isChecked,
                checked: controlledIsChecked !== undefined ? controlledIsChecked : isChecked,
                onChange: toggleItem,
                disabled: disabled,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden,
                tabIndex: -1,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Checkbox.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                style: {
                    borderRadius: "min(var(--static-space-4), var(--radius-xs))"
                },
                role: "checkbox",
                position: "relative",
                tabIndex: 0,
                horizontal: "center",
                vertical: "center",
                radius: "xs",
                "aria-checked": isIndeterminate ? "mixed" : controlledIsChecked !== undefined ? controlledIsChecked : isChecked,
                "aria-labelledby": checkboxId,
                onClick: toggleItem,
                onKeyDown: handleKeyDown,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].element, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checked]: controlledIsChecked !== undefined ? controlledIsChecked || isIndeterminate : isChecked,
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled]: disabled
                }),
                children: [
                    (controlledIsChecked !== undefined ? controlledIsChecked : isChecked) && !isIndeterminate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            onSolid: "brand-strong",
                            name: "check",
                            size: "xs"
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/Checkbox.tsx",
                            lineNumber: 114,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Checkbox.tsx",
                        lineNumber: 113,
                        columnNumber: 15
                    }, this),
                    isIndeterminate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            onSolid: "brand-strong",
                            name: "minus",
                            size: "xs"
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/Checkbox.tsx",
                            lineNumber: 119,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Checkbox.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/Checkbox.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            props.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InteractiveDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractiveDetails"], {
                id: checkboxId,
                ...props,
                onClick: toggleItem
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Checkbox.tsx",
                lineNumber: 123,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Checkbox.tsx",
        lineNumber: 58,
        columnNumber: 7
    }, this);
});
Checkbox.displayName = "Checkbox";
;
}}),
"[project]/src/once-ui/components/Chip.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "chip": "Chip-module-scss-module__X0NaDa__chip",
  "selected": "Chip-module-scss-module__X0NaDa__selected",
  "unselected": "Chip-module-scss-module__X0NaDa__unselected",
});
}}),
"[project]/src/once-ui/components/Chip.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Chip": (()=>Chip)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Chip$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Chip.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Chip = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ label, selected = true, prefixIcon, onRemove, onClick, children, iconButtonProps = {}, ...rest }, ref)=>{
    const defaultIconButtonProps = {
        icon: "close",
        variant: "ghost",
        size: "s",
        tooltip: "Remove",
        onClick: (e)=>{
            e.stopPropagation();
            if (onRemove) onRemove();
        }
    };
    const combinedIconButtonProps = {
        ...defaultIconButtonProps,
        ...iconButtonProps,
        onClick: (e)=>{
            defaultIconButtonProps.onClick?.(e);
            iconButtonProps.onClick?.(e);
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (onClick) onClick(e);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        fit: true,
        vertical: "center",
        radius: "full",
        paddingX: "8",
        paddingY: "4",
        role: "button",
        tabIndex: 0,
        onClick: onClick,
        onKeyDown: handleKeyDown,
        "aria-pressed": selected,
        cursor: "interactive",
        transition: "micro-medium",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Chip$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].chip, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Chip$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected]: selected,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Chip$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unselected]: !selected
        }),
        ...rest,
        children: [
            prefixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: prefixIcon,
                size: "s"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Chip.tsx",
                lineNumber: 82,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingX: "8",
                paddingY: "2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                    variant: "body-default-s",
                    children: label || children
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Chip.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Chip.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            onRemove && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                style: {
                    color: "inherit"
                },
                ...combinedIconButtonProps
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Chip.tsx",
                lineNumber: 87,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Chip.tsx",
        lineNumber: 62,
        columnNumber: 7
    }, this);
});
Chip.displayName = "Chip";
;
}}),
"[project]/src/once-ui/components/Input.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "base": "Input-module-scss-module__gIf6KW__base",
  "error": "Input-module-scss-module__gIf6KW__error",
  "filled": "Input-module-scss-module__gIf6KW__filled",
  "floating": "Input-module-scss-module__gIf6KW__floating",
  "focused": "Input-module-scss-module__gIf6KW__focused",
  "hasChildren": "Input-module-scss-module__gIf6KW__hasChildren",
  "input": "Input-module-scss-module__gIf6KW__input",
  "inputLabel": "Input-module-scss-module__gIf6KW__inputLabel",
  "label": "Input-module-scss-module__gIf6KW__label",
  "labelAsPlaceholder": "Input-module-scss-module__gIf6KW__labelAsPlaceholder",
  "m": "Input-module-scss-module__gIf6KW__m",
  "prefix": "Input-module-scss-module__gIf6KW__prefix",
  "s": "Input-module-scss-module__gIf6KW__s",
  "suffix": "Input-module-scss-module__gIf6KW__suffix",
  "textareaBase": "Input-module-scss-module__gIf6KW__textareaBase",
  "textareaLabel": "Input-module-scss-module__gIf6KW__textareaLabel",
});
}}),
"[project]/src/once-ui/hooks/useDebounce.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
const __TURBOPACK__default__export__ = useDebounce;
}}),
"[project]/src/once-ui/components/Input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/hooks/useDebounce.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ id, label, height = "m", error = false, errorMessage, description, radius, className, style, hasPrefix, hasSuffix, labelAsPlaceholder = false, children, onFocus, onBlur, validate, ...props }, ref)=>{
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFilled, setIsFilled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!props.value);
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const debouncedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.value, 1000);
    const handleFocus = (event)=>{
        setIsFocused(true);
        if (onFocus) onFocus(event);
    };
    const handleBlur = (event)=>{
        setIsFocused(false);
        if (event.target.value) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
        if (onBlur) onBlur(event);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsFilled(!!props.value);
    }, [
        props.value
    ]);
    const validateInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!debouncedValue) {
            setValidationError(null);
            return;
        }
        if (validate) {
            const error = validate(debouncedValue);
            if (error) {
                setValidationError(error);
            } else {
                setValidationError(errorMessage || null);
            }
        } else {
            setValidationError(null);
        }
    }, [
        debouncedValue,
        validate,
        errorMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        validateInput();
    }, [
        debouncedValue,
        validateInput
    ]);
    const displayError = validationError || errorMessage;
    const inputClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input, "font-body", "font-default", "font-m", {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filled]: isFilled,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].focused]: isFocused,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].withPrefix]: hasPrefix,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].withSuffix]: hasSuffix,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelAsPlaceholder]: labelAsPlaceholder,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasChildren]: children,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error]: displayError && debouncedValue !== ""
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        position: "relative",
        direction: "column",
        gap: "8",
        style: style,
        fillWidth: true,
        fitHeight: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error]: (error || displayError && debouncedValue !== "") && props.value !== ""
        }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                transition: "micro-medium",
                border: "neutral-medium",
                background: "neutral-alpha-weak",
                position: "relative",
                overflow: "hidden",
                vertical: "stretch",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].base, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].s]: height === "s"
                }, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].m]: height === "m"
                }, radius === "none" ? "radius-none" : radius ? `radius-l-${radius}` : "radius-l"),
                children: [
                    hasPrefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        paddingLeft: "12",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prefix,
                        children: hasPrefix
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Input.tsx",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        fillWidth: true,
                        direction: "column",
                        position: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ...props,
                                ref: ref,
                                id: id,
                                placeholder: labelAsPlaceholder ? label : props.placeholder,
                                onFocus: handleFocus,
                                onBlur: handleBlur,
                                className: inputClassNames,
                                "aria-describedby": displayError ? `${id}-error` : undefined,
                                "aria-invalid": !!displayError
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/Input.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, this),
                            !labelAsPlaceholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                as: "label",
                                variant: "label-default-m",
                                htmlFor: id,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inputLabel, {
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floating]: isFocused || isFilled
                                }),
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/Input.tsx",
                                lineNumber: 170,
                                columnNumber: 15
                            }, this),
                            children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/Input.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this),
                    hasSuffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        paddingRight: "12",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].suffix,
                        children: hasSuffix
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Input.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/Input.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, this),
            displayError && errorMessage !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingX: "16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                    as: "span",
                    id: `${id}-error`,
                    variant: "body-default-s",
                    onBackground: "danger-weak",
                    children: validationError || errorMessage
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Input.tsx",
                    lineNumber: 191,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Input.tsx",
                lineNumber: 190,
                columnNumber: 11
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingX: "16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                    as: "span",
                    id: `${id}-description`,
                    variant: "body-default-s",
                    onBackground: "neutral-weak",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Input.tsx",
                    lineNumber: 198,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Input.tsx",
                lineNumber: 197,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Input.tsx",
        lineNumber: 123,
        columnNumber: 7
    }, this);
});
Input.displayName = "Input";
;
}}),
"[project]/src/once-ui/components/ColorInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ColorInput": (()=>ColorInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ColorInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ label, id, value, onChange, ...props }, ref)=>{
    const colorInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleHexClick = ()=>{
        if (colorInputRef.current) {
            colorInputRef.current.click();
        }
    };
    const handleReset = ()=>{
        onChange({
            target: {
                value: ""
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        style: {
            cursor: "pointer"
        },
        id: id,
        ref: colorInputRef,
        label: label,
        type: "color",
        value: value,
        ...props,
        hasPrefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    style: {
                        width: value ? "var(--static-space-0)" : "var(--static-space-20)",
                        transform: value ? "scale(0)" : "scale(1)",
                        opacity: value ? "0" : "1",
                        transition: "0.2s ease-in-out all"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        padding: "2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            size: "xs",
                            name: "eyeDropper",
                            onBackground: "neutral-medium"
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/ColorInput.tsx",
                            lineNumber: 47,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/ColorInput.tsx",
                        lineNumber: 46,
                        columnNumber: 15
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/ColorInput.tsx",
                    lineNumber: 38,
                    columnNumber: 13
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    border: "neutral-strong",
                    className: `prefix ${value ? "" : "hidden"}`,
                    onClick: handleHexClick,
                    height: "20",
                    radius: "xs",
                    style: {
                        backgroundColor: value,
                        cursor: "pointer",
                        width: value ? "var(--static-space-20)" : "var(--static-space-0)",
                        transform: value ? "scale(1)" : "scale(0)",
                        opacity: value ? "1" : "0",
                        transition: "0.2s ease-in-out all"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/ColorInput.tsx",
                    lineNumber: 50,
                    columnNumber: 13
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/once-ui/components/ColorInput.tsx",
            lineNumber: 37,
            columnNumber: 11
        }, void 0),
        hasSuffix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            className: `suffix ${value ? "" : "hidden"}`,
            position: "absolute",
            style: {
                left: "var(--static-space-48)",
                cursor: "pointer",
                width: "calc(100% - var(--static-space-48))"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    onClick: handleHexClick,
                    fillWidth: true,
                    style: {
                        opacity: value ? "1" : "0",
                        transition: "opacity 0.2s ease-in-out"
                    },
                    children: value
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/ColorInput.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                }, void 0),
                value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                    onClick: handleReset,
                    variant: "secondary",
                    tooltip: "Remove",
                    tooltipPosition: "left",
                    icon: "close",
                    style: {
                        position: "absolute",
                        right: "var(--static-space-12)",
                        transform: "translateY(-50%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/ColorInput.tsx",
                    lineNumber: 88,
                    columnNumber: 15
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/once-ui/components/ColorInput.tsx",
            lineNumber: 68,
            columnNumber: 11
        }, void 0),
        onChange: onChange
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/ColorInput.tsx",
        lineNumber: 28,
        columnNumber: 7
    }, this);
});
ColorInput.displayName = "ColorInput";
;
}}),
"[project]/src/once-ui/components/DatePicker.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "ampmSelector": "DatePicker-module-scss-module__e_GARq__ampmSelector",
  "calendar": "DatePicker-module-scss-module__e_GARq__calendar",
  "dayButton": "DatePicker-module-scss-module__e_GARq__dayButton",
  "grid": "DatePicker-module-scss-module__e_GARq__grid",
  "l": "DatePicker-module-scss-module__e_GARq__l",
  "m": "DatePicker-module-scss-module__e_GARq__m",
  "monthButton": "DatePicker-module-scss-module__e_GARq__monthButton",
  "monthTransition": "DatePicker-module-scss-module__e_GARq__monthTransition",
  "s": "DatePicker-module-scss-module__e_GARq__s",
  "slideLeft": "DatePicker-module-scss-module__e_GARq__slideLeft",
  "slideRight": "DatePicker-module-scss-module__e_GARq__slideRight",
  "timeInput": "DatePicker-module-scss-module__e_GARq__timeInput",
  "timeSelector": "DatePicker-module-scss-module__e_GARq__timeSelector",
  "timeWrapper": "DatePicker-module-scss-module__e_GARq__timeWrapper",
  "vertical": "DatePicker-module-scss-module__e_GARq__vertical",
  "verticalTimeLabel": "DatePicker-module-scss-module__e_GARq__verticalTimeLabel",
  "xl": "DatePicker-module-scss-module__e_GARq__xl",
  "xs": "DatePicker-module-scss-module__e_GARq__xs",
});
}}),
"[project]/src/once-ui/components/Grid.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Grid": (()=>Grid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const Grid = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ as: Component = "div", inline, columns, gap, position, aspectRatio, align, textVariant, textSize, textWeight, textType, tabletColumns, mobileColumns, padding, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingX, paddingY, margin, marginLeft, marginRight, marginTop, marginBottom, marginX, marginY, width, height, maxWidth, minWidth, minHeight, maxHeight, top, right, bottom, left, fit, fill, fillWidth = false, fillHeight = false, fitWidth, fitHeight, hide, show, background, solid, opacity, transition, pointerEvents, border, borderTop, borderRight, borderBottom, borderLeft, borderStyle, borderWidth, radius, topRadius, rightRadius, bottomRadius, leftRadius, topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius, overflow, overflowX, overflowY, cursor, zIndex, shadow, className, style, children, ...rest }, ref)=>{
    const generateDynamicClass = (type, value)=>{
        if (!value) return undefined;
        if (value === "transparent") {
            return `transparent-border`;
        }
        if (value === "surface" || value === "page" || value === "transparent") {
            return `${value}-${type}`;
        }
        const parts = value.split("-");
        if (parts.includes("alpha")) {
            const [scheme, , weight] = parts;
            return `${scheme}-${type}-alpha-${weight}`;
        }
        const [scheme, weight] = value.split("-");
        return `${scheme}-${type}-${weight}`;
    };
    const parseDimension = (value, type)=>{
        if (value === undefined) return undefined;
        if (typeof value === "number") return `${value}rem`;
        if ([
            "0",
            "1",
            "2",
            "4",
            "8",
            "12",
            "16",
            "20",
            "24",
            "32",
            "40",
            "48",
            "56",
            "64",
            "80",
            "104",
            "128",
            "160"
        ].includes(value)) {
            return `var(--static-space-${value})`;
        }
        if ([
            "xs",
            "s",
            "m",
            "l",
            "xl"
        ].includes(value)) {
            return `var(--responsive-${type}-${value})`;
        }
        return undefined;
    };
    const classes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(inline ? "display-inline-grid" : "display-grid", fit && "fit", fitWidth && "fit-width", fitHeight && "fit-height", fill && "fill", (fillWidth || maxWidth) && "fill-width", (fillHeight || maxHeight) && "fill-height", columns && `columns-${columns}`, tabletColumns && `tablet-columns-${tabletColumns}`, mobileColumns && `mobile-columns-${mobileColumns}`, overflow && `overflow-${overflow}`, overflowX && `overflow-x-${overflowX}`, overflowY && `overflow-y-${overflowY}`, padding && `p-${padding}`, paddingLeft && `pl-${paddingLeft}`, paddingRight && `pr-${paddingRight}`, paddingTop && `pt-${paddingTop}`, paddingBottom && `pb-${paddingBottom}`, paddingX && `px-${paddingX}`, paddingY && `py-${paddingY}`, margin && `m-${margin}`, marginLeft && `ml-${marginLeft}`, marginRight && `mr-${marginRight}`, marginTop && `mt-${marginTop}`, marginBottom && `mb-${marginBottom}`, marginX && `mx-${marginX}`, marginY && `my-${marginY}`, gap && `g-${gap}`, top && `top-${top}`, right && `right-${right}`, bottom && `bottom-${bottom}`, left && `left-${left}`, generateDynamicClass("background", background), generateDynamicClass("solid", solid), generateDynamicClass("border", border || borderTop || borderRight || borderBottom || borderLeft), (border || borderTop || borderRight || borderBottom || borderLeft) && !borderStyle && "border-solid", border && !borderWidth && `border-1`, (borderTop || borderRight || borderBottom || borderLeft) && "border-reset", borderTop && "border-top-1", borderRight && "border-right-1", borderBottom && "border-bottom-1", borderLeft && "border-left-1", borderWidth && `border-${borderWidth}`, borderStyle && `border-${borderStyle}`, radius === "full" ? "radius-full" : radius && `radius-${radius}`, topRadius && `radius-${topRadius}-top`, rightRadius && `radius-${rightRadius}-right`, bottomRadius && `radius-${bottomRadius}-bottom`, leftRadius && `radius-${leftRadius}-left`, topLeftRadius && `radius-${topLeftRadius}-top-left`, topRightRadius && `radius-${topRightRadius}-top-right`, bottomLeftRadius && `radius-${bottomLeftRadius}-bottom-left`, bottomRightRadius && `radius-${bottomRightRadius}-bottom-right`, hide === "s" && `${hide}-grid-hide`, show === "s" && `${show}-grid-show`, pointerEvents && `pointer-events-${pointerEvents}`, transition && `transition-${transition}`, shadow && `shadow-${shadow}`, position && `position-${position}`, zIndex && `z-index-${zIndex}`, textType && `font-${textType}`, cursor && `cursor-${cursor}`, className);
    const combinedStyle = {
        maxWidth: parseDimension(maxWidth, "width"),
        minWidth: parseDimension(minWidth, "width"),
        minHeight: parseDimension(minHeight, "height"),
        maxHeight: parseDimension(maxHeight, "height"),
        width: parseDimension(width, "width"),
        height: parseDimension(height, "height"),
        aspectRatio: aspectRatio,
        textAlign: align,
        ...style
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        ref: ref,
        className: classes,
        style: combinedStyle,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Grid.tsx",
        lineNumber: 249,
        columnNumber: 7
    }, this);
});
Grid.displayName = "Grid";
;
}}),
"[project]/src/once-ui/components/ToggleButton.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "button": "ToggleButton-module-scss-module__RznYGW__button",
  "ghost": "ToggleButton-module-scss-module__RznYGW__ghost",
  "l": "ToggleButton-module-scss-module__RznYGW__l",
  "m": "ToggleButton-module-scss-module__RznYGW__m",
  "outline": "ToggleButton-module-scss-module__RznYGW__outline",
  "s": "ToggleButton-module-scss-module__RznYGW__s",
  "selected": "ToggleButton-module-scss-module__RznYGW__selected",
});
}}),
"[project]/src/once-ui/components/ToggleButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ToggleButton": (()=>ToggleButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ElementType.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToggleButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/ToggleButton.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ToggleButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ label, selected, variant = "ghost", size = "m", radius, justifyContent = "center", fillWidth = false, weight = "default", truncate = false, prefixIcon, suffixIcon, className, style, children, href, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"], {
        ref: ref,
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToggleButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToggleButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToggleButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size], selected && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToggleButton$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected, radius === "none" ? "radius-none" : radius ? `radius-${size}-${radius}` : `radius-${size}`, "text-decoration-none", "button", "cursor-interactive", {
            ["fill-width"]: fillWidth,
            ["fit-width"]: !fillWidth,
            ["justify-" + justifyContent]: justifyContent
        }, className),
        style: style,
        ...props,
        children: [
            prefixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: prefixIcon,
                size: size === "l" ? "s" : "xs"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/ToggleButton.tsx",
                lineNumber: 87,
                columnNumber: 24
            }, this),
            (label || children) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                padding: size === "s" ? "2" : "4",
                textWeight: weight,
                textSize: size === "l" ? "m" : "s",
                className: "font-label",
                children: label || children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/ToggleButton.tsx",
                lineNumber: 89,
                columnNumber: 11
            }, this),
            suffixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: suffixIcon,
                size: size === "l" ? "m" : "s"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/ToggleButton.tsx",
                lineNumber: 98,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/ToggleButton.tsx",
        lineNumber: 61,
        columnNumber: 7
    }, this);
});
ToggleButton.displayName = "ToggleButton";
;
}}),
"[project]/src/once-ui/components/SegmentedControl.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SegmentedControl": (()=>SegmentedControl)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Scroller.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToggleButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ToggleButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const SegmentedControl = ({ buttons, onToggle, defaultSelected, fillWidth = true, selected, className, style, ...scrollerProps })=>{
    const [internalSelected, setInternalSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (selected !== undefined) return selected;
        if (defaultSelected !== undefined) return defaultSelected;
        return buttons[0]?.value || "";
    });
    const buttonRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (selected !== undefined) {
            setInternalSelected(selected);
        }
    }, [
        selected
    ]);
    const handleButtonClick = (clickedButton, event)=>{
        event.stopPropagation();
        const newSelected = clickedButton.value;
        setInternalSelected(newSelected);
        onToggle(newSelected, event);
    };
    const handleKeyDown = (event)=>{
        const focusedIndex = buttonRefs.current.findIndex((ref)=>ref === document.activeElement);
        switch(event.key){
            case "ArrowLeft":
            case "ArrowUp":
                event.preventDefault();
                const prevIndex = focusedIndex === -1 ? buttons.length - 1 // If nothing is focused, focus the last item
                 : focusedIndex > 0 ? focusedIndex - 1 : buttons.length - 1;
                buttonRefs.current[prevIndex]?.focus();
                break;
            case "ArrowRight":
            case "ArrowDown":
                event.preventDefault();
                const nextIndex = focusedIndex === -1 ? 0 // If nothing is focused, focus the first item
                 : focusedIndex < buttons.length - 1 ? focusedIndex + 1 : 0;
                buttonRefs.current[nextIndex]?.focus();
                break;
            case "Enter":
            case " ":
                event.preventDefault();
                if (focusedIndex >= 0 && focusedIndex < buttons.length) {
                    const focusedButton = buttons[focusedIndex];
                    setInternalSelected(focusedButton.value);
                    onToggle(focusedButton.value);
                }
                break;
            default:
                return;
        }
    };
    const selectedIndex = buttons.findIndex((button)=>button.value === internalSelected);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scroller"], {
        direction: "row",
        minWidth: 0,
        ...scrollerProps,
        role: "tablist",
        "aria-orientation": "horizontal",
        onKeyDown: handleKeyDown,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            fillWidth: true,
            gap: "-1",
            children: buttons.map((button, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToggleButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToggleButton"], {
                    ref: (el)=>{
                        buttonRefs.current[index] = el;
                    },
                    variant: "outline",
                    radius: index === 0 ? "left" : index === buttons.length - 1 ? "right" : "none",
                    selected: index === selectedIndex,
                    onClick: (event)=>handleButtonClick(button, event),
                    role: "tab",
                    className: className,
                    style: style,
                    "aria-selected": index === selectedIndex,
                    "aria-controls": `panel-${button.value}`,
                    tabIndex: index === selectedIndex ? 0 : -1,
                    fillWidth: fillWidth,
                    ...button
                }, button.value, false, {
                    fileName: "[project]/src/once-ui/components/SegmentedControl.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/SegmentedControl.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/SegmentedControl.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
};
SegmentedControl.displayName = "SegmentedControl";
;
}}),
"[project]/src/once-ui/components/NumberInput.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "numberInput": "NumberInput-module-scss-module__3ZalcG__numberInput",
  "stepper": "NumberInput-module-scss-module__3ZalcG__stepper",
});
}}),
"[project]/src/once-ui/components/NumberInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NumberInput": (()=>NumberInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NumberInput$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/NumberInput.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const NumberInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ value, onChange, min, max, step = 1, padStart, ...props }, ref)=>{
    const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(padStart && value !== undefined ? value.toString().padStart(padStart, "0") : value?.toString() ?? "");
    const handleChange = (e)=>{
        const newValue = e.target.value;
        setLocalValue(newValue);
        const numValue = parseFloat(newValue);
        if (!isNaN(numValue) && onChange) {
            onChange(numValue);
        }
    };
    const updateValue = (newValue)=>{
        const formattedValue = padStart ? newValue.toString().padStart(padStart, "0") : newValue.toString();
        setLocalValue(formattedValue);
        onChange?.(newValue);
    };
    const increment = ()=>{
        const currentValue = parseFloat(localValue) || 0;
        const newValue = currentValue + step;
        if (max === undefined || newValue <= max) {
            updateValue(newValue);
        }
    };
    const decrement = ()=>{
        const currentValue = parseFloat(localValue) || 0;
        const newValue = currentValue - step;
        if (min === undefined || newValue >= min) {
            updateValue(newValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        ...props,
        ref: ref,
        type: "number",
        value: localValue,
        onChange: handleChange,
        min: min,
        max: max,
        step: step,
        hasSuffix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    minWidth: 1.25
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/NumberInput.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    position: "absolute",
                    right: "0",
                    top: "0",
                    direction: "column",
                    borderLeft: "neutral-medium",
                    fillHeight: true,
                    background: "neutral-alpha-weak",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                            fillHeight: true,
                            borderBottom: "neutral-medium",
                            paddingX: "4",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NumberInput$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepper, "transition-micro-medium"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                icon: "chevronUp",
                                variant: "ghost",
                                size: "s",
                                onClick: increment,
                                "aria-label": "Increment value"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/NumberInput.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/NumberInput.tsx",
                            lineNumber: 84,
                            columnNumber: 15
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                            fillHeight: true,
                            paddingX: "4",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NumberInput$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepper, "transition-micro-medium"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                icon: "chevronDown",
                                variant: "ghost",
                                size: "s",
                                onClick: decrement,
                                "aria-label": "Decrement value"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/NumberInput.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/NumberInput.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/once-ui/components/NumberInput.tsx",
                    lineNumber: 75,
                    columnNumber: 13
                }, void 0)
            ]
        }, void 0, true),
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NumberInput$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].numberInput
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/NumberInput.tsx",
        lineNumber: 63,
        columnNumber: 7
    }, this);
});
NumberInput.displayName = "NumberInput";
;
}}),
"[project]/src/once-ui/components/DatePicker.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DatePicker": (()=>DatePicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DatePicker$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/DatePicker.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/RevealFx.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/SegmentedControl.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NumberInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/NumberInput.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const DatePicker = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ value, onChange, timePicker = false, previousMonth = true, nextMonth = true, minDate, maxDate, defaultDate, defaultTime, size = "m", className, style, currentMonth: propCurrentMonth, currentYear: propCurrentYear, onMonthChange, range, onHover, ...rest }, ref)=>{
    const today = new Date();
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTime);
    const [isPM, setIsPM] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTime?.hours ? defaultTime.hours >= 12 : false);
    const [isTimeSelector, setIsTimeSelector] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentMonth, setCurrentMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value ? value.getMonth() : today.getMonth());
    const [currentYear, setCurrentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value ? value.getFullYear() : today.getFullYear());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof propCurrentMonth === "number") {
            setCurrentMonth(propCurrentMonth);
        }
        if (typeof propCurrentYear === "number") {
            setCurrentYear(propCurrentYear);
        }
    }, [
        propCurrentMonth,
        propCurrentYear
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setSelectedDate(value);
        if (value) {
            setSelectedTime({
                hours: value.getHours(),
                minutes: value.getMinutes()
            });
            setIsPM(value.getHours() >= 12);
        }
    }, [
        value
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setIsTransitioning(true);
        }, 100);
        return ()=>clearTimeout(timer);
    }, []);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const dayNames = [
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa"
    ];
    const handleTimeToggle = (show)=>{
        setIsTransitioning(false);
        setTimeout(()=>{
            setIsTimeSelector(show);
            setIsTransitioning(true);
        }, 400);
    };
    const handleDateSelect = (date)=>{
        const newDate = new Date(date);
        if (timePicker && selectedDate && selectedTime) {
            newDate.setHours(selectedTime.hours);
            newDate.setMinutes(selectedTime.minutes);
        }
        setSelectedDate(newDate);
        if (timePicker) {
            handleTimeToggle(true);
        } else {
            onChange?.(newDate);
        }
    };
    const handleMonthChange = (increment)=>{
        if (onMonthChange) {
            // Delegate to external handler
            onMonthChange(increment);
        } else {
            // Fallback to internal state management
            const newMonth = currentMonth + increment;
            if (newMonth < 0) {
                setCurrentMonth(11); // December
                setCurrentYear(currentYear - 1);
            } else if (newMonth > 11) {
                setCurrentMonth(0); // January
                setCurrentYear(currentYear + 1);
            } else {
                setCurrentMonth(newMonth);
            }
        }
    };
    const convert24to12 = (hour24)=>{
        if (hour24 === 0) return 12;
        if (hour24 > 12) return hour24 - 12;
        return hour24;
    };
    const handleTimeChange = (hours, minutes, pm = isPM)=>{
        if (!selectedDate) return;
        const newTime = {
            hours: pm ? hours === 12 ? 12 : hours + 12 : hours === 12 ? 0 : hours,
            minutes
        };
        setSelectedTime(newTime);
        setIsPM(pm);
        const newDate = new Date(selectedDate);
        newDate.setHours(newTime.hours);
        newDate.setMinutes(minutes);
        onChange?.(newDate);
    };
    const isInRange = (date)=>{
        if (!range?.startDate) return false;
        if (!range?.endDate) return false;
        return date >= range.startDate && date <= range.endDate;
    };
    const renderCalendarGrid = ()=>{
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
        // Calculate total number of weeks needed
        const totalDaysShown = firstDay + daysInMonth;
        const numberOfWeeks = Math.ceil(totalDaysShown / 7);
        const totalGridSpots = numberOfWeeks * 7;
        const days = [];
        // Previous month's days
        for(let i = 0; i < firstDay; i++){
            const prevMonthDay = daysInPrevMonth - firstDay + i + 1;
            days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingY: "2",
                width: "40",
                height: "40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    fillWidth: true,
                    weight: "default",
                    variant: "tertiary",
                    size: "m",
                    type: "button",
                    disabled: true,
                    children: prevMonthDay
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                    lineNumber: 213,
                    columnNumber: 13
                }, this)
            }, `prev-${currentYear}-${currentMonth}-${i}`, false, {
                fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                lineNumber: 207,
                columnNumber: 11
            }, this));
        }
        // Current month's days
        for(let day = 1; day <= daysInMonth; day++){
            const currentDate = new Date(currentYear, currentMonth, day);
            const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonth && selectedDate?.getFullYear() === currentYear || value instanceof Date && value.getTime() === currentDate.getTime() || range?.startDate?.getTime() === currentDate.getTime() || range?.endDate?.getTime() === currentDate.getTime();
            const isFirstInRange = range?.startDate && currentDate.getTime() === range.startDate.getTime();
            const isLastInRange = range?.endDate && currentDate.getTime() === range.endDate.getTime();
            // Check if the current date is out of the minDate and maxDate range
            const isDisabled = minDate && currentDate < minDate || maxDate && currentDate > maxDate;
            days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingY: "2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    width: "40",
                    height: "40",
                    background: isInRange(currentDate) ? "neutral-alpha-weak" : undefined,
                    borderTop: isInRange(currentDate) ? "neutral-alpha-weak" : "transparent",
                    borderBottom: isInRange(currentDate) ? "neutral-alpha-weak" : "transparent",
                    leftRadius: isFirstInRange ? "m" : undefined,
                    rightRadius: isLastInRange ? "m" : undefined,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        fillWidth: true,
                        weight: isSelected ? "strong" : "default",
                        variant: isSelected ? "primary" : "tertiary",
                        size: "m",
                        onClick: ()=>!isDisabled && handleDateSelect(currentDate),
                        onMouseEnter: ()=>onHover?.(currentDate),
                        onMouseLeave: ()=>onHover?.(null),
                        disabled: isDisabled,
                        children: day
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                        lineNumber: 249,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                    lineNumber: 240,
                    columnNumber: 13
                }, this)
            }, `day-${currentYear}-${currentMonth}-${day}`, false, {
                fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                lineNumber: 239,
                columnNumber: 11
            }, this));
        }
        const remainingDays = totalGridSpots - days.length;
        for(let i = 1; i <= remainingDays; i++){
            days.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                marginTop: "2",
                width: "40",
                height: "40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    fillWidth: true,
                    weight: "default",
                    variant: "tertiary",
                    size: "m",
                    type: "button",
                    disabled: true,
                    children: i
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                    lineNumber: 276,
                    columnNumber: 13
                }, this)
            }, `next-${currentYear}-${currentMonth}-${i}`, false, {
                fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                lineNumber: 270,
                columnNumber: 11
            }, this));
        }
        return days;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DatePicker$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].calendar, className),
        style: style,
        direction: "column",
        fillWidth: true,
        horizontal: "center",
        gap: size,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                fillWidth: true,
                center: true,
                children: isTimeSelector ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    horizontal: "center",
                    fillWidth: true,
                    direction: "column",
                    gap: "8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                            variant: `label-default-${size}`,
                            onBackground: "neutral-strong",
                            children: [
                                monthNames[currentMonth],
                                " ",
                                currentYear
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                            lineNumber: 300,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                            className: "cursor-interactive",
                            variant: "label-default-s",
                            onBackground: "brand-weak",
                            onClick: ()=>handleTimeToggle(false),
                            children: "Back to calendar"
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                            lineNumber: 303,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                    lineNumber: 299,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        previousMonth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                            variant: "tertiary",
                            size: size === "l" ? "l" : "m",
                            icon: "chevronLeft",
                            onClick: (event)=>{
                                event.preventDefault();
                                event.stopPropagation();
                                handleMonthChange(-1);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                            lineNumber: 315,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                            fillWidth: true,
                            direction: "column",
                            horizontal: "center",
                            gap: "8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: `body-default-${size}`,
                                    onBackground: "neutral-strong",
                                    children: [
                                        monthNames[currentMonth],
                                        " ",
                                        currentYear
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                                    lineNumber: 327,
                                    columnNumber: 17
                                }, this),
                                timePicker && selectedTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: "label-default-s",
                                    onBackground: "neutral-weak",
                                    children: `${selectedTime.hours.toString().padStart(2, "0")}:${selectedTime.minutes.toString().padStart(2, "0")} ${isPM ? "PM" : "AM"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                                    lineNumber: 331,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                            lineNumber: 326,
                            columnNumber: 15
                        }, this),
                        nextMonth && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                            variant: "tertiary",
                            size: size === "l" ? "l" : "m",
                            icon: "chevronRight",
                            onClick: (event)=>{
                                event.preventDefault();
                                event.stopPropagation();
                                handleMonthChange(1);
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                            lineNumber: 337,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RevealFx"], {
                fillWidth: true,
                horizontal: "center",
                vertical: "center",
                trigger: isTransitioning,
                speed: "fast",
                children: isTimeSelector ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    maxWidth: 24,
                    horizontal: "center",
                    vertical: "center",
                    direction: "column",
                    padding: "32",
                    gap: "32",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                            buttons: [
                                {
                                    value: "AM",
                                    label: "AM"
                                },
                                {
                                    value: "PM",
                                    label: "PM"
                                }
                            ],
                            selected: isPM ? "PM" : "AM",
                            onToggle: (value)=>handleTimeChange(selectedTime?.hours ?? 0, selectedTime?.minutes ?? 0, value === "PM")
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                            lineNumber: 369,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                            fillWidth: true,
                            gap: "16",
                            vertical: "center",
                            "data-scaling": "110",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NumberInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberInput"], {
                                    id: "hours",
                                    label: "Hours",
                                    labelAsPlaceholder: true,
                                    min: 1,
                                    max: 12,
                                    value: selectedTime?.hours ? convert24to12(selectedTime.hours) : 12,
                                    onChange: (value)=>{
                                        if (value >= 1 && value <= 12) {
                                            handleTimeChange(value, selectedTime?.minutes ?? 0);
                                        }
                                    },
                                    "aria-label": "Hours"
                                }, void 0, false, {
                                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                                    lineNumber: 390,
                                    columnNumber: 17
                                }, this),
                                ":",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NumberInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NumberInput"], {
                                    id: "minutes",
                                    label: "Minutes",
                                    labelAsPlaceholder: true,
                                    min: 0,
                                    max: 59,
                                    padStart: 2,
                                    value: selectedTime?.minutes ?? 0,
                                    onChange: (value)=>{
                                        if (value >= 0 && value <= 59) {
                                            handleTimeChange(selectedTime?.hours ?? 0, value);
                                        }
                                    },
                                    "aria-label": "Minutes"
                                }, void 0, false, {
                                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                                    lineNumber: 405,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                            lineNumber: 389,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                    lineNumber: 361,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
                    fitWidth: true,
                    columns: "7",
                    children: [
                        dayNames.map((day)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                marginBottom: "16",
                                variant: "label-default-m",
                                onBackground: "neutral-medium",
                                align: "center",
                                children: day
                            }, day, false, {
                                fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                                lineNumber: 425,
                                columnNumber: 17
                            }, this)),
                        renderCalendarGrid()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                    lineNumber: 423,
                    columnNumber: 13
                }, this)
            }, isTimeSelector ? "time" : "date", false, {
                fileName: "[project]/src/once-ui/components/DatePicker.tsx",
                lineNumber: 352,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/DatePicker.tsx",
        lineNumber: 287,
        columnNumber: 7
    }, this);
});
DatePicker.displayName = "DatePicker";
;
}}),
"[project]/src/once-ui/components/DropdownWrapper.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "fadeIn": "DropdownWrapper-module-scss-module__GuWtMa__fadeIn",
});
}}),
"[project]/src/once-ui/components/Dropdown.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Dropdown": (()=>Dropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Dropdown = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ selectedOption, className, children, onEscape, onSelect, ...rest }, ref)=>{
    const handleSelect = (event)=>{
        const value = event.currentTarget.getAttribute("data-value");
        if (onSelect && value) {
            onSelect(value);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        role: "listbox",
        onClick: handleSelect,
        flex: 1,
        border: "neutral-medium",
        background: "surface",
        overflow: "hidden",
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            flex: 1,
            overflowY: "auto",
            direction: "column",
            gap: "2",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/Dropdown.tsx",
            lineNumber: 32,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Dropdown.tsx",
        lineNumber: 23,
        columnNumber: 7
    }, this);
});
Dropdown.displayName = "Dropdown";
;
}}),
"[project]/src/once-ui/components/DropdownWrapper.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DropdownWrapper": (()=>DropdownWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/DropdownWrapper.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Dropdown.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const DropdownWrapper = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ trigger, dropdown, selectedOption, minHeight, onSelect, isOpen: controlledIsOpen, onOpenChange, minWidth, maxWidth, fillWidth = false, floatingPlacement = "bottom-start", className, style }, ref)=>{
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [internalIsOpen, setInternalIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
    const handleOpenChange = (newIsOpen)=>{
        if (!isControlled) {
            setInternalIsOpen(newIsOpen);
        }
        onOpenChange?.(newIsOpen);
    };
    const { x, y, strategy, refs, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useFloating"])({
        placement: floatingPlacement,
        open: isOpen,
        middleware: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["offset"])(4),
            minHeight ? undefined : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flip"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["shift"])(),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$react$2d$dom$2f$dist$2f$floating$2d$ui$2e$react$2d$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["size"])({
                apply ({ availableWidth, availableHeight, elements }) {
                    Object.assign(elements.floating.style, {
                        width: fillWidth ? "100%" : "auto",
                        minWidth: minWidth ? `${minWidth}rem` : undefined,
                        maxWidth: maxWidth ? `${maxWidth}rem` : `${availableWidth}px`,
                        minHeight: `${Math.min(minHeight || 0)}px`,
                        maxHeight: `${availableHeight}px`
                    });
                }
            })
        ],
        whileElementsMounted: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$floating$2d$ui$2f$dom$2f$dist$2f$floating$2d$ui$2e$dom$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["autoUpdate"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>wrapperRef.current);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (wrapperRef.current) {
            refs.setReference(wrapperRef.current);
        }
    }, [
        refs
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mounted) {
            setMounted(true);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && mounted) {
            requestAnimationFrame(()=>{
                if (dropdownRef.current) {
                    refs.setFloating(dropdownRef.current);
                    update();
                }
            });
        }
    }, [
        isOpen,
        mounted,
        refs,
        update
    ]);
    const handleClickOutside = (event)=>{
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            handleOpenChange(false);
        }
    };
    const handleFocusOut = (event)=>{
        if (wrapperRef.current && !wrapperRef.current.contains(event.relatedTarget)) {
            handleOpenChange(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        wrapperRef.current?.addEventListener("focusout", handleFocusOut);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            wrapperRef.current?.removeEventListener("focusout", handleFocusOut);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        fillWidth: fillWidth,
        direction: "column",
        transition: "macro-medium",
        style: {
            ...minHeight && isOpen ? {
                marginBottom: `${minHeight + 8}px`
            } : {},
            ...style
        },
        className: className,
        position: "relative",
        ref: wrapperRef,
        onClick: ()=>handleOpenChange(!isOpen),
        onKeyDown: (e)=>{
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpenChange(!isOpen);
            }
        },
        tabIndex: -1,
        role: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": isOpen,
        children: [
            trigger,
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                zIndex: 1,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fadeIn,
                minWidth: minWidth,
                ref: dropdownRef,
                style: {
                    position: strategy,
                    top: y ?? 0,
                    offset: 4,
                    left: x ?? 0
                },
                role: "listbox",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"], {
                    minWidth: minWidth,
                    radius: "l",
                    selectedOption: selectedOption,
                    onSelect: onSelect,
                    children: dropdown
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/DropdownWrapper.tsx",
                    lineNumber: 184,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/DropdownWrapper.tsx",
                lineNumber: 171,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/DropdownWrapper.tsx",
        lineNumber: 142,
        columnNumber: 7
    }, this);
});
DropdownWrapper.displayName = "DropdownWrapper";
;
}}),
"[project]/src/once-ui/components/DateInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DateInput": (()=>DateInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DatePicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DropdownWrapper.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const formatDate = (date, timePicker)=>{
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        ...timePicker && {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }
    };
    return date.toLocaleString("en-US", options);
};
const DateInput = ({ id, label, value, onChange, error, minHeight, className, style, timePicker = false, ...rest })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value ? formatDate(value, timePicker) : "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value) {
            setInputValue(formatDate(value, timePicker));
        }
    }, [
        value,
        timePicker
    ]);
    const handleDateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((date)=>{
        setInputValue(formatDate(date, timePicker));
        onChange?.(date);
        if (!timePicker) {
            setIsOpen(false);
        }
    }, [
        onChange,
        timePicker
    ]);
    const handleInputClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setIsOpen(true);
    }, []);
    const trigger = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        className: "cursor-interactive",
        style: {
            textOverflow: "ellipsis"
        },
        id: id,
        label: label,
        value: inputValue,
        error: error,
        readOnly: true,
        onClick: handleInputClick,
        ...rest
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/DateInput.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
    const dropdown = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        padding: "20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatePicker"], {
            value: value,
            onChange: handleDateChange,
            timePicker: timePicker
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/DateInput.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/DateInput.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownWrapper"], {
        fillWidth: true,
        trigger: trigger,
        minHeight: minHeight,
        dropdown: dropdown,
        isOpen: isOpen,
        onOpenChange: setIsOpen,
        className: className,
        style: {
            ...style
        }
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/DateInput.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/once-ui/components/DateRangePicker.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DateRangePicker": (()=>DateRangePicker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DatePicker.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const DateRangePicker = ({ value, onChange, minDate, maxDate, size = "m", ...rest })=>{
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        startDate: value?.startDate || undefined,
        endDate: value?.endDate || undefined
    });
    const [hoveredDate, setHoveredDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentMonth, setCurrentMonth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().getMonth());
    const [currentYear, setCurrentYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date().getFullYear());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value) {
            setInternalValue({
                startDate: value.startDate,
                endDate: value.endDate
            });
        }
    }, [
        value
    ]);
    const handleDateChange = (date)=>{
        if (!internalValue.startDate || internalValue.startDate && internalValue.endDate) {
            // Start new selection
            const newRange = {
                startDate: date,
                endDate: undefined
            };
            setInternalValue(newRange);
            onChange?.(newRange);
        } else {
            const newRange = {
                startDate: internalValue.startDate,
                endDate: date
            };
            if (newRange.startDate > date) {
                newRange.startDate = date;
                newRange.endDate = internalValue.startDate;
            }
            setInternalValue(newRange);
            onChange?.(newRange);
        }
    };
    const handleMonthChange = (increment)=>{
        const newDate = new Date(currentYear, currentMonth + increment, 1);
        setCurrentMonth(newDate.getMonth());
        setCurrentYear(newDate.getFullYear());
        setInternalValue({
            startDate: internalValue.startDate,
            endDate: internalValue.endDate
        });
    };
    const getSecondMonth = ()=>{
        const firstMonth = new Date(currentYear, currentMonth, 1);
        const secondMonth = new Date(firstMonth);
        secondMonth.setMonth(secondMonth.getMonth() + 1);
        return secondMonth;
    };
    const getPreviewRange = ()=>{
        if (!internalValue.startDate || internalValue.endDate || !hoveredDate) return null;
        return {
            startDate: internalValue.startDate,
            endDate: hoveredDate > internalValue.startDate ? hoveredDate : internalValue.startDate,
            isPreview: true
        };
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        gap: "24",
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatePicker"], {
                value: internalValue.startDate,
                onChange: handleDateChange,
                range: getPreviewRange() || internalValue,
                minDate: minDate,
                maxDate: maxDate,
                size: size,
                nextMonth: false,
                currentMonth: currentMonth,
                currentYear: currentYear,
                onMonthChange: handleMonthChange,
                onHover: setHoveredDate
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/DateRangePicker.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DatePicker"], {
                value: internalValue.endDate,
                onChange: handleDateChange,
                range: getPreviewRange() || internalValue,
                minDate: minDate,
                maxDate: maxDate,
                previousMonth: false,
                size: size,
                currentMonth: getSecondMonth().getMonth(),
                currentYear: getSecondMonth().getFullYear(),
                onMonthChange: handleMonthChange,
                onHover: setHoveredDate
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/DateRangePicker.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/DateRangePicker.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
};
DateRangePicker.displayName = "DateRangePicker";
;
}}),
"[project]/src/once-ui/components/Dialog.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "dialog": "Dialog-module-scss-module__qZI4SG__dialog",
  "open": "Dialog-module-scss-module__qZI4SG__open",
  "overlay": "Dialog-module-scss-module__qZI4SG__overlay",
});
}}),
"[project]/src/once-ui/components/Heading.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Heading": (()=>Heading)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
"use client";
;
;
const Heading = ({ as, variant, size, weight, onBackground, onSolid, align, wrap = "balance", padding, paddingLeft, paddingRight, paddingTop, paddingBottom, paddingX, paddingY, margin, marginLeft, marginRight, marginTop, marginBottom, marginX, marginY, children, style, className, ...props })=>{
    const Component = as || "h1";
    if (variant && (size || weight)) {
        console.warn("When 'variant' is set, 'size' and 'weight' are ignored.");
    }
    if (onBackground && onSolid) {
        console.warn("You cannot use both 'onBackground' and 'onSolid' props simultaneously. Only one will be applied.");
    }
    const getVariantClasses = (variant)=>{
        const [fontType, weight, size] = variant.split("-");
        return [
            `font-${fontType}`,
            `font-${weight}`,
            `font-${size}`
        ];
    };
    const sizeClass = size ? `font-${size}` : "font-m";
    const weightClass = weight ? `font-${weight}` : "font-strong";
    const classes = variant ? getVariantClasses(variant) : [
        sizeClass,
        weightClass
    ];
    let colorClass = "neutral-on-background-strong";
    if (onBackground) {
        const [scheme, weight] = onBackground.split("-");
        colorClass = `${scheme}-on-background-${weight}`;
    } else if (onSolid) {
        const [scheme, weight] = onSolid.split("-");
        colorClass = `${scheme}-on-solid-${weight}`;
    }
    const generateClassName = (prefix, token)=>{
        return token ? `${prefix}-${token}` : undefined;
    };
    const combinedClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(...classes, colorClass, className, generateClassName("p", padding), generateClassName("pl", paddingLeft), generateClassName("pr", paddingRight), generateClassName("pt", paddingTop), generateClassName("pb", paddingBottom), generateClassName("px", paddingX), generateClassName("py", paddingY), generateClassName("m", margin), generateClassName("ml", marginLeft), generateClassName("mr", marginRight), generateClassName("mt", marginTop), generateClassName("mb", marginBottom), generateClassName("mx", marginX), generateClassName("my", marginY));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: combinedClasses,
        style: {
            textAlign: align,
            textWrap: wrap,
            ...style
        },
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Heading.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
};
Heading.displayName = "Heading";
;
}}),
"[project]/src/once-ui/components/Dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Dialog": (()=>Dialog),
    "DialogProvider": (()=>DialogProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dialog$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Dialog.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Heading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const DialogContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createContext({
    stackedDialogOpen: false,
    setStackedDialogOpen: ()=>{}
});
const DialogProvider = ({ children })=>{
    const [stackedDialogOpen, setStackedDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogContext.Provider, {
        value: {
            stackedDialogOpen,
            setStackedDialogOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Dialog.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
};
const Dialog = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ isOpen, onClose, title, description, children, stack, base, footer, onHeightChange, minHeight, ...rest }, ref)=>{
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isOpen);
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { stackedDialogOpen, setStackedDialogOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DialogContext);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (stack) {
            setStackedDialogOpen(isOpen);
        }
    }, [
        stack,
        isOpen,
        setStackedDialogOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (dialogRef.current && isVisible) {
            const height = dialogRef.current.offsetHeight;
            onHeightChange?.(height);
        }
    }, [
        isVisible,
        onHeightChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setIsVisible(true);
            setTimeout(()=>{
                setIsAnimating(true);
            }, 0);
        } else {
            setIsAnimating(false);
            setTimeout(()=>{
                setIsVisible(false);
            }, 300);
        }
    }, [
        isOpen
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((event)=>{
        if (event.key === "Escape" && !base) {
            onClose();
        }
        if (event.key === "Tab" && dialogRef.current) {
            const focusableElements = dialogRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (!event.shiftKey && document.activeElement === lastElement) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    }, [
        onClose,
        base
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            return ()=>{
                document.removeEventListener("keydown", handleKeyDown);
            };
        }
    }, [
        isOpen,
        handleKeyDown
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Make everything outside the dialog inert
            document.body.childNodes.forEach((node)=>{
                if (node instanceof HTMLElement && node !== document.getElementById("portal-root")) {
                    node.inert = true;
                }
            });
            // If this is a stacked dialog, make the base dialog inert too
            if (stack) {
                const dialogs = document.querySelectorAll('[role="dialog"]');
                dialogs.forEach((dialog)=>{
                    if (dialog instanceof HTMLElement && !dialog.contains(dialogRef.current)) {
                        dialog.inert = true;
                    }
                });
            }
        } else {
            // If this is a stacked dialog closing, restore interactivity to base dialog
            if (stack) {
                const dialogs = document.querySelectorAll('[role="dialog"]');
                dialogs.forEach((dialog)=>{
                    if (dialog instanceof HTMLElement) {
                        dialog.inert = false;
                    }
                });
            } else {
                // If base dialog is closing, restore everything
                document.body.childNodes.forEach((node)=>{
                    if (node instanceof HTMLElement) {
                        node.inert = false;
                    }
                });
                document.body.style.overflow = "unset";
            }
        }
    }, [
        isOpen,
        stack
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && dialogRef.current) {
            const focusableElements = dialogRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            firstElement.focus();
        }
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (!dialogRef.current?.contains(event.target)) {
                if (stack || !base) {
                    onClose();
                }
            }
        };
        if (isVisible) {
            document.addEventListener("mousedown", handleClickOutside);
            return ()=>{
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [
        isVisible,
        onClose,
        stack,
        base
    ]);
    if (!isVisible) return null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        transition: "macro-medium",
        background: "overlay",
        position: "fixed",
        zIndex: base ? 8 : 9,
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dialog$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dialog$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open]: isAnimating
        }),
        center: true,
        padding: "l",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "dialog-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            fill: true,
            center: true,
            transition: "macro-medium",
            style: {
                transform: base ? "scale(0.94) translateY(-1.25rem)" : ""
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dialog$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialog, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dialog$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open]: isAnimating
                }),
                style: {
                    minHeight: minHeight ? `${minHeight}px` : undefined
                },
                ref: dialogRef,
                fillWidth: true,
                transition: "macro-medium",
                shadow: "xl",
                radius: "xl",
                border: "neutral-medium",
                background: "neutral-weak",
                direction: "column",
                tabIndex: -1,
                onKeyDown: (e)=>{
                    if (e.key === "Tab") {
                        const focusableElements = Array.from(dialogRef.current?.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])') || []);
                        if (focusableElements.length === 0) return;
                        const firstElement = focusableElements[0];
                        const lastElement = focusableElements[focusableElements.length - 1];
                        if (e.shiftKey && document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        } else if (!e.shiftKey && document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                },
                ...rest,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        as: "header",
                        direction: "column",
                        paddingX: "24",
                        paddingTop: "24",
                        paddingBottom: "s",
                        gap: "4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                fillWidth: true,
                                horizontal: "space-between",
                                gap: "8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Heading"], {
                                        id: "dialog-title",
                                        variant: "heading-strong-l",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/once-ui/components/Dialog.tsx",
                                        lineNumber: 286,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                        icon: "close",
                                        size: "m",
                                        variant: "tertiary",
                                        tooltip: "Close",
                                        onClick: onClose
                                    }, void 0, false, {
                                        fileName: "[project]/src/once-ui/components/Dialog.tsx",
                                        lineNumber: 289,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/once-ui/components/Dialog.tsx",
                                lineNumber: 285,
                                columnNumber: 15
                            }, this),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "body-default-s",
                                onBackground: "neutral-weak",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/Dialog.tsx",
                                lineNumber: 298,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/Dialog.tsx",
                        lineNumber: 277,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        as: "section",
                        paddingX: "24",
                        paddingBottom: "24",
                        flex: 1,
                        overflowY: "auto",
                        direction: "column",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Dialog.tsx",
                        lineNumber: 303,
                        columnNumber: 13
                    }, this),
                    footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        borderTop: "neutral-medium",
                        as: "footer",
                        horizontal: "end",
                        padding: "12",
                        gap: "8",
                        children: footer
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Dialog.tsx",
                        lineNumber: 314,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/Dialog.tsx",
                lineNumber: 237,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/Dialog.tsx",
            lineNumber: 229,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Dialog.tsx",
        lineNumber: 210,
        columnNumber: 7
    }, this), document.body);
});
Dialog.displayName = "Dialog";
;
}}),
"[project]/src/once-ui/components/Feedback.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Feedback": (()=>Feedback)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const variantIconMap = {
    info: "infoCircle",
    danger: "errorCircle",
    warning: "warningTriangle",
    success: "checkCircle"
};
const Feedback = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = "info", icon, title, description, showCloseButton = false, onClose, actionButtonProps, children, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        fillWidth: true,
        radius: "l",
        ref: ref,
        border: `${variant}-medium`,
        background: `${variant}-medium`,
        vertical: "start",
        role: "alert",
        "aria-live": "assertive",
        ...rest,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingY: "16",
                paddingLeft: "16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                    padding: "4",
                    radius: "m",
                    border: `${variant}-medium`,
                    onBackground: `${variant}-medium`,
                    name: variantIconMap[variant],
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Feedback.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Feedback.tsx",
                lineNumber: 54,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                fillWidth: true,
                padding: "16",
                gap: "24",
                vertical: "center",
                direction: "column",
                children: [
                    (title || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        direction: "column",
                        fillWidth: true,
                        gap: "4",
                        children: [
                            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                fillWidth: true,
                                gap: "16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                        fillWidth: true,
                                        paddingY: "4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                            variant: "heading-strong-m",
                                            onBackground: `${variant}-medium`,
                                            role: "heading",
                                            "aria-level": 2,
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/once-ui/components/Feedback.tsx",
                                            lineNumber: 71,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/once-ui/components/Feedback.tsx",
                                        lineNumber: 70,
                                        columnNumber: 19
                                    }, this),
                                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                        onClick: onClose,
                                        icon: "close",
                                        size: "m",
                                        tooltip: "Hide",
                                        tooltipPosition: "top",
                                        variant: "ghost",
                                        "aria-label": "Close alert"
                                    }, void 0, false, {
                                        fileName: "[project]/src/once-ui/components/Feedback.tsx",
                                        lineNumber: 81,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/once-ui/components/Feedback.tsx",
                                lineNumber: 69,
                                columnNumber: 17
                            }, this),
                            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                fillWidth: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: "body-default-s",
                                    onBackground: `${variant}-strong`,
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/src/once-ui/components/Feedback.tsx",
                                    lineNumber: 95,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/Feedback.tsx",
                                lineNumber: 94,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/Feedback.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this),
                    children,
                    actionButtonProps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        paddingBottom: "4",
                        gap: "8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            ...actionButtonProps
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/Feedback.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Feedback.tsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/Feedback.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Feedback.tsx",
        lineNumber: 42,
        columnNumber: 7
    }, this);
});
Feedback.displayName = "Feedback";
;
}}),
"[project]/src/once-ui/components/GlitchFx.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "active": "GlitchFx-module-scss-module__xe0aiW__active",
  "blueShift": "GlitchFx-module-scss-module__xe0aiW__blueShift",
  "fast": "GlitchFx-module-scss-module__xe0aiW__fast",
  "glitch-blue": "GlitchFx-module-scss-module__xe0aiW__glitch-blue",
  "glitch-red": "GlitchFx-module-scss-module__xe0aiW__glitch-red",
  "glitchFx": "GlitchFx-module-scss-module__xe0aiW__glitchFx",
  "glitchLayer": "GlitchFx-module-scss-module__xe0aiW__glitchLayer",
  "medium": "GlitchFx-module-scss-module__xe0aiW__medium",
  "redShift": "GlitchFx-module-scss-module__xe0aiW__redShift",
  "slow": "GlitchFx-module-scss-module__xe0aiW__slow",
});
}}),
"[project]/src/once-ui/components/GlitchFx.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GlitchFx": (()=>GlitchFx)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$GlitchFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/GlitchFx.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const GlitchFx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, speed = "medium", interval = 2500, trigger = "instant", continuous = true, ...rest }, ref)=>{
    const [isGlitching, setIsGlitching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(continuous || trigger === "instant");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (continuous || trigger === "instant") {
            setIsGlitching(true);
        }
    }, [
        continuous,
        trigger
    ]);
    const handleMouseEnter = ()=>{
        if (trigger === "hover") {
            setIsGlitching(true);
        }
    };
    const handleMouseLeave = ()=>{
        if (trigger === "hover") {
            setIsGlitching(false);
        }
    };
    const triggerGlitch = ()=>{
        if (trigger === "custom") {
            setIsGlitching(true);
            setTimeout(()=>setIsGlitching(false), 500);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (trigger === "custom") {
            const glitchInterval = setInterval(triggerGlitch, interval);
            return ()=>clearInterval(glitchInterval);
        }
    }, [
        trigger,
        interval
    ]);
    const speedClass = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$GlitchFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][speed];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        position: "relative",
        inline: true,
        zIndex: 0,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(speedClass, isGlitching && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$GlitchFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active),
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                fillWidth: true,
                inline: true,
                position: "relative",
                zIndex: 1,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/GlitchFx.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                inline: true,
                position: "absolute",
                top: "0",
                left: "0",
                fill: true,
                zIndex: 0,
                opacity: 50,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$GlitchFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glitchLayer, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$GlitchFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blueShift),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/GlitchFx.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                inline: true,
                position: "absolute",
                top: "0",
                left: "0",
                fill: true,
                zIndex: 0,
                opacity: 50,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$GlitchFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].glitchLayer, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$GlitchFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].redShift),
                children: children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/GlitchFx.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/GlitchFx.tsx",
        lineNumber: 65,
        columnNumber: 7
    }, this);
});
GlitchFx.displayName = "GlitchFx";
;
}}),
"[project]/src/once-ui/components/HoloFx.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "burn": "HoloFx-module-scss-module__iDS8oG__burn",
  "holoFx": "HoloFx-module-scss-module__iDS8oG__holoFx",
  "light": "HoloFx-module-scss-module__iDS8oG__light",
  "overlay": "HoloFx-module-scss-module__iDS8oG__overlay",
  "texture": "HoloFx-module-scss-module__iDS8oG__texture",
});
}}),
"[project]/src/once-ui/components/HoloFx.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "HoloFx": (()=>HoloFx)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/HoloFx.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const formatMask = (maskPosition = "100 200")=>{
    const [x, y] = maskPosition.split(" ");
    const formattedX = `${x}%`;
    const formattedY = `${y ? y : x}%`;
    return `radial-gradient(ellipse ${formattedX} ${formattedY} at var(--gradient-pos-x, 50%) var(--gradient-pos-y, 50%), black 50%, transparent 100%)`;
};
const getMaskStyle = (mask)=>{
    return mask?.maskPosition ? formatMask(mask.maskPosition) : formatMask();
};
const HoloFx = ({ children, light, burn, texture, ...rest })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let lastCall = 0;
    const lightDefaults = {
        opacity: 30,
        blending: "color-dodge",
        mask: getMaskStyle(light?.mask),
        ...light
    };
    const burnDefaults = {
        opacity: 30,
        filter: "brightness(0.2) contrast(2)",
        blending: "color-dodge",
        mask: getMaskStyle(burn?.mask),
        ...burn
    };
    const textureDefaults = {
        opacity: 10,
        blending: "color-dodge",
        image: "repeating-linear-gradient(-45deg, var(--static-white) 0, var(--static-white) 1px, transparent 3px, transparent 2px)",
        mask: getMaskStyle(texture?.mask),
        ...texture
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleMouseMove = (event)=>{
            const now = Date.now();
            if (now - lastCall < 16) return;
            lastCall = now;
            const element = ref.current;
            if (!element) return;
            const rect = element.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const deltaX = (offsetX - centerX) / centerX * 100;
            const deltaY = (offsetY - centerY) / centerY * 100;
            element.style.setProperty("--gradient-pos-x", `${deltaX}%`);
            element.style.setProperty("--gradient-pos-y", `${deltaY}%`);
        };
        document.addEventListener("mousemove", handleMouseMove);
        return ()=>{
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        position: "relative",
        overflow: "hidden",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].holoFx,
        ref: ref,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                fill: true,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].base,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/HoloFx.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                hide: "m",
                position: "absolute",
                fill: true,
                pointerEvents: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burn),
                style: {
                    ["--burn-opacity"]: burnDefaults.opacity + "%",
                    filter: burnDefaults.filter,
                    mixBlendMode: burnDefaults.blending,
                    maskImage: burnDefaults.mask
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/HoloFx.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                hide: "m",
                position: "absolute",
                fill: true,
                pointerEvents: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].light),
                style: {
                    ["--light-opacity"]: lightDefaults.opacity + "%",
                    filter: lightDefaults.filter,
                    mixBlendMode: lightDefaults.blending,
                    maskImage: lightDefaults.mask
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/HoloFx.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                hide: "m",
                position: "absolute",
                fill: true,
                pointerEvents: "none",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].overlay, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].texture),
                style: {
                    ["--texture-opacity"]: textureDefaults.opacity + "%",
                    backgroundImage: textureDefaults.image,
                    filter: textureDefaults.filter,
                    mixBlendMode: textureDefaults.blending,
                    maskImage: textureDefaults.mask
                }
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/HoloFx.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/HoloFx.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
HoloFx.displayName = "HoloFx";
;
}}),
"[project]/src/once-ui/components/InlineCode.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "inlineCode": "InlineCode-module-scss-module__HcyN7a__inlineCode",
});
}}),
"[project]/src/once-ui/components/InlineCode.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InlineCode": (()=>InlineCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InlineCode$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/InlineCode.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const InlineCode = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        as: "span",
        inline: true,
        fit: true,
        ref: ref,
        radius: "s",
        vertical: "center",
        paddingX: "4",
        paddingY: "1",
        textType: "code",
        background: "neutral-alpha-weak",
        border: "neutral-alpha-medium",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InlineCode$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inlineCode,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/InlineCode.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
});
InlineCode.displayName = "InlineCode";
;
}}),
"[project]/src/once-ui/components/Kbd.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Kbd": (()=>Kbd)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Kbd = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ label, children, className, style, ...rest }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        as: "kbd",
        ref: ref,
        horizontal: "center",
        minWidth: "32",
        background: "neutral-strong",
        radius: "s",
        paddingX: "4",
        paddingY: "2",
        onBackground: "neutral-medium",
        border: "neutral-strong",
        className: className,
        style: style,
        ...rest,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
            as: "span",
            variant: "label-default-s",
            children: label || children
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/Kbd.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Kbd.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this));
Kbd.displayName = "Kbd";
;
}}),
"[project]/src/once-ui/components/LetterFx.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LetterFx": (()=>LetterFx)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const defaultCharset = [
    "X",
    "$",
    "@",
    "a",
    "H",
    "z",
    "o",
    "0",
    "y",
    "#",
    "?",
    "*",
    "0",
    "1",
    "+"
];
function getRandomCharacter(charset) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
}
function createEventHandler(originalText, setText, inProgress, setInProgress, speed, charset, setHasAnimated) {
    const speedSettings = {
        fast: {
            BASE_DELAY: 10,
            REVEAL_DELAY: 10,
            INITIAL_RANDOM_DURATION: 100
        },
        medium: {
            BASE_DELAY: 30,
            REVEAL_DELAY: 30,
            INITIAL_RANDOM_DURATION: 300
        },
        slow: {
            BASE_DELAY: 60,
            REVEAL_DELAY: 60,
            INITIAL_RANDOM_DURATION: 600
        }
    };
    const { BASE_DELAY, REVEAL_DELAY, INITIAL_RANDOM_DURATION } = speedSettings[speed];
    const generateRandomText = ()=>originalText.split("").map((char)=>char === " " ? " " : getRandomCharacter(charset)).join("");
    return async ()=>{
        if (inProgress) return;
        setInProgress(true);
        let randomizedText = generateRandomText();
        const endTime = Date.now() + INITIAL_RANDOM_DURATION;
        while(Date.now() < endTime){
            setText(randomizedText);
            await new Promise((resolve)=>setTimeout(resolve, BASE_DELAY));
            randomizedText = generateRandomText();
        }
        for(let i = 0; i < originalText.length; i++){
            await new Promise((resolve)=>setTimeout(resolve, REVEAL_DELAY));
            setText(`${originalText.substring(0, i + 1)}${randomizedText.substring(i + 1)}`);
        }
        setInProgress(false);
        if (setHasAnimated) {
            setHasAnimated(true);
        }
    };
}
const LetterFx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, trigger = "hover", speed = "medium", charset = defaultCharset, onTrigger, className, style }, ref)=>{
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(typeof children === "string" ? children : "");
    const [inProgress, setInProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasAnimated, setHasAnimated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const originalText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(typeof children === "string" ? children : "");
    const eventHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(createEventHandler(originalText.current, setText, inProgress, setInProgress, speed, charset, trigger === "instant" ? setHasAnimated : undefined), [
        inProgress,
        trigger,
        speed,
        charset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof children === "string") {
            setText(children);
            originalText.current = children;
            if (trigger === "instant" && !hasAnimated) {
                eventHandler();
            }
        }
    }, [
        children,
        trigger,
        eventHandler,
        hasAnimated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (trigger === "custom" && onTrigger) {
            onTrigger(eventHandler);
        }
    }, [
        trigger,
        onTrigger,
        eventHandler
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className),
        style: style,
        onMouseOver: trigger === "hover" ? eventHandler : undefined,
        children: text
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/LetterFx.tsx",
        lineNumber: 133,
        columnNumber: 7
    }, this);
});
LetterFx.displayName = "LetterFx";
;
}}),
"[project]/src/once-ui/components/Line.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Line": (()=>Line)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Line = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ vert, className, style, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        minWidth: vert && "1" || undefined,
        minHeight: !vert && "1" || undefined,
        width: vert && "1" || undefined,
        height: !vert && "1" || undefined,
        fillWidth: !vert,
        fillHeight: vert,
        background: "neutral-strong",
        direction: vert ? "column" : "row",
        className: className,
        style: style,
        ...rest
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Line.tsx",
        lineNumber: 14,
        columnNumber: 7
    }, this);
});
Line.displayName = "Line";
;
}}),
"[project]/src/once-ui/components/Logo.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "icon": "Logo-module-scss-module__i2LYIW__icon",
  "type": "Logo-module-scss-module__i2LYIW__type",
});
}}),
"[project]/src/once-ui/components/Logo.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Logo": (()=>Logo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Logo$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Logo.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const sizeMap = {
    xs: "20",
    s: "24",
    m: "32",
    l: "40",
    xl: "48"
};
const Logo = ({ size = "m", wordmark = true, icon = true, href, iconSrc, wordmarkSrc, className, style, ...props })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!icon && !wordmark) {
            console.warn("Both 'icon' and 'wordmark' props are set to false. The logo will not render any content.");
        }
    }, [
        icon,
        wordmark
    ]);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            icon && !iconSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: `var(--static-space-${sizeMap[size]})`
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Logo$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Logo.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this),
            iconSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                style: {
                    height: `var(--static-space-${sizeMap[size]})`,
                    width: "auto"
                },
                alt: "Trademark",
                src: iconSrc
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Logo.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            wordmark && !wordmarkSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: `var(--static-space-${sizeMap[size]})`
                },
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Logo$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].type
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Logo.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            wordmarkSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                style: {
                    height: `var(--static-space-${sizeMap[size]})`,
                    width: "auto"
                },
                alt: "Trademark",
                src: wordmarkSrc
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Logo.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
    return href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("radius-l", "display-flex", "fit-height", className),
        style: style,
        href: href,
        "aria-label": "Trademark",
        ...props,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Logo.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className),
        radius: "l",
        fitHeight: true,
        style: style,
        "aria-label": "Trademark",
        children: content
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Logo.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
};
Logo.displayName = "Logo";
;
}}),
"[project]/src/once-ui/components/LogoCloud.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "fadeInOut": "LogoCloud-module-scss-module__aZ0KVW__fadeInOut",
  "logo": "LogoCloud-module-scss-module__aZ0KVW__logo",
});
}}),
"[project]/src/once-ui/components/LogoCloud.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LogoCloud": (()=>LogoCloud)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$LogoCloud$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/LogoCloud.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const ANIMATION_DURATION = 5000;
const STAGGER_DELAY = 25;
const LogoCloud = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ logos, className, style, limit = 6, rotationInterval = ANIMATION_DURATION, ...rest }, ref)=>{
    const [visibleLogos, setVisibleLogos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>logos.slice(0, limit));
    const [key, setKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (logos.length <= limit) {
            setVisibleLogos(logos);
            return;
        }
        const interval = setInterval(()=>{
            setVisibleLogos((currentLogos)=>{
                const currentIndices = currentLogos.map((logo)=>logos.findIndex((l)=>l === logo));
                const nextIndices = currentIndices.map((index)=>(index + 1) % logos.length).sort((a, b)=>a - b);
                const nextLogos = nextIndices.map((index)=>logos[index]);
                setKey((k)=>k + 1);
                return nextLogos;
            });
        }, rotationInterval + STAGGER_DELAY * limit);
        return ()=>clearInterval(interval);
    }, [
        logos,
        limit,
        rotationInterval
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$LogoCloud$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container, className),
        style: style,
        ...rest,
        children: visibleLogos.map((logo, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                vertical: "center",
                horizontal: "center",
                paddingX: "24",
                paddingY: "20",
                radius: "l",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$LogoCloud$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                    style: {
                        ...logo.style,
                        animationDelay: `${index * STAGGER_DELAY}ms`
                    },
                    ...logo
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/LogoCloud.tsx",
                    lineNumber: 66,
                    columnNumber: 13
                }, this)
            }, `${key}-${index}`, false, {
                fileName: "[project]/src/once-ui/components/LogoCloud.tsx",
                lineNumber: 58,
                columnNumber: 11
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/LogoCloud.tsx",
        lineNumber: 56,
        columnNumber: 7
    }, this);
});
LogoCloud.displayName = "LogoCloud";
;
}}),
"[project]/src/once-ui/components/NavIcon.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "active": "NavIcon-module-scss-module__8vGHpG__active",
  "line": "NavIcon-module-scss-module__8vGHpG__line",
});
}}),
"[project]/src/once-ui/components/NavIcon.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NavIcon": (()=>NavIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NavIcon$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/NavIcon.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
const NavIcon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, isActive, style, onClick, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        tabIndex: 0,
        radius: "m",
        position: "relative",
        cursor: "interactive",
        width: "40",
        height: "40",
        minHeight: "40",
        minWidth: "40",
        className: className,
        style: style,
        onClick: onClick,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NavIcon$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line, isActive && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NavIcon$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/NavIcon.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NavIcon$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].line, isActive && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NavIcon$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/NavIcon.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/NavIcon.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, this);
});
NavIcon.displayName = "NavIcon";
;
}}),
"[project]/src/once-ui/components/Option.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "danger": "Option-module-scss-module__VaiDSa__danger",
  "focused": "Option-module-scss-module__VaiDSa__focused",
  "highlighted": "Option-module-scss-module__VaiDSa__highlighted",
  "option": "Option-module-scss-module__VaiDSa__option",
  "selected": "Option-module-scss-module__VaiDSa__selected",
});
}}),
"[project]/src/once-ui/components/Option.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Option": (()=>Option)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Option.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ElementType.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
const Option = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ label, value, href, hasPrefix, hasSuffix, description, danger, selected, highlighted, tabIndex, onClick, ...props }, ref)=>{
    if (href && onClick) {
        console.warn("Option should not have both `href` and `onClick` props.");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ElementType$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ElementType"], {
        tabIndex: tabIndex,
        ref: ref,
        href: href,
        className: "reset-button-styles",
        style: {
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            ...props,
            fillWidth: true,
            vertical: "center",
            paddingX: "12",
            paddingY: "8",
            gap: "12",
            radius: "m",
            role: "option",
            "aria-selected": selected,
            tabIndex: -1,
            borderWidth: 1,
            borderStyle: "solid",
            cursor: "interactive",
            transition: "micro-medium",
            onClick: ()=>onClick?.(value),
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].option, {
                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].danger]: danger,
                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected]: selected,
                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].highlighted]: highlighted
            }),
            "data-value": value,
            children: [
                hasPrefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prefix,
                    children: hasPrefix
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Option.tsx",
                    lineNumber: 68,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    horizontal: "start",
                    style: {
                        whiteSpace: "nowrap"
                    },
                    fillWidth: true,
                    direction: "column",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                            onBackground: "neutral-strong",
                            variant: "label-default-s",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/Option.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                            variant: "body-default-xs",
                            onBackground: "neutral-weak",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/Option.tsx",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/once-ui/components/Option.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this),
                hasSuffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].suffix,
                    children: hasSuffix
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Option.tsx",
                    lineNumber: 86,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/once-ui/components/Option.tsx",
            lineNumber: 45,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Option.tsx",
        lineNumber: 44,
        columnNumber: 7
    }, this);
});
Option.displayName = "Option";
;
}}),
"[project]/src/once-ui/components/PasswordInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PasswordInput": (()=>PasswordInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const PasswordInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        ...props,
        ref: ref,
        type: showPassword ? "text" : "password",
        hasSuffix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
            onClick: ()=>{
                setShowPassword(!showPassword);
            },
            variant: "ghost",
            icon: showPassword ? "eyeOff" : "eye",
            size: "s",
            type: "button"
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/PasswordInput.tsx",
            lineNumber: 15,
            columnNumber: 9
        }, void 0)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/PasswordInput.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
});
PasswordInput.displayName = "PasswordInput";
}}),
"[project]/src/once-ui/components/RadioButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RadioButton": (()=>RadioButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/SharedInteractiveStyles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InteractiveDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/InteractiveDetails.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const generateId = ()=>`radio-${Math.random().toString(36).substring(2, 9)}`;
const RadioButton = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ style, className, isChecked: controlledIsChecked, name, value, onToggle, disabled, ...props }, ref)=>{
    const [isChecked, setIsChecked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(controlledIsChecked || false);
    const [radioId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(generateId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (controlledIsChecked !== undefined) {
            setIsChecked(controlledIsChecked);
        }
    }, [
        controlledIsChecked
    ]);
    const toggleItem = ()=>{
        if (disabled) return;
        if (onToggle) {
            onToggle();
        } else {
            setIsChecked(!isChecked);
        }
    };
    const handleKeyDown = (event)=>{
        if (disabled) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleItem();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        vertical: "center",
        gap: "16",
        zIndex: 1,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container, className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled]: disabled
        }),
        style: style,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "radio",
                ref: ref,
                name: name,
                value: value,
                checked: controlledIsChecked !== undefined ? controlledIsChecked : isChecked,
                onChange: toggleItem,
                disabled: disabled,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden,
                tabIndex: -1,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/RadioButton.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                role: "radio",
                "aria-checked": controlledIsChecked !== undefined ? controlledIsChecked : isChecked,
                "aria-labelledby": radioId,
                "aria-disabled": disabled,
                position: "relative",
                horizontal: "center",
                vertical: "center",
                radius: "full",
                onClick: toggleItem,
                onKeyDown: handleKeyDown,
                tabIndex: disabled ? -1 : 0,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].element, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checked]: controlledIsChecked !== undefined ? controlledIsChecked : isChecked,
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled]: disabled
                }),
                children: (controlledIsChecked !== undefined ? controlledIsChecked : isChecked) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    style: {
                        backgroundColor: "var(--neutral-on-solid-strong)"
                    },
                    radius: "full",
                    width: "12",
                    height: "12",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/RadioButton.tsx",
                    lineNumber: 93,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/RadioButton.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this),
            props.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InteractiveDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractiveDetails"], {
                id: radioId,
                ...props,
                onClick: toggleItem
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/RadioButton.tsx",
                lineNumber: 104,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/RadioButton.tsx",
        lineNumber: 54,
        columnNumber: 7
    }, this);
});
RadioButton.displayName = "RadioButton";
;
}}),
"[project]/src/once-ui/components/Row.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Row": (()=>Row)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Row = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, ...rest }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Row.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
});
Row.displayName = "Row";
;
}}),
"[project]/src/once-ui/components/Select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Select": (()=>Select)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DropdownWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Option.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Select = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ options, value = "", onSelect, searchable = false, emptyState = "No results", minHeight, minWidth, maxWidth, floatingPlacement, className, style, ...rest }, ref)=>{
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFilled, setIsFilled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!value);
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightedIndex, setHighlightedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if (!options?.length || !value) return null;
        return options.findIndex((option)=>option.value === value);
    });
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const selectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const clearButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFocus = ()=>{
        setIsFocused(true);
    };
    const handleBlur = (event)=>{
        if (selectRef.current && !selectRef.current.contains(event.relatedTarget)) {
            setIsFocused(false);
            setIsDropdownOpen(false);
        }
    };
    const handleSelect = (value)=>{
        if (onSelect) onSelect(value);
        setIsDropdownOpen(false);
        setIsFilled(true);
    };
    const handleKeyDown = (event)=>{
        if (!isFocused && event.key !== "Enter") return;
        switch(event.key){
            case "Escape":
                setIsDropdownOpen(false);
                break;
            case "ArrowDown":
                if (!isDropdownOpen) {
                    setIsDropdownOpen(true);
                    break;
                }
                event.preventDefault();
                setHighlightedIndex((prevIndex)=>{
                    const newIndex = prevIndex === null || prevIndex === options.length - 1 ? 0 : prevIndex + 1;
                    return newIndex;
                });
                break;
            case "ArrowUp":
                event.preventDefault();
                setHighlightedIndex((prevIndex)=>{
                    const newIndex = prevIndex === null || prevIndex === 0 ? options.length - 1 : prevIndex - 1;
                    return newIndex;
                });
                break;
            case "Enter":
                event.preventDefault();
                if (highlightedIndex !== null && isDropdownOpen) {
                    handleSelect(options[highlightedIndex].value);
                } else {
                    setIsDropdownOpen(true);
                }
                break;
            default:
                break;
        }
    };
    const handleClearSearch = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setSearchQuery("");
        // Force focus back to the input after clearing
        const input = selectRef.current?.querySelector("input");
        if (input) {
            input.focus();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (selectRef.current && !selectRef.current.contains(event.target) && !clearButtonRef.current?.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        const handleFocusOut = (event)=>{
            if (event.target instanceof HTMLInputElement) {
                handleBlur(event);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("focusout", handleFocusOut);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("focusout", handleFocusOut);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownWrapper"], {
        fillWidth: true,
        ref: (node)=>{
            selectRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
        },
        isOpen: isDropdownOpen,
        onOpenChange: setIsDropdownOpen,
        floatingPlacement: floatingPlacement,
        minHeight: minHeight,
        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
            ...rest,
            style: {
                textOverflow: "ellipsis",
                ...style
            },
            value: value,
            onFocus: handleFocus,
            onKeyDown: handleKeyDown,
            readOnly: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("cursor-interactive", "fill-width", {
                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filled]: isFilled,
                [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].focused]: isFocused,
                className
            }),
            "aria-haspopup": "listbox",
            "aria-expanded": isDropdownOpen
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/Select.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, void 0),
        dropdown: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                searchable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    fillWidth: true,
                    position: "relative",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                        "data-scaling": "90",
                        style: {
                            marginTop: "-1px",
                            marginLeft: "-1px",
                            width: "calc(100% + 2px)"
                        },
                        labelAsPlaceholder: true,
                        id: "search",
                        label: "Search",
                        height: "s",
                        radius: "none",
                        hasSuffix: searchQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                            tooltip: "Clear",
                            tooltipPosition: "left",
                            icon: "close",
                            variant: "ghost",
                            size: "s",
                            onClick: handleClearSearch
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/Select.tsx",
                            lineNumber: 202,
                            columnNumber: 23
                        }, void 0) : undefined,
                        hasPrefix: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                            name: "search",
                            size: "xs"
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/Select.tsx",
                            lineNumber: 212,
                            columnNumber: 30
                        }, void 0),
                        value: searchQuery,
                        onChange: (e)=>setSearchQuery(e.target.value),
                        onClick: (e)=>e.stopPropagation(),
                        onBlur: handleBlur
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Select.tsx",
                        lineNumber: 188,
                        columnNumber: 17
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Select.tsx",
                    lineNumber: 187,
                    columnNumber: 15
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    fillWidth: true,
                    padding: "4",
                    direction: "column",
                    gap: "2",
                    children: [
                        options.filter((option)=>option.label?.toString().toLowerCase().includes(searchQuery.toLowerCase())).map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Option"], {
                                ...option,
                                onClick: ()=>{
                                    option.onClick?.(option.value);
                                    handleSelect(option.value);
                                },
                                selected: option.value === value,
                                highlighted: index === highlightedIndex,
                                tabIndex: -1
                            }, option.value, false, {
                                fileName: "[project]/src/once-ui/components/Select.tsx",
                                lineNumber: 226,
                                columnNumber: 19
                            }, void 0)),
                        searchQuery && options.filter((option)=>option.label?.toString().toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                            fillWidth: true,
                            vertical: "center",
                            horizontal: "center",
                            paddingX: "16",
                            paddingY: "32",
                            children: emptyState
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/Select.tsx",
                            lineNumber: 242,
                            columnNumber: 19
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/once-ui/components/Select.tsx",
                    lineNumber: 220,
                    columnNumber: 13
                }, void 0)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Select.tsx",
        lineNumber: 153,
        columnNumber: 7
    }, this);
});
Select.displayName = "Select";
;
}}),
"[project]/src/once-ui/components/StylePanel.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "aqua": "StylePanel-module-scss-module__hWhCCa__aqua",
  "blue": "StylePanel-module-scss-module__hWhCCa__blue",
  "cyan": "StylePanel-module-scss-module__hWhCCa__cyan",
  "emerald": "StylePanel-module-scss-module__hWhCCa__emerald",
  "gray": "StylePanel-module-scss-module__hWhCCa__gray",
  "green": "StylePanel-module-scss-module__hWhCCa__green",
  "indigo": "StylePanel-module-scss-module__hWhCCa__indigo",
  "magenta": "StylePanel-module-scss-module__hWhCCa__magenta",
  "moss": "StylePanel-module-scss-module__hWhCCa__moss",
  "neutral": "StylePanel-module-scss-module__hWhCCa__neutral",
  "orange": "StylePanel-module-scss-module__hWhCCa__orange",
  "pink": "StylePanel-module-scss-module__hWhCCa__pink",
  "red": "StylePanel-module-scss-module__hWhCCa__red",
  "sand": "StylePanel-module-scss-module__hWhCCa__sand",
  "select": "StylePanel-module-scss-module__hWhCCa__select",
  "selected": "StylePanel-module-scss-module__hWhCCa__selected",
  "slate": "StylePanel-module-scss-module__hWhCCa__slate",
  "swatch": "StylePanel-module-scss-module__hWhCCa__swatch",
  "violet": "StylePanel-module-scss-module__hWhCCa__violet",
  "yellow": "StylePanel-module-scss-module__hWhCCa__yellow",
});
}}),
"[project]/src/once-ui/resources/config.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "baseURL": (()=>baseURL),
    "meta": (()=>meta),
    "og": (()=>og),
    "schema": (()=>schema),
    "social": (()=>social),
    "style": (()=>style)
});
const baseURL = "www.processimo.com";
// default customization applied to the HTML in the main layout.tsx
const style = {
    theme: "dark",
    neutral: "gray",
    brand: "cyan",
    accent: "cyan",
    solid: "contrast",
    solidStyle: "flat",
    border: "playful",
    surface: "filled",
    transition: "all",
    scaling: "100"
};
// default metadata
const meta = {
    title: "Processimo - The future of work",
    description: "Businesses leveraging AI agents with RAG technology gain a competitive edge by making data- driven decisions, reducing operational inefficiencies, and delivering high-quality customer experiences."
};
// default open graph data
const og = {
    title: "Processimo",
    description: "Processimo: AI That Works. So You Can Lead.",
    type: "website",
    image: "/images/processimo-icon.png"
};
// default schema data
const schema = {
    logo: "",
    type: "Organization",
    name: "Processimo",
    description: "AI That Works. So You Can Lead."
};
// social links
const social = {
    twitter: "https://www.twitter.com/processsimo",
    linkedin: "https://www.linkedin.com/company/processimo/"
};
;
}}),
"[project]/src/once-ui/components/StylePanel.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StylePanel": (()=>StylePanel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/StylePanel.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/resources/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Column.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/SegmentedControl.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Scroller.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const shapes = [
    "conservative",
    "playful",
    "rounded"
];
const colorOptions = {
    brand: [
        "cyan",
        "blue",
        "indigo",
        "violet",
        "magenta",
        "pink",
        "red",
        "orange",
        "yellow",
        "moss",
        "green",
        "emerald",
        "aqua"
    ],
    accent: [
        "cyan",
        "blue",
        "indigo",
        "violet",
        "magenta",
        "pink",
        "red",
        "orange",
        "yellow",
        "moss",
        "green",
        "emerald",
        "aqua"
    ],
    neutral: [
        "sand",
        "gray",
        "slate"
    ]
};
const StylePanel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ ...rest }, ref)=>{
    const [selectedShape, setSelectedShape] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].border);
    const [brandColor, setBrandColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].brand);
    const [accentColor, setAccentColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].accent);
    const [neutralColor, setNeutralColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].neutral);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].theme);
    const [solid, setSolid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].solid);
    const [solidStyle, setSolidStyle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].solidStyle);
    const [transition, setTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].transition);
    const [scaling, setScaling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].scaling);
    const [surface, setSurface] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$resources$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["style"].surface);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = document.documentElement;
        root.setAttribute("data-border", selectedShape);
        root.setAttribute("data-brand", brandColor);
        root.setAttribute("data-accent", accentColor);
        root.setAttribute("data-neutral", neutralColor);
        root.setAttribute("data-solid", solid);
        root.setAttribute("data-solid-style", solidStyle);
        root.setAttribute("data-theme", theme);
        root.setAttribute("data-transition", transition);
        root.setAttribute("data-scaling", scaling);
        root.setAttribute("data-surface", surface);
        root.setAttribute("data-transition", transition);
    }, [
        selectedShape,
        brandColor,
        accentColor,
        neutralColor,
        solid,
        solidStyle,
        theme,
        transition,
        surface,
        scaling
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
        fillWidth: true,
        gap: "16",
        ref: ref,
        ...rest,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                fillWidth: true,
                paddingTop: "12",
                paddingLeft: "16",
                gap: "4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "heading-strong-s",
                        children: "Page"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body-default-s",
                        onBackground: "neutral-weak",
                        children: "Customize global design settings"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                fillWidth: true,
                border: "neutral-alpha-medium",
                radius: "l-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        borderBottom: "neutral-alpha-medium",
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "label-default-s",
                                children: "Theme"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                                maxWidth: 22,
                                buttons: [
                                    {
                                        size: "l",
                                        label: "Light",
                                        value: "light",
                                        prefixIcon: "light"
                                    },
                                    {
                                        size: "l",
                                        label: "Dark",
                                        value: "dark",
                                        prefixIcon: "dark"
                                    }
                                ],
                                onToggle: (value)=>setTheme(value),
                                selected: theme
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "label-default-s",
                                children: "Shape"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                gap: "4",
                                children: shapes.map((radius, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                        "data-border": shapes[index],
                                        horizontal: "center",
                                        vertical: "center",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select, selectedShape === radius ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ""),
                                        onClick: ()=>{
                                            setSelectedShape(radius);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                            variant: "ghost",
                                            size: "m",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].neutral, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatch)
                                            }, void 0, false, {
                                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                lineNumber: 137,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 136,
                                            columnNumber: 17
                                        }, this)
                                    }, radius, false, {
                                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                fillWidth: true,
                paddingTop: "12",
                paddingLeft: "16",
                gap: "4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "heading-strong-s",
                        children: "Color"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body-default-s",
                        onBackground: "neutral-weak",
                        children: "Customize color schemes"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                fillWidth: true,
                border: "neutral-alpha-medium",
                radius: "l-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        borderBottom: "neutral-alpha-medium",
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                textVariant: "label-default-s",
                                minWidth: 3,
                                children: "Brand"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scroller"], {
                                minWidth: 0,
                                fitWidth: true,
                                children: colorOptions.brand.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                        marginRight: "2",
                                        horizontal: "center",
                                        vertical: "center",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select, brandColor === color ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ""),
                                        onClick: ()=>{
                                            setBrandColor(color);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                            variant: "ghost",
                                            size: "m",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][color]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatch}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    }, color, false, {
                                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                        lineNumber: 166,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        borderBottom: "neutral-alpha-medium",
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                textVariant: "label-default-s",
                                minWidth: 3,
                                children: "Accent"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scroller"], {
                                minWidth: 0,
                                fitWidth: true,
                                children: colorOptions.accent.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                        marginRight: "2",
                                        horizontal: "center",
                                        vertical: "center",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select, accentColor === color ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ""),
                                        onClick: ()=>{
                                            setAccentColor(color);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                            variant: "ghost",
                                            size: "m",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][color]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatch}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                lineNumber: 209,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 208,
                                            columnNumber: 17
                                        }, this)
                                    }, color, false, {
                                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                textVariant: "label-default-s",
                                minWidth: 3,
                                children: "Neutral"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scroller"], {
                                minWidth: 0,
                                fitWidth: true,
                                children: colorOptions.neutral.map((color, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                        marginRight: "2",
                                        horizontal: "center",
                                        vertical: "center",
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select, neutralColor === color ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : ""),
                                        onClick: ()=>{
                                            setNeutralColor(color);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                            variant: "ghost",
                                            size: "m",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][color]} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].swatch}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                lineNumber: 240,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    }, color, false, {
                                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                fillWidth: true,
                paddingTop: "12",
                paddingLeft: "16",
                gap: "4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "heading-strong-s",
                        children: "Solid style"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body-default-s",
                        onBackground: "neutral-weak",
                        children: "Customize the appearance of interactive elements"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                fillWidth: true,
                border: "neutral-alpha-medium",
                radius: "l-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        borderBottom: "neutral-alpha-medium",
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "label-default-s",
                                children: "Style"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                                maxWidth: 22,
                                minWidth: 0,
                                buttons: [
                                    {
                                        size: "l",
                                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                            vertical: "center",
                                            gap: "12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                                    "data-solid": "color",
                                                    border: "brand-strong",
                                                    solid: "brand-weak",
                                                    position: "relative",
                                                    width: "24",
                                                    height: "24",
                                                    radius: "s"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 21
                                                }, void 0),
                                                "Color"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 272,
                                            columnNumber: 19
                                        }, void 0),
                                        value: "color"
                                    },
                                    {
                                        size: "l",
                                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                            vertical: "center",
                                            gap: "12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                                    "data-solid": "inverse",
                                                    border: "brand-strong",
                                                    solid: "brand-strong",
                                                    position: "relative",
                                                    width: "24",
                                                    height: "24",
                                                    radius: "s"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 21
                                                }, void 0),
                                                "Inverse"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 290,
                                            columnNumber: 19
                                        }, void 0),
                                        value: "inverse"
                                    },
                                    {
                                        size: "l",
                                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                            vertical: "center",
                                            gap: "12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                                    "data-solid": "contrast",
                                                    border: "brand-strong",
                                                    solid: "brand-strong",
                                                    position: "relative",
                                                    width: "24",
                                                    height: "24",
                                                    radius: "s"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 21
                                                }, void 0),
                                                "Contrast"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 308,
                                            columnNumber: 19
                                        }, void 0),
                                        value: "contrast"
                                    }
                                ],
                                onToggle: (value)=>setSolid(value),
                                selected: solid
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "label-default-s",
                                children: "Effect"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                                maxWidth: 22,
                                minWidth: 0,
                                buttons: [
                                    {
                                        size: "l",
                                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                            vertical: "center",
                                            gap: "12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                                    border: "brand-strong",
                                                    solid: "brand-weak",
                                                    position: "relative",
                                                    width: "24",
                                                    height: "24",
                                                    radius: "s"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                    lineNumber: 345,
                                                    columnNumber: 21
                                                }, void 0),
                                                "Flat"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 344,
                                            columnNumber: 19
                                        }, void 0),
                                        value: "flat"
                                    },
                                    {
                                        size: "l",
                                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                            vertical: "center",
                                            gap: "12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                                                    border: "brand-strong",
                                                    style: {
                                                        boxShadow: "inset 0 calc(-1 * var(--static-space-8)) var(--static-space-8) var(--brand-solid-strong)"
                                                    },
                                                    solid: "brand-weak",
                                                    position: "relative",
                                                    width: "24",
                                                    height: "24",
                                                    radius: "s"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 21
                                                }, void 0),
                                                "Plastic"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                            lineNumber: 361,
                                            columnNumber: 19
                                        }, void 0),
                                        value: "plastic"
                                    }
                                ],
                                onToggle: (value)=>setSolidStyle(value),
                                selected: solidStyle
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 328,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                fillWidth: true,
                paddingTop: "12",
                paddingLeft: "16",
                gap: "4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "heading-strong-s",
                        children: "Advanced"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        variant: "body-default-s",
                        onBackground: "neutral-weak",
                        children: "Customize advanced styling options"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 387,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                lineNumber: 385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                fillWidth: true,
                border: "neutral-alpha-medium",
                radius: "l-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        borderBottom: "neutral-alpha-medium",
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "label-default-s",
                                children: "Surface"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 401,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                                maxWidth: 22,
                                minWidth: 0,
                                onToggle: (value)=>setSurface(value),
                                selected: surface,
                                buttons: [
                                    {
                                        size: "l",
                                        label: "Filled",
                                        value: "filled"
                                    },
                                    {
                                        size: "l",
                                        label: "Translucent",
                                        value: "translucent"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 402,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        borderBottom: "neutral-alpha-medium",
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "label-default-s",
                                children: "Scaling"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 430,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                                maxWidth: 22,
                                minWidth: 0,
                                onToggle: (value)=>setScaling(value),
                                selected: scaling,
                                buttons: [
                                    {
                                        size: "l",
                                        label: "90",
                                        value: "90"
                                    },
                                    {
                                        size: "l",
                                        label: "95",
                                        value: "95"
                                    },
                                    {
                                        size: "l",
                                        label: "100",
                                        value: "100"
                                    },
                                    {
                                        size: "l",
                                        label: "105",
                                        value: "105"
                                    },
                                    {
                                        size: "l",
                                        label: "110",
                                        value: "110"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        horizontal: "space-between",
                        vertical: "center",
                        fillWidth: true,
                        paddingX: "24",
                        paddingY: "16",
                        gap: "24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "label-default-s",
                                children: "Transition"
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SegmentedControl"], {
                                maxWidth: 22,
                                minWidth: 0,
                                onToggle: (value)=>setTransition(value),
                                selected: transition,
                                buttons: [
                                    {
                                        size: "l",
                                        label: "All",
                                        value: "all"
                                    },
                                    {
                                        size: "l",
                                        label: "Micro",
                                        value: "micro"
                                    },
                                    {
                                        size: "l",
                                        label: "Macro",
                                        value: "macro"
                                    },
                                    {
                                        size: "l",
                                        label: "None",
                                        value: "none"
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StylePanel.tsx",
                lineNumber: 391,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/StylePanel.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
});
StylePanel.displayName = "StylePanel";
;
}}),
"[project]/src/once-ui/components/StyleOverlay.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "open": "StyleOverlay-module-scss-module__DeJKCW__open",
  "panel": "StyleOverlay-module-scss-module__DeJKCW__panel",
});
}}),
"[project]/src/once-ui/components/StyleOverlay.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "StyleOverlay": (()=>StyleOverlay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StyleOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/StyleOverlay.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/StylePanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Background.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const StyleOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ iconButtonProps, ...rest }, ref)=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const togglePanel = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                variant: "primary",
                onClick: togglePanel,
                icon: "sparkle",
                ...iconButtonProps
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/StyleOverlay.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                as: "aside",
                zIndex: 3,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StyleOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].panel} ${isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StyleOverlay$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open}`,
                maxWidth: 28,
                style: {
                    maxHeight: "calc(100% - var(--static-space-4))"
                },
                fillHeight: true,
                position: "absolute",
                shadow: "xl",
                top: "2",
                right: "2",
                transition: "macro-medium",
                background: "page",
                overflow: "hidden",
                radius: "xl",
                border: "neutral-medium",
                ...rest,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StylePanel"], {
                        fill: true,
                        overflowY: "scroll",
                        padding: "8"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/StyleOverlay.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        position: "absolute",
                        paddingTop: "8",
                        paddingRight: "12",
                        top: "0",
                        right: "0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Background"], {
                                position: "absolute",
                                top: "0",
                                right: "8",
                                left: undefined,
                                width: 8,
                                height: 4,
                                mask: {
                                    x: 100,
                                    y: 0,
                                    radius: 7
                                },
                                dots: {
                                    display: true,
                                    size: "2",
                                    color: "page-background"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StyleOverlay.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                                variant: "secondary",
                                onClick: togglePanel,
                                icon: "close",
                                ...iconButtonProps
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/StyleOverlay.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/StyleOverlay.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/StyleOverlay.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/StyleOverlay.tsx",
        lineNumber: 20,
        columnNumber: 7
    }, this);
});
StyleOverlay.displayName = "StyleOverlay";
;
}}),
"[project]/src/once-ui/components/Switch.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "checked": "Switch-module-scss-module__uXSjba__checked",
  "container": "Switch-module-scss-module__uXSjba__container",
  "disabled": "Switch-module-scss-module__uXSjba__disabled",
  "element": "Switch-module-scss-module__uXSjba__element",
  "reverse": "Switch-module-scss-module__uXSjba__reverse",
  "scaleInCenter": "Switch-module-scss-module__uXSjba__scaleInCenter",
  "switch": "Switch-module-scss-module__uXSjba__switch",
});
}}),
"[project]/src/once-ui/components/Switch.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Switch": (()=>Switch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Switch.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/SharedInteractiveStyles.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Spinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InteractiveDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/InteractiveDetails.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Switch = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, isChecked, reverse = false, loading = false, onToggle, ariaLabel = "Toggle switch", disabled, name, value, ...props }, ref)=>{
    const handleKeyDown = (event)=>{
        if (!disabled && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            onToggle();
        }
    };
    const handleClick = ()=>{
        if (!disabled) {
            onToggle();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        gap: "16",
        vertical: "center",
        horizontal: reverse ? "space-between" : undefined,
        fillWidth: reverse,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container, className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reverse]: reverse,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled]: disabled
        }),
        onClick: handleClick,
        role: "switch",
        "aria-checked": isChecked,
        "aria-label": ariaLabel,
        "aria-disabled": disabled,
        tabIndex: -1,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                type: "checkbox",
                name: name,
                value: value,
                checked: isChecked,
                onChange: onToggle,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SharedInteractiveStyles$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden,
                tabIndex: -1,
                ...props
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Switch.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].switch, {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checked]: isChecked,
                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled]: disabled
                }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onKeyDown: handleKeyDown,
                    tabIndex: disabled ? -1 : 0,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].element, {
                        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].checked]: isChecked,
                        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].disabled]: disabled
                    }),
                    children: loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spinner"], {
                        size: "xs"
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Switch.tsx",
                        lineNumber: 96,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Switch.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Switch.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this),
            props.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InteractiveDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InteractiveDetails"], {
                ...props,
                onClick: ()=>{}
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Switch.tsx",
                lineNumber: 99,
                columnNumber: 25
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Switch.tsx",
        lineNumber: 55,
        columnNumber: 7
    }, this);
});
Switch.displayName = "Switch";
;
}}),
"[project]/src/once-ui/components/Tag.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "accent": "Tag-module-scss-module__xpQQYq__accent",
  "brand": "Tag-module-scss-module__xpQQYq__brand",
  "danger": "Tag-module-scss-module__xpQQYq__danger",
  "gradient": "Tag-module-scss-module__xpQQYq__gradient",
  "info": "Tag-module-scss-module__xpQQYq__info",
  "l": "Tag-module-scss-module__xpQQYq__l",
  "m": "Tag-module-scss-module__xpQQYq__m",
  "neutral": "Tag-module-scss-module__xpQQYq__neutral",
  "s": "Tag-module-scss-module__xpQQYq__s",
  "success": "Tag-module-scss-module__xpQQYq__success",
  "tag": "Tag-module-scss-module__xpQQYq__tag",
  "warning": "Tag-module-scss-module__xpQQYq__warning",
});
}}),
"[project]/src/once-ui/components/Tag.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Tag": (()=>Tag)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tag$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Tag.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Tag = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant = "neutral", size = "m", label = "", prefixIcon, suffixIcon, className, children, ...rest }, ref)=>{
    const paddingSize = size === "s" ? "2" : "4";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        fitWidth: true,
        borderWidth: 1,
        borderStyle: "solid",
        vertical: "center",
        radius: "l",
        gap: "4",
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tag$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tag, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tag$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant], __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tag$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size], className),
        ...rest,
        children: [
            prefixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: prefixIcon,
                size: "xs"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Tag.tsx",
                lineNumber: 46,
                columnNumber: 24
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                style: {
                    userSelect: "none"
                },
                paddingX: paddingSize,
                vertical: "center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                    as: "span",
                    variant: "label-default-s",
                    children: label || children
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Tag.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Tag.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this),
            suffixIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: suffixIcon,
                size: "xs"
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Tag.tsx",
                lineNumber: 52,
                columnNumber: 24
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Tag.tsx",
        lineNumber: 35,
        columnNumber: 7
    }, this);
});
Tag.displayName = "Tag";
;
}}),
"[project]/src/once-ui/components/TagInput.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TagInput": (()=>TagInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Chip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Chip.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const TagInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ value, onChange, label, placeholder, ...inputProps }, ref)=>{
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            if (inputValue.trim()) {
                onChange([
                    ...value,
                    inputValue.trim()
                ]);
                setInputValue("");
            }
        }
    };
    const handleRemoveTag = (index)=>{
        const newValue = value.filter((_, i)=>i !== index);
        onChange(newValue);
    };
    const handleFocus = ()=>{
        setIsFocused(true);
    };
    const handleBlur = (e)=>{
        setIsFocused(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        ref: ref,
        label: label,
        placeholder: placeholder,
        labelAsPlaceholder: true,
        value: inputValue,
        onChange: handleInputChange,
        onKeyDown: handleKeyDown,
        onFocus: handleFocus,
        onBlur: handleBlur,
        "aria-haspopup": "listbox",
        "aria-expanded": isFocused,
        ...inputProps,
        children: value.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            style: {
                margin: "calc(-1 * var(--static-space-8)) var(--static-space-8)"
            },
            direction: "row",
            gap: "4",
            vertical: "center",
            wrap: true,
            paddingY: "16",
            children: value.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Chip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Chip"], {
                    label: tag,
                    onRemove: ()=>handleRemoveTag(index),
                    "aria-label": `Remove tag ${tag}`
                }, index, false, {
                    fileName: "[project]/src/once-ui/components/TagInput.tsx",
                    lineNumber: 77,
                    columnNumber: 15
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/TagInput.tsx",
            lineNumber: 66,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/TagInput.tsx",
        lineNumber: 51,
        columnNumber: 7
    }, this);
});
TagInput.displayName = "TagInput";
;
}}),
"[project]/src/once-ui/components/Textarea.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Textarea": (()=>Textarea)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/hooks/useDebounce.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const Textarea = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ id, label, lines = 3, error = false, errorMessage, description, radius, className, hasPrefix, hasSuffix, labelAsPlaceholder = false, resize = "vertical", validate, children, onFocus, onBlur, onChange, style, ...props }, ref)=>{
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFilled, setIsFilled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!props.value);
    const [validationError, setValidationError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const textareaRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const debouncedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(props.value, 1000);
    const adjustHeight = ()=>{
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
        }
    };
    const handleChange = (event)=>{
        if (lines === "auto") {
            adjustHeight();
        }
        if (onChange) onChange(event);
    };
    const handleFocus = (event)=>{
        setIsFocused(true);
        if (onFocus) onFocus(event);
    };
    const handleBlur = (event)=>{
        setIsFocused(false);
        setIsFilled(!!event.target.value);
        if (onBlur) onBlur(event);
    };
    const validateInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!debouncedValue) {
            setValidationError(null);
            return;
        }
        if (validate) {
            const error = validate(debouncedValue);
            if (error) {
                setValidationError(error);
            } else {
                setValidationError(errorMessage || null);
            }
        } else {
            setValidationError(null);
        }
    }, [
        debouncedValue,
        validate,
        errorMessage
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        validateInput();
    }, [
        debouncedValue,
        validateInput
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (lines === "auto") {
            adjustHeight();
        }
    }, [
        props.value,
        lines
    ]);
    const displayError = validationError || errorMessage;
    const textareaClassNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea, "font-body", "font-default", "font-m", {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filled]: isFilled,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].focused]: isFocused,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].withPrefix]: hasPrefix,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].withSuffix]: hasSuffix,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].labelAsPlaceholder]: labelAsPlaceholder,
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hasChildren]: children
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        position: "relative",
        direction: "column",
        gap: "8",
        fillWidth: true,
        fitHeight: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error]: displayError && debouncedValue !== ""
        }),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                minHeight: "56",
                transition: "micro-medium",
                border: "neutral-medium",
                background: "neutral-alpha-weak",
                position: "relative",
                overflow: "hidden",
                vertical: "stretch",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].base, lines !== "auto" && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaBase, radius === "none" ? "radius-none" : radius ? `radius-l-${radius}` : "radius-l"),
                children: [
                    hasPrefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        paddingLeft: "12",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].prefix,
                        children: hasPrefix
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Textarea.tsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        fillWidth: true,
                        direction: "column",
                        position: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ...props,
                                ref: (node)=>{
                                    if (typeof ref === "function") {
                                        ref(node);
                                    } else if (ref) {
                                        ref.current = node;
                                    }
                                    textareaRef.current = node;
                                },
                                id: id,
                                rows: typeof lines === "number" ? lines : 1,
                                placeholder: labelAsPlaceholder ? label : props.placeholder,
                                onFocus: handleFocus,
                                onBlur: handleBlur,
                                className: textareaClassNames,
                                "aria-describedby": displayError ? `${id}-error` : undefined,
                                "aria-invalid": !!displayError,
                                style: {
                                    ...style,
                                    resize: lines === "auto" ? "none" : resize,
                                    height: height ? `${height}rem` : "auto"
                                },
                                onChange: handleChange
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/Textarea.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this),
                            !labelAsPlaceholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                as: "label",
                                variant: "label-default-m",
                                htmlFor: id,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textareaLabel, {
                                    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].floating]: isFocused || isFilled
                                }),
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/Textarea.tsx",
                                lineNumber: 201,
                                columnNumber: 15
                            }, this),
                            children && children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/Textarea.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this),
                    hasSuffix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        paddingRight: "12",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].suffix,
                        children: hasSuffix
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Textarea.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/Textarea.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this),
            displayError && errorMessage !== false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingX: "16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                    as: "span",
                    id: `${id}-error`,
                    variant: "body-default-s",
                    onBackground: "danger-weak",
                    children: displayError
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Textarea.tsx",
                    lineNumber: 222,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Textarea.tsx",
                lineNumber: 221,
                columnNumber: 11
            }, this),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                paddingX: "16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                    as: "span",
                    id: `${id}-description`,
                    variant: "body-default-s",
                    onBackground: "neutral-weak",
                    children: description
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Textarea.tsx",
                    lineNumber: 229,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Textarea.tsx",
                lineNumber: 228,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Textarea.tsx",
        lineNumber: 145,
        columnNumber: 7
    }, this);
});
Textarea.displayName = "Textarea";
;
}}),
"[project]/src/once-ui/components/TiltFx.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "tiltFx": "TiltFx-module-scss-module__cYikgq__tiltFx",
});
}}),
"[project]/src/once-ui/components/TiltFx.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TiltFx": (()=>TiltFx)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$TiltFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/TiltFx.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const TiltFx = ({ children, ...rest })=>{
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    let lastCall = 0;
    let resetTimeout;
    const handleMouseMove = (e)=>{
        if ("ontouchstart" in window) return;
        clearTimeout(resetTimeout);
        const now = Date.now();
        if (now - lastCall < 16) return;
        lastCall = now;
        const element = ref.current;
        if (!element) return;
        const rect = element.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (offsetX - centerX) / centerX;
        const deltaY = (offsetY - centerY) / centerY;
        const rotateX = -deltaY * 2;
        const rotateY = -deltaX * 2;
        window.requestAnimationFrame(()=>{
            element.style.transform = `perspective(1000px) translate3d(0, 0, 30px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    };
    const handleMouseLeave = ()=>{
        if ("ontouchstart" in window) return;
        const element = ref.current;
        if (element) {
            resetTimeout = setTimeout(()=>{
                element.style.transform = "perspective(1000px) translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)";
            }, 100);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        overflow: "hidden",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$TiltFx$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tiltFx,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/TiltFx.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
};
;
TiltFx.displayName = "TiltFx";
}}),
"[project]/src/once-ui/components/Toast.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "hidden": "Toast-module-scss-module__L80WJq__hidden",
  "toast": "Toast-module-scss-module__L80WJq__toast",
  "visible": "Toast-module-scss-module__L80WJq__visible",
});
}}),
"[project]/src/once-ui/components/Toast.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Toast": (()=>Toast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Toast.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const iconMap = {
    success: "checkCircle",
    danger: "errorCircle"
};
const Toast = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ variant, className, icon = true, onClose, action, children }, ref)=>{
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>setVisible(false), 6000);
        return ()=>clearTimeout(timer);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!visible && onClose) {
            onClose();
        }
    }, [
        visible,
        onClose
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        fillWidth: true,
        background: "surface",
        radius: "l",
        paddingY: "12",
        paddingX: "20",
        border: "neutral-medium",
        role: "alert",
        "aria-live": "assertive",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toast, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant], {
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].visible]: visible,
            [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toast$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hidden]: !visible
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            fillWidth: true,
            vertical: "center",
            gap: "8",
            children: [
                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                    size: "s",
                    onBackground: `${variant}-medium`,
                    name: iconMap[variant]
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Toast.tsx",
                    lineNumber: 54,
                    columnNumber: 20
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                    variant: "body-default-s",
                    style: {
                        width: "100%"
                    },
                    as: "div",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Toast.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this),
                action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: action
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Toast.tsx",
                    lineNumber: 58,
                    columnNumber: 22
                }, this),
                onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IconButton"], {
                    variant: "ghost",
                    icon: "close",
                    size: "m",
                    tooltip: "Hide",
                    tooltipPosition: "top",
                    onClick: ()=>setVisible(false)
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Toast.tsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/once-ui/components/Toast.tsx",
            lineNumber: 53,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Toast.tsx",
        lineNumber: 38,
        columnNumber: 7
    }, this);
});
Toast.displayName = "Toast";
;
}}),
"[project]/src/once-ui/components/Toaster.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "fadeIn": "Toaster-module-scss-module__h4IyMW__fadeIn",
  "toastAnimation": "Toaster-module-scss-module__h4IyMW__toastAnimation",
  "toastContainer": "Toaster-module-scss-module__h4IyMW__toastContainer",
  "toastWrapper": "Toaster-module-scss-module__h4IyMW__toastWrapper",
});
}}),
"[project]/src/once-ui/components/Toaster.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Toaster": (()=>Toaster)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Toaster.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Toast.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Toaster = ({ toasts, removeToast })=>{
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
        return ()=>setMounted(false);
    }, []);
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        zIndex: 10,
        fillWidth: true,
        direction: "column",
        maxWidth: 32,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toastContainer,
        children: toasts.map((toast, index, array)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                padding: "4",
                fillWidth: true,
                position: "absolute",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toastWrapper,
                style: {
                    transformOrigin: "bottom center",
                    transform: `scale(${1 - (array.length - 1 - index) * 0.05}) translateY(${1 - (array.length - 1 - index) * 10}%)`,
                    opacity: array.length - 1 - index === 0 ? 1 : 0.9
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toaster$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toastAnimation,
                    variant: toast.variant,
                    onClose: ()=>removeToast(toast.id),
                    action: toast.action,
                    children: toast.message
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Toaster.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, toast.id, false, {
                fileName: "[project]/src/once-ui/components/Toaster.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/Toaster.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this), document.body);
};
Toaster.displayName = "Toaster";
;
}}),
"[project]/src/once-ui/components/ToastProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ToastProvider": (()=>ToastProvider),
    "useToast": (()=>useToast)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Toaster.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useToast = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};
const ToastProvider = ({ children })=>{
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const addToast = (toast)=>{
        const newToast = {
            id: Math.random().toString(36).substring(7),
            ...toast
        };
        setToasts((prev)=>[
                ...prev,
                newToast
            ]);
    };
    const removeToast = (id)=>{
        setToasts((prev)=>prev.filter((toast)=>toast.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            toasts,
            addToast,
            removeToast
        },
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                toasts: toasts,
                removeToast: removeToast
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/ToastProvider.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/ToastProvider.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
};
ToastProvider.displayName = "ToastProvider";
;
}}),
"[project]/src/once-ui/components/User.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "User": (()=>User)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Tag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Skeleton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const User = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ name, children, subline, tagProps = {}, loading = false, avatarProps = {}, className }, ref)=>{
    const { src, value, empty, ...restAvatarProps } = avatarProps;
    const isEmpty = empty || !src && !value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        ref: ref,
        vertical: "center",
        gap: "8",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Avatar"], {
                size: "m",
                src: src,
                value: value,
                empty: isEmpty,
                loading: loading,
                ...restAvatarProps
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/User.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            children,
            name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                direction: "column",
                paddingLeft: "4",
                paddingRight: "12",
                children: [
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        minWidth: 6,
                        paddingY: "4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            width: "xl",
                            height: "m",
                            shape: "line",
                            "aria-label": "Loading name"
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/User.tsx",
                            lineNumber: 42,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/User.tsx",
                        lineNumber: 41,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        gap: "8",
                        vertical: "center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                variant: "heading-strong-xs",
                                onBackground: "neutral-strong",
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/User.tsx",
                                lineNumber: 46,
                                columnNumber: 17
                            }, this),
                            tagProps.label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tag"], {
                                size: "s",
                                ...tagProps,
                                children: tagProps.label
                            }, void 0, false, {
                                fileName: "[project]/src/once-ui/components/User.tsx",
                                lineNumber: 50,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/once-ui/components/User.tsx",
                        lineNumber: 45,
                        columnNumber: 15
                    }, this),
                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                        paddingY: "4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            width: "l",
                            height: "xs",
                            shape: "line",
                            "aria-label": "Loading subline"
                        }, void 0, false, {
                            fileName: "[project]/src/once-ui/components/User.tsx",
                            lineNumber: 58,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/User.tsx",
                        lineNumber: 57,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        wrap: "nowrap",
                        variant: "body-default-xs",
                        onBackground: "neutral-weak",
                        children: subline
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/User.tsx",
                        lineNumber: 61,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/User.tsx",
                lineNumber: 39,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/User.tsx",
        lineNumber: 28,
        columnNumber: 7
    }, this);
});
User.displayName = "User";
;
}}),
"[project]/src/once-ui/components/UserMenu.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "selected": "UserMenu-module-scss-module__Yp8omG__selected",
  "wrapper": "UserMenu-module-scss-module__Yp8omG__wrapper",
});
}}),
"[project]/src/once-ui/components/UserMenu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UserMenu": (()=>UserMenu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/classnames/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$UserMenu$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/UserMenu.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DropdownWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$User$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/User.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const UserMenu = ({ selected = false, dropdown, minWidth, maxWidth, minHeight, className, style, ...userProps })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownWrapper"], {
        minWidth: minWidth,
        maxWidth: maxWidth,
        minHeight: minHeight,
        style: {
            borderRadius: "var(--radius-full)"
        },
        trigger: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
            tabIndex: 0,
            direction: "column",
            padding: "4",
            radius: "full",
            cursor: "interactive",
            border: selected ? "neutral-medium" : "transparent",
            background: selected ? "neutral-strong" : "transparent",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(className || "", selected ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$UserMenu$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selected : "", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$UserMenu$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].wrapper),
            style: style,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$User$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["User"], {
                ...userProps
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/UserMenu.tsx",
                lineNumber: 48,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/once-ui/components/UserMenu.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, void 0),
        dropdown: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: dropdown
        }, void 0, false)
    }, void 0, false, {
        fileName: "[project]/src/once-ui/components/UserMenu.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
UserMenu.displayName = "UserMenu";
;
}}),
"[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Accordion$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Accordion.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Arrow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Arrow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Avatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Avatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$AvatarGroup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/AvatarGroup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Background$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Background.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Carousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Carousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Column.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Checkbox$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Checkbox.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Chip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Chip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ColorInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ColorInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DateInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DateInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DatePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DatePicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DateRangePicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DateRangePicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Dropdown$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Dropdown.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$DropdownWrapper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/DropdownWrapper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Fade$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Fade.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Feedback$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Feedback.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$GlitchFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/GlitchFx.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Heading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$HoloFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/HoloFx.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$IconButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/IconButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InlineCode$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/InlineCode.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$InteractiveDetails$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/InteractiveDetails.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Kbd$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Kbd.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$LetterFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/LetterFx.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Line$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Line.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$LogoCloud$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/LogoCloud.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NavIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/NavIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$NumberInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/NumberInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Option$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Option.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$PasswordInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/PasswordInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RadioButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/RadioButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$RevealFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/RevealFx.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Row$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Row.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Scroller$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Scroller.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SegmentedControl$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/SegmentedControl.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartImage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/SmartImage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$SmartLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/SmartLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Spinner.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StatusIndicator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/StatusIndicator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StylePanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/StylePanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$StyleOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/StyleOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Switch$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Switch.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tag$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Tag.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$TagInput$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/TagInput.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Text$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Text.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$TiltFx$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/TiltFx.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Toast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Toaster$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Toaster.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToastProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ToastProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$ToggleButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/ToggleButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$User$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/User.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$UserMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/UserMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/src/once-ui/components/Accordion.module.scss.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__({
  "accordion": "Accordion-module-scss-module__ttz86G__accordion",
});
}}),
"[project]/src/once-ui/components/Accordion.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Accordion": (()=>Accordion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/src/once-ui/components/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Accordion$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/once-ui/components/Accordion.module.scss.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Flex.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Heading.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Icon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/once-ui/components/Column.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const Accordion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ title, children, open = false, ...rest }, ref)=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(open);
    const toggleAccordion = ()=>{
        setIsOpen(!isOpen);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useImperativeHandle"])(ref, ()=>({
            ...ref?.current ?? {},
            toggle: toggleAccordion,
            open: ()=>{
                setIsOpen(true);
            },
            close: ()=>{
                setIsOpen(false);
            }
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
        fillWidth: true,
        direction: "column",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Accordion$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].border,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                tabIndex: 0,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Accordion$2e$module$2e$scss$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].accordion,
                cursor: "pointer",
                transition: "macro-medium",
                paddingY: "16",
                paddingX: "20",
                vertical: "center",
                horizontal: "space-between",
                onClick: toggleAccordion,
                "aria-expanded": isOpen,
                "aria-controls": "accordion-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Heading$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Heading"], {
                        as: "h3",
                        variant: "heading-strong-s",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Accordion.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                        name: "chevronDown",
                        size: "m",
                        style: {
                            display: "flex",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "var(--transition-micro-medium)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Accordion.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/once-ui/components/Accordion.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                id: "accordion-content",
                fillWidth: true,
                style: {
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows var(--transition-duration-macro-medium) var(--transition-eased)"
                },
                "aria-hidden": !isOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Flex$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Flex"], {
                    fillWidth: true,
                    minHeight: 0,
                    overflow: "hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$once$2d$ui$2f$components$2f$Column$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Column"], {
                        fillWidth: true,
                        paddingX: "20",
                        paddingTop: "8",
                        paddingBottom: "16",
                        ...rest,
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/once-ui/components/Accordion.tsx",
                        lineNumber: 72,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/once-ui/components/Accordion.tsx",
                    lineNumber: 71,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/once-ui/components/Accordion.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/once-ui/components/Accordion.tsx",
        lineNumber: 33,
        columnNumber: 7
    }, this);
});
Accordion.displayName = "Accordion";
;
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__22825d._.js.map