(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),o=n(6),r=n(8),i=(n(13),n(4)),a=n.n(i),u=n(1),l=(n(14),n(0)),b=function(t){var e=t.good;return Object(l.jsx)("li",{"data-cy":"Good",children:e})},j=function(t){var e=t.goods;return Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)(b,{good:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="name",g="length";var f=function(){var t=Object(u.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(u.useState)(!1),i=Object(o.a)(s,2),b=i[0],f=i[1],O=function(t,e,n){var c=Object(r.a)(t);return e&&c.sort((function(t,n){switch(e){case g:return t.length-n.length;case h:return t.localeCompare(n);default:return!1}})),n?c.reverse():c}(d,n,b);return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:a()("button","is-info",{"is-light":n!==h}),onClick:function(){return c(h)},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:a()("button","is-success",{"is-light":n!==g}),onClick:function(){return c(g)},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:a()("button","is-warning",{"is-light":!0!==b}),onClick:function(){return f(!b)},children:"Reverse"}),n||b?Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(""),f(!1)},children:"Reset"}):""]}),Object(l.jsx)(j,{goods:O})]})};s.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3e772371.chunk.js.map