
const startspan = document.querySelector('.header-span-1');
const whyusspan = document.querySelector('.header-span-2');
const workersspan = document.querySelector('.header-span-3');
const contactspan = document.querySelector('.header-span-4');
const offerspan = document.querySelector('.header-span-5');
const startspanminimenu = document.querySelector('.header-span-1-minimenu');
const whyusspanminimenu = document.querySelector('.header-span-2-minimenu');
const workersspanminimenu = document.querySelector('.header-span-3-minimenu');
const contactspanminimenu = document.querySelector('.header-span-4-minimenu');
const offerspanminimenu = document.querySelector('.header-span-5-minimenu');
const startbutton2 = document.querySelector('.start-button-2');
const jobbutton = document.querySelector('.Why-us-colum-3-button');
const humburgermenu = document.querySelector('.hamburger-menu')
const humburgermenutext = document.querySelector('.header-text-humburger')
const humburgera = document.querySelector('.header-a-5-minimenu')
whyusspan.addEventListener("click", function(){
    window.scrollTo({
        top:850,
        left:0,
        behavior: "smooth"
    });
});


startspan.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
});


workersspan.addEventListener("click", function(){
    window.scrollTo({
        top:1650,
        left:0,
        behavior: "smooth"
    });
});


contactspan.addEventListener("click", function(){
    window.scrollTo({
        top:2510,
        left:0,
        behavior: "smooth"
    });
});

startbutton2.addEventListener("click", function(){
    window.scrollTo({
        top:2410,
        left:0,
        behavior: "smooth"
    });
});

jobbutton.addEventListener("click", function(){
    window.scrollTo({
        top:2710,
        left:0,
        behavior: "smooth"
    });
});


offerspan.addEventListener("click", function(){
    window.scrollTo({
        top:3310,
        left:0,
        behavior: "smooth"
    });
});

whyusspanminimenu.addEventListener("click", function(){
    window.scrollTo({
        top:850,
        left:0,
        behavior: "smooth"
    });
});


startspanminimenu.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
});


workersspanminimenu.addEventListener("click", function(){
    window.scrollTo({
        top:2050,
        left:0,
        behavior: "smooth"
    });
});


contactspanminimenu.addEventListener("click", function(){
    window.scrollTo({
        top:3860,
        left:0,
        behavior: "smooth"
    });
});

offerspanminimenu.addEventListener("click", function(){
    window.scrollTo({
        top:4660,
        left:0,
        behavior: "smooth"
    });
});

humburgermenu.addEventListener("click",function(){
    humburgermenutext.classList.toggle('active')
})