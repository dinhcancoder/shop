function language() {
    let language = document.querySelector('.navbar__right-language');
    language.classList.toggle('lg');
}

function currency() {
    let language = document.querySelector('.navbar__right-currency');
    language.classList.toggle('cr');
}

function nbmenu() {
    let main = document.querySelector('.mid__right-menubox');

    main.classList.toggle('nbmenu')
}

// function navbarclick(element) {
//     let elementlLink = document.querySelectorAll('.navbar__main-list li a');

//     for(i = 0; i < elementlLink.length; i++) {
//         elementlLink[i].style.color = 'var(--text-color)';
//         elementlLink[i].style.backgroundColor = 'var(--white-color)';
//     }
    
//     element.style.color = 'var(--white-color)';
//     element.style.backgroundColor = 'var(--primary-color)';
// }

function displayNavbarMenu(li) {
    let navremove = document.querySelectorAll('#removeNavbar');
    
    let allLink = document.querySelectorAll('#alink')
    let link = li.querySelector('a')

    for(i = 0; i < allLink.length; i++) {
        allLink[i].style.color = 'var(--text-color)';
        allLink[i].style.backgroundColor = 'transparent';
    }

    link.style.color = 'white';
    link.style.backgroundColor = 'var(--primary-color)';

    for(i = 0; i < navremove.length; i++) {
        navremove[i].classList.remove('navbarMenu');
    }

    li.classList.toggle('navbarMenu');
}

function navbarclick(type) {
    let li = document.querySelectorAll('#removeNavbar');

    for(i = 0; i <= li.length; i++) {
            li[i].classList.remove('navbarMenu')
    }
}

function darklight() {
    // let darklight = document.querySelector('.menu_dark-light');
    // let header = document.querySelector('.header');
    // let headercenter = document.querySelector('.header-center');
    // let headermenu = document.querySelector('.header-menu');
    // let navbar__menu = document.querySelector('.navbar__menu');
    // let bn = document.querySelector('.bn');
    // let setting = document.querySelector('.setting');
    // let setting_main = document.querySelector('.setting__main');
    // let setting__dark = document.querySelector('.setting__dark-main');
    // let can = document.getElementById('can');

    // darklight.classList.toggle('draklight');
    // header.classList.toggle('draklight');
    // headercenter.classList.toggle('draklight');
    // headermenu.classList.toggle('draklight');
    // navbar__menu.classList.toggle('draklight');
    // bn.classList.toggle('draklight');
    // setting.classList.toggle('draklight');
    // setting__dark.classList.toggle('draklight');
    // can.classList.toggle('draklight');

    // darklight.style.transition = 'all .5s ease-in-out';
    // header.style.transition = 'all .5s ease-in-out';
    // headercenter.style.transition = 'all .5s ease-in-out';
    // headermenu.style.transition = 'all .5s ease-in-out';
    // navbar__menu.style.transition = 'all .5s ease-in-out';
    // bn.style.transition = 'all .5s ease-in-out';
    // setting_main.style.transition = 'all .5s ease-in-out'; 
    // setting__dark.style.transition = 'all .5s ease-in-out'; 

    let wrapper = document.getElementById('wrapper');

    wrapper.classList.toggle('draklight');
}

function displayColor() {
    let setting = document.querySelector('.setting');

    setting.classList.toggle('displayColor');
}

function color(value, element) {
    let body = document.querySelector("body");
    
    if(value == 'orange') {
        body.classList.add('orange');
        body.classList.remove('yellow');
        body.classList.remove('violet');
        body.classList.remove('blue');
        body.classList.remove('pink');
        body.classList.remove('red');
        body.classList.remove('green');
    }else if(value == 'yellow') {
        body.classList.remove('orange');
        body.classList.add('yellow');
        body.classList.remove('violet');
        body.classList.remove('blue');
        body.classList.remove('pink');
        body.classList.remove('red');
        body.classList.remove('green');
    }else if(value == 'violet') {
        body.classList.remove('orange');
        body.classList.remove('yellow');
        body.classList.add('violet');
        body.classList.remove('blue');
        body.classList.remove('pink');
        body.classList.remove('red');
        body.classList.remove('green');
    }else if(value == 'blue') {
        body.classList.remove('orange');
        body.classList.remove('yellow');
        body.classList.remove('violet');
        body.classList.add('blue');
        body.classList.remove('pink');
        body.classList.remove('red');
        body.classList.remove('green');
    }
    else if(value == 'pink') {
        body.classList.remove('orange');
        body.classList.remove('yellow');
        body.classList.remove('violet');
        body.classList.remove('blue');
        body.classList.add('pink');
        body.classList.remove('red');
        body.classList.remove('green');
    }else if(value == 'red'){
        body.classList.remove('orange');
        body.classList.remove('yellow');
        body.classList.remove('violet');
        body.classList.remove('blue');
        body.classList.remove('pink');
        body.classList.add('red');
        body.classList.remove('green');
    }else {
        body.classList.remove('orange');
        body.classList.remove('yellow');
        body.classList.remove('violet');
        body.classList.remove('blue');
        body.classList.remove('pink');
        body.classList.remove('red');
        body.classList.add('green');
    }
}

function resetColor() {
    let body = document.querySelector("body");
    body.classList.remove('orange');
        body.classList.remove('yellow');
        body.classList.remove('violet');
        body.classList.remove('blue');
        body.classList.remove('pink');
        body.classList.remove('red');
        body.classList.remove('green');
}

window.addEventListener('scroll', () => {
   let window_header = document.querySelector('.windown');
   window_header.classList.toggle('sticky', window.scrollY > 192);
   window_header.classList.toggle('stickys', window.scrollY > 200);
})

function filter(type, element) {
    let link = document.querySelectorAll('.category__filter ul li a');

    for(i = 0; i < link.length; i++) {
        link[i].style.color = 'var(--black-color)';
        link[i].style.backgroundColor = 'transparent';
    }

    element.style.color = 'white';
    element.style.backgroundColor = 'var(--primary-color)';
    element.style.transition = 'all .2s ease-in-out';
}