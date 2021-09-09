//Object Literal
var salon = {
    name: "The Fasion Pet",
    address: {
        state: "Arkansas",
        city: "Lonoke",
        street: "235 Bradley Ln",
        zip: "72086"
    },
    hours:{
        opening:"9:00 am",
        closing:"9:00 pm"
    },
    pets: [
        {
            name:"Scooby",
            age: 60,
            gender: "Male",
            breed: "Dane",
            service: "Grooming",
            owner: "Shaggy",
            phone: "555-555-5555"
        },
        {
         name:"Scrappy",
            age: 50,
            gender: "Male",
            breed: "Mix",
            service: "Nails Cut",
            owner: "Shaggy",
            phone: "555-555-5555"
        },
        {
            name:"Maple",
            age: 3,
            gender: "Female",
            breed: "Mix",
            service: "Full Service",
            owner: "Shane",
            phone: "555-555-5555"
        }

    ]
}

//name,age,gender,breed,service,owner,phone
function displayInfo() {
    document.getElementById("info").innerHTML = `
    <h3>Welcome to ${salon.name}</h3>
    <p>${salon.address.state}, ${salon.address.city}. ${salon.address.street}, ${salon.address.zip}</p>
    `;
}
displayInfo();


function displayPetInfo() {
    document.getElementById("petInfo").innerHTML = `
    <p>You currently have ${salon.pets.length} pets in line:</p>
    `;
}

function displayPetName() {
    for (let i = 0; i < salon.pets.length; i++) {
        document.getElementById("petInfo").innerHTML += `
     ${salon.pets[i].name}
    `;
    }
}



displayPetInfo();
displayPetName();
//document.write(saloon.pets[0].name);