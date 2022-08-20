var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/_app/immutable/chunks/index-3e01a4ca.js
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
  }
  return component;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css) => css.code).join("\n"),
          map: null
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_index_3e01a4ca = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/index-3e01a4ca.js"() {
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// .svelte-kit/output/server/_app/immutable/chunks/hooks-bced8853.js
var hooks_bced8853_exports = {};
var init_hooks_bced8853 = __esm({
  ".svelte-kit/output/server/_app/immutable/chunks/hooks-bced8853.js"() {
  }
});

// .svelte-kit/output/server/entries/pages/__layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout
});
var _layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/__layout.svelte.js"() {
    init_index_3e01a4ca();
    _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  file: () => file,
  imports: () => imports,
  index: () => index,
  module: () => layout_svelte_exports,
  stylesheets: () => stylesheets
});
var index, file, imports, stylesheets;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_svelte();
    index = 0;
    file = "_app/immutable/pages/__layout.svelte-d837a820.js";
    imports = ["_app/immutable/pages/__layout.svelte-d837a820.js", "_app/immutable/chunks/index-4bfd8167.js"];
    stylesheets = ["_app/immutable/assets/__layout-2037d8c7.css"];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2,
  load: () => load
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_index_3e01a4ca();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { status } = $$props;
      let { error: error2 } = $$props;
      if ($$props.status === void 0 && $$bindings.status && status !== void 0)
        $$bindings.status(status);
      if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
        $$bindings.error(error2);
      return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  file: () => file2,
  imports: () => imports2,
  index: () => index2,
  module: () => error_svelte_exports,
  stylesheets: () => stylesheets2
});
var index2, file2, imports2, stylesheets2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    init_error_svelte();
    index2 = 1;
    file2 = "_app/immutable/error.svelte-7cca32d7.js";
    imports2 = ["_app/immutable/error.svelte-7cca32d7.js", "_app/immutable/chunks/index-4bfd8167.js"];
    stylesheets2 = [];
  }
});

