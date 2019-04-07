/* global home */

"use strict";

(function () {
    window.rootElement = document.getElementById("root");

    window.mainContainer = document.createElement("main");
    window.mainContainer.className = "container";

    window.navigation = document.createElement("nav");
    window.navigation.className = "bottom-nav";


    /**
     * Code for swiping.
     */

     var slide = 0;    
     var slides = [
         home.showHome,
         about.showAbout,
         github.showGithub,
         redovisning.showRedovisning
         ]

    window.detectSwipeEvent(window, function (element, direction) {

        
        console.log("You swiped on element " + element + " to " + direction + " direction");

        switch (direction)  {
            case "left":
                if (slide < 3) {
                    slide++;
                    slides[slide]()
                }
                    console.log(slide);
                break;
            case "right":
                if (slide > 0) {
                    slide--;
                    slides[slide]()
                }
                    console.log(slide);
                break;
        }
    });


    home.showHome();
})();
