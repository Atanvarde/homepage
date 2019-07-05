
const name = "Ola"
const city = "Poznaniu";
console.log(`Mam na imię ${name} i mieszkam w ${city}`);
const about = document.querySelector ('.about__paragraph--js');
console.log(about);
console.log(about.innerHTML);

about.innerHTML = 'Pozdrawiam !!!';

let yourAge, yourName;

function hello (yourName, yourAge) {
    console.log(`Witaj ${yourName} ! Masz ${yourAge} lat`);
    
};

hello("Karolina", "30");

const welcome = (yourName, yourAge) => {
    console.log(`Witaj ${yourName}! Masz ${yourAge} lat!`);
}

welcome('Asia',15);