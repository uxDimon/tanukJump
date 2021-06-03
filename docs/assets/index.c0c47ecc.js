var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(e,s,a)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,r=(t,e)=>{for(var s in e||(e={}))o.call(e,s)&&i(t,s,e[s]);if(a)for(var s of a(e))n.call(e,s)&&i(t,s,e[s]);return t},l=(t,a)=>e(t,s(a));import{m as p,a as c,V as u,i as m}from"./vendor.fab8de61.js";function _(t,e,s,a,o,n,i,r){var l,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=s,p._compiled=!0),a&&(p.functional=!0),n&&(p._scopeId="data-v-"+n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},p._ssrRegister=l):o&&(l=r?function(){o.call(this,(p.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(p.functional){p._injectStyles=l;var c=p.render;p.render=function(t,e){return l.call(e),c(t,e)}}else{var u=p.beforeCreate;p.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:p}}const f={};var g=_({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"92",height:"56",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M13.024 45.22H0v2.2h4.6v8.36h3.769v-8.305h4.6V45.22h.055zm5.598-.22l-6.928 10.78h4.101l1.33-2.09h5.543l1.33 2.09h4.045L21.337 45h-2.715zm-.222 6.545l1.552-2.64 1.552 2.64H18.4zm21.171-2.42h-5.597V45.22h-3.77v10.56h3.77v-4.455h5.597v4.455h3.769V45.22H39.57v3.905zm13.69.77l-3.548-4.675h-4.378l5.82 7.535-2.328 3.08h4.156L60.41 45.22h-4.102l-3.048 4.675zm22.334-4.675h-4.822l-4.987 3.795V45.22h-3.714v10.56h3.769v-4.29l5.099 4.29h4.932l-7.038-5.665 6.761-4.895zM89.34 45l-7.76 6.49v-6.27h-3.768V56h2.66l7.76-6.49v6.27H92V45h-2.66zM58.526 29.474h-25.79V35h25.79v-5.526zM54.842 19.342H36.421v5.526h18.421v-5.526z",fill:"#C1C3FF"}}),e("path",{attrs:{d:"M57.974 10.868C49.5 5.711 45.632 0 45.632 0s-3.869 5.71-12.343 10.868c-4.052 2.395-9.026 4.421-15.289 6.08l5.987 5.157s5.618-2.487 12.71-8.105c6.448-4.974 8.566-9.395 8.935-10.224.368.83 2.486 5.25 8.934 10.224 7.092 5.618 12.71 8.105 12.71 8.105l5.987-5.25c-6.17-1.566-11.237-3.592-15.29-5.987z",fill:"#C1C3FF"}})])}),[],!1,(function(t){for(let e in f)this[e]=f[e]}),null,null,null);g.options.__file="vue/icon/main-logo.vue";const d={components:{mainLogo:g.exports},computed:r({},p({heartList:"heartList",score:"score",combo:"combo",time:"gameTime"})),methods:r({},c({animateHeartMinus:"animateHeartMinus",animateHeartPlus:"animateHeartPlus",scorePlus:"scorePlus",comboPlus:"comboPlus"})),data:()=>({hardStyle:{backgroundPositionX:"0px"}})},h={};var b=_(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bot-panel"},[s("div",{staticClass:"bot-panel__left"},[s("div",{staticClass:"bot-panel__info"},[s("div",{staticClass:"info-bar"},[s("div",{staticClass:"info-bar__name"},[t._v("Жизни")]),s("div",{staticClass:"info-bar__body info-bar__body_live"},t._l(t.heartList,(function(t,e){return s("div",{key:e,staticClass:"info-bar__hard",class:{"animation-heart":t.flicker},style:{backgroundPositionX:t.point+"px"}})})),0)]),s("div",{staticClass:"info-bar"},[s("div",{staticClass:"info-bar__name"},[t._v("Очки")]),s("div",{staticClass:"info-bar__body",staticStyle:{width:"110px"}},[t._v(" "+t._s(t.score)+" ")])])])]),s("div",{staticClass:"bot-panel__logo"},[s("main-logo")],1),s("div",{staticClass:"bot-panel__right"},[s("div",{staticClass:"bot-panel__info"},[s("div",{staticClass:"info-bar"},[s("div",{staticClass:"info-bar__name"},[t._v("Комбо!")]),s("div",{staticClass:"info-bar__body",staticStyle:{width:"72px"}},[t._v(" "+t._s("×")+t._s(t.combo)+" ")])]),s("div",{staticClass:"info-bar"},[s("div",{staticClass:"info-bar__body info-bar__body_time"},[t._v(" "+t._s(t.time)+" ")])])])])])}),[],!1,(function(t){for(let e in h)this[e]=h[e]}),null,null,null);b.options.__file="vue/components/panel.vue";var v=b.exports,y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/0_bunny.d899925b.png"}),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/0_player.7562073d.png"}),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/0_sushi.46812d23.png"}),S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/10_sushi.7c5393bb.png"}),k=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/1_bunny.78422aa2.png"}),w=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/1_player.4c205a54.png"}),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/1_sushi.aafe8485.png"}),L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/2_bunny.44208e78.png"}),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/2_player.6690e384.png"}),M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/2_sushi.5214fee2.png"}),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/3_bunny.51ca113c.png"}),O=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/3_player.723b1241.png"}),z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/3_sushi.48791643.png"}),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/4_bunny.2d47ed42.png"}),T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/4_player.faacf427.png"}),$=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/4_sushi.543e1cf9.png"}),U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/5_player.62771459.png"}),V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/5_sushi.abed00c7.png"}),E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/6_sushi.ce8aa6cf.png"}),I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/7_sushi.78235574.png"}),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/8_sushi.b969d8cf.png"}),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/9_sushi.2d28a281.png"}),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/char_1.6a4b5eba.png"}),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/char_2.6c3ccbbb.png"}),X=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/char_3.8b71f72b.png"}),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/tanuki.2ea89aaf.png"});const Z={data:()=>({styleAnim:{},stepAnim:120,iterator:{animate:null,animateJump:null},type:{idle:"-203px",happy:"-406px",angry:"-609px"}}),methods:l(r({},c({setAnimat:"setAnimat",setAnimatGeneral:"setAnimatGeneral",endJump:"endJump"})),{animate(){this.iterator.animateJump&&clearInterval(this.iterator.animateJump);let t=0;this.iterator.animate=setInterval((()=>{t<2?++t:t=0,this.styleAnim={backgroundPositionX:`-${200*t}px`,backgroundPositionY:this.type[this.mainСharacter?this.animatPersonGeneral:this.animat],bottom:""}}),this.stepAnim)},animateJump(){this.iterator.animate&&clearInterval(this.iterator.animate);let t=0,e=0,s=0;this.iterator.animateJump=setInterval((()=>{[1,3,4].includes(t)?++e:[6,7,8].includes(t)&&--s,[8,9,10].includes(t)?--e:[4,5,6].includes(t)&&++s,this.styleAnim={backgroundPositionX:`-${200*e}px`,backgroundPositionY:"",bottom:this.jump*s+"px"},++t,11==t&&(e=0,t=0,s=0,this.mainСharacter?this.setAnimatGeneral("idle"):this.endJump(),clearInterval(this.iterator.animateJump))}),this.stepAnim)}}),props:{urlSprite:{type:String,default:""},"mainСharacter":{type:Boolean,default:!1}},computed:r({},p({animat:"animatPerson",jump:"jumpPerson",greatPoint:"greatPoint",animatPersonGeneral:"animatPersonGeneral",jumpPersonGeneral:"jumpPersonGeneral"})),watch:{animat:function(t,e){if(!this.mainСharacter)switch(t){case"jump":this.animateJump();break;default:this.animate()}},animatPersonGeneral:function(t,e){if(this.mainСharacter)switch(t){case"jump":this.animateJump();break;default:this.animate()}}},created(){this.animate()}},D={};var q=_(Z,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"person-animate__wrap"},[s("div",{staticClass:"person-animate",style:[t.styleAnim,{backgroundImage:t.urlSprite}]})])}),[],!1,(function(t){for(let e in D)this[e]=D[e]}),null,null,null);q.options.__file="vue/components/personAnimait.vue";var R=q.exports;const W={data:()=>({img:{ex1:"./assets/explosion_1.30087030.png",ex2:"./assets/explosion_2.36ff6ee7.png",ex3:"./assets/explosion_3.2a51e04b.png"},active:null,animationDuration:800,scale:1}),props:{type:{type:String,default:"ex2"}},computed:r({},p({onExplosion:"comboScore",combo:"combo"})),watch:{onExplosion:function(){"ex3"==this.type&&(1==this.combo?this.scale=.4:2==this.combo?this.scale=.6:this.scale=1,this.active=!0),"ex1"==this.type&&this.combo>1&&(2==this.combo?this.scale=.5:this.scale=1,this.active=!0),"ex2"==this.type&&this.combo>3&&(4==this.combo?this.scale=.3:this.scale=1,this.active=!0),setTimeout((()=>{this.active=null}),this.animationDuration)}}},Y={};var K=_(W,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"explosion",class:t.active?"active":"",style:{backgroundImage:"url("+t.img[t.type]+")",animationDuration:t.animationDuration+"ms",transform:"scale("+t.scale+")"}})}),[],!1,(function(t){for(let e in Y)this[e]=Y[e]}),null,null,null);K.options.__file="vue/components/explosion.vue";var Q=K.exports;const tt={props:{name:{type:String,default:"Выбрать"},disabled:{type:Boolean,default:!1},color:{type:String,default:"red"},event:{type:String,default:"empty"}},methods:l(r({},c({startGame:"startGame"})),{startEvent(){switch(this.event){case"newGame":this.newGame();break;case"location":window.location.href="/lk.html"}},newGame(){this.startGame(),this.$store.commit("toglePopUp")}})},et={};var st=_(tt,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"button-g",class:"green"===t.color?"button-g_green":"",attrs:{disabled:t.disabled},on:{click:t.startEvent}},[t._v(" "+t._s(t.name)+" ")])}),[],!1,(function(t){for(let e in et)this[e]=et[e]}),null,null,null);st.options.__file="vue/ui/button.vue";var at=st.exports;const ot={"../sprite/person/0_bunny.png":y,"../sprite/person/0_player.png":C,"../sprite/person/0_sushi.png":x,"../sprite/person/10_sushi.png":S,"../sprite/person/1_bunny.png":k,"../sprite/person/1_player.png":w,"../sprite/person/1_sushi.png":P,"../sprite/person/2_bunny.png":L,"../sprite/person/2_player.png":j,"../sprite/person/2_sushi.png":M,"../sprite/person/3_bunny.png":G,"../sprite/person/3_player.png":O,"../sprite/person/3_sushi.png":z,"../sprite/person/4_bunny.png":H,"../sprite/person/4_player.png":T,"../sprite/person/4_sushi.png":$,"../sprite/person/5_player.png":U,"../sprite/person/5_sushi.png":V,"../sprite/person/6_sushi.png":E,"../sprite/person/7_sushi.png":I,"../sprite/person/8_sushi.png":A,"../sprite/person/9_sushi.png":B,"../sprite/person/char_1.png":J,"../sprite/person/char_2.png":N,"../sprite/person/char_3.png":X,"../sprite/person/tanuki.png":F};let nt={};for(const Wt in ot){const t=Wt.split("/");nt[t[t.length-1]]=ot[Wt]}const it={created(){document.body.onkeyup=t=>{32!=t.keyCode||this.jumpButtonClose||this.setGreatPoint()}},components:{personAnimait:R,explosion:Q,buttonG:at},data:()=>({animat:"happy",jump:22,map:[{plaseList:[{style:"width: calc(75px * 2); background-position-y: -186px"},{style:"width: calc(75px * 5)"},{style:"width: calc(75px * 5); background-position-y: -93px"}],persons:[{img:nt["0_sushi.png"].default,style:"left: 90px; transform: scale(0.8);"},{img:nt["7_sushi.png"].default,style:"left: 310px; transform: scale(0.7); bottom: -40px"},{img:nt["1_sushi.png"].default,style:"left: 470px; transform: scale(0.8);"},{img:nt["2_sushi.png"].default,style:"left: 616px; transform: scale(0.66)"}]},{plaseList:[{style:"width: calc(75px * 3); background-position-y: -186px"},{style:"width: calc(75px * 5)"},{style:"width: calc(75px * 5); background-position-y: -93px"}],persons:[{img:nt["0_player.png"].default,style:"left: 37px; transform: scale(0.95);bottom: -57px"},{img:nt["tanuki.png"].default,style:"left: 237px; bottom: -40px"},{img:nt["5_sushi.png"].default,style:"left: 418px; transform: scale(0.6);bottom: -45px"},{img:nt["3_sushi.png"].default,style:"left: 532px; transform: scale(0.66);bottom:-50px"},{img:nt["4_sushi.png"].default,style:"left: 724px; transform: scale(0.8);bottom: -35px"}]},{plaseList:[{style:"width: calc(75px * 3); background-position-y: -186px"},{style:"width: calc(75px * 5)"},{style:"width: calc(75px * 5); background-position-y: -93px"}],persons:[{img:nt["4_bunny.png"].default,style:"left: 88px; transform: scale(1.1);bottom: -32px"},{img:null,"mainСharacter":!0,style:"left: 306px; transform: scale(1.1);bottom: -35px"},{img:nt["10_sushi.png"].default,style:"left: 457px; transform: scale(0.8);bottom: -42px"},{img:nt["1_bunny.png"].default,style:"left: 582px; transform: scale(1);bottom: -15px"}]},{plaseList:[{style:"width: calc(75px * 4); background-position-y: -186px"},{style:"width: calc(75px * 5)"},{style:"width: calc(75px * 5); background-position-y: -93px"}],persons:[{img:nt["2_bunny.png"].default,style:"left: 21px; transform: scale(1);bottom: -32px"},{img:nt["8_sushi.png"].default,style:"left: 156px; transform: scale(0.66);bottom: -47px"},{img:nt["5_player.png"].default,style:"left: 241px; transform: scale(1.1);bottom: -30px"},{img:nt["6_sushi.png"].default,style:"left: 386px; transform: scale(0.8);bottom: -50px"},{img:nt["9_sushi.png"].default,style:"left: 572px; transform: scale(0.8);bottom: -28px"}]},{plaseList:[{style:"width: calc(75px * 4); background-position-y: -186px"},{style:"width: calc(75px * 5)"},{style:"width: calc(75px * 5); background-position-y: -93px"}],persons:[]},{plaseList:[{style:"width: calc(75px * 5); background-position-y: -186px"},{style:"width: calc(75px * 5)"},{style:"width: calc(75px * 5); background-position-y: -93px"}],persons:[{img:nt["3_bunny.png"].default,style:"left: 48px; transform: scale(1);bottom: -6px"},{img:nt["4_player.png"].default,style:"left: 164px; transform: scale(0.8);bottom: -23px"},{img:nt["3_player.png"].default,style:"left: 335px; transform: scale(1);bottom: -9px"},{img:nt["2_player.png"].default,style:"left: 470px; transform: scale(1);bottom: -9px"},{img:nt["1_player.png"].default,style:"left: 598px; transform: scale(0.9);bottom: -2px"},{img:nt["0_bunny.png"].default,style:"left: 722px; transform: scale(1);bottom: 10px"}]}]}),computed:r({tribuneRow(){}},p({jumpButtonClose:"jumpButton",char:"char"})),watch:{char:function(t){this.map[2].persons[1].img=nt[t].default}},methods:r({setAnimat(t){this.animat=t.animat}},c({setGreatPoint:"setGreatPoint"}))},rt={};var lt=_(it,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"tribuneEl",staticClass:"tribune"},[t._l(t.map,(function(e,a){return s("div",{key:a,staticClass:"tribune__row"},[t._l(e.plaseList,(function(t,e){return s("div",{key:"plase_"+e,staticClass:"tribune__plase",style:t.style})})),t._l(e.persons,(function(t,e){return s("person-animait",{key:"person__"+e,style:t.style,attrs:{urlSprite:"url("+t.img+")","mainСharacter":!!t.mainСharacter&&t.mainСharacter}})}))],2)})),s("div",{staticClass:"action-button panel-action-button",on:{click:t.setGreatPoint,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.setGreatPoint(e)}}},[s("button-g",{attrs:{name:"Прыгай!",disabled:t.jumpButtonClose}})],1),s("explosion",{staticStyle:{top:"-40px",left:"-40px"},attrs:{type:"ex2"}}),s("explosion",{staticStyle:{top:"-50px",left:"200px"},attrs:{type:"ex3"}}),s("explosion",{staticStyle:{top:"-40px",left:"540px"},attrs:{type:"ex2"}}),s("explosion",{staticStyle:{top:"-40px",left:"690px"},attrs:{type:"ex2"}}),s("explosion",{staticStyle:{top:"20px",left:"695px"},attrs:{type:"ex1"}}),s("explosion",{staticStyle:{top:"100px",left:"160px"},attrs:{type:"ex2"}}),s("explosion",{staticStyle:{top:"100px",left:"530px"},attrs:{type:"ex3"}}),s("explosion",{staticStyle:{top:"160px",left:"50px"},attrs:{type:"ex3"}}),s("explosion",{staticStyle:{top:"170px",left:"470px"},attrs:{type:"ex2"}}),s("explosion",{staticStyle:{top:"275px",left:"135px"},attrs:{type:"ex1"}}),s("explosion",{staticStyle:{top:"290px",left:"355px"},attrs:{type:"ex3"}}),s("explosion",{staticStyle:{top:"275px",left:"570px"},attrs:{type:"ex1"}})],2)}),[],!1,(function(t){for(let e in rt)this[e]=rt[e]}),null,null,null);lt.options.__file="vue/components/tribune.vue";var pt=lt.exports;const ct={components:{buttonG:at},data:()=>({selectedPersonage:"personage1"}),methods:r({next(){this.char||this.setChar("char_1.png"),this.$store.commit("nextStape","message")},choosePersonage(t,e){this.setChar(e),this.selectedPersonage=t.currentTarget.value}},c({setChar:"setChar"})),computed:r({},p({char:"char"}))},ut={};var mt=_(ct,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop-up__item_personage"},[s("h2",{staticClass:"pop-up__h"},[t._v("ВЫБЕРИ СВОЕГО ГЕРОЯ")]),s("div",{staticClass:"pop-up__personage-wrap"},[s("button",{staticClass:"pop-up__personage",style:{backgroundPositionX:"personage1"===t.selectedPersonage?"-240px":""},attrs:{value:"personage1"},on:{click:function(e){return t.choosePersonage(e,"char_1.png")}}}),s("button",{staticClass:"pop-up__personage",style:{backgroundImage:"url(./assets/character2.303adeae.png)",backgroundPositionX:"personage2"===t.selectedPersonage?"-240px":""},attrs:{value:"personage2"},on:{click:function(e){return t.choosePersonage(e,"char_3.png")}}}),s("button",{staticClass:"pop-up__personage",style:{backgroundImage:"url(./assets/character3.526f2382.png)",backgroundPositionX:"personage3"===t.selectedPersonage?"-240px":""},attrs:{value:"personage3"},on:{click:function(e){return t.choosePersonage(e,"char_2.png")}}})]),s("div",{staticClass:"pop-up__button-wrap",on:{click:t.next}},[s("button-g",{attrs:{name:"Выбрать"}})],1)])}),[],!1,(function(t){for(let e in ut)this[e]=ut[e]}),null,null,null);mt.options.__file="vue/components/popUpPersonage.vue";var _t=mt.exports;const ft={};var gt=_({props:{message:{type:String,default:"Привет богатееще!!!"},face:{type:Number,default:1},score:{type:Object,default:{combo:!1,points:!1}}}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tanuki-message"},[s("div",{staticClass:"tanuki-message__img"},[s("div",{staticClass:"tanuki-message__img-mouth",style:{backgroundPositionX:"-"+245*t.face+"px"}})]),s("div",{staticClass:"tanuki-message__name"},[t._v("Тануки")]),t.score.points?s("div",{staticClass:"tanuki-message__score-wrap"},[s("div",{staticClass:"tanuki-message__score"},[s("div",{staticClass:"tanuki-message__score-number"},[t._v(" "+t._s(t.score.combo)+" ")]),s("div",{staticClass:"tanuki-message__score-name"},[t._v("Комбо")])]),s("div",{staticClass:"tanuki-message__score"},[s("div",{staticClass:"tanuki-message__score-number"},[t._v(" "+t._s(t.score.points)+" ")]),s("div",{staticClass:"tanuki-message__score-name"},[t._v("Баллы")])])]):s("div",{staticClass:"tanuki-message__message",domProps:{innerHTML:t._s(t.message)}})])}),[],!1,(function(t){for(let e in ft)this[e]=ft[e]}),null,null,null);gt.options.__file="vue/ui/tanukiMessage.vue";var dt=gt.exports;const ht={components:{buttonG:at,tanukiMessage:dt},computed:r({},p({userName:"userName"})),methods:l(r({},c({setUserName:"setUserName"})),{next(){this.$store.commit("nextStape","timer")}}),created(){const t=document.querySelector("[data-user-name]");t&&this.setUserName(t.dataset.userName)}},bt={};var vt=_(ht,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop-up__item_message"},[s("tanuki-message",{staticClass:"pop-up__tanuki-message",attrs:{message:"Привет, "+t.userName+"! Прыгай как можно выше, чтобы показать, как ты болеешь за наших спортсменов! Для этого тебе нужно вовремя нажимать кнопку прыжка. Готов? Тогда жми «СТАРТ!»",face:1}}),s("div",{staticClass:"action-button",on:{click:t.next}},[s("button-g",{attrs:{name:"Старт!"}})],1)],1)}),[],!1,(function(t){for(let e in bt)this[e]=bt[e]}),null,null,null);vt.options.__file="vue/components/popUpMessage.vue";var yt=vt.exports;const Ct={data(){return{timer:this.timerStart}},props:{timerStart:{type:Number,default:3}},methods:r({},c({startGame:"startGame"})),created(){const t=setInterval((()=>{this.timer>1?--this.timer:(this.$store.commit("toglePopUp"),this.startGame(),clearInterval(t))}),1e3)}},xt={};var St=_(Ct,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop-up__item_timer"},[s("div",{staticClass:"pop-up-timer"},[t._v(t._s(t.timer))])])}),[],!1,(function(t){for(let e in xt)this[e]=xt[e]}),null,null,null);St.options.__file="vue/components/popUpTimer.vue";var kt=St.exports;const wt={};var Pt=_({components:{buttonG:at,tanukiMessage:dt}},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pop-up__item_failure"},[e("tanuki-message",{staticClass:"pop-up__tanuki-failure",attrs:{message:"Ты набрал мало очков! Хочешь попробовать ещё раз?",face:3}}),e("div",{staticClass:"pop-up__botton-wrap_failure"},[e("button-g",{staticClass:"pop-up__botton-failure",attrs:{color:"green",name:"Да!",event:"newGame"}}),e("button-g",{staticClass:"pop-up__botton-failure",attrs:{name:"Нет",event:"location"}})],1)],1)}),[],!1,(function(t){for(let e in wt)this[e]=wt[e]}),null,null,null);Pt.options.__file="vue/components/popUpFailure.vue";var Lt=Pt.exports;const jt={components:{tanukiMessage:dt},computed:r({},p({score:"score",comboScore:"comboScore"})),methods:{next(){this.$store.commit("nextStape","timer")}}},Mt={};var Gt=_(jt,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop-up__item_score"},[s("tanuki-message",{staticClass:"pop-up__tanuki-score",attrs:{score:{combo:t.comboScore,points:t.score},face:2}})],1)}),[],!1,(function(t){for(let e in Mt)this[e]=Mt[e]}),null,null,null);Gt.options.__file="vue/components/popUpScore.vue";var Ot=Gt.exports;const zt={};var Ht=_({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"40",height:"30",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M4 17.573V25a5 5 0 005 5h22a5 5 0 005-5V9a5 5 0 00-5-5H19.93c2.332.84 4.328 2.174 5.925 3.955l.04.045H31a1 1 0 011 1v16a1 1 0 01-1 1H9a1 1 0 01-1-1v-3.865l-4-3.562z",fill:"#fff"}}),e("path",{attrs:{d:"M0 9.993L11.22 0v5.962h2.386C22.454 5.962 27 11.937 27 20c-4.476-3.984-9.744-5.976-15.78-5.976v5.962L0 9.993z",fill:"#fff"}})])}),[],!1,(function(t){for(let e in zt)this[e]=zt[e]}),null,null,null);Ht.options.__file="vue/icon/back.vue";var Tt=Ht.exports;const $t={};var Ut=_({components:{iconBack:Tt},props:{urlLinc:{type:String,default:"#"}}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"back-button",attrs:{href:t.urlLinc}},[s("icon-back")],1)}),[],!1,(function(t){for(let e in $t)this[e]=$t[e]}),null,null,null);Ut.options.__file="vue/ui/backButton.vue";var Vt=Ut.exports;const Et={};var It=_({data:()=>({}),components:{popUpPersonage:_t,popUpMessage:yt,popUpTimer:kt,popUpFailure:Lt,popUpScore:Ot,backButton:Vt},computed:{popStep(){return"pop-up-"+this.$store.state.popUpItem}}},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pop-up",style:{background:"pop-up-personage"===t.popStep?"rgba(24, 24, 54, 0.6)":""}},[s(t.popStep,{tag:"component",staticClass:"pop-up__item"}),"pop-up-score"==t.popStep||"pop-up-failure"==t.popStep?s("back-button",{staticClass:"pop-up__back-buttom",attrs:{urlLinc:"/lk.html"}}):t._e()],1)}),[],!1,(function(t){for(let e in Et)this[e]=Et[e]}),null,null,null);It.options.__file="vue/components/popUp.vue";var At=It.exports;const Bt={computed:r({},p({fillPprogres:"progressBar"}))},Jt={};var Nt=_(Bt,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"progres__wrap"},[s("div",{staticClass:"progres"},[t._m(0),s("div",{staticClass:"progres__colb"},[s("div",{staticClass:"progres__zhizha",style:{clipPath:"inset("+(100-t.fillPprogres)+"% 0 0 0)"}})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progres__scale"},[e("div",{staticClass:"progres__scale-item"}),e("div",{staticClass:"progres__scale-item"}),e("div",{staticClass:"progres__scale-item"}),e("div",{staticClass:"progres__scale-item"}),e("div",{staticClass:"progres__scale-item"}),e("div",{staticClass:"progres__scale-item"}),e("div",{staticClass:"progres__scale-item"}),e("div",{staticClass:"progres__scale-item"})])}],!1,(function(t){for(let e in Jt)this[e]=Jt[e]}),null,null,null);Nt.options.__file="vue/ui/progres.vue";const Xt={components:{panel:v,tribune:pt,popUp:At,progres:Nt.exports},mounted(){},updated(){const t=document.querySelector(".master-wrap"),e=document.querySelector(".game-wrap");if(t)if(this.full){let s=1;if(t.clientWidth>e.clientWidth*s)for(;t.clientWidth>e.clientWidth*s&&t.clientHeight>e.clientHeight*s;)s+=.01,e.style.transform=`scale(${s})`;if(t.clientWidth<e.clientWidth*s)for(;t.clientHeight<e.clientHeight*s;)s-=.01,e.style.transform=`scale(${s})`;t.classList.add("master-wrap_fixed")}else e.style.transform="scale(1)",t.classList.remove("master-wrap_fixed")},methods:l(r({},c({startGame:"startGame"})),{fullscreen(){this.full=!this.full;const t=document.querySelector(".master-wrap"),e=document.querySelector(".game-wrap");t&&(this.full?(t.classList.add("master-wrap_fixed"),document.body.style.overflow="hidden"):(e.style.transform="scale(1)",t.classList.remove("master-wrap_fixed"),document.body.style.overflow=""))}}),data:()=>({maessage:"",full:!1}),computed:r({},p({popUp:"popUp"}))},Ft={};var Zt=_(Xt,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"game-wrap"},[s("a",{staticClass:"back-button pop-up__back-buttom",staticStyle:{"z-index":"40",right:"13px",left:"inherit"},attrs:{href:"/lk.html"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.fullscreen(e)}}},[t.full?s("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M3.20023 33.4699C2.84408 33.8139 2.36708 34.0042 1.87196 33.9999C1.37683 33.9956 0.903207 33.797 0.553089 33.4469C0.202971 33.0967 0.00437387 32.6231 7.13852e-05 32.1279C-0.0042311 31.6328 0.186105 31.1558 0.530086 30.7996L5.56824 25.763H2.57519C2.11237 25.7629 1.66572 25.5928 1.32004 25.2851C0.974357 24.9773 0.753726 24.5533 0.70004 24.0936L0.686821 23.8746C0.686821 23.3737 0.885774 22.8934 1.23991 22.5392C1.59405 22.1851 2.07436 21.9861 2.57519 21.9861H10.1286C10.6295 21.9861 11.1098 22.1851 11.4639 22.5392C11.8181 22.8934 12.017 23.3737 12.017 23.8746V31.4285C12.017 31.9293 11.8181 32.4096 11.4639 32.7638C11.1098 33.118 10.6295 33.3169 10.1286 33.3169C9.62782 33.3169 9.14751 33.118 8.79337 32.7638C8.43923 32.4096 8.24028 31.9293 8.24028 31.4285V28.4315L3.20023 33.4699ZM31.4038 21.9633C31.9046 21.9633 32.3849 22.1623 32.739 22.5164C33.0932 22.8706 33.2921 23.3509 33.2921 23.8518C33.2921 24.3526 33.0932 24.833 32.739 25.1871C32.3849 25.5413 31.9046 25.7402 31.4038 25.7402H28.4145L33.447 30.7768C33.7721 31.102 33.9674 31.5346 33.9963 31.9936C34.0251 32.4525 33.8855 32.9062 33.6037 33.2696L33.447 33.4471C33.0929 33.8011 32.6126 34 32.1119 34C31.6112 34 31.1309 33.8011 30.7768 33.4471L25.7387 28.4049V31.4057C25.7386 31.8682 25.5688 32.3146 25.2615 32.6603C24.9541 33.0059 24.5306 33.2268 24.0712 33.2809L23.8503 33.2941C23.3495 33.2941 22.8692 33.0952 22.515 32.741C22.1609 32.3868 21.9619 31.9065 21.9619 31.4057V23.8518C21.9619 23.3509 22.1609 22.8706 22.515 22.5164C22.8692 22.1623 23.3495 21.9633 23.8503 21.9633H31.4038ZM2.59624 12.0386C2.09541 12.0386 1.6151 11.8396 1.26096 11.4855C0.906827 11.1313 0.707874 10.651 0.707874 10.1501C0.707874 9.64927 0.906827 9.16893 1.26096 8.81477C1.6151 8.46061 2.09541 8.26165 2.59624 8.26165H5.58552L0.553028 3.22321C0.227896 2.89803 0.0325807 2.46538 0.00372427 2.00644C-0.0251322 1.54749 0.114453 1.09378 0.396294 0.730435L0.553028 0.552919C0.907149 0.198885 1.38737 0 1.8881 0C2.38883 0 2.86905 0.198885 3.22318 0.552919L8.26133 5.59513V2.59624C8.26139 2.13369 8.4312 1.68725 8.73855 1.3416C9.0459 0.995939 9.46941 0.77511 9.92876 0.720992L10.1497 0.707772C10.6505 0.707772 11.1308 0.906736 11.485 1.26089C11.8391 1.61505 12.0381 2.09539 12.0381 2.59624V10.1501C12.0381 10.651 11.8391 11.1313 11.485 11.4855C11.1308 11.8396 10.6505 12.0386 10.1497 12.0386H2.59624ZM23.8504 12.0387C23.3496 12.0387 22.8693 11.8398 22.5152 11.4856C22.161 11.1315 21.9621 10.6511 21.9621 10.1503V2.59638C21.9621 2.09553 22.161 1.61519 22.5152 1.26103C22.8693 0.906877 23.3496 0.707913 23.8504 0.707913C24.3513 0.707913 24.8316 0.906877 25.1857 1.26103C25.5399 1.61519 25.7388 2.09553 25.7388 2.59638V5.59527L30.777 0.553059C31.1021 0.227909 31.5348 0.0325825 31.9937 0.00372447C32.4526 -0.0251336 32.9063 0.114459 33.2696 0.396316L33.4471 0.553059C33.8011 0.9072 34 1.38745 34 1.88821C34 2.38896 33.8011 2.86921 33.4471 3.22335L28.4127 8.26179H31.4039C31.8664 8.26185 32.3128 8.43167 32.6585 8.73904C33.0041 9.0464 33.2249 9.46994 33.279 9.92931L33.2923 10.1503C33.2923 10.6511 33.0933 11.1315 32.7392 11.4856C32.385 11.8398 31.9047 12.0387 31.4039 12.0387H23.8504Z",fill:"white"}})]):s("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M8.81677 22.5162C9.17292 22.1722 9.64993 21.9819 10.1451 21.9862C10.6402 21.9905 11.1138 22.1891 11.4639 22.5392C11.814 22.8894 12.0126 23.363 12.0169 23.8582C12.0212 24.3533 11.8309 24.8303 11.4869 25.1865L6.44876 30.2231H9.44182C9.90463 30.2232 10.3513 30.3933 10.697 30.701C11.0427 31.0088 11.2633 31.4328 11.317 31.8925L11.3302 32.1115C11.3302 32.6124 11.1312 33.0927 10.7771 33.4469C10.423 33.801 9.94265 34 9.44182 34H1.88836C1.38754 34 0.907226 33.801 0.553089 33.4469C0.198952 33.0927 0 32.6124 0 32.1115V24.5577C0 24.0568 0.198952 23.5765 0.553089 23.2223C0.907226 22.8681 1.38754 22.6692 1.88836 22.6692C2.38919 22.6692 2.8695 22.8681 3.22364 23.2223C3.57778 23.5765 3.77673 24.0568 3.77673 24.5577V27.5547L8.81677 22.5162V22.5162ZM24.5582 34C24.0574 34 23.577 33.801 23.2229 33.4469C22.8688 33.0927 22.6698 32.6124 22.6698 32.1115C22.6698 31.6107 22.8688 31.1303 23.2229 30.7762C23.577 30.422 24.0574 30.2231 24.5582 30.2231H27.5475L22.515 25.1865C22.1898 24.8613 21.9945 24.4287 21.9657 23.9697C21.9368 23.5108 22.0764 23.0571 22.3582 22.6937L22.515 22.5162C22.8691 22.1622 23.3493 21.9633 23.85 21.9633C24.3508 21.9633 24.831 22.1622 25.1851 22.5162L30.2233 27.5584V24.5577C30.2233 24.0951 30.3931 23.6487 30.7005 23.303C31.0078 22.9574 31.4314 22.7365 31.8907 22.6824L32.1116 22.6692C32.6125 22.6692 33.0928 22.8681 33.4469 23.2223C33.801 23.5765 34 24.0568 34 24.5577V32.1115C34 32.6124 33.801 33.0927 33.4469 33.4469C33.0928 33.801 32.6125 34 32.1116 34H24.5582V34ZM9.44182 0C9.94265 0 10.423 0.198963 10.7771 0.55312C11.1312 0.907276 11.3302 1.38762 11.3302 1.88847C11.3302 2.38932 11.1312 2.86966 10.7771 3.22382C10.423 3.57797 9.94265 3.77694 9.44182 3.77694H6.45254L11.485 8.81537C11.8102 9.14056 12.0055 9.5732 12.0343 10.0322C12.0632 10.4911 11.9236 10.9448 11.6418 11.3082L11.485 11.4857C11.1309 11.8397 10.6507 12.0386 10.15 12.0386C9.64923 12.0386 9.16901 11.8397 8.81489 11.4857L3.77673 6.44346V9.44235C3.77667 9.9049 3.60686 10.3513 3.29951 10.697C2.99216 11.0426 2.56865 11.2635 2.1093 11.3176L1.88836 11.3308C1.38754 11.3308 0.907226 11.1319 0.553089 10.7777C0.198952 10.4235 0 9.9432 0 9.44235V1.88847C0 1.38762 0.198952 0.907276 0.553089 0.55312C0.907226 0.198963 1.38754 0 1.88836 0H9.44182ZM32.1116 0C32.6125 0 33.0928 0.198963 33.4469 0.55312C33.801 0.907276 34 1.38762 34 1.88847V9.44235C34 9.9432 33.801 10.4235 33.4469 10.7777C33.0928 11.1319 32.6125 11.3308 32.1116 11.3308C31.6108 11.3308 31.1305 11.1319 30.7764 10.7777C30.4222 10.4235 30.2233 9.9432 30.2233 9.44235V6.44346L25.1851 11.4857C24.86 11.8108 24.4273 12.0061 23.9684 12.035C23.5095 12.0639 23.0558 11.9243 22.6925 11.6424L22.515 11.4857C22.161 11.1315 21.9621 10.6513 21.9621 10.1505C21.9621 9.64977 22.161 9.16951 22.515 8.81537L27.5494 3.77694H24.5582C24.0957 3.77688 23.6492 3.60706 23.3036 3.29969C22.958 2.99233 22.7371 2.56879 22.683 2.10942L22.6698 1.88847C22.6698 1.38762 22.8688 0.907276 23.2229 0.55312C23.577 0.198963 24.0574 0 24.5582 0H32.1116Z",fill:"white"}})])]),s("tribune"),s("panel"),t.popUp?s("pop-up"):t._e(),s("progres")],1)}),[],!1,(function(t){for(let e in Ft)this[e]=Ft[e]}),null,null,null);Zt.options.__file="vue/App.vue";var Dt=Zt.exports;u.use(m);var qt=new m.Store({state:{popUp:!0,popUpItem:"personage",score:null,combo:null,comboScore:null,time:null,pause:!1,greatPoint:!1,gameLogic:{animat:"idle",jump:10,animatGeneral:"idle",jumpGeneral:10,n:null,intervalGame:null,maxCombo:5,char:null,userName:null},jumpButtonClose:!0,jump:0,panel:{heart:{max:-300,min:0,step:60,list:[]}}},getters:{greatPoint:t=>t.greatPoint,animatPerson:t=>t.gameLogic.animat,jumpPerson:t=>t.gameLogic.jump,char:t=>t.gameLogic.char,comboScore:t=>t.comboScore,animatPersonGeneral:t=>t.gameLogic.animatGeneral,jumpPersonGeneral:t=>t.gameLogic.jumpGeneral,userName:t=>t.gameLogic.userName,progressBar:t=>20*t.combo,jump:t=>t.jump,popUp:t=>t.popUp,heartList:t=>t.panel.heart.list,score:t=>{let e=`${t.score}`;const s=e.length;for(let a=0;a<3-s;a++)e="0"+e;return e},combo:t=>t.combo,gameTime:t=>{const e=Math.floor(t.time/60),s=t.time%60;return(""+e).concat(":",(""+(a=s)).length<2?"0".concat(a):a);var a},jumpButton:t=>t.jumpButtonClose},mutations:{setUserName(t,e){t.gameLogic.userName=e},setChar(t,e){t.gameLogic.char=e},setAnimatGeneral(t,e){t.gameLogic.animatGeneral=e},setJumpGeneral(t,e){t.gameLogic.jumpGeneral=e},setAnimat(t,e){t.gameLogic.animat=e},setJump(t,e){t.gameLogic.jump=e},setGreatPoint(t){t.greatPoint||this.commit("setAnimatGeneral","jump"),t.greatPoint=!0},addJump(t){t.jump++},startGame(t){t.score=0,t.combo=1,t.time=120,t.gameLogic.n=2.5,t.pause=!1,t.panel.heart.list=[{point:0,index:1,flicker:!1},{point:0,index:2,flicker:!1},{point:0,index:3,flicker:!1}];let e=0,s=0;t.intervalGame=setInterval((()=>{if(!t.pause){e+=10,s+=10;const a=t.gameLogic.n-.1*(t.combo-1);if(s>=1e3*a){let e=1;switch(t.combo){case 3:case 4:e=2;break;case 5:case 4:e=3}t.gameLogic.jump=10*e,t.time>20?t.gameLogic.n-=.005:t.gameLogic.n=2,this.commit("setAnimat","jump"),this.commit("closeJumpButton",{status:!1}),s=0}e>=1e3&&(t.time--,e=0)}(0===t.time||t.panel.heart.list.every((t=>0!==t.point)))&&this.commit("gameOver")}),10)},endJump(t){if(this.commit("setAnimat",t.greatPoint?"happy":"angry"),this.commit("closeJumpButton",{status:!0}),t.greatPoint){let e=1*t.combo;5===t.combo&&(e+=10),this.commit("scorePlus",{number:e}),this.commit("comboPlus"),t.greatPoint=!1}else this.commit("comboSet",{value:1}),this.commit("animateHeartMinus")},closeJumpButton(t,e){t.jumpButtonClose=e.status},gameOver(t){t.pause=!0,clearInterval(t.intervalGame);let e=!1;if(this.commit("toglePopUp",!0),t.score>=51&&t.score<=200||t.score>=201?(e=!0,this.commit("nextStape","score")):this.commit("nextStape","failure"),e){const e=new FormData;e.append("score",t.score);try{fetch("/ajax/jump.php",{method:"POST",body:e})}catch(s){console.error("Ошибка:",s)}}},comboPlus(t,e){t.comboScore++,t.gameLogic.maxCombo>=t.combo+1&&t.combo++},comboSet(t,e){t.combo=e.value},scorePlus(t,e){t.score+=e.number},animateHeartMinus(t,e){const s=Object.assign([],t.panel.heart.list);for(const a of s.reverse())if(0===a.point){if(a.flicker){a.flicker=!1;const e=setInterval((()=>{if(a.point==t.panel.heart.max)return clearInterval(e),!1;a.point-=t.panel.heart.step}),150);break}a.flicker=!0;break}},animateHeartPlus(t,e){Object.assign([],t.panel.heart.list);for(const s of t.panel.heart.list)if(s.point<0){const e=setInterval((()=>{if(s.point==t.panel.heart.min)return clearInterval(e),!1;s.point+=t.panel.heart.step}),150);break}},nextStape(t,e){t.popUpItem=e},toglePopUp(t){t.popUp=!t.popUp}}});u.use(m),new u({store:qt,render:t=>t(Dt)}).$mount("#app");const Rt=document.querySelector(".game-wrap");window.addEventListener("resize",(()=>{document.body.offsetHeight<=500?Rt.style.transform=`scale(${(document.body.offsetHeight/500).toFixed(2)})`:document.body.offsetHeight>500&&(Rt.style.transform="")}));
