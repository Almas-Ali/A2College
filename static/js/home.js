
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
    const nextURL = '/index.html';
    const nextTitle = 'Home - A2College';
    const nextState = {
        additionalInformation: 'Updated State'
    };

    window.history.pushState(nextState, nextTitle, nextURL);
    window.history.replaceState(nextState, nextTitle, nextURL);
    delete home;
});
home.click();

let blog = document.getElementById('blog');

blog.addEventListener('click', function () {
    main.innerHTML = `
    This is Blog section.
    `
    const nextURL = '/blog.html';
    const nextTitle = 'Blog - A2College';
    const nextState = {
        additionalInformation: 'Updated State'
    };

    window.history.pushState(nextState, nextTitle, nextURL);
    window.history.replaceState(nextState, nextTitle, nextURL);
    delete blog;
})
let about = document.getElementById('about');

about.addEventListener('click', function () {
    main.innerHTML = `
    This is About section.
    `
    const nextURL = '/about.html';
    const nextTitle = 'About - A2College';
    const nextState = {
        additionalInformation: 'Updated State'
    };

    window.history.pushState(nextState, nextTitle, nextURL);
    window.history.replaceState(nextState, nextTitle, nextURL);
    delete about;
})



let locate = sessionStorage.getItem("sitepage");
console.log(locate);
if (locate === 'index') {
    // home.click();
    sessionStorage.removeItem("sitepage");
    console.log('home');

} else if (locate === 'blog') {
    console.log('blog');
    blog.click();
    sessionStorage.removeItem("sitepage");

} else if (locate === 'about') {
    console.log('about this');
    sessionStorage.removeItem("sitepage");
    about.click();
}