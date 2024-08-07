const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignInLink');
const RegisterLink=document.querySelector('.SignUpLink');
RegisterLink.addEventListener('click',()=>{
    container.classList.toggle('active');
})
LoginLink.addEventListener('click',()=>{

    container.classList.toggle('active');
})