import aboutLoader from "./about";
import homeLoad from "./home";
import menuLoader from "./menu";
homeLoad();

const content = document.querySelector("#content")
const menuBtn = document.querySelector('.menu-btn');
const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn')

homeBtn.addEventListener('click',()=>{
    content.innerHTML="";
    homeLoad();
})

menuBtn.addEventListener("click",()=>{
    content.innerHTML= "";
    menuLoader();
});

aboutBtn.addEventListener("click",()=>{
    content.innerHTML= "";
    aboutLoader();
});