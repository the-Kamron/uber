"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector(".header_hamburger"),
          menu = document.querySelector(".header_menu");

    btn.addEventListener("click", e => {
        btn.classList.toggle("header_hamburger-active");
        menu.classList.toggle("header_menu-active");
    });
});