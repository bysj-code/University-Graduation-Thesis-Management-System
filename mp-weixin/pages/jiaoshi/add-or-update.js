(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaoshi/add-or-update"],{"0bfb":function(e,n,t){"use strict";(function(e){t("3798");r(t("66fd"));var n=r(t("56b3"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},3117:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},"56b3":function(e,n,t){"use strict";t.r(n);var r=t("3117"),i=t("6a53");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("7180");var u,o=t("f0c5"),s=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"5cf68026",null,!1,r["a"],u);n["default"]=s.exports},"6a53":function(e,n,t){"use strict";t.r(n);var r=t("cb2a"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},7180:function(e,n,t){"use strict";var r=t("fa93"),i=t.n(r);i.a},cb2a:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function o(e){a(u,r,i,o,s,"next",e)}function s(e){a(u,r,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("59a6"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{gonghao:"",mima:"",jiaoshixingming:"",xingbie:"",youxiang:"",lianxishouji:"",suozaiyuanxi:"",zhicheng:"",xiangpian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{gonghao:!1,mima:!1,jiaoshixingming:!1,xingbie:!1,youxiang:!1,lianxishouji:!1,suozaiyuanxi:!1,zhicheng:!1,xiangpian:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function i(){var a,u,o,s;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.getStorageSync("nowTable"),i.next=3,t.$api.session(a);case 3:if(u=i.sent,t.user=u.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=14;break}return t.ruleForm.id=n.id,i.next=12,t.$api.info("jiaoshi",t.ruleForm.id);case 12:u=i.sent,t.ruleForm=u.data;case 14:if(t.cross=n.cross,!n.cross){i.next=58;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 18:if((i.t1=i.t0()).done){i.next=58;break}if(s=i.t1.value,"gonghao"!=s){i.next=24;break}return t.ruleForm.gonghao=o[s],t.ro.gonghao=!0,i.abrupt("continue",18);case 24:if("mima"!=s){i.next=28;break}return t.ruleForm.mima=o[s],t.ro.mima=!0,i.abrupt("continue",18);case 28:if("jiaoshixingming"!=s){i.next=32;break}return t.ruleForm.jiaoshixingming=o[s],t.ro.jiaoshixingming=!0,i.abrupt("continue",18);case 32:if("xingbie"!=s){i.next=36;break}return t.ruleForm.xingbie=o[s],t.ro.xingbie=!0,i.abrupt("continue",18);case 36:if("youxiang"!=s){i.next=40;break}return t.ruleForm.youxiang=o[s],t.ro.youxiang=!0,i.abrupt("continue",18);case 40:if("lianxishouji"!=s){i.next=44;break}return t.ruleForm.lianxishouji=o[s],t.ro.lianxishouji=!0,i.abrupt("continue",18);case 44:if("suozaiyuanxi"!=s){i.next=48;break}return t.ruleForm.suozaiyuanxi=o[s],t.ro.suozaiyuanxi=!0,i.abrupt("continue",18);case 48:if("zhicheng"!=s){i.next=52;break}return t.ruleForm.zhicheng=o[s],t.ro.zhicheng=!0,i.abrupt("continue",18);case 52:if("xiangpian"!=s){i.next=56;break}return t.ruleForm.xiangpian=o[s],t.ro.xiangpian=!0,i.abrupt("continue",18);case 56:i.next=18;break;case 58:t.styleChange();case 59:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},xiangpianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.xiangpian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var i,a,u,o,s,c,l,g,f,x;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.gonghao){t.next=3;break}return n.$utils.msg("工号不能为空"),t.abrupt("return");case 3:if(n.ruleForm.mima){t.next=6;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if(n.ruleForm.jiaoshixingming){t.next=9;break}return n.$utils.msg("教师姓名不能为空"),t.abrupt("return");case 9:if(!n.ruleForm.youxiang||n.$validate.isEmail(n.ruleForm.youxiang)){t.next=12;break}return n.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 12:if(!n.ruleForm.lianxishouji||n.$validate.isMobile(n.ruleForm.lianxishouji)){t.next=15;break}return n.$utils.msg("联系手机应输入手机格式"),t.abrupt("return");case 15:if(!n.cross){t.next=31;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=31;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=27;break}for(l in c)l==o&&(c[l]=s);return g=e.getStorageSync("crossTable"),t.next=25,n.$api.update("".concat(g),c);case 25:t.next=31;break;case 27:i=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!a||!i){t.next=53;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:i,crossrefid:a},t.next=37,n.$api.list("jiaoshi",f);case 37:if(x=t.sent,!(x.data.total>=u)){t.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 43:if(!n.ruleForm.id){t.next=48;break}return t.next=46,n.$api.update("jiaoshi",n.ruleForm);case 46:t.next=50;break;case 48:return t.next=50,n.$api.add("jiaoshi",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:t.next=61;break;case 53:if(!n.ruleForm.id){t.next=58;break}return t.next=56,n.$api.update("jiaoshi",n.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,n.$api.add("jiaoshi",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},fa93:function(e,n,t){}},[["0bfb","common/runtime","common/vendor"]]]);