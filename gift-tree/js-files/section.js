let parts=document.querySelectorAll('.amount-parts')
console.log(parts)
parts.forEach((entry)=>{
    entry.addEventListener("click",()=>{
        parts.forEach((en)=>{
            en.classList.remove("bg")
        })
        entry.classList.add("bg")
        if(entry.classList.contains("bg")){
            entry.classList.remove("hover")    
        }
    })
     
})