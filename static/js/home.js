'use strict';

function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    // document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
};


let touglebtn = document.getElementById('touglebtn');
let sidenav = document.getElementById('mySidenav');

touglebtn.addEventListener('click', function () {
    if (sidenav.style.width === '250px') {
        closeNav();
        touglebtn.innerHTML = '&#9776;';
    } else {
        openNav();
        touglebtn.innerHTML = '&#9747;';
    }
});


// 360ui code starts from here...

let home = getElementHTML('home');
let main = getElementHTML('main');

addClickAction(home, function () {
    main.innerHTML = `
    <div class="container warning">
        Welcome to A2College. <br>
        A place where you can learn about latest programming technologies. <br>
        Stay with us and learn from us. <br>
        <!-- <img src="./static/img/Penguins.jpg" alt="Img" width="500px"> -->
    </div>
    
    `;
    UrlUpdate(
        nextURL = '/index.html',
        nextTitle = 'Home - A2College'
    );
});
home.click();

let blog = getElementHTML('blog');

addClickAction(blog, function () {
    main.innerHTML = `
    This is Blog section.
    `
    UrlUpdate(
        nextURL = '/blog.html',
        nextTitle = 'Blog - A2College',
    );
});

let about = getElementHTML('about');
addClickAction(about, function () {
    main.innerHTML = `
    This is About section.
    `
    UrlUpdate(
        nextURL = '/about.html',
        nextTitle = 'About - A2College',
    );
});

let intro = getElementHTML('intro');
addClickAction(intro, function () {
    main.innerHTML = `
    This is a brif inro of A2College...
    `
});

// let NotFound404 =;

// NotFound404.addEventListener('click', function () {
//     main.innerHTML = `<h1>404 Page Not Found !</h1>`;
// })

let locate = sessionStorage.getItem("sitepage");
if (locate === 'index') {
    sessionStorage.removeItem("sitepage");

} else if (locate === 'blog') {
    blog.click();
    sessionStorage.removeItem("sitepage");

} else if (locate === 'about') {
    sessionStorage.removeItem("sitepage");
    about.click();
}
