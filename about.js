/* global menu */

"use strict";

var about = (function () {
    var showAbout = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Om";

        var greeting = document.createElement("p");

        greeting.textContent = "Den här hemsidan är ett arbete i kursen webapp," +
            " som handlar om att skapa tillgängliga och användbara applikationer" +
            "för mobila enheter.";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("info_outline");
    };

    return {
        showAbout: showAbout
    };
})(about);
