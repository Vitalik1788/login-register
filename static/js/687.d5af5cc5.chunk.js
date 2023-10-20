"use strict";(self.webpackChunkfinal_project_frontend=self.webpackChunkfinal_project_frontend||[]).push([[687],{687:function(n,e,a){a.r(e),a.d(e,{default:function(){return P}});a(2791);var r,i,t,l,o,s,h,d=a(9841),u=a(4289),m=a(9434),p=a(5243),c=a(6864),f=a(8007),x=f.Ry().shape({firstName:f.Z_().max(16,"Must be 16 characters or less").required("Username is required"),phone:f.Z_().matches("\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}","Wrong number"),birthday:f.Z_(),skype:f.Z_().max(16,"Must be 16 characters or less"),email:f.Z_().email("Invalid email address").required("Email is required")}),g=a(5147),y=a(168),v=a(7691),b=v.ZP.div(r||(r=(0,y.Z)(["\n  width: 335px;\n  position: relative;\n  outline: 1px solid red;\n  display: flex;\n  padding: 59px 18px 40px 18px;\n  flex-direction: column;\n  border-radius: 16px;\n  background: #fff;\n  margin-top: 95px;\n  justify-content: center;\n"]))),j=v.ZP.img(i||(i=(0,y.Z)(["\n  position: absolute;\n  left: 50%;\n  top: 0;\n  transform: translate(-50%, -50%);\n  border-radius: 50%;\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n"]))),Z=v.ZP.h1(t||(t=(0,y.Z)(["\n  color: #343434;\n\n  font-family: Inter;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: 1; /* 100% */\n\n  margin: 0;\n  display: flex;\n  justify-content: center;\n"]))),k=v.ZP.h2(l||(l=(0,y.Z)(["\n  color: #343434;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.29; /* 128.571% */\n\n  margin-top: 8px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: center;\n"]))),w=v.ZP.label(o||(o=(0,y.Z)(["\n  font-family: Inter;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.17; /* 116.667% */\n\n  margin-bottom: 8px;\n"]))),C=v.ZP.input(s||(s=(0,y.Z)(["\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.29; /* 128.571% */\n\n  margin-bottom: 18px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  border: 1px solid rgba(17, 17, 17, 0.1);\n"]))),B=v.ZP.button(h||(h=(0,y.Z)(["\n  width: 195px;\n  height: 46px;\n\n  display: flex;\n\n  justify-content: center;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 16px;\n  background: #3e85f3;\n  border: none;\n  color: #fff;\n\n  font-family: Inter;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.29; /* 128.571% */\n"]))),N=a(3329),_=function(){var n,e,a,r,i,t,l=(0,m.I0)(),o=(0,m.v9)(u.dy);console.log(o);var s=(0,c.TA)({initialValues:{usrName:null!==(n=o.username)&&void 0!==n?n:"",phone:null!==(e=o.phone)&&void 0!==e?e:"",birthday:null!==(a=o.birthday)&&void 0!==a?a:"",skype:null!==(r=o.skype)&&void 0!==r?r:"",email:null!==(i=o.email)&&void 0!==i?i:""},onSubmit:function(n){var e;e=n,l((0,g.Vx)(e))}});return(0,N.jsx)(c.J9,{validationSchema:x,children:(0,N.jsx)("form",{onSubmit:s.handleSubmit,children:(0,N.jsxs)(b,{validationSchema:x,children:[(0,N.jsxs)("label",{htmlFor:"avatar",children:[(0,N.jsx)(j,{src:o.avatarURL,alt:"User avatar",width:125,height:125}),(0,N.jsx)("input",{type:"file",name:"avatar",accept:"image/*"}),(0,N.jsx)(Z,{children:null!==(t=o.username)&&void 0!==t?t:"User Name"}),(0,N.jsx)(k,{children:"User"})]}),(0,N.jsx)(w,{htmlFor:"usrName",children:"User Name"}),(0,N.jsx)(C,{id:"usrName",name:"usrName",type:"text",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.usrName}),s.touched.usrName&&s.errors.usrName?(0,N.jsx)("div",{children:s.errors.usrName}):null,(0,N.jsx)(w,{htmlFor:"phone",children:"Phone"}),(0,N.jsx)(C,{id:"phone",name:"phone",type:"phone",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.phone}),(0,N.jsx)(w,{htmlFor:"birthday",children:"Birthday"}),(0,N.jsx)(C,{id:"birthday",name:"birthday",type:"birthday",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.birthday}),(0,N.jsx)(w,{htmlFor:"skype",children:"Skype"}),(0,N.jsx)(C,{id:"skype",name:"skype",type:"skype",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.skype}),(0,N.jsx)(w,{htmlFor:"email",children:"Email"}),(0,N.jsx)(C,{id:"email",name:"email",type:"email",onChange:s.handleChange,onBlur:s.handleBlur,value:s.values.email}),s.touched.email&&s.errors.email?(0,N.jsx)("div",{children:s.errors.email}):null,(0,N.jsx)(B,{type:"submit",children:"Save changes"})]})})})},P=function(){var n=(0,m.v9)(u.wU);return(0,N.jsx)(d.Z,{children:n?(0,N.jsx)(p.p2,{height:"80",width:"80",color:"#4d78a9"}):(0,N.jsxs)("div",{children:[(0,N.jsx)("h1",{children:" AccountForm"}),(0,N.jsx)(_,{})]})})}}}]);
//# sourceMappingURL=687.d5af5cc5.chunk.js.map