(this.webpackJsonpReact-Profile=this.webpackJsonpReact-Profile||[]).push([[0],{14:function(e,a,t){},23:function(e,a,t){e.exports=t(34)},28:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),i=t.n(l),o=(t(28),t(14),t(17)),c=t(18),m=t(22),s=t(21),u=t(8),d=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.location.data.id,a=u.profiles[e];return r.a.createElement("section",{className:"parent"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-top"},r.a.createElement("h3",null," ",a.basicInformation.name," "),r.a.createElement("em",null," ",a.basicInformation.email," ")),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("a",{href:"mailto:"+a.basicInformation.email}," ",a.basicInformation.email,"  ")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"tel:"+a.basicInformation.mobile}," ",a.basicInformation.mobile))),r.a.createElement("div",{className:"card2"},r.a.createElement("div",{className:"card-bottom"},r.a.createElement("h2",{className:"h2"},"\ud83d\udcd7 Educational Qualifications ")),r.a.createElement("div",{className:"card-top"},a.education.map((function(e,a){return r.a.createElement("div",null,r.a.createElement("h3",null," ",e.degree," "),r.a.createElement("p",null," ",e.institution," "))}))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("h2",{className:"h2"},"\ud83d\udef0 Skill setlifications ")),r.a.createElement("div",{className:"card-top"},a.skill.map((function(e,a){return r.a.createElement("div",null,r.a.createElement("h3",null," ",e.t," "),r.a.createElement("span",null," ",e.l," "))})))))}}]),t}(r.a.Component),E=t(9),f=t(5);var p=function(){var e=u.profiles;return r.a.createElement("section",{className:"parent"},e.map((function(e,a){return r.a.createElement("div",{className:"card",key:a},r.a.createElement("div",{className:"card-top"},r.a.createElement("h2",null," ",e.basicInformation.name," ")," ",r.a.createElement("br",null),r.a.createElement("h5",null," ",r.a.createElement("em",null," ",e.basicInformation.role))),r.a.createElement("div",{className:"card-bottom"},r.a.createElement("a",{href:"mailto:"+e.basicInformation.email}," ",e.basicInformation.email,"  ")," ",r.a.createElement("br",null),r.a.createElement("a",{href:"tel:"+e.basicInformation.mobile}," ",e.basicInformation.mobile)," ",r.a.createElement("br",null),r.a.createElement(E.b,{to:{pathname:"/profile",data:{id:a}}}," Click to View Profile")))})))},b=function(){var e=u.profiles;return r.a.createElement("section",null,r.a.createElement(E.a,null,r.a.createElement("header",{className:"header"},e.map((function(e,a){return r.a.createElement(E.b,{to:{pathname:"/profile",data:{id:a}},key:a}," ","Profile"+(a+1)," ")})))," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement(f.a,{exact:!0,path:"/profile",component:d}),r.a.createElement(f.a,{exact:!0,path:"/React-Profile",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"profiles":[{"basicInformation":{"name":"Anil Kumar Teegala","role":"Technical skill Trainer","email":"anilkumar_t@apssdc.in","mobile":"+91 8886785229"},"education":[{"degree":"Under Graduation","institution":"B.TECH \u27a1 Electrical and Electronics Engineering from Sri Vasavi Engineering College"},{"degree":"Board of Intermediate Education","institution":"Board of Secondary Education \u27a1 MPC, Sri Pragathi Junior College"},{"degree":"SSC","institution":"Zilla Parshid High School"}],"skill":[{"t":"Web Technologies","l":"HTML5, CSS, JS"},{"t":"Programming Languages","l":"Python"},{"t":"Operating Systems","l":"windows"},{"t":"Frameworks","l":"Django"}]}]}')}},[[23,1,2]]]);
//# sourceMappingURL=main.8eb7a479.chunk.js.map