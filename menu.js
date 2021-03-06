/* global home, about, github, redovisning */

"use strict";

var menu = (function () {
    var showMenu = function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [{name: "Me", class: "person", nav: home.showHome},
            {name: "Om", class: "info_outline", nav: about.showAbout},
            {name: "Github", class: "folder", nav: github.showGithub},
            {name: "Redovisning", class: "receipt", nav: redovisning.showRedovisning}];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            window.navigation.appendChild(navElement);
        });

        window.rootElement.appendChild(window.navigation);
    };

    return {
        showMenu: showMenu
    };
})(menu);
