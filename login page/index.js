const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignInLink');
const RegisterLink=document.querySelector('.SignUpLink');
RegisterLink.addEventListener('click',()=>{
    container.classList.toggle('active');
})
LoginLink.addEventListener('click',()=>{

    container.classList.toggle('active');
})
const register=document.querySelector(".rbutton");
const rpass=document.querySelector(".rpass").value;
const r=document.querySelector(".rtext").value;

register.addEventListener('click',()=>{  
localStorage.setItem(r,rpass);
alert("Registration successfull!")
container.classList.toggle('active');
})
const text=document.querySelector(".lusername").value;
const lpass=document.querySelector(".lpass").value;
const login=document.querySelector(".lsub");
 function fun(){
if(localStorage.getItem(text)==lpass){
    document.querySelector(".lusername").value=""
   document.querySelector(".lpass").value="" 
window.location.assign("../main/main.html")
}
else{
alert("You are not registered")
container.classList.toggle('active');
}
}