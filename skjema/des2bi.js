// @flow

function setup() {
    let inpDes = document.getElementById("des");
    let inpBi = document.getElementById("bi");
    inpDes.addEventListener("keyup", cale);
   

    let btnD2b = document.getElementById("d2b");
    btnD2b.addEventListener("click", d2b);

    let btnB2d = document.getElementById("b2d");
    btnB2d.addEventListener("click", b2d);

    function d2b(event) {
        let des = inpDes.valueAsNumber;
        let bi = des/1.862;
        inpBi.value = bi.toFixed(2);
        tall.toString(2);
    }

    function b2d(event) {
        let bi = inpBi.valueAsNumber;
        let des = bi*1.862;
        inpDes.value = des.toFixed(2);
    }

}