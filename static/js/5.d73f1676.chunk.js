(this.webpackJsonpcontent=this.webpackJsonpcontent||[]).push([[5],{266:function(e,t,a){"use strict";var n=a(55),r=a(0),c=a.n(r),o=a(267),i=a(11);function l(){var e;window.gtag&&(e=window).gtag.apply(e,arguments)}var s={pageview:function(e){l("config",Object({NODE_ENV:"production",PUBLIC_URL:"/Personal-Site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GA_MEASUREMENT_ID,e)},event:function(e,t){l("event",e,t)}},m=["title","children"],d=Object(r.forwardRef)((function(e,t){var a=e.title,l=e.children,d=Object(n.a)(e,m),u=Object(i.g)(),f=Object(r.useCallback)((function(){s.pageview({page_path:u.pathname})}),[u]);return Object(r.useEffect)((function(){f()}),[f]),c.a.createElement("div",Object.assign({ref:t},d),c.a.createElement(o.a,null,c.a.createElement("title",null,a)),l)}));t.a=d},268:function(e,t,a){"use strict";var n=a(55),r=a(0),c=a.n(r),o=a(3),i=a(234),l=a(283),s=a(235),m=a(260),d=a(284),u=a(269),f=a(56),p=["className"],g=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.default,paddingTop:0,paddingBottom:10},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}));t.a=function(e){var t=e.className,a=Object(n.a)(e,p),r=g();return c.a.createElement("div",Object.assign({className:Object(o.a)(r.root,t)},a),c.a.createElement(l.a,{maxWidth:"lg"},c.a.createElement("hr",{size:"2"}),c.a.createElement("br",null),c.a.createElement(s.a,{variant:"h1",align:"center",color:"textPrimary",style:{fontWeight:"600"}},"Connect with me !"),c.a.createElement(m.a,{mt:1},c.a.createElement(d.a,{container:!0,spacing:3,justify:"center"},c.a.createElement(d.a,{item:!0,xs:10,sm:6,md:3},c.a.createElement(m.a,{display:"flex",justifyContent:"space-evenly"},c.a.createElement("a",{href:"https://github.com/alexperez52",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(u.a,{className:r.avatar},c.a.createElement("img",{alt:"icon",style:{width:50},src:f.a.Logo.github}))),c.a.createElement("a",{target:"_top",rel:"noopener noreferrer",href:"mailto:alexperez52@gmail.com"},c.a.createElement(u.a,{className:r.avatar},c.a.createElement("img",{alt:"icon",style:{width:30},src:f.a.Logo.gmail}))),c.a.createElement("a",{href:"https://www.linkedin.com/in/alexis-perez-mendoza-2570981a3/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(u.a,{className:r.avatar},c.a.createElement("img",{alt:"icon",style:{width:30},src:f.a.Logo.linkedin})))))))))}},269:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=a.n(c),i=(a(4),a(3)),l=a(5),s=a(46);var m=function(e,t){var a=function(t,a){return o.a.createElement(s.a,Object(n.a)({ref:a},t),e)};return a.muiName=s.a.muiName,o.a.memo(o.a.forwardRef(a))}(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));var d=c.forwardRef((function(e,t){var a=e.alt,o=e.children,l=e.classes,s=e.className,d=e.component,u=void 0===d?"div":d,f=e.imgProps,p=e.sizes,g=e.src,b=e.srcSet,h=e.variant,v=void 0===h?"circle":h,E=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),y=null,j=function(e){var t=e.src,a=e.srcSet,n=c.useState(!1),r=n[0],o=n[1];return c.useEffect((function(){if(t||a){o(!1);var e=!0,n=new Image;return n.src=t,n.srcSet=a,n.onload=function(){e&&o("loaded")},n.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,a]),r}({src:g,srcSet:b}),O=g||b,N=O&&"error"!==j;return y=N?c.createElement("img",Object(n.a)({alt:a,src:g,srcSet:b,sizes:p,className:l.img},f)):null!=o?o:O&&a?a[0]:c.createElement(m,{className:l.fallback}),c.createElement(u,Object(n.a)({className:Object(i.a)(l.root,l.system,l[v],s,!N&&l.colorDefault),ref:t},E),y)}));t.a=Object(l.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},272:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=(a(4),a(3)),i=a(87),l=a(5),s=c.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.raised,m=void 0!==s&&s,d=Object(r.a)(e,["classes","className","raised"]);return c.createElement(i.a,Object(n.a)({className:Object(o.a)(a.root,l),elevation:m?8:1,ref:t},d))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},273:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=(a(4),a(3)),i=a(5),l=["video","audio","picture","iframe","img"],s=c.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,m=e.component,d=void 0===m?"div":m,u=e.image,f=e.src,p=e.style,g=Object(r.a)(e,["children","classes","className","component","image","src","style"]),b=-1!==l.indexOf(d),h=!b&&u?Object(n.a)({backgroundImage:'url("'.concat(u,'")')},p):p;return c.createElement(d,Object(n.a)({className:Object(o.a)(i.root,s,b&&i.media,-1!=="picture img".indexOf(d)&&i.img),ref:t,style:h,src:b?u||f:void 0},g),a)}));t.a=Object(i.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(s)},274:function(e,t,a){"use strict";var n=a(69);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(89)).default)(r.default.createElement("path",{d:"M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"}),"Face");t.default=c},275:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=(a(4),a(3)),i=a(5),l=c.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(n.a)({className:Object(o.a)(a.root,i),ref:t},m))}));t.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},276:function(e,t,a){"use strict";var n=a(69);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(89)).default)(r.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web");t.default=c},277:function(e,t,a){"use strict";var n=a(69);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),c=(0,n(a(89)).default)(r.default.createElement("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"}),"AssignmentInd");t.default=c},285:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),o=(a(4),a(3)),i=a(5),l=a(212),s=c.forwardRef((function(e,t){var a=e.children,i=e.classes,s=e.className,m=e.focusVisibleClassName,d=Object(r.a)(e,["children","classes","className","focusVisibleClassName"]);return c.createElement(l.a,Object(n.a)({className:Object(o.a)(i.root,s),focusVisibleClassName:Object(o.a)(m,i.focusVisible),ref:t},d),a,c.createElement("span",{className:i.focusHighlight}))}));t.a=Object(i.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(s)},288:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(234),o=a(266),i=a(55),l=a(33),s=a(3),m=a(283),d=a(284),u=a(260),f=a(235),p=a(56),g=["className"],b=Object(c.a)((function(e){return{root:Object(l.a)({backgroundSize:"cover",backgroundPosition:"center center",backgroundColor:e.palette.background.dark,backgroundRepeat:"no-repeat",paddingTop:100,paddingBottom:50},e.breakpoints.down("md"),{paddingTop:60,paddingBottom:60}),image:{marginLeft:100,position:"relative",perspectiveOrigin:"left center",perspective:1500,"& > img":{maxWidth:"80%",height:"auto",backfaceVisibility:"hidden"}},button:{backgroundColor:"#ff6469",padding:10,width:200}}}));var h=function(e){var t=e.className,a=Object(i.a)(e,g),n=b();return r.a.createElement("div",Object.assign({className:Object(s.a)(n.root,t)},a),r.a.createElement(m.a,{maxWidth:"lg"},r.a.createElement(d.a,{container:!0,spacing:3},r.a.createElement(d.a,{item:!0,xs:12,md:12},r.a.createElement(u.a,{display:"flex",gridGap:"40px"},r.a.createElement(u.a,{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",height:"100%"},r.a.createElement(f.a,{variant:"h1",color:"textPrimary",style:{fontSize:50},align:"center"},"Hello, I am Alexis Perez-Mendoza"),r.a.createElement(u.a,{mt:2,display:"flex"},r.a.createElement(f.a,{align:"center",variant:"body1",style:{fontSize:25},color:"textSecondary"},r.a.createElement(u.a,{display:"inline",color:"#ff6600"},"Welcome")," to my Personal Site. I'm a Junior studying Computer Science at ",r.a.createElement(u.a,{color:"#971a1f",display:"inline"},"Stony Brook University")," ","and an aspiring Software Engineer."))),r.a.createElement(u.a,{mt:3},r.a.createElement(d.a,{container:!0,spacing:3},r.a.createElement("img",{src:p.a.Large.prof,alt:"Profile",style:{width:200,borderRadius:100}}))))))))},v=a(268),E=a(252),y=a(272),j=a(285),O=a(273),N=a(275),w=a(276),k=a.n(w),x=a(277),S=a.n(x),C=a(274),z=a.n(C),R=a(22),_=["className"],P=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.default,paddingTop:30,paddingBottom:30},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},card:{width:340},media:{height:200}}}));var M=function(e){var t=e.className,a=Object(i.a)(e,_),n=P();return r.a.createElement("div",Object.assign({className:Object(s.a)(n.root,t)},a),r.a.createElement(m.a,{maxWidth:"lg"},r.a.createElement(d.a,{container:!0,justify:"space-evenly",spacing:3},r.a.createElement(d.a,{item:!0,container:!0,justify:"center",md:4,xs:12},r.a.createElement(E.a,{component:R.a,to:"/about",underline:"none"},r.a.createElement(y.a,{className:n.card},r.a.createElement(j.a,null,r.a.createElement(O.a,{className:n.media},r.a.createElement(z.a,{style:{height:200,width:340}})),r.a.createElement(N.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"About"),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Click here to read about me")))))),r.a.createElement(d.a,{item:!0,container:!0,justify:"center",md:4,xs:12},r.a.createElement(E.a,{component:R.a,to:"/projects",underline:"none"},r.a.createElement(y.a,{className:n.card},r.a.createElement(j.a,null,r.a.createElement(O.a,{className:n.media},r.a.createElement(k.a,{style:{height:200,width:340}})),r.a.createElement(N.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Projects"),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Click here to view my projects")))))),r.a.createElement(d.a,{item:!0,container:!0,justify:"center",md:4,xs:12},r.a.createElement(E.a,{component:R.a,to:"/resume",underline:"none"},r.a.createElement(y.a,{className:n.card},r.a.createElement(j.a,null,r.a.createElement(O.a,{className:n.media},r.a.createElement(S.a,{style:{height:200,width:340}})),r.a.createElement(N.a,null,r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Resume"),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",component:"p"},"Click here to view my Resume")))))))))},T=Object(c.a)((function(){return{root:{}}}));t.default=function(){var e=T();return r.a.createElement(o.a,{className:e.root,title:"Alexis | Home"},r.a.createElement(h,null),r.a.createElement(M,null),r.a.createElement(v.a,null))}}}]);
//# sourceMappingURL=5.d73f1676.chunk.js.map