(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{443:function(e,n,t){"use strict";t.r(n);t(505);var r=t(506);t.d(n,"dice_run",(function(){return r.b})),t.d(n,"dice_parse",(function(){return r.a}))},505:function(e,n,t){"use strict";var r=t.w[e.i];e.exports=r,r.h()},506:function(e,n,t){"use strict";(function(e,r,u){t.d(n,"b",(function(){return w})),t.d(n,"a",(function(){return y}));var o=t(505);let c=0,i=null;function f(){return null!==i&&i.buffer===o.g.buffer||(i=new Uint8Array(o.g.buffer)),i}let l=new(void 0===e?(0,r.require)("util").TextEncoder:e)("utf-8");const a="function"==typeof l.encodeInto?function(e,n){return l.encodeInto(e,n)}:function(e,n){const t=l.encode(e);return n.set(t),{read:e.length,written:t.length}};function d(e,n,t){if(void 0===t){const t=l.encode(e),r=n(t.length);return f().subarray(r,r+t.length).set(t),c=t.length,r}let r=e.length,u=n(r);const o=f();let i=0;for(;i<r;i++){const n=e.charCodeAt(i);if(n>127)break;o[u+i]=n}if(i!==r){0!==i&&(e=e.slice(i)),u=t(u,r,r=i+3*e.length);const n=f().subarray(u+i,u+r);i+=a(e,n).written}return c=i,u}let s=null;function b(){return null!==s&&s.buffer===o.g.buffer||(s=new Int32Array(o.g.buffer)),s}let v=new(void 0===u?(0,r.require)("util").TextDecoder:u)("utf-8",{ignoreBOM:!0,fatal:!0});function p(e,n){return v.decode(f().subarray(e,e+n))}function w(e){try{const i=o.a.value-16;o.a.value=i;var n=d(e,o.c,o.d),t=c;o.f(i,n,t);var r=b()[i/4+0],u=b()[i/4+1];return p(r,u)}finally{o.a.value+=16,o.b(r,u)}}function y(e){try{const i=o.a.value-16;o.a.value=i;var n=d(e,o.c,o.d),t=c;o.e(i,n,t);var r=b()[i/4+0],u=b()[i/4+1];return p(r,u)}finally{o.a.value+=16,o.b(r,u)}}v.decode()}).call(this,t(293).TextEncoder,t(507)(e),t(293).TextDecoder)},507:function(e,n){e.exports=function(e){if(!e.webpackPolyfill){var n=Object.create(e);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}}}]);