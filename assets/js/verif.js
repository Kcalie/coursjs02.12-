function verifForm() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;
    if(!nom) {
        alert('veuillez renseigner votre nom')
        return false;
    }
    if(!prenom) {
        alert('veuillez renseigner votre prenom')
        return false;
    }
    if(!email) {
        alert('veuillez renseigner votre email')
        return false;
    }
    if(!telephone) {
        alert('veuillez renseigner votre telephone')
        return false;
    }
    if(!sujet) {
        alert('veuillez renseigner un sujet')
        return false;
    }
    if(!message || message == 'votre message') {
        alert('veuillez renseigner votre message')
        return false;
    }
    return true;
}
const formulaire = document.getElementById('verif');
formulaire.addEventListener('submit',verifForm);
// pour notre champs message
const verif_message = document.getElementById('message');
verif_message.addEventListener('click',function(){
    if(this.value == 'votre message') {
        this.value = "";
    } else {
        this.value = "votre message";
    }
});
verif_message.addEventListener('keyup',function(){
    let str_message = verif_message.value;
    const nombre_car = document.getElementById('cmax').value;
    let operation = nombre_car-str_message.length;
    document.getElementById('number').value = operation;
});