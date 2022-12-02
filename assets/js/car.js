let date_actuelle = new Date();
let date_fin = new Date('Dec 2 17:00:00 2022');
let total_secondes = (date_fin-date_actuelle)/1000;
let prefixe = "le week-end est dans :";

if(total_secondes < 0){
    prefixe = "vous devriez deja etre partie depuis";
    total_secondes = Math.abs(total_secondes);
}

if(total_secondes > 0){
    prefixe = "le week-end est dans :";
    total_secondes = Math.abs(total_secondes);
    var jours = Math.floor(total_secondes/(60*60*24));
    var heures = Math.floor((total_secondes - (jours*60*60*24))/(60*60));
    var minutes = Math.floor((total_secondes - ((jours*60*60*24 + heures*60*60)))/60);
    var secondes = Math.floor(total_secondes - ((jours*60*60*24 + heures*60*60 + minutes*60)));

    let et = "et";
    let mot_jours = "jours,";
    let mot_heures = "heures,";
    let mot_minutes = "minutes";
    let mot_secondes = "secondes";

    


}