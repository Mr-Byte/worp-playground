"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7235],{47235:(n,_,e)=>{e.a(n,(async(n,t)=>{try{e.r(_),e.d(_,{__wbg_buffer_a448f833075b71ba:()=>o.Fu,__wbg_call_5da1969d7cd31ccd:()=>o.gD,__wbg_call_90c26b09837aba1c:()=>o.Xn,__wbg_crypto_58f13aa23ffcb166:()=>o._K,__wbg_getRandomValues_504510b5564925af:()=>o.$j,__wbg_globalThis_9caa27ff917c6860:()=>o._e,__wbg_global_35dfdd59a4da3e74:()=>o.QC,__wbg_msCrypto_abcb1295e768d1f2:()=>o.oT,__wbg_new_8f67e318f15d7254:()=>o.$d,__wbg_newnoargs_c62ea9419c21fbac:()=>o.eE,__wbg_newwithbyteoffsetandlength_d0482f893617af71:()=>o.EV,__wbg_newwithlength_6c2df9e2f3028c43:()=>o.bN,__wbg_node_523d7bd03ef69fba:()=>o.MF,__wbg_process_5b786e71d465a513:()=>o.L5,__wbg_randomFillSync_a0d98aa11c81fe89:()=>o.uF,__wbg_require_2784e593a4674877:()=>o.Tu,__wbg_self_f0e34d89f33b99fd:()=>o.Un,__wbg_set_2357bf09366ee480:()=>o.wV,__wbg_set_wasm:()=>o.$1,__wbg_subarray_2e940e41c0f5a1d9:()=>o.G7,__wbg_versions_c2ab80650590b6a2:()=>o.ER,__wbg_window_d3b084224f4774d7:()=>o.U4,__wbindgen_is_function:()=>o.o$,__wbindgen_is_object:()=>o.Wl,__wbindgen_is_string:()=>o.eY,__wbindgen_is_undefined:()=>o.XP,__wbindgen_memory:()=>o.oH,__wbindgen_object_clone_ref:()=>o.m_,__wbindgen_object_drop_ref:()=>o.ug,__wbindgen_string_new:()=>o.h4,__wbindgen_throw:()=>o.Or,dice_disassemble:()=>o.L4,dice_run:()=>o.lc});var r=e(43530),o=e(49838),c=n([r]);r=(c.then?(await c)():c)[0],(0,o.$1)(r),t()}catch(n){t(n)}}))},49838:(n,_,e)=>{e.d(_,{$1:()=>c,$d:()=>Y,$j:()=>D,ER:()=>k,EV:()=>W,Fu:()=>S,G7:()=>J,L4:()=>F,L5:()=>U,MF:()=>C,Or:()=>Z,QC:()=>N,Tu:()=>L,U4:()=>I,Un:()=>H,Wl:()=>j,XP:()=>P,Xn:()=>O,_K:()=>$,_e:()=>K,bN:()=>z,eE:()=>M,eY:()=>V,gD:()=>Q,h4:()=>X,lc:()=>T,m_:()=>G,o$:()=>R,oH:()=>nn,oT:()=>A,uF:()=>q,ug:()=>x,wV:()=>B}),n=e.hmd(n);var t=e(48731).TextDecoder,r=e(48731).TextEncoder;let o;function c(n){o=n}const i=new Array(128).fill(void 0);function u(n){return i[n]}i.push(void 0,null,!0,!1);let f=i.length;function b(n){const _=u(n);return function(n){n<132||(i[n]=f,f=n)}(n),_}let d=new(void 0===t?(0,n.require)("util").TextDecoder:t)("utf-8",{ignoreBOM:!0,fatal:!0});d.decode();let a=null;function w(){return null!==a&&0!==a.byteLength||(a=new Uint8Array(o.memory.buffer)),a}function g(n,_){return n>>>=0,d.decode(w().subarray(n,n+_))}function l(n){f===i.length&&i.push(i.length+1);const _=f;return f=i[_],i[_]=n,_}let s=0,y=new(void 0===r?(0,n.require)("util").TextEncoder:r)("utf-8");const h="function"==typeof y.encodeInto?function(n,_){return y.encodeInto(n,_)}:function(n,_){const e=y.encode(n);return _.set(e),{read:n.length,written:e.length}};function m(n,_,e){if(void 0===e){const e=y.encode(n),t=_(e.length,1)>>>0;return w().subarray(t,t+e.length).set(e),s=e.length,t}let t=n.length,r=_(t,1)>>>0;const o=w();let c=0;for(;c<t;c++){const _=n.charCodeAt(c);if(_>127)break;o[r+c]=_}if(c!==t){0!==c&&(n=n.slice(c)),r=e(r,t,t=c+3*n.length,1)>>>0;const _=w().subarray(r+c,r+t);c+=h(n,_).written}return s=c,r}let p=null;function v(){return null!==p&&0!==p.byteLength||(p=new Int32Array(o.memory.buffer)),p}function T(n){let _,e;try{const c=o.__wbindgen_add_to_stack_pointer(-16),i=m(n,o.__wbindgen_malloc,o.__wbindgen_realloc),u=s;o.dice_run(c,i,u);var t=v()[c/4+0],r=v()[c/4+1];return _=t,e=r,g(t,r)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(_,e,1)}}function F(n){let _,e;try{const c=o.__wbindgen_add_to_stack_pointer(-16),i=m(n,o.__wbindgen_malloc,o.__wbindgen_realloc),u=s;o.dice_disassemble(c,i,u);var t=v()[c/4+0],r=v()[c/4+1];return _=t,e=r,g(t,r)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(_,e,1)}}function E(n,_){try{return n.apply(this,_)}catch(n){o.__wbindgen_exn_store(l(n))}}function $(n){return l(u(n).crypto)}function j(n){const _=u(n);return"object"==typeof _&&null!==_}function U(n){return l(u(n).process)}function k(n){return l(u(n).versions)}function C(n){return l(u(n).node)}function V(n){return"string"==typeof u(n)}function x(n){b(n)}function A(n){return l(u(n).msCrypto)}function L(){return E((function(){return l(n.require)}),arguments)}function R(n){return"function"==typeof u(n)}function X(n,_){return l(g(n,_))}function q(){return E((function(n,_){u(n).randomFillSync(b(_))}),arguments)}function D(){return E((function(n,_){u(n).getRandomValues(u(_))}),arguments)}function M(n,_){return l(new Function(g(n,_)))}function O(){return E((function(n,_){return l(u(n).call(u(_)))}),arguments)}function G(n){return l(u(n))}function H(){return E((function(){return l(self.self)}),arguments)}function I(){return E((function(){return l(window.window)}),arguments)}function K(){return E((function(){return l(globalThis.globalThis)}),arguments)}function N(){return E((function(){return l(e.g.global)}),arguments)}function P(n){return void 0===u(n)}function Q(){return E((function(n,_,e){return l(u(n).call(u(_),u(e)))}),arguments)}function S(n){return l(u(n).buffer)}function W(n,_,e){return l(new Uint8Array(u(n),_>>>0,e>>>0))}function Y(n){return l(new Uint8Array(u(n)))}function B(n,_,e){u(n).set(u(_),e>>>0)}function z(n){return l(new Uint8Array(n>>>0))}function J(n,_,e){return l(u(n).subarray(_>>>0,e>>>0))}function Z(n,_){throw new Error(g(n,_))}function nn(){return l(o.memory)}},43530:(n,_,e)=>{var t=e(49838);n.exports=e.v(_,n.id,"f4ae4493e93b91f54b1f",{"./index_bg.js":{__wbg_crypto_58f13aa23ffcb166:t._K,__wbindgen_is_object:t.Wl,__wbg_process_5b786e71d465a513:t.L5,__wbg_versions_c2ab80650590b6a2:t.ER,__wbg_node_523d7bd03ef69fba:t.MF,__wbindgen_is_string:t.eY,__wbindgen_object_drop_ref:t.ug,__wbg_msCrypto_abcb1295e768d1f2:t.oT,__wbg_require_2784e593a4674877:t.Tu,__wbindgen_is_function:t.o$,__wbindgen_string_new:t.h4,__wbg_randomFillSync_a0d98aa11c81fe89:t.uF,__wbg_getRandomValues_504510b5564925af:t.$j,__wbg_newnoargs_c62ea9419c21fbac:t.eE,__wbg_call_90c26b09837aba1c:t.Xn,__wbindgen_object_clone_ref:t.m_,__wbg_self_f0e34d89f33b99fd:t.Un,__wbg_window_d3b084224f4774d7:t.U4,__wbg_globalThis_9caa27ff917c6860:t._e,__wbg_global_35dfdd59a4da3e74:t.QC,__wbindgen_is_undefined:t.XP,__wbg_call_5da1969d7cd31ccd:t.gD,__wbg_buffer_a448f833075b71ba:t.Fu,__wbg_newwithbyteoffsetandlength_d0482f893617af71:t.EV,__wbg_new_8f67e318f15d7254:t.$d,__wbg_set_2357bf09366ee480:t.wV,__wbg_newwithlength_6c2df9e2f3028c43:t.bN,__wbg_subarray_2e940e41c0f5a1d9:t.G7,__wbindgen_throw:t.Or,__wbindgen_memory:t.oH}})}}]);