(this["webpackJsonpreaction-time-test"]=this["webpackJsonpreaction-time-test"]||[]).push([[0],{61:function(e,t,n){},62:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(10),s=n.n(r),a=(n(61),n(108)),l=n(104),o=(n(62),n(112)),j=n(71),b=n(3);function d(){return Object(b.jsxs)(o.a,{textAlign:"center",children:[Object(b.jsx)(j.a,{variant:"h3",color:"inherit",children:"Reaction Time Test"}),Object(b.jsxs)(j.a,{color:"inherit",children:["This is a reaction time test (built with React ",">",":3). You will click a button and wait for it to change colors, then click it again. This test is not 100% accurate and is limited by computer and browser performance, as well as basic input lag.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"NOTE:"}),' Certain privacy related browser settings on Firefox will make this test less accurate. For the most accurate times, please disable the "privacy.reduceTimerPrecision" or change the value of "privacy.resistFingerprinting"']})]})}var x=n(49),u=n(29),h=n(103),m=n(111);function O(e){return Object(b.jsxs)(h.a,{container:!0,direction:"column",justify:"center",spacing:3,children:[Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(j.a,{variant:"h4",children:"Trials"})}),Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(m.a,{helperText:"Trial 1",value:e.stats[0]?e.stats[0]+"ms":""})}),Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(m.a,{helperText:"Trial 2",value:e.stats[1]?e.stats[1]+"ms":""})}),Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(m.a,{helperText:"Trial 3",value:e.stats[2]?e.stats[2]+"ms":""})}),Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(m.a,{helperText:"Trial 4",value:e.stats[3]?e.stats[3]+"ms":""})}),Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(m.a,{helperText:"Trial 5",value:e.stats[4]?e.stats[4]+"ms":""})}),Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(m.a,{helperText:"Average",value:e.stats[0]?g(e.stats)+"ms":""})})]})}function g(e){var t=0;return e.forEach((function(e){"number"==typeof e&&(t+=e)})),t/e.length}n(67);var y=n(113);function f(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),a=s[0],d=s[1],m=Object(c.useState)(null),g=Object(u.a)(m,2),f=g[0],p=g[1],v=Object(c.useState)(null),T=Object(u.a)(v,2),k=T[0],w=T[1];return Object(c.useEffect)((function(){if(a){document.getElementById("color-box").style["background-color"]="red",document.getElementById("main-btn").innerText="Click here";var e=Math.floor(7*Math.random())+3;w(setTimeout((function(){document.getElementById("color-box").style["background-color"]="green",p((new Date).getTime())}),1e3*e))}else{if(!f)return;var t=(new Date).getTime()-f;p(null),document.getElementById("color-box").style["background-color"]="yellow",i([].concat(Object(x.a)(n),[t])),n.length>=4&&(document.getElementById("main-btn").style.display="none",document.getElementById("finished-btn").style.display="inline-flex")}}),[a]),Object(b.jsxs)(h.a,{container:!0,direction:"row",justify:"center",children:[Object(b.jsxs)(h.a,{item:!0,xs:!0,children:[Object(b.jsx)(j.a,{variant:"h4",children:"Reaction Test"}),Object(b.jsxs)("ol",{children:[Object(b.jsx)("li",{children:"Click the start button"}),Object(b.jsx)("li",{children:"Wait until the box turns green"}),Object(b.jsx)("li",{children:'Click the "Click Here" button as fast as possible'}),Object(b.jsx)("li",{children:"Do this 5 times to complete the test"})]}),Object(b.jsx)(l.a,{variant:"middle"}),Object(b.jsx)("br",{}),Object(b.jsxs)(h.a,{container:!0,direction:"row",justify:"center",children:[Object(b.jsxs)(h.a,{item:!0,xs:!0,children:[Object(b.jsx)(y.a,{id:"main-btn",variant:"contained",color:"primary",size:"large",onClick:function(){n.length>=5||(a?(null!==k&&(w(clearTimeout(k)),document.getElementById("main-btn").innerText="Start",document.getElementById("color-box").style["background-color"]="yellow"),d(!1)):d(!0))},children:"Start"}),Object(b.jsx)(y.a,{style:{display:"none"},id:"finished-btn",variant:"contained",color:"secondary",size:"large",disabled:!0,children:"Finished!"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(y.a,{id:"reset-btn",variant:"contained",color:"secondary",size:"medium",onClick:function(){document.getElementById("main-btn").innerText="Start",document.getElementById("main-btn").style.display="inline-flex",document.getElementById("finished-btn").style.display="none",document.getElementById("color-box").style["background-color"]="yellow",d(null),p(null),w(null==k?null:clearTimeout(k)),i([])},children:"Reset"})]}),Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(o.a,{id:"color-box",style:{backgroundColor:"yellow"},width:"250px",height:"250px"})})]})]}),Object(b.jsx)(l.a,{orientation:"vertical",variant:"middle",flexItem:!0}),Object(b.jsx)(h.a,{item:!0,xs:!0,children:Object(b.jsx)(O,{stats:n})})]})}var p=n(106),v=n(107),T=n(105),k=Object(T.a)((function(e){return{footer:{position:"fixed",left:0,bottom:0,width:"100%",backgroundColor:e.palette.grey[800],color:"white",textAlign:"center",padding:".5%"}}}));function w(){var e=k();return Object(b.jsx)("div",{className:e.footer,children:Object(b.jsxs)(j.a,{children:["\xa9 2021 Nitrogen2Oxygen",Object(b.jsx)("br",{}),Object(b.jsx)(p.a,{color:"inherit",href:"https://github.com/Nitrogen2Oxygen/reaction-time-test",target:"_blank",rel:"noreferrer",children:Object(b.jsx)(v.a,{fontSize:"large"})})]})})}function E(){return Object(b.jsxs)(a.a,{children:[Object(b.jsx)(d,{}),Object(b.jsx)("br",{}),Object(b.jsx)(l.a,{}),Object(b.jsx)("br",{}),Object(b.jsx)(f,{}),Object(b.jsx)(w,{})]})}var I=n(48),B=n(109),C=n(110),S=Object(I.a)({palette:{type:"dark"}});s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsxs)(B.a,{theme:S,children:[Object(b.jsx)(C.a,{}),Object(b.jsx)(E,{})]})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.26d95821.chunk.js.map