// node_modules/@typeform/embed/build/index.js
var require_build = __commonJS({
  "node_modules/@typeform/embed/build/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["embed-next"] = t() : e["embed-next"] = t();
    }(exports, function() {
      return function() {
        "use strict";
        var e = { 27: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.FORM_BASE_URL = t2.POPUP_SIZE = t2.SLIDER_WIDTH = t2.SLIDER_POSITION = t2.SIDETAB_ATTRIBUTE = t2.WIDGET_ATTRIBUTE = t2.SLIDER_ATTRIBUTE = t2.POPUP_ATTRIBUTE = t2.POPOVER_ATTRIBUTE = void 0, t2.POPOVER_ATTRIBUTE = "data-tf-popover", t2.POPUP_ATTRIBUTE = "data-tf-popup", t2.SLIDER_ATTRIBUTE = "data-tf-slider", t2.WIDGET_ATTRIBUTE = "data-tf-widget", t2.SIDETAB_ATTRIBUTE = "data-tf-sidetab", t2.SLIDER_POSITION = "right", t2.SLIDER_WIDTH = 800, t2.POPUP_SIZE = 100, t2.FORM_BASE_URL = "https://form.typeform.com";
        }, 528: function(e2, t2, n) {
          var o = this && this.__assign || function() {
            return (o = Object.assign || function(e3) {
              for (var t3, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
                for (var r2 in t3 = arguments[n2])
                  Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
              return e3;
            }).apply(this, arguments);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createPopover = void 0;
          var r = n(747), i = n(320), a = function(e3, t3) {
            var n2 = e3.parentNode;
            n2 && (n2.removeChild(e3), n2.appendChild(t3));
          }, u = function(e3, t3) {
            void 0 === e3 && (e3 = "div"), void 0 === t3 && (t3 = "tf-v1-popover-button-icon");
            var n2 = document.createElement(e3);
            return n2.className = t3 + " tf-v1-close-icon", n2.innerHTML = "&times;", n2.dataset.testid = t3, n2;
          }, s2 = { buttonColor: "#3a7685" };
          t2.createPopover = function(e3, t3) {
            void 0 === t3 && (t3 = {});
            var n2, c, d, l = o(o({}, s2), t3), f = r.createIframe(e3, "popover", l), p = f.iframe, v = f.embedId, m = f.refresh, h = function(e4, t4) {
              var n3 = document.createElement("div");
              return n3.className = "tf-v1-popover", n3.dataset.testid = "tf-v1-popover", r.setElementSize(n3, { width: e4, height: t4 });
            }(l.width, l.height), b = function() {
              var e4 = document.createElement("div");
              return e4.className = "tf-v1-popover-wrapper", e4.dataset.testid = "tf-v1-popover-wrapper", e4;
            }(), y = function(e4, t4) {
              var n3 = r.getTextColor(t4), o2 = document.createElement("div");
              o2.className = "tf-v1-popover-button-icon";
              var i2 = '<svg class="default" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5\n    9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75\n    7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25\n    7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125\n    17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' + n3 + '"></path>\n  </svg>', a2 = null == e4 ? void 0 : e4.startsWith("http");
              return o2.innerHTML = a2 ? "<img alt='popover trigger icon button' src='" + e4 + "'/>" : null != e4 ? e4 : i2, o2.dataset.testid = "default-icon", o2;
            }(l.customIcon, l.buttonColor || s2.buttonColor), g = function() {
              var e4 = document.createElement("div");
              e4.className = "tf-v1-spinner";
              var t4 = document.createElement("div");
              return t4.className = "tf-v1-popover-button-icon", t4.dataset.testid = "spinner-icon", t4.append(e4), t4;
            }(), w = u(), O = u("a", "tf-v1-popover-close"), _ = function(e4) {
              var t4 = r.getTextColor(e4), n3 = document.createElement("button");
              return n3.className = "tf-v1-popover-button", n3.dataset.testid = "tf-v1-popover-button", n3.style.backgroundColor = e4, n3.style.color = t4, n3;
            }(l.buttonColor || s2.buttonColor);
            (l.container || document.body).append(h), b.append(p), h.append(_), h.append(O), _.append(y);
            var E = function() {
              c && c.parentNode && (c.classList.add("closing"), setTimeout(function() {
                r.unmountElement(c);
              }, 250));
            };
            l.tooltip && l.tooltip.length > 0 && (c = function(e4, t4) {
              var n3 = document.createElement("span");
              n3.className = "tf-v1-popover-tooltip-close", n3.dataset.testid = "tf-v1-popover-tooltip-close", n3.innerHTML = "&times;", n3.onclick = t4;
              var o2 = document.createElement("div");
              o2.className = "tf-v1-popover-tooltip-text", o2.innerHTML = e4;
              var r2 = document.createElement("div");
              return r2.className = "tf-v1-popover-tooltip", r2.dataset.testid = "tf-v1-popover-tooltip", r2.appendChild(o2), r2.appendChild(n3), r2;
            }(l.tooltip, E), h.append(c)), l.notificationDays && (l.enableSandbox || i.canBuildNotificationDot(e3)) && (d = i.buildNotificationDot(), _.append(d)), p.onload = function() {
              h.classList.add("open"), b.style.opacity = "1", O.style.opacity = "1", a(g, w), r.addCustomKeyboardListener(j);
            };
            var P = r.makeAutoResize(h), C = function() {
              r.isOpen(b) || (E(), d && (d.classList.add("closing"), l.notificationDays && !l.enableSandbox && i.saveNotificationDotHideUntilTime(e3, l.notificationDays), setTimeout(function() {
                r.unmountElement(d);
              }, 250)), P(), window.addEventListener("resize", P), setTimeout(function() {
                r.isInPage(b) ? (b.style.opacity = "0", O.style.opacity = "0", b.style.display = "flex", setTimeout(function() {
                  h.classList.add("open"), b.style.opacity = "1", O.style.opacity = "1";
                }), a(y, w)) : (h.append(b), a(y, g), b.style.opacity = "0", O.style.opacity = "0");
              }));
            }, j = function() {
              var e4;
              r.isOpen(h) && (null === (e4 = t3.onClose) || void 0 === e4 || e4.call(t3), setTimeout(function() {
                l.keepSession ? b.style.display = "none" : r.unmountElement(b), h.classList.remove("open"), a(w, y);
              }, 250));
            };
            r.setAutoClose(v, l.autoClose, j);
            var I = function() {
              r.isOpen(b) ? j() : C();
            };
            return _.onclick = I, O.onclick = j, l.open && !r.isOpen(b) && (n2 = r.handleCustomOpen(C, l.open, l.openValue)), { open: C, close: j, toggle: I, refresh: m, unmount: function() {
              r.unmountElement(h), window.removeEventListener("resize", P), l.open && (null == n2 ? void 0 : n2.remove) && n2.remove();
            } };
          };
        }, 797: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(528), t2), r(n(100), t2);
        }, 320: function(e2, t2) {
          var n = this && this.__assign || function() {
            return (n = Object.assign || function(e3) {
              for (var t3, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
                for (var r2 in t3 = arguments[n2])
                  Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
              return e3;
            }).apply(this, arguments);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.buildNotificationDot = t2.canBuildNotificationDot = t2.saveNotificationDotHideUntilTime = void 0;
          var o = "tfNotificationData", r = function() {
            var e3 = localStorage.getItem(o);
            return e3 ? JSON.parse(e3) : {};
          }, i = function(e3) {
            e3 && localStorage.setItem(o, JSON.stringify(e3));
          };
          t2.saveNotificationDotHideUntilTime = function(e3, t3) {
            var o2, a = new Date();
            a.setDate(a.getDate() + t3), i(n(n({}, r()), ((o2 = {})[e3] = { hideUntilTime: a.getTime() }, o2)));
          }, t2.canBuildNotificationDot = function(e3) {
            var t3 = function(e4) {
              var t4;
              return (null === (t4 = r()[e4]) || void 0 === t4 ? void 0 : t4.hideUntilTime) || 0;
            }(e3);
            return new Date().getTime() > t3 && (t3 && function(e4) {
              var t4 = r();
              delete t4[e4], i(t4);
            }(e3), true);
          }, t2.buildNotificationDot = function() {
            var e3 = document.createElement("span");
            return e3.className = "tf-v1-popover-unread-dot", e3.dataset.testid = "tf-v1-popover-unread-dot", e3;
          };
        }, 100: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 630: function(e2, t2, n) {
          var o = this && this.__rest || function(e3, t3) {
            var n2 = {};
            for (var o2 in e3)
              Object.prototype.hasOwnProperty.call(e3, o2) && t3.indexOf(o2) < 0 && (n2[o2] = e3[o2]);
            if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
              var r2 = 0;
              for (o2 = Object.getOwnPropertySymbols(e3); r2 < o2.length; r2++)
                t3.indexOf(o2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, o2[r2]) && (n2[o2[r2]] = e3[o2[r2]]);
            }
            return n2;
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createPopup = void 0;
          var r = n(747), i = n(27), a = n(747);
          t2.createPopup = function(e3, t3) {
            if (void 0 === t3 && (t3 = {}), !r.hasDom())
              return { open: function() {
              }, close: function() {
              }, toggle: function() {
              }, refresh: function() {
              }, unmount: function() {
              } };
            var n2, u = t3.width, s2 = t3.height, c = t3.size, d = void 0 === c ? i.POPUP_SIZE : c, l = t3.onClose, f = o(t3, ["width", "height", "size", "onClose"]), p = r.createIframe(e3, "popup", f), v = p.iframe, m = p.embedId, h = p.refresh, b = document.body.style.overflow, y = function() {
              var e4 = document.createElement("div");
              return e4.className = "tf-v1-popup", e4.dataset.testid = "tf-v1-popup", e4.style.opacity = "0", e4;
            }(), g = function() {
              var e4 = document.createElement("div");
              return e4.className = "tf-v1-spinner", e4;
            }(), w = function(e4, t4, n3) {
              var o2 = document.createElement("div");
              return o2.className = "tf-v1-iframe-wrapper", o2.style.opacity = "0", r.isDefined(e4) && r.isDefined(t4) ? r.setElementSize(o2, { width: e4, height: t4 }) : (o2.style.width = "calc(" + n3 + "% - 80px)", o2.style.height = "calc(" + n3 + "% - 80px)", o2);
            }(u, s2, d);
            w.append(v), y.append(g), y.append(w);
            var O = f.container || document.body;
            v.onload = function() {
              w.style.opacity = "1", setTimeout(function() {
                g.style.display = "none";
              }, 250), r.addCustomKeyboardListener(P);
            };
            var _ = a.makeAutoResize(y), E = function() {
              a.isOpen(y) || (a.isInPage(y) ? y.style.display = "flex" : (g.style.display = "block", O.append(y)), document.body.style.overflow = "hidden", _(), window.addEventListener("resize", _), setTimeout(function() {
                y.style.opacity = "1";
              }));
            }, P = function() {
              a.isOpen(y) && (null == l || l(), y.style.opacity = "0", document.body.style.overflow = b, setTimeout(function() {
                f.keepSession ? y.style.display = "none" : C();
              }, 250));
            };
            w.append(function(e4) {
              var t4 = document.createElement("a");
              return t4.className = "tf-v1-close tf-v1-close-icon", t4.innerHTML = "&times;", t4.onclick = e4, t4;
            }(P)), r.setAutoClose(m, f.autoClose, P), f.open && !a.isOpen(y) && (n2 = r.handleCustomOpen(E, f.open, f.openValue));
            var C = function() {
              r.unmountElement(y), window.removeEventListener("resize", _), f.open && (null == n2 ? void 0 : n2.remove) && n2.remove();
            };
            return { open: E, close: P, toggle: function() {
              a.isOpen(y) ? P() : E();
            }, refresh: h, unmount: C };
          };
        }, 970: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(630), t2), r(n(394), t2);
        }, 394: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 382: function(e2, t2, n) {
          var o = this && this.__assign || function() {
            return (o = Object.assign || function(e3) {
              for (var t3, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
                for (var r2 in t3 = arguments[n2])
                  Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
              return e3;
            }).apply(this, arguments);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createSidetab = void 0;
          var r = n(747), i = { buttonColor: "#3a7685", buttonText: "Launch me" }, a = function(e3, t3) {
            void 0 === e3 && (e3 = "div"), void 0 === t3 && (t3 = "tf-v1-sidetab-button-icon");
            var n2 = document.createElement(e3);
            return n2.className = t3 + " tf-v1-close-icon", n2.innerHTML = "&times;", n2.dataset.testid = t3, n2;
          }, u = function(e3, t3) {
            var n2 = e3.parentNode;
            n2 && (n2.removeChild(e3), n2.appendChild(t3));
          };
          t2.createSidetab = function(e3, t3) {
            void 0 === t3 && (t3 = {});
            var n2, s2 = o(o({}, i), t3), c = r.createIframe(e3, "side-tab", s2), d = c.iframe, l = c.embedId, f = c.refresh, p = function(e4, t4) {
              var n3 = document.createElement("div");
              return n3.className = "tf-v1-sidetab", n3.dataset.testid = "tf-v1-sidetab", r.setElementSize(n3, { width: e4, height: t4 });
            }(s2.width, s2.height), v = function() {
              var e4 = document.createElement("div");
              return e4.className = "tf-v1-sidetab-wrapper", e4.dataset.testid = "tf-v1-sidetab-wrapper", e4;
            }(), m = function() {
              var e4 = document.createElement("div");
              e4.className = "tf-v1-spinner";
              var t4 = document.createElement("div");
              return t4.className = "tf-v1-sidetab-button-icon", t4.dataset.testid = "spinner-icon", t4.append(e4), t4;
            }(), h = function(e4) {
              var t4 = r.getTextColor(e4), n3 = document.createElement("button");
              return n3.className = "tf-v1-sidetab-button", n3.style.backgroundColor = e4, n3.style.color = t4, n3;
            }(s2.buttonColor || i.buttonColor), b = function(e4) {
              var t4 = document.createElement("span");
              return t4.className = "tf-v1-sidetab-button-text", t4.innerHTML = e4, t4;
            }(s2.buttonText || i.buttonText), y = function(e4, t4) {
              var n3 = r.getTextColor(t4), o2 = document.createElement("div");
              o2.className = "tf-v1-sidetab-button-icon";
              var i2 = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M21 0H0V9L10.5743 24V16.5H21C22.6567 16.5 24 15.1567 24 13.5V3C24 1.34325 22.6567 0 21 0ZM7.5 9.75C6.672 9.75 6 9.07875 6 8.25C6 7.42125 6.672 6.75 7.5 6.75C8.328 6.75 9 7.42125 9 8.25C9 9.07875 8.328 9.75 7.5 9.75ZM12.75 9.75C11.922 9.75 11.25 9.07875 11.25 8.25C11.25 7.42125 11.922 6.75 12.75 6.75C13.578 6.75 14.25 7.42125 14.25 8.25C14.25 9.07875 13.578 9.75 12.75 9.75ZM18 9.75C17.172 9.75 16.5 9.07875 16.5 8.25C16.5 7.42125 17.172 6.75 18 6.75C18.828 6.75 19.5 7.42125 19.5 8.25C19.5 9.07875 18.828 9.75 18 9.75Z" fill="' + n3 + '"></path>\n  </svg>', a2 = null == e4 ? void 0 : e4.startsWith("http");
              return o2.innerHTML = a2 ? "<img alt='popover trigger icon button' src='" + e4 + "'/>" : null != e4 ? e4 : i2, o2.dataset.testid = "default-icon", o2;
            }(s2.customIcon, s2.buttonColor || i.buttonColor), g = a(), w = a("a", "tf-v1-sidetab-close");
            (s2.container || document.body).append(p), v.append(d), p.append(h), p.append(w), h.append(y), h.append(b), setTimeout(function() {
              p.classList.add("ready");
            }, 250), d.onload = function() {
              p.classList.add("open"), u(m, g), r.addCustomKeyboardListener(E);
            };
            var O = r.makeAutoResize(p), _ = function() {
              r.isOpen(v) || (O(), window.addEventListener("resize", O), r.isInPage(v) ? (v.style.display = "flex", p.classList.add("open"), u(y, g)) : (p.append(v), u(y, m)));
            }, E = function() {
              var e4;
              r.isOpen(v) && (null === (e4 = s2.onClose) || void 0 === e4 || e4.call(s2), p.classList.remove("open"), setTimeout(function() {
                s2.keepSession ? v.style.display = "none" : r.unmountElement(v), u(g, y);
              }, 250));
            };
            r.setAutoClose(l, s2.autoClose, E);
            var P = function() {
              r.isOpen(v) ? E() : _();
            };
            return h.onclick = P, w.onclick = E, s2.open && !r.isOpen(v) && (n2 = r.handleCustomOpen(_, s2.open, s2.openValue)), { open: _, close: E, toggle: P, refresh: f, unmount: function() {
              r.unmountElement(p), window.removeEventListener("resize", O), s2.open && (null == n2 ? void 0 : n2.remove) && n2.remove();
            } };
          };
        }, 434: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(382), t2), r(n(668), t2);
        }, 668: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 603: function(e2, t2, n) {
          var o = this && this.__rest || function(e3, t3) {
            var n2 = {};
            for (var o2 in e3)
              Object.prototype.hasOwnProperty.call(e3, o2) && t3.indexOf(o2) < 0 && (n2[o2] = e3[o2]);
            if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
              var r2 = 0;
              for (o2 = Object.getOwnPropertySymbols(e3); r2 < o2.length; r2++)
                t3.indexOf(o2[r2]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, o2[r2]) && (n2[o2[r2]] = e3[o2[r2]]);
            }
            return n2;
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createSlider = void 0;
          var r = n(747), i = n(27);
          t2.createSlider = function(e3, t3) {
            if (void 0 === t3 && (t3 = {}), !r.hasDom())
              return { open: function() {
              }, close: function() {
              }, toggle: function() {
              }, refresh: function() {
              }, unmount: function() {
              } };
            var n2, a = t3.position, u = void 0 === a ? i.SLIDER_POSITION : a, s2 = t3.width, c = void 0 === s2 ? i.SLIDER_WIDTH : s2, d = t3.onClose, l = o(t3, ["position", "width", "onClose"]), f = r.createIframe(e3, "slider", l), p = f.iframe, v = f.embedId, m = f.refresh, h = document.body.style.overflow, b = function(e4) {
              var t4 = document.createElement("div");
              return t4.className = "tf-v1-slider " + e4, t4.dataset.testid = "tf-v1-slider", t4.style.opacity = "0", t4;
            }(u), y = function() {
              var e4 = document.createElement("div");
              return e4.className = "tf-v1-spinner", e4;
            }(), g = function(e4, t4) {
              var n3 = document.createElement("div");
              return n3.className = "tf-v1-iframe-wrapper", n3.style[e4] = "-100%", r.setElementSize(n3, { width: t4 });
            }(u, c);
            g.append(p), b.append(y), b.append(g);
            var w = l.container || document.body;
            p.onload = function() {
              g.style[u] = "0", setTimeout(function() {
                y.style.display = "none";
              }, 500), r.addCustomKeyboardListener(E);
            };
            var O = r.makeAutoResize(b), _ = function() {
              r.isOpen(b) || (O(), window.addEventListener("resize", O), r.isInPage(b) ? (b.style.display = "flex", setTimeout(function() {
                g.style[u] = "0";
              })) : (w.append(b), y.style.display = "block"), document.body.style.overflow = "hidden", setTimeout(function() {
                b.style.opacity = "1";
              }));
            }, E = function() {
              r.isOpen(b) && (null == d || d(), b.style.opacity = "0", g.style[u] = "-100%", document.body.style.overflow = h, setTimeout(function() {
                l.keepSession ? b.style.display = "none" : P();
              }, 500));
            };
            r.setAutoClose(v, l.autoClose, E), g.append(function(e4) {
              var t4 = document.createElement("a");
              return t4.className = "tf-v1-close tf-v1-close-icon", t4.innerHTML = "&times;", t4.onclick = e4, t4;
            }(E)), l.open && !r.isOpen(b) && (n2 = r.handleCustomOpen(_, l.open, l.openValue));
            var P = function() {
              r.unmountElement(b), window.removeEventListener("resize", O), l.open && (null == n2 ? void 0 : n2.remove) && n2.remove();
            };
            return { open: _, close: E, toggle: function() {
              r.isOpen(b) ? E() : _();
            }, refresh: m, unmount: P };
          };
        }, 331: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(603), t2), r(n(162), t2);
        }, 162: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 718: function(e2, t2, n) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createWidget = void 0;
          var o = n(747), r = n(554), i = n(313);
          t2.createWidget = function(e3, t3) {
            if (!o.hasDom())
              return { refresh: function() {
              }, unmount: function() {
              } };
            var n2 = t3;
            t3.inlineOnMobile || !t3.forceTouch && !o.isFullscreen() || (n2.enableFullscreen = true, n2.forceTouch = true);
            var a = o.createIframe(e3, "widget", n2), u = a.embedId, s2 = a.iframe, c = a.refresh, d = i.buildWidget(s2, t3.width, t3.height);
            if (n2.autoResize) {
              var l = "string" == typeof n2.autoResize ? n2.autoResize.split(",").map(function(e4) {
                return parseInt(e4);
              }) : [], f = l[0], p = l[1];
              window.addEventListener("message", r.getFormHeightChangedHandler(u, function(e4) {
                var n3 = Math.max(e4.height + 20, f || 0);
                p && (n3 = Math.min(n3, p)), t3.container.style.height = n3 + "px";
              }));
            }
            var v, m = function() {
              return t3.container.append(d);
            };
            if (t3.container.innerHTML = "", t3.lazy ? o.lazyInitialize(t3.container, m) : m(), n2.enableFullscreen) {
              var h = "", b = t3.container, y = o.makeAutoResize(b), g = b.style.height;
              window.addEventListener("message", r.getWelcomeScreenHiddenHandler(u, function() {
                b.classList.add("tf-v1-widget-fullscreen"), void 0 !== t3.opacity && (b.style.backgroundColor = h), y(), window.addEventListener("resize", y);
              })), window.addEventListener("message", r.getFormThemeHandler(u, function(e4) {
                var t4;
                h = o.changeColorOpacity(null === (t4 = null == e4 ? void 0 : e4.theme) || void 0 === t4 ? void 0 : t4.backgroundColor);
              }));
              var w = ((v = document.createElement("a")).className = "tf-v1-widget-close tf-v1-close-icon", v.innerHTML = "&times;", v);
              w.onclick = function() {
                var e4;
                if (window.removeEventListener("resize", y), b.style.height = g, null === (e4 = t3.onClose) || void 0 === e4 || e4.call(t3), b.classList.remove("tf-v1-widget-fullscreen"), b.style.backgroundColor = "", t3.keepSession) {
                  var n3 = document.createElement("div");
                  n3.className = "tf-v1-widget-iframe-overlay", n3.onclick = function() {
                    b.classList.add("tf-v1-widget-fullscreen"), o.unmountElement(n3);
                  }, d.append(n3);
                } else
                  t3.container.innerHTML = "", m(), b.append(w);
              }, b.append(w);
            }
            return { refresh: c, unmount: function() {
              return o.unmountElement(d);
            } };
          };
        }, 419: function(e2, t2, n) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.buildWidget = void 0;
          var o = n(747);
          t2.buildWidget = function(e3, t3, n2) {
            var r = document.createElement("div");
            return r.className = "tf-v1-widget", r.dataset.testid = "tf-v1-widget", r.append(e3), o.setElementSize(r, { width: t3, height: n2 });
          };
        }, 313: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(419), t2);
        }, 321: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(718), t2), r(n(58), t2);
        }, 58: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 920: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(797), t2), r(n(970), t2), r(n(331), t2), r(n(321), t2), r(n(434), t2);
        }, 626: function(e2, t2, n) {
          var o = this && this.__assign || function() {
            return (o = Object.assign || function(e3) {
              for (var t3, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
                for (var r2 in t3 = arguments[n2])
                  Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
              return e3;
            }).apply(this, arguments);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.buildIframeSrc = void 0;
          var r = n(27), i = n(527), a = n(346), u = n(698), s2 = n(863), c = { widget: "embed-widget", popup: "popup-blank", slider: "popup-drawer", popover: "popup-popover", "side-tab": "popup-side-panel" };
          t2.buildIframeSrc = function(e3) {
            var t3 = e3.formId, n2 = e3.type, d = e3.embedId, l = e3.options, f = function(e4, t4, n3) {
              var r2 = n3.transitiveSearchParams, i2 = n3.source, a2 = n3.medium, s3 = n3.mediumVersion, d2 = n3.hideFooter, l2 = n3.hideHeaders, f2 = n3.opacity, p2 = n3.disableTracking, v2 = n3.enableSandbox, m2 = n3.disableAutoFocus, h2 = n3.shareGaInstance, b = n3.forceTouch, y = n3.enableFullscreen, g = n3.tracking, w = n3.redirectTarget, O = u.getTransitiveSearchParams(r2);
              return o(o(o({}, { "typeform-embed-id": t4, "typeform-embed": c[e4], "typeform-source": i2, "typeform-medium": a2, "typeform-medium-version": s3, "embed-hide-footer": d2 ? "true" : void 0, "embed-hide-headers": l2 ? "true" : void 0, "embed-opacity": f2, "disable-tracking": p2 || v2 ? "true" : void 0, "disable-auto-focus": m2 ? "true" : void 0, "__dangerous-disable-submissions": v2 ? "true" : void 0, "share-ga-instance": h2 ? "true" : void 0, "force-touch": b ? "true" : void 0, "add-placeholder-ws": "widget" === e4 && y ? "true" : void 0, "typeform-embed-redirect-target": w }), O), g);
            }(n2, d, function(e4) {
              return o(o({}, { source: null === (t4 = null === window || void 0 === window ? void 0 : window.location) || void 0 === t4 ? void 0 : t4.hostname.replace(/^www\./, ""), medium: "embed-sdk", mediumVersion: "next" }), i.removeUndefinedKeys(e4));
              var t4;
            }(l)), p = function(e4, t4) {
              void 0 === t4 && (t4 = false);
              var n3 = t4 ? "c" : "to";
              return new URL(e4.startsWith("http://") || e4.startsWith("https://") ? e4 : r.FORM_BASE_URL + "/" + n3 + "/" + e4);
            }(t3, l.chat);
            if (Object.entries(f).filter(function(e4) {
              var t4 = e4[1];
              return a.isDefined(t4);
            }).forEach(function(e4) {
              var t4 = e4[0], n3 = e4[1];
              p.searchParams.set(t4, n3);
            }), l.hubspot) {
              var v = s2.getHubspotHiddenFields();
              l.hidden = o(o({}, l.hidden), v);
            }
            if (l.hidden) {
              var m = new URL(r.FORM_BASE_URL);
              Object.entries(l.hidden).filter(function(e4) {
                var t4 = e4[1];
                return a.isDefined(t4);
              }).forEach(function(e4) {
                var t4 = e4[0], n3 = e4[1];
                m.searchParams.set(t4, n3);
              });
              var h = m.searchParams.toString();
              h && (p.hash = h);
            }
            return p.href;
          };
        }, 391: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.changeColorOpacity = void 0, t2.changeColorOpacity = function(e3, t3) {
            return void 0 === e3 && (e3 = ""), void 0 === t3 && (t3 = 255), e3.startsWith("rgba(") ? null == e3 ? void 0 : e3.replace(/, [\d.]+\)$/, ", " + t3 + ")") : e3;
          };
        }, 972: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.handleCustomOpen = void 0;
          var n = { remove: function() {
          } };
          t2.handleCustomOpen = function(e3, t3, o) {
            switch (t3) {
              case "load":
                return e3(), n;
              case "exit":
                return o ? function(e4, t4) {
                  var n2 = 0, o2 = function(r) {
                    r.clientY < e4 && r.clientY < n2 ? (document.removeEventListener("mousemove", o2, true), t4()) : n2 = r.clientY;
                  };
                  return document.addEventListener("mousemove", o2, true), { remove: function() {
                    return document.removeEventListener("mousemove", o2, true);
                  } };
                }(o, e3) : n;
              case "time":
                return setTimeout(function() {
                  e3();
                }, o), n;
              case "scroll":
                return o ? function(e4, t4) {
                  function n2() {
                    var o2 = window.pageYOffset || document.documentElement.scrollTop, r = document.documentElement.clientTop || 0, i = document.documentElement.scrollHeight, a = o2 - r, u = a / i * 100, s2 = a + window.innerHeight >= i;
                    (u >= e4 || s2) && (t4(), document.removeEventListener("scroll", n2));
                  }
                  return document.addEventListener("scroll", n2), { remove: function() {
                    return document.removeEventListener("scroll", n2);
                  } };
                }(o, e3) : n;
              default:
                return n;
            }
          };
        }, 553: function(e2, t2, n) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createIframe = void 0;
          var o = n(626), r = n(747), i = n(866), a = n(554), u = n(256), s2 = n(144), c = n(511);
          t2.createIframe = function(e3, t3, n2) {
            var d = i.generateEmbedId(), l = n2.iframeProps, f = void 0 === l ? {} : l, p = n2.onReady, v = n2.onQuestionChanged, m = n2.onHeightChanged, h = n2.onSubmit, b = n2.onEndingButtonClick, y = n2.shareGaInstance, g = o.buildIframeSrc({ formId: e3, embedId: d, type: t3, options: n2 }), w = document.createElement("iframe");
            return w.src = g, w.dataset.testid = "iframe", w.style.border = "0px", w.allow = "microphone; camera", Object.keys(f).forEach(function(e4) {
              w.setAttribute(e4, f[e4]);
            }), w.addEventListener("load", u.triggerIframeRedraw, { once: true }), window.addEventListener("message", a.getFormReadyHandler(d, p)), window.addEventListener("message", a.getFormQuestionChangedHandler(d, v)), window.addEventListener("message", a.getFormHeightChangedHandler(d, m)), window.addEventListener("message", a.getFormSubmitHandler(d, h)), window.addEventListener("message", a.getFormThemeHandler(d, function(e4) {
              var t4;
              if (null == e4 ? void 0 : e4.theme) {
                var n3 = document.querySelector(".tf-v1-close-icon");
                n3 && (n3.style.color = null === (t4 = e4.theme) || void 0 === t4 ? void 0 : t4.color);
              }
            })), window.addEventListener("message", a.getThankYouScreenButtonClickHandler(d, b)), "widget" !== t3 && window.addEventListener("message", s2.dispatchCustomKeyEventFromIframe), y && window.addEventListener("message", a.getFormReadyHandler(d, function() {
              r.setupGaInstance(w, d, y);
            })), { iframe: w, embedId: d, refresh: function() {
              return c.refreshIframe(w);
            } };
          };
        }, 866: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.generateEmbedId = void 0, t2.generateEmbedId = function() {
            var e3 = Math.random();
            return String(e3).split(".")[1];
          };
        }, 554: function(e2, t2) {
          var n = this && this.__rest || function(e3, t3) {
            var n2 = {};
            for (var o2 in e3)
              Object.prototype.hasOwnProperty.call(e3, o2) && t3.indexOf(o2) < 0 && (n2[o2] = e3[o2]);
            if (null != e3 && "function" == typeof Object.getOwnPropertySymbols) {
              var r = 0;
              for (o2 = Object.getOwnPropertySymbols(e3); r < o2.length; r++)
                t3.indexOf(o2[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, o2[r]) && (n2[o2[r]] = e3[o2[r]]);
            }
            return n2;
          };
          function o(e3, t3, o2) {
            return function(r) {
              var i = r.data, a = i.type, u = i.embedId, s2 = n(i, ["type", "embedId"]);
              a === e3 && u === t3 && (null == o2 || o2(s2));
            };
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getThankYouScreenButtonClickHandler = t2.getFormThemeHandler = t2.getWelcomeScreenHiddenHandler = t2.getFormSubmitHandler = t2.getFormHeightChangedHandler = t2.getFormQuestionChangedHandler = t2.getFormReadyHandler = void 0, t2.getFormReadyHandler = function(e3, t3) {
            return o("form-ready", e3, t3);
          }, t2.getFormQuestionChangedHandler = function(e3, t3) {
            return o("form-screen-changed", e3, t3);
          }, t2.getFormHeightChangedHandler = function(e3, t3) {
            return o("form-height-changed", e3, t3);
          }, t2.getFormSubmitHandler = function(e3, t3) {
            return o("form-submit", e3, t3);
          }, t2.getWelcomeScreenHiddenHandler = function(e3, t3) {
            return o("welcome-screen-hidden", e3, t3);
          }, t2.getFormThemeHandler = function(e3, t3) {
            return o("form-theme", e3, t3);
          }, t2.getThankYouScreenButtonClickHandler = function(e3, t3) {
            return o("thank-you-screen-button-click", e3, t3);
          };
        }, 339: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(553), t2), r(n(144), t2);
        }, 511: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.refreshIframe = void 0, t2.refreshIframe = function(e3) {
            if (e3) {
              var t3 = e3.src;
              if (t3.includes("&refresh")) {
                var n = t3.split("&refresh#");
                e3.src = n.join("#");
              } else
                (n = t3.split("#"))[0] = n[0] + "&refresh", e3.src = n.join("#");
            }
          };
        }, 144: function(e2, t2) {
          var n = this && this.__awaiter || function(e3, t3, n2, o2) {
            return new (n2 || (n2 = Promise))(function(r2, i2) {
              function a(e4) {
                try {
                  s2(o2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function u(e4) {
                try {
                  s2(o2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function s2(e4) {
                var t4;
                e4.done ? r2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2(function(e5) {
                  e5(t4);
                })).then(a, u);
              }
              s2((o2 = o2.apply(e3, t3 || [])).next());
            });
          }, o = this && this.__generator || function(e3, t3) {
            var n2, o2, r2, i2, a = { label: 0, sent: function() {
              if (1 & r2[0])
                throw r2[1];
              return r2[1];
            }, trys: [], ops: [] };
            return i2 = { next: u(0), throw: u(1), return: u(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function u(i3) {
              return function(u2) {
                return function(i4) {
                  if (n2)
                    throw new TypeError("Generator is already executing.");
                  for (; a; )
                    try {
                      if (n2 = 1, o2 && (r2 = 2 & i4[0] ? o2.return : i4[0] ? o2.throw || ((r2 = o2.return) && r2.call(o2), 0) : o2.next) && !(r2 = r2.call(o2, i4[1])).done)
                        return r2;
                      switch (o2 = 0, r2 && (i4 = [2 & i4[0], r2.value]), i4[0]) {
                        case 0:
                        case 1:
                          r2 = i4;
                          break;
                        case 4:
                          return a.label++, { value: i4[1], done: false };
                        case 5:
                          a.label++, o2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = a.ops.pop(), a.trys.pop();
                          continue;
                        default:
                          if (!((r2 = (r2 = a.trys).length > 0 && r2[r2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            a = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!r2 || i4[1] > r2[0] && i4[1] < r2[3])) {
                            a.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && a.label < r2[1]) {
                            a.label = r2[1], r2 = i4;
                            break;
                          }
                          if (r2 && a.label < r2[2]) {
                            a.label = r2[2], a.ops.push(i4);
                            break;
                          }
                          r2[2] && a.ops.pop(), a.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, a);
                    } catch (e4) {
                      i4 = [6, e4], o2 = 0;
                    } finally {
                      n2 = r2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, u2]);
              };
            }
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.dispatchCustomKeyEventFromIframe = t2.removeCustomKeyboardListener = t2.addCustomKeyboardListener = void 0;
          var r = "Escape", i = function(e3, i2) {
            return n(void 0, void 0, void 0, function() {
              return o(this, function(n2) {
                return e3.code === r && "function" == typeof i2 && (i2(), t2.removeCustomKeyboardListener()), [2];
              });
            });
          };
          t2.addCustomKeyboardListener = function(e3) {
            return window.document.addEventListener("keydown", function(t3) {
              return i(t3, e3);
            });
          }, t2.removeCustomKeyboardListener = function() {
            return window.document.removeEventListener("keydown", i);
          }, t2.dispatchCustomKeyEventFromIframe = function(e3) {
            "form-close" === e3.data.type && window.document.dispatchEvent(new KeyboardEvent("keydown", { code: r }));
          };
        }, 256: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.triggerIframeRedraw = void 0, t2.triggerIframeRedraw = function() {
            this.style.transform = "translateZ(0)";
          };
        }, 939: function(e2, t2, n) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getTextColor = void 0;
          var o = n(938);
          t2.getTextColor = function(e3) {
            if (!e3)
              return "#FFFFFF";
            var t3 = e3.startsWith("#") ? o.hexRgb(e3) : function(e4) {
              var t4 = { red: 0, green: 0, blue: 0 }, n3 = e4.match(/\d+/g);
              return n3 && (t4.red = parseInt(n3[0], 10), t4.green = parseInt(n3[0], 10), t4.blue = parseInt(n3[0], 10)), t4;
            }(e3), n2 = t3.red, r = t3.green, i = t3.blue;
            return Math.round((299 * n2 + 587 * r + 114 * i) / 1e3) > 125 ? "#000000" : "#FFFFFF";
          };
        }, 698: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getTransitiveSearchParams = void 0, t2.getTransitiveSearchParams = function(e3) {
            var t3 = new URL(window.location.href), n = {};
            return e3 && e3.length > 0 && e3.forEach(function(e4) {
              t3.searchParams.has(e4) && (n[e4] = t3.searchParams.get(e4));
            }), n;
          };
        }, 252: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.hasDom = void 0, t2.hasDom = function() {
            return "undefined" != typeof document && "undefined" != typeof window;
          };
        }, 938: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.hexRgb = void 0;
          var n = new RegExp("[^#a-f\\d]", "gi"), o = new RegExp("^#?[a-f\\d]{3}[a-f\\d]?$|^#?[a-f\\d]{6}([a-f\\d]{2})?$", "i");
          t2.hexRgb = function(e3) {
            if ("string" != typeof e3 || n.test(e3) || !o.test(e3))
              throw new TypeError("Expected a valid hex string");
            8 === (e3 = e3.replace(/^#/, "")).length && (e3 = e3.slice(0, 6)), 4 === e3.length && (e3 = e3.slice(0, 3)), 3 === e3.length && (e3 = e3[0] + e3[0] + e3[1] + e3[1] + e3[2] + e3[2]);
            var t3 = Number.parseInt(e3, 16);
            return { red: t3 >> 16, green: t3 >> 8 & 255, blue: 255 & t3 };
          };
        }, 863: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.getHubspotHiddenFields = t2.getHubspotCookieValue = void 0, t2.getHubspotCookieValue = function() {
            var e3 = document.cookie.match(new RegExp("(^| )hubspotutk=([^;]+)"));
            return e3 && e3[2] || void 0;
          }, t2.getHubspotHiddenFields = function() {
            return { hubspot_page_name: document.title, hubspot_page_url: window.location.href, hubspot_utk: t2.getHubspotCookieValue() };
          };
        }, 71: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.includeCss = void 0, t2.includeCss = function(e3) {
            var t3 = function(e4) {
              return "https://embed.typeform.com/next/css/" + e4;
            }(e3);
            if (!document.querySelector('link[href="' + t3 + '"]')) {
              var n = document.createElement("link");
              n.rel = "stylesheet", n.href = t3, document.head.append(n);
            }
          };
        }, 747: function(e2, t2, n) {
          var o = this && this.__createBinding || (Object.create ? function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), Object.defineProperty(e3, o2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, o2) {
            void 0 === o2 && (o2 = n2), e3[o2] = t3[n2];
          }), r = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || o(t3, e3, n2);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), r(n(626), t2), r(n(339), t2), r(n(252), t2), r(n(71), t2), r(n(346), t2), r(n(377), t2), r(n(563), t2), r(n(527), t2), r(n(533), t2), r(n(451), t2), r(n(972), t2), r(n(748), t2), r(n(392), t2), r(n(939), t2), r(n(917), t2), r(n(987), t2), r(n(318), t2), r(n(391), t2);
        }, 346: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.isDefined = void 0, t2.isDefined = function(e3) {
            return null != e3;
          };
        }, 987: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.isVisible = t2.isInPage = t2.isOpen = void 0, t2.isOpen = function(e3) {
            return t2.isInPage(e3) && t2.isVisible(e3);
          }, t2.isInPage = function(e3) {
            return !!e3.parentNode;
          }, t2.isVisible = function(e3) {
            return "none" !== e3.style.display;
          };
        }, 917: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.lazyInitialize = void 0, t2.lazyInitialize = function(e3, t3) {
            var n = new IntersectionObserver(function(e4) {
              e4.forEach(function(e5) {
                e5.isIntersecting && (t3(), n.unobserve(e5.target));
              });
            });
            n.observe(e3);
          };
        }, 377: function(e2, t2) {
          var n = this && this.__assign || function() {
            return (n = Object.assign || function(e3) {
              for (var t3, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
                for (var r2 in t3 = arguments[n2])
                  Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
              return e3;
            }).apply(this, arguments);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.loadOptionsFromAttributes = t2.transformAttributeValue = t2.camelCaseToKebabCase = void 0, t2.camelCaseToKebabCase = function(e3) {
            return e3.split("").map(function(e4, t3) {
              return e4.toUpperCase() === e4 ? (0 !== t3 ? "-" : "") + e4.toLowerCase() : e4;
            }).join("");
          };
          var o = function(e3) {
            return e3 || void 0;
          }, r = function(e3) {
            return "" === e3 || "yes" === e3 || "true" === e3;
          }, i = function(e3) {
            var t3 = e3 ? parseInt(e3, 10) : NaN;
            return isNaN(t3) ? void 0 : t3;
          }, a = "%ESCAPED_COMMA%";
          t2.transformAttributeValue = function(e3, t3) {
            var u, s2;
            switch (t3) {
              case "string":
                return o(e3);
              case "boolean":
                return r(e3);
              case "integer":
                return i(e3);
              case "function":
                return function(e4) {
                  var t4 = e4 && e4 in window ? window[e4] : void 0;
                  return "function" == typeof t4 ? t4 : void 0;
                }(e3);
              case "array":
                return function(e4) {
                  if (e4)
                    return e4.replace(/\s/g, "").replace(/\\,/g, a).split(",").filter(function(e5) {
                      return !!e5;
                    }).map(function(e5) {
                      return e5.replace(a, ",");
                    });
                }(e3);
              case "record":
                return function(e4) {
                  if (e4)
                    return e4.replace(/\\,/g, a).split(",").filter(function(e5) {
                      return !!e5;
                    }).map(function(e5) {
                      return e5.replace(a, ",");
                    }).reduce(function(e5, t4) {
                      var o2, r2 = t4.match(/^([^=]+)=(.*)$/);
                      if (r2) {
                        var i2 = r2[1], a2 = r2[2];
                        return n(n({}, e5), ((o2 = {})[i2.trim()] = a2, o2));
                      }
                      return e5;
                    }, {});
                }(e3);
              case "integerOrBoolean":
                return null !== (u = i(e3)) && void 0 !== u ? u : r(e3);
              case "stringOrBoolean":
                return null !== (s2 = o(e3)) && void 0 !== s2 ? s2 : r(e3);
              default:
                throw new Error("Invalid attribute transformation " + t3);
            }
          }, t2.loadOptionsFromAttributes = function(e3, o2) {
            return Object.keys(o2).reduce(function(r2, i2) {
              var a2;
              return n(n({}, r2), ((a2 = {})[i2] = t2.transformAttributeValue(e3.getAttribute("data-tf-" + t2.camelCaseToKebabCase(i2)), o2[i2]), a2));
            }, {});
          };
        }, 318: function(e2, t2, n) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.makeAutoResize = void 0;
          var o = n(563);
          t2.makeAutoResize = function(e3) {
            return function() {
              e3 && o.isMobile() && e3.style.setProperty("height", window.innerHeight + "px", "important");
            };
          };
        }, 563: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.isFullscreen = t2.isMobile = t2.isBigScreen = void 0, t2.isBigScreen = function() {
            return window.screen.width >= 1024 && window.screen.height >= 768;
          }, t2.isMobile = function() {
            return /mobile|tablet|android/i.test(navigator.userAgent.toLowerCase());
          }, t2.isFullscreen = function() {
            return t2.isMobile() && !t2.isBigScreen();
          };
        }, 527: function(e2, t2, n) {
          var o = this && this.__assign || function() {
            return (o = Object.assign || function(e3) {
              for (var t3, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
                for (var r2 in t3 = arguments[n2])
                  Object.prototype.hasOwnProperty.call(t3, r2) && (e3[r2] = t3[r2]);
              return e3;
            }).apply(this, arguments);
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.removeUndefinedKeys = void 0;
          var r = n(346);
          t2.removeUndefinedKeys = function(e3) {
            return Object.entries(e3).filter(function(e4) {
              var t3 = e4[1];
              return r.isDefined(t3);
            }).reduce(function(e4, t3) {
              var n2, r2 = t3[0], i = t3[1];
              return o(o({}, e4), ((n2 = {})[r2] = i, n2));
            }, {});
          };
        }, 748: function(e2, t2, n) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.setAutoClose = void 0;
          var o = n(554);
          t2.setAutoClose = function(e3, t3, n2) {
            if (t3 && n2) {
              var r = "number" == typeof t3 ? t3 : 0;
              window.addEventListener("message", o.getFormSubmitHandler(e3, function() {
                return setTimeout(n2, r);
              }));
            }
          };
        }, 533: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.setElementSize = void 0, t2.setElementSize = function(e3, t3) {
            var n = t3.width, o = t3.height;
            return n && (e3.style.width = n + "px"), o && (e3.style.height = o + "px"), e3;
          };
        }, 392: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.setupGaInstance = t2.sendGaIdMessage = void 0, t2.sendGaIdMessage = function(e3, t3, n2) {
            var o = { embedId: e3, gaClientId: t3 };
            setTimeout(function() {
              n2 && n2.contentWindow && n2.contentWindow.postMessage({ type: "ga-client-id", data: o }, "*");
            }, 0);
          };
          var n = function(e3) {
            console.error(e3);
          };
          t2.setupGaInstance = function(e3, o, r) {
            try {
              var i = window[window.GoogleAnalyticsObject], a = "string" == typeof r ? r : void 0, u = function(e4, t3) {
                return t3 ? e4.find(function(e5) {
                  return e5.get("trackingId") === t3;
                }) : e4[0];
              }(i.getAll(), a);
              u ? t2.sendGaIdMessage(o, u.get("clientId"), e3) : n("Whoops! You enabled the shareGaInstance feature in your typeform embed but the tracker with ID " + a + " was not found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page and use correct tracker ID. ");
            } catch (e4) {
              n("Whoops! You enabled the shareGaInstance feature in your typeform embed but the Google Analytics object has not been found. Make sure to include Google Analytics Javascript code before the Typeform Embed Javascript code in your page. "), n(e4);
            }
          };
        }, 451: function(e2, t2) {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.unmountElement = void 0, t2.unmountElement = function(e3) {
            var t3;
            null === (t3 = e3.parentNode) || void 0 === t3 || t3.removeChild(e3);
          };
        } }, t = {};
        return function n(o) {
          if (t[o])
            return t[o].exports;
          var r = t[o] = { exports: {} };
          return e[o].call(r.exports, r, r.exports, n), r.exports;
        }(920);
      }();
    });
  }
});

