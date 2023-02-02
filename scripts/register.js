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
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming"
        },
        {
            name:"Scrappy",
            age:20,
            gender:"Male",
            breed:"Pitbull",
            service:"Shower"
        },
        {
            name:"Duke",
            age:30,
            gender:"Male",
            breed:"Husky",
            service:"Grooming"
        }
    ]
    
}

function displayFooterInfo(){
    document.getElementById("footer").innerHTML=`${petSalon.name} it opens at ${petSalon.workingHours.open} to ${petSalon.workingHours.close}`;
}
displayFooterInfo();

console.log(petSalon.pets.length); //displaying number of pets
console.log(petSalon.pets[0].name); //displaying the name of a property inside of an array