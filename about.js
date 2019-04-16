/* global menu */

"use strict";

var about = (function () {
    var showAbout = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Om";

        var greeting = document.createElement("p");

        greeting.innerHTML = "Den här hemsidan är ett arbete i kursen webapp," +
            " som handlar om att skapa tillgängliga och användbara applikationer" +
            "för mobila enheter. Sidan är därför lämpligast att se från små enheter." +
            "<br><br>" +
            "Sidan används främst för att samla mina redovisningstexter, " +
            "men du finner även repos från min github." +
            "<br><br> Sidan ligger uppe både på BTH:s servrar och en " +
            "droplet på DigitalOcean som nås med domänen <br><br>" +
            "<a href='http://trollskogen12.se'>http://trollskogen12.se</a>";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("info_outline");
    };

    return {
        showAbout: showAbout
    };
})(about);
