const right=document.querySelector(".right-btn");
right.addEventListener("click",function(event){
    const content=document.querySelector(".slide-carousel");
    content.scrollLeft+=1100;
    event.preventDefault();
})

const left=document.querySelector(".left-btn");
    left.addEventListener("click",function(event){
    const content=document.querySelector(".slide-carousel");
    content.scrollLeft-=1100;
    event.preventDefault();
})