(function(e){function t(t){for(var a,c,i=t[0],l=t[1],s=t[2],u=0,d=[];u<i.length;u++)c=i[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var l=n[c];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function c(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"75f2e5f4"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var s=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,n[1](s)}r[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"47a1":function(e,t,n){},"4dd7":function(e,t,n){"use strict";n("e01a9")},"54ed":function(e,t,n){"use strict";n("47a1")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"flex flex-col min-h-screen",id:"app"},o={class:"flex-grow"},c={class:""};function i(e,t,n,i,l,s){var u=Object(a["x"])("Header"),b=Object(a["x"])("router-view"),d=Object(a["x"])("Footer");return Object(a["q"])(),Object(a["d"])("div",r,[Object(a["e"])("header",null,[Object(a["h"])(u)]),Object(a["e"])("main",o,[Object(a["h"])(b)]),Object(a["e"])("footer",c,[Object(a["h"])(d)])])}var l={class:"p-10 px-15 flex items-center"},s={id:"title",class:"flex w-11/12 items-center"},u=Object(a["g"])(" SAMEER AJMANI "),b={id:"nav",class:"items-center md:mr-12 sm:mr-5 flex"},d={class:"inline-block text-lg px-4"},p=Object(a["g"])("Work"),h={class:"inline-block text-lg px-4"},f=Object(a["g"])("Blog"),v={class:"inline-block text-lg px-4"},m=Object(a["g"])("About");function g(e,t){var n=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",l,[Object(a["e"])("div",s,[Object(a["e"])("a",null,[Object(a["h"])(n,{to:"/"},{default:Object(a["C"])((function(){return[u]})),_:1})])]),Object(a["e"])("div",b,[Object(a["e"])("a",d,[Object(a["h"])(n,{to:"/work"},{default:Object(a["C"])((function(){return[p]})),_:1})]),Object(a["e"])("a",h,[Object(a["h"])(n,{to:"/"},{default:Object(a["C"])((function(){return[f]})),_:1})]),Object(a["e"])("a",v,[Object(a["h"])(n,{to:"/about"},{default:Object(a["C"])((function(){return[m]})),_:1})])])])}n("4dd7");const j={};j.render=g;var O=j,x={class:"p-10 px-15 flex items-center"},w={id:"title",class:"flex w-10/12 items-center"},y={class:"text-lg"},k=Object(a["e"])("div",{id:"nav",class:"items-center flex"},null,-1);function _(e,t,n,r,o,c){return Object(a["q"])(),Object(a["d"])("nav",x,[Object(a["e"])("div",w,[Object(a["e"])("a",y," © "+Object(a["z"])(o.date)+" SAMEER AJMANI ",1)]),k])}var I={data:function(){return{date:(new Date).getFullYear()}}};I.render=_;var C=I,M={components:{Header:O,Footer:C}};n("54ed");M.render=i;var S=M,P=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),q=n("cf05"),W=n.n(q),T={class:"home"},A=Object(a["e"])("img",{alt:"Vue logo",src:W.a},null,-1);function E(e,t,n,r,o,c){var i=Object(a["x"])("HelloWorld");return Object(a["q"])(),Object(a["d"])("div",T,[A,Object(a["h"])(i,{msg:"Welcome to Your Vue.js App"})])}Object(a["t"])("data-v-ebbc34ee");var H={class:"hello"},L=Object(a["f"])('<p data-v-ebbc34ee> For a guide and recipes on how to configure / customize this project,<br data-v-ebbc34ee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-cli documentation</a>. </p><h3 data-v-ebbc34ee>Installed CLI Plugins</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-ebbc34ee>babel</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-ebbc34ee>router</a></li></ul><h3 data-v-ebbc34ee>Essential Links</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Core Docs</a></li><li data-v-ebbc34ee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Forum</a></li><li data-v-ebbc34ee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Community Chat</a></li><li data-v-ebbc34ee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-ebbc34ee>Twitter</a></li><li data-v-ebbc34ee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>News</a></li></ul><h3 data-v-ebbc34ee>Ecosystem</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-router</a></li><li data-v-ebbc34ee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vuex</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-ebbc34ee>vue-devtools</a></li><li data-v-ebbc34ee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-loader</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-ebbc34ee>awesome-vue</a></li></ul>',7);function z(e,t,n,r,o,c){return Object(a["q"])(),Object(a["d"])("div",H,[Object(a["e"])("h1",null,Object(a["z"])(n.msg),1),L])}Object(a["r"])();var F={name:"HelloWorld",props:{msg:String}};n("8734");F.render=z,F.__scopeId="data-v-ebbc34ee";var J=F,N={name:"Home",components:{HelloWorld:J}};N.render=E;n("a4d3"),n("e01a");var R={key:0,class:"min-h-full mx-10 grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 auto-rows-auto gap-10"},D={class:"italic my-4"},B=["onClick"],Y={class:"content mt-4 w-4/6"},V=["innerHTML"],$=["onClick"],G=Object(a["e"])("a",null,"Read More",-1),K=[G],Q={key:1,class:"h-screen align-center justify-center text-center"},U=Object(a["e"])("div",{class:"text-gray-500 text-3xl mb-6"},"Fetching Data",-1),X=["src"];function Z(e,t,n,r,o,c){return o.loading?(Object(a["q"])(),Object(a["d"])("main",Q,[U,Object(a["e"])("img",{src:o.loadingImage,class:"w-24 m-auto",alt:""},null,8,X)])):(Object(a["q"])(),Object(a["d"])("main",R,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.posts,(function(e){return Object(a["q"])(),Object(a["d"])("div",{key:e.id,class:"content"},[Object(a["e"])("p",D,Object(a["z"])(e.date),1),Object(a["e"])("a",{onClick:function(t){return c.persist(e.id)},class:"my-4 cursor-pointer w-6/6 text-3xl hover:underline font-bold"},Object(a["z"])(e.title),9,B),Object(a["e"])("div",Y,[Object(a["e"])("p",{class:"",innerHTML:e.description.substring(0,140)+".."},null,8,V)]),Object(a["e"])("p",{onClick:function(t){return c.persist(e.id)},class:"my-3 cursor-pointer underline italic"},K,8,$)])})),128))]))}var ee=n("1da1"),te=(n("96cf"),n("159b"),n("a023")),ne={name:"Blog",data:function(){return{loading:!0,loadingImage:n("e8dd"),posts:te,error:"",text:""}},methods:{persist:function(e){var t=this;this.posts.forEach((function(n){n.id==e&&(console.log(n),localStorage.setItem("title",n.title),localStorage.setItem("description",n.description),localStorage.setItem("date",n.date),t.$router.push({path:"post"}))}))}},created:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.posts),e.loading=!1;case 2:case"end":return t.stop()}}),t)})))()}};ne.render=Z;var ae=ne,re={class:"about py-5 mx-10 md:mx-36 lg:mx-80 divide-y"},oe={class:"content mx-10"},ce={class:"text-lg italic"},ie={class:"content text-xl mt-4"},le={class:"text-4xl mb-9 font-bold"},se=["innerHTML"],ue=Object(a["e"])("div",{class:"my-10"},null,-1);function be(e,t,n,r,o,c){return Object(a["q"])(),Object(a["d"])("div",re,[Object(a["e"])("div",oe,[Object(a["e"])("h1",ce,Object(a["z"])(o.date),1),Object(a["e"])("div",ie,[Object(a["e"])("p",le,Object(a["z"])(o.title),1),Object(a["e"])("p",{class:"leading-8 text-xl",innerHTML:o.description},null,8,se)])]),ue])}var de={name:"Post",components:{},data:function(){return{title:"",date:"",description:""}},mounted:function(){this.title=localStorage.title,this.description=localStorage.description,this.date=localStorage.date}};de.render=be;var pe=de;Object(a["t"])("data-v-07d46238");var he={class:"about py-14 mx-10 md:mx-36 lg:mx-80"},fe=Object(a["e"])("div",{class:"content leading-8 mx-10"},[Object(a["e"])("h1",{class:"text-xl"},"Coming soon")],-1),ve=[fe];function me(e,t,n,r,o,c){return Object(a["q"])(),Object(a["d"])("div",he,ve)}Object(a["r"])();var ge={name:"Work",components:{}};n("d8c6");ge.render=me,ge.__scopeId="data-v-07d46238";var je=ge,Oe=[{path:"/",name:"Blog",component:ae},{path:"/post",name:"Post",component:pe},{path:"/work",name:"Work",component:je},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],xe=Object(P["a"])({history:Object(P["b"])("/"),routes:Oe}),we=xe;n("ba8c");Object(a["c"])(S).use(we).mount("#app")},8734:function(e,t,n){"use strict";n("902f")},"902f":function(e,t,n){},a023:function(e){e.exports=JSON.parse('[{"id":1,"date":"2021-09-02","title":"It\'s not about what you want","description":"Many people want to be successful in business. Many people want to be excellent coders. Many people want to have a great relationship. When I look at those that are the best in their crafts, it is not their desire that sets them apart from the crowd. It is their clear understanding of what it takes, and their resolve to do what it takes. </br> </br> What to be great in business? Prepare to be doubted by many. Want to be an excellent engineer, prepare to face the limits of your knowledge, prepare to sound dumb many times over. Want to be great at relationship, prepare to face rejections."},{"id":2,"date":"2021-09-07","title":"Consumption","description":"When procastinating, give yourself a hard rule -- you can only produce. No more consumption. You don\'t have do what you\'re procastinating about, but you do need to produce."},{"id":23,"date":"2021-09-09","title":"On expanding scope","description":"I reflected recently about the moments where I felt the happiest. The moments where I saw the largest gain, or experienced person growth. During these moments, the one constant was that I was thinking about something greater than myself — family, team, friends. </br> </br> Then I thought of the moments where I was the closest to causing irreparable damage. In these moments the constant was that I was internally focused, worried about myself, anxious."}]')},ba8c:function(e,t,n){},c0fc:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d8c6:function(e,t,n){"use strict";n("c0fc")},e01a9:function(e,t,n){},e8dd:function(e,t,n){e.exports=n.p+"img/hourglass.549947b6.gif"}});
//# sourceMappingURL=app.c85a8d79.js.map