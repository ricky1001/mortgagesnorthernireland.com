"use strict";

var menu = document.getElementById("sliding-side-bar");
var menuOpen = document.getElementById("menuOpen");
var menuClose = document.getElementById("menuClose");

function openMenu() {
    console.log("clicked");
    menu.className = "sliding-side-bar-open";
}

menuClose.addEventListener("click", function () {

    menu.className = "sliding-side-bar-close";
});