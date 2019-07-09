
// const name = "Ola"
// const city = "Poznaniu";
// console.log(`Mam na imię ${name} i mieszkam w ${city}`);
// const about = document.querySelector ('.about__paragraph--js');
// console.log(about);
// console.log(about.innerHTML);

// about.innerHTML = 'Pozdrawiam !!!';

// let yourAge, yourName;

// function hello (yourName, yourAge) {
//     console.log(`Witaj ${yourName} ! Masz ${yourAge} lat`);

// };

// hello("Karolina", "30");

// const welcome = (yourName, yourAge) => {
//     console.log(`Witaj ${yourName}! Masz ${yourAge} lat!`);
// }

// welcome('Asia',15);

const navigationSwitcher = document.querySelector('.navigation__switcher--js');
console.log(navigationSwitcher);

const navigationList = document.querySelector('.navigation__list--js');
console.log(navigationList);

navigationSwitcher.addEventListener('click', (e) => {
    navigationList.classList.toggle('navigation__list--visible');
    if (navigationList.classList.contains('navigation__list--visible')) {
        navigationSwitcher.innerHTML = '&#935;';
    } else {
        navigationSwitcher.innerHTML = '&#926;';
    }

});