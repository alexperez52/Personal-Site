(this.webpackJsonpcontent=this.webpackJsonpcontent||[]).push([[1],{199:function(e,A,a){},227:function(e,A,a){"use strict";a.r(A);var t=a(0),r=a.n(t),n=a(10),o=a.n(n),c=a(208),i=a(11),p=a(20),l=a(14),g=a(201),s=a.n(g),d=a(202),b=a(261),H=a(234),x=a(240),m=a(259),u=a(265),h=a(41),f=a(67),w=a.n(f),C={LIGHT:"LIGHT",ONE_DARK:"ONE_DARK"};function E(e){localStorage.setItem("settings",JSON.stringify(e))}var v=Object(t.createContext)(),y={direction:"ltr",responsiveFontSizes:!0,theme:C.LIGHT};function k(e){var A=e.settings,a=e.children,n=Object(t.useState)(A||y),o=Object(h.a)(n,2),c=o[0],i=o[1];return Object(t.useEffect)((function(){document.dir=c.direction}),[c]),r.a.createElement(v.Provider,{value:{settings:c,saveSettings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A=w.a.merge({},c,e);i(A),E(A)}}},a)}v.Consumer;var B=v;function D(){return Object(t.useContext)(B)}var N=a(19),P=a(207),O=a(263),j=["none","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 2px 2px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 3px 4px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 6px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 4px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 5px 8px -2px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 12px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 6px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 7px 16px -4px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 8px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 9px 18px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 10px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 11px 20px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 12px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 13px 22px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 14px 24px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 16px 28px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 18px 30px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 20px 32px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 22px 34px -8px rgba(0,0,0,0.50)","0 0 1px 0 rgba(0,0,0,0.70), 0 24px 36px -8px rgba(0,0,0,0.50)"],S={direction:"ltr",typography:{h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}},overrides:{MuiLinearProgress:{root:{borderRadius:3,overflow:"hidden"}},MuiListItemIcon:{root:{minWidth:32}},MuiChip:{root:{backgroundColor:"rgba(0,0,0,0.075)"}}}},I=[{name:C.ONE_DARK,palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#282C34",dark:"#1c2025",paper:"#282C34"},primary:{main:"#00000f"},secondary:{main:"#1c2025"},text:{primary:"#e6e5e8",secondary:"#adb0bb"}},shadows:j},{name:C.LIGHT,overrides:{MuiInputBase:{input:{"&::placeholder":{opacity:1,color:N.a.blueGrey[600]}}}},palette:{type:"light",action:{active:N.a.blueGrey[600]},background:{default:N.a.common.white,dark:"#f4f6f8",paper:N.a.common.white},primary:{main:N.a.grey[600]},secondary:{main:"#fffff"},text:{primary:N.a.blueGrey[900],secondary:N.a.blueGrey[600]}},shadows:["none","0 0 0 1px rgba(63,63,68,0.05), 0 1px 2px 0 rgba(63,63,68,0.15)","0 0 1px 0 rgba(0,0,0,0.31), 0 2px 2px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 3px 4px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 6px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 4px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 5px 8px -2px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 12px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 6px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 7px 16px -4px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 8px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 9px 18px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 10px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 11px 20px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 12px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 13px 22px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 14px 24px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 16px 28px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 18px 30px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 20px 32px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 22px 34px -8px rgba(0,0,0,0.25)","0 0 1px 0 rgba(0,0,0,0.31), 0 24px 36px -8px rgba(0,0,0,0.25)"]},{name:C.UNICORN,palette:{type:"dark",action:{active:"rgba(255, 255, 255, 0.54)",hover:"rgba(255, 255, 255, 0.04)",selected:"rgba(255, 255, 255, 0.08)",disabled:"rgba(255, 255, 255, 0.26)",disabledBackground:"rgba(255, 255, 255, 0.12)",focus:"rgba(255, 255, 255, 0.12)"},background:{default:"#2a2d3d",dark:"#222431",paper:"#2a2d3d"},primary:{main:"#a67dff"},secondary:{main:"#a67dff"},text:{primary:"#f6f5f8",secondary:"#9699a4"}},shadows:j}];function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},A=I.find((function(A){return A.name===e.theme}));A||(console.warn(new Error("The theme ".concat(e.theme," is not valid"))),A=I[0]);var a=Object(P.a)(w.a.merge({},S,A,{direction:e.direction}));return e.responsiveFontSizes&&(a=Object(O.a)(a)),a}var L=a(55),z=a(22),Q=a(3),M=a(250),U=a(251),Z=a(260),R=a(252),W=a(253),K=a(33),T=a(47),q=a(262),X=a(46),F=a(83),Y=a.n(F),V=Object(H.a)((function(e){return{root:{width:"75px",height:"48px",padding:0,display:"flex",alignItems:"center",justifyContent:"center"},track:{width:"40px",height:"20px",borderRadius:"10px",borderStyle:"solid",borderWidth:"4px",borderColor:"grey",backgroundColor:"white"},switchBase:{color:"black","&$checked":{color:"#6e40c9",transform:"translateX(30px)"},"&$checked + $track":{backgroundColor:"black",borderRadius:"10px",borderStyle:"solid",borderWidth:"4px",borderColor:"#6e40c9"}},checked:{},thumb:{width:"25px",height:"25px",transform:"translateX(15px)"}}}));var J=function(){var e=V(),A=D(),a=A.settings,n=A.saveSettings,o=Object(t.useState)({checkedA:a.theme===C.ONE_DARK,direction:a.direction,responsiveFontSizes:a.responsiveFontSizes,theme:a.theme}),c=Object(h.a)(o,2),i=c[0],p=c[1];return r.a.createElement(q.a,{classes:{root:e.root,switchBase:e.switchBase,checked:e.checked,track:e.track,thumb:e.thumb},checked:i.checkedA,onChange:function(e){p(Object(T.a)(Object(T.a)({},i),{},Object(K.a)({},e.target.name,e.target.checked))),i.checkedA?i.theme=C.LIGHT:i.theme=C.ONE_DARK,n(i)},name:"checkedA",size:"medium",checkedIcon:r.a.createElement(X.a,{style:{color:"#ffdf5d",backgroundColor:"#6e40c9",borderRadius:"50%",borderStyle:"solid",borderWidth:"6px",borderColor:"#6e40c9",width:30,height:30,transform:"rotate(125deg)"}},r.a.createElement(Y.a,null)),icon:r.a.createElement(X.a,{style:{color:"#ffdf5d",backgroundColor:"#263238",borderRadius:"50%",borderStyle:"solid",borderWidth:"6px",borderColor:"#263238",width:30,height:30,transform:"rotate(125deg)"}},r.a.createElement(Y.a,null))})},_=a(56),$=(a(199),["className"]),ee=Object(H.a)((function(e){return{root:{backgroundColor:e.palette.background.default},toolbar:{height:64},logo:{marginRight:e.spacing(2)},link:{fontWeight:e.typography.fontWeightBold,"& + &":{marginLeft:e.spacing(3)},fontSize:18},divider:{width:1,height:32,marginLeft:e.spacing(2),marginRight:e.spacing(2)}}}));var Ae=function(e){var A=e.className,a=Object(L.a)(e,$),t=ee();return r.a.createElement("div",null,r.a.createElement("header",{id:"topNavDesktop"},r.a.createElement(M.a,Object.assign({className:Object(Q.a)(t.root,A),color:"default"},a),r.a.createElement(U.a,{className:t.toolbar},r.a.createElement(z.a,{to:"/",style:{textDecoration:"none"}},r.a.createElement(Z.a,{flexGrow:1,display:"flex"},r.a.createElement("img",{src:_.a.Logo.Alex,style:{height:40},alt:"logo"}),r.a.createElement(Z.a,{color:"red",fontSize:"32px"},"lexis"))),r.a.createElement(Z.a,{flexGrow:1}),r.a.createElement(R.a,{className:t.link,color:"textSecondary",component:z.a,to:"/",underline:"none",variant:"body2"},"Home"),r.a.createElement(R.a,{className:t.link,color:"textSecondary",component:z.a,to:"/about",underline:"none",variant:"body2"},"About"),r.a.createElement(R.a,{className:t.link,color:"textSecondary",component:z.a,to:"/projects",underline:"none",variant:"body2"},"Projects"),r.a.createElement(R.a,{className:t.link,color:"textSecondary",component:z.a,to:"/resume",underline:"none",variant:"body2"},"Resume"),r.a.createElement(J,null),r.a.createElement(W.a,{className:t.divider})))))},ae=a(254),te=a(257),re=a(206),ne=a.n(re),oe=["className"],ce=Object(H.a)((function(e){return{background:{backgroundColor:"black"},modal:{paddingLeft:20,backgroundColor:"black",height:"100%"},root:{backgroundColor:e.palette.background.default},toolbar:{height:64},mobileDrawer:{width:256}}}));var ie=function(e){var A=e.className,a=Object(L.a)(e,oe),t=ce(),n=r.a.useState({right:!1}),o=Object(h.a)(n,2),c=o[0],i=o[1],p=function(e,A){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&i(Object(T.a)(Object(T.a)({},c),{},Object(K.a)({},e,A)))}},l=r.a.createElement(Z.a,{flexDirection:"column",display:"flex",height:"100%",alignContent:"center",justifyContent:"center"},r.a.createElement(Z.a,{p:2},r.a.createElement(R.a,{className:t.link,color:"textSecondary",component:z.a,to:"/",underline:"none",variant:"body2"},"Home")),r.a.createElement(Z.a,{p:2},r.a.createElement(R.a,{className:t.link,color:"textSecondary",component:z.a,to:"/about",underline:"none",variant:"body2"},"About")),r.a.createElement(Z.a,{p:2},r.a.createElement(R.a,{className:t.link,color:"textSecondary",component:z.a,to:"/projects",underline:"none",variant:"body2"},"Projects")),r.a.createElement(Z.a,{p:2},r.a.createElement(R.a,{className:t.link,color:"textSecondary",component:z.a,to:"/resume",underline:"none",variant:"body2"},"Resume")));return r.a.createElement("header",{id:"topNavSmall"},r.a.createElement(M.a,Object.assign({className:Object(Q.a)(t.root,A),color:"default"},a),r.a.createElement(U.a,{className:t.toolbar},r.a.createElement(Z.a,{flexGrow:1},r.a.createElement(R.a,{to:"/",style:{textDecoration:"none"}},r.a.createElement(Z.a,{flexGrow:1,display:"flex"},r.a.createElement("img",{src:_.a.Logo.Alex,style:{height:40},alt:"logo"}),r.a.createElement(Z.a,{color:"red",fontSize:"32px"},"lexis")))),r.a.createElement(Z.a,null,r.a.createElement(J,null)),r.a.createElement(Z.a,null,["right"].map((function(e){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement(te.a,{onClick:p(e,!0)},r.a.createElement(ne.a,null)),r.a.createElement(ae.a,{anchor:e,open:c[e],onClose:p(e,!1),classes:{paper:t.paper}},function(e){return r.a.createElement("div",{role:"presentation",onClick:p(e,!1),onKeyDown:p(e,!1)},r.a.createElement(ae.a,{anchor:"right",classes:{paper:t.mobileDrawer},open:e,variant:"temporary"},l))}(e)))}))))))},pe=Object(H.a)((function(e){return{root:{backgroundColor:e.palette.background.default,display:"flex",height:"100%",overflow:"hidden",width:"100%"},wrapper:{display:"flex",flex:"1 1 auto",overflow:"hidden",paddingTop:64},contentContainer:{display:"flex",flex:"1 1 auto",overflow:"hidden"},content:{flex:"1 1 auto",height:"100%",overflow:"auto"}}}));var le=function(e){var A=e.children,a=pe();return r.a.createElement("div",{className:a.root},r.a.createElement(Ae,null),r.a.createElement(ie,null),r.a.createElement("div",{className:a.wrapper},r.a.createElement("div",{className:a.contentContainer},r.a.createElement("div",{className:a.content},A))))},ge=a(86),se=a.n(ge),de=a(258),be=Object(H.a)((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.background.default,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",minHeight:"100%",padding:e.spacing(3)}}}));var He=function(){var e=be();return Object(t.useEffect)((function(){return se.a.start(),function(){se.a.done()}}),[]),r.a.createElement("div",{className:e.root},r.a.createElement(Z.a,{width:400},r.a.createElement(de.a,null)))},xe=[{path:"*",layout:le,routes:[{exact:!0,path:"/",component:Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,288))}))},{exact:!0,path:"/about",component:Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,290))}))},{exact:!0,path:"/projects",component:Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,291))}))},{exact:!0,path:"/resume",component:Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,289))}))},{exact:!0,path:"/404",component:Object(t.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,292))}))},{component:function(){return r.a.createElement(i.a,{to:"/404"})}}]}],me=function e(A){return A?r.a.createElement(t.Suspense,{fallback:r.a.createElement(He,null)},r.a.createElement(i.d,null,A.map((function(A,a){var n=A.guard||t.Fragment,o=A.layout||t.Fragment,c=A.component;return r.a.createElement(i.b,{key:a,path:A.path,exact:A.exact,render:function(a){return r.a.createElement(n,null,r.a.createElement(o,null,A.routes?e(A.routes):r.a.createElement(c,a)))}})})))):null};var ue=function(){return me(xe)},he=Object(p.a)(),fe=Object(l.b)({plugins:[].concat(Object(c.a)(Object(b.a)().plugins),[s()()])}),we=Object(H.a)((function(){return Object(x.a)({"@global":{"*":{boxSizing:"border-box",margin:0,padding:0},html:{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",height:"100%",width:"100%"},body:{height:"100%",width:"100%"},"#root":{height:"100%",width:"100%"}}})}));var Ce=function(){we();var e=D().settings;return r.a.createElement(m.a,{theme:G(e)},r.a.createElement(u.b,{jss:fe},r.a.createElement(d.a,{maxSnack:1},r.a.createElement(i.c,{history:he},r.a.createElement(ue,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=function(){var e=null;try{var A=localStorage.getItem("settings");A&&(e=JSON.parse(A))}catch(a){}return e}();o.a.render(r.a.createElement(k,{settings:Ee},r.a.createElement(Ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,A,a){"use strict";var t=a.p+"static/media/gmail.fe7d88fd.png",r=a.p+"static/media/github.237e2214.png",n=a.p+"static/media/instagram.acfef33a.png",o=a.p+"static/media/hackathon.cd1005f2.png",c=a.p+"static/media/resume.d0670d2a.png",i=a.p+"static/media/projects.9e904890.png",p=a.p+"static/media/about.a03a96d6.png",l=a.p+"static/media/items.083a4c82.png",g=a.p+"static/media/text.12c5c776.png",s=a.p+"static/media/prodict.ee2f8fd5.png",d=a.p+"static/media/snow.672f9dc3.png",b=a.p+"static/media/alex.3332b7b5.png",H=a.p+"static/media/profile.c1bf803a.jpg",x=a.p+"static/media/sbuhacks.67a1ce77.png",m=a.p+"static/media/miraflores1.d91da7aa.jpg",u=a.p+"static/media/hangzhou1.23f7130e.jpg",h=a.p+"static/media/hangzhou2.8cfed6f9.jpg",f=a.p+"static/media/hangzhou3.6b75125e.jpg",w=a.p+"static/media/shanghai1.0d315bbe.jpg",C=a.p+"static/media/shanghai2.8a757935.jpg",E=a.p+"static/media/shanghai3.98dd184b.jpg",v=a.p+"static/media/Targetallocator.97c7f39c.png",y=a.p+"static/media/userinstructions.45c8bb61.png",k=a.p+"static/media/pressrelease.dce5478d.png";A.a={Logo:{gmail:t,github:r,instagram:n,linkedin:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABKNAAASjQEphQ1dAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAvFQTFRF////AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3AHe3dPNe8AAAAPp0Uk5TAAECAwQFBgcICQoLDA0ODxAREhMU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",Alex:b},Large:{prof:H,hack:o,sbuhacks:x,miraflores:m,hangzhou1:u,hangzhou2:h,hangzhou3:f,shanghai1:w,shanghai2:C,shanghai3:E},Cards:{targetalloc:v,Resume:c,Projects:i,About:p,Ediboo:l,Clay:g,Prodict:s,Snow:d,UserInstructions:y,PressRelease:k}}}},[[227,2,3]]]);
//# sourceMappingURL=main.56eefe65.chunk.js.map