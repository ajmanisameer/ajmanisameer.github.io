(function(e){function t(t){for(var i,r,s=t[0],l=t[1],h=t[2],c=0,d=[];c<s.length;c++)r=s[c],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,h||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],i=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},a=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"9f974af4"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,i){o=n[e]=[t,i]}));t.push(o[2]=i);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var h=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var o=n[e];if(0!==o){if(o){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",h.name="ChunkLoadError",h.type=i,h.request=a,o[1](h)}n[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(o,i,function(t){return e[t]}.bind(null,i));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=h;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2972:function(e,t,o){},"448a":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("7a23"),n={class:"flex flex-col min-h-screen",id:"app"},a={class:"flex-grow tracking-wider"},r={class:""};function s(e,t,o,s,l,h){var c=Object(i["y"])("Header"),u=Object(i["y"])("router-view"),d=Object(i["y"])("Footer");return Object(i["r"])(),Object(i["d"])("div",n,[Object(i["e"])("header",null,[Object(i["h"])(c)]),Object(i["e"])("main",a,[Object(i["h"])(u)]),Object(i["e"])("footer",r,[Object(i["h"])(d)])])}Object(i["u"])("data-v-a3c8ccfe");var l={class:"p-10 px-15 flex items-center"},h={id:"title",class:"flex w-10/12 items-center"},c={class:"text-4xl"},u=Object(i["g"])(" Sameer "),d=Object(i["e"])("span",{class:"italic"},"Ajmani",-1),f={id:"nav",class:"items-center hidden md:flex md:mr-12"},m={class:"inline-block text-lg px-3"},b=Object(i["g"])("about"),y={class:"inline-block text-lg px-3"},p=Object(i["g"])("blog"),g={class:"inline-block text-lg px-3"},w=Object(i["g"])("work"),v=Object(i["e"])("span",{class:"top"},null,-1),k=Object(i["e"])("span",{class:"middle"},null,-1),I=Object(i["e"])("span",{class:"bottom"},null,-1),O=[v,k,I],j={class:"overlay-menu"},x=Object(i["g"])("about"),A=Object(i["g"])("blog"),T=Object(i["g"])("work");function B(e,t,o,n,a,r){var s=Object(i["y"])("router-link");return Object(i["r"])(),Object(i["d"])("nav",l,[Object(i["e"])("div",h,[Object(i["e"])("a",c,[Object(i["h"])(s,{to:"/"},{default:Object(i["D"])((function(){return[u,d]})),_:1})])]),Object(i["e"])("div",f,[Object(i["e"])("a",m,[Object(i["h"])(s,{to:"/about"},{default:Object(i["D"])((function(){return[b]})),_:1})]),Object(i["e"])("a",y,[Object(i["h"])(s,{to:"/"},{default:Object(i["D"])((function(){return[p]})),_:1})]),Object(i["e"])("a",g,[Object(i["h"])(s,{to:"/work"},{default:Object(i["D"])((function(){return[w]})),_:1})])]),Object(i["e"])("div",{onClick:t[0]||(t[0]=function(e){return a.isActive=!a.isActive,a.isOpen=!a.isOpen}),class:Object(i["n"])([{active:a.isActive},"button_container md:hidden items-center"]),id:"toggle"},O,2),Object(i["e"])("div",{class:Object(i["n"])([{open:a.isOpen},"overlay"]),id:"overlay"},[Object(i["e"])("nav",j,[Object(i["e"])("ul",null,[Object(i["e"])("li",null,[Object(i["e"])("a",{onClick:t[1]||(t[1]=function(e){return a.isActive=!a.isActive,a.isOpen=!a.isOpen}),class:""},[Object(i["h"])(s,{to:"/about"},{default:Object(i["D"])((function(){return[x]})),_:1})])]),Object(i["e"])("li",null,[Object(i["e"])("a",{onClick:t[2]||(t[2]=function(e){return a.isActive=!a.isActive,a.isOpen=!a.isOpen}),class:""},[Object(i["h"])(s,{to:"/"},{default:Object(i["D"])((function(){return[A]})),_:1})])]),Object(i["e"])("li",null,[Object(i["e"])("a",{onClick:t[3]||(t[3]=function(e){return a.isActive=!a.isActive,a.isOpen=!a.isOpen}),class:""},[Object(i["h"])(s,{to:"/work"},{default:Object(i["D"])((function(){return[T]})),_:1})])])])])],2)])}Object(i["s"])();var W={data:function(){return{isOpen:!1,isActive:!1}}},S=(o("9a45"),o("d959")),M=o.n(S);const F=M()(W,[["render",B],["__scopeId","data-v-a3c8ccfe"]]);var _=F,D={class:"px-10 py-5 flex items-center"},N={id:"title",class:"flex w-10/12 items-center"},z={class:"text-md"},C=Object(i["e"])("div",{id:"nav",class:"items-center flex"},null,-1);function P(e,t,o,n,a,r){return Object(i["r"])(),Object(i["d"])("nav",D,[Object(i["e"])("div",N,[Object(i["e"])("a",z," © "+Object(i["A"])(a.date)+" SAMEER AJMANI ",1)]),C])}var q={data:function(){return{date:(new Date).getFullYear()}}};const H=M()(q,[["render",P]]);var E=H,L={components:{Header:_,Footer:E}};o("d89b");const Y=M()(L,[["render",s]]);var R=Y,J=(o("d3b7"),o("3ca3"),o("ddb0"),o("6c02")),U=o("cf05"),G=o.n(U);G.a;Object(i["u"])("data-v-ebbc34ee");Object(i["s"])();o("8734");o("a4d3"),o("e01a");var V={key:0,class:"min-h-full mx-10 grid grid-flow-row md:grid-cols-2 sm:grid-cols-1 auto-rows-auto gap-10"},$={class:"italic my-4"},K=["onClick"],Q={class:"content mt-4 w-5/6"},X=["innerHTML"],Z={class:"my-3 underline italic"},ee=["onClick"],te={key:1,class:"h-screen align-center justify-center text-center"},oe=Object(i["e"])("div",{class:"text-gray-500 text-3xl mb-6"},"Fetching Data",-1),ie=["src"];function ne(e,t,o,n,a,r){return a.loading?(Object(i["r"])(),Object(i["d"])("main",te,[oe,Object(i["e"])("img",{src:a.loadingImage,class:"w-24 m-auto",alt:""},null,8,ie)])):(Object(i["r"])(),Object(i["d"])("main",V,[(Object(i["r"])(!0),Object(i["d"])(i["a"],null,Object(i["x"])(a.posts,(function(e){return Object(i["r"])(),Object(i["d"])("div",{key:e.id,class:"content w-6/6"},[Object(i["e"])("p",$,Object(i["A"])(e.date),1),Object(i["e"])("a",{onClick:function(t){return r.persist(e.id)},class:"my-4 cursor-pointer text-3xl hover:underline font-semibold"},Object(i["A"])(e.title),9,K),Object(i["e"])("div",Q,[Object(i["e"])("p",{class:"text-lg",innerHTML:e.description.substring(0,100)+".."},null,8,X)]),Object(i["e"])("p",Z,[Object(i["e"])("a",{onClick:function(t){return r.persist(e.id)},class:"cursor-pointer"},"Read More",8,ee)])])})),128))]))}var ae=o("1da1"),re=(o("96cf"),o("159b"),o("a023")),se={name:"Blog",data:function(){return{loading:!0,loadingImage:o("e8dd"),posts:re,error:"",text:""}},methods:{persist:function(e){var t=this;this.posts.forEach((function(o){o.id==e&&(localStorage.setItem("title",o.title),localStorage.setItem("description",o.description),localStorage.setItem("date",o.date),t.$router.push({path:"post"}))}))}},created:function(){var e=this;return Object(ae["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!1;case 1:case"end":return t.stop()}}),t)})))()}};const le=M()(se,[["render",ne]]);var he=le,ce={class:"about py-5 mx-10 md:mx-36 lg:mx-80 divide-y divide-gray-300"},ue={class:"content"},de={class:"text-lg italic"},fe={class:"content text-xl mt-4"},me={class:"text-4xl mb-9 font-bold"},be=["innerHTML"],ye=Object(i["e"])("div",{class:"my-10"},null,-1);function pe(e,t,o,n,a,r){return Object(i["r"])(),Object(i["d"])("div",ce,[Object(i["e"])("div",ue,[Object(i["e"])("h1",de,Object(i["A"])(a.date),1),Object(i["e"])("div",fe,[Object(i["e"])("p",me,Object(i["A"])(a.title),1),Object(i["e"])("p",{class:"leading-8 text-xl",innerHTML:a.description},null,8,be)])]),ye])}var ge={name:"Post",components:{},data:function(){return{title:"",date:"",description:""}},mounted:function(){this.title=localStorage.title,this.description=localStorage.description,this.date=localStorage.date}};const we=M()(ge,[["render",pe]]);var ve=we;Object(i["u"])("data-v-07d46238");var ke={class:"about py-14 mx-10 md:mx-36 lg:mx-80"},Ie=Object(i["e"])("div",{class:"content leading-8 mx-10"},[Object(i["e"])("h1",{class:"text-xl"},"Coming soon")],-1),Oe=[Ie];function je(e,t,o,n,a,r){return Object(i["r"])(),Object(i["d"])("div",ke,Oe)}Object(i["s"])();var xe={name:"Work",components:{}};o("d8c6");const Ae=M()(xe,[["render",je],["__scopeId","data-v-07d46238"]]);var Te=Ae,Be=[{path:"/",name:"Blog",component:he},{path:"/post",name:"Post",component:ve},{path:"/work",name:"Work",component:Te},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],We=Object(J["a"])({history:Object(J["b"])("/"),routes:Be}),Se=We;o("ba8c");Object(i["c"])(R).use(Se).mount("#app")},8734:function(e,t,o){"use strict";o("c821")},"9a45":function(e,t,o){"use strict";o("9da5")},"9da5":function(e,t,o){},a023:function(e){e.exports=JSON.parse('[{"id":15,"date":"10-08-2022","title":"critical","description":"I\'m an extremely critical person. I\'m not proud of that, but I\'m also not trying particularly hard to change it. I think it\'s one of my core strengths and definitely my greatest weakness - I\'m able to dissect precisely what makes the thing work and what is holding it back. I want things to feel pure, unabashed, and clear in their convictions.</br></br>Which is great - except for the fact that it\'s impossible to wear this hyper-critical lens while looking at myself too. Framed positively, this is the most potent \\"growth mindset\\" imaginable. Framed negatively, this is being fucking brutal towards myself. And unfortunately, the latter is a much stronger motivator: self-flagellation and withholding satisfaction are addictive in the way that they produce consistent result.</br></br>My critical voices go something like this:</br>1. I\'m a fraud and don\'t deserve the opportunities I\'ve been given</br>2. I can\'t commit to sticking to things</br>3. I\'m a disappointment to all of the people that I respect</br></br>Now, none of these voices have particularly strong evidence to back themselves up - and yet they persist, rentlessly. They\'re the product of an acutely critical eye, an intense upbringing that I internalized, and a high dose of naturally-occuring conscientiousness. The voices find immense pleasure in discovering like \\"yeah, I knew it! This is exactly why you should always listen to me.\\"</br></br>For better or worse, almost all of my accomplishments have been made possible by self-hatred. It\'s hard to push past mediocrity without sacrificing a certain degree of safety - and that\'s easier done by pulling from your card catalog of reasons why you dont\'t deserve the luxury of comfort. But relishing in self-hatred is a slippery slope towards self-destruction - whether that be from action or inaction. The inactive form is especially pernicious: it feels excruciatingly difficult to ship things when your standard is nothing less than excellence in the eyes of the people you most respect.</br></br>Despite all this, I still believe being critical is good. Rentlessly examining all the ways that things could be better allows you to recognize and replicate quality while developing a taste of objective truth. The only bug is that these same benefits get short-circuited in the case of your internal criticisms - your ear is positioned simply way too close to your voices to see them fully enough to critique them.</br></br>This wouldn\'t be a problem if they were based in fact. But they usually aren\'t - critical voices are mostly built with feelings. Visceral feelings, to be sure, but entirely subjective and unrooted in reality all the same. Why does that matter? It matters because if you want to hate yourself less, it\'s crucial you find ways to step back and evaluate your voices objectively.</br></br>This is the part I think most people get wrong when trying to help critically inclined people feel more satisfaction: reciting affirmations or \\"being nicer towards yourself\\" is basically bullshit advice because it\'s asking us to go against our entire nature - the very nature that has been both rewarding and refined into one of our most valuable asset out in the external world.</br></br>Instead, I think we need to be just as critical of our voices as they are of us. Don\'t let them get away with flimsy arguments for why you suck simply because those arguments feel \\"right\\". That\'s bullshit too - something you\'ll realize the more you cultivate an internal taste for truth and see how fast that \\"right\\" feeling fades. The voices were never \\"right\\" in any meaningful way, they just feel comfortable with you because they were familiar.</br></br>Backing away from your voices allows you to piece out the kernels of truth embedded in each of their undertones. In my case:</br>1. I haven\'t achieved anything I\'m proud of yet and want to feel like I\'ve earned my spot.</br>2. I want to commit to something and hold myself to it.</br>3. I want to do something worthy of respect from the people whom I respect</br></br>Which feels... much more manageable. And maybe that\'s the hidden gen of being extremely critical: it gives you a lot of signal on what you want out of life - or at least to start, a lot of signal on what you don\'t want. High standards are an essential ingredient to excellence and to be completely honest. I\'m quite uninterested in doing anything less than excellent."},{"id":14,"date":"08-05-2022","title":"Humans are not automatically strategic","description":"A large majority of otherwise smart people spend time doing semi-productive things, when there are massively productive opportunities untapped.</br></br>Why do we don\'t examining life more carefully?</br></br>Why do most of us, most of the time, choose to \\"pursue our goals\\" through routes that are far less effective than the routes we could find if we tried? My guess is that here, the main problem is that most courses of action are extremely ineffective, and that there has been no strong evolutionary or cultural force sufficient to focus us on the vary narrow behaviour patterns that would actually be effective.</br></br>To be more specific: there are clearly at least some limited senses in which we have goals. We: (1) tell ourself and others stories of how we\'re aiming for various \\"goals\\": (2) search out modes of activity that are consistent with the role, and goal-seeking, that we see ourself as doing; and sometimes even (3) feel glad or dissapointed when we do/don\'t achieve our goals. </br></br>But there are clearly also heuristics that would be useful to goal-achievement that we do not automatically carry out. We do not automatically: </br></br> (a) Ask ourself what we\'re trying to achieve;</br>(b) Ask ourself how we could tell if we achieved it and how we can track progress;</br>(c) Find ourself strongly, intrinsically curious about information that would help us achieve our goal;</br>(d) Gather that information;</br>(e) Systematically test many different conjectures for how to achieve the goals, including the meathods that are not habitual to us, while tracking which ones do and don\'t work;</br>(f) Use environmental cues and social contexts to bolster our motivation, so we can keep working effectively in the face of intermittent frustrations;</br></br>...or carry out any number of other useful techniques. Instead, we mostly just do things. We do number of things. But we do not systematically choose the narrow sets of actions that would effectively optimize for our claimed goals, or for any other goals.</br></br>For example, by vizualizing ice cream as disgusting and artery-clogging and yucky, or by walking across the glass floor often enough to persuade my brain that I can\'t fall through the floor...but systematically training one\'s motivational systems in this way is also not automatic for us. And so it seems far from surprising that most of us have not trained ourself in this way, and that most of our \\"goal-seeking\\" actions are far less effective than they could be."},{"id":13,"date":"21-04-2022","title":"On a brooding mind","description":"No matter how far we go, days often come, where we start brooding. Sadness creeps in, and searches for something to get angry about. The twist to it all is, you aren\'t winning against anything or anyone by being angry. It is your day you just spent, and you don\'t have so many"},{"id":12,"date":"04-03-2022","title":"Be Deliberate","description":"One of the most important ideas I\'ve ever internalized is to be deliberate about how I act in the world. Everything I ever do is an action, and my actions bring me further from or closer to my goals. Being deliberate is realizing that this link is not automatic, and requires active attention and effort. I need to be aware of why I\'m acting the way that I am, how this could be helpful to me, and to develop the skill of noticing when this stops being true. </br> </br>This sounds completely trivial when phrased like that. \\"There are things that I want in the world, and I should take actions that get me more of what I want!\\" But I think this is surprisingly hard, and something really worth paying attention to! </br> </br>First, empirically, a lot of people are not deliberate (this is one of the things that most annoys me about the world). For example, people often get into arguments, and are angry with each other. I think this can serve a legitimate purpose! Anger demonstrates that your preferences are strong and important. Demonstrating displeasure can help make the bad thing not happen again! But, the purpose here is not \\"demonstrating anger\\", the purpose is \\"ensuring that future interactions are better.\\" Anger is only useful as a means to an end! And I think often anger is super counterproductive, and makes others defensive and less likely to listen to you. It\'s often far more effective to clearly explain why you were annoyed, taking care not to give blame to the other person and to demonstrate empathy, and to try to constructively discuss how future interactions go better. Since trying to internalize the idea that \\"disagreements are about making future interactions go better, not seeking retribution for past grievances\\", I think my life has gotten a lot better. </br></br>Of course, this is a lot easier said than done. It\'s hard to step back from anger in the moment, and realize that it\'s not helping you achieve your goals. When you feel strong emotions, or intuitions, these are often actually helping you achieve purposes, and it\'s much easier and lower effort to just do the natural thing. Even I know it\'s counter-productie to follow the emotions, it\'s super hard not to! And often this is right strategy! But I think it\'s often not, and it\'s important to notice when your emotions or intuitions are not helping you achieve your goals. </br></br>From ona action-oriented point of view: You want to notice when previous natural interactions did not achieve your goals. And you want to ensure that, in future, you notice in the moment when you\'re following that same natural reaction. This needs to feel important, and you need to ask yourself \\"is this helping me, or is making things worse?\\" </br></br>The lesson to take from this is not \\"never be angry\\", it\'s \\"do the action that best acheieve your goals!\\".The point I\'m trying to make is that it should feel like there is a question to be answered. Test things, run experiments, try out alternate way of doing things, think outside the box!</br></br>Ultimately there are a lot of things I care about in this world, and it\'s really important to me that I get as much as I can out of life. And this is a difficult problem, and takes a lot of work. But it seems incredibly sad to miss out on so much value because I never realized that this problem existed. You don\'t need to have a perfect idea of your goals or values, which is also a really hard problem. But often there are such obvious gains to be made by being a bit more deliberate about your life. I urge anyone reading this to think about the things they care about in life. And whether the actions you take achieve those, or if you\'re stuck following a default path."},{"id":11,"date":"27-02-2022","title":"The Map is not the Territory","description":"One of the important concept I\'ve recently internalized is the phrase \\"The map is not the territory\\". The map refers to my mind and my internal experiences: my beliefs, my intuitions, my feelings, my memories, my sensory experiences. And the territory refers to objective reality, the world outside me. \\"The which, when you stop believing in it, dosen\'t goes away.\\"  </br> </br> Obviously reality exists outside of my head, and my perception aren\'t perfectly accurate. The part that feels key to me is the part that I only have the map. Objective reality exists outside of my head, but I can only see my internal experiences. But everything I care about lives in the territory. So, my goal is to infer what I can about the territory from my map. And the map does not automatically correspond to the territory, so this takes careful thoughts and effort. </br> </br> And the key difficulty is that, from the inside, it feels like map is the territory. My beliefs don\'t have labels attached saying which ones are biased and which ones are not, they all just feels like truth. If I care about finding the objective truth, I need to train the skill of looking past this, and trying as hard as I can to understand the true territory.  </br> </br> Often it feels like I have a clear view of the territory, when really I\'m looking at it through the flawed lens of my biases and assumptions - a map with lot of scribbles on it. Intuitions and assumptions can be important, and can contain a lot of information, but this is not automatic. It\'s something that needs care and attention. </br> </br> A few common trends are that my map is systematically bad at tracking some important things: abstract ideas, like opportunity cost and the value of information; creative ideas I haven\'t thought of yet; overweighting risks and underweighting rewards; uncertainty about my beliefs.</br> </br> One of the key feature of my map is my emotion, and what I feel. Noticing \\"this makes me happy\\" is valuable information, because \\"I am happy\\" is a fact about the map and the territory. My mind lives in the real world, and I care about what happens inside of it. But even here, it\'s important to distinguish this. When choosing a career, I care about what will make me happy in the long term, a question of the territory. While the map substitutes this for the question \\"what feels like it\'ll make me happy?\\" </br> </br> On a more practical level, I sometimes find challenging my beliefs, and trying to figure out why is it wrong very useful when processing emotions, especially insecurities. From the inside, an insecurity is a niggling voice of doubt at the back of my mind. Always thinking the worst - do people dislike me? Is this good enough? Should I stop doing this? Am I being weird? And from this initial seed of doubt, it\'s easy to start on a spiral of paralyzing insecurity and self-doubt, from which it\'s hard to escape.</br> </br>  The standard thing to try is to ignore this, by applying willpower and distracting myself. But this works badly on me, because it could be true. I can\'t make myself believe a lie by sheer force of will. But insecurities live in the map, while the doubt is about a question of reality, of the territory. Insecurity is a systematic flaw in my map - seeing the worst, a lack of calibration. And so to overcome it I find something stronger, and seek something better connected to reality. Because the impulse to notice flaws and question myself is one I respect, and will not remove from myself. And part of me will rebel if I try to ignore it with force of will. But all of me can align behind finding the truth.</br> </br> The map is not the territory. And everything I care about lives in the territory. But all I have is the map, and from the inside it feels like the territory. And I need to always be careful to keep track of the difference."},{"id":10,"date":"01-01-2022","title":"Amor Fati - love your fate","description":"  <span class= \\"font-bold\\"> ,,My formula for greatness in a human being is amor fati: that one wants nothing to be different, nor forward, not backward, not in all eternity. Not merely bear what is necessary, still less conceal it--all idealism is meandacity in the face of what is necessary--but love it.\\" </br> - Friedrich Nietzshe</span> </br> </br> Amor Fati. I interpret this concept as a keen acceptance for everything that happens in my life. To let life suprise me and love everything that happens. </br> </br> What you throw on top of the fire is fuel for that fire. What we have to practice repeatedly is the love for everything that happens. Not just accepting or tolerating it, but loving it. You will better for this having happened to you. Take what you can from the situation, use it as fuel. You gonna become better from it. Amor Fati - I\'m gonna make the most out of it. I\'m not going to let this stop me. I\'m going to be better for this having happened. </br> </br> Despite the radical idea of acceptance, according to Nietzsche, man you should by no means cower in a fatalistic passivity, but work on solutions and realise himself. </br> </br>  There is only the here and now. </br> </br> Amor Fati."},{"id":9,"date":"19-12-2021","title":"The most profound form of affection","description":"Is to be fully present with other person. </br> </br> If you love someone and you are talking to them, give them your full presence. If you can\'t, it\'ll be damaging to continue. Stop, call back later when you can dedicate a hundred percent of your attention."},{"id":8,"date":"19-12-2021","title":"The Craftman Mindset","description":"As young people, half of our day fills by anxious thoughts about the future. </br> </br> We want to somehow guarantee it, and we use selling ourself as a way to do it. It\'s easy to fall into the trap of \\"How can I convince other people that I am a superstar?\\" </br> </br> The reason it\'s a trap is because it will never releave the anxiety, because if you are not useful, not excellent at what you do, than you are not a superstar and that anxiety will never disappear. Selling yourself is an ever thinning veil.  </br> </br> Instead, remember that you have what it takes, and it will take time. Do things that will push you to grow your skillset, your ability to lead, learn and follow."},{"id":7,"date":"19-12-2021","title":"Feeling Success, Being Successful, Having other people think you\'re successful","description":"All of these goals are exclusive to each other. When you work on feeling successful, you\'re not necesarily being successful. When you work on making other people think you\'re successful, you\'re not being successful. </br> </br> And there are 24 hours in a day. Where do you want to focus most of your time on? </br> </br> To be honest, I\'m not sure where the answer is."},{"id":6,"date":"23-10-2021","title":"Change is real","description":"We turn keys all the time. Or rather: time turns keys all the time. Because time means change. And change is natural of life. The reason to hope. Neuroplasticity is the way out brains change their structure according to the things we experience. </br> </br> None of us are the same people we were ten years ago. When we feel or experience terrible things, it is useful to remember that nothing lasts. Perspective shifts. We become different version of ourselves.</br> </br>The hardest question I have ever asked is: \'How do I stay alive for other people if I have no one?\' The answer is that you stay alive for other version of you. For the people you will <span class= \\" italic\\"> meet</span>, yes, sure, but also the people you will <span class=\\" italic\\">be.</span> "},{"id":5,"date":"02-10-2021","title":"Instead","description":"A simple substitude might change a habit. </br> </br> Instead of a snack, brush your teeth.</br> </br> Instead of a nap, go for a walk. </br> </br>Instead of a nasty tweet or cutting remark, write down in a private notebook.</br> </br> Instead of the elevator, take the stairs. </br> </br>Instead of doomscrolling, send someone a nice note. </br> </br>Instead of an angry email, make a phone call.</br> </br> Instead of a purchase seeking joy, consider donation."},{"id":4,"date":"26-09-2021","title":"Become a person who Actually Does Things","description":"There are two kinds of people in the world: People who actually do things, and people who don\'t.  </br></br> What do I actually mean by this? To achieve a goal, this breaks down into two parts: figure out what needs to be done, and actually do it. </br></br> As stated, this sounds completely trivial. But I think there is a really important and non-obvious point here. Some part of me is convinced that the main bottleneck for achieving my goals is being smart, coming up with the best plan, getting all of the necessary information. And this is true! It doesn\'t matter how good you are at doing things, if what you\'re doing is crap. But it also doesn\'t matter how good my plan is if I never act upon it. </br></br>And it\'s really easy to miss this point. It\'s easy to always think \\"I can do this tomorrow\\" or \\"this is not a priority\\" or \\"this would never work\\". And it\'s hard, because sometimes those thoughts are correct. But I find, unless I put in active effort, I\'m the kind of person who\'ll always have those thoughts. I\'ll never actually act upon my goals, change things about my life. </br></br>One of the main symptoms of this is that I\'m always aware of my problems in life, and will often aware of them for a very long. I\'ll notice that I don\'t exercise enough, that I\'m not enjoying the courses I\'m studying, that I really dislike being single, that I dont have enough time to do what I find most fulfilling and that I am a total wasteman. But there wont be a connection in my mind from \\"this is a problem\\" to  \\"what am I going to do about it\\". It\'s not that I think through the problem, and conclude that I can\'t do anything, it never feels like there\'s a question to be asked in the first place! And I think this is a problem that extends beyond me - I notice some amount of this in most of my friends, and I think it\'s inceredibly widespread. There seems to be a mental block between \\"things are not as I want them to be\\" and \\"I can actually to something about it\\" </br></br> I\'m writing this post not to complain about how much it sucks, it\'s because I think this is a solvable problem. Being the kind of person who does things, an agent, is a skill, and I think it is a trainable skill. And this is hard, and won\'t work perfectly, but there\'s a lot of room for progress. And this is one of the most valuable skills I\'ve ever tried developing. </br></br>The main symptom is that, in the movement, acting upon your desire never feels urgent. It never feels important and can be put off. Or it never feels possible, the problem just feels like a fact of life. And so the solution must center on solving the problem in the movement. And the solution that worked for me, is to make it part of your identity to be an agent. Make it a point of principle to do things, not because the thing is necessarily the perfect action, but because I choose the life where I do things, over the life where I always wait for the perfect opportunity. </br></br>Notice the small problem, and fix them. Notice when the jug of water is empty, and be the one to fill it. Notice when you say \\"oh, I can do this tomorrow\\" and do it today. Notice when you think \\"I should get round to this sometime\\" and actually do it. Notice when something is inefficient, notice the thing nobody is doing, and be the person who does it! </br></br> It doesn\'t matter if I\'m not doing the right thing, because what I\'m doing is not that important. I can close off the paralysing thoughts, not by answering them on their own terms, but by realising that the choice I make today affects the kind of person I\'ll be for the rest of my life. And that that\'s far more important than whatever trivial bullshit is going on in my life today. And thus I train the habit of actually doing things.  </br></br>And it doesn\'t even matter if I do make the wrong and imperfect choices in all of the day-to-day mundanity. What matters is that, when that one golden opportunity comes along, I am that kind of person who will take it. A thousand tiny losses are nothing against the big win that really counts. </br></br>If there\'s one thing you take from this post, let it be this: notice the next time you worry over a choice, or pass up an opportunity. And ask yourself not \\"what is the right decision\\" but rather \\"which decision will get me closer to the kind of person I want to be\\"."},{"id":3,"date":"20-09-2021","title":"On expanding scope","description":"I reflected recently about the moments where I felt the happiest. The moments where I saw the largest gain, or experienced person growth. During these moments, the one constant was that I was thinking about something greater than myself — family, team, friends. </br> </br> Then I thought of the moments where I was the closest to causing irreparable damage. In these moments the constant was that I was internally focused, worried about myself, anxious."},{"id":2,"date":"207-09-2021","title":"Consumption","description":"When procastinating, give yourself a hard rule -- you can only produce. No more consumption. You don\'t have do what you\'re procastinating about, but you do need to produce."},{"id":1,"date":"02-09-2021","title":"It\'s not about what you want","description":"Many people want to be successful in business. Many people want to be excellent coders. Many people want to have a great relationship. When I look at those that are the best in their crafts, it is not their desire that sets them apart from the crowd. It is their clear understanding of what it takes, and their resolve to do what it takes. </br> </br> What to be great in business? Prepare to be doubted by many. Want to be an excellent engineer, prepare to face the limits of your knowledge, prepare to sound dumb many times over. Want to be great at relationship, prepare to face rejections."}]')},ba8c:function(e,t,o){},c821:function(e,t,o){},cf05:function(e,t,o){e.exports=o.p+"img/logo.82b9c7a5.png"},d89b:function(e,t,o){"use strict";o("448a")},d8c6:function(e,t,o){"use strict";o("2972")},e8dd:function(e,t,o){e.exports=o.p+"img/hourglass.549947b6.gif"}});
//# sourceMappingURL=app.920ce70a.js.map