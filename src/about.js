 export default function aboutLoader(){
    const content = document.querySelector("#content");

    const contactTitle = document.createElement('p');
    contactTitle.textContent= "Contact Information";

    const phone = document.createElement('p');
    phone.textContent = "Phone:(+45) 576-2131";

    const email = document.createElement('p');
    email.textContent = 'Email: email@gmail.com';

    content.appendChild(contactTitle);
    content.appendChild(phone);
    content.appendChild(email);
}