(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shouzangshipin-add-or-update"],{"0b00":function(e,t,r){"use strict";var n={"w-picker":r("e2b1").default},i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-form",{staticClass:"app-update-pv"},[r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("视频名称")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.shipinmingcheng,placeholder:"视频名称"},model:{value:e.ruleForm.shipinmingcheng,callback:function(t){e.$set(e.ruleForm,"shipinmingcheng",t)},expression:"ruleForm.shipinmingcheng"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("用户账号")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.yonghuzhanghao,placeholder:"用户账号"},model:{value:e.ruleForm.yonghuzhanghao,callback:function(t){e.$set(e.ruleForm,"yonghuzhanghao",t)},expression:"ruleForm.yonghuzhanghao"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("用户姓名")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.yonghuxingming,placeholder:"用户姓名"},model:{value:e.ruleForm.yonghuxingming,callback:function(t){e.$set(e.ruleForm,"yonghuxingming",t)},expression:"ruleForm.yonghuxingming"}})],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(218, 220, 219, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"108rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.shipinTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("视频")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.shipin?r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{placeholder:"视频"},model:{value:e.baseUrl+e.ruleForm.shipin,callback:function(t){e.$set(e.baseUrl+e.ruleForm,"shipin",t)},expression:"baseUrl+ruleForm.shipin"}}):r("v-uni-image",{staticClass:"avator",style:{width:"68rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"68rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(218, 220, 219, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"108rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.fengmianTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("封面")]),r("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.fengmian?r("v-uni-image",{staticClass:"avator",style:{width:"68rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"68rpx"},attrs:{src:e.baseUrl+e.ruleForm.fengmian,mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"68rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"68rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("上传时间")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{placeholder:"上传时间"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggleTab("shangchuanshijian")}},model:{value:e.ruleForm.shangchuanshijian,callback:function(t){e.$set(e.ruleForm,"shangchuanshijian",t)},expression:"ruleForm.shangchuanshijian"}})],1),r("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"rgba(228, 232, 230, 1)",margin:"0 0 0px 0",borderWidth:"2rpx",borderStyle:"none none solid none ",height:"88rpx"}},[r("v-uni-view",{staticClass:"title",style:{width:"160rpx",fontSize:"28rpx",color:"rgba(0, 102, 51, 1)",textAlign:"left"}},[e._v("作者")]),r("v-uni-input",{style:{boxShadow:"0 0 0px rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0, 102, 51, 1)",borderRadius:"0px",color:"rgba(0, 102, 51, 1)",textAlign:"left",borderWidth:"0 0 6rpx",fontSize:"28rpx",borderStyle:"solid",height:"68rpx"},attrs:{disabled:e.ro.zuozhe,placeholder:"作者"},model:{value:e.ruleForm.zuozhe,callback:function(t){e.$set(e.ruleForm,"zuozhe",t)},expression:"ruleForm.zuozhe"}})],1),r("v-uni-view",{staticClass:"btn"},[r("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"rgba(0, 102, 51, 1)",borderColor:"#409EFF",borderRadius:"8rpx",color:"rgba(255, 255, 255, 1)",borderWidth:"0",width:"70%",fontSize:"32rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1),r("w-picker",{ref:"shangchuanshijian",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.shangchuanshijianConfirm.apply(void 0,arguments)}}})],1)},a=[];r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}))},"2d6a":function(e,t,r){"use strict";r.r(t);var n=r("f9e3"),i=r.n(n);for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},4115:function(e,t,r){"use strict";r.r(t);var n=r("0b00"),i=r("2d6a");for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);r("df6c");var o,s=r("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"70021a38",null,!1,n["a"],o);t["default"]=u.exports},a607:function(e,t,r){var n=r("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-70021a38]{padding:%?20?%}.content[data-v-70021a38]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-70021a38]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-70021a38]{width:%?180?%}.avator[data-v-70021a38]{width:%?150?%;height:%?60?%}.right-input[data-v-70021a38]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-70021a38]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-70021a38]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-70021a38]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-70021a38]{border:0}.cu-form-group uni-input[data-v-70021a38]{padding:0 %?30?%}.uni-input[data-v-70021a38]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-70021a38]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-70021a38]::after{line-height:%?68?%}.select .uni-input[data-v-70021a38]{line-height:%?68?%}.input .right-input[data-v-70021a38]{line-height:%?68?%}',""]),e.exports=t},df6c:function(e,t,r){"use strict";var n=r("f595"),i=r.n(n);i.a},f595:function(e,t,r){var n=r("a607");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=r("4f06").default;i("206963de",n,!0,{sourceMap:!1,shadowMode:!1})},f9e3:function(e,t,r){"use strict";var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("96cf");var i=n(r("3b8d")),a=n(r("e2b1")),o={data:function(){return{cross:"",ruleForm:{shipinmingcheng:"",yonghuzhanghao:"",yonghuxingming:"",shipin:"",fengmian:"",shangchuanshijian:"",zuozhe:"",userid:""},user:{},ro:{shipinmingcheng:!1,yonghuzhanghao:!1,yonghuxingming:!1,shipin:!1,fengmian:!1,shangchuanshijian:!1,zuozhe:!1,userid:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var r,n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.shangchuanshijian=this.$utils.getCurDateTime(),r=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(r);case 4:if(n=e.sent,this.user=n.data,this.ruleForm.yonghuzhanghao=this.user.yonghuzhanghao,this.ro.yonghuzhanghao=!0,this.ruleForm.yonghuxingming=this.user.yonghuxingming,this.ro.yonghuxingming=!0,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=18;break}return this.ruleForm.id=t.id,e.next=16,this.$api.info("shouzangshipin",this.ruleForm.id);case 16:n=e.sent,this.ruleForm=n.data;case 18:if(this.cross=t.cross,!t.cross){e.next=58;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 22:if((e.t1=e.t0()).done){e.next=58;break}if(a=e.t1.value,"shipinmingcheng"!=a){e.next=28;break}return this.ruleForm.shipinmingcheng=i[a],this.ro.shipinmingcheng=!0,e.abrupt("continue",22);case 28:if("yonghuzhanghao"!=a){e.next=32;break}return this.ruleForm.yonghuzhanghao=i[a],this.ro.yonghuzhanghao=!0,e.abrupt("continue",22);case 32:if("yonghuxingming"!=a){e.next=36;break}return this.ruleForm.yonghuxingming=i[a],this.ro.yonghuxingming=!0,e.abrupt("continue",22);case 36:if("shipin"!=a){e.next=40;break}return this.ruleForm.shipin=i[a],this.ro.shipin=!0,e.abrupt("continue",22);case 40:if("fengmian"!=a){e.next=44;break}return this.ruleForm.fengmian=i[a],this.ro.fengmian=!0,e.abrupt("continue",22);case 44:if("shangchuanshijian"!=a){e.next=48;break}return this.ruleForm.shangchuanshijian=i[a],this.ro.shangchuanshijian=!0,e.abrupt("continue",22);case 48:if("zuozhe"!=a){e.next=52;break}return this.ruleForm.zuozhe=i[a],this.ro.zuozhe=!0,e.abrupt("continue",22);case 52:if("userid"!=a){e.next=56;break}return this.ruleForm.userid=i[a],this.ro.userid=!0,e.abrupt("continue",22);case 56:e.next=22;break;case 58:this.styleChange();case 59:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shangchuanshijianConfirm:function(e){console.log(e),this.ruleForm.shangchuanshijian=e.result,this.$forceUpdate()},shipinTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.shipin="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},fengmianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.fengmian="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var t,r,n,i,a,o,s,u,l,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.cross){e.next=16;break}if(i=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==i){e.next=16;break}if(o=uni.getStorageSync("crossObj"),i.startsWith("[")){e.next=12;break}for(s in o)s==i&&(o[s]=a);return u=uni.getStorageSync("crossTable"),e.next=10,this.$api.update("".concat(u),o);case 10:e.next=16;break;case 12:t=Number(uni.getStorageSync("userid")),r=o["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 16:if(!r||!t){e.next=38;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=r,l={page:1,limit:10,crossuserid:t,crossrefid:r},e.next=22,this.$api.list("shouzangshipin",l);case 22:if(h=e.sent,!(h.data.total>=n)){e.next=28;break}return this.$utils.msg(uni.getStorageSync("tips")),e.abrupt("return",!1);case 28:if(!this.ruleForm.id){e.next=33;break}return e.next=31,this.$api.update("shouzangshipin",this.ruleForm);case 31:e.next=35;break;case 33:return e.next=35,this.$api.add("shouzangshipin",this.ruleForm);case 35:this.$utils.msgBack("提交成功");case 36:e.next=46;break;case 38:if(!this.ruleForm.id){e.next=43;break}return e.next=41,this.$api.update("shouzangshipin",this.ruleForm);case 41:e.next=45;break;case 43:return e.next=45,this.$api.add("shouzangshipin",this.ruleForm);case 45:this.$utils.msgBack("提交成功");case 46:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(r,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}}]);