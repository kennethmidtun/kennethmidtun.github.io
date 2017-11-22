// @flow

function setup() {
    let inpKm = document.getElementById("km");
    let inpNaut = document.getElementById("naut");
   

    let btnK2n = document.getElementById("k2n");
    btnK2n.addEventListener("click", k2n);

    let btnN2k = document.getElementById("n2k");
    btnN2k.addEventListener("click", n2k);

    function k2n(event) {
        let km = inpKm.valueAsNumber;
        let naut = km/1.862;
        inpNaut.value = naut.toFixed(2);
        tall.toString(2);
    }

    function n2k(event) {
        let naut = inpNaut.valueAsNumber;
        let km = naut*1.862;
        inpKm.value = km.toFixed(2);
    }

}