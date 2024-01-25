export default function menuLoader(){
    const content = document.querySelector("#content");
    const container = document.createElement('div');

    const normal = document.createElement('div');
    const normaltitle = document.createElement("div");
    normaltitle.textContent= "normal - 5$";
    normaltitle.classList.add("titlemenu");
    const normalburger = document.createElement('img');
    normalburger.src = "./dist/img/normalburger.png";
    normalburger.style.width = "300px";
    normalburger.style.height = "auto";
    normal.appendChild(normaltitle);
    normal.appendChild(normalburger);

    const special = document.createElement('div');
    const specialtitle = document.createElement("div");
    specialtitle.textContent = "special - 10$";
    specialtitle.classList.add("titlemenu");
    const specialburger = document.createElement('img');
    specialburger.src = './dist/img/specialburger.png';
    specialburger.style.width = "300px";
    specialburger.style.height = "auto";
    special.appendChild(specialtitle);
    special.appendChild(specialburger);

    const mega = document.createElement('div');
    const megatitle = document.createElement("div");
    megatitle.textContent = "mega - 15$";
    megatitle.classList.add("titlemenu");
    const megaburger = document.createElement('img');
    megaburger.src = './dist/img/megaburger.webp';
    megaburger.style.width = "300px";
    megaburger.style.height = "auto";
    mega.appendChild(megatitle);
    mega.appendChild(megaburger);


    container.appendChild(normal);
    container.appendChild(special);
    container.appendChild(mega);

    container.style.display = "flex";
    container.style.flexWrap = "wrap";

    content.appendChild(container);
}