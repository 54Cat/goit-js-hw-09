!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u=document.querySelector("[name=delay]"),c=document.querySelector("[name=step]"),a=document.querySelector("[name=amount]");function l(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r&&o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")),t("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}function f(n){e(i).Notify.success(n)}function d(n){e(i).Notify.failure(n)}document.querySelector("button").addEventListener("click",(function(e){e.preventDefault();var n=Number(u.value),o=Number(c.value),t=Number(a.value),r=n;for(position=1;position<=t;position++)l(position,r).then(f).catch(d),r+=o}))}();
//# sourceMappingURL=03-promises.01653576.js.map