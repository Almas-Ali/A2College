
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    // document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'white';
}


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
})


function UrlUpdate(nextURL, nextTitle) {
    nextState = {
        additionalInformation: 'Updated State'
    };
    window.history.pushState(nextState, nextTitle, nextURL);
    window.history.replaceState(nextState, nextTitle, nextURL);
    document.title = nextTitle;
}

function getElementHTML(id) {
    return document.getElementById(id);
}
function addAction(element, func) {
    element.addEventListener('click', func);
}

let home = document.getElementById('home');
let main = document.getElementById('main');

home.addEventListener('click', function () {

    main.innerHTML = `
    Welcome to A2College. <br>
    I am Md. Almas Ali Principal of this college.
    `;
    // let next = window.location.search;
    // window.location.search = '';
    // console.log(next)
    // let sitepage = sessionStorage.getItem("sitepage");
    // if (sitepage == "" | null) {
    //     console.log('sitepage null');
    //     let sitepage = sessionStorage.setItem("sitepage", "/index.html");
    // } else {
    //     console.log('sitepage not null');
    //     eval(`let v = sitepage`);
    //     console.log(v);
    // }
    // console.log(sitepage);
    UrlUpdate(
        nextURL = '/index.html',
        nextTitle = 'Home - A2College'
    );
    delete home;
});
// home.click();

let blog = document.getElementById('blog');

blog.addEventListener('click', function () {
    main.innerHTML = `
    This is Blog section.
    `
    UrlUpdate(
        nextURL = '/blog.html',
        nextTitle = 'Blog - A2College',
    );
    delete blog;
})
let about = document.getElementById('about');

about.addEventListener('click', function () {
    main.innerHTML = `
    This is About section.
    `
    UrlUpdate(
        nextURL = '/about.html',
        nextTitle = 'About - A2College',
    );
    delete about;
})


// let NotFound404 =;

// NotFound404.addEventListener('click', function () {
//     main.innerHTML = `<h1>404 Page Not Found !</h1>`;
// })

let locate = sessionStorage.getItem("sitepage");
console.log(locate);
if (locate === 'index') {
    // home.click();
    sessionStorage.removeItem("sitepage");
    // console.log('home');

} else if (locate === 'blog') {
    // console.log('blog');
    blog.click();
    sessionStorage.removeItem("sitepage");

} else if (locate === 'about') {
    // console.log('about this');
    sessionStorage.removeItem("sitepage");
    about.click();
}
