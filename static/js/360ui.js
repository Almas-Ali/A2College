'use strict';

let nextURL;
let nextTitle;

function UrlUpdate(nextURL, nextTitle) {
    let nextState = {
        additionalInformation: 'Updated State'
    };
    window.history.pushState(nextState, nextTitle, nextURL);
    window.history.replaceState(nextState, nextTitle, nextURL);
    document.title = nextTitle;
};

function getElementHTML(id) {
    return document.getElementById(id);
};

function addClickAction(element, func) {
    element.addEventListener('click', func);
};