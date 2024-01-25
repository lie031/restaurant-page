export default function menuLoader(){
    const content = document.querySelector("#content");
    const container = document.createElement('div');

    const normal = document.createElement('div');
    const normaltitle = document.createElement("div");
    normaltitle.textContent= "normal";
    normal.appendChild(normaltitle);

    const special = document.createElement('div');
    const specialtitle = document.createElement("div");
    specialtitle.textContent = "special";
    special.appendChild(specialtitle);

    const mega = document.createElement('div');
    const megatitle = document.createElement("div");
    megatitle.textContent = "mega";
    mega.appendChild(megatitle);


    container.appendChild(normal);
    container.appendChild(special);
    container.appendChild(mega);

    content.appendChild(container);
}