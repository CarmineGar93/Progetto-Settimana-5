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

})        