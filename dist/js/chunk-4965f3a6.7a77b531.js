(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4965f3a6"],{"4a44":function(t,e,a){"use strict";a("fa73a")},"913f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"px-5",attrs:{id:"page-periods"}},[a("h5",{staticClass:"mb-6 ml-2"},[t._v("Import av medlemmar")]),a("b-card",{staticClass:"mb-2",attrs:{title:"","hide-footer":""}},[a("div",{staticClass:"wizard wizard-3",attrs:{id:"kt_wizard_v3","data-wizard-state":"step-first","data-wizard-clickable":"false"}},[a("div",{staticClass:"wizard-nav border-bottom mb-1 mb-lg-5"},[a("div",{staticClass:"wizard-steps px-8 py-8 px-lg-15 py-lg-3"},[a("div",{staticClass:"wizard-step",attrs:{"data-wizard-type":"step","data-wizard-state":"current"}},[a("div",{staticClass:"wizard-label"},[a("h3",{staticClass:"wizard-title"},[a("span",[t._v("1")]),t._v(" Ladda upp fil")]),a("div",{staticClass:"wizard-bar"})])]),a("div",{staticClass:"wizard-step",attrs:{"data-wizard-type":"step"}},[a("div",{staticClass:"wizard-label"},[a("h3",{staticClass:"wizard-title"},[a("span",[t._v("2")]),t._v(" Mappa Databas")]),a("div",{staticClass:"wizard-bar"})])]),a("div",{staticClass:"wizard-step",attrs:{"data-wizard-type":"step"}},[a("div",{staticClass:"wizard-label"},[a("h3",{staticClass:"wizard-title"},[a("span",[t._v("3")]),t._v(" Period")]),a("div",{staticClass:"wizard-bar"})])]),a("div",{staticClass:"wizard-step",attrs:{"data-wizard-type":"step"}},[a("div",{staticClass:"wizard-label"},[a("h3",{staticClass:"wizard-title"},[a("span",[t._v("4")]),t._v(" Kontrollera")]),a("div",{staticClass:"wizard-bar"})])]),a("div",{staticClass:"wizard-step",attrs:{"data-wizard-type":"step"}},[a("div",{staticClass:"wizard-label"},[a("h3",{staticClass:"wizard-title"},[a("span",[t._v("5")]),t._v(" Import")]),a("div",{staticClass:"wizard-bar"})])])])]),a("div",{staticClass:"row justify-content-center py-12 px-8 py-lg-15 px-lg-10"},[a("div",{staticClass:"col-xl-12 col-xxl-7"},[a("form",{staticClass:"form",attrs:{id:"kt_form"}},[a("div",{staticClass:"pb-5",attrs:{"data-wizard-type":"step-content","data-wizard-state":"current"}},[a("h4",{staticClass:"mb-10 font-weight-bold text-dark"},[t._v("Medlemsregisterfil")]),a("div",{staticClass:"mb-8"},[a("p",[t._v("Hur hanteras landskoder i importen?")]),a("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.showCountryGuide}},[t._v("Visa landguiden")])],1),t.displayCountryGuide?a("b-card",[a("b-alert",{attrs:{show:"",variant:"secondary"}},[t._v('En kolumn som mappas som "Land" måste följa kodstandarden för landskoder enligt tabellen nedan. Fält där landskod saknas kommer att automatiskt mappa till Sverige.')]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-head-custom table-vertical-center table-head-bg table-borderless"},[a("tbody",[a("tr",{staticStyle:{"background-color":"black",color:"white"}},[a("td",[t._v("Kod")]),a("td",[t._v("Land")])]),t._l(t.countries,(function(e,i){return[a("tr",{key:i},[a("td",[t._v(t._s(e.iso))]),a("td",[t._v(t._s(e.sv))])])]}))],2)])])],1):t._e(),a("div",[a("b-alert",{attrs:{show:"",variant:"secondary"}},[t._v("Ladda upp ert medlemsregister i "),a("strong",[t._v("XLSX")]),t._v(" format. Ifall filen är CSV eller XLS (Excel 97) format så måste filen sparas som XLSX format från Excel.")]),a("input",{ref:"file",attrs:{hidden:"",type:"file",id:"file",accept:".xlsx"},on:{change:function(e){return t.handleFileUpload()}}}),a("b-button",{attrs:{type:"button",variant:"success"},on:{click:function(e){return t.selectFile()}}},[t._v("Ladda upp medlemsregister")])],1),t.file_error?a("div",{staticClass:"mt-4"},[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("Filen är ogiltig, kontrollera att filen är i XLSX format")])],1):t._e()],1),a("div",{staticClass:"pb-5",attrs:{"data-wizard-type":"step-content","data-wizard-state":"pending"}},[a("h4",{staticClass:"mb-10 font-weight-bold text-dark"},[t._v("Kontrollera importfälten")]),a("div",{staticClass:"list-selects"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-head-custom table-vertical-center table-head-bg table-borderless"},[a("thead",[a("tr",{staticClass:"text-left"},[a("th",{staticStyle:{"min-width":"40px"}},[a("span",{staticClass:"text-dark-75"},[t._v("Kolumn")])]),a("th",[t._v("Excel fält")]),a("th",[t._v("Memlist fält")])])]),a("tbody",{ref:"colDefRows"},t._l(t.column_def.mapped_columns,(function(e){return a("ImportColDefRow",{key:e.id,ref:"importColDefRows",refInFor:!0,attrs:{mappedColumn:e,currentCompanyId:t.currentCompanyId,dbColumnOptions:t.dbColumnOptions},on:{coldefSelected:t.coldefSelected,toastr:t.toastr}})})),1)])])])]),a("div",{staticClass:"pb-5",attrs:{"data-wizard-type":"step-content","data-wizard-state":"pending"}},[a("h4",{staticClass:"mb-10 font-weight-bold text-dark"},[t._v("Kontrollera period")]),a("b-alert",{attrs:{show:"",variant:"secondary"}},[a("strong",[t._v(t._s(this.periodName))]),a("br"),t._v("Medlemmarna importeras till denna period")])],1),a("div",{staticClass:"pb-5",attrs:{"data-wizard-type":"step-content","data-wizard-state":"pending"}},[a("ImportConfirmPage",{ref:"importConfirmPage",attrs:{datatype:"clients",file_id:t.file_id,mapped_columns:t.column_def.mapped_columns,startImport:t.startImport,importFailed:t.importFailed,importFinalized:t.importFinalized},on:{finalizeReady:t.finalizeReady,setImportId:t.setImportId}})],1),a("div",{staticClass:"pb-5",attrs:{"data-wizard-type":"step-content","data-wizard-state":"pending"}},[a("h4",{staticClass:"mb-10 font-weight-bold text-dark"},[t._v("Importerar")]),a("ImportFinalizePage",{attrs:{import_id:t.import_id,import_option:t.import_option,doFinalize:t.doFinalize}})],1),a("div",{staticClass:"d-flex justify-content-between border-top pt-10"},[a("div",{staticClass:"mr-2"},[t.lastPage?t._e():a("button",{staticClass:"btn btn-light-primary font-weight-bold text-uppercase px-9 py-4",attrs:{"data-wizard-type":"action-prev"}},[t._v(" Föregående ")])]),a("div",[t.showNext?a("button",{ref:"btnContinue",staticClass:"btn btn-primary font-weight-bold text-uppercase px-9 py-4",attrs:{"data-wizard-type":"action-next"},on:{click:t.nextPage}},[t._v(" Nästa steg ")]):t._e()])])])])])])])],1)},s=[],n=(a("b0c0"),a("96cf"),a("1da1")),r=a("5530"),o=a("bc3a"),l=a.n(o),d=a("2f62"),c=a("63d1"),p=a("fd4b"),m=a("8389"),u=a("ae1f"),f=a("a7c1"),h={name:"import",components:{ImportColDefRow:c["a"],ImportConfirmPage:p["a"],ImportFinalizePage:m["a"]},computed:Object(r["a"])({},Object(d["b"])(["currentCompanyId","currentPeriodId","periods"])),mounted:function(){this.setPeriodName();var t=this;this.showNext=!0,this.wizard=new f["a"]("kt_wizard_v3",{startStep:1,clickableSteps:!0}),this.wizard.on("beforeNext",(function(){})),this.wizard.on("change",(function(){setTimeout((function(){u["a"].scrollTop(),t.currentPage=t.wizard.currentStep,console.log("page change: "),console.log(t.currentPage),2!==t.currentPage&&3!==t.currentPage||(t.showNext=!0)}),200)})),this.loadData(),this.showNext=!1},data:function(){return{lastPage:!1,displayCountryGuide:!1,countries:[],showNext:!0,currentPage:0,file_error:!1,dbColumnOptions:[],wizard:null,import_option:null,column_def:{import_id:"",file_id:"31",mapped_columns:[{id:"aa",db:{col_name:"rdt",lang_text:"registrering",attr:!1},excel:{col:0,name:"Registreringsdatum"},values:["2018-01-19 01:30:00"]},{id:"bb",db:{col_name:"firstname",lang_text:"Förnamn",attr:!1},excel:{col:1,name:"Förnamn"},values:["Jakob"]}]},type_def:{table_name:"ml_client",table_pk_name:"client_id",columns:[{col_name:"skip",variation_lang_records:[],valtype:"",special:!1,func:"",max_length:0,variations:[],entity:"client",lang_record:{deleted:0,lang_record_id:"CLIENT_SKIP",page_name:"ml_header.html",lang_text:[{lang:"sv",text:"Hoppa över"},{lang:"en",text:""}]},exclude:[]},{col_name:"public_id",variation_lang_records:[{deleted:0,lang_record_id:"CLIENT_MEDLEMSNUMMER",page_name:"all",lang_text:[{lang:"sv",text:"Medlemsnummer"},{lang:"en",text:"Member number"}]},{deleted:0,lang_record_id:"CLIENT_KUNDNUMMER",page_name:"all",lang_text:[{lang:"sv",text:"Kundnummer"},{lang:"en",text:"Customer number"}]}],valtype:"string",special:!1,func:"",max_length:512,variations:["medlemsnummer","kundnummer"],entity:"client",lang_record:{deleted:0,lang_record_id:"CLIENT_PUBLIC_ID",page_name:"all",lang_text:[{lang:"sv",text:"Medlemsnummer"},{lang:"en",text:""}]},exclude:["tfn","tel"]}]},requirements:{personnr:!1,ssn:!1,phone:!1,email:!1,address:!1,fullname:!1,emailorphone:!1,sex:!1,age:!1},periodName:"",poll:!1,import_id:"",startImport:!1,file_id:"",doFinalize:!1}},watch:{currentPage:function(t,e){console.log("current page change: "+t),4===t&&(this.startImport=!0,this.showNext=!1)},currentCompanyId:function(t,e){t&&this.loadData()},currentPeriodId:function(t,e){t&&(this.loadData(),this.setPeriodName())}},methods:{loadCountries:function(){var t=this;l.a.get("/location/countries").then((function(e){t.countries=e.data.countries})).catch((function(e){console.error(e),t.toastr("danger","Fel","Kunde inte hämta lista på länder")}))},handleFileUpload:function(){this.file=this.$refs.file.files[0],this.uploadFile()},selectFile:function(){console.log("click"),this.$refs.file.click()},uploadFile:function(){var t=this,e=new FormData;e.append("file",this.file),e.append("file_source","files"),e.append("file_type","IMPORT_MEMBERS"),e.append("company_id",this.currentCompanyId),e.append("period_id",this.currentPeriodId),l.a.post("/fileupload",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.file_id=e.data.fileobjs[0].file_id,t.readColumnDefFromFile(t.file_id)})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte ladda upp fil")}))},setPeriodName:function(){for(var t=0;t<this.periods.length;++t)if(this.periods[t].id===this.currentPeriodId)return void(this.periodName=this.periods[t].name)},showCountryGuide:function(){this.loadCountries(),this.displayCountryGuide=!this.displayCountryGuide},nextPage:function(t){t.preventDefault(),this.wizard.goNext(),console.log("next page: "),console.log(this.wizard.getStep()),4===this.wizard.getStep()&&(this.showNext=!1,this.startImport=!0),5===this.wizard.getStep()&&(this.doFinalize=!0,this.lastPage=!0)},submit:function(){},loadData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.currentCompanyId){e.next=2;break}return e.abrupt("return");case 2:if(t.currentPeriodId){e.next=4;break}return e.abrupt("return");case 4:t.setDbColDefOptions();case 5:case"end":return e.stop()}}),e)})))()},readColumnDefFromFile:function(t){var e=this;l.a.get("/import/read_column_defs?type=clients&file_id=".concat(t)).then((function(t){200===t.status?(e.requirements=t.data.requirements,e.type_def=t.data.type_def,e.column_def=t.data.column_def,e.wizard.goNext(),e.setDbColDefOptions(),e.setMappingRedRows()):409===t.status&&e.toastr("danger","Fel",t.data.message,1e4)})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte tolka filen")}))},setMappingRedRows:function(){for(var t=!1,e=0;e<this.column_def.mapped_columns.length;++e){var a=this.column_def.mapped_columns[e];a.duplicate=!1}for(e=0;e<this.column_def.mapped_columns.length;++e){a=this.column_def.mapped_columns[e];if("skip"!==a.db.col_name)for(var i=0;i<this.column_def.mapped_columns.length;++i)if(e!==i){var s=this.column_def.mapped_columns[i];a.db.col_name===s.db.col_name&&(a.duplicate=!0,t=!0)}}this.showNext=!t,this.refreshMappingKeys()},getLangText:function(t,e){for(var a=0;a<t.length;++a)if(t[a].lang===e)return t[a].text;return"Språköversättning saknas"},setDbColDefOptions:function(){this.dbColumnOptions=[];for(var t=0;t<this.type_def.columns.length;++t)this.dbColumnOptions.push({value:this.type_def.columns[t].col_name,text:this.getLangText(this.type_def.columns[t].lang_record.lang_text,"sv")})},coldefSelected:function(t){this.setMappingRedRows()},refreshMappingKeys:function(){for(var t=0;t<this.column_def.mapped_columns.length;++t)this.column_def.mapped_columns[t].id=this.randomstr(8);for(t=0;t<this.$refs.importColDefRows.length;++t)this.$refs.importColDefRows[t].updateComponent()},randomstr:function(t){for(var e="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=a.length,s=0;s<t;s++)e+=a.charAt(Math.floor(Math.random()*i));return e},setImportId:function(t){console.log("import id set: "+this.import_id),this.import_id=t},finalizeReady:function(t){this.showNext=!0,this.import_option=t},importFinalized:function(){this.$refs.btnContinue.click()},importFailed:function(){this.$refs.btnContinue.click()},toastr:function(t,e,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2e3;this.$bvToast.toast(a,{title:e,autoHideDelay:i,appendToast:!0,variant:t})}}},_=h,g=(a("4a44"),a("2877")),v=Object(g["a"])(_,i,s,!1,null,"6e5feca1",null);e["default"]=v.exports},fa73a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-4965f3a6.7a77b531.js.map