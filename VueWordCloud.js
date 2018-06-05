!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):t.VueWordCloud=n()}(this,function(){"use strict";function c(t){return"function"==typeof t}function E(){}var h=function(t){this.previousValue=t,this.interrupted=!1,this.interruptHandlers=new Set};h.prototype.throwIfInterrupted=function(){if(this.interrupted)throw new Error},h.prototype.interrupt=function(){this.interrupted||(this.interrupted=!0,this.interruptHandlers.forEach(function(t){try{t()}catch(t){}}))},h.prototype.onInterrupt=function(t){if(this.interrupted&&!this.interruptHandlers.has(t))try{t()}catch(t){}this.interruptHandlers.add(t)};var t="asyncComputed_",l=t+"promise_",d=t+"trigger_";function n(t){return function(){return t}}function i(){return[]}var r={words:{type:Array,default:i},text:{type:[String,Function],default:""},weight:{type:[Number,Function],default:1},rotation:{type:[Number,Function],default:0},rotationUnit:{type:[String,Function],default:"turn"},fontFamily:{type:[String,Function],default:"serif"},fontStyle:{type:[String,Function],default:"normal"},fontVariant:{type:[String,Function],default:"normal"},fontWeight:{type:[String,Function],default:"normal"},color:{type:[String,Function],default:"Black"},spacing:{type:Number,default:0},fontSizeRatio:{type:Number,default:0},enterAnimation:{type:[Object,String],default:n({opacity:0})},leaveAnimation:{type:[Object,String],default:n({opacity:0})},animationDuration:{type:Number,default:1e3},animationOverlap:{type:Number,default:1},animationEasing:{type:String,default:"ease"},createCanvas:{type:Function,default:function(){return document.createElement("canvas")}},loadFont:{type:Function,default:function(t,n,i,r){return document.fonts.load([n,i,"1px",t].join(" "),r)}},createWorker:{type:Function,default:function(t){return new Worker(URL.createObjectURL(new Blob([t])))}}};var s=n(null);function C(t){return t&&"object"==typeof t}function L(t){return"string"==typeof t}var e={animationOptions:function(){var t,r,e,n=this.enterAnimation,i=this.leaveAnimation,o=this.animationDuration;if(C(n)&&C(i)){var u=(t=Object.assign({},n,i),r=s,e={},Object.entries(t).forEach(function(t){var n=t[0],i=t[1];e[n]=r(i,n)}),e),a=function(t){Object.assign(t.style,n)},f=function(t,n){setTimeout(function(){Object.assign(t.style,u),setTimeout(n,o)},1)};return{props:{css:!1},on:{beforeAppear:a,appear:f,beforeEnter:a,enter:f,leave:function(t,n){Object.assign(t.style,i),setTimeout(n,o)}}}}return L(n)&&L(i)?{props:{duration:o,appear:!0,appearActiveClass:n,enterActiveClass:n,leaveActiveClass:i}}:{}},normalizedAnimationOverlap:function(){var t=this.animationOverlap;return(t=Math.abs(t))<1&&(t=1/t),t},separateAnimationDelay:function(){var t=this.animationDuration,n=this.cloudWords,i=this.separateAnimationDuration;return 1<n.length?(t-i)/(n.length-1):0},separateAnimationDuration:function(){var t=this.animationDuration,n=this.normalizedAnimationOverlap,i=this.cloudWords;return 0<i.length?t/Math.min(n,i.length):0}};function N(t){return c(t)?t:n(t)}function z(t){return void 0===t}function q(t,n){return t.postMessage(n),o=t,new Promise(function(i,r){var e,t=function(t){var n=t.data;e(),i(n)},n=function(t){var n=t.error;e(),r(n)};e=function(){o.removeEventListener("message",t),o.removeEventListener("error",n)},o.addEventListener("message",t),o.addEventListener("error",n)});var o}function A(t,n,i){return Math.ceil(t*Math.abs(Math.sin(i))+n*Math.abs(Math.cos(i)))}function B(t,n,i){return Math.ceil(t*Math.abs(Math.cos(i))+n*Math.abs(Math.sin(i)))}function k(t,n,i,r,e){return[t,n,i,r+"px",e].join(" ")}function P(t,n){return Math.ceil(t/n)*n}function T(t,n,i){var r=i().getContext("2d");return r.font=n,r.measureText(t).width}var R=function(t,n,i,r,e,o,u){this.t=t,this.n=n,this.i=i,this.r=r,this.e=e,this.o=o,this.u=u,this.a=1,this.f=0,this.s=0,this.c=0},o={h:{configurable:!0},l:{configurable:!0},d:{configurable:!0},v:{configurable:!0},p:{configurable:!0},m:{configurable:!0},g:{configurable:!0},b:{configurable:!0},y:{configurable:!0},M:{configurable:!0},w:{configurable:!0},x:{configurable:!0},F:{configurable:!0},S:{configurable:!0},j:{configurable:!0},O:{configurable:!0},W:{configurable:!0},A:{configurable:!0},B:{configurable:!0}};o.h.get=function(){return this.a},o.h.set=function(t){this.a!==t&&(this.a=t,this.k=void 0)},o.l.get=function(){return k(this.r,this.e,this.o,this.h,this.i)},o.d.get=function(){return void 0===this.P&&(this.P=T(this.t,k(this.r,this.e,this.o,1,this.i),this.u)),this.P},o.v.get=function(){return this.d*this.h},o.p.get=function(){return this.s*this.h},o.p.set=function(t){this.s=t/this.h},o.m.get=function(){return this.c*this.h},o.m.set=function(t){this.c=t/this.h},o.g.get=function(){return B(this.v,this.h,this.n)},o.b.get=function(){return A(this.v,this.h,this.n)},o.y.get=function(){return this.p-this.g/2},o.M.get=function(){return this.m-this.b/2},o.w.get=function(){return this.f},o.w.set=function(t){this.f!==t&&(this.f=t,this.k=void 0)},o.x.get=function(){return void 0===this.k&&(this.k=function(t,n,i,r,e,o,u,a,f){var s=k(n,i,r,e*=4,o),c=T(t,s,f),h=u*e*2,l=f(),d=l.getContext("2d"),v=P(B(h+2*e+c,h+3*e,a),4),p=P(A(h+2*e+c,h+3*e,a),4);l.width=v,l.height=p,d.translate(v/2,p/2),d.rotate(a),d.font=s,d.textAlign="center",d.textBaseline="middle",d.fillText(t,0,0),0<h&&(d.miterLimit=1,d.lineWidth=h,d.strokeText(t,0,0));for(var m=d.getImageData(0,0,v,p).data,g=[],b=1/0,y=0,M=1/0,w=0,x=v/4,F=p/4,S=0;S<x;++S)for(var j=0;j<F;++j)t:for(var O=0;O<4;++O)for(var W=0;W<4;++W)if(m[4*(v*(4*j+W)+(4*S+O))+3]){g.push([S,j]),b=Math.min(S,b),y=Math.max(S+1,y),M=Math.min(j,M),w=Math.max(j+1,w);break t}return 0<g.length?[g.map(function(t){var n=t[0],i=t[1];return[n-b,i-M]}),y-b,w-M,Math.ceil(x/2)-b,Math.ceil(F/2)-M]:[g,0,0,0,0]}(this.t,this.r,this.e,this.o,this.h,this.i,this.w,this.n,this.u)),this.k},o.F.get=function(){return this.x[0]},o.S.get=function(){return this.x[1]},o.j.get=function(){return this.x[2]},o.O.get=function(){return this.x[3]},o.W.get=function(){return this.x[4]},o.A.get=function(){return Math.ceil(this.p)-this.O},o.A.set=function(t){this.p=t+this.O},o.B.get=function(){return Math.ceil(this.m)-this.W},o.B.set=function(t){this.m=t+this.W},Object.defineProperties(R.prototype,o);var S="div";var u,a={name:"VueWordCloud",mixins:[(u={cloudWords:{get:function(s){var t,r=this,n=this,h=n.elementWidth,l=n.elementHeight,v=n.words,i=n.text,e=n.weight,o=n.rotation,u=n.rotationUnit,d=n.fontFamily,p=n.fontStyle,m=n.fontVariant,g=n.fontWeight,a=n.color,c=n.spacing,b=n.fontSizeRatio,y=n.createCanvas,f=n.loadFont,M=n.createWorker;t=b,b=1<(t=Math.abs(t))?1/t:t;var w,x,F,S=(x=(w=[h,l])[0],(F=w[1])<x?[1,F/x]:x<F?[x/F,1]:[1,1]);if(0<h&&0<l){var j=N(i),O=N(e),W=N(o),A=N(u),B=N(d),k=N(p),P=N(m),T=N(g),D=N(a);return v=v.map(function(t,n){var i,r,e,o,u,a,f,s,c,h,l;t&&(L(t)?e=t:Array.isArray(t)?(e=(i=t)[0],o=i[1]):C(t)&&(e=(r=t).text,o=r.weight,u=r.rotation,a=r.rotationUnit,f=r.fontFamily,s=r.fontStyle,c=r.fontVariant,h=r.fontWeight,l=r.color)),z(e)&&(e=j(t,n,v)),z(o)&&(o=O(t,n,v)),z(u)&&(u=W(t,n,v)),z(a)&&(a=A(t,n,v)),z(f)&&(f=B(t,n,v)),z(s)&&(s=k(t,n,v)),z(c)&&(c=P(t,n,v)),z(h)&&(h=T(t,n,v)),z(l)&&(l=D(t,n,v));var d=new R(e,function(){switch(a){case"turn":return u*Math.PI*2;case"deg":return u*Math.PI/180}return u}(),f,s,c,h,y);return Object.assign(d,{T:t,D:o,C:l}),d}),Promise.resolve().then(function(){return Promise.all(v.map(function(t){var n=t.i,i=t.r,r=t.o,e=t.t;return f(n,i,r,e)}))}).catch(E).then(function(){if(0<(v=v.filter(function(t){return 0<t.v}).sort(function(t,n){return n.D-t.D})).length){var t=v[0],n=(i=v)[i.length-1],e=t.D,o=n.D;if(o<e){var u=0<b?1/b:0<o?e/o:e<0?o/e:1+e-o;v.forEach(function(t){var n,i,r;t.h=(n=t.D,(r=1)+(n-(i=o))*(u-r)/(e-i))})}v.reduceRight(function(t,n){return n.h<2*t?n.h/=t:(t=n.h,n.h=1),n.L=t},1),v.forEach(function(t){t.h*=4});var a=M('!function(){"use strict";var h=function(r){self.removeEventListener("message",h);var i,o,v,c,s,n=r.data,t=function(){i={},s=c=v=o=0};t();var f=function(){return Math.ceil((o+v)/2)},a=function(){return Math.ceil((c+s)/2)},u=function(){return{left:f(),top:a(),width:v-o,height:s-c}},e=function(u,r,t){return function(r,t,n){var f,a,u=r[0],e=r[1],i=t[0],o=t[1];e<u?(f=1,a=e/u):u<e?(a=1,f=u/e):f=a=1;var v=[i,o];if(n(v))return v;for(var c=i,s=o,h=i,M=o,l=c,g=s;;){i-=f,o-=a,c+=f,s+=a;var d=Math.floor(i),m=Math.floor(o),p=Math.ceil(c),w=Math.ceil(s);if(l<p)for(var B=m;B<w;++B){var F=[p,B];if(n(F))return F}if(g<w)for(var b=p;d<b;--b){var j=[b,w];if(n(j))return j}if(d<h)for(var k=w;m<k;--k){var q=[d,k];if(n(q))return q}if(m<M)for(var x=d;x<p;++x){var y=[x,m];if(n(y))return y}h=d,M=m,l=p,g=w}}(n,[r+f(),t+a()],function(r){var f,a,t=r[0],n=r[1];return f=t,a=n,u.every(function(r){var t=r[0],n=r[1];return!i[f+t+"|"+(a+n)]})})};self.postMessage({}),self.addEventListener("message",function(r){self.postMessage({getBounds:u,put:function(r,u,e){r.forEach(function(r){var t=r[0],n=r[1],f=u+t,a=e+n;i[f+"|"+a]=!0,o=Math.min(f,o),v=Math.max(f+1,v),c=Math.min(a,c),s=Math.max(a+1,s)})},findFit:e,clear:t}[r.data.name].apply(null,r.data.args))})};self.addEventListener("message",h)}();\n'),f={completedWords:0,totalWords:v.length};return Promise.resolve().then(function(){return s.throwIfInterrupted(),r.progress=f,q(a,S)}).then(function(){s.throwIfInterrupted(),f.completedWords++;var n=Promise.resolve();return v.reduce(function(t,r,e){return n=n.then(function(){return r.L<t.L?Promise.resolve().then(function(){return q(a,{name:"clear"})}).then(function(){var n=Promise.resolve(),i=t.L/r.L;return v.slice(0,e).forEach(function(t){n=n.then(function(){return t.h*=i,q(a,{name:"put",args:[t.F,t.A,t.B]})})}),n}):q(a,{name:"put",args:[t.F,t.A,t.B]})}).then(function(){return r.w=c,q(a,{name:"findFit",args:[r.F,r.A,r.B]})}).then(function(t){var n=t[0],i=t[1];s.throwIfInterrupted(),f.completedWords++,r.A=n,r.B=i,r.w=0}),r}),n}).then(function(){return q(a,{name:"put",args:[n.F,n.A,n.B]})}).then(function(){return q(a,{name:"getBounds"})}).then(function(t){var n=t.left,i=t.top,r=t.width,e=t.height;if(0<r&&0<e){var o=Math.min(h/r,l/e);v.forEach(function(t){t.p-=n,t.m-=i,t.h*=o})}var c=new Set;return v.map(function(t){for(var n=t.T,i=t.t,r=t.D,e=t.n,o=t.l,u=t.p,a=t.m,f=t.C,s=JSON.stringify([i,d,p,m,g]);c.has(s);)s+="!";return c.add(s),{key:s,word:n,text:i,weight:r,rotation:e,font:o,color:f,left:u,top:a}})}).finally(function(){a.terminate()}).finally(function(){s.throwIfInterrupted(),r.progress=null})}var i;return[]})}return[]},default:i}},{data:function(){var n={};return Object.keys(u).forEach(function(t){n[d+t]={}}),n},computed:{},beforeCreate:function(){var i=this,s=new Set;Object.entries(u).forEach(function(t){var r=t[0],n=t[1],e=n.get,o=n.default,u=n.errorHandler;void 0===u&&(u=E);var a,f=!0;i.$options.computed[r]=function(){return this[d+r],this[l+r],o},i.$options.computed[l+r]=function(){var n=this;a&&(a.interrupt(),s.delete(a)),f&&(f=!1,c(o)&&(o=o.call(this)));var i=new h(o);a=i,s.add(a),new Promise(function(t){t(e.call(n,i))}).then(function(t){i.throwIfInterrupted(),o=t,n[d+r]={}}).catch(u)}})}})],props:r,data:function(){return{elementWidth:0,elementHeight:0,progress:null}},computed:e,watch:{cloudWords:function(t){this.$emit("update:cloudWords",t)},progress:{handler:function(t){this.$emit("update:progress",t)},deep:!0,immediate:!0}},mounted:function(){this.startElementResizeDetector()},methods:{defaultScopedSlot:function(t){return t.text},detectElementResize:function(){this.elementWidth=this.$el.offsetWidth,this.elementHeight=this.$el.offsetHeight},startElementResizeDetector:function(){var t=this;requestAnimationFrame(function(){t._isDestroyed||(setTimeout(function(){t.startElementResizeDetector()},1e3),t.detectElementResize())})}},render:function(b){var t=this,y=t.$scopedSlots,M=t.animationEasing,w=t.animationOptions,n=t.cloudWords,i=t.defaultScopedSlot,x=t.separateAnimationDelay,F=t.separateAnimationDuration;y=Object.assign({},{default:i},y);var r=n.map(function(t,n){var i=t.word,r=t.key,e=t.text,o=t.weight,u=t.rotation,a=t.font,f=t.color,s=t.left,c=t.top,h=y.default({word:i,text:e,weight:o,font:a,color:f,left:s,top:c}),l={position:"absolute",left:"50%",top:"50%",color:f,font:a,whiteSpace:"nowrap",transform:["translate(-50%,-50%)","rotate("+u+"rad)"].join(" ")},d={position:"absolute",left:s+"px",top:c+"px"};if(0<F){var v={transitionProperty:"all",transitionDuration:F+"ms",transitionTimingFunction:M,transitionDelay:x*n+"ms"},p={animationDuration:F+"ms",animationTimingFunction:M,animationDelay:x*n+"ms"};Object.assign(l,v),Object.assign(d,v,p)}var m=b(S,{style:l},[h]),g=b(S,{key:r,style:d},[m]);return b("transition",Object.assign({},w),[g])}),e=b(S,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},r);return b(S,{style:{position:"relative",width:"100%",height:"100%"}},[e])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(a.name,a),a});
