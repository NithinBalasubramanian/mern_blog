(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{23:function(t,e,c){},42:function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(2),l=c.n(a),r=c(17),s=c.n(r),o=(c(23),c(8),c(3)),i=c(5),j=c(7),b=c(6),h=c.n(b);c(41);var u=function(){var t=Object(a.useState)([]),e=Object(j.a)(t,2),c=e[0],l=e[1];Object(a.useEffect)((function(){r()}),[]);var r=function(){h.a.get("http://localhost:5000/api").then((function(t){l(t.data)})).catch((function(t){console.log(t)}))},s={title:"",auther:"",blog:""},b=Object(a.useState)(s),u=Object(j.a)(b,2),d=u[0],O=u[1],m=function(t){var e=t.target.name,c=t.target.value;O((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},e,c))}))};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{className:"mt-5",children:"Add Blog"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={title:d.title,auther:d.auther,blog:d.blog};h.a.post("/api/savedata",e).then((function(t){console.log("sent"),r()})).catch((function(t){console.log(t)})),O(s)},children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",name:"title",placeholder:"title",value:d.title,onChange:m})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{className:"form-control",name:"auther",placeholder:"auther",value:d.auther,onChange:m})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("textarea",{className:"form-control",name:"blog",placeholder:"blog",value:d.blog,onChange:m,children:d.blog})}),Object(n.jsx)("button",{type:"submit",className:"btn btn-sm btn-primary blogSubmit",children:"Submit"})]}),Object(n.jsxs)("div",{className:"mt-5",children:[Object(n.jsx)("h2",{children:"List Blog Data"}),Object(n.jsxs)("table",{className:"table table-bordered",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"S.no"}),Object(n.jsx)("th",{children:"Title"}),Object(n.jsx)("th",{children:"Auther"}),Object(n.jsx)("th",{children:"Blog"})]})}),Object(n.jsx)("tbody",{children:c.map((function(t,e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e+1},e),Object(n.jsx)("td",{children:t.title}),Object(n.jsx)("td",{children:t.auther}),Object(n.jsx)("td",{children:t.blog})]})}))})]})]})]})};var d=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(u,{})})},O=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,l=e.getLCP,r=e.getTTFB;c(t),n(t),a(t),l(t),r(t)}))};s.a.render(Object(n.jsx)(l.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),O()},8:function(t,e,c){}},[[42,1,2]]]);
//# sourceMappingURL=main.1b9ec410.chunk.js.map