(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e7e3c4d"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}},2187:function(t,e,n){"use strict";n("a482")},"91ee":function(t,e,n){"use strict";n("f489")},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch($){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof y?e:y,o=Object.create(i.prototype),a=new j(r||[]);return o._invoke=F(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch($){return{type:"throw",arg:$}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function y(){}function m(){}function g(){}var b={};b[o]=function(){return this};var w=Object.getPrototypeOf,C=w&&w(w(S([])));C&&C!==n&&r.call(C,o)&&(b=C);var k=g.prototype=y.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(i,o,a,c){var s=u(t[i],t,o);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function F(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return T()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=k.constructor=g,g.constructor=m,m.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},_(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new x(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),s(k,c,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},a482:function(t,e,n){},b262:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card card-custom card-stretch gutter-b"},[n("div",{staticClass:"card-header border-0 py-5"},[n("div",{staticClass:"card-toolbar"},[n("a",{staticClass:"btn btn-primary font-weight-bolder font-size-sm",class:{disabled:"COMPLETE"!==t.taskStatus&&"NOT"!==t.taskStatus},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onUploadFileClicked()}}},[n("i",{staticClass:"menu-icon flaticon2-plus",staticStyle:{"font-size":"1em"}}),t._v("Ladda upp fil ")])])]),n("div",{staticClass:"card-body pt-0 pb-3"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-head-custom table-vertical-center table-head-bg table-borderless"},[t._m(0),n("tbody",[t._l(t.files,(function(e,r){return[n("FileTableRow",{key:r,attrs:{file:e,type:t.type,currentCompanyId:t.currentCompanyId},on:{downloadFileClicked:t.downloadFileClicked,selectFileClicked:t.selectFileClicked,deleteFileClicked:t.deleteFileClicked,toastr:t.toastr}})]}))],2)])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"text-left"},[n("th",{staticStyle:{"min-width":"110px"}},[t._v("Namn")]),n("th",{staticStyle:{"min-width":"110px"}},[t._v("Datum")]),n("th")])])}],o=(n("bc3a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("span",{staticClass:"text-dark-75 font-weight-bolder d-block font-size-lg"},[t._v(t._s(t.file.name))])]),n("td",[n("span",{staticClass:"text-dark-75 d-block font-size-lg"},[t._v(t._s(t.file.created_at))])]),n("td",{staticClass:"text-right pr-0"},[n("a",{staticClass:"btn btn-icon btn-light btn-sm mx-3",attrs:{href:"#"},on:{click:function(e){return t.downloadFileClicked(t.file.file_id)}}},[n("span",{staticClass:"svg-icon svg-icon-md svg-icon-primary"},[n("inline-svg",{attrs:{src:"/assets/svg/download-solid.svg"}})],1)]),t.enableDelete?n("a",{staticClass:"btn btn-icon btn-light btn-sm",on:{click:function(e){return t.deleteFileClicked(t.file.file_id)}}},[n("span",{staticClass:"svg-icon svg-icon-md svg-icon-primary"},[n("inline-svg",{attrs:{src:"/assets/svg/Trash.svg"}})],1)]):t._e(),t.enableDelete?t._e():n("a",{staticClass:"btn btn-icon btn-light btn-sm",attrs:{href:"#"}},[n("span",{staticClass:"svg-icon svg-icon-md svg-icon-primary"})])])])}),a=[],c=n("5530"),s=n("c1df"),l=n.n(s),u=n("2f62"),f={name:"shop_items-table-row",props:["file","type"],computed:Object(c["a"])(Object(c["a"])({},Object(u["b"])(["currentCompanyId"])),{},{enableDelete:function(){var t=l()(this.file.from),e=l()();return"live"===this.type&&e<t||"live"!==this.type}}),data:function(){return{}},mounted:function(){},watch:{},methods:{downloadFileClicked:function(t){this.$emit("downloadFileClicked",t)},selectFileClicked:function(t){this.$emit("selectFileClicked",t)},deleteFileClicked:function(t){this.$emit("deleteFileClicked",t)}}},h=f,d=(n("91ee"),n("2877")),p=Object(d["a"])(h,o,a,!1,null,"9ca9f634",null),v=p.exports,y={name:"shop_items-table",props:{files:Array,currentCompanyId:String,type:String,taskStatus:{type:String,default:"COMPLETE"}},components:{FileTableRow:v},watch:{files:function(t,e){console.log("files changed")}},mounted:function(){console.log("mounted filestable")},methods:{downloadFileClicked:function(t){this.$emit("downloadFileClicked",t)},toastr:function(t,e,n){this.$emit("toastr",t,e,n)},selectFileClicked:function(t){this.$emit("selectFileClicked",t)},deleteFileClicked:function(t){this.$emit("deleteFileClicked",t)},onUploadFileClicked:function(){this.$emit("onUploadFileClicked")}},data:function(){return{list:[]}}},m=y,g=(n("2187"),Object(d["a"])(m,r,i,!1,null,"737131ba",null));e["a"]=g.exports},f489:function(t,e,n){}}]);
//# sourceMappingURL=chunk-0e7e3c4d.72d56987.js.map