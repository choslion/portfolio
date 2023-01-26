(function(){"use strict";var s={9397:function(s,a,t){var n=t(9242),i=t(3396);const e=(0,i._)("link",{rel:"stylesheet",href:"css/index.css"},null,-1);function c(s,a,t,n,c,l){const o=(0,i.up)("intro"),r=(0,i.up)("navMenu"),d=(0,i.up)("about"),u=(0,i.up)("project"),p=(0,i.up)("cloning"),v=(0,i.up)("contact");return(0,i.wg)(),(0,i.iD)("div",null,[e,(0,i.Wm)(o,{id:"intro"}),(0,i.Wm)(r),(0,i.Wm)(d,{id:"about"}),(0,i.Wm)(u,{id:"project"}),(0,i.Wm)(p,{id:"cloning"}),(0,i.Wm)(v,{id:"contact"})])}var l=t(7139);const o={class:"section-intro"},r={class:"flex"},d=(0,i.uE)('<h1 class="logo"><a href=""><img src="img/logo-white.png" alt="하얀조승혁"></a></h1><h1 class="intro-text"> 안녕하세요, 저는 <span class="point">조승혁</span> 입니다. <br> 웹 개발자가 되고 싶습니다. </h1>',2),u={class:"button"},p={class:"quotes"},v={class:"quote"},g={class:"author"};function m(s,a,t,n,e,c){const m=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("section",o,[(0,i._)("div",r,[d,(0,i._)("div",u,[(0,i.Uk)(" View my work "),(0,i.Wm)(m,{icon:"fa-solid fa-right-long"})])]),(0,i._)("div",p,[(0,i._)("h3",v,(0,l.zw)(n.randomQuotes.quote),1),(0,i._)("h4",g,(0,l.zw)(n.randomQuotes.author),1)])])])}var f=t(4870),_={setup(){const s=(0,f.qj)([{quote:"자신감 있는 표정을 지으면 자신감이 생긴다.",author:"찰스 다윈"},{quote:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",author:"괴테"},{quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",author:"이소룡"},{quote:"인생은 과감한 모험이 아니라면 아무것도 아닌 것이다.",author:"헬렌 켈러"},{quote:"고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",author:"괴테"},{quote:"자신을 내보여라. 그러면 재능이 드러날 것이다.",author:"발타사르 그라시안"},{quote:"신은 용기 있는 자를 결코 버리지 않는다.",author:"켄러"},{quote:"인사를 잘하면 반은 먹고 들어간다.",author:"우리아빠"},{quote:"당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",author:"헨리 포드"},{quote:"작은 기회로 부터 종종 위대한 업적이 시작된다.",author:"데모스테네스"},{quote:"최고에 도달하려면 최저에서 시작하라.",author:"P.시루스"},{quote:"내 비장의 무기는 아직 손안에 있다 .그것은 희망이다.",author:"나폴레옹"},{quote:"인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",author:"볼드윈"},{quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",author:"하버트 개서"}]),a=document.querySelector(".quotes h3"),t=document.querySelector(".quotes h4"),n=s[Math.floor(Math.random()*s.length)];return{quotes:s,quote:a,author:t,randomQuotes:n}}},h=t(89);const k=(0,h.Z)(_,[["render",m]]);var b=k;const x={class:"nav-wrap"},w={class:"nav-menu"},j={class:"mo-nav"};function S(s,a,t,n,e,c){const l=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",x,[(0,i._)("nav",null,[(0,i._)("ul",w,[(0,i._)("li",{onClick:a[0]||(a[0]=(...s)=>c.goSection&&c.goSection(...s)),"data-target":"about",class:"toSection"},"About"),(0,i._)("li",{onClick:a[1]||(a[1]=(...s)=>c.goSection&&c.goSection(...s)),"data-target":"project",class:"toSection"},"Project"),(0,i._)("li",{onClick:a[2]||(a[2]=(...s)=>c.goSection&&c.goSection(...s)),"data-target":"cloning",class:"toSection"},"Practice"),(0,i._)("li",{onClick:a[3]||(a[3]=(...s)=>c.goSection&&c.goSection(...s)),"data-target":"contact",class:"toSection"},"Contact"),(0,i._)("div",j,[(0,i.Wm)(l,{icon:"fa-solid fa-bars",size:"2x"})])])])])}var q={data(){return{data:"00:00:00"}},methods:{goSection(s){if(s.preventDefault(),!s.target.matches(".toSection"))return;const a=document.getElementById(s.target.dataset.target);a&&a.scrollIntoView({behavior:"smooth"})}}};const M=(0,h.Z)(q,[["render",S]]);var y=M;const W=(0,i.uE)('<section class="section-about"><div class="section-wrap"><div class="section-title"><h1 id="about" class="title">About</h1><div class="underLine"></div></div><div class="appeal"><h2 class="appeal-text">항상 <span class="point">긍정적인</span> 방향을 바라보는 사람</h2><h2 class="appeal-text"><span class="point">역지사지</span>의 마음을 가지고 상대방을 대하는 사람</h2><h2 class="appeal-text">의견을 잘 내고 나와 다른 의견에도 <span class="point">수용</span>할 줄 아는 사람</h2></div><div class="appeal-second"><h2 class="appeal-text appeal-point">그래서 뽑아야 할 <span class="point">사람</span></h2><span class="logo"><img src="img/logo-black.png" alt="검정조승혁"></span></div><ul class="about-detail"><li class="about-me flex-set"><img src="img/port8-1.png" alt="웃는승혁"><div class="about-me__text flex-set"><div class="who font24">Who is this guy?</div><p> 1994년 6월 3일 출생, 현재 경기도 남양주시에 거주하고 있다. <br> 스케이트보드 타는것을 즐기며 또한 삶 자체를 즐긴다. <br> MBTI 는 ESTP(에너지 넘치는 문제해결사)이며 꿈은 웹 개발자이다. </p><span># 이스라엘 해외봉사 활동 # GS25 점장</span><span># 그린컴퓨터학원 뷰(Vue)활용 프론트엔드 웹개발자 양성과정 수료</span></div></li><li class="about-skills"><div class="skill"><div class="skill-percent"><div class="skill-name flex-set">HTML</div></div><span class="percent">90%</span></div><div class="skill"><div class="skill-percent"><div class="skill-name flex-set">CSS</div></div><span class="percent">90%</span></div><div class="skill"><div class="skill-percent"><div class="skill-name flex-set">JavaScript</div></div><span class="percent">90%</span></div><div class="skill"><div class="skill-percent"><div class="skill-name flex-set">Node.js</div></div><span class="percent">50%</span></div><div class="skill"><div class="skill-percent"><div class="skill-name flex-set">PUG</div></div><span class="percent">50%</span></div><div class="skill"><div class="skill-percent"><div class="skill-name flex-set">MySQL</div></div><span class="percent">50%</span></div><div class="skill"><div class="skill-percent"><div class="skill-name flex-set">MongoDB</div></div><span class="percent">50%</span></div><div class="skill"><div class="skill-percent"><div class="skill-name flex-set">Vue.js</div></div><span class="percent">40%</span></div></li></ul></div></section>',1),z=[W];function C(s,a,t,n,e,c){return(0,i.wg)(),(0,i.iD)("div",null,z)}var L={setup(){(0,f.qj)([{skill:"HTML",percent:"90%"},{skill:"CSS",percent:"90%"},{skill:"Javascript",percent:"90%"},{skill:"Node.js",percent:"50%"},{skill:"PUG",percent:"50%"},{skill:"MySQL",percent:"50%"},{skill:"MongoDB",percent:"50%"},{skill:"Vue.js",percent:"40%"}])}};const D=(0,h.Z)(L,[["render",C]]);var T=D;const O={class:"section-project"},P={class:"section-wrap"},U=(0,i._)("div",{class:"section-title"},[(0,i._)("h1",{class:"title",id:"project"},"Project"),(0,i._)("div",{class:"underLine"})],-1),Q={class:"project-contents"},Z=(0,i._)("li",{class:"project-content__img"},[(0,i._)("img",{src:"img/kibuttzMain.png",alt:"키부츠코리아 메인사진"})],-1),E={class:"project-content__info"},B=(0,i._)("p",null,"개인프로젝트 : 키부츠코리아",-1),G=(0,i._)("p",null,"제작기간 : 2022.11 ~ 2022.12",-1),N=(0,i._)("p",null,"기여도 : 100%",-1),H=(0,i._)("p",null,"사용한 기술 : HTML , CSS, Javascript, Node.js, MySQL",-1),I=(0,i._)("p",null,[(0,i.Uk)(" 이스라엘 봉사활동을 가고 싶은 청년들을 현지인과 "),(0,i._)("br"),(0,i.Uk)(" 연결시켜 갈 수 있게 도와주는 사이트. ")],-1),J={class:"project-contents"},V=(0,i._)("li",{class:"project-content__img"},[(0,i._)("img",{src:"img/seoulTakjuMain.png",alt:"서울탁주 메인사진"})],-1),A={class:"project-content__info"},F=(0,i._)("p",null,"개인프로젝트 : 키부츠코리아",-1),K=(0,i._)("p",null,"제작기간 : 2022.11 ~ 2022.12",-1),R=(0,i._)("p",null,"기여도 : 100%",-1),X=(0,i._)("p",null,"사용한 기술 : HTML , CSS, Javascript, Node.js, MySQL",-1),Y=(0,i._)("p",null,[(0,i.Uk)(" 이스라엘 봉사활동을 가고 싶은 청년들을 현지인과 "),(0,i._)("br"),(0,i.Uk)(" 연결시켜 갈 수 있게 도와주는 사이트. ")],-1),$={class:"project-contents"},ss=(0,i._)("li",{class:"project-content__img"},[(0,i._)("img",{src:"img/kibuttzMain.png",alt:"키부츠코리아 메인사진"})],-1),as={class:"project-content__info"},ts=(0,i._)("p",null,"개인프로젝트 : 키부츠코리아",-1),ns=(0,i._)("p",null,"제작기간 : 2022.11 ~ 2022.12",-1),is=(0,i._)("p",null,"기여도 : 100%",-1),es=(0,i._)("p",null,"사용한 기술 : HTML , CSS, Javascript, Node.js, MySQL",-1),cs=(0,i._)("p",null,[(0,i.Uk)(" 이스라엘 봉사활동을 가고 싶은 청년들을 현지인과 "),(0,i._)("br"),(0,i.Uk)(" 연결시켜 갈 수 있게 도와주는 사이트. ")],-1);function ls(s,a){const t=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("section",O,[(0,i._)("div",P,[U,(0,i._)("ul",Q,[Z,(0,i._)("li",E,[B,G,N,H,I,(0,i._)("p",null,[(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-github",size:"2x"}),(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-figma",size:"2x"}),(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-aws",size:"2x"})])])]),(0,i._)("ul",J,[V,(0,i._)("li",A,[F,K,R,X,Y,(0,i._)("p",null,[(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-github",size:"2x"}),(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-figma",size:"2x"}),(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-aws",size:"2x"})])])]),(0,i._)("ul",$,[ss,(0,i._)("li",as,[ts,ns,is,es,cs,(0,i._)("p",null,[(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-github",size:"2x"}),(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-figma",size:"2x"}),(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-aws",size:"2x"})])])])])])])}const os={},rs=(0,h.Z)(os,[["render",ls]]);var ds=rs;const us={class:"section-cloning"},ps=(0,i.uE)('<div class="section-wrap" data-v-21d4d8a9><div class="section-title" data-v-21d4d8a9><h1 id="cloning" class="title" data-v-21d4d8a9>Practice</h1><div class="underLine" data-v-21d4d8a9></div></div><div class="practice-img__wrap" data-v-21d4d8a9><div class="practice-img__message" data-v-21d4d8a9><img src="img/randomGame.png" alt="랜덤게임" data-v-21d4d8a9></div><div class="practice-img__message" data-v-21d4d8a9><img src="img/seomoon.png" alt="서문야시장" data-v-21d4d8a9></div><div class="practice-img__message" data-v-21d4d8a9><img src="img/freshMain.png" alt="싱그러운집" data-v-21d4d8a9></div><div class="practice-img__message" data-v-21d4d8a9><img src="img/dosirak.png" alt="도시락통" data-v-21d4d8a9></div><div class="practice-img__message" data-v-21d4d8a9><img src="img/richmond.png" alt="리치먼드" data-v-21d4d8a9></div><div class="practice-img__message" data-v-21d4d8a9><img src="img/fillerBg.png" alt="승혁의 유튜브" data-v-21d4d8a9></div><div class="practice-img__message" data-v-21d4d8a9><img class="kokoa-clone" src="img/kokoa.jpg" alt="카카오톡 클론" data-v-21d4d8a9></div></div></div>',1),vs=[ps];function gs(s,a,t,n,e,c){return(0,i.wg)(),(0,i.iD)("div",us,vs)}var ms={data(){return{arco:!1}}};const fs=(0,h.Z)(ms,[["render",gs],["__scopeId","data-v-21d4d8a9"]]);var _s=fs;const hs={class:"section-contact"},ks={class:"section-wrap"},bs=(0,i._)("div",{class:"section-title"},[(0,i._)("h1",{id:"contact",class:"title"},"Contact"),(0,i._)("div",{class:"underLine"})],-1),xs={class:"contact-box flex-set font24"},ws=(0,i._)("span",{class:"logo"},[(0,i._)("img",{src:"img/logo-white.png",alt:"하얀승혁"})],-1),js=(0,i._)("h4",null,"Tel : 010-4755-6005",-1),Ss=(0,i._)("h4",null,"Email : cshyeok24@gmail.com",-1),qs={class:"sns-box"};function Ms(s,a){const t=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",hs,[(0,i._)("div",ks,[bs,(0,i._)("div",xs,[ws,js,Ss,(0,i._)("div",qs,[(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-github",size:"3x"}),(0,i.Wm)(t,{class:"icons",icon:"fa-brands fa-instagram",size:"3x"})])])])])}const ys={},Ws=(0,h.Z)(ys,[["render",Ms]]);var zs=Ws,Cs={name:"App",components:{intro:b,navMenu:y,about:T,project:ds,cloning:_s,contact:zs}};const Ls=(0,h.Z)(Cs,[["render",c]]);var Ds=Ls,Ts=(t(6905),t(3494)),Os=t(7749),Ps=t(8539),Us=t(4551);Ts.vI.add(Ps.BC0,Ps.DD4,Ps.U23,Us.zhw,Us.uWT,Us._yj,Us.Zzi,Ps.xiG),(0,n.ri)(Ds).component("font-awesome-icon",Os.GN).mount("#app")}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var e=a[n]={exports:{}};return s[n].call(e.exports,e,e.exports,t),e.exports}t.m=s,function(){var s=[];t.O=function(a,n,i,e){if(!n){var c=1/0;for(d=0;d<s.length;d++){n=s[d][0],i=s[d][1],e=s[d][2];for(var l=!0,o=0;o<n.length;o++)(!1&e||c>=e)&&Object.keys(t.O).every((function(s){return t.O[s](n[o])}))?n.splice(o--,1):(l=!1,e<c&&(c=e));if(l){s.splice(d--,1);var r=i();void 0!==r&&(a=r)}}return a}e=e||0;for(var d=s.length;d>0&&s[d-1][2]>e;d--)s[d]=s[d-1];s[d]=[n,i,e]}}(),function(){t.n=function(s){var a=s&&s.__esModule?function(){return s["default"]}:function(){return s};return t.d(a,{a:a}),a}}(),function(){t.d=function(s,a){for(var n in a)t.o(a,n)&&!t.o(s,n)&&Object.defineProperty(s,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(s){if("object"===typeof window)return window}}()}(),function(){t.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)}}(),function(){var s={143:0};t.O.j=function(a){return 0===s[a]};var a=function(a,n){var i,e,c=n[0],l=n[1],o=n[2],r=0;if(c.some((function(a){return 0!==s[a]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(o)var d=o(t)}for(a&&a(n);r<c.length;r++)e=c[r],t.o(s,e)&&s[e]&&s[e][0](),s[e]=0;return t.O(d)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9397)}));n=t.O(n)})();
//# sourceMappingURL=app.37e69e00.js.map