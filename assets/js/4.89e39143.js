(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{313:function(e,t,n){},354:function(e,t,n){"use strict";n(313)},360:function(e,t,n){"use strict";n.r(t);n(43),n(4),n(15),n(17);function i(e,t,n=50,i=3e3){var a=document.querySelectorAll(".global-tip"),s=(new Date).getTime(),o=0==a.length?0:a[a.length-1].getAttribute("data-top"),r=parseInt(o)+(0!=a.length?a[a.length-1].offsetHeight+17:n);let l=document.createElement("div");l.className=`global-tip tip-${t} ${s}`,l.style.top=parseInt(o)+"px",l.setAttribute("data-top",r),"info"==t||1==t?l.innerHTML=`<i class="iconfont icon-info icon"></i><p class="tip-info-content">${e}</p>`:"success"==t||2==t?l.innerHTML=`<i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">${e}</p>`:"danger"==t||3==t?l.innerHTML=`<i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">${e}</p>`:"warning"!=t&&4!=t||(l.innerHTML=`<i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">${e}</p>`),document.body.appendChild(l);let h=document.getElementsByClassName(s)[0];setTimeout(()=>{h.style.top=parseInt(r)+"px",h.style.opacity="1"},10),setTimeout(()=>{h.style.top="0px",h.style.opacity="0";var e=function(e){for(var t=[],n=e;n;n=n.nextSibling)1===n.nodeType&&n!==e&&t.push(n);return t}(h);for(let i=0;i<e.length;i++){var t=e[i],n=parseInt(t.getAttribute("data-top"))-t.offsetHeight-17;t.setAttribute("data-top",n),t.style.top=n+"px"}setTimeout(()=>{h.remove()},500)},i)}var a={data:()=>({navColor:1,switchNavColor:!1,bgTimeColor:!1,bgTimeColorArray:["transparent","rgba(255, 148, 48, .2)","rgba(0, 0, 0, .3)","rgba(0, 0, 0, .5)"],descFade:!1,desc:[],descFadeInTime:200,descFadeOutTime:100,descNextTime:800,descFontSize:"1.4rem",bubble:!1,bubblePosition:0,bubbleNum:200,fadeInInterval:"",fadeOutInterval:""}),mounted(){const e=document.getElementById("banner-arrow");e&&e.parentNode.removeChild(e);let t=document.createElement("a");if(t.id="banner-arrow",t.className="banner-arrow",document.getElementsByClassName("banner")[0].append(t),document.getElementById("banner-arrow").addEventListener("click",e=>{this.scrollFn()}),this.initConfig(),this.bgTimeColor&&this.bgTimeColorAndTip(),setTimeout(()=>{this.noBgBlur()},100),this.blurText(),this.watchScroll(),this.descFade&&this.textFadeInAndOut(),this.bubble){let e=document.createElement("canvas");e.id="canvas",e.style.top=this.bubblePosition+"%",document.getElementsByClassName("banner")[0].append(e),this.canvasBubble()}},watch:{$route(e,t){"/"==e.path&&Object.keys(this.$route.query).length>0&&setTimeout(()=>{this.clickArrow()},200)}},methods:{initConfig(){this.$themeConfig.indexImg&&Object.keys(this.$themeConfig.indexImg).length>0&&(this.navColor=null==this.$themeConfig.indexImg.navColor?this.navColor:this.$themeConfig.indexImg.navColor,this.switchNavColor=null==this.$themeConfig.indexImg.switchNavColor?this.switchNavColor:this.$themeConfig.indexImg.switchNavColor,this.bgTimeColor=null==this.$themeConfig.indexImg.bgTimeColor?this.bgTimeColor:this.$themeConfig.indexImg.bgTimeColor,this.bgTimeColorArray=null==this.$themeConfig.indexImg.bgTimeColorArray?this.bgTimeColorArray:this.$themeConfig.indexImg.bgTimeColorArray,this.descFade=null==this.$themeConfig.indexImg.descFade?this.descFade:this.$themeConfig.indexImg.descFade,this.desc=null==this.$themeConfig.indexImg.desc?this.desc:this.$themeConfig.indexImg.desc,this.descFontSize=null==this.$themeConfig.indexImg.descFontSize?this.descFontSize:this.$themeConfig.indexImg.descFontSize,this.descFadeInTime=null==this.$themeConfig.indexImg.descFadeInTime?this.descFadeInTime:this.$themeConfig.indexImg.descFadeInTime,this.descNextTime=null==this.$themeConfig.indexImg.descNextTime?this.descNextTime:this.$themeConfig.indexImg.descNextTime,this.bubble=null==this.$themeConfig.indexImg.bubble?this.bubble:this.$themeConfig.indexImg.bubble,this.bubblePosition=null==this.$themeConfig.indexImg.bubblePosition?this.bubblePosition:this.$themeConfig.indexImg.bubblePosition,this.bubbleNum=null==this.$themeConfig.indexImg.bubbleNum?this.bubbleNum:this.$themeConfig.indexImg.bubbleNum)},scrollFn(){const e=document.getElementsByClassName("banner")[0].clientHeight;window.scrollTo({top:e,behavior:"smooth"})},clickArrow(){document.getElementById("banner-arrow").click()},watchScroll(){const e=document.getElementsByClassName("banner")[0].clientHeight;window.onscroll=()=>{document.documentElement.scrollTop<e?(this.blurText(this.navColor),this.noBgBlur()):(this.switchNavColor&&1==this.navColor?this.blurText(2):this.switchNavColor&&2==this.navColor&&this.blurText(1),this.bgBlur())}},bgBlur(){document.getElementsByClassName("navbar")[0].className="navbar blur"},noBgBlur(){document.getElementsByClassName("navbar")[0].className="navbar navbar1 blur"},blurText(e=this.navColor){let t=document.getElementsByClassName("site-name")[0],n=document.getElementsByClassName("search-box")[0],i=document.getElementsByClassName("nav-links")[0];1==e?(t.className="site-name can-hide",i.className="nav-links can-hide",n.className="search-box"):2==e&&(t.className="site-name site-name1 can-hide",i.className="nav-links nav-links1 can-hide",n.className="search-box search-box1")},bgTimeColorAndTip(){var e=(new Date).getHours(),t=(new Date).getMinutes(),n=(new Date).getSeconds();e=e<10?"0"+e:e,t=t<10?"0"+t:t,n=n<10?"0"+n:n;let a=document.createElement("div");a.className="banner-color",e>=6&&e<11?(a.style.backgroundColor=this.bgTimeColorArray[0],i(`早上好呀~~，现在是 ${e}:${t}:${n}，吃早餐了吗？😊🤭`,"info",50,4e3)):e>=12&&e<=16?(a.style.backgroundColor=this.bgTimeColorArray[0],i(`下午好呀~~，现在是 ${e}:${t}:${n}，繁忙的下午也要适当休息哦🥤🏀~~`,"info",50,4e3)):e>=16&&e<=19?(a.style.backgroundColor=this.bgTimeColorArray[1],i(`到黄昏了~~，现在是 ${e}:${t}:${n}，该准备吃饭啦🥗🍖~~`,"info",50,4e3)):e>=19&&e<24?(a.style.backgroundColor=this.bgTimeColorArray[2],i(`晚上好呀~~，现在是 ${e}:${t}:${n}，该准备洗漱睡觉啦🥱😪~~`,"info",50,4e3)):e>=0&&e<6&&(a.style.backgroundColor=this.bgTimeColorArray[3],i(`别再熬夜了~~，现在是 ${e}:${t}:${n}，早点睡吧，让我们一起欣赏早上的太阳~~😇🛏`,"info",50,4e3)),document.getElementsByClassName("banner")[0].parentNode.append(a)},textFadeInAndOut(e=this.desc,t=this.descFontSize,n=this.descFadeInTime,i=this.descFadeOutTime,a=this.descNextTime){let s=document.getElementsByClassName("description")[0];if(s){s.style.fontSize=t;var o=document.createElement("span");o.className="typed",o.innerHTML="|";var r=0,l=0,h=s.innerText;s.innerText="",s.appendChild(document.createElement("span")),o&&s.appendChild(o),this.fadeInInterval=setInterval(()=>{d()},n)}else{let e=document.getElementsByClassName("hero")[0];s=document.createElement("p"),s&&(s.className="description"),s&&e.appendChild(s)}let d=()=>{s&&(o.style.animation="none",e instanceof Array&&e.length>0&&(h=e[l]),s.firstChild.innerText=h.substring(0,r++),r>h.length&&(clearInterval(this.fadeInInterval),o.style.animation="typedBlink 1s infinite",setTimeout(()=>{this.fadeOutInterval=setInterval(()=>{c()},i)},a)))},c=()=>{r>=0?(o.style.animation="none",s.firstChild.innerText=h.substring(0,r--)):(clearInterval(this.fadeOutInterval),o.style.animation="typedBlink 1s infinite",setTimeout(()=>{++l>=e.length&&(l=0),this.fadeInInterval=setInterval(()=>{d()},n)},a))}},canvasBubble(e=this.bubbleNum){var t=document.getElementById("canvas"),n=t.getContext("2d");function i(){this.alive=!0,this.x=Math.round(Math.random()*t.width),this.y=Math.round(Math.random()*t.height),this.diameter=10.8*Math.random(),this.ColorData={Red:Math.round(255*Math.random()),Green:Math.round(255*Math.random()),Blue:Math.round(255*Math.random())},this.alpha=.5,this.color="rgba("+this.ColorData.Red+", "+this.ColorData.Green+","+this.ColorData.Blue+","+this.alpha+")",this.velocity={x:Math.round(Math.random()<.5?-1:1)*Math.random()*.7,y:Math.round(Math.random()<.5?-1:1)*Math.random()*.7}}i.prototype={Draw:function(){n.fillStyle=this.color,n.beginPath(),n.arc(this.x,this.y,this.diameter,0,2*Math.PI,!1),n.fill()},Update:function(){this.alpha<.8&&(this.alpha+=.01,this.color="rgba("+this.ColorData.Red+", "+this.ColorData.Green+","+this.ColorData.Blue+","+this.alpha+")"),this.x+=this.velocity.x,this.y+=this.velocity.y,(this.x>t.width+5||this.x<-5||this.y>t.height+5||this.y<-5)&&(this.alive=!1)}};var a={rArray:[],Init:function(){t.width=window.innerWidth,t.height=window.innerHeight;for(var n=0;n<e;n++)this.rArray.push(new i);this.Update()},Draw:function(){n.clearRect(0,0,t.width,t.height),this.rArray.forEach((function(e){e.Draw()}))},Update:function(){if(a.rArray.length<e)for(var t=a.rArray.length;t<e;t++)a.rArray.push(new i);a.rArray.forEach((function(e){e.Update()})),a.rArray=a.rArray.filter((function(e){return e.alive})),a.Draw(),requestAnimationFrame(a.Update)}};window.onresize=function(){a.rArray=[],t.width=window.innerWidth,t.height=window.innerHeight},a.Init()}},beforeMount(){clearInterval(this.fadeInInterval),clearInterval(this.fadeOutInterval)},beforeDestroy(){clearInterval(this.fadeInInterval),clearInterval(this.fadeOutInterval)}},s=(n(354),n(14)),o=Object(s.a)(a,(function(){return(0,this._self._c)("div",{staticClass:"index-bigimg",staticStyle:{display:"none"}})}),[],!1,null,null,null);t.default=o.exports}}]);