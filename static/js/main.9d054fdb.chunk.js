(this["webpackJsonplottery-react"]=this["webpackJsonplottery-react"]||[]).push([[0],{212:function(e,t,a){e.exports=a(419)},217:function(e,t,a){},419:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(26),c=a.n(l),s=a(21),m=(a(217),a(13)),o=a(10),u=a(426),i=a(427),E=a(428),d=a(45),p=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{bg:"dark",variant:"dark",fixed:"top",expand:"md",className:"header"},r.a.createElement(s.b,{className:"navbar-brand",variant:"danger",exact:!0,to:"/"},r.a.createElement(d.b,null)," Lott\xf3 statisztika"),r.a.createElement("button",{onClick:function(){return c(!l)},type:"button","aria-label":"Toggle navigation",className:l?"navbar-toggler collapsed open":"navbar-toggler collapsed"},r.a.createElement("div",null)),r.a.createElement(i.a.Collapse,{id:"basic-navbar-nav",className:l?"open":null},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(s.b,{activeClassName:"active",className:"nav-link",exact:!0,to:"/"},"Kezd\u0151lap"),r.a.createElement(s.b,{activeClassName:"active",className:"nav-link",to:"/otos"},"\xd6t\xf6s lott\xf3"),r.a.createElement(s.b,{activeClassName:"active",className:"nav-link",to:"/hatos"},"Hatos lott\xf3"),r.a.createElement(s.b,{activeClassName:"active",className:"nav-link",to:"/hetes"},"Skandin\xe1v lott\xf3")))),l?r.a.createElement("div",{className:"overlay"}):null)},b=a(170),f=a(171),h=a(184),v=a(183),y=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__icon"},r.a.createElement(d.c,null)),r.a.createElement("div",{className:"footer__icon"},r.a.createElement(d.a,null)),r.a.createElement("div",{className:"footer__icon"},r.a.createElement(d.d,null)))}}]),a}(r.a.Component),g=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"loading__inner"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},k=a(101),N=a.n(k),_=a(172),w=a(173),j=a.n(w),x=function(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(null),s=Object(m.a)(c,2),o=s[0],u=s[1],i=Object(n.useState)(!1),E=Object(m.a)(i,2),d=E[0],p=E[1],b=null;return e.queryType&&(b="".concat("https://cors-anywhere.herokuapp.com/").concat("https://bet.szerencsejatek.hu/cmsfiles/").concat(e.queryType,".json")),Object(n.useEffect)((function(){null!==b&&function(){var e=Object(_.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,j.a.get(b);case 4:t=e.sent,l(t.data),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),u(e.t0),console.error("%cData Fetching Error:","font-size: 18px",e.t0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(){return e.apply(this,arguments)}}()()}),[b]),{response:r,error:o,loading:d}},O=a(423),z=a(424),C=function(e){return r.a.createElement("div",{className:"box  text-center"},r.a.createElement("div",{className:"box__img type-".concat(e.type)}),e.text,r.a.createElement("div",{className:"box__numbers"},e.items),e.button?r.a.createElement("div",{className:"box__button"},e.button):null)},S=function(e){var t,a,n=e.data,l=e.type,c=[],s=null,m=r.a.createElement(g,null);return n&&(t=n.date,a=n.week,s=r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,"A ",a,". h\xe9ten kisorsolt nyer\u0151sz\xe1mok:"),r.a.createElement("small",null,t)),n.numbers.map((function(e,t){return c.push(r.a.createElement("div",{className:"box__numbers__item",key:t},e))})),m=r.a.createElement(C,{type:l,text:s,items:c})),m},D=a(422),M=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),l=a[0],c=a[1],s=[],o=function(){for(var t=[],a=0;a<e.type;a++){for(var n=!0,r=Math.floor(Math.random()*e.highest)+1,l=0;l<e.highest;l++)t[l]===r&&(n=!1);n?t.push(r):a--}return t.sort((function(e,t){return e-t})),t};if(l.length>0)l.map((function(e,t){return s.push(r.a.createElement("div",{className:"box__numbers__item",key:t},e))}));else for(var u=0;u<e.type;u++)s.push(r.a.createElement("div",{className:"box__numbers__item",key:u},"?"));var i=r.a.createElement(D.a,{variant:"lightgreen",onClick:function(){c(o)}},"lott\xf3 sz\xe1m gener\xe1l\xe1s");return r.a.createElement(C,{type:e.type,items:s,button:i})},F=function(e){var t=e.dataFive,a=e.dataSix,n=e.dataSeven;return t&&n&&a?r.a.createElement("div",{className:"main__content"},r.a.createElement("h2",null,"Kor\xe1bbi nyer\u0151sz\xe1mok"),r.a.createElement(O.a,{className:"latestNumbers"},r.a.createElement(z.a,{xs:12,sm:6,lg:{span:4,offset:0}},r.a.createElement(S,{data:t.drawings[0],type:"5"})),r.a.createElement(z.a,{xs:12,sm:6,lg:{span:4,offset:0}},r.a.createElement(S,{data:a.drawings[0],type:"6"})),r.a.createElement(z.a,{xs:12,sm:{span:6,offset:3},lg:{span:4,offset:0}},r.a.createElement(S,{data:n.drawings[0],type:"7"}))),r.a.createElement("h2",null,"Lott\xf3 sz\xe1mok gener\xe1l\xe1sa"),r.a.createElement(O.a,{className:"randomNumbers"},r.a.createElement(z.a,{xs:12,sm:6,lg:{span:4,offset:0}},r.a.createElement(M,{highest:"90",type:"5"})),r.a.createElement(z.a,{xs:12,sm:6,lg:{span:4,offset:0}},r.a.createElement(M,{highest:"45",type:"6"})),r.a.createElement(z.a,{xs:12,sm:{span:6,offset:3},lg:{span:4,offset:0}},r.a.createElement(M,{highest:"35",type:"7"})))):r.a.createElement(g,null)},T=a(425),q=function(e){var t=e.data,a=e.number,n=t.slice(0,a).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.number),r.a.createElement("td",null,e.ratio),r.a.createElement("td",null,e.drawCount))}));return r.a.createElement(T.a,{responsive:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"ar\xe1ny"),r.a.createElement("th",null,"h\xfaz\xe1sok sz\xe1ma"))),r.a.createElement("tbody",null,n))},H=a(104),K=a(23),L=function(e){var t=e.data,a=e.size,n=t.map((function(e){return e.drawCount})),l=Math.min.apply(Math,Object(H.a)(n)),c=Math.max.apply(Math,Object(H.a)(n)),s=function(e){return 10*Math.ceil(e/10)},m=s(l-40),o=s(c+10);return r.a.createElement("div",{style:{width:"100%",height:10*a}},r.a.createElement(K.e,null,r.a.createElement(K.b,{data:t,layout:"vertical",margin:{top:5,right:30,left:20,bottom:5}},r.a.createElement(K.c,{strokeDasharray:"3 3"}),r.a.createElement(K.h,{dataKey:"number",type:"number",domain:[0,a]}),r.a.createElement(K.g,{type:"number",domain:[m,o]}),r.a.createElement(K.f,null),r.a.createElement(K.d,null),r.a.createElement(K.a,{dataKey:"drawCount",name:"H\xfaz\xe1sok sz\xe1ma",fill:"#93cf2c"}))))},B=function(e){var t=e.data,a=e.number,n=t.slice(0,a).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e[0]),r.a.createElement("td",null,e[1]),r.a.createElement("td",null),r.a.createElement("td",null))}));return r.a.createElement(T.a,{responsive:"sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"h\xfaz\xe1sok sz\xe1ma"),r.a.createElement("th",null,"els\u0151 h\xfaz\xe1s d\xe1tuma"),r.a.createElement("th",null,"utols\xf3 h\xfaz\xe1s d\xe1tuma"))),r.a.createElement("tbody",null,n))},J=function(e){var t=e.data,a=e.position,n=t.slice().reverse();return r.a.createElement(O.a,{className:"latestNumbers"},r.a.createElement(z.a,{sm:12,md:6},r.a.createElement("h4",null,a,". poz\xedci\xf3ban leggyakrabban kih\xfazott sz\xe1mok"),r.a.createElement(B,{data:t,number:5})),r.a.createElement(z.a,{sm:12,md:6},r.a.createElement("h4",null,a,". poz\xedci\xf3ban legritk\xe1bban kih\xfazott sz\xe1mok"),r.a.createElement(B,{data:n,number:5})))},W=function(e){var t,a=e.data,n=e.type,l=e.lotteryData,c=function(e){var t=[];return Object.entries(e).forEach((function(e){var a=Object(m.a)(e,2),n=a[0],r=a[1];return t.push({number:n,drawCount:r.drawCount,ratio:r.ratio})})),t.filter((function(e){return e.number>0}))},s=c(a).sort((function(e,t){return new Date(t.drawCount)-new Date(e.drawCount)})),o=c(a).sort((function(e,t){return new Date(e.drawCount)-new Date(t.drawCount)}));switch(n){case 7:t=35;break;case 6:t=45;break;case 5:default:t=90}var u={},i=l.map((function(e){return e.numbers})),E=function(e){return Object.entries(e).sort((function(e,t){return t[1]-e[1]}))},d=function(e){for(var t=function(t){var a=e.map((function(e){return e[t]}));u[t]={},a.forEach((function(e){u[t][e]=u[t][e]?u[t][e]+1:1})),u[t]=E(u[t])},a=0;a<e[0].length;++a)t(a);return u}(i);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(O.a,{className:"latestNumbers"},r.a.createElement(z.a,{sm:12,md:6},r.a.createElement("h2",null,"Leggyakrabban kih\xfazott sz\xe1mok"),r.a.createElement(q,{data:s,number:n})),r.a.createElement(z.a,{sm:12,md:6},r.a.createElement("h2",null,"Legritk\xe1bban kih\xfazott sz\xe1mok"),r.a.createElement(q,{data:o,number:n})))),r.a.createElement(L,{data:c(a),size:t}),r.a.createElement(J,{data:d[0],position:1}),r.a.createElement(J,{data:d[1],position:2}),r.a.createElement(J,{data:d[2],position:3}),r.a.createElement(J,{data:d[3],position:4}),r.a.createElement(J,{data:d[4],position:5}),n>5?r.a.createElement(J,{data:d[5],position:6}):null,n>6?r.a.createElement(J,{data:d[6],position:7}):null)},A=function(e){var t=e.data,a=e.type;return t?r.a.createElement("div",{className:"main__content"},r.a.createElement("h1",null,"\xd6t\xf6s"),r.a.createElement(W,{data:t.numberStatistics,type:a,lotteryData:t.drawings})):r.a.createElement(g,null)},I=function(e){var t=e.data,a=e.type;return t?r.a.createElement("div",{className:"main__content"},r.a.createElement("h1",null,"Hatos"),r.a.createElement(W,{data:t.numberStatistics,type:a,lotteryData:t.drawings})):r.a.createElement(g,null)},P=function(e){var t=e.data,a=e.type;return t?r.a.createElement("div",{className:"main__content"},r.a.createElement("h1",null,"Hetes"),r.a.createElement(W,{data:t.numberStatistics,type:a,lotteryData:t.drawings})):r.a.createElement(g,null)},$=function(){return r.a.createElement("div",{className:"main__content"},r.a.createElement("h2",{className:"mainContent__title"},"Oops! Page not found!"),r.a.createElement("div",{className:"error404"},r.a.createElement("div",{className:"glitch","data-text":"404"},"404")))},G=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(null),s=Object(m.a)(c,2),i=s[0],E=s[1],d=Object(n.useState)(null),b=Object(m.a)(d,2),f=b[0],h=b[1],v=x({queryType:"otos"}),k=x({queryType:"hatos"}),N=x({queryType:"skandi"}),_=r.a.createElement("div",{className:"main__content"},r.a.createElement(g,null));return Object(n.useEffect)((function(){null!==v.response&&l(v.response),null!==k.response&&E(k.response),null!==N.response&&h(N.response)}),[v.response,k.response,N.response]),r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(u.a,{className:"main"},r.a.createElement(n.Suspense,{fallback:_}),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/otos"},r.a.createElement(A,{data:a,type:5})),r.a.createElement(o.a,{path:"/hatos"},r.a.createElement(I,{data:i,type:6})),r.a.createElement(o.a,{path:"/hetes"},r.a.createElement(P,{data:f,type:7})),r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(F,{dataFive:a,dataSix:i,dataSeven:f})),r.a.createElement(o.a,{component:$})),r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[212,1,2]]]);
//# sourceMappingURL=main.9d054fdb.chunk.js.map