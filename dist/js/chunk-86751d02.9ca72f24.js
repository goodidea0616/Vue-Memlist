(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86751d02"],{"0432":function(t,e,s){},1758:function(t,e,s){"use strict";s("3348")},"23a5":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-custom card-stretch gutter-b"},[s("table",{staticClass:"table table-vertical-center table-head-bg table-borderless"},[s("thead",[s("tr",[s("td",{staticStyle:{width:"300px"}},[s("div",{staticClass:"d-flex justify-content-start align-self-center"},[t._m(0),s("div",{staticClass:"align-self-center"},[t._v(" "+t._s(t.todo.name)+" ")])])]),s("td",[s("div",{staticClass:"d-flex justify-content-start align-self-center"},[t._m(1),s("div",{staticClass:"align-self-center"},[t._v(" "+t._s(t.category[t.todo.type2])+" ")])])]),s("td",[s("div",{staticClass:"d-flex justify-content-start align-self-center"},[t._m(2),s("div",{staticClass:"align-self-center"},[t._v(" "+t._s(t.supportOptions[t.todo.severity-1])+" ")])])]),s("td",[s("div",{staticClass:"d-flex justify-content-start align-self-center"},[t.isCompleted(t.todo.status)?t._e():s("span",{staticClass:"mr-3"},[s("i",{staticClass:"fas fa-lock-open header-icon"})]),t.isCompleted(t.todo.status)?s("span",{staticClass:"mr-3"},[s("i",{staticClass:"fas fa-lock header-icon"})]):t._e(),s("div",{staticClass:"align-self-center"},[t._v(" "+t._s(t.status[t.todo.status])+" ")])])]),s("td",[s("div",{staticClass:"d-flex justify-content-end align-self-center"},[t.isCompleted(t.todo.status)?t._e():s("a",{staticClass:"btn-text-primary btn-hover-light-primary font-weight-bold mr-3 cursor-pointer",on:{click:t.onClose}},[t._v("Stäng")]),s("Confirm",{ref:"close_todo",attrs:{title:"Ticket",message:"Är du säker på att du vill stänga detta ärende?",type:"success",confirm:"Ja",cancel:"Nej"},on:{confirm:t.closeTodo}})],1)])])])]),s("b-form-group",{staticClass:"d-flex justify-content-end mt-3"},[t.isCompleted(t.todo.status)||t.editing?t._e():s("b-button",{staticClass:"mr-6",attrs:{type:"button",variant:"primary"},on:{click:t.editComment}},[t._v("Svar")])],1),t.editing?s("b-form",{staticClass:"d-flex flex-column"},[s("div",{staticClass:"d-sm-flex justify-content-between mb-sm-10"},[s("b-form-group",{staticClass:"flex-fill mr-sm-6",attrs:{id:"input-group-user-name",label:"Namn","label-for":"input-user-name"}},[s("b-form-input",{attrs:{id:"input-user-name",type:"text",disabled:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[t._v(t._s(this.username))])],1),s("b-form-group",{staticClass:"flex-fill",attrs:{id:"input-group-user-email",label:"E-postadress","label-for":"input-user-email"}},[s("b-form-input",{attrs:{id:"input-user-email",type:"text",disabled:""},model:{value:t.useremail,callback:function(e){t.useremail=e},expression:"useremail"}})],1)],1),s("b-form-group",{attrs:{id:"input-group-desc",label:"Meddelande","label-for":"input-desc"}},[s("editor",{attrs:{id:"input-desc","api-key":"qjaly68mahdluhx0rongdllvelixwgn18730f5z7fdzq6hq2",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |                 alignleft aligncenter alignright alignjustify |                 bullist numlist outdent indent | removeformat"}},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}})],1),s("b-form-group",{staticClass:"d-flex justify-content-end"},[s("b-button",{staticClass:"mr-2",attrs:{type:"button",variant:"primary"},on:{click:t.sendComment}},[t._v("Skicka")]),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(e){t.editing=!1}}},[t._v("Avbryt")])],1),s("FileTable",{attrs:{files:t.files},on:{onUploadFileClicked:t.selectFile,downloadFileClicked:t.downloadFileClicked,deleteFileClicked:t.deleteFileClicked}}),s("input",{ref:"file",attrs:{hidden:"",type:"file",id:"file",accept:t.extensions},on:{change:function(e){return t.handleFileUpload()}}})],1):t._e(),t._l(t.conversations(),(function(e,a){return s("table",{key:a,staticClass:"table table-vertical-center table-borderless"},[s("thead",{staticClass:"text-left"},["comment"==e.type?s("tr",{class:e.user_id==t.userid?"comment-default-title":"comment-admin-title"},[s("td",{staticStyle:{width:"300px"}},[s("div",{staticClass:"d-flex justify-content-start align-self-center"},[t._m(3,!0),s("div",{staticClass:"align-self-center"},[t._v(" "+t._s(""==e.username?t.user_name:e.username))])])]),s("td",[s("div",{staticClass:"align-self-center"},[t._v(" "+t._s(""==e.created_at?"Date Unknown":e.created_at)+" ")])]),s("td",{staticClass:"align-self-center"}),s("td",{staticClass:"align-self-center"})]):t._e(),"file"==e.type?s("tr",{class:e.user_id==t.userid?"comment-default-title":"comment-admin-title"},[s("td",{staticStyle:{width:"300px"}},[s("div",{staticClass:"d-flex justify-content-start align-self-center"},[t._m(4,!0),s("div",{staticClass:"align-self-center"},[t._v(" "+t._s(""==e.username?t.user_name:e.username))])])]),s("td",{staticClass:"align-self-center"},[t._v(" "+t._s(""==e.created_at?"Date Unknown":e.created_at)+" ")]),s("td",{staticClass:"align-self-center"}),s("td",{staticClass:"align-self-center"},[t._v(" "+t._s(e.text)+" ")]),s("td",{staticClass:"d-flex justify-content-end p-0"},[s("a",{staticClass:"btn btn-icon btn-light btn-sm mx-6 mt-2 border border-primary",attrs:{href:"#"},on:{click:function(s){return t.downloadFileClicked(e.file_id)}}},[t._m(5,!0)])])]):t._e()]),"comment"==e.type?s("tbody",[s("td",{attrs:{colspan:"4"}},[s("p",{staticClass:"m-2 pl-8",attrs:{html:e.text},domProps:{innerHTML:t._s(e.text)}})])]):t._e()])}))],2)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"ml-1 mr-3"},[s("i",{staticClass:"fas fa-file-signature header-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mr-3"},[s("i",{staticClass:"far fa-question-circle header-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mr-3"},[s("i",{staticClass:"fas fa-clock header-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"ml-1 mr-2"},[s("i",{staticClass:"fas fa-user-circle",staticStyle:{"font-size":"16px"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"ml-1 mr-3"},[s("i",{staticClass:"fas fa-file",staticStyle:{"font-size":"16px"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"fa fa-download",staticStyle:{"font-size":"16px",color:"#3699FF"},attrs:{"aria-hidden":"true"}})])}],o=(s("99af"),s("4de4"),s("baa5"),s("d81d"),s("fb6a"),s("b0c0"),s("5530")),i=s("bc3a"),r=s.n(i),l=s("2f62"),c=(s("c1df"),s("ca72")),d=s("3e2c"),u=s("b262"),m={name:"support-chat-box",props:["todo","username","useremail","userid"],components:{editor:c["a"],Confirm:d["a"],FileTable:u["a"]},computed:Object(o["a"])({},Object(l["b"])(["currentCompanyId","currentPeriodId","currentUserId","currentUser"])),watch:{todo:function(t,e){console.log(t,"Todo Data"),0===t.tasks.length&&t.tasks.push(this.createTask(t.todo_id))}},methods:{conversations:function(){var t=this.todo.tasks[0].comments,e=this.todo.tasks[0].files,s=t.map((function(t){return{user_id:t.user_id,text:t.text,created_at:t.created_at,type:"comment",username:t.username,file_id:0}}));return s=s.concat(e.map((function(t){return{user_id:t.user_id,text:t.name,created_at:t.created_at,type:"file",username:t.username,file_id:t.file_id}}))),s.sort((function(t,e){return e.created_at.localeCompare(t.created_at)})),s},comments:function(){var t=this.todo.tasks[0].comments;return t.slice().reverse()},createTask:function(t){var e=this;r.a.post("/todo_task",{todo_id:t}).then((function(t){return e.toastr("success","OK","Ärendet har skapats"),t.data.task})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte skapa ärendet")}))},sendComment:function(){var t=this;this.editing=!1;var e=this.todo.tasks[0],s="sub",a=this.form.comment,n=e.todo_task_id;r.a.post("/todo_task/comment",{from:s,comment:a,todo_task_id:n}).then((function(s){t.form.comment="";var a=s.data.comment,n=a.from.lastIndexOf(" ");a.username=a.from.substring(0,n),a.user_email=a.from.substring(n),e.comments.push(a),t.todo.tasks[0]=e})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte skicka kommentar")}))},editComment:function(){this.editing=!0,this.files=[]},onClose:function(){this.$refs["close_todo"].show()},closeTodo:function(){var t=this,e=this.todo;e.status="DOC",r.a.put("/todo",e).then((function(s){t.$emit("closeTodo",e)})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte skapa ärendet")}))},downloadFileClicked:function(t){var e=this;r.a.get("/file?file_id=".concat(t)).then((function(t){window.open(t.data.file.public_path,"_blank")})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte hämta filen")}))},deleteFileClicked:function(t){var e=this;r.a.delete("/file?file_id=".concat(t,"&company_id=").concat(this.currentCompanyId,"&todo_task_id=").concat(this.todo.tasks[0].todo_task_id)).then((function(s){200==s.status&&(e.files=e.files.filter((function(e){return e.file_id!=t})),e.todo.tasks[0].files=e.todo.tasks[0].files.filter((function(e){return e.file_id!=t})))})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte hämta filen")}))},selectFile:function(){this.$refs.file.click()},handleFileUpload:function(){this.file=this.$refs.file.files[0],this.uploadFile()},downloadFile:function(){},deleteFile:function(){},uploadFile:function(){var t=this,e=new FormData;e.append("file",this.file),e.append("file_source","todo"),e.append("file_type",""),e.append("company_id",this.currentCompanyId),e.append("todo_id",this.todo.todo_id),e.append("todo_task_id",this.todo.tasks[0].todo_task_id),r.a.post("/fileupload?todo=true&todo_id=".concat(this.todo.todo_id,"&todo_task_id=").concat(this.todo.tasks[0].todo_task_id),e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.toastr("success","OK","Filen laddades upp"),t.file.file_id=e.data.fileobjs[0].file_id,t.file.created_at=e.data.fileobjs[0].created_at,t.file.user_id=t.userid,t.file.username=t.user_name,t.$emit("fileUploaded",t.file),t.files.push(t.file),t.todo.tasks[0].files.push(t.file)})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte ladda upp fil")}))},toastr:function(t,e,s){this.$emit("toastr",t,e,s)}},data:function(){return{editing:!1,form:{username:"",comment:""},files:[],isCompleted:function(t){return"DONE"==t||"CN"==t||"REJ"==t||"DEL"==t||"DOC"==t},category:{N:"NOTSET",B:"BUG",F:"FEATURE",I:"INFO",S:"SUPPORT"},status:{WAIT:"VÄNTAR",DRAFT:"UTKAST",NOT:"EJ KLAR",DONE:"KLART",CN:"BEKRÄFTAD",DEL:"BORTTAGEN",ACC:"ACCEPTERAD",REJ:"AVVISAD",BAC:"BACKLOG",FUT:"FRAMTID",UNREAD:"OLÄST",READ:"LÄST",DOC:"STÄNGT"},supportOptions:["låg","låg","låg","låg","medel","medel","medel","hög","hög","hög"],extensions:[".7z",".bz2",".csv",".docx",".doc",".eml",".gif",".gz",".jpeg",".jpg",".odt",".ods",".pdf",".php",".png",".rar",".sql",".txt",".xls",".xlsx",".wav"]}}},f=m,p=(s("5ce2"),s("2877")),h=Object(p["a"])(f,a,n,!1,null,"04a6f038",null);e["a"]=h.exports},3348:function(t,e,s){},"3e2c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-modal",{ref:"confirmModal",attrs:{"hide-footer":"",title:t.title}},[s("b-row",[s("b-col",{attrs:{lg:"12"}},[s("div",{staticClass:"d-block text-center"},[s("h3",[t._v(t._s(t.message))])])])],1),s("b-row",{staticClass:"mt-8 mb-8"},[s("b-col",{attrs:{lg:"6"}},[s("b-button",{attrs:{variant:t.confirmColor,block:""},on:{click:t.onConfirm}},[t._v(t._s(t.confirm))])],1),s("b-col",{attrs:{lg:"6"}},[s("b-button",{attrs:{variant:"outline-secondary",block:""},on:{click:t.onCancel}},[t._v(t._s(t.cancel))])],1)],1)],1)},n=[],o=(s("96cf"),s("1da1")),i={name:"confirm-modal",data:function(){return{}},props:{type:{type:String,default:"danger"},title:String,message:String,confirm:{type:String,default:"Bekräfta"},cancel:{type:String,default:"Avbryt"}},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{show:function(){this.$refs["confirmModal"].show()},onConfirm:function(){this.$refs["confirmModal"].hide(),this.$emit("confirm")},onCancel:function(){this.$refs["confirmModal"].hide(),this.$emit("cancel")}},computed:{confirmColor:function(){switch(this.type){case"danger":return"outline-danger";case"success":return"outline-success";case"info":return"outline-info";case"warning":return"outline-warning";case"primary":return"outline-primary"}}}},r=i,l=s("2877"),c=Object(l["a"])(r,a,n,!1,null,"7c6e001a",null);e["a"]=c.exports},5797:function(t,e,s){},"5ce2":function(t,e,s){"use strict";s("5797")},"86b1":function(t,e,s){"use strict";s("0432")},"9b8a":function(t,e,s){},b32c:function(t,e,s){"use strict";s("9b8a")},c39f:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-5",attrs:{id:"admin-support"}},[s("h5",{staticClass:"mb-6 ml-2"},[t._v("Admin Support")]),t.isTalongAdmin?s("AdminSupportTable",{attrs:{todos:t.todos},on:{selectTodo:t.selectTodo}}):t._e(),t.editing?s("b-card",[s("Chatbox",{attrs:{todo:t.todo_selected,userid:t.userid,username:t.username,useremail:t.useremail,id:"supper-support-table"},on:{closeTodo:t.closeTodo}})],1):t._e()],1)},n=[],o=(s("99af"),s("c740"),s("a434"),s("96cf"),s("1da1")),i=s("5530"),r=s("bc3a"),l=s.n(r),c=s("2f62"),d=(s("767c"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-custom card-stretch gutter-b"},[s("div",{staticClass:"card-body pt-10 pb-3"},[s("div",{staticClass:"d-flex justify-content-fixed"},[s("div",[s("b-select",{attrs:{options:t.options},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),s("b-pagination",{staticClass:"ml-auto",attrs:{"total-rows":t.todos.length,"per-page":t.perPage,"aria-controls":"admin-support-table","first-number":"","last-number":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),s("b-table",{attrs:{id:"admin-support-table",fields:t.headers,items:t.items,"per-page":t.perPage,"current-page":t.currentPage,"head-variant":"light"},scopedSlots:t._u([{key:"cell(todo_id)",fn:function(e){return[s("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(s){return t.selectTodo(e.item.todo_id)}}},[t._v(" Hantera > ")])]}}])})],1)])}),u=[],m=(s("7db0"),s("d81d"),s("b0c0"),{name:"admin-support-table",components:{},props:{todos:{type:Array,default:function(){return[]}}},computed:Object(i["a"])({},Object(c["b"])(["companies","currentCompanyId","currentPeriodId"])),mounted:function(){},data:function(){return{perPage:20,currentPage:1,items:[],headers:[{key:"category",label:"Kategori",sortable:!0,thClass:"pl-7",tdClass:"pl-7"},{key:"company",label:"Företagsnamn",sortable:!0,thClass:"comment"},{key:"name",label:"Ämne",sortable:!0},{key:"severity",label:"Nivå",sortable:!0},{key:"status",label:"Status",sortable:!0},{key:"updated_at",label:"Senast uppdaterad",sortable:!0},{key:"todo_id",label:"Hantera"}],options:[{value:20,text:"20"},{value:50,text:"50"},{value:100,text:"100"}],category:{N:"NOTSET",I:"Teknisk support",F:"Ekonomi support",B:"Försäljning",S:"Förslag"},status:{WAIT:"VÄNTAR",DRAFT:"UTKAST",NOT:"EJ KLAR",DONE:"KLART",CN:"BEKRÄFTAD",DEL:"BORTTAGEN",ACC:"ACCEPTERAD",REJ:"AVVISAD",BAC:"BACKLOG",FUT:"FRAMTID",UNREAD:"OLÄST",READ:"LÄST",DOC:"STÄNGT"},supportOptions:["låg","låg","låg","låg","medel","medel","medel","hög","hög","hög"]}},watch:{companies:function(t,e){this.filterValue(this.todos)},todos:function(t,e){this.filterValue(t)}},methods:{filterValue:function(t){var e=this;this.items=t.map((function(t){var s=e.companies.find((function(e){return e.company_id==(t.creator_company_id?t.creator_company_id:t.company_id)})),a=s?s.name:"Loading";return{todo_id:t.todo_id,category:e.category[t.type2],company:a,name:t.name,severity:e.supportOptions[t.severity-1],status:e.status[t.status],updated_at:t.last_updated_at}})),this.items.sort((function(t,e){return e.updated_at.localeCompare(t.updated_at)}))},selectTodo:function(t){console.log(t,"Todo_id"),this.$emit("selectTodo",t)},toastr:function(t,e,s){this.$bvToast.toast(s,{title:e,autoHideDelay:2e3,appendToast:!0,variant:t})}}}),f=m,p=(s("b32c"),s("2877")),h=Object(p["a"])(f,d,u,!1,null,"7b4ad024",null),_=h.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card card-custom card-stretch gutter-b"},[s("table",{staticClass:"table table-head-custom table-vertical-center table-head-bg table-borderless"},[s("tbody",[s("tr",{staticStyle:{"background-color":"#F3F6F9","box-shadow":"0px 0px 1px 0px rgba(0,0,0,0.76)","-webkit-box-shadow":"0px 0px 1px 0px rgba(0,0,0,0.76)","-moz-box-shadow":"0px 0px 1px 0px rgba(0,0,0,0.76)"}},[s("td",[t._m(0),t._v(" "+t._s(t.todo.name)+" ")]),s("td",[t._m(1),t._v(" "+t._s(t.category[t.todo.type2])+" ")]),s("td",[t._m(2),t._v(" "+t._s(t.supportOptions[t.todo.severity-1])+" ")]),s("td",[t.isCompleted(t.todo.status)?t._e():s("span",{staticClass:"mr-sm-1"},[s("i",{staticClass:"fas fa-lock-open"})]),t.isCompleted(t.todo.status)?s("span",{staticClass:"mr-sm-1"},[s("i",{staticClass:"fas fa-lock"})]):t._e(),t._v(" "+t._s(t.status[t.todo.status])+" ")]),s("td",[t.isCompleted(t.todo.status)?t._e():s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.closeTodo}},[t._v("Close")])],1),s("td",[t._v(t._s(t.todo.created_at))])]),s("b-form-group",{staticClass:"d-flex justify-content-start mt-3"},[t.isCompleted(t.todo.status)?t._e():s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.editComment}},[t._v("Svar")])],1)],1)]),t.editing?s("b-form",{staticClass:"d-flex flex-column"},[s("div",{staticClass:"d-sm-flex justify-content-between mb-sm-10"},[s("b-form-group",{staticClass:"flex-fill mr-sm-6",attrs:{id:"input-group-user-name",label:"Namn","label-for":"input-user-name"}},[s("b-form-input",{attrs:{id:"input-user-name",type:"text",disabled:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[t._v(t._s(this.username))])],1),s("b-form-group",{staticClass:"flex-fill",attrs:{id:"input-group-user-email",label:"E-postadress","label-for":"input-user-email"}},[s("b-form-input",{attrs:{id:"input-user-email",type:"text",disabled:""},model:{value:t.useremail,callback:function(e){t.useremail=e},expression:"useremail"}})],1)],1),s("b-form-group",{attrs:{id:"input-group-desc",label:"Meddelande","label-for":"input-desc"}},[s("editor",{attrs:{id:"input-desc","api-key":"qjaly68mahdluhx0rongdllvelixwgn18730f5z7fdzq6hq2",init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |                  alignleft aligncenter alignright alignjustify |                  bullist numlist outdent indent | removeformat"}},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}})],1),s("b-form-group",{staticClass:"d-flex justify-content-end"},[s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.sendComment}},[t._v("Skicka")])],1)],1):t._e(),s("div",[t._l(t.comments(),(function(e,a){return s("div",{key:a,staticClass:"comment-task"},[s("div",{class:e.user_id==t.userid?"comment-default-title":"comment-admin-title"},[s("div",{staticClass:"d-sm-flex justify-content-between align-self-center p-sm-3"},[s("div",{staticClass:"d-flex justify-content-start align-self-center"},[t._m(3,!0),s("div",{staticClass:"align-self-center"},[t._v(" "+t._s(""==e.user_name?"Unknown":e.user_name))])]),s("div",{staticClass:"align-self-center pr-sm-3"},[t._v(" "+t._s(""==e.created_at?"Date Unknown":e.created_at)+" ")])])]),s("div",{staticClass:"p-sm-3"},[s("p",{staticClass:"my-4",attrs:{html:e.text},domProps:{innerHTML:t._s(e.text)}})])])})),t._m(4)],2)],1)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mr-sm-1"},[s("i",{staticClass:"fas fa-file-signature"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mr-sm-1"},[s("i",{staticClass:"far fa-question-circle"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mr-sm-1"},[s("i",{staticClass:"fas fa-clock"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"mr-sm-1"},[s("i",{staticClass:"fas fa-user-circle",staticStyle:{"font-size":"24px"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment-task"},[s("div",{staticClass:"d-sm-flex justify-content-between comment-admin-title align-self-center p-sm-3"},[s("div",{staticClass:"d-flex justify-content-start align-self-center"},[s("span",{staticClass:"mr-sm-1"},[s("i",{staticClass:"fas fa-user-circle",staticStyle:{"font-size":"24px"}})]),s("div",{staticClass:"align-self-center"},[t._v(" Admin User Name")])]),s("div",{staticClass:"align-self-center pr-sm-3"},[t._v(" Date Unkown ")])]),s("div",{staticClass:"p-sm-3"},[s("p",{staticClass:"my-4"},[t._v(" When admin response, we can use this style. When you check all, I will remove this tag. ")])])])}],v=(s("baa5"),s("fb6a"),s("ca72")),C={name:"support-chat-box",props:["todo","username","useremail","userid"],components:{editor:v["a"]},watch:{todo:function(t,e){console.log(t,"Todo Data"),0===t.tasks.length&&t.tasks.push(this.createTask(t.todo_id))}},methods:{comments:function(){var t=this.todo.tasks[0].comments;return t.slice().reverse()},createTask:function(t){var e=this;l.a.post("/todo_task",{todo_id:t}).then((function(t){return e.toastr("success","OK","Ärendet har skapats"),t.data.task})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte skapa ärendet")}))},sendComment:function(){var t=this;this.editing=!1;var e=this.todo.tasks[0],s="sub",a=this.form.comment,n=e.todo_task_id;l.a.post("/todo_task/comment",{from:s,comment:a,todo_task_id:n}).then((function(s){t.form.comment="";var a=s.data.comment,n=a.from.lastIndexOf(" ");a.user_name=a.from.substring(0,n),a.user_email=a.from.substring(n),e.comments.push(a),t.todo.tasks[0]=e,console.log(s,": Comments")})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte skicka kommentar")}))},editComment:function(){this.editing=!0},closeTodo:function(){var t=this,e=this.todo;e.status="DEL",l.a.put("/todo",e).then((function(t){console.log(t,"Comment")})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte skapa ärendet")}))},toastr:function(t,e,s){this.$emit("toastr",t,e,s)}},data:function(){return{editing:!1,form:{username:"",comment:""},isCompleted:function(t){return"DONE"==t||"CN"==t||"REJ"==t||"DEL"==t},category:{N:"NOTSET",B:"BUG",F:"FEATURE",I:"INFO",S:"SUPPORT"},supportOptions:["låg","låg","låg","låg","medel","medel","medel","hög","hög","hög"],status:{WAIT:"VÄNTAR",DRAFT:"UTKAST",NOT:"EJ KLAR",DONE:"KLART",CN:"BEKRÄFTAD",DEL:"BORTTAGEN",ACC:"ACCEPTERAD",REJ:"AVVISAD",BAC:"BACKLOG",FUT:"FRAMTID",UNREAD:"OLÄST",READ:"LÄST",DOC:"STÄNGT"}}}},k=C,y=(s("86b1"),Object(p["a"])(k,b,g,!1,null,"e7357844",null)),T=y.exports,x=s("23a5"),E={name:"admin-support",components:{AdminSupportTable:_,AdminTodoEdit:T,Chatbox:x["a"]},computed:Object(i["a"])({},Object(c["b"])(["currentCompanyId","currentPeriodId","currentUserId","currentUser","isTalongAdmin"])),mounted:function(){this.loadData()},data:function(){return{todos:[],todo_selected:0,username:"",userid:"",useremail:"",editing:!1}},watch:{currentCompanyId:function(t,e){t&&this.loadData()}},methods:{loadData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loadUser(),t.loadTodos();case 2:case"end":return e.stop()}}),e)})))()},loadTodos:function(){var t=this;this.todos=[],l.a.get("/todo/admin").then((function(e){200===e.status&&(t.todos=e.data.todos)})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte lista ärenden")}))},loadUser:function(){var t=this;this.userid=this.currentUser.user_id,this.useremail=this.currentUser.email,l.a.get("/user?user_id=".concat(this.currentUserId)).then((function(e){t.username=e.data.user.firstname+" "+e.data.user.lastname})).catch((function(e){console.error(e),t.toastr("danger","Server Fel","Kunde inte hämta användare")}))},selectTodo:function(t){var e=this;l.a.get("/todo?todo_id=".concat(t,"&company_id=").concat(this.currentCompanyId)).then((function(t){e.todo_selected=t.data.todo,e.editing=!0,e.scrollToEditTodo(!0)})).catch((function(t){console.error(t),e.toastr("danger","Server Fel","Kunde inte hämta ärendet")}))},saveTodo:function(){},closeTodo:function(t){var e=this.todos.findIndex((function(e){return e.todo_id==t.todo_id}));void 0!=e&&(t=this.todos[e],t.status="DOC",this.todos.splice(e,1,t))},scrollToEditTodo:function(){setTimeout((function(){var t=document.getElementById("supper-support-table");if(t){var e=-70,s=t.getBoundingClientRect().top+window.pageYOffset+e;window.scrollTo({top:s,behavior:"smooth"})}}),100)},toastr:function(t,e,s){this.$bvToast.toast(s,{title:e,autoHideDelay:2e3,appendToast:!0,variant:t})}}},A=E,w=(s("1758"),Object(p["a"])(A,a,n,!1,null,"019e9ce4",null));e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-86751d02.9ca72f24.js.map