(this["webpackJsonpwetaxi-market-place"]=this["webpackJsonpwetaxi-market-place"]||[]).push([[62],{280:function(e,t,a){"use strict";var n=a(6);a.d(t,"a",(function(){return n.a}))},281:function(e,t,a){"use strict";var n=a(18),r=a(4),i=a.n(r);t.a=function(e,t){return function(a){var c=Object(r.useState)(t.interceptors.request.use((function(e){var t=e;return t.headers.Authorization="Bearer ".concat(localStorage.getItem("authToken")),t}))),s=Object(n.a)(c,1)[0];return Object(r.useEffect)((function(){return function(){t.interceptors.request.eject(s)}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(e,a))}}},282:function(e,t,a){"use strict";a.d(t,"jb",(function(){return n})),a.d(t,"m",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"eb",(function(){return c})),a.d(t,"X",(function(){return s})),a.d(t,"N",(function(){return o})),a.d(t,"sb",(function(){return u})),a.d(t,"Y",(function(){return l})),a.d(t,"M",(function(){return m})),a.d(t,"n",(function(){return d})),a.d(t,"h",(function(){return f})),a.d(t,"g",(function(){return b})),a.d(t,"rb",(function(){return p})),a.d(t,"z",(function(){return N})),a.d(t,"F",(function(){return g})),a.d(t,"w",(function(){return E})),a.d(t,"A",(function(){return v})),a.d(t,"x",(function(){return h})),a.d(t,"d",(function(){return y})),a.d(t,"cb",(function(){return q})),a.d(t,"db",(function(){return O})),a.d(t,"kb",(function(){return j})),a.d(t,"K",(function(){return k})),a.d(t,"J",(function(){return w})),a.d(t,"H",(function(){return x})),a.d(t,"G",(function(){return P})),a.d(t,"p",(function(){return C})),a.d(t,"r",(function(){return S})),a.d(t,"q",(function(){return B})),a.d(t,"qb",(function(){return M})),a.d(t,"nb",(function(){return T})),a.d(t,"pb",(function(){return A})),a.d(t,"B",(function(){return F})),a.d(t,"V",(function(){return D})),a.d(t,"W",(function(){return I})),a.d(t,"s",(function(){return L})),a.d(t,"t",(function(){return V})),a.d(t,"O",(function(){return W})),a.d(t,"P",(function(){return H})),a.d(t,"Q",(function(){return z})),a.d(t,"R",(function(){return R})),a.d(t,"k",(function(){return U})),a.d(t,"vb",(function(){return X})),a.d(t,"ab",(function(){return G})),a.d(t,"j",(function(){return J})),a.d(t,"ub",(function(){return Z})),a.d(t,"Z",(function(){return $})),a.d(t,"wb",(function(){return Y})),a.d(t,"v",(function(){return K})),a.d(t,"I",(function(){return Q})),a.d(t,"mb",(function(){return _})),a.d(t,"ob",(function(){return ee})),a.d(t,"ib",(function(){return te})),a.d(t,"hb",(function(){return ae})),a.d(t,"L",(function(){return ne})),a.d(t,"c",(function(){return re})),a.d(t,"b",(function(){return ie})),a.d(t,"a",(function(){return ce})),a.d(t,"D",(function(){return se})),a.d(t,"lb",(function(){return oe})),a.d(t,"bb",(function(){return ue})),a.d(t,"S",(function(){return le})),a.d(t,"C",(function(){return me})),a.d(t,"E",(function(){return de})),a.d(t,"e",(function(){return fe})),a.d(t,"l",(function(){return be})),a.d(t,"tb",(function(){return pe})),a.d(t,"o",(function(){return Ne})),a.d(t,"fb",(function(){return ge})),a.d(t,"gb",(function(){return Ee})),a.d(t,"y",(function(){return ve})),a.d(t,"u",(function(){return he})),a.d(t,"T",(function(){return ye})),a.d(t,"U",(function(){return qe})),a.d(t,"xb",(function(){return Oe})),a.d(t,"i",(function(){return je}));var n="Please enter reason for rejection",r="Commission is required",i="Category name is required",c="Photo is required",s="Password is required",o="Old password is required",u="Password must contain atleast 8 digits",l="Password must contain atleast 1 capital, 1 number and 1 special character.",m="New password is required",d="Confirm password is required",f="Password & confirm password don\u2019t match",b="New password & confirm password don\u2019t match",p="Password and Confirm password doesn't match",N="Firstname is required",g="Lastname is required",E="Email is required",v="Gender is required",h="Email must be a valid email",y="Address is required",q="Phone is required",O="Phone is required and must contains 10 digits",j="Vendor contact must contains 10 digits",k="Minimum cart value is required",w="Minimum cart value must be a number",x="Maximum discount required",P="Maximum discount must be a number",C="Coupon Code is required",S="Percentage is required",B="Percentage must be a number",M="Please select vendors",T="Please select a date range for the promocode",A="Select image file only",F="GST is required",D="Packaging charges must be a number",I="Packaging charges is required",L="Delivery charge km must be a number",V="Delivery charge km is required",W="Order accept time must be a number",H="Order accept time is required",z="Order preparing time must be a number",R="Order preparing time is required",U="Vendor platform fee is required",X="TCS is required",G="Payment gateway transaction percentage is required",J="Vendor platform fee must be a number",Z="TCS must be a number",$="Payment gateway transaction percentage must be a number",Y="Title is required",K="Device type is required",Q="Message is required",_="Please select category",ee="Please select sub category type",te="Price is required",ae="Price must be a number",ne="Name is required",re="Account number is required",ie="Account number must be a number",ce="Account Holder is required",se="IFSC code is required",oe="Vendor Name is required",ue="Payment Options is required",le="Order type is required",me="House number is required",de="Landmark is required",fe="Area is required",be="City is required",pe="State is required",Ne="Country is required",ge="Pincode is required",Ee="Pincode must contains 6 digits",ve="Please enter message",he="Description is required",ye="Please insert OTP",qe="OTP must contains 6 digits",Oe="Transaction id is required",je="Vendor has not submit his/her profile yet."},283:function(e,t,a){"use strict";var n=a(4),r=a.n(n),i=a(45),c=a(38),s=a(1);t.a=function(e){var t=Object(c.c)((function(e){return e.modal})),a=t.message,n=t.notifyType,o=t.redirectURL,u=t.buttonClick,l=t.withButton,m=Object(c.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"modal-backdrop fade in error-modal-backdrop"}),r.a.createElement("div",{className:"modal coman-modal fade in error-modal",id:"add-cat",tabIndex:-1,role:"dialog","aria-labelledby":"myModalLabel",style:{display:"block",zIndex:2052}},r.a.createElement("div",{className:"modal-dialog modal-a",role:"document"},r.a.createElement("div",{className:2===n||0===n?"modal-content text-center animated bounceIn":"modal-content text-center animated shake"}," ",r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"f-modal-alert"},1===n?r.a.createElement("div",{className:"f-modal-icon f-modal-error animate"},r.a.createElement("span",{className:"f-modal-x-mark"},r.a.createElement("span",{className:"f-modal-line f-modal-left animateXLeft"}),r.a.createElement("span",{className:"f-modal-line f-modal-right animateXRight"})),r.a.createElement("div",{className:"f-modal-placeholder"}),r.a.createElement("div",{className:"f-modal-fix"})):2===n?r.a.createElement("div",{className:"f-modal-icon f-modal-success animate"},r.a.createElement("span",{className:"f-modal-line f-modal-tip animateSuccessTip"}),r.a.createElement("span",{className:"f-modal-line f-modal-long animateSuccessLong"}),r.a.createElement("div",{className:"f-modal-placeholder"}),r.a.createElement("div",{className:"f-modal-fix"})):3===n?r.a.createElement("div",{className:"f-modal-icon f-modal-warning animate"},r.a.createElement("span",{className:"f-modal-body pulseWarningIns"}),r.a.createElement("span",{className:"f-modal-dot pulseWarningIns"}),r.a.createElement("div",{className:"f-modal-placeholder"}),r.a.createElement("div",{className:"f-modal-fix"})):null),r.a.createElement("p",{style:0===n?{paddingTop:"20px"}:{}},a),l&&r.a.createElement("div",{className:"text-center m-t-md"},void 0!==o&&""!==o?r.a.createElement(i.b,{className:"btn btn-primary",to:o,onClick:u?function(e){m(Object(s.Wj)()),e.stopPropagation(),u()}:function(e){m(Object(s.Wj)()),e.stopPropagation()}},"Okay"):r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:u?function(e){m(Object(s.Wj)()),e.stopPropagation(),u()}:function(e){m(Object(s.Wj)()),e.stopPropagation()}},"Okay")))))))}},286:function(e,t,a){"use strict";var n=a(4),r=a.n(n);t.a=function(e){var t=e.headerTitle,a=e.children,n=e.submitBtnText,i=e.submitBtnHandler,c=e.cancelBtnText,s=e.cancelBtnHandler,o=e.closeModel,u=e.modalId,l=e.modalClass,m=e.errorMsg,d=e.isDisable;return r.a.createElement("div",{className:"modal coman-modal fade in",tabIndex:"-1",id:u||"",role:"dialog",style:{display:"block"}},r.a.createElement("div",{className:"modal-dialog ".concat(l||"modal-sm text-center"),role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("button",{type:"button",className:"close",disabled:d,onClick:o},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")),(void 0!==t||null!=t||""!==t)&&r.a.createElement("h2",null,t),a,r.a.createElement("div",{className:"error-message"},m),r.a.createElement("div",{className:"text-center"},void 0!==n&&null!=n&&""!==n&&r.a.createElement("button",{type:"button",disabled:d,className:"btn btn-primary  m-l-sm",onClick:function(){"function"===typeof i?i():o()}},n),void 0!==c&&null!=c&&""!==c&&r.a.createElement("button",{type:"submit",disabled:d,className:"btn btn-primary m-l-sm",onClick:function(){"function"===typeof s&&s(),o()}},"Cancel")))),r.a.createElement("div",{className:"modal-backdrop fade in"}))}},936:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(4),i=a.n(r),c=a(38),s=a(281),o=a(280),u=a(95),l=a(283),m=a(3),d=a(287),f=a(288),b=a(286),p=a(1),N=a(282),g=function(e){var t=e.tableFilter,a=Object(r.useState)(!1),s=Object(n.a)(a,2),o=s[0],u=s[1],l=Object(c.b)(),g=d.object({firstName:d.string().trim().required(N.z),lastName:d.string().trim().required(N.F),phone:d.string().label("Phone").trim().min(10).max(10),email:d.string().email().typeError(N.x).required(N.w),password:d.string().matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,N.Y).required(N.X)}),E=function(){(0,e.setModelOpen)(!1)},v=Object(c.c)((function(e){return e.subadmin})).errorMsg;return i.a.createElement(f.a,{initialValues:{firstName:"",lastName:"",email:"",phone:"",password:""},validationSchema:g,onSubmit:function(e,a){var n=a.setSubmitting;!function(e){u(!0),l(Object(p.W)(Object(m.a)({isDeleted:!0,tableFilter:t,closeModel:E,setIsDisable:u},e)))}(e),n(!1)}},(function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleChange,c=e.handleBlur,s=e.handleSubmit;return i.a.createElement(b.a,{closeModel:E,headerTitle:"Add Sub-Admin",submitBtnText:"Add",submitBtnHandler:s,isDisable:o,errorMsg:v},i.a.createElement("form",null,i.a.createElement("div",{className:"from-group text-left"},i.a.createElement("h4",{className:"required-field"},"First Name:"),i.a.createElement("input",{type:"text",name:"firstName",className:"form-control",value:t.firstName,onChange:r,onBlur:c}),i.a.createElement("div",{className:"error-message"},a.firstName&&n.firstName&&a.firstName)),i.a.createElement("div",{className:"from-group text-left"},i.a.createElement("h4",{className:"required-field"},"Last Name:"),i.a.createElement("input",{type:"text",name:"lastName",className:"form-control",value:t.lastName,onChange:r,onBlur:c}),i.a.createElement("div",{className:"error-message"},a.lastName&&n.lastName&&a.lastName)),i.a.createElement("div",{className:"from-group text-left"},i.a.createElement("h4",null,"Phone Number:"),i.a.createElement("input",{type:"number",name:"phone",className:"form-control",value:t.phone,onChange:r,onBlur:c}),i.a.createElement("div",{className:"error-message"},a.phone&&n.phone&&a.phone)),i.a.createElement("div",{className:"from-group text-left"},i.a.createElement("h4",{className:"required-field"},"Email:"),i.a.createElement("input",{type:"text",name:"email",className:"form-control",value:t.email,onChange:r,onBlur:c}),i.a.createElement("div",{className:"error-message"},a.email&&n.email&&a.email)),i.a.createElement("div",{className:"from-group text-left"},i.a.createElement("h4",{className:"required-field"},"Password:"),i.a.createElement("input",{type:"password",name:"password",className:"form-control",value:t.password,onChange:r,onBlur:c}),i.a.createElement("div",{className:"error-message"},a.password&&n.password&&a.password))))}))};t.default=Object(s.a)((function(e){var t=Object(r.useState)(!1),a=Object(n.a)(t,2),s=a[0],o=a[1],m=Object(r.useState)(!1),d=Object(n.a)(m,2),f=(d[0],d[1]),b=Object(r.useState)({}),N=Object(n.a)(b,2),E=N[0],v=N[1],h=Object(c.c)((function(e){return e.subadmin})),y=h.subadmins,q=y.list,O=y.totalRecords,j=h.errorMsg,k=Object(c.c)((function(e){return e.modal})).open,w=Object(c.b)(),x=function(e,t,a,n,r){!function(e,t,a,n,r){E.columnName=e,E.orderBy=t,E.search=a,E.skip=n,E.limit=r,v(E)}(e,t,a,n,r),w(a&&0!==n?Object(p.Uh)({columnName:e,orderBy:t,search:a,skip:0,limit:r}):Object(p.Uh)({columnName:e,orderBy:t,search:a,skip:n,limit:r}))};Object(r.useEffect)((function(){return o(!0),x("name","asc","",0,10),function(){return o(!1)}}),[]);var P=function(e){w(Object(p.ff)({id:e.id,isBlock:e.status}))},C=[{displayName:"Full Name",key:"name"},{displayName:"Email",key:"email"},{displayName:"Phone Number",key:"phone"},{displayName:"Status",key:"isBlock",noSort:!0,isStatus:!0,positiveValue:!1,action:P}],S=Object(r.useState)(!1),B=Object(n.a)(S,2),M=B[0],T=B[1];return i.a.createElement("div",{className:"wrapper wrapper-content"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12"},i.a.createElement("div",{className:"ibox"},i.a.createElement("div",{className:"ibox-content"},i.a.createElement("div",{className:"box-heading"},i.a.createElement("h2",null,"Sub Admins ")),i.a.createElement("div",{className:"text-right  d-flex-right"},i.a.createElement("button",{type:"button",className:"btn btn-primary m-l-sm m-b-md",onClick:function(){return T(!0)}},"Add Sub-Admin")),i.a.createElement("div",{className:"coman-table",id:"owner-detail-btn2"},i.a.createElement(u.b,{headers:C,tableData:q||null,pageCount:null===O||void 0===O?void 0:O.count,getData:x,link:{},linkPropsName:"_id",statusAction:P,setSearchFlag:function(e){s&&f(e)},errorMsg:j||"Loading..."})))))),M&&i.a.createElement(g,{setModelOpen:T,tableFilter:E}),k&&i.a.createElement(l.a,null))}),o.a)}}]);
//# sourceMappingURL=62.6dc525c8.chunk.js.map