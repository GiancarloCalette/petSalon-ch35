function Pet(n,a,g,b,s,t,o,c){
    this.name = n;
    this.age = a;
    this.gender = g;
    this.breed = b;
    this.service = s;
    this.type = t;
    this.owner = o;
    this.contact = c;
}
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");
let inputOwner = document.getElementById("txtOwner");
let inputContact = document.getElementById("txtContact");
function isValid(aPet){
    let valid = true;
    if(aPet.name === ""){
        valid = false;
        inputName.classList.add("input-alert-error");
    }
    if(aPet.age === ""){
        valid = false;
        inputAge.classList.add("input-alert-error");
    }
    if(aPet.gender === ""){
        valid = false;
        inputGender.classList.add("input-alert-error");
    }
    if(aPet.breed === ""){
        valid = false;
        inputBreed.classList.add("input-alert-error");
    }
    if(aPet.service === ""){
        valid = false;
        inputService.classList.add("input-alert-error");
    }
    if(aPet.type === ""){
        valid = false;
        inputType.classList.add("input-alert-error");
    }
    if(aPet.owner === ""){
        valid = false;
        inputOwner.classList.add("input-alert-error");
    }
    if(aPet.contact === ""){
        valid = false;
        inputContact.classList.add("input-alert-error");
    }
    //make mandatory owner and contact phone
    return valid;
}
function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value,inputOwner.value,inputContact.value);
    if(isValid(newPet) === true){
        petSalon.pets.push(newPet);
        updateInfo();
        //displayPetsCards();
        displayPetTable();
        clearForm();
    }
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}
function deletePet(name){
    if(!confirm("Are you sure you want to remove " + name + "?")){
        return;
    }
    for(let i=0;i<petSalon.pets.length;i++){
        const pet = petSalon.pets[i];
        if(pet.name === name){
            petSalon.pets.splice(i, 1);
            displayPetTable();
        }
    }
}
function search(){
    let text = document.getElementById("txtSearch").value;
    let arraySearch = [];
    for(let i=0;i<petSalon.pets.length;i++){
        const pet = petSalon.pets[i];
        if(pet.name.toLowerCase().includes(text.toLowerCase())){
            arraySearch.push(pet);
        }
    }
    displayPetTableCaliz();
    console.log(arraySearch);
}
function clearForm(){
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputType.value = "";
    inputOwner.value = "";
    inputContact.value = "";
}
function init(){
    displayFooterInfo();
    let scooby = new Pet("Scooby",60,"Male","Dane","Grooming","Dog","Luis",555555);
    let scrappy = new Pet("Scrappy",50,"Male","Mixed","Vaccines","Dog","Francisco",123456);
    petSalon.pets.push(scooby,scrappy);
    updateInfo();
    //displayPetsCards();
    displayPetTable();
}
window.onload=init; //wait to render the HTML
//displayPetsName();