// .svelte-kit/output/server/entries/pages/index.svelte.js
var index_svelte_exports = {};
__export(index_svelte_exports, {
  default: () => Routes
});
var import_embed, Routes;
var init_index_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/index.svelte.js"() {
    init_index_3e01a4ca();
    import_embed = __toESM(require_build(), 1);
    Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${$$result.head += `${$$result.title = `<title>Hunters: America&#39;s Greatest Conservationists</title>`, ""}`, ""}
<button class="${"z-40 p-4 fixed top-0 right-0"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-12 w-12"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" class="${"text-orange-600"}" stroke-linejoin="${"round"}" d="${"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}"></path></svg></button>
<div id="${"wfw-wrapper"}" style="${"width: 100%; height: 100%; position: absolute"}"></div>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  file: () => file3,
  imports: () => imports3,
  index: () => index3,
  module: () => index_svelte_exports,
  stylesheets: () => stylesheets3
});
var index3, file3, imports3, stylesheets3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_index_svelte();
    index3 = 2;
    file3 = "_app/immutable/pages/index.svelte-7862ad56.js";
    imports3 = ["_app/immutable/pages/index.svelte-7862ad56.js", "_app/immutable/chunks/index-4bfd8167.js"];
    stylesheets3 = ["_app/immutable/assets/index-90cd769c.css"];
  }
});

