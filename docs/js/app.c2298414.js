(function(e){function t(t){for(var o,i,s=t[0],c=t[1],l=t[2],u=0,b=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&b.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d7e32f88"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"36a5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"flex flex-col min-h-screen",id:"app"},r={class:"flex-grow tracking-wider"},i={class:""};function s(e,t,n,s,c,l){var u=Object(o["y"])("Header"),d=Object(o["y"])("router-view"),b=Object(o["y"])("Footer");return Object(o["r"])(),Object(o["d"])("div",a,[Object(o["e"])("header",null,[Object(o["h"])(u)]),Object(o["e"])("main",r,[Object(o["h"])(d)]),Object(o["e"])("footer",i,[Object(o["h"])(b)])])}Object(o["u"])("data-v-107b7cbe");var c={class:"p-10 px-15 flex items-center"},l={id:"title",class:"flex w-10/12 items-center"},u={class:"text-4xl"},d=Object(o["g"])(" Sameer "),b=Object(o["e"])("span",{class:"italic"},"Ajmani",-1),h={id:"nav",class:"items-center hidden md:flex md:mr-12"},p={class:"inline-block text-lg px-3"},m=Object(o["g"])("about"),f={class:"inline-block text-lg px-3"},g=Object(o["g"])("blog"),v={class:"inline-block text-lg px-3"},j=Object(o["g"])("work"),O=Object(o["e"])("span",{class:"top"},null,-1),y=Object(o["e"])("span",{class:"middle"},null,-1),w=Object(o["e"])("span",{class:"bottom"},null,-1),k=[O,y,w],I={class:"overlay-menu"},x=Object(o["g"])("About"),A=Object(o["g"])("Blog"),_=Object(o["g"])("Work");function C(e,t,n,a,r,i){var s=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["d"])("nav",c,[Object(o["e"])("div",l,[Object(o["e"])("a",u,[Object(o["h"])(s,{to:"/"},{default:Object(o["D"])((function(){return[d,b]})),_:1})])]),Object(o["e"])("div",h,[Object(o["e"])("a",p,[Object(o["h"])(s,{to:"/about"},{default:Object(o["D"])((function(){return[m]})),_:1})]),Object(o["e"])("a",f,[Object(o["h"])(s,{to:"/"},{default:Object(o["D"])((function(){return[g]})),_:1})]),Object(o["e"])("a",v,[Object(o["h"])(s,{to:"/work"},{default:Object(o["D"])((function(){return[j]})),_:1})])]),Object(o["e"])("div",{onClick:t[0]||(t[0]=function(e){return r.isActive=!r.isActive,r.isOpen=!r.isOpen}),class:Object(o["n"])([{active:r.isActive},"button_container md:hidden items-center"]),id:"toggle"},k,2),Object(o["e"])("div",{class:Object(o["n"])([{open:r.isOpen},"overlay"]),id:"overlay"},[Object(o["e"])("nav",I,[Object(o["e"])("ul",null,[Object(o["e"])("li",null,[Object(o["e"])("a",{onClick:t[1]||(t[1]=function(e){return r.isActive=!r.isActive,r.isOpen=!r.isOpen}),class:""},[Object(o["h"])(s,{to:"/about"},{default:Object(o["D"])((function(){return[x]})),_:1})])]),Object(o["e"])("li",null,[Object(o["e"])("a",{onClick:t[2]||(t[2]=function(e){return r.isActive=!r.isActive,r.isOpen=!r.isOpen}),class:""},[Object(o["h"])(s,{to:"/"},{default:Object(o["D"])((function(){return[A]})),_:1})])]),Object(o["e"])("li",null,[Object(o["e"])("a",{onClick:t[3]||(t[3]=function(e){return r.isActive=!r.isActive,r.isOpen=!r.isOpen}),class:""},[Object(o["h"])(s,{to:"/work"},{default:Object(o["D"])((function(){return[_]})),_:1})])])])])],2)])}Object(o["s"])();var S={data:function(){return{isOpen:!1,isActive:!1}}};n("9532");S.render=C,S.__scopeId="data-v-107b7cbe";var T=S,M={class:"px-10 py-5 flex items-center"},P={id:"title",class:"flex w-10/12 items-center"},W={class:"text-md"},D=Object(o["e"])("div",{id:"nav",class:"items-center flex"},null,-1);function H(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("nav",M,[Object(o["e"])("div",P,[Object(o["e"])("a",W," © "+Object(o["A"])(r.date)+" SAMEER AJMANI ",1)]),D])}var B={data:function(){return{date:(new Date).getFullYear()}}};B.render=H;var N=B,E={components:{Header:T,Footer:N}};n("761b");E.render=s;var L=E,F=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),J=n("cf05"),R=n.n(J),Y={class:"home"},q=Object(o["e"])("img",{alt:"Vue logo",src:R.a},null,-1);function V(e,t,n,a,r,i){var s=Object(o["y"])("HelloWorld");return Object(o["r"])(),Object(o["d"])("div",Y,[q,Object(o["h"])(s,{msg:"Welcome to Your Vue.js App"})])}Object(o["u"])("data-v-ebbc34ee");var z={class:"hello"},$=Object(o["f"])('<p data-v-ebbc34ee> For a guide and recipes on how to configure / customize this project,<br data-v-ebbc34ee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-cli documentation</a>. </p><h3 data-v-ebbc34ee>Installed CLI Plugins</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-ebbc34ee>babel</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-ebbc34ee>router</a></li></ul><h3 data-v-ebbc34ee>Essential Links</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Core Docs</a></li><li data-v-ebbc34ee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Forum</a></li><li data-v-ebbc34ee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>Community Chat</a></li><li data-v-ebbc34ee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-ebbc34ee>Twitter</a></li><li data-v-ebbc34ee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>News</a></li></ul><h3 data-v-ebbc34ee>Ecosystem</h3><ul data-v-ebbc34ee><li data-v-ebbc34ee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-router</a></li><li data-v-ebbc34ee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vuex</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-ebbc34ee>vue-devtools</a></li><li data-v-ebbc34ee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-ebbc34ee>vue-loader</a></li><li data-v-ebbc34ee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-ebbc34ee>awesome-vue</a></li></ul>',7);function G(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",z,[Object(o["e"])("h1",null,Object(o["A"])(n.msg),1),$])}Object(o["s"])();var K={name:"HelloWorld",props:{msg:String}};n("8734");K.render=G,K.__scopeId="data-v-ebbc34ee";var Q=K,U={name:"Home",components:{HelloWorld:Q}};U.render=V;n("a4d3"),n("e01a");var X={key:0,class:"min-h-full mx-10 grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 auto-rows-auto gap-10"},Z={class:"italic my-4"},ee=["onClick"],te={class:"content mt-4 w-5/6"},ne=["innerHTML"],oe={class:"my-3 underline italic"},ae=["onClick"],re={key:1,class:"h-screen align-center justify-center text-center"},ie=Object(o["e"])("div",{class:"text-gray-500 text-3xl mb-6"},"Fetching Data",-1),se=["src"];function ce(e,t,n,a,r,i){return r.loading?(Object(o["r"])(),Object(o["d"])("main",re,[ie,Object(o["e"])("img",{src:r.loadingImage,class:"w-24 m-auto",alt:""},null,8,se)])):(Object(o["r"])(),Object(o["d"])("main",X,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(r.posts,(function(e){return Object(o["r"])(),Object(o["d"])("div",{key:e.id,class:"content w-6/6"},[Object(o["e"])("p",Z,Object(o["A"])(e.date),1),Object(o["e"])("a",{onClick:function(t){return i.persist(e.id)},class:"my-4 cursor-pointer text-3xl hover:underline font-semibold"},Object(o["A"])(e.title),9,ee),Object(o["e"])("div",te,[Object(o["e"])("p",{class:"text-lg",innerHTML:e.description.substring(0,100)+".."},null,8,ne)]),Object(o["e"])("p",oe,[Object(o["e"])("a",{onClick:function(t){return i.persist(e.id)},class:"cursor-pointer"},"Read More",8,ae)])])})),128))]))}var le=n("1da1"),ue=(n("96cf"),n("159b"),n("a023")),de={name:"Blog",data:function(){return{loading:!0,loadingImage:n("e8dd"),posts:ue,error:"",text:""}},methods:{persist:function(e){var t=this;this.posts.forEach((function(n){n.id==e&&(localStorage.setItem("title",n.title),localStorage.setItem("description",n.description),localStorage.setItem("date",n.date),t.$router.push({path:"post"}))}))}},created:function(){var e=this;return Object(le["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!1;case 1:case"end":return t.stop()}}),t)})))()}};de.render=ce;var be=de,he={class:"about py-5 mx-10 md:mx-36 lg:mx-80 divide-y divide-gray-300"},pe={class:"content"},me={class:"text-lg italic"},fe={class:"content text-xl mt-4"},ge={class:"text-4xl mb-9 font-bold"},ve=["innerHTML"],je=Object(o["e"])("div",{class:"my-10"},null,-1);function Oe(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",he,[Object(o["e"])("div",pe,[Object(o["e"])("h1",me,Object(o["A"])(r.date),1),Object(o["e"])("div",fe,[Object(o["e"])("p",ge,Object(o["A"])(r.title),1),Object(o["e"])("p",{class:"leading-8 text-xl",innerHTML:r.description},null,8,ve)])]),je])}var ye={name:"Post",components:{},data:function(){return{title:"",date:"",description:""}},mounted:function(){this.title=localStorage.title,this.description=localStorage.description,this.date=localStorage.date}};ye.render=Oe;var we=ye;Object(o["u"])("data-v-07d46238");var ke={class:"about py-14 mx-10 md:mx-36 lg:mx-80"},Ie=Object(o["e"])("div",{class:"content leading-8 mx-10"},[Object(o["e"])("h1",{class:"text-xl"},"Coming soon")],-1),xe=[Ie];function Ae(e,t,n,a,r,i){return Object(o["r"])(),Object(o["d"])("div",ke,xe)}Object(o["s"])();var _e={name:"Work",components:{}};n("d8c6");_e.render=Ae,_e.__scopeId="data-v-07d46238";var Ce=_e,Se=[{path:"/",name:"Blog",component:be},{path:"/post",name:"Post",component:we},{path:"/work",name:"Work",component:Ce},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Te=Object(F["a"])({history:Object(F["b"])("/"),routes:Se}),Me=Te;n("ba8c");Object(o["c"])(L).use(Me).mount("#app")},"761b":function(e,t,n){"use strict";n("e691")},8734:function(e,t,n){"use strict";n("902f")},"902f":function(e,t,n){},9532:function(e,t,n){"use strict";n("36a5")},a023:function(e){e.exports=JSON.parse('[{"id":5,"date":"2021-10-02","title":"Instead","description":"A simple substitude might change a habit. </br> </br> Instead of a snack, brush your teeth.</br> </br> Instead of a nap, go for a walk. </br> </br>Instead of a nasty tweet or cutting remark, write down in a private notebook.</br> </br> Instead of the elevator, take the stairs. </br> </br>Instead of doomscrolling, send someone a nice note. </br> </br>Instead of an angry email, make a phone call. Instead of a purchase seeking joy, consider donation."},{"id":4,"date":"2021-09-26","title":"Become a person who Actually Does Things","description":"There are two kinds of people in the world: People who actually do things, and people who don\'t.  </br></br> What do I actually mean by this? To achieve a goal, this breaks down into two parts: figure out what needs to be done, and actually do it. </br></br> As stated, this sounds completely trivial. But I think there is a really important and non-obvious point here. Some part of me is convinced that the main bottleneck for achieving my goals is being smart, coming up with the best plan, getting all of the necessary information. And this is true! It doesn\'t matter how good you are at doing things, if what you\'re doing is crap. But it also doesn\'t matter how good my plan is if I never act upon it. </br></br>And it\'s really easy to miss this point. It\'s easy to always think \\"I can do this tomorrow\\" or \\"this is not a priority\\" or \\"this would never work\\". And it\'s hard, because sometimes those thoughts are correct. But I find, unless I put in active effort, I\'m the kind of person who\'ll always have those thoughts. I\'ll never actually act upon my goals, change things about my life. </br></br>One of the main symptoms of this is that I\'m always aware of my problems in life, and will often aware of them for a very long. I\'ll notice that I don\'t exercise enough, that I\'m not enjoying the courses I\'m studying, that I really dislike being single, that I dont have enough time to do what I find most fulfilling and that I am a total wasteman. But there wont be a connection in my mind from \\"this is a problem\\" to  \\"what am I going to do about it\\". It\'s not that I think through the problem, and conclude that I can\'t do anything, it never feels like there\'s a question to be asked in the first place! And I think this is a problem that extends beyond me - I notice some amount of this in most of my friends, and I think it\'s inceredibly widespread. There seems to be a mental block between \\"things are not as I want them to be\\" and \\"I can actually to something about it\\" </br></br> I\'m writing this post not to complain about how much it sucks, it\'s because I think this is a solvable problem. Being the kind of person who does things, an agent, is a skill, and I think it is a trainable skill. And this is hard, and won\'t work perfectly, but there\'s a lot of room for progress. And this is one of the most valuable skills I\'ve ever tried developing. </br></br>The main symptom is that, in the movement, acting upon your desire never feels urgent. It never feels important and can be put off. Or it never feels possible, the problem just feels like a fact of life. And so the solution must center on solving the problem in the movement. And the solution that worked for me, is to make it part of your identity to be an agent. Make it a point of principle to do things, not because the thing is necessarily the perfect action, but because I choose the life where I do things, over the life where I always wait for the perfect opportunity. </br></br>Notice the small problem, and fix them. Notice when the jug of water is empty, and be the one to fill it. Notice when you say \\"oh, I can do this tomorrow\\" and do it today. Notice when you think \\"I should get round to this sometime\\" and actually do it. Notice when something is inefficient, notice the thing nobody is doing, and be the person who does it! </br></br> It doesn\'t matter if I\'m not doing the right thing, because what I\'m doing is not that important. I can close off the paralysing thoughts, not by answering them on their own terms, but by realising that the choice I make today affects the kind of person I\'ll be for the rest of my life. And that that\'s far more important than whatever trivial bullshit is going on in my life today. And thus I train the habit of actually doing things.  </br></br>And it doesn\'t even matter if I do make the wrong and imperfect choices in all of the day-to-day mundanity. What matters is that, when that one golden opportunity comes along, I am that kind of person who will take it. A thousand tiny losses are nothing against the big win that really counts. </br></br>If there\'s one thing you take from this post, let it be this: notice the next time you worry over a choice, or pass up an opportunity. And ask yourself not \\"what is the right decision\\" but rather \\"which decision will get me closer to the kind of person I want to be\\"."},{"id":3,"date":"2021-09-20","title":"On expanding scope","description":"I reflected recently about the moments where I felt the happiest. The moments where I saw the largest gain, or experienced person growth. During these moments, the one constant was that I was thinking about something greater than myself — family, team, friends. </br> </br> Then I thought of the moments where I was the closest to causing irreparable damage. In these moments the constant was that I was internally focused, worried about myself, anxious."},{"id":2,"date":"2021-09-07","title":"Consumption","description":"When procastinating, give yourself a hard rule -- you can only produce. No more consumption. You don\'t have do what you\'re procastinating about, but you do need to produce."},{"id":1,"date":"2021-09-02","title":"It\'s not about what you want","description":"Many people want to be successful in business. Many people want to be excellent coders. Many people want to have a great relationship. When I look at those that are the best in their crafts, it is not their desire that sets them apart from the crowd. It is their clear understanding of what it takes, and their resolve to do what it takes. </br> </br> What to be great in business? Prepare to be doubted by many. Want to be an excellent engineer, prepare to face the limits of your knowledge, prepare to sound dumb many times over. Want to be great at relationship, prepare to face rejections."}]')},ba8c:function(e,t,n){},c0fc:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d8c6:function(e,t,n){"use strict";n("c0fc")},e691:function(e,t,n){},e8dd:function(e,t,n){e.exports=n.p+"img/hourglass.549947b6.gif"}});
//# sourceMappingURL=app.c2298414.js.map