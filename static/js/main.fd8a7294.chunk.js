(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),c=t.n(r);t(12),t(13);var o=function(e){return e.alert&&n.a.createElement("div",{className:`alert alert-${e.alert.type} alert-dismissible fade show`,role:"alert"},n.a.createElement("strong",null,e.alert.msg," : ",e.alert.type),"!",n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))};function s(e){return n.a.createElement("nav",{className:`navbar navbar-expand-lg navbar-${e.mode} bg-${e.mode}`},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarScroll"},n.a.createElement("ul",{className:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll",style:{"--bs-scroll-height":"100px"}},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/about"},"About"))),n.a.createElement("div",{className:"form-check form-switch text-"+("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Toggle Mode")))))}function m(e){const[a,t]=Object(l.useState)("");return n.a.createElement("div",{className:"container my-4",style:{background:"dark"===e.mode?"#403f3f":"white",color:"dark"===e.mode?"white":"black"}},n.a.createElement("div",{className:"form-floating"},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",id:"textBox",rows:"8",value:a,onChange:e=>{t(e.target.value)},style:{background:"dark"===e.mode?"#403f3f":"white",color:"dark"===e.mode?"white":"black"}})),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{t(a.toUpperCase()),e.editAlert("Text set to Uppercase","success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{t(a.toLowerCase()),e.editAlert("Text set to Lowercase","success")}},"Convert to lowercase"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{t(""),e.editAlert("All text cleared","danger")}},"Clear"),n.a.createElement("button",{className:"btn btn-primary mx-1",onClick:()=>{var a=document.getElementById("textBox");a.select(),navigator.clipboard.writeText(a.value),e.editAlert("Text copied to clipboard","info")}},"Copy"),n.a.createElement("div",{className:"my-3"},n.a.createElement("h5",null,"Your Text Summary"),n.a.createElement("p",null,a.split(" ").length," word and ",a.length," characters")),n.a.createElement("div",{className:"my-3"},n.a.createElement("h4",null,"Preview"),n.a.createElement("p",null,a))))}s.defaultProps={title:"Default Title"};var i=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)(null),c=(e,a)=>{r({msg:e,type:a}),setTimeout(()=>{r(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="black",c("Dark mode is enabled","success")):(a("light"),document.body.style.backgroundColor="white",c("Light mode is enabled","success"))}}),n.a.createElement(o,{alert:t}),n.a.createElement(m,{editAlert:c,heading:"Enter the Text",mode:e}))};var d=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()},3:function(e,a,t){e.exports=t(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.fd8a7294.chunk.js.map