(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["clipboard"],{1148:function(t,e,r){"use strict";var n=r("a691"),o=r("1d80");t.exports=function(t){var e=String(o(this)),r="",i=n(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(r+=e);return r}},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var u=n[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(f){s.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,r){"use strict";var n=r("23e7"),o=r("5a34"),i=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),o=r("825a"),i=r("d039"),a=r("ad6d"),c="toString",u=RegExp.prototype,s=u[c],f=i((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=c;(f||l)&&n(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in u)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},3654:function(t,e,r){},"408a":function(t,e,r){var n=r("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=n(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,r){var n=r("861d"),o=r("c6b6"),i=r("b622"),a=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"5a34":function(t,e,r){var n=r("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,r){var n=r("b622"),o=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[o]=!1,"/./"[t](e)}catch(n){}}return!1}},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b116:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[t._v(" Clipboard "),r("hr"),r("section",[t._v("复制内容:"+t._s(t.pasteContent)),r("br")]),t._m(0),r("section",[t._v(" 粘贴图片: "),r("img",{ref:"img",attrs:{src:t.pasteImage}})])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[t._v(" 粘贴内容: "),r("textarea")])}],i=(r("b680"),r("d3b7"),r("25f0"),r("159b"),r("caad"),r("2532"),{name:"Keyborad",data:function(){return{copyContent:"",pasteContent:"",pasteImage:""}},mounted:function(){var t=this;this.toFixed(1.005,2),document.body.oncopy=function(t){var e=document.getSelection();t.clipboardData.setData("text/plain","该文档不允许复制剪贴操作，谢谢配合!"+e.toString()),t.preventDefault()},document.body.onpaste=function(e){t.pasteContent=e.clipboardData.getData("text/plain"),e.clipboardData.items&&e.clipboardData.items.forEach((function(e){if(e.type.includes("image")){var r=e.getAsFile();console.log(r);var n=new FileReader;n.onload=function(e){t.$refs.img.style.width=r.width+"px",t.$refs.img.style.height=r.height+"px",t.pasteImage=e.target.result,console.log(t.pasteImage)},n.onerror=function(t){console.log(t)},n.readAsDataURL(r)}}))}},methods:{toFixed:function(t,e){var r=Math.pow(10,e),n=t*r+.5;return n=parseInt(n,10)/r,n+""}}}),a=i,c=(r("d256"),r("0c7c")),u=Object(c["a"])(a,n,o,!1,null,"d2ddcf1c",null);e["default"]=u.exports},b680:function(t,e,r){"use strict";var n=r("23e7"),o=r("a691"),i=r("408a"),a=r("1148"),c=r("d039"),u=1..toFixed,s=Math.floor,f=function(t,e,r){return 0===e?r:e%2===1?f(t,e-1,r*t):f(t*t,e/2,r)},l=function(t){var e=0,r=t;while(r>=4096)e+=12,r/=4096;while(r>=2)e+=1,r/=2;return e},d=function(t,e,r){var n=-1,o=r;while(++n<6)o+=e*t[n],t[n]=o%1e7,o=s(o/1e7)},p=function(t,e){var r=6,n=0;while(--r>=0)n+=t[r],t[r]=s(n/e),n=n%e*1e7},h=function(t){var e=6,r="";while(--e>=0)if(""!==r||0===e||0!==t[e]){var n=String(t[e]);r=""===r?n:r+a.call("0",7-n.length)+n}return r},v=u&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){u.call({})}));n({target:"Number",proto:!0,forced:v},{toFixed:function(t){var e,r,n,c,u=i(this),s=o(t),v=[0,0,0,0,0,0],g="",b="0";if(s<0||s>20)throw RangeError("Incorrect fraction digits");if(u!=u)return"NaN";if(u<=-1e21||u>=1e21)return String(u);if(u<0&&(g="-",u=-u),u>1e-21)if(e=l(u*f(2,69,1))-69,r=e<0?u*f(2,-e,1):u/f(2,e,1),r*=4503599627370496,e=52-e,e>0){d(v,0,r),n=s;while(n>=7)d(v,1e7,0),n-=7;d(v,f(10,n,1),0),n=e-1;while(n>=23)p(v,1<<23),n-=23;p(v,1<<n),d(v,1,1),p(v,2),b=h(v)}else d(v,0,r),d(v,1<<-e,0),b=h(v)+a.call("0",s);return s>0?(c=b.length,b=g+(c<=s?"0."+a.call("0",s-c)+b:b.slice(0,c-s)+"."+b.slice(c-s))):b=g+b,b}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),u=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(h,v,g,b){for(var x,m,y=i(h),w=o(y),E=n(v,g,3),F=a(w.length),S=0,_=b||c,A=e?_(h,F):r||d?_(h,0):void 0;F>S;S++)if((p||S in w)&&(x=w[S],m=E(x,S,y),t))if(e)A[S]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return S;case 2:u.call(A,x)}else switch(t){case 4:return!1;case 7:u.call(A,x)}return l?-1:s||f?f:A}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},caad:function(t,e,r){"use strict";var n=r("23e7"),o=r("4d64").includes,i=r("44d2");n({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d256:function(t,e,r){"use strict";r("3654")},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=clipboard.868726fd.js.map