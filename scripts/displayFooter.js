let petSalon ={
    name:"The Fashion Pet",
    phone:"555-555-555",
    workingHours:{
        open:"9:00",
        close:"21:00"
    },
    address:{
        street:"Palm ave",
        zip:"22345",
        city:"San Diego"
    },
    pets:[]
}
function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`${petSalon.name} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}`;
}
function displayPetsName(){
    for(i=0;i<petSalon.pets.length;i++){
        console.log(petSalon.pets[i].name);
    }
}
function initFooter(){
    displayFooterInfo();
}
window.onload=initFooter;