

document.querySelector(".left").addEventListener("mouseenter", ()=>{
    document.querySelector(".container").classList.add("hover-left");
});

document.querySelector(".left").addEventListener("mouseleave", ()=>{
    document.querySelector(".container").classList.remove("hover-left");
});


document.querySelector(".right").addEventListener("mouseenter", ()=>{
    document.querySelector(".container").classList.add("hover-right");
});

document.querySelector(".right").addEventListener("mouseleave", ()=>{
    document.querySelector(".container").classList.remove("hover-right");
});


/*

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener("mouseenter", ()=>{
    container.classList.add("hover-left");
});


left.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-left")
});

right.addEventListener("mouseenter",()=>{
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", ()=>{
    container.classList.remove("hover-right");
});

*/


//NOTE: we cant do document.querySelector('.left').classList.add('hover-right');because we are stylin the left itself ,sothe stuke has tobe given to a parent container or grandparent container like we did above//

