(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);h&&h(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},i=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a5ed1cdf"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=a[e]=[t,o]}));t.push(n[2]=o);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2972:function(e,t,n){},"448a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={class:"flex flex-col min-h-screen",id:"app"},i={class:"flex-grow tracking-wider"},r={class:""};function s(e,t,n,s,c,l){var u=Object(o["y"])("Header"),h=Object(o["y"])("router-view"),d=Object(o["y"])("Footer");return Object(o["r"])(),Object(o["d"])("div",a,[Object(o["e"])("header",null,[Object(o["h"])(u)]),Object(o["e"])("main",i,[Object(o["h"])(h)]),Object(o["e"])("footer",r,[Object(o["h"])(d)])])}Object(o["u"])("data-v-a3c8ccfe");var c={class:"p-10 px-15 flex items-center"},l={id:"title",class:"flex w-10/12 items-center"},u={class:"text-4xl"},h=Object(o["g"])(" Sameer "),d=Object(o["e"])("span",{class:"italic"},"Ajmani",-1),b={id:"nav",class:"items-center hidden md:flex md:mr-12"},p={class:"inline-block text-lg px-3"},f=Object(o["g"])("about"),m={class:"inline-block text-lg px-3"},g=Object(o["g"])("blog"),y={class:"inline-block text-lg px-3"},w=Object(o["g"])("work"),v=Object(o["e"])("span",{class:"top"},null,-1),O=Object(o["e"])("span",{class:"middle"},null,-1),j=Object(o["e"])("span",{class:"bottom"},null,-1),k=[v,O,j],I={class:"overlay-menu"},x=Object(o["g"])("about"),A=Object(o["g"])("blog"),T=Object(o["g"])("work");function S(e,t,n,a,i,r){var s=Object(o["y"])("router-link");return Object(o["r"])(),Object(o["d"])("nav",c,[Object(o["e"])("div",l,[Object(o["e"])("a",u,[Object(o["h"])(s,{to:"/"},{default:Object(o["D"])((function(){return[h,d]})),_:1})])]),Object(o["e"])("div",b,[Object(o["e"])("a",p,[Object(o["h"])(s,{to:"/about"},{default:Object(o["D"])((function(){return[f]})),_:1})]),Object(o["e"])("a",m,[Object(o["h"])(s,{to:"/"},{default:Object(o["D"])((function(){return[g]})),_:1})]),Object(o["e"])("a",y,[Object(o["h"])(s,{to:"/work"},{default:Object(o["D"])((function(){return[w]})),_:1})])]),Object(o["e"])("div",{onClick:t[0]||(t[0]=function(e){return i.isActive=!i.isActive,i.isOpen=!i.isOpen}),class:Object(o["n"])([{active:i.isActive},"button_container md:hidden items-center"]),id:"toggle"},k,2),Object(o["e"])("div",{class:Object(o["n"])([{open:i.isOpen},"overlay"]),id:"overlay"},[Object(o["e"])("nav",I,[Object(o["e"])("ul",null,[Object(o["e"])("li",null,[Object(o["e"])("a",{onClick:t[1]||(t[1]=function(e){return i.isActive=!i.isActive,i.isOpen=!i.isOpen}),class:""},[Object(o["h"])(s,{to:"/about"},{default:Object(o["D"])((function(){return[x]})),_:1})])]),Object(o["e"])("li",null,[Object(o["e"])("a",{onClick:t[2]||(t[2]=function(e){return i.isActive=!i.isActive,i.isOpen=!i.isOpen}),class:""},[Object(o["h"])(s,{to:"/"},{default:Object(o["D"])((function(){return[A]})),_:1})])]),Object(o["e"])("li",null,[Object(o["e"])("a",{onClick:t[3]||(t[3]=function(e){return i.isActive=!i.isActive,i.isOpen=!i.isOpen}),class:""},[Object(o["h"])(s,{to:"/work"},{default:Object(o["D"])((function(){return[T]})),_:1})])])])])],2)])}Object(o["s"])();var W={data:function(){return{isOpen:!1,isActive:!1}}},_=(n("9a45"),n("d959")),M=n.n(_);const C=M()(W,[["render",S],["__scopeId","data-v-a3c8ccfe"]]);var N=C,P={class:"px-10 py-5 flex items-center"},D={id:"title",class:"flex w-10/12 items-center"},F={class:"text-md"},B=Object(o["e"])("div",{id:"nav",class:"items-center flex"},null,-1);function H(e,t,n,a,i,r){return Object(o["r"])(),Object(o["d"])("nav",P,[Object(o["e"])("div",D,[Object(o["e"])("a",F," © "+Object(o["A"])(i.date)+" SAMEER AJMANI ",1)]),B])}var E={data:function(){return{date:(new Date).getFullYear()}}};const L=M()(E,[["render",H]]);var J=L,R={components:{Header:N,Footer:J}};n("d89b");const Y=M()(R,[["render",s]]);var q=Y,z=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),$=n("cf05"),G=n.n($);G.a;Object(o["u"])("data-v-ebbc34ee");Object(o["s"])();n("8734");n("a4d3"),n("e01a");var K={key:0,class:"min-h-full mx-10 grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 auto-rows-auto gap-10"},Q={class:"italic my-4"},U=["onClick"],V={class:"content mt-4 w-5/6"},X=["innerHTML"],Z={class:"my-3 underline italic"},ee=["onClick"],te={key:1,class:"h-screen align-center justify-center text-center"},ne=Object(o["e"])("div",{class:"text-gray-500 text-3xl mb-6"},"Fetching Data",-1),oe=["src"];function ae(e,t,n,a,i,r){return i.loading?(Object(o["r"])(),Object(o["d"])("main",te,[ne,Object(o["e"])("img",{src:i.loadingImage,class:"w-24 m-auto",alt:""},null,8,oe)])):(Object(o["r"])(),Object(o["d"])("main",K,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["x"])(i.posts,(function(e){return Object(o["r"])(),Object(o["d"])("div",{key:e.id,class:"content w-6/6"},[Object(o["e"])("p",Q,Object(o["A"])(e.date),1),Object(o["e"])("a",{onClick:function(t){return r.persist(e.id)},class:"my-4 cursor-pointer text-3xl hover:underline font-semibold"},Object(o["A"])(e.title),9,U),Object(o["e"])("div",V,[Object(o["e"])("p",{class:"text-lg",innerHTML:e.description.substring(0,100)+".."},null,8,X)]),Object(o["e"])("p",Z,[Object(o["e"])("a",{onClick:function(t){return r.persist(e.id)},class:"cursor-pointer"},"Read More",8,ee)])])})),128))]))}var ie=n("1da1"),re=(n("96cf"),n("159b"),n("a023")),se={name:"Blog",data:function(){return{loading:!0,loadingImage:n("e8dd"),posts:re,error:"",text:""}},methods:{persist:function(e){var t=this;this.posts.forEach((function(n){n.id==e&&(localStorage.setItem("title",n.title),localStorage.setItem("description",n.description),localStorage.setItem("date",n.date),t.$router.push({path:"post"}))}))}},created:function(){var e=this;return Object(ie["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!1;case 1:case"end":return t.stop()}}),t)})))()}};const ce=M()(se,[["render",ae]]);var le=ce,ue={class:"about py-5 mx-10 md:mx-36 lg:mx-80 divide-y divide-gray-300"},he={class:"content"},de={class:"text-lg italic"},be={class:"content text-xl mt-4"},pe={class:"text-4xl mb-9 font-bold"},fe=["innerHTML"],me=Object(o["e"])("div",{class:"my-10"},null,-1);function ge(e,t,n,a,i,r){return Object(o["r"])(),Object(o["d"])("div",ue,[Object(o["e"])("div",he,[Object(o["e"])("h1",de,Object(o["A"])(i.date),1),Object(o["e"])("div",be,[Object(o["e"])("p",pe,Object(o["A"])(i.title),1),Object(o["e"])("p",{class:"leading-8 text-xl",innerHTML:i.description},null,8,fe)])]),me])}var ye={name:"Post",components:{},data:function(){return{title:"",date:"",description:""}},mounted:function(){this.title=localStorage.title,this.description=localStorage.description,this.date=localStorage.date}};const we=M()(ye,[["render",ge]]);var ve=we;Object(o["u"])("data-v-07d46238");var Oe={class:"about py-14 mx-10 md:mx-36 lg:mx-80"},je=Object(o["e"])("div",{class:"content leading-8 mx-10"},[Object(o["e"])("h1",{class:"text-xl"},"Coming soon")],-1),ke=[je];function Ie(e,t,n,a,i,r){return Object(o["r"])(),Object(o["d"])("div",Oe,ke)}Object(o["s"])();var xe={name:"Work",components:{}};n("d8c6");const Ae=M()(xe,[["render",Ie],["__scopeId","data-v-07d46238"]]);var Te=Ae,Se=[{path:"/",name:"Blog",component:le},{path:"/post",name:"Post",component:ve},{path:"/work",name:"Work",component:Te},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],We=Object(z["a"])({history:Object(z["b"])("/"),routes:Se}),_e=We;n("ba8c");Object(o["c"])(q).use(_e).mount("#app")},8734:function(e,t,n){"use strict";n("c821")},"9a45":function(e,t,n){"use strict";n("9da5")},"9da5":function(e,t,n){},a023:function(e){e.exports=JSON.parse('[{"id":11,"date":"01-01-2022","title":"2022","description":" "},{"id":10,"date":"01-01-2022","title":"Amor Fati - love your fate","description":"  <span class= \\"font-bold\\"> ,,My formula for greatness in a human being is amor fati: that one wants nothing to be different, nor forward, not backward, not in all eternity. Not merely bear what is necessary, still less conceal it--all idealism is meandacity in the face of what is necessary--but love it.\\" </br> - Friedrich Nietzshe</span> </br> </br> Amor Fati. I interpret this concept as a keen acceptance for everything that happens in my life. To let life suprise me and love everything that happens. </br> </br> What you throw on top of the fire is fuel for that fire. What we have to practice repeatedly is the love for everything that happens. Not just accepting or tolerating it, but loving it. You will better for this having happened to you. Take what you can from the situation, use it as fuel. You gonna become better from it. Amor Fati - I\'m gonna make the most out of it. I\'m not going to let this stop me. I\'m going to be better for this having happened. </br> </br> Despite the radical idea of acceptance, according to Nietzsche, man you should by no means cower in a fatalistic passivity, but work on solutions and realise himself. </br> </br>  There is only the here and now. </br> </br> Amor Fati."},{"id":9,"date":"19-12-2021","title":"The most profound form of affection","description":"Is to be fully present with other person. </br> </br> If you love someone and you are talking to them, give them your full presence. If you can\'t, it\'ll be damaging to continue. Stop, call back later when you can dedicate a hundred percent of your attention."},{"id":8,"date":"19-12-2021","title":"The Craftman Mindset","description":"As young people, half of our day fills by anxious thoughts about the future. </br> </br> We want to somehow guarantee it, and we use selling ourself as a way to do it. It\'s easy to fall into the trap of \\"How can I convince other people that I am a superstar?\\" </br> </br> The reason it\'s a trap is because it will never releave the anxiety, because if you are not useful, not excellent at what you do, than you are not a superstar and that anxiety will never disappear. Selling yourself is an ever thinning veil.  </br> </br> Instead, remember that you have what it takes, and it will take time. Do things that will push you to grow your skillset, your ability to lead, learn and follow."},{"id":7,"date":"19-12-2021","title":"Feeling Success, Being Successful, Having other people think you\'re successful","description":"All of these goals are exclusive to each other. When you work on feeling successful, you\'re not necesarily being successful. When you work on making other people think you\'re successful, you\'re not being successful. </br> </br> And there are 24 hours in a day. Where do you want to focus most of your time on? </br> </br> To be honest, I\'m not sure where the answer is."},{"id":6,"date":"23-10-2021","title":"Change is real","description":"We turn keys all the time. Or rather: time turns keys all the time. Because time means change. And change is natural of life. The reason to hope. Neuroplasticity is the way out brains change their structure according to the things we experience. </br> </br> None of us are the same people we were ten years ago. When we feel or experience terrible things, it is useful to remember that nothing lasts. Perspective shifts. We become different version of ourselves.</br> </br>The hardest question I have ever asked is: \'How do I stay alive for other people if I have no one?\' The answer is that you stay alive for other version of you. For the people you will <span class= \\" italic\\"> meet</span>, yes, sure, but also the people you will <span class=\\" italic\\">be.</span> "},{"id":5,"date":"02-10-2021","title":"Instead","description":"A simple substitude might change a habit. </br> </br> Instead of a snack, brush your teeth.</br> </br> Instead of a nap, go for a walk. </br> </br>Instead of a nasty tweet or cutting remark, write down in a private notebook.</br> </br> Instead of the elevator, take the stairs. </br> </br>Instead of doomscrolling, send someone a nice note. </br> </br>Instead of an angry email, make a phone call.</br> </br> Instead of a purchase seeking joy, consider donation."},{"id":4,"date":"26-09-2021","title":"Become a person who Actually Does Things","description":"There are two kinds of people in the world: People who actually do things, and people who don\'t.  </br></br> What do I actually mean by this? To achieve a goal, this breaks down into two parts: figure out what needs to be done, and actually do it. </br></br> As stated, this sounds completely trivial. But I think there is a really important and non-obvious point here. Some part of me is convinced that the main bottleneck for achieving my goals is being smart, coming up with the best plan, getting all of the necessary information. And this is true! It doesn\'t matter how good you are at doing things, if what you\'re doing is crap. But it also doesn\'t matter how good my plan is if I never act upon it. </br></br>And it\'s really easy to miss this point. It\'s easy to always think \\"I can do this tomorrow\\" or \\"this is not a priority\\" or \\"this would never work\\". And it\'s hard, because sometimes those thoughts are correct. But I find, unless I put in active effort, I\'m the kind of person who\'ll always have those thoughts. I\'ll never actually act upon my goals, change things about my life. </br></br>One of the main symptoms of this is that I\'m always aware of my problems in life, and will often aware of them for a very long. I\'ll notice that I don\'t exercise enough, that I\'m not enjoying the courses I\'m studying, that I really dislike being single, that I dont have enough time to do what I find most fulfilling and that I am a total wasteman. But there wont be a connection in my mind from \\"this is a problem\\" to  \\"what am I going to do about it\\". It\'s not that I think through the problem, and conclude that I can\'t do anything, it never feels like there\'s a question to be asked in the first place! And I think this is a problem that extends beyond me - I notice some amount of this in most of my friends, and I think it\'s inceredibly widespread. There seems to be a mental block between \\"things are not as I want them to be\\" and \\"I can actually to something about it\\" </br></br> I\'m writing this post not to complain about how much it sucks, it\'s because I think this is a solvable problem. Being the kind of person who does things, an agent, is a skill, and I think it is a trainable skill. And this is hard, and won\'t work perfectly, but there\'s a lot of room for progress. And this is one of the most valuable skills I\'ve ever tried developing. </br></br>The main symptom is that, in the movement, acting upon your desire never feels urgent. It never feels important and can be put off. Or it never feels possible, the problem just feels like a fact of life. And so the solution must center on solving the problem in the movement. And the solution that worked for me, is to make it part of your identity to be an agent. Make it a point of principle to do things, not because the thing is necessarily the perfect action, but because I choose the life where I do things, over the life where I always wait for the perfect opportunity. </br></br>Notice the small problem, and fix them. Notice when the jug of water is empty, and be the one to fill it. Notice when you say \\"oh, I can do this tomorrow\\" and do it today. Notice when you think \\"I should get round to this sometime\\" and actually do it. Notice when something is inefficient, notice the thing nobody is doing, and be the person who does it! </br></br> It doesn\'t matter if I\'m not doing the right thing, because what I\'m doing is not that important. I can close off the paralysing thoughts, not by answering them on their own terms, but by realising that the choice I make today affects the kind of person I\'ll be for the rest of my life. And that that\'s far more important than whatever trivial bullshit is going on in my life today. And thus I train the habit of actually doing things.  </br></br>And it doesn\'t even matter if I do make the wrong and imperfect choices in all of the day-to-day mundanity. What matters is that, when that one golden opportunity comes along, I am that kind of person who will take it. A thousand tiny losses are nothing against the big win that really counts. </br></br>If there\'s one thing you take from this post, let it be this: notice the next time you worry over a choice, or pass up an opportunity. And ask yourself not \\"what is the right decision\\" but rather \\"which decision will get me closer to the kind of person I want to be\\"."},{"id":3,"date":"20-09-2021","title":"On expanding scope","description":"I reflected recently about the moments where I felt the happiest. The moments where I saw the largest gain, or experienced person growth. During these moments, the one constant was that I was thinking about something greater than myself — family, team, friends. </br> </br> Then I thought of the moments where I was the closest to causing irreparable damage. In these moments the constant was that I was internally focused, worried about myself, anxious."},{"id":2,"date":"207-09-2021","title":"Consumption","description":"When procastinating, give yourself a hard rule -- you can only produce. No more consumption. You don\'t have do what you\'re procastinating about, but you do need to produce."},{"id":1,"date":"02-09-2021","title":"It\'s not about what you want","description":"Many people want to be successful in business. Many people want to be excellent coders. Many people want to have a great relationship. When I look at those that are the best in their crafts, it is not their desire that sets them apart from the crowd. It is their clear understanding of what it takes, and their resolve to do what it takes. </br> </br> What to be great in business? Prepare to be doubted by many. Want to be an excellent engineer, prepare to face the limits of your knowledge, prepare to sound dumb many times over. Want to be great at relationship, prepare to face rejections."}]')},ba8c:function(e,t,n){},c821:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d89b:function(e,t,n){"use strict";n("448a")},d8c6:function(e,t,n){"use strict";n("2972")},e8dd:function(e,t,n){e.exports=n.p+"img/hourglass.549947b6.gif"}});
//# sourceMappingURL=app.6b0e24ea.js.map