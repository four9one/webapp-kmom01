/* global menu */

"use strict";

var redovisning = (function () {
    var showRedovisning = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Redovisning";

        var greeting = document.createElement("p");

        // greeting.textContent = "textContent här.<br>";
        greeting.innerHTML = "#<br>#<br>#<br>#<br>#<br>" + 
        "#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>" +
        "#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>#<br>";



        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("receipt");
    };

    return {
        showRedovisning: showRedovisning
    };
})(redovisning);
