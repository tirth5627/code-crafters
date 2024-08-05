const section2=document.querySelectorAll(".whysustainibility");
const section2Observer=new IntersectionObserver((entries)=>{
entries.forEach((entry) => {
    if(entry.isIntersecting){
          entry.target.classList.add("s2-appear");
    }
    else{
        entry.target.classList.remove("s2-appear");
    }
});
},{
root: null,
threshold: 1
})
section2.forEach((s2)=>{
    section2Observer.observe(s2)
})