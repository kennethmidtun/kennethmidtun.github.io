// @flow

function setup() {
    let Selfra = document.getElementById("fra");
    let Tilfra = document.getElementById("til");
    let inpAntall = document.getElementById("antall");
    let chkLeiebil = document.getElementById("leiebil");
    let btnBestill = document.getElementById("bestill");
    let divMelding = document.getElementById("melding");

    let priser = {
        "OSL"; { "SVG";399, "BGO";410, "HAU";180 },
        "SVG"; { "BGO";50, "HAU";10 },
        "BGO"; { "HAU"; 5 }
    }

    let leiepris = 1000;

    // $FlowFixME
    btnBestill.addEventListener("click", bestillFlight);

    function bestillFLight() {
        // $FlowFixME
        let fra = Selfra.value;
        // $FlowFixME
        let til = Tilfra.value;
        let pris = 0;

        if (priser[fra]) && priser[fra][til] {
            pris = priser[fra][til];
        } else {
            pris = priser[til][fra];
        }

        if (inpAntall.value) {
            pris += inpAntall.valueAsNumber;
        }

        if (chkLeiebil.checked) {
            pris += leiepris;
        }

         // $FlowFixME
        divMelding.innerHTML = `Din flight fra $(fra} til $(til} koster $(pris} kroner.`;
    }


}