function setup() {
    let liste = [];
    let inpNavn = document.getElementById("navn");
    let divVisliste = document

    //let btnLagre = document.getElementById("lagre");
    //btnLagre.addEventListener("click", lagreData); 

    inpNavn.addEventListener("keydown");

    function lagreData(event) {
        if (event.keyCode === 13) {
            let navn = inpNavn.value;
            if (navn === "") {
                event.preventDefault();
                return;
            }
            list.push(navn);
            let uList = "<ul>";
            for (let n of list) {
                uList += "<li>" + n + "</li>"
            }
            uList += "</ul>";
            divVisliste.innerHTML = uList;
            inpNavn.value = "";
            event.preventDefault();
        }

    }

}


