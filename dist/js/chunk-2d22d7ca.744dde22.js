(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d7ca"],{f868:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex flex-column flex-root"},[n("div",{staticClass:"d-flex flex-row-fluid flex-column bgi-size-cover bgi-position-center bgi-no-repeat p-10 p-sm-30"},[e.done?e._e():n("div",[n("h5",[e._v(" Vänligen vänta... ")])]),e.done?n("div",[e.error?e._e():n("div",[e.connected?n("div",[n("h5",[e._v(" Er memlist förening "),n("strong",[e._v(e._s(e.company_name))]),e._v(" har framgångsrikt kopplats till Fortnox. Du kan stänga denna sida. ")])]):e._e(),e.connected?e._e():n("div",[n("h5",[e._v(" Du är inte inloggad på Memlist - Kopiera följande kod och klistra in i Inställningar -> Fortnox -> Publikt ID: "),n("strong",[e._v(e._s(e.public_token))])])])]),e.error?n("div",[e._m(0)]):e._e()]):e._e()])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h5",[n("strong",[e._v("Fel")]),e._v(" Försök igen senare eller kontakta memlist support ")])}],i=n("bc3a"),a=n.n(i),c={name:"fortnox-redirect",mounted:function(){this.code=this.$route.query["authorization-code"],this.$route.query["authorization-code"]?this.code=this.$route.query["authorization-code"]:this.code=this.$route.params["authorization-code"],this.authenticate(this.code)},data:function(){return{public_token:"",code:"",error:!1,connected:!1,done:!1,company_name:"",debug:null}},computed:{},methods:{authenticate:function(e){var t=this;a.a.post("/fortnox/auth",{"authorization-code":e}).then((function(e){if(200!==e.status)return t.error=!0,void(t.done=!0);t.debug=e.data,t.error=!1,t.done=!0;var n=e.data.connected,o=(e.data.company_id,e.data.company_name),r=e.data.public_token;t.connected=n,t.public_token=r,t.company_name=o,console.log("Fortnox integration OK")})).catch((function(e){console.error(e),t.error=!0,t.done=!0}))}}},d=c,s=n("2877"),u=Object(s["a"])(d,o,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d22d7ca.744dde22.js.map