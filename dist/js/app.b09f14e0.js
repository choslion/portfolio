(function(){"use strict";var t={8601:function(t,n,o){var e=o(9242),i=o(3396);function a(t,n,o,e,a,c){const s=(0,i.up)("intro"),l=(0,i.up)("navMenu"),r=(0,i.up)("about"),u=(0,i.up)("project"),p=(0,i.up)("cloning"),d=(0,i.up)("contact");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s,{id:"intro"}),(0,i.Wm)(l),(0,i.Wm)(r,{id:"about"}),(0,i.Wm)(u,{id:"project"}),(0,i.Wm)(p,{id:"cloning"}),(0,i.Wm)(d,{id:"contact"})])}var c=o(7139),s=o.p+"img/logo-white.40f7eb7f.png";const l={class:"section-intro"},r={class:"flex"},u=(0,i.uE)('<h1 class="logo"><a href=""><img src="'+s+'" alt="하얀조승혁"></a></h1><h1 class="intro-text"> 안녕하세요, 저는 <span class="point">조승혁</span> 입니다. <br> 웹 개발자가 되고 싶습니다. </h1>',2),p={class:"quotes","data-aos":"fade-up","data-aos-duration":"700","data-aos-offset":"0"},d={class:"quote"},g={class:"author"};function f(t,n,o,e,a,s){const f=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("section",l,[(0,i._)("div",r,[u,(0,i._)("div",{class:"button",onClick:n[0]||(n[0]=(...t)=>e.moreView&&e.moreView(...t))},[(0,i.Uk)(" View my work "),(0,i.Wm)(f,{icon:"fa-solid fa-right-long"})])]),(0,i._)("div",p,[(0,i._)("h3",d,(0,c.zw)(e.randomQuotes.quote),1),(0,i._)("h4",g,(0,c.zw)(e.randomQuotes.author),1)])])])}var m=o(4870),h={setup(){const t=function(){const t=50,n=document.querySelector(".section-about").offsetTop;window.scrollTo({top:n-t,behavior:"smooth"})},n=(0,m.qj)([{quote:"자신감 있는 표정을 지으면 자신감이 생긴다.",author:"찰스 다윈"},{quote:"꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다.",author:"괴테"},{quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",author:"이소룡"},{quote:"인생은 과감한 모험이 아니라면 아무것도 아닌 것이다.",author:"헬렌 켈러"},{quote:"고통이 남기고 간 뒤를 보라! 고난이 지나면 반드시 기쁨이 스며든다.",author:"괴테"},{quote:"자신을 내보여라. 그러면 재능이 드러날 것이다.",author:"발타사르 그라시안"},{quote:"신은 용기 있는 자를 결코 버리지 않는다.",author:"켄러"},{quote:"인사를 잘하면 반은 먹고 들어간다.",author:"우리아빠"},{quote:"당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",author:"헨리 포드"},{quote:"작은 기회로 부터 종종 위대한 업적이 시작된다.",author:"데모스테네스"},{quote:"최고에 도달하려면 최저에서 시작하라.",author:"P.시루스"},{quote:"내 비장의 무기는 아직 손안에 있다 .그것은 희망이다.",author:"나폴레옹"},{quote:"인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",author:"볼드윈"},{quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",author:"하버트 개서"}]),o=document.querySelector(".quotes h3"),e=document.querySelector(".quotes h4"),i=n[Math.floor(Math.random()*n.length)];return{quotes:n,quote:o,author:e,randomQuotes:i,moreView:t}}},_=o(89);const v=(0,_.Z)(h,[["render",f]]);var b=v;const k={class:"nav-wrap"},S={id:"mySidenav",class:"sideNav"},w={class:"nav-menu"},j={class:"mo-nav"},x={class:"time"};function y(t,n,o,a,s,l){const r=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("nav",null,[(0,i.wy)((0,i._)("div",S,[(0,i._)("a",{href:"#",onClick:[n[0]||(n[0]=(...t)=>l.goSection&&l.goSection(...t)),n[1]||(n[1]=t=>a.open=!1)],"data-target":"about",class:"toSection"},"About"),(0,i._)("a",{href:"#",onClick:[n[2]||(n[2]=(...t)=>l.goSection&&l.goSection(...t)),n[3]||(n[3]=t=>a.open=!1)],"data-target":"project",class:"toSection"},"Project"),(0,i._)("a",{href:"#",onClick:[n[4]||(n[4]=(...t)=>l.goSection&&l.goSection(...t)),n[5]||(n[5]=t=>a.open=!1)],"data-target":"cloning",class:"toSection"},"Practice"),(0,i._)("a",{href:"#",onClick:[n[6]||(n[6]=(...t)=>l.goSection&&l.goSection(...t)),n[7]||(n[7]=t=>a.open=!1)],"data-target":"contact",class:"toSection"},"Contact")],512),[[e.F8,1==a.open]]),(0,i._)("ul",w,[(0,i._)("li",{onClick:n[8]||(n[8]=(...t)=>l.goSection&&l.goSection(...t)),"data-target":"about",class:"toSection"},"About"),(0,i._)("li",{onClick:n[9]||(n[9]=(...t)=>l.goSection&&l.goSection(...t)),"data-target":"project",class:"toSection"},"Project"),(0,i._)("li",{onClick:n[10]||(n[10]=(...t)=>l.goSection&&l.goSection(...t)),"data-target":"cloning",class:"toSection"},"Practice"),(0,i._)("li",{onClick:n[11]||(n[11]=(...t)=>l.goSection&&l.goSection(...t)),"data-target":"contact",class:"toSection"},"Contact")]),(0,i._)("div",j,[(0,i.Wm)(r,{onClick:a.openNav,icon:"fa-solid fa-bars",size:"2x"},null,8,["onClick"])]),(0,i._)("div",x,[(0,i._)("span",null,(0,c.zw)(a.getFullTime),1)])])])}var z={methods:{goSection(t){if(t.preventDefault(),!t.target.matches(".toSection"))return;const n=document.getElementById(t.target.dataset.target);n&&n.scrollIntoView({behavior:"smooth"})}},setup(){const t=(0,m.iH)(!1),n=(0,m.iH)("");function o(){const t=new Date,o=String(t.getHours()).padStart(2,"0"),e=String(t.getMinutes()).padStart(2,"0"),i=String(t.getSeconds()).padStart(2,"0");n.value=`${o}:${e}:${i}`}setInterval((()=>{o()}),1e3);const e=function(){t.value=!t.value},a=function(){};return(0,i.bv)((()=>{o()})),{open:t,getFullTime:n,openNav:e,sideNav:a}}};const q=(0,_.Z)(z,[["render",y]]);var M=q,C=o.p+"img/logo-black.55591a7f.png",D=o.p+"img/port8-1.611ab91e.png";const W={class:"section-about"},P={class:"section-wrap"},T=(0,i.uE)('<div class="section-title"><h1 id="about" class="title" data-aos="fade" data-aos-duration="700">About</h1><div class="underLine"></div></div><div class="appeal"><h2 class="appeal-text" data-aos="fade-up" data-aos-duration="700">항상 <span class="point">긍정적인</span> 방향을 바라보는 사람</h2><h2 class="appeal-text" data-aos="fade-up" data-aos-duration="1400"><span class="point">역지사지</span>의 마음을 가지고 상대방을 대하는 사람</h2><h2 class="appeal-text" data-aos="fade-up" data-aos-duration="2100">의견을 잘 내고 나와 다른 의견에도 <span class="point">수용</span>할 줄 아는 사람</h2></div><div class="appeal-second"><h2 class="appeal-text appeal-point" data-aos="zoom-out-up" data-aos-duration="1500">그래서 뽑아야 할 <span class="point">사람</span></h2><span class="logo"><img src="'+C+'" alt="검정조승혁"></span></div>',3),L={class:"about-detail"},F=(0,i._)("li",{class:"about-me flex-set"},[(0,i._)("img",{src:D,alt:"웃는승혁"}),(0,i._)("div",{class:"about-me__text flex-set"},[(0,i._)("div",{class:"who font24","data-aos":"fade-right","data-aos-duration":"1000"},"Who is this guy?"),(0,i._)("p",null,[(0,i.Uk)(" 1994년 6월 3일 출생, 현재 경기도 남양주시에 거주하고 있다. "),(0,i._)("br"),(0,i.Uk)(" 스케이트보드 타는것을 즐기며 또한 삶 자체를 즐긴다. "),(0,i._)("br"),(0,i.Uk)(" MBTI 는 ESTP(에너지 넘치는 문제해결사)이며 꿈은 웹 개발자이다. ")]),(0,i._)("span",null,"# 이스라엘 해외봉사 활동 # GS25 점포관리"),(0,i._)("span",null,"# 그린컴퓨터학원 뷰(Vue)활용 프론트엔드 웹개발자 양성과정 수료")])],-1),G={class:"about-skills"};function H(t,n,o,e,a,c){const s=(0,i.up)("skill");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("section",W,[(0,i._)("div",P,[T,(0,i._)("ul",L,[F,(0,i._)("li",G,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.skill,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t,name:t.name,percent:t.percent},null,8,["name","percent"])))),128))])])])])])}const N={class:"skill"},O={class:"skill-percent"},E={class:"skill-name flex-set"},Z={class:"percent"};function A(t,n,o,e,a,s){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",N,[(0,i._)("div",O,[(0,i._)("div",E,(0,c.zw)(o.name),1)]),(0,i._)("span",Z,(0,c.zw)(o.percent)+"%",1)])])}var Q={data(){return{isActive:!1}},props:{name:String,percent:Number},setup(){}};const U=(0,_.Z)(Q,[["render",A]]);var B=U,V={components:{skill:B},setup(){const t=[{name:"HTML",percent:90},{name:"CSS",percent:90},{name:"JavaScript",percent:90},{name:"Node.js",percent:50},{name:"PUG",percent:50},{name:"MySQL",percent:50},{name:"MongoDB",percent:50},{name:"Vue.js",percent:40}];return(0,i.bv)((()=>{const n=()=>{const t=window.scrollY,n=document.querySelector(".appeal-second");t>n.offsetTop&&o()};window.addEventListener("scroll",n);const o=function(){const n=document.querySelectorAll(".skill-percent");for(let o=0;o<n.length;o++)n[o].style.width=`${t[o].percent}%`}})),{skill:t}}};const I=(0,_.Z)(V,[["render",H]]);var J=I;const K={class:"section-project",id:"project"},Y={class:"section-wrap"},$=(0,i._)("div",{class:"section-title"},[(0,i._)("h1",{class:"title"},"Project"),(0,i._)("div",{class:"underLine"})],-1);function R(t,n,o,e,a,c){const s=(0,i.up)("project-module");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("section",K,[(0,i._)("div",Y,[$,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.projectModuel,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t,title:t.title,date:t.date,img:t.img,introduce:t.introduce,feeling:t.feeling,contribution:t.contribution,mainFunc:t.mainFunc,url:t.url,github:t.github,figma:t.figma,useSkills:t.useSkills},null,8,["title","date","img","introduce","feeling","contribution","mainFunc","url","github","figma","useSkills"])))),128))])])])}var X=o.p+"img/kibuttz.f4684ca3.png",tt=o.p+"img/seoul.d3a0bc4e.png";const nt={key:0,class:"modal"},ot=(0,i._)("div",{class:"flex-set"},[(0,i._)("img",{src:X,alt:"키부츠코리아 설명"})],-1),et={key:1,class:"modal"},it=(0,i._)("div",{class:"flex-set"},[(0,i._)("img",{src:tt,alt:"서울탁주 설명"})],-1),at={class:"project-wrap"},ct={class:"project-title"},st={class:"project-date"},lt={class:"project-info"},rt={class:"project-info__imgs"},ut=["src"],pt={class:"project-info__contents"},dt=(0,i._)("hr",null,null,-1),gt={class:"project-contents__ul"},ft={class:"project-contents__li"},mt=(0,i._)("div",{class:"project__main-func"},"기여도",-1),ht={class:"project-contents__li"},_t=(0,i._)("div",{class:"project__main-func"},"주요기능",-1),vt={class:"project-contents__li"},bt=(0,i._)("div",{class:"project__main-func"},"URL",-1),kt=["href"],St={class:"project-contents__li"},wt=(0,i._)("div",{class:"project__main-func"},"Github",-1),jt=["href"],xt={class:"project-contents__li"},yt=(0,i._)("div",{class:"project__main-func"},"목업",-1),zt={key:0},qt=["href"],Mt={class:"project-contents__li"},Ct=(0,i._)("div",{class:"project__main-func"},"사용기술",-1);function Dt(t,n,o,e,a,s){const l=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)(i.HY,null,[1==a.kibuttz?((0,i.wg)(),(0,i.iD)("div",nt,[(0,i._)("button",null,[(0,i.Wm)(l,{onClick:n[0]||(n[0]=t=>a.kibuttz=!1),icon:"fa-regular fa-circle-xmark",size:"3x"})]),ot])):(0,i.kq)("",!0),1==a.takju?((0,i.wg)(),(0,i.iD)("div",et,[(0,i._)("button",null,[(0,i.Wm)(l,{onClick:n[1]||(n[1]=t=>a.takju=!1),icon:"fa-regular fa-circle-xmark",size:"3x"})]),it])):(0,i.kq)("",!0),(0,i._)("div",null,[(0,i._)("div",at,[(0,i._)("div",ct,(0,c.zw)(o.title),1),(0,i._)("div",st,(0,c.zw)(o.date),1),(0,i._)("div",lt,[(0,i._)("div",rt,[(0,i._)("img",{src:o.img,alt:"키부츠메인"},null,8,ut)]),(0,i._)("div",pt,[(0,i._)("div",null,[(0,i._)("div",null,[(0,i.Uk)((0,c.zw)(o.introduce)+" ",1),(0,i._)("p",null,(0,c.zw)(o.feeling),1)])]),dt,(0,i._)("ul",gt,[(0,i._)("li",ft,[(0,i._)("div",null,[(0,i._)("span",null,[(0,i.Wm)(l,{icon:"fa-solid fa-check"})]),mt]),(0,i._)("div",null,(0,c.zw)(o.contribution),1)]),(0,i._)("li",ht,[(0,i._)("div",null,[(0,i._)("span",null,[(0,i.Wm)(l,{icon:"fa-solid fa-check"})]),_t]),(0,i._)("div",null,(0,c.zw)(o.mainFunc),1)]),(0,i._)("li",vt,[(0,i._)("div",null,[(0,i._)("span",null,[(0,i.Wm)(l,{icon:"fa-solid fa-check"})]),bt]),(0,i._)("div",null,[(0,i._)("a",{href:o.url,target:"_blank"},(0,c.zw)(o.url),9,kt)])]),(0,i._)("li",St,[(0,i._)("div",null,[(0,i._)("span",null,[(0,i.Wm)(l,{icon:"fa-solid fa-check"})]),wt]),(0,i._)("div",null,[(0,i._)("a",{href:o.github,target:"_blank"},(0,c.zw)(o.github),9,jt)])]),(0,i._)("li",xt,[(0,i._)("div",null,[(0,i._)("span",null,[(0,i.Wm)(l,{icon:"fa-solid fa-check"})]),yt]),0==a.kibuttz?((0,i.wg)(),(0,i.iD)("div",zt,[(0,i._)("a",{href:o.figma,target:"_blank"},(0,c.zw)(o.figma),9,qt)])):(0,i.kq)("",!0)]),(0,i._)("li",Mt,[(0,i._)("div",null,[(0,i._)("span",null,[(0,i.Wm)(l,{icon:"fa-solid fa-check"})]),Ct]),(0,i._)("div",null,[(0,i._)("div",null,(0,c.zw)(o.useSkills),1)])])])])])])])],64)}var Wt={props:{title:String,date:String,img:String,introduce:String,feeling:String,contribution:String,mainFunc:String,url:String,github:String,figma:String,useSkills:String},data(){return{kibuttz:!1,takju:!1}}};const Pt=(0,_.Z)(Wt,[["render",Dt]]);var Tt=Pt,Lt={components:{projectModule:Tt},setup(){const t=[{title:"키부츠코리아",date:"2022.11 ~ 2022.12 (개인프로젝트)",img:o(2789),introduce:"저의 첫 개인 프로젝트 입니다. 독자적인 사이트를 가지고 리뉴얼 해보는것을 경험하였고 MySQL, EJS템플릿을 이용한 모듈화, Node.js를 이용한 서버열기를 처음으로 해보았던 프로젝트 입니다.",feeling:"홈페이지 구조를 보고 이해하는 능력이 생겼고 백엔드 공부를 해봄으로써 백엔드 개발자의 업무를 조금이나마 알게 되어서 도움이 되었습니다. 또 페이지를 AWS와 연결해서 다른 사람의 컴퓨터에서 창을 띄웠을때 흥미를 많이 느꼈습니다.",contribution:"100%",mainFunc:"회원가입, 로그인, 게시글 작성, 정보전달",url:"http://kibuttzkorea-env.eba-fpepbd9u.ap-northeast-2.elasticbeanstalk.com/",github:"https://github.com/choslion/KibuttzKorea",figma:"https://i.esdrop.com/d/f/BhioNGHPJG/t6OGP8F9Gd.png",useSkills:"HTML, CSS, JavaScript, MySQL, Node.js"},{title:"서울탁주",date:"2022.11 ~ 2022.12 (팀프로젝트)",img:o(3408),introduce:"첫 팀프로젝트 입니다. 팀의 조장을 맡아 여러 사람의 의견이 잘 어우러지게 사이트를 제작하였습니다.제가 맡은 부분은 메인페이지, 카카오맵 Api를 받아 지도 가져오기 그리고 MySQL을 node.js 와 연동해 DB의 정보를 가져올 수 있는 게시판을 만들었습니다. 또한 git을 이용해 데이터를 주고 받아보는 경험을 하였습니다.",feeling:"사람이 서로 소통하며 작업하는것 , 그 과정 속에서 긍정적인 생각과 태도가 얼마나 중요한 일인지 알게 되었습니다.",contribution:"33.33%",mainFunc:"회원가입, 로그인, 게시글 작성, 정보전달",url:"http://codebuild-seoultakju-service-role.ap-northeast-1.elasticbeanstalk.com/",github:"https://github.com/choslion/seoulTakju-personal",figma:"https://i.esdrop.com/d/f/BhioNGHPJG/GzsXzPjkht.png",useSkills:"HTML, CSS, JavaScript, MySQL, Node.js"},{title:"승혁의 유튜브",date:"2022.12 ~ 2023.2 (개인프로젝트)",img:o(2307),introduce:"노마드코더의 유튜브 클론코딩 수업을 들으며 Pug, Mongo, ES6 , 다양한 npm에 대해 알게 되고 연습해본 사이트입니다.",feeling:"템플릿끼리 문법은 비슷한게 많구나 라고 생각하였고 백엔드 개발자가 하는일이 무엇인지 알게 되어서 좋았습니다.",contribution:"100%",mainFunc:"사용자 인증, 게시글 작성, 댓글 작성, 동영상 재생, 동영상 및 사용자 프로필 수정",url:"",github:"https://github.com/choslion/wetube",figma:"❌",useSkills:"Pug, Mongo, ES6"}];return{projectModuel:t}}};const Ft=(0,_.Z)(Lt,[["render",R]]);var Gt=Ft;const Ht=t=>((0,i.dD)("data-v-4bded512"),t=t(),(0,i.Cn)(),t),Nt={class:"section-cloning"},Ot={class:"section-wrap"},Et=Ht((()=>(0,i._)("div",{class:"section-title"},[(0,i._)("h1",{id:"cloning",class:"title"},"Practice"),(0,i._)("div",{class:"underLine"})],-1))),Zt={class:"practice-img__wrap"};function At(t,n,o,e,a,c){const s=(0,i.up)("cloningModule");return(0,i.wg)(),(0,i.iD)("div",Nt,[(0,i._)("div",Ot,[Et,(0,i._)("div",Zt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.cloningModule,(t=>((0,i.wg)(),(0,i.j4)(s,{key:t,url:t.url,img:t.img},null,8,["url","img"])))),128))])])])}const Qt={class:"practice-img__message"},Ut=["href"],Bt=["src"];function Vt(t,n,o,e,a,c){return(0,i.wg)(),(0,i.iD)("div",Qt,[(0,i._)("a",{target:"_blank",href:o.url},[(0,i._)("img",{src:o.img,alt:"작업"},null,8,Bt)],8,Ut)])}var It={props:{url:String,img:String}};const Jt=(0,_.Z)(It,[["render",Vt]]);var Kt=Jt,Yt={components:{cloningModule:Kt},data(){return{arco:!1}},setup(){const t=[{url:"https://choslion.github.io/jschallenge/random.html",img:o(2890)},{url:"https://choslion.github.io/seomoon/",img:o(140)},{url:"https://choslion.github.io/housefresh/",img:o(3494)},{url:"https://choslion.github.io/dosirak/",img:o(6390)},{url:"https://choslion.github.io/richmond/",img:o(5937)},{url:"https://choslion.github.io/jschallenge/log.html",img:o(9239)},{url:"https://choslion.github.io/kokoa-clone/",img:o(9227)},{url:"https://choslion.github.io/kokoa-clone/",img:o(6663)},{url:"https://choslion.github.io/kokoa-clone/",img:o(2417)}];return{cloningModule:t}}};const $t=(0,_.Z)(Yt,[["render",At],["__scopeId","data-v-4bded512"]]);var Rt=$t;const Xt={class:"section-contact"},tn={class:"section-wrap"},nn=(0,i._)("div",{class:"section-title"},[(0,i._)("h1",{id:"contact",class:"title"},"Contact"),(0,i._)("div",{class:"underLine"})],-1),on={class:"contact-box flex-set font24"},en=(0,i._)("span",{class:"logo"},[(0,i._)("img",{src:s,alt:"하얀승혁"})],-1),an=(0,i._)("h4",null,"Tel : 010-4755-6005",-1),cn=(0,i._)("h4",null,"Email : cshyeok24@gmail.com",-1),sn={class:"sns-box"},ln={target:"_blank",href:"https://github.com/choslion?tab=repositories"},rn={target:"_blank",href:"https://www.instagram.com/cshyeok__/"};function un(t,n){const o=(0,i.up)("font-awesome-icon");return(0,i.wg)(),(0,i.iD)("div",Xt,[(0,i._)("div",tn,[nn,(0,i._)("div",on,[en,an,cn,(0,i._)("div",sn,[(0,i._)("a",ln,[(0,i.Wm)(o,{class:"icons",icon:"fa-brands fa-github",size:"3x"})]),(0,i._)("a",rn,[(0,i.Wm)(o,{class:"icons",icon:"fa-brands fa-instagram",size:"3x"})])])])])])}const pn={},dn=(0,_.Z)(pn,[["render",un]]);var gn=dn,fn=o(6905),mn=o.n(fn),hn={name:"App",components:{intro:b,navMenu:M,about:J,project:Gt,cloning:Rt,contact:gn},created(){mn().init({once:!0})}};const _n=(0,_.Z)(hn,[["render",a]]);var vn=_n,bn=o(6160),kn=o(7749),Sn=o(8539),wn=o(8429),jn=o(4551);bn.vI.add(Sn.BC0,Sn.DD4,Sn.U23,jn.zhw,jn.uWT,jn._yj,jn.Zzi,Sn.xiG,wn.WA2,Sn.LEp),(0,e.ri)(vn).component("font-awesome-icon",kn.GN).mount("#app")},6390:function(t,n,o){t.exports=o.p+"img/dosirak.588255ef.png"},3494:function(t,n,o){t.exports=o.p+"img/freshMain.2ebf9e1e.png"},6663:function(t,n,o){t.exports=o.p+"img/kakao1.016c67d2.png"},2417:function(t,n,o){t.exports=o.p+"img/kakao2.61302aff.png"},9227:function(t,n,o){t.exports=o.p+"img/kakao4.14c614a8.png"},2789:function(t,n,o){t.exports=o.p+"img/kibuttzMain.9664cf1c.png"},2890:function(t,n,o){t.exports=o.p+"img/randomGame.ad86cd8c.png"},5937:function(t,n,o){t.exports=o.p+"img/richmond.b6fa99bf.png"},140:function(t,n,o){t.exports=o.p+"img/seomoon.0a629d89.png"},3408:function(t,n,o){t.exports=o.p+"img/seoulTakjuMain.ed0ba2b2.png"},9239:function(t,n,o){t.exports=o.p+"img/todo.536e315b.png"},2307:function(t,n,o){t.exports=o.p+"img/youtube.4d36a1cd.png"}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var a=n[e]={exports:{}};return t[e].call(a.exports,a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(n,e,i,a){if(!e){var c=1/0;for(u=0;u<t.length;u++){e=t[u][0],i=t[u][1],a=t[u][2];for(var s=!0,l=0;l<e.length;l++)(!1&a||c>=a)&&Object.keys(o.O).every((function(t){return o.O[t](e[l])}))?e.splice(l--,1):(s=!1,a<c&&(c=a));if(s){t.splice(u--,1);var r=i();void 0!==r&&(n=r)}}return n}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[e,i,a]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){o.p=""}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,a,c=e[0],s=e[1],l=e[2],r=0;if(c.some((function(n){return 0!==t[n]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(l)var u=l(o)}for(n&&n(e);r<c.length;r++)a=c[r],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},e=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(8601)}));e=o.O(e)})();
//# sourceMappingURL=app.b09f14e0.js.map