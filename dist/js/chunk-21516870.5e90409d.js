(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21516870"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("d3b7");function o(t,e,r,o,n,a,i){try{var s=t[a](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(o,n)}function n(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))}}},2643:function(t,e,r){"use strict";r("518b")},"41c1":function(t,e,r){"use strict";r("fbad")},"518b":function(t,e,r){},"63d1":function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{staticClass:"font-weight-bolder d-block font-size-lg"},[t._v(" "+t._s(t.mappedColumn.excel.col+1)+" ")])]),r("td",[r("span",{staticClass:"font-weight-bolder d-block font-size-lg"},[t._v(t._s(t.mappedColumn.excel.name))])]),r("td",[r("b-form-select",{key:t.componentKey,attrs:{options:t.dbColumnOptions,state:!t.mappedColumn.duplicate},on:{change:t.coldefSelected},model:{value:t.mappedColumn.db.col_name,callback:function(e){t.$set(t.mappedColumn.db,"col_name",e)},expression:"mappedColumn.db.col_name"}})],1)])},n=[],a=r("5530"),i=(r("bc3a"),r("2f62")),s={name:"coldef-table-row",props:["mappedColumn","refresh","dbColumnOptions"],computed:Object(a["a"])({},Object(i["b"])(["currentCompanyId"])),data:function(){return{componentKey:0}},mounted:function(){},watch:{refresh:function(t,e){console.log("mapped column changed")}},methods:{updateComponent:function(){this.componentKey+=1},coldefSelected:function(){this.$emit("coldefSelected",this.mappedColumn),this.componentKey+=1}}},c=s,l=(r("2643"),r("2877")),u=Object(l["a"])(c,o,n,!1,null,"4c918ad2",null);e["a"]=u.exports},"6cbf":function(t,e,r){"use strict";r("bd84")},8389:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card card-custom card-stretch gutter-b"},[r("div",{staticClass:"card-body pt-0 pb-3"},[t.finalizeWait?r("b-alert",{staticClass:"mt-8",attrs:{show:"",variant:"secondary"}},[r("strong",[t._v("Vänligen vänta")]),r("br"),t._v("Medlemmarna kopieras nu in i databasen, detta kan ta ett antal minuter beroende på hur många medlemmar som ska kopieras")]):t._e(),t.finalizeWait?r("div",{staticClass:"d-flex justify-content-center mt-10 mb-10"},[r("b-spinner",{staticClass:"mx-auto text-center align-center",attrs:{type:"grow",label:"Loading..."}})],1):t._e(),t.finalizeWait||t.hasError?t._e():r("div",[r("b-alert",{attrs:{show:"",variant:"success"}},[r("strong",[t._v("Klart!")]),r("br"),t._v("Importen är avklarad")])],1),!t.finalizeWait&&t.hasError?r("div",[r("b-alert",{attrs:{show:"",variant:"danger"}},[r("strong",[t._v("Fel!")]),r("br"),t._v("Gick inte att importera")])],1):t._e()],1)])},n=[],a=r("5530"),i=r("bc3a"),s=r.n(i),c=r("2f62"),l={name:"import-final-page",props:["import_id","import_option","doFinalize"],components:{},computed:Object(a["a"])({},Object(c["b"])(["currentCompanyId","currentPeriodId"])),data:function(){return{finalizeWait:!0,hasError:!1}},mounted:function(){},watch:{doFinalize:function(t,e){t&&this.finalizeImport()}},methods:{randomstr:function(t){for(var e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=r.length,n=0;n<t;n++)e+=r.charAt(Math.floor(Math.random()*o));return e},exportErrors:function(t){var e=this;s.a.post("/import/exporterrors",{import_id:t}).then((function(t){location.href=t.data.file_url})).catch((function(t){e.toastr("danger","Server Fel","Kunde inte generera exportfil")}))},finalizeImport:function(){var t=this;s.a.post("/import/finalize",{import_id:this.import_id,option:this.import_option}).then((function(e){t.finalizeWait=!1,201===e.status?(t.toastr("success","OK","Importen är avklarad"),t.hasError=!1,t.$emit("importFinalized")):(t.hasError=!0,t.$emit("importFailed"))})).catch((function(e){t.hasError=!0}))},toastr:function(t,e,r){this.$bvToast.toast(r,{title:e,autoHideDelay:2e3,appendToast:!0,variant:t})}}},u=l,d=(r("41c1"),r("2877")),p=Object(d["a"])(u,o,n,!1,null,"db64dbfe",null);e["a"]=p.exports},"96cf":function(t,e,r){var o=function(t){"use strict";var e,r=Object.prototype,o=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var n=e&&e.prototype instanceof v?e:v,a=Object.create(n.prototype),i=new O(o||[]);return a._invoke=j(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var d="suspendedStart",p="suspendedYield",m="executing",f="completed",h={};function v(){}function _(){}function b(){}var g={};g[a]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(z([])));w&&w!==r&&o.call(w,a)&&(g=w);var x=b.prototype=v.prototype=Object.create(g);function C(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function r(n,a,i,s){var c=u(t[n],t,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"===typeof d&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var n;function a(t,o){function a(){return new e((function(e,n){r(t,o,e,n)}))}return n=n?n.then(a,a):a()}this._invoke=a}function j(t,e,r){var o=d;return function(n,a){if(o===m)throw new Error("Generator is already running");if(o===f){if("throw"===n)throw a;return F()}r.method=n,r.arg=a;while(1){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=u(t,e,r);if("normal"===c.type){if(o=r.done?f:p,c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=f,r.method="throw",r.arg=c.arg)}}}function k(t,r){var o=t.iterator[r.method];if(o===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=u(o,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var a=n.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function z(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){while(++n<t.length)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:F}}function F(){return{value:e,done:!0}}return _.prototype=x.constructor=b,b.constructor=_,_.displayName=c(b,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},C(I.prototype),I.prototype[i]=function(){return this},t.AsyncIterator=I,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new I(l(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},C(x),c(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var o=e.pop();if(o in t)return r.value=o,r.done=!1,r}return r.done=!0,r}},t.values=z,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(o,n){return s.type="throw",s.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var o=r.completion;if("throw"===o.type){var n=o.arg;L(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:z(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=o}catch(n){Function("r","regeneratorRuntime = r")(o)}},bd84:function(t,e,r){},c074d:function(t,e,r){"use strict";r("d283")},d283:function(t,e,r){},fbad:function(t,e,r){},fd4b:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card card-custom card-stretch gutter-b"},[r("div",{staticClass:"card-body pt-0 pb-3"},[t.startImport&&t.poll?r("b-alert",{staticClass:"mt-8",attrs:{show:"",variant:"secondary"}},[r("strong",[t._v("Vänligen vänta")]),r("br"),t._v("Raderna importeras och valideras. Detta steg kan ta några minuter beroende på hur stor filen är.")]):t._e(),t.startImport&&t.poll?r("div",{staticClass:"d-flex justify-content-center mt-10 mb-10"},[r("b-spinner",{staticClass:"mx-auto text-center align-center",attrs:{type:"grow",label:"Loading..."}})],1):t._e(),t.startImport&&!t.poll?r("div",[r("h4",{staticClass:"mt-8"},[t._v("Granska resultatet av importen")]),r("div",{staticClass:"table-responsive mt-4"},[r("table",{staticClass:"table table-head-custom table-vertical-center table-head-bg table-borderless"},[r("tbody",[r("tr",{staticClass:"text-left"},[r("td",[t._v("Antal totalt")]),r("td",[t._v(t._s(t.objects.total))])]),r("tr",[r("td",[t._v("Antal med fel")]),r("td",[t._v(t._s(t.objects.errors))])]),r("tr",[r("td",[t._v("Antal nya")]),r("td",[t._v(t._s(t.objects.create))])]),r("tr",[r("td",[t._v("Antal uppdaterade")]),r("td",[t._v(t._s(t.objects.update))])])])]),r("div",{staticClass:"mt-8"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"mb-8",staticStyle:{"font-weight":"bold"}},[t._v("Importalternativ")]),r("div",{staticClass:"radio-list"},[t.objects.errors>0?r("label",{staticClass:"radio radio-outline radio-success mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.import_option,expression:"import_option"}],attrs:{type:"radio",name:"radios1",value:"include_errors"},domProps:{checked:t._q(t.import_option,"include_errors")},on:{change:function(e){t.import_option="include_errors"}}}),r("span"),t._v(" Importera alla, inklusive med fel ")]):t._e(),t.objects.errors>0?r("label",{staticClass:"radio radio-outline radio-success mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.import_option,expression:"import_option"}],attrs:{type:"radio",name:"radios1",value:"exclude_errors"},domProps:{checked:t._q(t.import_option,"exclude_errors")},on:{change:function(e){t.import_option="exclude_errors"}}}),r("span"),t._v(" Importera endast utan fel ")]):t._e(),0==t.objects.errors?r("label",{staticClass:"radio radio-outline radio-success mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.import_option,expression:"import_option"}],attrs:{type:"radio",name:"radios1",value:"all"},domProps:{checked:t._q(t.import_option,"all")},on:{change:function(e){t.import_option="all"}}}),r("span"),t._v(" Importera alla ")]):t._e()])])]),r("div",[r("div",{staticClass:"table-responsive mt-8"},[r("table",{staticClass:"table table-head-custom table-vertical-center table-head-bg table-borderless"},[t._m(0),r("tbody",t._l(t.error_rows,(function(t){return r("ImportErrorRow",{key:t.id,attrs:{error:t}})})),1)])])])])]):t._e()],1)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticClass:"text-left"},[r("th",{staticStyle:{"min-width":"40px"}},[r("span",{staticClass:"text-dark-75"},[t._v("Rad")])]),r("th",[t._v("Förnamn")]),r("th",[t._v("Efternamn")]),r("th",[t._v("Fel")])])])}],a=r("5530"),i=r("bc3a"),s=r.n(i),c=r("2f62"),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",[r("td",[r("span",{staticClass:"font-weight-bolder d-block font-size-lg"},[t._v(" "+t._s(t.error.row)+" ")])]),r("td",[r("span",{staticClass:"font-weight-bolder d-block font-size-lg"},[t._v(t._s(t.error.firstname))])]),r("td",[r("span",{staticClass:"font-weight-bolder d-block font-size-lg"},[t._v(t._s(t.error.lastname))])]),r("td",[r("span",{staticClass:"font-weight-bolder d-block font-size-lg"},[t._l(t.error.errors,(function(e,o){return[r("div",{key:o,staticStyle:{width:"100%"}},[t._v(" "+t._s(e)+" ")])]}))],2)])])},u=[],d={name:"error-table-row",props:["error"],computed:Object(a["a"])({},Object(c["b"])(["currentCompanyId"])),data:function(){return{}},mounted:function(){},watch:{},methods:{toastr:function(t,e,r){this.$bvToast.toast(r,{title:e,autoHideDelay:2e3,appendToast:!0,variant:t})}}},p=d,m=(r("c074d"),r("2877")),f=Object(m["a"])(p,l,u,!1,null,"2f9745d4",null),h=f.exports,v={name:"import-confirm-page",props:["mapped_columns","startImport","file_id","datatype"],components:{ImportErrorRow:h},computed:Object(a["a"])({},Object(c["b"])(["currentCompanyId","currentPeriodId"])),data:function(){return{objects:{total:0,errors:0,create:0,update:0},import_option:null,interval_id:-1,error_rows:[],poll:!1,import:{import_id:"10",rows:[{deleted:0,import_record_id:"1733",import_id:"10",crud:"X",src_loc:"",table_name:"ml_client",cols:[{col_name:"rdt",prev_val:"",new_val:"2018-01-19 01:30:00",valtype:"",status:"",reason:""},{col_name:"firstname",prev_val:"",new_val:"Jakob",valtype:"",status:"",reason:""},{col_name:"lastname",prev_val:"",new_val:"Nilsson",valtype:"",status:"",reason:""},{col_name:"email",prev_val:"",new_val:"kem15jni@student.lu.se",valtype:"",status:"FAIL",reason:"Ogilitig email"}],table_pk_id:"",table_pk_name:"client_id",result:"fatal",status:"FAIL",error_row:{row_number:2,error_cols:[{name:"email",error_value:"lund",reason:"Ogilitig email",source_value:"lund",max_length:128}],has_error:!0}}],num_records_inserted:0,num_records_updated:0,num_records_error:34,status:"IMP_WAIT"}}},mounted:function(){},watch:{startImport:function(t,e){console.log("confirm page, start import: "+t),t&&this.startImportJob(this.file_id,this.mapped_columns,this.currentPeriodId,this.currentCompanyId)},import_option:function(t,e){t&&this.$emit("finalizeReady",t)},import_id:function(t,e){t&&""!==t&&console.log("Confirm page Import ID has been set: "+t)},poll:function(t,e){if(t){var r=this;r.interval_id=setInterval((function(){console.log("fetching..."),r.fetchImportJob(r.import.import_id)}),1e3)}else console.log("poll false, clearing"),clearInterval(this.interval_id)}},methods:{getColValue:function(t,e){for(var r=0;r<t.length;++r)if(t[r].col_name===e)return t[r].new_val;return"Hittades ej"},randomstr:function(t){for(var e="",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=r.length,n=0;n<t;n++)e+=r.charAt(Math.floor(Math.random()*o));return e},exportErrors:function(t){var e=this;s.a.post("/import/exporterrors",{import_id:t}).then((function(t){location.href=t.data.file_url})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte generera exportfil")}))},startImportJob:function(t,e,r,o){var n=this;s.a.post("clients"===this.datatype?"/import/client":"/import/company",{file_id:t,mapped_columns:e,period_id:r,company_id:o}).then((function(t){n.import={import_id:t.data.import_id},n.poll=!0,console.log("Starting to poll"),n.$emit("setImportId",n.import.import_id)})).catch((function(t){console.error(t),n.toastr("danger","Server Fel","Kunde inte starta import")}))},fetchImportJob:function(t){var e=this;s.a.get("/import?import_id=".concat(t)).then((function(t){if("PENDING"!==t.data.import.status){200===t.status&&clearInterval(e.interval_id),e.import=t.data.import,e.objects.total=e.import.num_records_inserted+e.import.num_records_updated,e.objects.errors=e.import.num_records_error,e.objects.create=e.import.num_records_inserted,e.objects.update=e.import.num_records_updated,e.objects.errors>0&&e.$refs.radio_all;for(var r=0;r<e.import.rows.length;++r){var o=e.import.rows[r];if("FAIL"===o.status){for(var n=[],a=0;a<o.error_row.error_cols.length;++a){var i=o.error_row.error_cols[a];n.push(i.reason+": "+i.error_value)}"clients"===e.datatype?e.error_rows.push({id:e.randomstr(8),row:o.error_row.row_number,firstname:e.getColValue(o.cols,"firstname"),lastname:e.getColValue(o.cols,"lastname"),errors:n}):"companies"===e.datatype&&e.error_rows.push({id:e.randomstr(8),row:o.error_row.row_number,name:e.getColValue(o.cols,"name"),errors:n})}}e.poll=!1,e.toastr("success","OK","Klart")}else console.log("pending still...")})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte importera")}))},finalizeImport:function(){var t=this;s.a.post("/import/finalize",{import_id:this.import.import_id,option:this.import_option}).then((function(e){200===e.status?(t.toastr("success","OK","Importen är klar"),t.$emit("importFinalized")):t.$emit("importFailed")})).catch((function(t){console.error(t)}))},toastr:function(t,e,r){this.$bvToast.toast(r,{title:e,autoHideDelay:2e3,appendToast:!0,variant:t})}}},_=v,b=(r("6cbf"),Object(m["a"])(_,o,n,!1,null,"790e8b3a",null));e["a"]=b.exports}}]);
//# sourceMappingURL=chunk-21516870.5e90409d.js.map