(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{6896:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return e(1086)}])},6726:function(n,t,e){"use strict";e.d(t,{a:function(){return s},j:function(){return a}});var i=e(7297),r=e(9521);function o(){let n=(0,i.Z)(["\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    "]);return o=function(){return n},n}function c(){let n=(0,i.Z)(["\n    from{\n      opacity : 0;\n      transform : translate3d(-20rem,0,0);\n    }\n    to{\n      opacity: 1;\n      transform : translate3d(0,0,-10rem);\n    }\n   "]);return c=function(){return n},n}let a=(0,r.F4)(o()),s=(0,r.F4)(c())},5385:function(n,t,e){"use strict";var i=e(7297),r=e(5893);e(7294);var o=e(3935),c=e(9521);function a(){let n=(0,i.Z)(["\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    inset: 0;\n    display: flex;\n    margin: 0 auto;\n    background: white;\n    justify-content: center;\n    align-items: center;\n"]);return a=function(){return n},n}function s(){let n=(0,i.Z)([""]);return s=function(){return n},n}let u=c.ZP.div.withConfig({componentId:"sc-7a842e0b-0"})(a());c.ZP.div.withConfig({componentId:"sc-7a842e0b-1"})(s());let f=n=>{let{children:t,open:e}=n;return e?(0,o.createPortal)((0,r.jsx)(u,{children:t}),document.querySelector("#portal")):null};t.Z=f},4951:function(n,t,e){"use strict";var i=e(7297),r=e(5893),o=e(1664),c=e.n(o),a=e(1163),s=e(7294),u=e(9521),f=e(6726),d=e(1043),l=e(5385);function h(){let n=(0,i.Z)(["\n    height: 100%;\n    border-bottom: 6px solid rgb(242, 242, 242);\n    display: flex;\n    align-items: center;\n"]);return h=function(){return n},n}function p(){let n=(0,i.Z)(["\n    max-width: 100%;\n    margin: 0px auto;\n"]);return p=function(){return n},n}function x(){let n=(0,i.Z)(["\n    padding: 10px 30px 10px 0px;\n    color: ",";\n    font-size: 17px;\n    font-style: normal;\n    font-weight: ",";\n    line-height: 30px;\n    text-decoration: none;\n"]);return x=function(){return n},n}function m(){let n=(0,i.Z)(["\n    width: 30px;\n    font-size: 30px;\n    margin-left: auto;\n    // border: 1px solid black;\n    margin-right: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return m=function(){return n},n}function g(){let n=(0,i.Z)(["\n    display: flex;\n    animation: "," 0.5s ease;\n"]);return g=function(){return n},n}function w(){let n=(0,i.Z)(["\n    display: flex;\n    flex-direction: column;\n"]);return w=function(){return n},n}function Z(){let n=(0,i.Z)(["\n    margin: 20px 0px;\n    text-align: center;\n    padding: 10px 30px 10px 0px;\n    color: ",";\n    font-size: 17px;\n    font-style: normal;\n    font-weight: ",";\n    line-height: 30px;\n    text-decoration: none;\n"]);return Z=function(){return n},n}let j=u.ZP.header.withConfig({componentId:"sc-3f076d58-0"})(h()),b=u.ZP.nav.withConfig({componentId:"sc-3f076d58-1"})(p()),v=u.ZP.a.withConfig({componentId:"sc-3f076d58-2"})(x(),n=>n.href===n.pathname?"black":"rgb(153, 153, 153)",n=>n.href===n.pathname?"500":"300"),C=u.ZP.div.withConfig({componentId:"sc-3f076d58-3"})(m()),P=u.ZP.div.withConfig({componentId:"sc-3f076d58-4"})(g(),f.j),y=u.ZP.div.withConfig({componentId:"sc-3f076d58-5"})(w()),I=u.ZP.a.withConfig({componentId:"sc-3f076d58-6"})(Z(),n=>n.href===n.pathname?"black":"rgb(153, 153, 153)",n=>n.href===n.pathname?"500":"300"),k=n=>{let{}=n,[t,e]=(0,s.useState)(!1),[i,o]=(0,s.useState)(!1),u=()=>{e(window.innerWidth<650)};(0,s.useEffect)(()=>(u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)));let f=(0,a.useRouter)();return(0,r.jsxs)(j,{children:[!1===t?(0,r.jsxs)(b,{children:[(0,r.jsx)(c(),{href:"/",passHref:!0,children:(0,r.jsx)(v,{pathname:f.pathname,children:"Home"})}),(0,r.jsx)(c(),{href:"/profile",passHref:!0,children:(0,r.jsx)(v,{pathname:f.pathname,children:"Profile"})}),(0,r.jsx)(c(),{href:"/work",passHref:!0,children:(0,r.jsx)(v,{pathname:f.pathname,children:"Work"})}),(0,r.jsx)(c(),{href:"/contact",passHref:!0,children:(0,r.jsx)(v,{pathname:f.pathname,children:"Contact"})})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C,{onClick:()=>o(!0),children:"☰"}),(0,r.jsx)(l.Z,{open:i,children:(0,r.jsx)(P,{children:(0,r.jsxs)(y,{children:[(0,r.jsx)(c(),{href:"/",passHref:!0,children:(0,r.jsx)(I,{pathname:f.pathname,children:"Home"})}),(0,r.jsx)(c(),{href:"/profile",passHref:!0,children:(0,r.jsx)(I,{pathname:f.pathname,children:"Profile"})}),(0,r.jsx)(c(),{href:"/work",passHref:!0,children:(0,r.jsx)(I,{pathname:f.pathname,children:"Work"})}),(0,r.jsx)(c(),{href:"/contact",passHref:!0,children:(0,r.jsx)(I,{pathname:f.pathname,children:"Contact"})})]})})})]}),(0,r.jsx)(d.Z,{})]})};t.Z=k},1086:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return G}});var i=e(7297),r=e(5893),o=e(9008),c=e.n(o),a=e(7294),s=e(9521),u=e(5385),f=e(4951),d=e(6726),l=e(7202);function h(){let n=(0,i.Z)(["\n    margin: 0 auto;\n    max-width: 850px;\n    width: 100%;\n    padding: 100px 0px;\n    ","\n"]);return h=function(){return n},n}function p(){let n=(0,i.Z)(["\n    text-align: center;\n    padding-bottom: 20px;\n    ","\n"]);return p=function(){return n},n}function x(){let n=(0,i.Z)(["\n    color: rgb(153, 153, 153);\n    font-size: 16px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 22px;\n    text-align: center;\n    animation: "," 0.5s ease;\n    width: 100%;\n    ","\n"]);return x=function(){return n},n}let m=s.ZP.section.withConfig({componentId:"sc-edc2275e-0"})(h(),(0,l.a)({padding:"60px 0px"})),g=s.ZP.h1.withConfig({componentId:"sc-edc2275e-1"})(p(),(0,l.a)({fontSize:"20px"})),w=s.ZP.p.withConfig({componentId:"sc-edc2275e-2"})(x(),d.j,(0,l.a)({fontSize:"14px"})),Z=n=>{let{}=n;return(0,r.jsxs)(m,{children:[(0,r.jsx)(g,{children:"Profile"}),(0,r.jsx)(w,{children:"A confident and competent furniture designer with 5+ years of in-hand and on-site experience, strong educational background, and industrial expertise. A detail-oriented and technical approach to solving problems resulting in maximum customer satisfaction. Have extensive experience in working on a mixture of projects dealing with different clientele."})]})};var j=e(1043);function b(){let n=(0,i.Z)(["\n    width: 96%;\n    margin: 0px auto;\n"]);return b=function(){return n},n}function v(){let n=(0,i.Z)(["\n    max-width: 1200px;\n    margin: 0px auto;\n"]);return v=function(){return n},n}function C(){let n=(0,i.Z)(["\n    height: 100px;\n    padding: 30px 0% 0px;\n    margin: 0px auto;\n    max-width: 1200px;\n    width: 96%;\n"]);return C=function(){return n},n}function P(){let n=(0,i.Z)(["\n    width: 96%;\n    margin: 0px auto;\n    position: relative;\n"]);return P=function(){return n},n}function y(){let n=(0,i.Z)(["\n    position: absolute;\n    width: 100%;\n    padding-bottom: 30px;\n"]);return y=function(){return n},n}function I(){let n=(0,i.Z)(["\n    margin-left: auto;\n    padding: 30px 0px;\n    cursor: pointer;\n    font-weight: 800;\n    ","\n"]);return I=function(){return n},n}function k(){let n=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n"]);return k=function(){return n},n}function _(){let n=(0,i.Z)(["\n    height: 100%;\n    width: 1200px;\n    display: flex;\n    flex-direction: column;\n"]);return _=function(){return n},n}function z(){let n=(0,i.Z)(["\n    // align-items: center;\n    width: 100%;\n    height: 650px;\n    max-height: 700px;\n    position: relative;\n"]);return z=function(){return n},n}function H(){let n=(0,i.Z)(["\n    height: 100%;\n    animation: "," 1s ease running;\n    width: 100%;\n    position: absolute;\n    object-fit: contain;\n"]);return H=function(){return n},n}let S=s.ZP.header.withConfig({componentId:"sc-ce87b12a-0"})(b()),E=s.ZP.main.withConfig({componentId:"sc-ce87b12a-1"})(v()),N=s.ZP.div.withConfig({componentId:"sc-ce87b12a-2"})(C()),F=s.ZP.section.withConfig({componentId:"sc-ce87b12a-3"})(P()),W=s.ZP.img.withConfig({componentId:"sc-ce87b12a-4"})(y()),A=s.ZP.div.withConfig({componentId:"sc-ce87b12a-5"})(I(),(0,l.a)({fontSize:"8px",padding:"30px 10px"})),L=s.ZP.div.withConfig({componentId:"sc-ce87b12a-6"})(k()),O=s.ZP.div.withConfig({componentId:"sc-ce87b12a-7"})(_()),T=s.ZP.div.withConfig({componentId:"sc-ce87b12a-8"})(z()),X=s.ZP.img.withConfig({componentId:"sc-ce87b12a-9"})(H(),d.j),q=n=>{let{}=n,[t,e]=(0,a.useState)(!1);return(0,r.jsxs)(E,{children:[(0,r.jsx)(j.Z,{}),(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"Namitha Gunasekaran Portfolio"}),(0,r.jsx)("link",{rel:"icon",href:"/assets/logo/ng-logo.png"})]}),(0,r.jsx)(N,{children:(0,r.jsx)(f.Z,{})}),(0,r.jsx)(S,{children:(0,r.jsx)(Z,{})}),(0,r.jsx)(F,{onClick:()=>e(!0),children:(0,r.jsx)(W,{src:"/assets/resume/ng-resume.png"})}),(0,r.jsx)(u.Z,{open:t,children:(0,r.jsxs)(O,{children:[(0,r.jsx)(A,{onClick:()=>e(!1),children:"x"}),(0,r.jsx)(L,{children:(0,r.jsx)(T,{children:(0,r.jsx)(X,{src:"/assets/resume/ng-resume.png"})})})]})})]})};var G=q},7202:function(n,t,e){"use strict";e.d(t,{a:function(){return c}});var i=e(7297),r=e(9521);function o(){let n=(0,i.Z)(["\n        @media only screen and (max-width: 600px) {\n            ","\n        }\n    "]);return o=function(){return n},n}let c=n=>(0,r.iv)(o(),n)},1043:function(n,t,e){"use strict";var i=e(7297),r=e(9521);function o(){let n=(0,i.Z)(["\n  body {\n    margin: 0;\n    padding: 0;\n    // font-family: Sans-Serif;\n    color: rgb(0,0,0, 0.6)\n  }\n* {\n    box-sizing: border-box;\n}\nhtml {\n    -webkit-font-smoothing: antialiased;\n    text-rendering: optimizelegibility;\n    scroll-behavior: smooth;s\n}\n"]);return o=function(){return n},n}let c=(0,r.vJ)(o());t.Z=c},9008:function(n,t,e){n.exports=e(3121)}},function(n){n.O(0,[774,332,424,888,179],function(){return n(n.s=6896)}),_N_E=n.O()}]);