// .svelte-kit/output/server/index.js
init_index_3e01a4ca();
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext("__svelte__", stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  {
    stores.page.set(page);
  }
  return `


${components[1] ? `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {
    default: () => {
      return `${components[2] ? `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {
        default: () => {
          return `${validate_component(components[2] || missing_component, "svelte:component").$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
        }
      })}` : `${validate_component(components[1] || missing_component, "svelte:component").$$render($$result, Object.assign(props_1 || {}), {}, {})}`}`;
    }
  })}` : `${validate_component(components[0] || missing_component, "svelte:component").$$render($$result, Object.assign(props_0 || {}), {}, {})}`}

${``}`;
});
function to_headers(object) {
  const headers = new Headers();
  if (object) {
    for (const key2 in object) {
      const value = object[key2];
      if (!value)
        continue;
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          headers.append(key2, value2);
        });
      } else {
        headers.set(key2, value);
      }
    }
  }
  return headers;
}
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === "string") {
    while (i)
      hash2 = hash2 * 33 ^ value.charCodeAt(--i);
  } else {
    while (i)
      hash2 = hash2 * 33 ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
function lowercase_keys(obj) {
  const clone = {};
  for (const key2 in obj) {
    clone[key2.toLowerCase()] = obj[key2];
  }
  return clone;
}
function is_pojo(body) {
  if (typeof body !== "object")
    return false;
  if (body) {
    if (body instanceof Uint8Array)
      return false;
    if (body instanceof ReadableStream)
      return false;
    if (body._readableState && typeof body.pipe === "function") {
      throw new Error("Node streams are no longer supported \u2014 use a ReadableStream instead");
    }
  }
  return true;
}
function serialize_error(error2, get_stack) {
  return JSON.stringify(clone_error(error2, get_stack));
}
function clone_error(error2, get_stack) {
  const {
    name,
    message,
    stack,
    cause,
    ...custom
  } = error2;
  const object = { name, message, stack: get_stack(error2) };
  if (cause)
    object.cause = clone_error(cause, get_stack);
  for (const key2 in custom) {
    object[key2] = custom[key2];
  }
  return object;
}
function check_method_names(mod) {
  ["get", "post", "put", "patch", "del"].forEach((m) => {
    if (m in mod) {
      const replacement = m === "del" ? "DELETE" : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: "__error"
};
function error(body) {
  return new Response(body, {
    status: 500
  });
}
function is_string(s2) {
  return typeof s2 === "string" || s2 instanceof String;
}
var text_types = /* @__PURE__ */ new Set([
  "application/xml",
  "application/json",
  "application/x-www-form-urlencoded",
  "multipart/form-data"
]);
var bodyless_status_codes = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function is_text(content_type) {
  if (!content_type)
    return true;
  const type = content_type.split(";")[0].toLowerCase();
  return type.startsWith("text/") || type.endsWith("+xml") || text_types.has(type);
}
async function render_endpoint(event, mod, options) {
  const { method } = event.request;
  check_method_names(mod);
  let handler2 = mod[method];
  if (!handler2 && method === "HEAD") {
    handler2 = mod.GET;
  }
  if (!handler2) {
    const allowed = [];
    for (const method2 in ["GET", "POST", "PUT", "PATCH", "DELETE"]) {
      if (mod[method2])
        allowed.push(method2);
    }
    if (mod.GET || mod.HEAD)
      allowed.push("HEAD");
    return event.request.headers.get("x-sveltekit-load") ? new Response(void 0, {
      status: 204
    }) : new Response(`${method} method not allowed`, {
      status: 405,
      headers: {
        allow: allowed.join(", ")
      }
    });
  }
  const response = await handler2(event);
  const preface = `Invalid response from route ${event.url.pathname}`;
  if (typeof response !== "object") {
    return error(`${preface}: expected an object, got ${typeof response}`);
  }
  if (response.fallthrough) {
    throw new Error(
      "fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching"
    );
  }
  const { status = 200, body = {} } = response;
  const headers = response.headers instanceof Headers ? new Headers(response.headers) : to_headers(response.headers);
  const type = headers.get("content-type");
  if (!is_text(type) && !(body instanceof Uint8Array || body instanceof ReadableStream || is_string(body))) {
    return error(
      `${preface}: body must be an instance of string, Uint8Array or ReadableStream if content-type is not a supported textual content-type`
    );
  }
  let normalized_body;
  if (is_pojo(body) && (!type || type.startsWith("application/json"))) {
    headers.set("content-type", "application/json; charset=utf-8");
    normalized_body = body instanceof Error ? serialize_error(body, options.get_stack) : JSON.stringify(body);
  } else {
    normalized_body = body;
  }
  if ((typeof normalized_body === "string" || normalized_body instanceof Uint8Array) && !headers.has("etag")) {
    const cache_control = headers.get("cache-control");
    if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
      headers.set("etag", `"${hash(normalized_body)}"`);
    }
  }
  return new Response(
    method !== "HEAD" && !bodyless_status_codes.has(status) ? normalized_body : void 0,
    {
      status,
      headers
    }
  );
}
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\0",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function devalue(value) {
  var counts = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new Error("Cannot stringify a function");
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach(walk);
          break;
        case "Set":
        case "Map":
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (proto !== Object.prototype && proto !== null && Object.getOwnPropertyNames(proto).sort().join("\0") !== objectProtoOwnPropertyNames) {
            throw new Error("Cannot stringify arbitrary non-POJOs");
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error("Cannot stringify POJOs with symbolic keys");
          }
          Object.keys(thing).forEach(function(key2) {
            return walk(thing[key2]);
          });
      }
    }
  }
  walk(value);
  var names = /* @__PURE__ */ new Map();
  Array.from(counts).filter(function(entry) {
    return entry[1] > 1;
  }).sort(function(a, b) {
    return b[1] - a[1];
  }).forEach(function(entry, i) {
    names.set(entry[0], getName(i));
  });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return "Object(" + stringify(thing.valueOf()) + ")";
      case "RegExp":
        return "new RegExp(" + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case "Date":
        return "new Date(" + thing.getTime() + ")";
      case "Array":
        var members = thing.map(function(v, i) {
          return i in thing ? stringify(v) : "";
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return "[" + members.join(",") + tail + "]";
      case "Set":
      case "Map":
        return "new " + type + "([" + Array.from(thing).map(stringify).join(",") + "])";
      default:
        var obj = "{" + Object.keys(thing).map(function(key2) {
          return safeKey(key2) + ":" + stringify(thing[key2]);
        }).join(",") + "}";
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? "Object.assign(Object.create(null)," + obj + ")" : "Object.create(null)";
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function(name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values_1.push("Object(" + stringify(thing.valueOf()) + ")");
          break;
        case "RegExp":
          values_1.push(thing.toString());
          break;
        case "Date":
          values_1.push("new Date(" + thing.getTime() + ")");
          break;
        case "Array":
          values_1.push("Array(" + thing.length + ")");
          thing.forEach(function(v, i) {
            statements_1.push(name + "[" + i + "]=" + stringify(v));
          });
          break;
        case "Set":
          values_1.push("new Set");
          statements_1.push(name + "." + Array.from(thing).map(function(v) {
            return "add(" + stringify(v) + ")";
          }).join("."));
          break;
        case "Map":
          values_1.push("new Map");
          statements_1.push(name + "." + Array.from(thing).map(function(_a) {
            var k = _a[0], v = _a[1];
            return "set(" + stringify(k) + ", " + stringify(v) + ")";
          }).join("."));
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}");
          Object.keys(thing).forEach(function(key2) {
            statements_1.push("" + name + safeProp(key2) + "=" + stringify(thing[key2]));
          });
      }
    });
    statements_1.push("return " + str);
    return "(function(" + params_1.join(",") + "){" + statements_1.join(";") + "}(" + values_1.join(",") + "))";
  } else {
    return str;
  }
}
function getName(num) {
  var name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === "string")
    return stringifyString(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  var str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
}
function safeProp(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? "." + key2 : "[" + escapeUnsafeChars(JSON.stringify(key2)) + "]";
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && (next >= 56320 && next <= 57343)) {
        result += char + str[++i];
      } else {
        result += "\\u" + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
Promise.resolve();
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
function coalesce_to_error(err) {
  return err instanceof Error || err && err.name && err.message ? err : new Error(JSON.stringify(err));
}
var render_json_payload_script_dict = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var render_json_payload_script_regex = new RegExp(
  `[${Object.keys(render_json_payload_script_dict).join("")}]`,
  "g"
);
function render_json_payload_script(attrs, payload) {
  const safe_payload = JSON.stringify(payload).replace(
    render_json_payload_script_regex,
    (match) => render_json_payload_script_dict[match]
  );
  let safe_attrs = "";
  for (const [key2, value] of Object.entries(attrs)) {
    if (value === void 0)
      continue;
    safe_attrs += ` sveltekit:data-${key2}=${escape_html_attr(value)}`;
  }
  return `<script type="application/json"${safe_attrs}>${safe_payload}<\/script>`;
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode$1(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode$1(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l = bytes.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2 | bytes[i] >> 6];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4 | bytes[i - 1] >> 4];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  constructor(use_hashes, directives, nonce, dev) {
    __privateAdd(this, _use_hashes, void 0);
    __privateAdd(this, _script_needs_csp, void 0);
    __privateAdd(this, _style_needs_csp, void 0);
    __privateAdd(this, _directives, void 0);
    __privateAdd(this, _script_src, void 0);
    __privateAdd(this, _style_src, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, dev ? { ...directives } : directives);
    const d = __privateGet(this, _directives);
    if (dev) {
      const effective_style_src2 = d["style-src"] || d["default-src"];
      if (effective_style_src2 && !effective_style_src2.includes("unsafe-inline")) {
        d["style-src"] = [...effective_style_src2, "unsafe-inline"];
      }
    }
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !dev && !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = directives[key2];
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives["report-to"]) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri = ((_b = directives["report-uri"]) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  constructor({ mode, directives, reportOnly }, { prerender, dev }) {
    __publicField(this, "nonce", generate_nonce());
    __publicField(this, "csp_provider");
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base2, path) {
  if (scheme.test(path))
    return path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix2 = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix2}${baseparts.join("/")}`;
}
function is_root_relative(path) {
  return path[0] === "/" && path[1] !== "/";
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2].replace(/%23/g, "#").replace(/%3[Bb]/g, ";").replace(/%2[Cc]/g, ",").replace(/%2[Ff]/g, "/").replace(/%3[Ff]/g, "?").replace(/%3[Aa]/g, ":").replace(/%40/g, "@").replace(/%26/g, "&").replace(/%3[Dd]/g, "=").replace(/%2[Bb]/g, "+").replace(/%24/g, "$");
  }
  return params;
}
var LoadURL = class extends URL {
  get hash() {
    throw new Error(
      "url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component."
    );
  }
};
var PrerenderingURL = class extends URL {
  get search() {
    throw new Error("Cannot access url.search on a page with prerendering enabled");
  }
  get searchParams() {
    throw new Error("Cannot access url.searchParams on a page with prerendering enabled");
  }
};
var updated = {
  ...readable(false),
  check: () => false
};
async function render_response({
  branch,
  options,
  state,
  $session,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  stuff
}) {
  if (state.prerendering) {
    if (options.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { entry } = options.manifest._;
  const stylesheets4 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  const serialized_data = [];
  let shadow_props;
  let rendered;
  let is_private = false;
  let cache;
  const stack = error2 == null ? void 0 : error2.stack;
  if (options.dev && error2) {
    error2.stack = options.get_stack(error2);
  }
  if (resolve_opts.ssr) {
    const leaf = branch.at(-1);
    if (leaf.loaded.status) {
      status = leaf.loaded.status;
    }
    for (const { node, props: props2, loaded, fetched, uses_credentials } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets4.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
      if (fetched && page_config.hydrate)
        serialized_data.push(...fetched);
      if (props2)
        shadow_props = props2;
      cache = loaded == null ? void 0 : loaded.cache;
      is_private = (cache == null ? void 0 : cache.private) ?? uses_credentials;
    }
    const session = writable($session);
    is_private = is_private || ((cache == null ? void 0 : cache.private) ?? (!!$session && Object.keys($session).length > 0));
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session,
        updated
      },
      page: {
        error: error2,
        params: event.params,
        routeId: event.routeId,
        status,
        stuff,
        url: state.prerendering ? new PrerenderingURL(event.url) : event.url
      },
      components: branch.map(({ node }) => node.module.default)
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        }
      });
    };
    print_error("origin", "origin");
    print_error("path", "pathname");
    print_error("query", "searchParams");
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    rendered = options.root.render(props);
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let { head, html: body } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering
  });
  const target = hash(body);
  const init_app = `
		import { set_public_env, start } from ${s(options.prefix + entry.file)};

		set_public_env(${s(options.public_env)});

		start({
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			paths: ${s(options.paths)},
			session: ${try_serialize($session, (error3) => {
    throw new Error(`Failed to serialize session data: ${error3.message}`);
  })},
			route: ${!!page_config.router},
			spa: ${!resolve_opts.ssr},
			trailing_slash: ${s(options.trailing_slash)},
			hydrate: ${resolve_opts.ssr && page_config.hydrate ? `{
				status: ${status},
				error: ${error2 && serialize_error(error2, (e) => e.stack)},
				nodes: [${branch.map(({ node }) => node.index).join(", ")}],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)}
			}` : "null"}
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (options.dev)
      attributes.push(" data-sveltekit");
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets4) {
    const path = options.prefix + dep;
    const attributes = [];
    if (csp.style_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      const preload_atts = ['rel="preload"', 'as="style"'].concat(attributes);
      link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
    }
    attributes.unshift('rel="stylesheet"');
    head += `
	<link href="${path}" ${attributes.join(" ")}>`;
  }
  if (page_config.router || page_config.hydrate) {
    for (const dep of modulepreloads) {
      const path = options.prefix + dep;
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (state.prerendering) {
        head += `
	<link rel="modulepreload" href="${path}">`;
      }
    }
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body += `
		<script ${attributes.join(" ")}>${init_app}<\/script>`;
    body += serialized_data.map(
      ({ url, body: body2, response }) => render_json_payload_script(
        { type: "data", url, body: typeof body2 === "string" ? hash(body2) : void 0 },
        response
      )
    ).join("\n	");
    if (shadow_props) {
      body += render_json_payload_script({ type: "props" }, shadow_props);
    }
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="max-age=${cache.maxage}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  }
  const segments = event.url.pathname.slice(options.paths.base.length).split("/").slice(2);
  const assets2 = options.paths.assets || (segments.length > 0 ? segments.map(() => "..").join("/") : ".");
  const html = await resolve_opts.transformPageChunk({
    html: options.template({ head, body, assets: assets2, nonce: csp.nonce }),
    done: true
  }) || "";
  const headers = new Headers({
    "content-type": "text/html",
    etag: `"${hash(html)}"`
  });
  if (link_header_preloads.size) {
    headers.set("link", Array.from(link_header_preloads).join(", "));
  }
  if (cache) {
    headers.set("cache-control", `${is_private ? "private" : "public"}, max-age=${cache.maxage}`);
  }
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
  }
  if (options.dev && error2) {
    error2.stack = stack;
  }
  return new Response(html, {
    status,
    headers
  });
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail)
      fail(coalesce_to_error(err));
    return null;
  }
}
var parse_1 = parse$1;
var serialize_1 = serialize;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index4 = 0;
  while (index4 < str.length) {
    var eqIdx = str.indexOf("=", index4);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index4);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index4 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index4, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index4 = endIdx + 1;
  }
  return obj;
}
function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false
};
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValue = parts.shift().split("=");
  var name = nameValue.shift();
  var value = nameValue.join("=");
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }
  var cookie = {
    name,
    value
  };
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      cookie.maxAge = parseInt(value2, 10);
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
function parse(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers && input.headers["set-cookie"]) {
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    var sch = input.headers[Object.keys(input.headers).find(function(key2) {
      return key2.toLowerCase() === "set-cookie";
    })];
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      );
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options);
      cookies2[cookie.name] = cookie;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse;
setCookie.exports.parse = parse;
var parseString_1 = setCookie.exports.parseString = parseString;
var splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
function normalize(loaded) {
  if (!loaded) {
    return {};
  }
  if (loaded.fallthrough) {
    throw new Error(
      "fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching"
    );
  }
  if ("maxage" in loaded) {
    throw new Error("maxage should be replaced with cache: { maxage }");
  }
  const has_error_status = loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error(`${status}`)
      };
    }
    const error2 = typeof loaded.error === "string" ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(
          `"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`
        )
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500');
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      throw new Error(
        '"redirect" property returned from load() must be accompanied by a 3xx status code'
      );
    }
    if (typeof loaded.redirect !== "string") {
      throw new Error('"redirect" property returned from load() must be a string');
    }
  }
  if (loaded.dependencies) {
    if (!Array.isArray(loaded.dependencies) || loaded.dependencies.some((dep) => typeof dep !== "string")) {
      throw new Error('"dependencies" property returned from load() must be of type string[]');
    }
  }
  if (loaded.context) {
    throw new Error(
      'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
    );
  }
  return loaded;
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
async function load_node({
  event,
  options,
  state,
  route,
  node,
  $session,
  stuff,
  is_error,
  is_leaf,
  status,
  error: error2
}) {
  const { module } = node;
  let uses_credentials = false;
  const fetched = [];
  const cookies = parse_1(event.request.headers.get("cookie") || "");
  const new_cookies = [];
  let loaded;
  const should_prerender = node.module.prerender ?? options.prerender.default;
  const shadow = is_leaf ? await load_shadow_data(
    route,
    event,
    options,
    should_prerender
  ) : {};
  if (shadow.cookies) {
    shadow.cookies.forEach((header) => {
      new_cookies.push(parseString_1(header));
    });
  }
  if (shadow.error) {
    loaded = {
      error: shadow.error
    };
  } else if (shadow.redirect) {
    loaded = {
      redirect: shadow.redirect
    };
  } else if (module.load) {
    const load_input = {
      url: state.prerendering ? new PrerenderingURL(event.url) : new LoadURL(event.url),
      params: event.params,
      props: shadow.body || {},
      routeId: event.routeId,
      get session() {
        if (node.module.prerender ?? options.prerender.default) {
          throw Error(
            "Attempted to access session from a prerendered page. Session would never be populated."
          );
        }
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let requested;
        if (typeof resource === "string") {
          requested = resource;
        } else {
          requested = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts
          };
        }
        opts.headers = new Headers(opts.headers);
        for (const [key2, value] of event.request.headers) {
          if (key2 !== "authorization" && key2 !== "connection" && key2 !== "cookie" && key2 !== "host" && key2 !== "if-none-match" && !opts.headers.has(key2)) {
            opts.headers.set(key2, value);
          }
        }
        const resolved = resolve(event.url.pathname, requested.split("?")[0]);
        let response;
        let dependency;
        const prefix2 = options.paths.assets || options.paths.base;
        const filename = decodeURIComponent(
          resolved.startsWith(prefix2) ? resolved.slice(prefix2.length) : resolved
        ).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file4 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            response = new Response(options.read(file4), {
              headers: type ? { "content-type": type } : {}
            });
          } else {
            response = await fetch(
              `${event.url.origin}/${file4}`,
              opts
            );
          }
        } else if (is_root_relative(resolved)) {
          if (opts.credentials !== "omit") {
            uses_credentials = true;
            const authorization = event.request.headers.get("authorization");
            const combined_cookies = { ...cookies };
            for (const cookie2 of new_cookies) {
              if (!domain_matches(event.url.hostname, cookie2.domain))
                continue;
              if (!path_matches(resolved, cookie2.path))
                continue;
              combined_cookies[cookie2.name] = cookie2.value;
            }
            const cookie = Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
            if (cookie) {
              opts.headers.set("cookie", cookie);
            }
            if (authorization && !opts.headers.has("authorization")) {
              opts.headers.set("authorization", authorization);
            }
          }
          if (opts.body && typeof opts.body !== "string") {
            throw new Error("Request body must be a string");
          }
          response = await respond(
            new Request(new URL(requested, event.url).href, { ...opts }),
            options,
            {
              ...state,
              initiator: route
            }
          );
          if (state.prerendering) {
            dependency = { response, body: null };
            state.prerendering.dependencies.set(resolved, dependency);
          }
        } else {
          if (resolved.startsWith("//")) {
            requested = event.url.protocol + requested;
          }
          if (`.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) && opts.credentials !== "omit") {
            uses_credentials = true;
            const cookie = event.request.headers.get("cookie");
            if (cookie)
              opts.headers.set("cookie", cookie);
          }
          opts.headers.delete("connection");
          const external_request = new Request(requested, opts);
          response = await options.hooks.externalFetch.call(null, external_request);
        }
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          new_cookies.push(
            ...splitCookiesString_1(set_cookie).map((str) => parseString_1(str))
          );
        }
        const proxy = new Proxy(response, {
          get(response2, key2, _receiver) {
            async function text() {
              const body = await response2.text();
              const headers = {};
              for (const [key3, value] of response2.headers) {
                if (key3 !== "set-cookie" && key3 !== "etag") {
                  headers[key3] = value;
                }
              }
              if (!opts.body || typeof opts.body === "string") {
                const status_number = Number(response2.status);
                if (isNaN(status_number)) {
                  throw new Error(
                    `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
                  );
                }
                fetched.push({
                  url: requested,
                  body: opts.body,
                  response: {
                    status: status_number,
                    statusText: response2.statusText,
                    headers,
                    body
                  }
                });
              }
              if (dependency) {
                dependency.body = body;
              }
              return body;
            }
            if (key2 === "arrayBuffer") {
              return async () => {
                const buffer = await response2.arrayBuffer();
                if (dependency) {
                  dependency.body = new Uint8Array(buffer);
                }
                return buffer;
              };
            }
            if (key2 === "text") {
              return text;
            }
            if (key2 === "json") {
              return async () => {
                return JSON.parse(await text());
              };
            }
            return Reflect.get(response2, key2, response2);
          }
        });
        return proxy;
      },
      stuff: { ...stuff },
      status: (is_error ? status : shadow.status) ?? null,
      error: is_error ? error2 ?? null : null
    };
    if (options.dev) {
      Object.defineProperty(load_input, "page", {
        get: () => {
          throw new Error("`page` in `load` functions has been replaced by `url` and `params`");
        }
      });
    }
    loaded = normalize(await module.load.call(null, load_input));
  } else if (shadow.body) {
    loaded = {
      props: shadow.body
    };
  } else {
    loaded = {};
  }
  loaded.status = loaded.status ?? shadow.status;
  if (shadow.body && state.prerendering) {
    const pathname = `${event.url.pathname.replace(/\/$/, "")}/__data.json`;
    const dependency = {
      response: new Response(void 0),
      body: JSON.stringify(shadow.body)
    };
    state.prerendering.dependencies.set(pathname, dependency);
  }
  return {
    node,
    props: shadow.body,
    loaded,
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers: new_cookies.map((new_cookie) => {
      const { name, value, ...options2 } = new_cookie;
      return serialize_1(name, value, options2);
    }),
    uses_credentials
  };
}
async function load_shadow_data(route, event, options, prerender) {
  if (!route.shadow)
    return {};
  try {
    const mod = await route.shadow();
    check_method_names(mod);
    if (prerender && (mod.POST || mod.PUT || mod.DELETE || mod.PATCH)) {
      throw new Error("Cannot prerender pages that have endpoints with mutative methods");
    }
    const { method } = event.request;
    const is_get = method === "HEAD" || method === "GET";
    const handler2 = method === "HEAD" ? mod.HEAD || mod.GET : mod[method];
    if (!handler2 && !is_get) {
      return {
        status: 405,
        error: new Error(`${method} method not allowed`)
      };
    }
    const data = {
      status: void 0,
      cookies: [],
      body: {}
    };
    if (!is_get) {
      const { status, headers, body } = validate_shadow_output(await handler2(event));
      add_cookies(data.cookies, headers);
      data.status = status;
      if (body instanceof Error) {
        if (status < 400) {
          data.status = 500;
          data.error = new Error("A non-error status code was returned with an error body");
        } else {
          data.error = body;
        }
        return data;
      }
      if (status >= 300 && status < 400) {
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = body;
    }
    const get = method === "HEAD" && mod.HEAD || mod.GET;
    if (get) {
      const { status, headers, body } = validate_shadow_output(await get(event));
      add_cookies(data.cookies, headers);
      if (body instanceof Error) {
        if (status < 400) {
          data.status = 500;
          data.error = new Error("A non-error status code was returned with an error body");
        } else {
          data.status = status;
          data.error = body;
        }
        return data;
      }
      if (status >= 400) {
        data.status = status;
        data.error = new Error("Failed to load data");
        return data;
      }
      if (status >= 300) {
        data.status = status;
        data.redirect = headers instanceof Headers ? headers.get("location") : headers.location;
        return data;
      }
      data.body = { ...body, ...data.body };
    }
    return data;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    options.handle_error(error2, event);
    return {
      status: 500,
      error: error2
    };
  }
}
function add_cookies(target, headers) {
  const cookies = headers["set-cookie"];
  if (cookies) {
    if (Array.isArray(cookies)) {
      target.push(...cookies);
    } else {
      target.push(cookies);
    }
  }
}
function validate_shadow_output(result) {
  if (result.fallthrough) {
    throw new Error(
      "fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching"
    );
  }
  const { status = 200, body = {} } = result;
  let headers = result.headers || {};
  if (headers instanceof Headers) {
    if (headers.has("set-cookie")) {
      throw new Error(
        "Endpoint request handler cannot use Headers interface with Set-Cookie headers"
      );
    }
  } else {
    headers = lowercase_keys(headers);
  }
  if (!is_pojo(body)) {
    throw new Error(
      "Body returned from endpoint request handler must be a plain object or an Error"
    );
  }
  return { status, headers, body };
}
async function respond_with_error({
  event,
  options,
  state,
  $session,
  status,
  error: error2,
  resolve_opts
}) {
  try {
    const branch = [];
    let stuff = {};
    if (resolve_opts.ssr) {
      const default_layout = await options.manifest._.nodes[0]();
      const default_error = await options.manifest._.nodes[1]();
      const layout_loaded = await load_node({
        event,
        options,
        state,
        route: GENERIC_ERROR,
        node: default_layout,
        $session,
        stuff: {},
        is_error: false,
        is_leaf: false
      });
      if (layout_loaded.loaded.error) {
        throw layout_loaded.loaded.error;
      }
      const error_loaded = await load_node({
        event,
        options,
        state,
        route: GENERIC_ERROR,
        node: default_error,
        $session,
        stuff: layout_loaded ? layout_loaded.stuff : {},
        is_error: true,
        is_leaf: false,
        status,
        error: error2
      });
      branch.push(layout_loaded, error_loaded);
      stuff = error_loaded.stuff;
    }
    return await render_response({
      options,
      state,
      $session,
      page_config: {
        hydrate: options.hydrate,
        router: options.router
      },
      stuff,
      status,
      error: error2,
      branch,
      event,
      resolve_opts
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return new Response(error3.stack, {
      status: 500
    });
  }
}
async function respond$1(opts) {
  const { event, options, state, $session, route, resolve_opts } = opts;
  let nodes;
  if (!resolve_opts.ssr) {
    return await render_response({
      ...opts,
      branch: [],
      page_config: {
        hydrate: true,
        router: true
      },
      status: 200,
      error: null,
      event,
      stuff: {}
    });
  }
  try {
    nodes = await Promise.all(
      route.a.map((n) => n == void 0 ? n : options.manifest._.nodes[n]())
    );
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return await respond_with_error({
      event,
      options,
      state,
      $session,
      status: 500,
      error: error3,
      resolve_opts
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options);
  if (state.prerendering) {
    const should_prerender = leaf.prerender ?? options.prerender.default;
    if (!should_prerender) {
      return new Response(void 0, {
        status: 204
      });
    }
  }
  let branch = [];
  let status = 200;
  let error2 = null;
  let set_cookie_headers = [];
  let stuff = {};
  ssr: {
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      let loaded;
      if (node) {
        try {
          loaded = await load_node({
            ...opts,
            node,
            stuff,
            is_error: false,
            is_leaf: i === nodes.length - 1
          });
          set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
          if (loaded.loaded.redirect) {
            return with_cookies(
              new Response(void 0, {
                status: loaded.loaded.status,
                headers: {
                  location: loaded.loaded.redirect
                }
              }),
              set_cookie_headers
            );
          }
          if (loaded.loaded.error) {
            error2 = loaded.loaded.error;
            status = loaded.loaded.status ?? 500;
          }
        } catch (err) {
          const e = coalesce_to_error(err);
          options.handle_error(e, event);
          status = 500;
          error2 = e;
        }
        if (loaded && !error2) {
          branch.push(loaded);
        }
        if (error2) {
          while (i--) {
            if (route.b[i]) {
              const index4 = route.b[i];
              const error_node = await options.manifest._.nodes[index4]();
              let node_loaded;
              let j = i;
              while (!(node_loaded = branch[j])) {
                j -= 1;
              }
              try {
                const error_loaded = await load_node({
                  ...opts,
                  node: error_node,
                  stuff: node_loaded.stuff,
                  is_error: true,
                  is_leaf: false,
                  status,
                  error: error2
                });
                if (error_loaded.loaded.error) {
                  continue;
                }
                page_config = get_page_config(error_node.module, options);
                branch = branch.slice(0, j + 1).concat(error_loaded);
                stuff = { ...node_loaded.stuff, ...error_loaded.stuff };
                break ssr;
              } catch (err) {
                const e = coalesce_to_error(err);
                options.handle_error(e, event);
                continue;
              }
            }
          }
          return with_cookies(
            await respond_with_error({
              event,
              options,
              state,
              $session,
              status,
              error: error2,
              resolve_opts
            }),
            set_cookie_headers
          );
        }
      }
      if (loaded && loaded.loaded.stuff) {
        stuff = {
          ...stuff,
          ...loaded.loaded.stuff
        };
      }
    }
  }
  try {
    return with_cookies(
      await render_response({
        ...opts,
        stuff,
        event,
        page_config,
        status,
        error: error2,
        branch: branch.filter(Boolean)
      }),
      set_cookie_headers
    );
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return with_cookies(
      await respond_with_error({
        ...opts,
        status: 500,
        error: error3
      }),
      set_cookie_headers
    );
  }
}
function get_page_config(leaf, options) {
  if ("ssr" in leaf) {
    throw new Error(
      "`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle"
    );
  }
  return {
    router: "router" in leaf ? !!leaf.router : options.router,
    hydrate: "hydrate" in leaf ? !!leaf.hydrate : options.hydrate
  };
}
function with_cookies(response, set_cookie_headers) {
  if (set_cookie_headers.length) {
    set_cookie_headers.forEach((value) => {
      response.headers.append("set-cookie", value);
    });
  }
  return response;
}
async function render_page(event, route, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404
    });
  }
  if (route.shadow) {
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (type === "application/json") {
      return render_endpoint(event, await route.shadow(), options);
    }
  }
  const $session = await options.hooks.getSession(event);
  return respond$1({
    event,
    options,
    state,
    $session,
    resolve_opts,
    route
  });
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || "";
    if (type) {
      const matcher = matchers[type];
      if (!matcher)
        throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value))
        return;
    }
    params[name] = value;
  }
  return params;
}
var DATA_SUFFIX = "/__data.json";
var default_transform = ({ html }) => html;
async function respond(request, options, state) {
  var _a, _b, _c, _d;
  let url = new URL(request.url);
  const { parameter, allowed } = options.method_override;
  const method_override = (_a = url.searchParams.get(parameter)) == null ? void 0 : _a.toUpperCase();
  if (method_override) {
    if (request.method === "POST") {
      if (allowed.includes(method_override)) {
        request = new Proxy(request, {
          get: (target, property, _receiver) => {
            if (property === "method")
              return method_override;
            return Reflect.get(target, property, target);
          }
        });
      } else {
        const verb = allowed.length === 0 ? "enabled" : "allowed";
        const body = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body, {
          status: 400
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response("Not found", { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || "/";
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request) {
    const data_suffix_length = DATA_SUFFIX.length - (options.trailing_slash === "always" ? 1 : 0);
    decoded = decoded.slice(0, -data_suffix_length) || "/";
    url = new URL(url.origin + url.pathname.slice(0, -data_suffix_length) + url.search);
  }
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if (route) {
    if (route.type === "page") {
      const normalized = normalize_path(url.pathname, options.trailing_slash);
      if (normalized !== url.pathname && !((_d = state.prerendering) == null ? void 0 : _d.fallback)) {
        return new Response(void 0, {
          status: 301,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
          }
        });
      }
    } else if (is_data_request) {
      return new Response(void 0, {
        status: 404
      });
    }
  }
  const event = {
    get clientAddress() {
      if (!state.getClientAddress) {
        throw new Error(
          `${"@sveltejs/adapter-netlify"} does not specify getClientAddress. Please raise an issue`
        );
      }
      Object.defineProperty(event, "clientAddress", {
        value: state.getClientAddress()
      });
      return event.clientAddress;
    },
    locals: {},
    params,
    platform: state.platform,
    request,
    routeId: route && route.id,
    url
  };
  const removed = (property, replacement, suffix = "") => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    }
  });
  const details = ". See https://github.com/sveltejs/kit/pull/3384 for details";
  const body_getter = {
    get: () => {
      throw new Error(
        "To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`" + details
      );
    }
  };
  Object.defineProperties(event, {
    method: removed("method", "request.method", details),
    headers: removed("headers", "request.headers", details),
    origin: removed("origin", "url.origin"),
    path: removed("path", "url.pathname"),
    query: removed("query", "url.searchParams"),
    body: body_getter,
    rawBody: body_getter
  });
  let resolve_opts = {
    ssr: true,
    transformPageChunk: default_transform
  };
  try {
    const response = await options.hooks.handle({
      event,
      resolve: async (event2, opts) => {
        var _a2;
        if (opts) {
          if (opts.transformPage) {
            throw new Error(
              "transformPage has been replaced by transformPageChunk \u2014 see https://github.com/sveltejs/kit/pull/5657 for more information"
            );
          }
          resolve_opts = {
            ssr: opts.ssr !== false,
            transformPageChunk: opts.transformPageChunk || default_transform
          };
        }
        if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
          return await render_response({
            event: event2,
            options,
            state,
            $session: await options.hooks.getSession(event2),
            page_config: { router: true, hydrate: true },
            stuff: {},
            status: 200,
            error: null,
            branch: [],
            resolve_opts: {
              ...resolve_opts,
              ssr: false
            }
          });
        }
        if (route) {
          let response2;
          if (is_data_request && route.type === "page" && route.shadow) {
            response2 = await render_endpoint(event2, await route.shadow(), options);
            if (request.headers.has("x-sveltekit-load")) {
              if (response2.status >= 300 && response2.status < 400) {
                const location = response2.headers.get("location");
                if (location) {
                  const headers = new Headers(response2.headers);
                  headers.set("x-sveltekit-location", location);
                  response2 = new Response(void 0, {
                    status: 204,
                    headers
                  });
                }
              }
            }
          } else {
            response2 = route.type === "endpoint" ? await render_endpoint(event2, await route.load(), options) : await render_page(event2, route, options, state, resolve_opts);
          }
          if (response2) {
            if (response2.status === 200 && response2.headers.has("etag")) {
              let if_none_match_value = request.headers.get("if-none-match");
              if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
                if_none_match_value = if_none_match_value.substring(2);
              }
              const etag = response2.headers.get("etag");
              if (if_none_match_value === etag) {
                const headers = new Headers({ etag });
                for (const key2 of [
                  "cache-control",
                  "content-location",
                  "date",
                  "expires",
                  "vary"
                ]) {
                  const value = response2.headers.get(key2);
                  if (value)
                    headers.set(key2, value);
                }
                return new Response(void 0, {
                  status: 304,
                  headers
                });
              }
            }
            return response2;
          }
        }
        if (state.initiator === GENERIC_ERROR) {
          return new Response("Internal Server Error", {
            status: 500
          });
        }
        if (!state.initiator) {
          const $session = await options.hooks.getSession(event2);
          return await respond_with_error({
            event: event2,
            options,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${event2.url.pathname}`),
            resolve_opts
          });
        }
        if (state.prerendering) {
          return new Response("not found", { status: 404 });
        }
        return await fetch(request);
      },
      get request() {
        throw new Error("request in handle has been replaced with event" + details);
      }
    });
    if (response && !(response instanceof Response)) {
      throw new Error("handle must return a Response object" + details);
    }
    return response;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    options.handle_error(error2, event);
    const type = negotiate(event.request.headers.get("accept") || "text/html", [
      "text/html",
      "application/json"
    ]);
    if (is_data_request || type === "application/json") {
      return new Response(serialize_error(error2, options.get_stack), {
        status: 500,
        headers: { "content-type": "application/json; charset=utf-8" }
      });
    }
    try {
      const $session = await options.hooks.getSession(event);
      return await respond_with_error({
        event,
        options,
        state,
        $session,
        status: 500,
        error: error2,
        resolve_opts
      });
    } catch (e2) {
      const error3 = coalesce_to_error(e2);
      return new Response(options.dev ? error3.stack : error3.message, {
        status: 500
      });
    }
  }
}
var base = "";
var assets = "";
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var template = ({ head, body, assets: assets2, nonce }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		' + head + "\n	</head>\n	<body>\n		<div>" + body + "</div>\n	</body>\n</html>\n";
var read = null;
set_paths({ "base": "", "assets": "" });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      dev: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error("request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details");
          }
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      hydrate: true,
      manifest: manifest2,
      method_override: { "parameter": "_method", "allowed": [] },
      paths: { base, assets },
      prefix: assets + "/",
      prerender: {
        default: false,
        enabled: true
      },
      public_env: {},
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: "never"
    };
  }
  init({ env }) {
    const entries = Object.entries(env);
    Object.fromEntries(entries.filter(([k]) => !k.startsWith("PUBLIC_")));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith("PUBLIC_")));
    this.options.public_env = pub;
  }
  async respond(request, options = {}) {
    if (!(request instanceof Request)) {
      throw new Error("The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details");
    }
    if (!this.options.hooks) {
      const module = await Promise.resolve().then(() => (init_hooks_bced8853(), hooks_bced8853_exports));
      this.options.hooks = {
        getSession: module.getSession || (() => ({})),
        handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
        handleError: module.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: module.externalFetch || fetch
      };
    }
    return respond(request, this.options, options);
  }
};

// .svelte-kit/netlify-tmp/manifest.js
var manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    entry: { "file": "_app/immutable/start-afbea8b4.js", "imports": ["_app/immutable/start-afbea8b4.js", "_app/immutable/chunks/index-4bfd8167.js"], "stylesheets": [] },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
var prerendered = /* @__PURE__ */ new Set([]);

// .svelte-kit/netlify-tmp/entry.js
var server = new Server(manifest);
var prefix = `/${manifest.appDir}/`;
function handler(request, context) {
  if (is_static_file(request)) {
    return;
  }
  return server.respond(request, {
    platform: { context },
    getClientAddress() {
      return context.ip;
    }
  });
}
function is_static_file(request) {
  const url = new URL(request.url);
  if (url.pathname.startsWith(prefix)) {
    return true;
  }
  const pathname = url.pathname.replace(/\/$/, "");
  let file4 = pathname.substring(1);
  try {
    file4 = decodeURIComponent(file4);
  } catch (err) {
  }
  return manifest.assets.has(file4) || manifest.assets.has(file4 + "/index.html") || prerendered.has(pathname || "/");
}
export {
  handler as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=render.js.map
