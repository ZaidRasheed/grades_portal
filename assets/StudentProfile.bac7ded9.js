import{r as o,U as A,u as C,j as e,F as D,a}from"./index.c869ee31.js";import{M as b,D as L,a as S,U as P}from"./UpdatePassword.0ccb9993.js";import{A as G,F as x}from"./Form.27fcce9e.js";import{B as w}from"./Button.b82bb83e.js";import{C as M}from"./Container.2bd40c5e.js";import"./InputGroupContext.0b4e7889.js";function F(){const[t,c]=o.exports.useState(),[l,h]=o.exports.useState([]),[r,u]=o.exports.useState("All Grades"),[i,m]=o.exports.useState(!0),[p,s]=o.exports.useState(!1),{currentUser:n,logOut:g,getStudentData:v}=A(),N=C();o.exports.useEffect(()=>{n!=null&&n.uid&&v(n==null?void 0:n.uid).then(d=>{d.exists()&&(c(d.data()),h(d.data().grades))}).catch(d=>{}).finally(()=>{s(!1)})},[n==null?void 0:n.uid,i]);const f=()=>{g(),N("/grades-portal")},j=()=>{s(!0),m(d=>!d)},k=o.exports.useMemo(()=>{const d=[];return l.forEach(y=>{d.includes(y.subject)||d.push(y.subject)}),d},[l.length]);return{student:t,grades:l,option:r,subjects:k,handleRefresh:j,refreshLoading:p,handleLogOut:f,setOption:u}}function H(){const t=o.exports.useRef(),[c,l]=o.exports.useState(!1),[h,r]=o.exports.useState(""),[u,i]=o.exports.useState(!1),m=()=>{l(!1),r("")},p=()=>l(!0),{deleteAccount:s}=A(),n=C();function g(N){if(N.preventDefault(),i(!0),t.current.value.length<6)return i(!1),r("Invalid Password.");s(t.current.value).then(f=>{if(f.status==="success")n("/grades-portal");else{switch(f.message){case"auth/wrong-password":r("Wrong password");break;case"auth/too-many-requests":r("Too many attempts to delete the account have failed please try again later.");break;default:r("Account could not be deleted")}i(!1)}}).catch(f=>{i(!1),r("Account couldn't be deleted.")})}return{currentPassword:t,show:c,alert:e(D,{children:h&&e(G,{variant:"danger",onClose:()=>r(""),dismissible:!0,children:h})}),loading:u,handleCloseModal:m,handleShowModal:p,handleDeleteAccount:g}}function R(){const{currentPassword:t,show:c,alert:l,loading:h,handleCloseModal:r,handleShowModal:u,handleDeleteAccount:i}=H();return a("div",{className:"w-100 text-center",children:[e(w,{variant:"link",onClick:u,children:"Delete Account?"}),a(b,{centered:!0,show:c,onHide:r,children:[e(b.Header,{closeButton:!0,children:e(b.Title,{children:"Delete Account"})}),e(b.Body,{children:a("div",{className:"w-100",children:[l,a(x,{onSubmit:i,children:[a(x.Group,{className:"mb-3",children:[e(x.Label,{children:"Confirm Your Password"}),e(x.Control,{type:"password",ref:t,autoComplete:"current-password",required:!0})]}),e(w,{disabled:h,className:"w-100 mt-3 mb-3",type:"submit",children:"Submit"})]})]})}),e(b.Footer,{children:e("div",{className:"w-100 text-center mt-2",children:"Note! This action is irreversible and all data will be lost permanently."})})]})]})}function W(){const{student:t,grades:c,option:l,subjects:h,handleRefresh:r,refreshLoading:u,handleLogOut:i,setOption:m}=F();let p=1;return e(M,{className:"d-flex justify-content-center mt-4",style:{minHeight:"100vh"},children:a("div",{className:"w-100",style:{maxWidth:"900px"},children:[a("div",{class:"d-flex justify-content-between",children:[t!=null&&t.name?a("h1",{className:" mb-4",children:["Hello ",t==null?void 0:t.name," !"]}):null,e(w,{variant:"outline-primary",className:"text-center mb-4 btn-lg",onClick:i,children:"Log out"})]}),a("h4",{className:" mb-4",children:["Email: ",t==null?void 0:t.email]}),e(w,{variant:"outline-primary",className:"mb-4 mt-4",onClick:r,disabled:u,children:u?e("div",{className:"spinner-border spinner-border text-primary",style:{width:"1.5rem",height:"1.5rem"},role:"status"}):"Refresh"}),e("h3",{children:"Showing: "}),a(L,{title:l,variant:"secondary",className:"mt-2",children:[h.map((s,n)=>e(S.Item,{onClick:()=>{m(`${s}`)},children:s},n)),e(S.Item,{onClick:()=>{m("All Grades")},children:"All Grades"})]}),(c==null?void 0:c.length)>0?e("div",{className:"overflow-scroll mt-4 mb-5",style:{maxHeight:"33vh",minHeight:"15vh"},children:a("table",{className:"table h-25 table-striped",children:[e("thead",{className:"table-dark",children:a("tr",{children:[e("th",{scope:"col",children:"#"}),e("th",{scope:"col",children:"Subject"}),e("th",{scope:"col",children:"Name"}),e("th",{scope:"col",className:"text-center",children:"Grade"}),e("th",{scope:"col",className:"text-center",children:"Percentage"}),e("th",{scope:"col",className:"text-center",children:"Status"})]})}),e("tbody",{children:c.map(s=>s.subject===l||l==="All Grades"?a("tr",{children:[e("th",{scope:"row",children:p++}),e("th",{scope:"row",children:s.subject}),e("td",{children:s.name}),a("td",{className:"text-center",children:[s.mark,"/",s.total]}),a("td",{className:"text-center",children:[s.percentage,"%"]}),e("td",{className:`text-center ${s.percentage>=50?"text-success":"text-danger"}`,children:s.percentage>=50?"Passed":"Failed"})]},p):null)})]})}):e("h5",{className:"mt-4 mb-4 text-black-50",children:"**No marks were added yet**"}),e(P,{}),e(R,{})]})})}export{W as default};
