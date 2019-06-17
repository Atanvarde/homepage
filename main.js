alert('Witaj! Dziękuję za Twoje odwiedziny i mam nadzieję, że znajdziesz na mojej stronie jakieś inspiracje :-) Pozdrawiam, Ola Gardo');
console.log('Ooo.. znalazłeś konsolę:) Powodzenia w dalszej nauce frontendu! Pozdrawiam, Ola Gardo');
const name = "Ola";
const city = "Poznaniu";
console.log(`Mam na imię ${name} i mieszkam w ${city}`);
const about = document.querySelector ('.about__paragraph--js');
console.log(about);
console.log(about.innerHTML);

about.innerHTML = 'Pozdrawiam !!!';