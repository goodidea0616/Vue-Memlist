(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3c23972"],{4262:function(t,e,o){},"47f0":function(t,e,o){},"7bca":function(t,e,o){"use strict";o("47f0")},"8bcf":function(t,e,o){},"95bf":function(t,e,o){},a5a4:function(t,e,o){"use strict";o("95bf")},bd73:function(t,e,o){"use strict";o("f1d8")},c765:function(t,e,o){"use strict";o("4262")},cbd6:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-5",attrs:{id:"page-books"}},[o("h5",{staticClass:"mb-6 ml-2"},[t._v("Verifikat")]),o("b-card",{staticClass:"mb-2",attrs:{title:"","hide-footer":""}},[o("v-tabs",{attrs:{"background-color":"white",color:"dark",right:""}},[o("v-tab",[t._v("Bokförda")]),o("v-tab",[t._v("Ej bokförda")]),o("v-tab-item",[o("BookDoneView")],1),o("v-tab-item",[o("BookWaitView")],1)],1)],1)],1)},r=[],i=o("5530"),n=o("bc3a"),s=o.n(n),c=o("2f62"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-5",attrs:{id:"page-done-books"}},[o("BookTable",{attrs:{books:t.books,type:"done"},on:{createBookClicked:t.createBook,selectBookClicked:t.selectBook,deleteBookClicked:t.deleteBook,toastr:t.toastr}}),o("div",{staticClass:"scroll-to-container"}),t.creating||t.editing?o("b-card",{ref:"edit-live-book",staticClass:"mb-2 edit-live-book-container",attrs:{title:"",id:"edit-live-book","hide-footer":""}},[o("div",[o("b-form",{staticClass:"mt-8",on:{submit:t.submitBook}},[o("b-form-group",{attrs:{id:"input-group-book_id",label:"ID","label-for":"input-book_id"}},[o("b-form-input",{attrs:{id:"input-book_id",type:"text",required:"",disabled:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),o("b-form-group",{attrs:{id:"input-group-1",label:"Namn på booken","label-for":"input-1"}},[o("b-form-input",{attrs:{id:"input-1",type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),o("b-form-group",{attrs:{id:"input-group-2",label:"Från Datum","label-for":"input-2"}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"input-2"},model:{value:t.form.from,callback:function(e){t.$set(t.form,"from",e)},expression:"form.from"}})],1),o("b-form-group",{attrs:{id:"input-group-3",label:"Till Datum","label-for":"input-3"}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"input-3"},model:{value:t.form.to,callback:function(e){t.$set(t.form,"to",e)},expression:"form.to"}})],1),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Spara")])],1)],1)]):t._e()],1)},d=[],u=(o("99af"),o("4de4"),o("96cf"),o("1da1")),b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),o("div",{staticClass:"pt-0 pb-3"},[o("div",{staticClass:"d-md-flex justify-content-between align-items-center mb-4"},[o("div",{staticClass:"w-100 mr-md-10 mb-md-0 mb-4"},[o("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Sök översättning"},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1),o("div",{staticClass:"d-sm-flex justify-content-end align-items-center"},[o("v-select",{staticClass:"mr-sm-2 my-2 mx-0",staticStyle:{width:"200px"},attrs:{options:[25,50,100],clearable:!1,searchable:!1},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),o("b-pagination",{staticClass:"ml-auto mb-0",attrs:{"total-rows":t.books.length,"per-page":t.perPage,"aria-controls":"search-result-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]),o("div",{staticClass:"table-responsive"},[o("b-table",{staticClass:"mt-3 cursor mh-100",attrs:{id:"search-result-table",filter:t.filters,items:t.books,fields:t.headers,"per-page":t.perPage,"current-page":t.currentPage,"head-variant":"light","sticky-header":""},scopedSlots:t._u([{key:"head(selected)",fn:function(e){return[o("div",{staticClass:"d-flex align-items-center"},[o("label",{staticClass:"checkbox checkbox-lg checkbox-outline checkbox-success"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.all_selected,expression:"all_selected"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(t.all_selected)?t._i(t.all_selected,null)>-1:t.all_selected},on:{click:function(e){t.all_selected=!t.all_selected},change:function(e){var o=t.all_selected,a=e.target,r=!!a.checked;if(Array.isArray(o)){var i=null,n=t._i(o,i);a.checked?n<0&&(t.all_selected=o.concat([i])):n>-1&&(t.all_selected=o.slice(0,n).concat(o.slice(n+1)))}else t.all_selected=r}}}),o("span")]),o("span",{staticClass:"ml-3 cursor-pointer"})])]}},{key:"cell(selected)",fn:function(e){return[o("div",{staticClass:"d-flex align-items-center"},[o("label",{staticClass:"checkbox checkbox-lg checkbox-outline checkbox-success"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.item.selected,expression:"row.item.selected"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(e.item.selected)?t._i(e.item.selected,null)>-1:e.item.selected},on:{click:function(t){e.item.selected=!e.item.selected},change:function(o){var a=e.item.selected,r=o.target,i=!!r.checked;if(Array.isArray(a)){var n=null,s=t._i(a,n);r.checked?s<0&&t.$set(e.item,"selected",a.concat([n])):s>-1&&t.$set(e.item,"selected",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(e.item,"selected",i)}}}),o("span")]),o("span",{staticClass:"ml-3 cursor-pointer"})])]}}])})],1)])])},f=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"border-0 py-5"},[o("h3",{staticClass:"card-title align-items-start flex-column"},[o("span",{staticClass:"card-label font-weight-bolder text-dark"})]),o("div",{staticClass:"card-toolbar"})])}],m=o("4a7a"),k=o.n(m),p=(o("6dfc"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("td",[o("span",{staticClass:"text-dark-75 font-weight-bolder d-block font-size-lg"},[o("b-form-group",[o("div",{staticClass:"d-flex align-items-center"},[o("label",{staticClass:"checkbox checkbox-lg checkbox-outline checkbox-success"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.book.selected,expression:"book.selected"}],attrs:{type:"checkbox",name:""},domProps:{checked:Array.isArray(t.book.selected)?t._i(t.book.selected,null)>-1:t.book.selected},on:{click:function(e){t.book.selected=!t.book.selected},change:function(e){var o=t.book.selected,a=e.target,r=!!a.checked;if(Array.isArray(o)){var i=null,n=t._i(o,i);a.checked?n<0&&t.$set(t.book,"selected",o.concat([i])):n>-1&&t.$set(t.book,"selected",o.slice(0,n).concat(o.slice(n+1)))}else t.$set(t.book,"selected",r)}}}),o("span")]),o("span",{staticClass:"ml-3 cursor-pointer"})])])],1)]),o("td",[o("span",{staticClass:"text-dark-75 font-weight-bolder d-block font-size-lg"},[t._v(t._s(t.book.book_id))])]),o("td",[o("span",{staticClass:"text-dark-75 font-weight-bolder d-block font-size-lg"},[t._v(t._s(t.book.external_id))])]),o("td",[o("span",{staticClass:"text-dark-75 font-weight-bolder d-block font-size-lg"},[t._v(t._s(t.book.created_at))])])])}),h=[],g={name:"book-table-row",props:["book"],computed:Object(i["a"])({},Object(c["b"])(["currentCompanyId"])),data:function(){return{}},mounted:function(){},watch:{},methods:{selectBookClicked:function(t){this.$emit("selectPeriodClicked",period_id)}}},v=g,_=(o("c765"),o("2877")),C=Object(_["a"])(v,p,h,!1,null,"5c4d740e",null),x=C.exports,y={name:"book-table",props:{books:{type:Array,default:[]},currentCompanyId:{type:String,default:""}},components:{vSelect:k.a,BookTableRow:x},methods:{toastr:function(t,e,o){this.$emit("toastr",t,e,o)}},data:function(){return{all_selected:!1,filters:"",perPage:20,currentPage:1,headers:[{key:"selected",label:"",thClass:"pl-7 align-middle w-60px",tdClass:"pl-7 align-middle"},{key:"book_id",label:"ID",sortable:!0,thClass:"w-110px align-middle",tdClass:"align-middle"},{key:"external_id",label:"Ext ID",thClass:"w-110px align-middle",tdClass:"align-middle",sortable:!0},{key:"created_at",label:"Datum",thClass:"w-160px align-middle",tdClass:"align-middle",sortable:!0},{key:"created_a",label:""}],list:[]}}},B=y,w=(o("a5a4"),o("6544")),T=o.n(w),I=o("b974"),$=Object(_["a"])(B,b,f,!1,null,"5e10adb8",null),O=$.exports;T()($,{VSelect:I["a"]});var j={name:"booksdone",components:{BookTable:O},computed:Object(i["a"])({},Object(c["b"])(["currentCompanyId","currentBookId"])),mounted:function(){},data:function(){return{form:{id:"",from:"",to:"",name:""},loaded:!1,creating:!1,editing:!1,books:[{book_id:1,created_at:"2020-01-01 22:00:11",external_id:1122},{book_id:2,created_at:"2020-01-01 22:00:11",external_id:1123},{book_id:3,created_at:"2020-01-01 22:00:11",external_id:1124}]}},watch:{currentCompanyId:function(t,e){t&&this.loadBooks()}},methods:{loadData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.currentCompanyId){e.next=2;break}return e.abrupt("return");case 2:t.loadBooks();case 3:case"end":return e.stop()}}),e)})))()},submitBook:function(t){t.preventDefault(),this.updateBook()},updateBook:function(){var t=this;this.creating?s.a.post("/book",this.form).then((function(e){201===e.status&&(t.creating=!1,t.form=e.data.book,t.toastr("success","OK","Verifikat skapades"),t.loadBooks())})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte skapa verifikat")})):s.a.put("/book",this.form).then((function(e){204===e.status&&(t.creating=!1,t.form=e.data.book,t.toastr("success","OK","Verifikatet uppdaterades"),t.loadBooks())})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte uppdatera verifikatet")}))},createBook:function(){this.creating=!0,this.editing=!0,this.scrollToEditBook(),this.form.company_id=this.currentCompanyId,this.form.book_id=this.currentBookId},deleteBook:function(t){var e=this;s.a.delete("/book?book_id=".concat(t,"&company_id=").concat(this.currentCompanyId)).then((function(o){e.books=e.books.filter((function(e){return e.book_id!==t})),e.creating=!1,e.editing=!1,e.toastr("success","OK","Verifikatet togs bort"),e.loadBooks()})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte ta bort verifikatet")}))},selectBook:function(t){for(var e=0;e<this.books.length;++e)this.books[e].id===t&&(this.form=this.books[e]);this.creating=!1,this.editing=!0,this.scrollToEditBook()},getLangText:function(t,e){for(var o=0;o<t.length;++o)if(t[o].lang===e)return t[o].text;return"Språköversättning saknas"},loadBooks:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.books=[],s.a.get("/company?company_id=".concat(t.currentCompanyId)).then((function(e){200===e.status&&(t.books=e.data.company.books,t.loaded=!0)})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte lista verifikat")}));case 2:case"end":return e.stop()}}),e)})))()},scrollToEditBook:function(){var t=this;setTimeout((function(){var e=t.$el.getElementsByClassName("edit-live-book-container")[0];if(e){var o=-70,a=e.getBoundingClientRect().top+window.pageYOffset+o;window.scrollTo({top:a,behavior:"smooth"})}}),100)},toastr:function(t,e,o){this.$bvToast.toast(o,{title:e,autoHideDelay:2e3,appendToast:!0,variant:t})}}},D=j,S=(o("bd73"),Object(_["a"])(D,l,d,!1,null,"3572fbe0",null)),P=S.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-5",attrs:{id:"page-wait-books"}},[o("BookTable",{attrs:{books:t.books,type:"wait"},on:{createBookClicked:t.createBook,selectBookClicked:t.selectBook,deleteBookClicked:t.deleteBook,toastr:t.toastr}}),o("div",{staticClass:"scroll-to-container"}),t.creating||t.editing?o("b-card",{ref:"edit-wait-book",staticClass:"mb-2 edit-live-book-container",attrs:{title:"",id:"edit-wait-book","hide-footer":""}},[o("div",[o("b-form",{staticClass:"mt-8",on:{submit:t.submitBook}},[o("b-form-group",{attrs:{id:"input-group-book_id",label:"ID","label-for":"input-book_id"}},[o("b-form-input",{attrs:{id:"input-book_id",type:"text",required:"",disabled:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),o("b-form-group",{attrs:{id:"input-group-1",label:"Namn på booken","label-for":"input-1"}},[o("b-form-input",{attrs:{id:"input-1",type:"text"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),o("b-form-group",{attrs:{id:"input-group-2",label:"Från Datum","label-for":"input-2"}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"input-2"},model:{value:t.form.from,callback:function(e){t.$set(t.form,"from",e)},expression:"form.from"}})],1),o("b-form-group",{attrs:{id:"input-group-3",label:"Till Datum","label-for":"input-3"}},[o("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"input-3"},model:{value:t.form.to,callback:function(e){t.$set(t.form,"to",e)},expression:"form.to"}})],1),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Spara")])],1)],1)]):t._e()],1)},V=[],K={name:"bookswait",components:{BookTable:O},computed:Object(i["a"])({},Object(c["b"])(["currentCompanyId","currentBookId"])),mounted:function(){this.loadBooks()},data:function(){return{form:{id:"",from:"",to:"",name:""},loaded:!1,creating:!1,editing:!1,books:[]}},watch:{currentCompanyId:function(t,e){t&&this.loadBooks()}},methods:{loadData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.currentCompanyId){e.next=2;break}return e.abrupt("return");case 2:t.loadBooks();case 3:case"end":return e.stop()}}),e)})))()},submitBook:function(t){t.preventDefault(),this.updateBook()},updateBook:function(){var t=this;this.creating?s.a.post("/book",this.form).then((function(e){201===e.status&&(t.creating=!1,t.form=e.data.book,t.toastr("success","OK","Verifikat skapades"),t.loadBooks())})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte skapa verifikat")})):s.a.put("/book",this.form).then((function(e){204===e.status&&(t.creating=!1,t.form=e.data.book,t.toastr("success","OK","Verifikatet uppdaterades"),t.loadBooks())})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte uppdatera verifikatet")}))},createBook:function(){this.creating=!0,this.editing=!0,this.scrollToEditBook(),this.form.company_id=this.currentCompanyId,this.form.book_id=this.currentBookId},deleteBook:function(t){var e=this;s.a.delete("/book?book_id=".concat(t,"&company_id=").concat(this.currentCompanyId)).then((function(o){e.books=e.books.filter((function(e){return e.book_id!==t})),e.creating=!1,e.editing=!1,e.toastr("success","OK","Verifikatet togs bort"),e.loadBooks()})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte ta bort verifikatet")}))},selectBook:function(t){for(var e=0;e<this.books.length;++e)this.books[e].id===t&&(this.form=this.books[e]);this.creating=!1,this.editing=!0,this.scrollToEditBook()},getLangText:function(t,e){for(var o=0;o<t.length;++o)if(t[o].lang===e)return t[o].text;return"Språköversättning saknas"},loadBooks:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.books=[],s.a.get("/company?company_id=".concat(t.currentCompanyId)).then((function(e){200===e.status&&(t.books=e.data.company.books,t.loaded=!0)})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte lista verifikat")}));case 2:case"end":return e.stop()}}),e)})))()},scrollToEditBook:function(){var t=this;setTimeout((function(){var e=t.$el.getElementsByClassName("edit-live-book-container")[0];if(e){var o=-70,a=e.getBoundingClientRect().top+window.pageYOffset+o;window.scrollTo({top:a,behavior:"smooth"})}}),100)},toastr:function(t,e,o){this.$bvToast.toast(o,{title:e,autoHideDelay:2e3,appendToast:!0,variant:t})}}},A=K,R=(o("f7ff"),Object(_["a"])(A,E,V,!1,null,"27702996",null)),F=R.exports,N={name:"periods",components:{BookDoneView:P,BookWaitView:F},computed:Object(i["a"])({},Object(c["b"])(["currentCompanyId","currentPeriodId"])),mounted:function(){},data:function(){return{}},watch:{currentCompanyId:function(t,e){},currentPeriodId:function(t,e){}},methods:{toastr:function(t,e,o){this.$bvToast.toast(o,{title:e,autoHideDelay:2e3,appendToast:!0,variant:t})}}},z=N,H=(o("7bca"),o("71a3")),q=o("c671"),J=o("fe57"),L=Object(_["a"])(z,a,r,!1,null,"4d13abac",null);e["default"]=L.exports;T()(L,{VTab:H["a"],VTabItem:q["a"],VTabs:J["a"]})},f1d8:function(t,e,o){},f7ff:function(t,e,o){"use strict";o("8bcf")}}]);
//# sourceMappingURL=chunk-c3c23972.9f09e81b.js.map