import menuLoader from "./menu";

function homeLoad(){
    const content = document.querySelector("#content");
    const burgerImg = document.createElement("img");
    const text = document.createElement("div");
    const Btn = document.createElement("button");
    burgerImg.src = "./dist/img/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg";
    burgerImg.setAttribute("width","auto");
    burgerImg.setAttribute("height","200px");

    text.textContent= "Best burgers in the country";
    Btn.textContent= "Menu";
    Btn.addEventListener('click',()=>{
        content.textContent= "";
        menuLoader();
    })

    content.appendChild(burgerImg);
    content.appendChild(text);
    content.appendChild(Btn);
} 

export default homeLoad;