document.addEventListener('DOMContentLoaded', (event) => {
    window.scrollTo(0, 0);
  });
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

const text= document.querySelector(".img-text");
const options1={
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .99
};
const observer1= new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
    console.log(text)

    text.classList.add("section1-appear");
    // text[1].classList.add("section1-appear");
}
else{
    text.classList.remove("section1-appear");
    // text[1].classList.remove("section1-appear");
}
})
},options1);
observer1.observe(section1);

  