(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{IpcI:function(e,t,r){e.exports={container:"container___nT1ry"}},PkmJ:function(e,t,r){"use strict";r("DZo9");var n=r("8z0m"),a=r("oBTY"),c=r("fWQN"),i=r("mtLc"),l=r("yKVA"),u=r("879j"),o=r("q1tI"),s=r.n(o),p=r("ye1Q"),d=r("xvlK"),f=r("IpcI"),m=r.n(f);function b(e,t){var r=new FileReader;r.addEventListener("load",(function(){return t(r.result)})),r.readAsDataURL(e)}var h=function(e){Object(l["a"])(r,e);var t=Object(u["a"])(r);function r(e){var n;return Object(c["a"])(this,r),n=t.call(this,e),n.state={loading:!1,fileList:[]},n.handleChange=function(e){var t=Object(a["a"])(e.fileList);t=t.slice(-1),t=t.map((function(e){return e.response&&(e.url=e.response.url),e})),n.props.onChange(e),e.file&&b(t[0].originFileObj,(function(e){return n.setState({fileList:t,imageUrl:e,loading:!1})}))},n}return Object(i["a"])(r,[{key:"render",value:function(e){console.log(this.props),console.log("props");var t=s.a.createElement("div",null,this.state.loading?s.a.createElement(p["default"],null):s.a.createElement(d["default"],null),s.a.createElement("div",{className:"ant-upload-text"},"Upload")),r=this.state.imageUrl;return"img"in this.props&&"string"==typeof this.props.img&&(r=this.props.img),s.a.createElement(n["a"],{name:"avatar",listType:"picture-card",showUploadList:!1,beforeUpload:this.props.beforeUpload,onChange:this.handleChange,fileList:this.state.fileList},r?s.a.createElement("img",{src:r,alt:"avatar",style:{width:"100%"}}):t)}}]),r}(s.a.Component);t["a"]=function(e){return s.a.createElement("div",{className:m.a.container},s.a.createElement("div",{id:"components-upload-demo-avatar"},s.a.createElement(h,e)))}},eTTe:function(e,t,r){"use strict";r.r(t);r("qVdP");var n=r("jsC+"),a=(r("lUTK"),r("BvKs")),c=(r("5NDa"),r("5rEg")),i=(r("+L6B"),r("2/Rp")),l=(r("P2fV"),r("NJEC")),u=(r("/zsF"),r("PArb")),o=r("PpiC"),s=r("WmNS"),p=r.n(s),d=r("k1fw"),f=(r("miYZ"),r("tsqr")),m=r("9og8"),b=r("tJVT"),h=(r("OaEy"),r("2fM7")),v=r("G3dp"),w=r("/MfK"),O=r("xvlK"),j=r("8Skl"),y=r("q1tI"),g=r.n(y),E=r("Hx5s"),x=r("56R7"),k=(r("2qtc"),r("kLXV")),C=function(e){var t=e.modalVisible,r=e.onCancel;return g.a.createElement(k["a"],{destroyOnClose:!0,title:"\u65b0\u5efa\u9996\u9875\u5de6\u4fa7\u83dc\u5355",visible:t,width:600,onCancel:function(){return r()},footer:null},e.children)},R=C,S=r("io9h"),I=r("+n12");function T(e){return L.apply(this,arguments)}function L(){return L=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(S["a"])("/api/xadmin/v1/nav",{params:t}));case 1:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}function q(e){return K.apply(this,arguments)}function K(){return K=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Object(S["a"])("/api/xadmin/v1/nav/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)}))),K.apply(this,arguments)}function V(e){return F.apply(this,arguments)}function F(){return F=Object(m["a"])(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=["icon"],n=Object(I["b"])(t,r),e.abrupt("return",Object(S["a"])("/api/xadmin/v1/nav",{method:"POST",data:n}));case 3:case"end":return e.stop()}}),e)}))),F.apply(this,arguments)}function U(e,t){return _.apply(this,arguments)}function _(){return _=Object(m["a"])(p.a.mark((function e(t,r){var n,a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=["icon"],a=Object(I["b"])(t,n),e.abrupt("return",Object(S["a"])("/api/xadmin/v1/nav/".concat(r),{method:"PUT",data:a}));case 3:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}var A=function(e){var t=e.modalVisible,r=e.onCancel;return g.a.createElement(k["a"],{destroyOnClose:!0,title:"\u4fee\u6539\u9996\u9875\u5de6\u4fa7\u83dc\u5355",visible:t,width:600,onCancel:function(){return r()},footer:null},e.children)},N=A,P=(r("PkmJ"),r("wd/R"),r("Lzxq"),h["a"].Option,function(){var e=Object(y["useState"])(!1),t=Object(b["a"])(e,2),r=t[0],s=t[1],h=Object(y["useState"])(!1),k=Object(b["a"])(h,2),C=k[0],S=k[1],L=Object(y["useState"])({}),K=Object(b["a"])(L,2),F=K[0],_=K[1],A=Object(y["useRef"])(),P=Object(y["useRef"])(),D=Object(y["useRef"])(),J=function(){var e=Object(m["a"])(p.a.mark((function e(t){var r,n,a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=f["b"].loading("\u6b63\u5728\u6dfb\u52a0"),e.prev=1,e.next=4,V(Object(d["a"])({},t));case 4:return r(),f["b"].success("\u6dfb\u52a0\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(n in e.t0.data.fields_errors)a=e.t0.data.fields_errors[n],P.current.setFields([{name:n,errors:a}]);else f["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return r(),f["b"].error("\u6dfb\u52a0\u5931\u8d25"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(m["a"])(p.a.mark((function e(t,r){var n,a;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=f["b"].loading("\u6b63\u5728\u4fee\u6539"),e.prev=1,e.next=4,U(t,r);case 4:return n(),f["b"].success("\u4fee\u6539\u6210\u529f"),e.abrupt("return",!0);case 9:if(e.prev=9,e.t0=e["catch"](1),"fields_errors"in e.t0.data)for(a in e.t0.data.fields_errors)t=e.t0.data.fields_errors[a],D.current.setFields([{name:a,errors:t}]);else f["b"].error("\u975e\u5b57\u6bb5\u7c7b\u578b\u9519\u8bef");return n(),f["b"].error("\u4fee\u6539\u5931\u8d25\u8bf7\u91cd\u8bd5\uff01"),e.abrupt("return",!1);case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,r){return e.apply(this,arguments)}}(),z=function(){var e=Object(m["a"])(p.a.mark((function e(t){var r,n;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=f["b"].loading("\u6b63\u5728\u5220\u9664"),t){e.next=3;break}return e.abrupt("return",!0);case 3:return e.prev=3,n=t.map((function(e){return e.id})).join(","),e.next=7,q(n);case 7:return r(),f["b"].success("\u5220\u9664\u6210\u529f"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),r(),f["b"].error("\u5220\u9664\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5"),e.abrupt("return",!1);case 17:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),M=[],W=[{title:"ID",dataIndex:"id",hideInForm:!0,hideInSearch:!0,rules:[{required:!0,message:"ID\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u540d\u79f0",dataIndex:"title",rules:[{required:!0,message:"\u540d\u79f0\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u8bbf\u95ee\u8def\u5f84",dataIndex:"path",rules:[{required:!0,message:"\u8bbf\u95ee\u8def\u5f84\u4e3a\u5fc5\u586b\u9879"}]},{title:"\u56fe\u6807",dataIndex:"icon",hideInSearch:!0,rules:[{required:!0,message:"\u56fe\u6807\u4e3a\u5fc5\u586b\u9879"}],render:function(e,t){return g.a.createElement("a",{download:e.split("/").slice(-1),href:e},e.split("/").slice(-1))},renderFormItem:function(e,t,r){t.type,t.defaultRender,Object(o["a"])(t,["type","defaultRender"]);var n=r.getFieldValue("download");return Object(I["g"])(n)}},{title:"\u64cd\u4f5c",dataIndex:"option",valueType:"option",fixed:"right",width:100,render:function(e,t){return g.a.createElement(g.a.Fragment,null,g.a.createElement(v["default"],{title:"\u7f16\u8f91",className:"icon",onClick:Object(m["a"])(p.a.mark((function e(){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:S(!0),_(t);case 2:case"end":return e.stop()}}),e)})))}),g.a.createElement(u["a"],{type:"vertical"}),g.a.createElement(l["a"],{title:"\u60a8\u786e\u5b9a\u8981\u5220\u9664\u9996\u9875\u5de6\u4fa7\u83dc\u5355\u5417\uff1f",placement:"topRight",onConfirm:function(){z([t]),A.current.reloadAndRest()},okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88"},g.a.createElement(w["default"],{title:"\u5220\u9664",className:"icon"})))}}],Q=Object(I["e"])(W),Y=Object(I["k"])(Q),Z=[].concat(W),G=[].concat(W),H=Object(y["useState"])({}),X=Object(b["a"])(H,2),$=X[0],ee=X[1],te=Object(y["useState"])({}),re=Object(b["a"])(te,2),ne=re[0],ae=re[1];return g.a.createElement(E["c"],null,g.a.createElement(x["a"],{beforeSearchSubmit:function(e){return Object(I["d"])(e,M),e},params:ne,scroll:{x:"100%"},columnsStateMap:$,onColumnsStateChange:function(e){return ee(e)},headerTitle:"\u9996\u9875\u5de6\u4fa7\u83dc\u5355\u8868\u683c",actionRef:A,rowKey:"id",toolBarRender:function(e,t){var r=t.selectedRows;return[g.a.createElement(i["a"],{type:"primary",onClick:function(){return s(!0)}},g.a.createElement(O["default"],null)," \u65b0\u5efa"),g.a.createElement(c["a"].Search,{style:{marginRight:20},placeholder:"\u641c\u7d22\u9996\u9875\u5de6\u4fa7\u83dc\u5355 ",onSearch:function(e){ae({search:e}),A.current.reload()}}),r&&r.length>0&&g.a.createElement(n["a"],{overlay:g.a.createElement(a["a"],{onClick:function(){var e=Object(m["a"])(p.a.mark((function e(t){return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("remove"!==t.key){e.next=4;break}return e.next=3,z(r);case 3:A.current.reloadAndRest();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),selectedKeys:[]},g.a.createElement(a["a"].Item,{key:"remove"},"\u6279\u91cf\u5220\u9664"))},g.a.createElement(i["a"],null,"\u6279\u91cf\u64cd\u4f5c ",g.a.createElement(j["default"],null)))]},tableAlertRender:function(e){var t=e.selectedRowKeys;e.selectedRows;return t.length>0&&g.a.createElement("div",null,"\u5df2\u9009\u62e9"," ",g.a.createElement("a",{style:{fontWeight:600}},t.length)," ","\u9879\xa0\xa0")},request:function(e,t,r){return T(Object(d["a"])(Object(d["a"])({},e),{},{sorter:t,filter:r}))},columns:Y,rowSelection:{}}),g.a.createElement(R,{onCancel:function(){return s(!1)},modalVisible:r},g.a.createElement(x["a"],{formRef:P,onSubmit:function(){var e=Object(m["a"])(p.a.mark((function e(t){var r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(I["l"])(t),e.next=3,J(t);case 3:r=e.sent,r&&(s(!1),A.current&&A.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{labelCol:{span:6},labelAlign:"left"},columns:G,rowSelection:{}})),g.a.createElement(N,{onCancel:function(){return S(!1)},modalVisible:C},g.a.createElement(x["a"],{formRef:D,onSubmit:function(){var e=Object(m["a"])(p.a.mark((function e(t){var r;return p.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return Object(I["l"])(t),e.next=3,B(t,F.id);case 3:r=e.sent,r&&(S(!1),A.current&&A.current.reload());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),rowKey:"key",type:"form",form:{initialValues:F,labelCol:{span:6},labelAlign:"left"},columns:Z,rowSelection:{}})))});t["default"]=P}}]);