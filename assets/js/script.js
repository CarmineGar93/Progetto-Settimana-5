document.addEventListener('scroll', function(e) {
    e.preventDefault;
    let navbar = document.getElementsByTagName('header') [0];
    let hero = document.getElementById('hero');
    let heroHeight = hero.offsetHeight;
    console.log(heroHeight);
    let navbarPos = navbar.offsetTop;
    let button = document.querySelector('li button');
    console.log(navbarPos);
    if (navbarPos > heroHeight) {
        navbar.classList.add('white');
        button.classList.add('green');
    } else {
        navbar.classList.remove('white');
        button.classList.remove('green');
    }

});


let ms = document.getElementsByTagName('g');
console.log(ms);
let array = [];
for (let i = 2; i < ms.length; i++) {
    if (ms[i].style.display === 'block') {
        array.push(ms[i]);
    }
}

console.log(array);


function intervallo () {
    let interval = setInterval(function() {
        let numero = Math.floor((Math.random()) * array.length);
       
        
        array[numero].classList.toggle('blink');
        let puntati = document.getElementsByClassName('blink');
        
    }, 10)
}

intervallo();