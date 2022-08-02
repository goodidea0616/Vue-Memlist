(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dfbbe3be"],{"0509":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"d-flex justify-content-between m-2 m-sm-0"},[n("b-dropdown",{staticClass:"dropdown-year flex-fill",attrs:{text:t.period.name,variant:"outline-success","menu-class":"w-275px w-lg-auto"}},t._l(t.periods,(function(e,r){return n("b-dropdown-item",{key:"year-"+r,attrs:{active:t.period.name===e.name},on:{click:function(n){return t.onSelectPeriod(e)}}},[t._v(t._s(e.name))])})),1),n("b-dropdown",{staticClass:"ml-4 dropdown-company flex-fill",attrs:{text:t.company.name,variant:"outline-success","menu-class":"w-275px w-lg-auto"}},[n("b-dropdown-text",{staticClass:"topnav-company-list-wrapper",attrs:{tag:"div"}},[n("b-form-input",{attrs:{placeholder:"Filtrera"},on:{keydown:t.filterCompany},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),n("span",{staticClass:"ml-4"},[t._v("Filtrera på org. eller namn")])],1),n("b-dropdown-form",{staticClass:"topnav-company-list"},t._l(t.filtered,(function(e,r){return n("b-dropdown-item",{key:"company-"+r,attrs:{active:t.company.company_id===e.company_id},on:{click:function(n){return t.onSelectCompany(e)}}},[n("fa-icon",{staticClass:"mr-3",attrs:{icon:["fas","network-wired"]}}),t._v(" "+t._s(e.name)+" ")],1)})),1)],1)],1)])},i=[],a=(n("4de4"),n("7db0"),n("4160"),n("caad"),n("b0c0"),n("2532"),n("159b"),n("96cf"),n("1da1")),o=n("5530"),s=n("bc3a"),c=n.n(s),u=n("2f62"),l=n("767c"),d=n("854b"),f={name:"KTMenu",data:function(){return{periods:[],period:{},company:{},filterText:"",filtered:[],initialized:!1}},props:{company_id:{type:String,default:""},period_id:{type:String,default:""}},computed:Object(o["a"])({},Object(u["b"])(["companies","currentUserId","currentUser","isTalongAdmin","currentCompanyId"])),mounted:function(){var t=this;c.a.get("/company/list").then((function(e){200===e.status&&(console.log("dispatching SET_COMPANIES"),t.$store.dispatch(l["c"],e.data.companies))})).catch((function(t){console.error(t)})),c.a.get("/user?user_id=".concat(this.currentUser.user_id)).then((function(e){if(null===e.data.user||void 0===e.data.user)return console.log("GOT UNDEFINED USER -> Redirect to login"),t.$store.dispatch(d["b"]),void t.$router.push({name:"ml-login"});200===e.status&&(t.$store.dispatch(d["e"],e.data.user.talongadmin),t.$store.dispatch(d["d"],e.data.acl.acl),console.log("acl"),console.log(e.data.acl))})).catch((function(t){console.error("error getting my user"),console.error(t)}))},watch:{companies:function(t,e){console.log("Menu.vue, companies mutated"),this.setCompanyList(t)}},methods:{setCompanyList:function(t){var e=this,n=[];if(t.forEach((function(t){n.push(t)})),n.length>0)if(this.company_id){var r=n.find((function(t){return t.id===e.company_id}));r?this.onSelectCompany(r):this.onSelectCompany(n[0])}else this.onSelectCompany(n[0]);this.filtered=n},onSelectCompany:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c.a.put("/user/current_company",{company_id:t.id});case 2:r=n.sent,200!==r.status&&204!==r.status||(e.company=t,e.$store.dispatch(l["e"],""),e.$store.dispatch(l["d"],t.id),e.periods=[],e.company.periods.forEach((function(t){e.periods.push({id:t.id,name:t.name,from:t.from,to:t.to,selected:!1})})),e.$store.dispatch(l["f"],e.periods),e.$store.dispatch(l["g"],e.company.settings.titles),e.period_id?(i=e.periods.find((function(t){return t.id===e.period_id})),i?e.onSelectPeriod(i):e.onSelectPeriod(e.periods[0])):e.periods.length>0&&e.onSelectPeriod(e.periods[0]));case 4:case"end":return n.stop()}}),n)})))()},onSelectPeriod:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c.a.put("/user/selected_period",{period_id:t.id});case 2:r=n.sent,200!==r.status&&204!==r.status||(e.period=t,e.$store.dispatch(l["e"],t.id),e.initialized&&window.location.reload(),e.initialized=!0);case 4:case"end":return n.stop()}}),n)})))()},filterCompany:function(t){var e=this;""===this.filterText||" "===this.filterText?this.filtered=this.companies:this.filtered=this.companies.filter((function(t){return t.name.toUpperCase().includes(e.filterText.toUpperCase())}))}}},h=f,p=(n("0888"),n("2877")),g=Object(p["a"])(h,r,i,!1,null,"577b3819",null);e["a"]=g.exports},"0888":function(t,e,n){"use strict";n("2820")},"10c7":function(t,e,n){"use strict";n("4160"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),n("159b");var r=n("6e87"),i=n.n(r),a=n("75c1"),o=n("6eee"),s={config:null,init:function(t){"undefined"!==typeof t&&(this.config=t),this.initLayout(),this.initHeader(),this.initSubheader(),this.initAside(),this.initFooter(),this.initThemes()},initLayout:function(){if(i.a.has(this.config,"self.body.class")){var t=i.a.get(this.config,"self.body.class").toString();if(t){var e=t.split(" ");e.forEach((function(t){o["a"].dispatch(a["a"],t)}))}}var n=i.a.get(this.config,"self.body.background-image");"undefined"!==typeof n&&(document.body.style.backgroundImage="url(".concat(n,")")),o["a"].dispatch(a["a"],"quick-panel-right"),o["a"].dispatch(a["a"],"demo-panel-right"),o["a"].dispatch(a["a"],"offcanvas-right"),o["a"].dispatch(a["c"],"header-menu-wrapper-on")},initHeader:function(){i.a.get(this.config,"header.self.fixed.desktop")?(o["a"].dispatch(a["a"],"header-fixed"),o["a"].dispatch(a["b"],{position:"header",className:"header-fixed"})):o["a"].dispatch(a["a"],"header-static"),i.a.get(this.config,"header.self.fixed.mobile")&&(o["a"].dispatch(a["a"],"header-mobile-fixed"),o["a"].dispatch(a["b"],{position:"header_mobile",className:"header-mobile-fixed"})),i.a.get(this.config,"header.menu.self.display")&&(o["a"].dispatch(a["b"],{position:"header_menu",className:"header-menu-layout-".concat(i.a.get(this.config,"header.menu.self.layout"))}),i.a.get(this.config,"header.menu.self.root-arrow")&&o["a"].dispatch(a["b"],{position:"header_menu",className:"header-menu-root-arrow"}))},initSubheader:function(){i.a.get(this.config,"subheader.fixed")&&i.a.get(this.config,"header.self.fixed.desktop")&&o["a"].dispatch(a["a"],"subheader-fixed"),i.a.get(this.config,"subheader.display")&&o["a"].dispatch(a["a"],"subheader-enabled"),i.a.has(this.config,"subheader.style")&&o["a"].dispatch(a["a"],"subheader-".concat(i.a.get(this.config,"subheader.style")))},initAside:function(){o["a"].dispatch(a["c"],"aside-enabled"),o["a"].dispatch(a["c"],"aside-fixed"),o["a"].dispatch(a["c"],"aside-static"),o["a"].dispatch(a["c"],"aside-minimize"),!0===i.a.get(this.config,"aside.self.display")&&(o["a"].dispatch(a["a"],"aside-enabled"),i.a.get(this.config,"aside.self.fixed")?(o["a"].dispatch(a["a"],"aside-fixed"),o["a"].dispatch(a["b"],{position:"aside",className:"aside-fixed"})):o["a"].dispatch(a["a"],"aside-static"),i.a.get(this.config,"aside.self.minimize.default")&&o["a"].dispatch(a["a"],"aside-minimize"),i.a.get(this.config,"aside.menu.dropdown")&&o["a"].dispatch(a["b"],{position:"aside_menu",className:"aside-menu-dropdown"}))},initFooter:function(){i.a.get(this.config,"footer.fixed")&&o["a"].dispatch(a["a"],"footer-fixed")},initThemes:function(){if(i.a.get(this.config,"header.self.theme")){var t=i.a.get(this.config,"header.self.theme");n("4570")("./".concat(t,".scss"))}if(i.a.get(this.config,"header.menu.desktop.submenu.theme")){var e=i.a.get(this.config,"header.menu.desktop.submenu.theme");n("96c0")("./".concat(e,".scss"))}if(i.a.get(this.config,"brand.self.theme")){var r=i.a.get(this.config,"brand.self.theme");n("d2a8")("./".concat(r,".scss"))}if(i.a.get(this.config,"aside.self.theme")){var a=i.a.get(this.config,"aside.self.theme");n("903d")("./".concat(a,".scss"))}}};e["a"]=s},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,a,o){try{var s=t[a](o),c=s.value}catch(u){return void n(u)}s.done?e(c):Promise.resolve(c).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function s(t){r(o,i,a,s,c,"next",t)}function c(t){r(o,i,a,s,c,"throw",t)}s(void 0)}))}}},2820:function(t,e,n){},4570:function(t,e,n){var r={"./dark.scss":["0686","chunk-743e4b25"],"./light.scss":["0b86b","chunk-15f72463"]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id="4570",t.exports=i},"654c":function(t,e,n){"use strict";var r={defaultLanguage:"se",languages:[{lang:"en",name:"English",flag:"/assets/flags/226-united-states.svg"},{lang:"se",name:"Swedish",flag:"/assets/flags/184-sweden.svg"}],setActiveLanguage:function(t){localStorage.setItem("language",t)},getActiveLanguage:function(){return localStorage.getItem("language")||this.defaultLanguage}};e["a"]=r},"742b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"navi navi-hover py-4"},[t._l(t.languages,(function(e,r){return[n("li",{key:r,staticClass:"navi-item",class:{"navi-item-active":t.isActiveLanguage(e.lang)}},[n("a",{staticClass:"navi-link",attrs:{href:"#","data-lang":e.lang},on:{click:t.selectedLanguage}},[n("span",{staticClass:"symbol symbol-20 mr-3"},[n("img",{attrs:{src:e.flag,alt:""}})]),n("span",{staticClass:"navi-text"},[t._v(t._s(e.name))])])])]}))],2)},i=[],a=(n("7db0"),n("654c")),o={name:"KTDropdownLanguage",data:function(){return{languages:a["a"].languages}},methods:{selectedLanguage:function(t){var e=t.target.closest(".navi-link"),n=e.getAttribute("data-lang");a["a"].setActiveLanguage(n),this.$emit("language-changed",this.languages.find((function(t){return t.lang===n}))),window.location.reload()},isActiveLanguage:function(t){return this.activeLanguage===t}},computed:{activeLanguage:function(){return a["a"].getActiveLanguage()}}},s=o,c=n("2877"),u=Object(c["a"])(s,r,i,!1,null,null,null);e["a"]=u.exports},"903d":function(t,e,n){var r={"./dark.scss":["1d9c","chunk-746154ec"],"./light.scss":["d500","chunk-771a7e38"]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id="903d",t.exports=i},"96c0":function(t,e,n){var r={"./dark.scss":["a4ad","chunk-76f08193"],"./light.scss":["5ab3","chunk-7498e9ec"]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id="96c0",t.exports=i},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),o=new N(r||[]);return a._invoke=E(t,n,o),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",g={};function m(){}function v(){}function y(){}var w={};w[a]=function(){return this};var b=Object.getPrototypeOf,x=b&&b(b(j([])));x&&x!==n&&r.call(x,a)&&(w=x);var _=y.prototype=m.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(i,a,o,s){var c=l(t[i],t,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,o,s)}),(function(t){n("throw",t,o,s)})):e.resolve(d).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,s)}))}s(c.arg)}var i;function a(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function E(t,e,n){var r=d;return function(i,a){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return T()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var s=O(o,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function O(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,O(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=l(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,g;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=_.constructor=y,y.constructor=v,v.displayName=c(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,s,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(L.prototype),L.prototype[o]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new L(u(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(_),c(_,s,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return s.type="throw",s.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},d2a8:function(t,e,n){var r={"./dark.scss":["6e66","chunk-74a82e1a"],"./light.scss":["7f1c","chunk-74b6aca8"]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id="d2a8",t.exports=i},d8d8:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-loader page-loader-logo"},[n("img",{attrs:{alt:"Logo",src:t.logo,width:"100"}}),n("div",{staticClass:"spinner",class:t.spinnerClass||"spinner-primary"})])},i=[],a={name:"Loader",props:{logo:String,spinnerClass:String}},o=a,s=n("2877"),c=Object(s["a"])(o,r,i,!1,null,null,null);e["a"]=c.exports}}]);
//# sourceMappingURL=chunk-dfbbe3be.5d735e9b.js.map