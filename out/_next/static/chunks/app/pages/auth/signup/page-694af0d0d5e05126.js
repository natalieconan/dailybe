(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56],{6647:function(){},9599:function(e,n,t){"use strict";var s=t(6314);n.Z=void 0;var r=s(t(984)),a=t(7437),i=(0,r.default)((0,a.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");n.Z=i},8368:function(e,n,t){Promise.resolve().then(t.bind(t,4211))},4290:function(e,n,t){"use strict";t.d(n,{q:function(){return AuthMenu_AuthMenu}});var s=t(7437),r=t(8874);let AuthMenu_AuthMenu=()=>(0,s.jsx)(r.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(".concat("/_next/static/media/AuthMenu.b91288a2.png",")"),backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"}})},3204:function(e,n,t){"use strict";var s=t(7437),r=t(2150),a=t(1679),i=t(3973);n.Z=()=>(0,s.jsx)(r.Z,{InputProps:{startAdornment:(0,s.jsx)(a.Z,{position:"start",children:(0,s.jsx)(i.Z,{})})},margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",placeholder:"Email",autoFocus:!0})},95:function(e,n,t){"use strict";var s=t(7437),r=t(2150),a=t(1679),i=t(8786);n.Z=e=>{let{name:n,label:t}=e;return(0,s.jsx)(r.Z,{InputProps:{startAdornment:(0,s.jsx)(a.Z,{position:"start",children:(0,s.jsx)(i.Z,{})})},margin:"normal",required:!0,fullWidth:!0,name:n,label:t,type:"password",id:"password",placeholder:t})}},391:function(e,n,t){"use strict";var s=t(7437),r=t(9050);n.Z=e=>{let{content:n}=e;return(0,s.jsx)(r.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:n})}},8812:function(e,n,t){"use strict";t.d(n,{_n:function(){return r}});var s=t(2269);t.n(s)().config();let r="http://localhost:3000"},4211:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return page}});var s=t(7437),r=t(3857),a=t(9872),i=t(6507),o=t(8874),u=t(8938),l=t(5210),c=t(3226),m=t(4033),d=t(391),p=t(2150),h=t(1679),x=t(9599),auth_UsernameTextField=()=>(0,s.jsx)(p.Z,{InputProps:{startAdornment:(0,s.jsx)(h.Z,{position:"start",children:(0,s.jsx)(x.Z,{})})},margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,placeholder:"Username"}),g=t(3204),f=t(95),j=t(9629),Z=t.n(j),b=t(8812),signup_SignUpForm=()=>{let e=(0,m.useRouter)(),handleSubmit=async n=>{n.preventDefault();let t=new FormData(n.currentTarget),s={username:t.get("username"),email:t.get("email"),password:t.get("password"),passwordConfirm:t.get("passwordConfirm")},r=b._n+"/users/signup",a=await fetch(r,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}});Z()(201===a.status),e.push("/pages/auth/login")};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)(c.Z,{component:"h1",variant:"h5",children:(0,s.jsx)("b",{children:"Sign Up"})}),(0,s.jsxs)(i.Z,{component:"form",noValidate:!0,onSubmit:handleSubmit,sx:{mt:3,mb:2},children:[(0,s.jsx)(auth_UsernameTextField,{}),(0,s.jsx)(g.Z,{}),(0,s.jsx)(f.Z,{name:"password",label:"Password"}),(0,s.jsx)(f.Z,{name:"passwordConfirm",label:"Password Confirm"}),(0,s.jsx)(d.Z,{content:"sign up"}),(0,s.jsx)(o.ZP,{container:!0,children:(0,s.jsxs)(o.ZP,{item:!0,children:["Already have an account",(0,s.jsx)(l.Z,{href:"/pages/auth/login",style:{textDecoration:"none"},children:" Login"})]})})]})]})})},v=t(4290),page=()=>(0,s.jsx)(u.Z,{component:"main",maxWidth:"lg",children:(0,s.jsx)(i.Z,{sx:{marginTop:8},children:(0,s.jsxs)(o.ZP,{container:!0,children:[(0,s.jsx)(r.ZP,{}),(0,s.jsx)(v.q,{}),(0,s.jsx)(o.ZP,{item:!0,xs:12,sm:8,md:5,component:a.Z,elevation:6,square:!0,children:(0,s.jsx)(signup_SignUpForm,{})})]})})})}},function(e){e.O(0,[218,261,783,971,864,744],function(){return e(e.s=8368)}),_N_E=e.O()}]);