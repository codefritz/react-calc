(this["webpackJsonpreact-calc"]=this["webpackJsonpreact-calc"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(6),r=c.n(n),u=(c(13),c(7)),l=c(8),s=(c.p,c(14),c(5)),i=c(0);function o(e){var t=e.calcField;return Object(i.jsx)("input",{type:"text",value:t,className:"calc-field",disabled:"true"})}function b(e){return Object(i.jsx)("button",{className:"calc-button"+(e.className?" "+e.className:""),onClick:function(){return e.setter(Object(s.a)(e.field,e.value))},children:e.value})}var j=function(){var e="Codi Master #1";Object(a.useEffect)((function(){document.title=e}),[]);var t=Object(a.useState)("0"),c=Object(l.a)(t,2),n=c[0],r=c[1];return Object(i.jsxs)("div",{className:"calculator",children:[Object(i.jsx)("h1",{children:e.toUpperCase()}),Object(i.jsx)(o,{calcField:n}),Object(i.jsxs)("div",{className:"button-container",id:"button-container",children:[["*","/","+","-"].map((function(e,t){return Object(i.jsx)(b,{value:e,setter:r,field:n,className:"operator"})})),Object(u.a)(Array(9)).map((function(e,t){return Object(i.jsx)(b,{value:t+1,setter:r,field:n})})),Object(i.jsx)(b,{value:"0",setter:r,field:n}),Object(i.jsx)(b,{value:".",setter:r,field:n}),Object(i.jsx)("button",{className:"calc-button all-clear",onClick:function(){return r("0")},children:"AC"}),Object(i.jsx)("button",{className:"calc-button result",onClick:function(){return r(Object(s.b)(n))},children:"="})]})]})};r.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))},5:function(module,__webpack_exports__,__webpack_require__){"use strict";function appendValue(e,t){return"0"==e?t:e+t}function calculate(value){try{return eval(value)}catch(e){return"Err"}}__webpack_require__.d(__webpack_exports__,"a",(function(){return appendValue})),__webpack_require__.d(__webpack_exports__,"b",(function(){return calculate}))}},[[16,1,2]]]);
//# sourceMappingURL=main.d121ddb3.chunk.js.map