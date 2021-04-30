// JavaScript source code

function Change() {
    let input = document.querySelector("input[type='text']");

    //bottone è un oggetto
    let bottoneSub = document.getElementById("buttonSubscribe");

    bottoneSub.disabled = "";
        if (input[i].value === "") {
            bottoneSub.disable = "disabled";
          
        }
    
}

function Subscribe() {

    let value = document.getElementById("nome").value;
    try {
        let storageName = "localStorage";

        let storage = (storageName in window && window[storageName]
            != null) ? window[storageName] : null;

        storage.setItem("nome", value);

        let bottoneSub = document.getElementById("buttonSubscribe");
        bottoneSub.disable = "disabled";

        alert("Grazie " + value + " per l'iscrizione!");

    } catch (e) {

        alert(e.Message);
    }
}
function Unsubscribe() {
   
    let storageName = "localStorage";
    try {

        //Window è la mia pagina aperta nel browser
        let storage = (storageName in window && window[storageName] != null) ? window[storageName] : null;

        storage.clear();
        alert("Ti sei disiscritto corretamente");

        let bottoneSub = document.getElementById("buttonSubscribe");
        bottoneSub.disable = "disabled";

    } catch (e) {
        alert(e.Message);
    }

}
function MessaggioBenvenuto() {

    let storage = window["localStorage"];
    let value = storage.getItem("nome");

    if (value != null) {
        alert("Benvenuto/a " + value);
    }
}

