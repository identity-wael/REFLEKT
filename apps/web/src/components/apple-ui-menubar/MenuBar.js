"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBarDivider = exports.MenuItem = exports.MenuBarSection = exports.MenuBarBrand = exports.MenuBarContent = exports.MenuBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils");
const MenuBar_module_css_1 = __importDefault(require("./MenuBar.module.css"));
/**
 * MenuBar Component
 *
 * Apple-style menu bar with advanced glassmorphism effects.
 * Inspired by macOS Sonoma and visionOS design language.
 *
 * Features:
 * - Ultra-heavy frosted glass effect
 * - Dynamic blur intensity on scroll
 * - Multiple material variants
 * - Vibrant color tinting
 * - Auto dark mode support
 * - Smooth transitions
 *
 * @example
 * ```tsx
 * <MenuBar material="frosted-heavy" position="fixed">
 *   <MenuBarContent>
 *     <MenuBarBrand>REFLEKT</MenuBarBrand>
 *     <MenuBarSection>
 *       <MenuItem>File</MenuItem>
 *       <MenuItem>Edit</MenuItem>
 *       <MenuItem>View</MenuItem>
 *     </MenuBarSection>
 *   </MenuBarContent>
 * </MenuBar>
 * ```
 */
exports.MenuBar = react_1.default.forwardRef(({ material = 'frosted-heavy', position = 'fixed', blurOnScroll = true, showBorder = true, className, children, ...props }, ref) => {
    const [scrolled, setScrolled] = react_1.default.useState(false);
    react_1.default.useEffect(() => {
        if (!blurOnScroll)
            return;
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [blurOnScroll]);
    return ((0, jsx_runtime_1.jsx)("nav", { ref: ref, className: (0, utils_1.cn)(MenuBar_module_css_1.default.menuBar, MenuBar_module_css_1.default[`material-${material}`], MenuBar_module_css_1.default[`position-${position}`], scrolled && MenuBar_module_css_1.default.scrolled, showBorder && MenuBar_module_css_1.default.bordered, className), ...props, children: children }));
});
exports.MenuBar.displayName = 'MenuBar';
exports.MenuBarContent = react_1.default.forwardRef(({ className, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)(MenuBar_module_css_1.default.menuBarContent, className), ...props, children: children }));
});
exports.MenuBarContent.displayName = 'MenuBarContent';
exports.MenuBarBrand = react_1.default.forwardRef(({ className, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)(MenuBar_module_css_1.default.menuBarBrand, className), ...props, children: children }));
});
exports.MenuBarBrand.displayName = 'MenuBarBrand';
exports.MenuBarSection = react_1.default.forwardRef(({ align = 'start', className, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)(MenuBar_module_css_1.default.menuBarSection, MenuBar_module_css_1.default[`align-${align}`], className), ...props, children: children }));
});
exports.MenuBarSection.displayName = 'MenuBarSection';
exports.MenuItem = react_1.default.forwardRef(({ active, showIndicator, icon, className, children, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsxs)("button", { ref: ref, className: (0, utils_1.cn)(MenuBar_module_css_1.default.menuItem, active && MenuBar_module_css_1.default.menuItemActive, className), ...props, children: [icon && (0, jsx_runtime_1.jsx)("span", { className: MenuBar_module_css_1.default.menuItemIcon, children: icon }), (0, jsx_runtime_1.jsx)("span", { className: MenuBar_module_css_1.default.menuItemText, children: children }), showIndicator && (0, jsx_runtime_1.jsx)("span", { className: MenuBar_module_css_1.default.menuItemIndicator })] }));
});
exports.MenuItem.displayName = 'MenuItem';
exports.MenuBarDivider = react_1.default.forwardRef(({ className, ...props }, ref) => {
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, utils_1.cn)(MenuBar_module_css_1.default.menuBarDivider, className), ...props }));
});
exports.MenuBarDivider.displayName = 'MenuBarDivider';
