const section1= document.querySelector(".section1");
const navback= document.querySelector("nav");
const options={
root: null,
rootMargin: '150px 0px 0px 0px',
threshold: 1
};
const observer= new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(!entry.isIntersecting){
    navback.classList.add("add-back");
}
else{
    navback.classList.remove("add-back");
}
})
},options);
observer.observe(section1);
let text=new SplitType('#head')
let char=document.querySelectorAll('.char')
char.forEach((ch)=>{
    ch.classList.add('translate')
})
gsap.to('.char',{
    y: 0,
    stagger:.05,
    delay: .02,
    duration: .6
});
let text1=new SplitType('#head1')
let char1=document.querySelectorAll('.char')
char1.forEach((ch)=>{
    ch.classList.add('translate')
})
gsap.to('.char',{
    y: 0,
    stagger:.05,
    delay: .02,
    duration: .6
});
