/* global menu */

"use strict";

var redovisning = (function () {
    var showRedovisning = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");
        var kmom = document.createElement("div");

        title.className = "title";
        title.textContent = "Redovisning";

        kmom.className = "kmom";


        kmom.innerHTML = "<h3>Kmom01</h3>" +
        "Det är första gången jag gör sidor som är anpassade för mindre enheter. Det har inte " +
        "varit några konstigheter. Alla problem jag har stött på har jag enkelt kunna lösa " +
        "genom att googla mig fram på internet. Jag måste säga att materialet på dbwebb har " +
        "varit riktigt bra. Efter övningarna och tidigare javascript-kurs så gick det väldigt " +
        "smidigt att hoppa in i exempelmaterialet och bygga vidare med egna moduler." +
        "<br><br>" +
        "Avsnitten om typografi har varit intressant och det är alltid roligt/bra att få lära " +
        "sig mer om css. Viktiga lärdomar jag tar med mig härifrån är kanske inte typografin " +
        " i sig utan mer verktygen, exempelvis normalize.min.css som nollställer webläsarens " +
        "grundstil, google fonts och hur man enkelt importerar nya typsnitt. Men klart man " +
        "tar med sig riktlinjer som magic number och användandet av relativa enheter. " +
        "<br><br>" +
        "Jag går kurspaketet och vi har inte haft några direktiv på att använda oss av github " +
        "tidigare. Lyckligtvis är jag bekant med det och har en del repos som ligger uppe. " +
        "Jag lärde mig massor om JSON och API i kursen Programmera webbtjänster i Linux. Innan " +
        "dess har jag aldrig hållt på med API's och jag är extremt glad över att " +
        "jag fått kunskaper om denna teknik/gränssnitt. Jag förstår ju själv innebörden och " +
        "fördelarna av att kunna handskas med data på detta sätt." +
        "<br>" +
        "Jag kan passa på att skriva att jag verkligen är jättenöjd med upplägget på " +
        "utbildningen och den röda tråden som har gått genom detta kurspaket. API är något " +
        "<br><br>" +
        "Jag gjorde extrauppgifterna och kom därmed underfund med eventlyssnare för touch. " +
        "Även hur man man läser in olika stylesheets beroende på skärmstorlek med attributet " +
        "media. Detta har varit förvånansvärt enkelt och användbart och därför är dessa " +
        "mina TIL." +
        "<br><br>" +
        "Mitt arbete med lagerappen var roligt och jag la lite extra tid på att få till lite " +
        "design och funktionalitet som exempelvis swipefunktionen. " +
        "När det gäller vyn över produktinformationen så gjorde jag så " +
        "att alla produkter listas i en snygg lista. Alla produkter har en eventlyssnare, och " +
        "med klick så kommer produktinfomation upp under produkttiteln. Som även går att " +
        "klicka bort igen. " +
        "Jag känner mig nöjd med resultatet och jag börjar känna mig ganska självsäker med " +
        "javascript. <br>Superkul kursmoment och jag ser fram emot nästa!" +
        "<br><br>" +
        "<a href='http://www.student.bth.se/~nifo18/dbwebb-kurser/webapp/me/kmom01/lager1/'>" +
        "Länk til lagerappen1</a><br><br>";



        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(kmom);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("receipt");
    };

    return {
        showRedovisning: showRedovisning
    };
})(redovisning);
