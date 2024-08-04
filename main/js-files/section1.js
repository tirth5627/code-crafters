const section1= document.querySelector("section");
const navback= document.querySelector("nav");
const options={
root: null,
rootMargin: '-98px 0px 0px 0px',
threshold: 0
};
const observer= new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(!entry.isIntersecting){
    navback.classList.add("nav-appear");
}
else{
    navback.classList.remove("nav-appear");
}
})
},options);
observer.observe(section1);