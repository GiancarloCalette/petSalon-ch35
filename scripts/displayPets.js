function displayPetsCards(){
    const DIV = document.getElementById("pets");
    let card = "";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card += `
        <div class="pet">
            <h5>Name: ${pet.name}</h5>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Service: ${pet.service}</p>
            <p>Type: ${pet.type}</p>
            <p>Owner: ${pet.owner}</p>
            <p>Contact: ${pet.contact}</p>
        </div>`;
        console.log(card);
    }
    DIV.innerHTML=card;
}
function displayPetTable(){
    const tbody = document.getElementById("tbPets-body");
    let rows = "";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        rows += `<tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.type}</td>
            <td>${pet.owner}</td>
            <td>${pet.contact}</td>
            <td> <button class ="btn btn-sm btn-outline-danger" onclick="deletePet('${pet.name}')">Remove</button> </td>
        </tr>`;
    }
    tbody.innerHTML = rows;
}
