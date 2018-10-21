/*! @laomao800/vue-nav-box v1.0.1 */(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],b=0,p=[];b<s.length;b++)r=s[b],i[r]&&p.push(i[r][0]),i[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(o=!1)}o&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},i={index:0},a=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("e35a")},"0894":function(t,e,n){var o=n("dc31");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("499e").default;i("1d25da44",o,!0,{sourceMap:!1,shadowMode:!1})},"42a9":function(t,e,n){"use strict";var o=n("0894"),i=n.n(o);i.a},"5dbe":function(t,e,n){"use strict";var o=n("be3d"),i=n.n(o);i.a},"78ee":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.nav-box__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.nav-box__content{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:16px;overflow:auto}.nav-box__content:hover::-webkit-scrollbar{opacity:1}.nav-box__content::-webkit-scrollbar{width:8px;height:8px;background-color:rgba(0,0,0,.06);-webkit-border-radius:100px;opacity:0}.nav-box__content::-webkit-scrollbar:hover{background-color:rgba(0,0,0,.09)}.nav-box__content::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);-webkit-border-radius:100px}.nav-box__content::-webkit-scrollbar-thumb:active{background:rgba(0,0,0,.6)}.nav-box__navs{-webkit-box-sizing:content-box;box-sizing:content-box;width:200px;padding-left:16px;overflow:auto}.nav-box__navs:hover::-webkit-scrollbar{opacity:1}.nav-box__navs::-webkit-scrollbar{width:8px;height:8px;background-color:rgba(0,0,0,.06);-webkit-border-radius:100px;opacity:0}.nav-box__navs::-webkit-scrollbar:hover{background-color:rgba(0,0,0,.09)}.nav-box__navs::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);-webkit-border-radius:100px}.nav-box__navs::-webkit-scrollbar-thumb:active{background:rgba(0,0,0,.6)}.nav-box__navs ul{height:100%;padding:0;margin:0;list-style:none;border-left:1px solid #eaeaea}.nav-box__nav{position:relative;padding:6px 0 6px 16px;margin-bottom:4px;font-size:14px;line-height:1.4em;min-height:1.4em;color:#333;cursor:pointer;-webkit-transition:color .4s;transition:color .4s}.nav-box__nav,.nav-box__nav:before{-webkit-box-sizing:content-box;box-sizing:content-box}.nav-box__nav:before{position:absolute;top:50%;left:0;display:block;width:6px;height:6px;content:"";background-color:#eee;border:4px solid;border-color:transparent;border-radius:50%;-webkit-transition:background-color .4s;transition:background-color .4s;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-box__nav:hover{color:#009efb}.nav-box__nav:hover:before{background-color:#ddd}.nav-box__nav--active{color:#009efb}.nav-box__nav--active:before{background-color:#fff!important;border-color:#009efb}.nav-box__pane{padding-bottom:16px}.nav-box__head{padding:.5em 1em;-webkit-box-sizing:content-box;box-sizing:content-box;margin-bottom:16px;line-height:1.8em;min-height:1.8em;background-color:#fafafa;border-bottom:1px solid #eaeaea;border-left:3px solid #009efb}.nav-box__title{font-size:16px;font-weight:700;cursor:default}',""])},"8cad":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n*{padding:0;margin:0\n}\n.form-wrap{width:800px;border:1px solid #efefef;margin:40px auto 0\n}\n.form-wrap .body{padding:16px\n}\n.form-wrap .footer{padding:16px;border-top:1px solid #efefef;text-align:right\n}\n.button{display:inline-block;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;border-color:#dcdfe6;color:#606266;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;margin:0;padding:6px 12px;font-size:14px;border-radius:4px\n}\n.button--submit{color:#fff;background-color:#409eff;border-color:#409eff\n}\n.button+.button{margin-left:10px\n}",""])},a1b7:function(t,e,n){var o=n("78ee");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("499e").default;i("10f4d98d",o,!0,{sourceMap:!1,shadowMode:!1})},be3d:function(t,e,n){var o=n("8cad");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("499e").default;i("31b2b468",o,!0,{sourceMap:!1,shadowMode:!1})},dc31:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.form-item{margin-bottom:16px\n}\n.form-item__label{text-align:right;vertical-align:middle;float:left;font-size:14px;color:#606266;line-height:32px;padding:0 12px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;width:80px\n}\n.form-item__content{line-height:32px;position:relative;font-size:14px;margin-left:80px\n}\n.input{position:relative;font-size:12px;display:inline-block;width:100%\n}\n.input__inner,.textarea__inner{background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;-webkit-box-sizing:border-box;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:32px;line-height:32px;outline:none;padding:0 15px;width:100%\n}\n.checkbox,.radio{color:#606266;font-weight:500;font-size:14px;position:relative;cursor:pointer;display:inline-block;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:20px\n}\n.checkbox input,.radio input{vertical-align:middle\n}\n.checkbox__label,.radio__label{padding-left:6px\n}",""])},e35a:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-wrap"},[n("div",{staticClass:"body"},[n("nav-box",{attrs:{height:"360px","nav-width":"160"}},[n("nav-box-pane",[n("div",{attrs:{slot:"title"},slot:"title"},[n("strong",[t._v("Form 1")]),t._v(" Title")]),n("example-form")],1),n("nav-box-pane",{attrs:{title:"Form 2 Title"}},[n("example-form")],1),n("nav-box-pane",{attrs:{title:"Form 3 Title"}},[n("example-form")],1)],1)],1),t._m(0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("button",{staticClass:"button button--submit"},[t._v("立即创建")]),n("button",{staticClass:"button"},[t._v("取消")])])}],r=(n("7f7f"),n("ac6a"),n("96cf"),n("3040")),s=(n("c5f6"),n("d138")),l=n.n(s);function c(t){if(t){var e=/\d+%/.test(t),n=parseInt(t,10);return n?"".concat(n,e?"%":"px"):null}return null}var d={name:"NavBox",props:{height:{type:[String,Number],default:null},navWidth:{type:[String,Number],default:null},duration:{type:Number,default:400},offsetTop:{type:Number,default:0}},data:function(){return{navs:[],activeItem:null,lastActiveItem:null,scrollByNav:!1}},computed:{internalHeight:function(){return c(this.height)},internalNavWidth:function(){return c(this.navWidth)}},mounted:function(){this.scrollContainer=this.$refs.content,this.scrollContainer.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.onScroll),window.cancelAnimationFrame(this.scrollAnimationFrame)},methods:{addNav:function(t){this.navs.push(t)},navClick:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$el,n){t.next=3;break}return t.abrupt("return");case 3:return this.scrollByNav=!0,this.activeItem=e,t.next=7,this.scrollTo(n);case 7:this.scrollByNav=!1;case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),scrollTo:function(t){var e=this;return new Promise(function(n){var o=e.getOffsetTop(t),i=e.scrollContainer.scrollTop,a=o-i,r=l()(.5,0,.35,1),s=null,c=function t(o){s||(s=o);var l=o-s,c=l/e.duration;l>=e.duration&&(l=e.duration),c>=1&&(c=1);var d=i+r(c)*(a-e.offsetTop);e.scrollContainer.scrollTo(0,d),l<e.duration?e.scrollAnimationFrame=window.requestAnimationFrame(t):(e.scrollContainer.addEventListener("scroll",e.onScroll),n())};window.requestAnimationFrame(c)})},getOffsetTop:function(t){var e=0,n=t;while(n&&n!==this.scrollContainer)e+=n.offsetTop,n=n.offsetParent;return e},onScroll:function(t){this.scrollByNav||(this.activeItem=this.getItemInsideWindow(),this.activeItem!==this.lastActiveItem&&(this.$emit("activeChanged",t,this.activeItem,this.lastActiveItem),this.lastActiveItem=this.activeItem))},getItemInsideWindow:function(){var t,e=this;return this.navs.forEach(function(n){var o=n.$el;if(o){var i=e.scrollContainer.scrollTop,a=i>=e.getOffsetTop(o)-e.offsetTop,r=i<e.getOffsetTop(o)-e.offsetTop+o.offsetHeight;a&&r&&(t=n)}}),t}},render:function(){var t=this,e=arguments[0];return e("div",{class:"nav-box__wrapper",style:{height:this.internalHeight}},[e("div",{ref:"content",class:"nav-box__content"},[this.$slots.default]),e("div",{class:"nav-box__navs",style:{width:this.internalNavWidth}},[e("ul",[this.navs.map(function(n,o){return e("li",{key:o,class:["nav-box__nav",{"nav-box__nav--active":t.activeItem?t.activeItem===n:0===o}],on:{click:function(){return t.navClick(n)}}},[n.$slots.title?n.$slots.title:n.title])})])])])}},b={name:"NavBoxPane",props:{title:{type:String,default:null}},mounted:function(){this.$parent.addNav&&this.$parent.addNav(this)},render:function(){var t=arguments[0];return t("div",{class:"nav-box__pane"},[t("div",{class:"nav-box__head"},[t("div",{class:"nav-box__title"},[this.$slots.title?this.$slots.title:this.title])]),t("div",{class:"nav-box__body"},[this.$slots.default])])}};n("a1b7");d.install=function(){o["a"].component(d.name,d)},b.install=function(){o["a"].component(b.name,b)},"undefined"!==typeof window&&window.Vue&&(window.Vue.use(d),window.Vue.use(b));var p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-item__label"},[t._v("活动名称")]),n("div",{staticClass:"form-item__content"},[n("div",{staticClass:"input"},[n("input",{staticClass:"input__inner",attrs:{type:"text"}})])])]),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-item__label"},[t._v("活动区域")]),n("div",{staticClass:"form-item__content"},[n("div",{staticClass:"select"},[n("div",{staticClass:"input"},[n("input",{staticClass:"input__inner",attrs:{type:"text"}})])])])]),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-item__label"},[t._v("活动时间")]),n("div",{staticClass:"form-item__content"},[n("div",{staticStyle:{width:"40%",display:"inline-block","padding-right":"10px"}},[n("div",{staticClass:"input",staticStyle:{width:"100%"}},[n("input",{staticClass:"input__inner",attrs:{type:"text",name:"",placeholder:"选择日期"}})])]),n("div",{staticStyle:{width:"40%",display:"inline-block"}},[n("div",{staticClass:"input",staticStyle:{width:"100%"}},[n("input",{staticClass:"input__inner",attrs:{type:"text",name:"",placeholder:"选择日期"}})])])])]),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-item__label"},[t._v("活动性质")]),n("div",{staticClass:"form-item__content"},[n("div",{staticClass:"checkbox-group",attrs:{"aria-label":"checkbox-group"}},[n("label",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox",name:"type",value:"美食/餐厅线上活动"}}),n("span",{staticClass:"checkbox__label"},[t._v("美食/餐厅线上活动")])]),n("label",{staticClass:"checkbox"},[n("input",{attrs:{type:"checkbox",name:"type",value:"地推活动"}}),n("span",{staticClass:"checkbox__label"},[t._v("地推活动")])])])])]),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-item__label"},[t._v("特殊资源")]),n("div",{staticClass:"form-item__content"},[n("div",{staticClass:"radio-group"},[n("label",{staticClass:"radio"},[n("input",{attrs:{type:"radio",value:"线上品牌商赞助"}}),n("span",{staticClass:"radio__label"},[t._v("线上品牌商赞助")])]),n("label",{staticClass:"radio"},[n("input",{attrs:{type:"radio",value:"线下场地免费"}}),n("span",{staticClass:"radio__label"},[t._v("线下场地免费")])])])])]),n("div",{staticClass:"form-item"},[n("label",{staticClass:"form-item__label"},[t._v("活动形式")]),n("div",{staticClass:"form-item__content"},[n("div",{staticClass:"textarea"},[n("textarea",{staticClass:"textarea__inner",staticStyle:{"min-height":"50px"}})])])])])}],f={name:"example-form"},v=f,x=(n("42a9"),n("2877")),h=Object(x["a"])(v,p,u,!1,null,null,null);h.options.__file="example-form.vue";var m=h.exports,_={name:"app",components:{NavBox:d,NavBoxPane:b,ExampleForm:m}},g=_,w=(n("5dbe"),Object(x["a"])(g,i,a,!1,null,null,null));w.options.__file="app.vue";var k=w.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(k)}}).$mount("#app")}});