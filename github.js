/* global menu */

"use strict";

var github = (function () {
    var showGithub = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");
        var desc = document.createElement("p");

        title.className = "title";
        title.textContent = "Github";

        desc.innerHTML = "<h4><u>github repositories @ four9one:</h4>";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(desc);

        fetch("https://api.github.com/users/four9one/repos").then(function (response) {
            return response.json();
        }).then(function(data) {
            data.forEach(function(repo) {
                var repoElement = document.createElement("p");

                repoElement.textContent = repo.name;
                window.mainContainer.appendChild(repoElement);
            });

            window.rootElement.appendChild(window.mainContainer);

            menu.showMenu("folder");
        }).catch(function(error) {
            console.log('The fetch operation failed due to the following error: ', error.message);
        });
    };

    return {
        showGithub: showGithub
    };
})(github);
