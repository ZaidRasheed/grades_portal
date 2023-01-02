import{r as a,U as h,u as w,j as u,F as y}from"./index.c869ee31.js";import{A as b}from"./Form.27fcce9e.js";function E(c){const r=a.exports.useRef(),o=a.exports.useRef(),[s,e]=a.exports.useState(""),[d,t]=a.exports.useState(!1),{logIn:m}=h(),n=w();async function p(f){f.preventDefault(),e(""),t(!0);const i=r.current.value.trim(),l=o.current.value;if(l<6)return t(!1),e("Please provide a valid Password.");if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(i.trim()))return t(!1),e("Please provide a valid Email.");try{await m(i.trim(),l.trim()),n(c==="student"?"/student-profile":"/teacher-profile")}catch(g){switch(g.code){case"auth/user-not-found":{e("A username with this email doesn't exist, try signing up instead.");break}case"auth/wrong-password":{e("Wrong password please try again.");break}case"auth/too-many-requests":{e("Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.");break}case"auth/user-disabled":{e("Account has been disabled.");break}default:e("Failed to login.")}t(!1)}}return{emailRef:r,passwordRef:o,error:s,loading:d,handleLogin:p,alert:u(y,{children:s&&u(b,{variant:"danger",onClose:()=>e(""),dismissible:!0,children:s})})}}export{E as u};
