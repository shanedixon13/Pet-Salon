//Object Literal
var salon = {
	name: "The Fashion Pet",
	address: {
		state: "Arkansas",
		city: "Lonoke",
		street: "235 Bradley Ln",
		zip: "72086",
	},
	hours: {
		opening: "9:00 am",
		closing: "9:00 pm",
	},
	pets: [],
};

//document.write(saloon.pets[0].name);

//object constructor
/*class Task {
	constructor(description, priority) {
		this.d = description;
		this.p = priority;
	}
}
var task1 = new Task("Play", "High");
console.log(task1);
var task2 = new Task("Do HW", "Low");
console.log(task2);
var task3 = new Task("Running", "Medium");
console.log(task3);*/

var counter = 0;
class Pet {
	constructor(name, age, gender, type, breed, service, owner, phone) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.type = type;
		this.breed = breed;
		this.service = service;
		this.owner = owner;
		this.phone = phone;
		this.id = counter++;
	}
}
//create pets
var scooby = new Pet(
	"Scooby",
	60,
	"Male",
	"Dog",
	"Dane",
	"Grooming",
	"Shaggy",
	"555-555-5555"
);
salon.pets.push(scooby);
var scrappy = new Pet(
	"Scrappy",
	50,
	"Male",
	"Dog",
	"Mixed",
	"Nails Cut",
	"Shaggy",
	"555-555-5555"
);
salon.pets.push(scrappy);
var maple = new Pet(
	"Maple",
	3,
	"Female",
	"Dog",
	"Mixed",
	"Full Service",
	"Shane",
	"555-555-5555"
);
salon.pets.push(maple);
var tweety = new Pet(
	"Tweety Bird",
	60,
	"Male",
	"Bird",
	"Songbird",
	"Nails Cut",
	"Bugs Bunny",
	"999-999-9999"
);
salon.pets.push(tweety);
//get value from inputs
var txtName = document.getElementById("petName");
var txtAge = document.getElementById("petAge");
var txtGender = document.getElementById("petGender");
var txtType = document.getElementById("petType");
var txtBreed = document.getElementById("petBreed");
var txtService = document.getElementById("petService");
var txtOwner = document.getElementById("petOwner");
var txtPhone = document.getElementById("petPhone");

function register() {
	if (txtName.value === "" || txtPhone.value === "") {
		alert("Please enter the required fields.");
	} else {
		var thePet = new Pet(
			txtName.value,
			txtAge.value,
			txtGender.value,
			txtType.value,
			txtBreed.value,
			txtService.value,
			txtOwner.value,
			txtPhone.value
		);
		console.log(thePet);
		salon.pets.push(thePet);
		clear();
		displayTable();
		var alertElement = document.getElementById("alert");
		alertElement.classList.remove("hide");
		setTimeout(function () {
			alertElement.classList.add("hide");
		}, 3000);
	}
}

function clear() {
	txtName.value = ""; //clearing the input
	txtAge.value = "";
	txtGender.value = "";
	txtType.value = "";
	txtBreed.value = "";
	txtService.value = "";
	txtOwner.value = "";
	txtPhone.value = "";
}

/*function display() {
	const petSection = document.getElementById("pets");
	var tmp = " ";
	for (var i = 0; i < salon.pets.length; i++) {
		tmp += `<div class="pet">
		<h3>🐾${salon.pets[i].name}🐾</h3>
		<p>Age: ${salon.pets[i].age}</p>
		<p>Gender: ${salon.pets[i].gender}</p>
		<p>Service: ${salon.pets[i].service}</p>
		<p>Owner: ${salon.pets[i].owner}</p>
		<p>Age: ${salon.pets[i].phone}</p>
		</div>`;
	}
	petSection.innerHTML = tmp;
}*/
function displayTable() {
	//select tbody section
	var table = document.getElementById("pets");
	//create a var tr
	var tr = " ";
	for (var i = 0; i < salon.pets.length; i++) {
		tr += `
		<tr id=${salon.pets[i].id}>
		<td class="table-content">🐾${salon.pets[i].name}</td>     
		<td class="table-content">${salon.pets[i].age}</td>
		<td class="table-content">${salon.pets[i].gender}</td>
		<td class="table-content">${salon.pets[i].type}</td>
		<td class="table-content">${salon.pets[i].breed}</td>
		<td class="table-content">${salon.pets[i].service}</td>
		<td class="table-content">${salon.pets[i].owner}</td>
		<td class="table-content">${salon.pets[i].phone}</td>
		<td onclick="deletePet(${salon.pets[i].id})"><button>🗑️</button></td>			
		</tr>
		`;
	}
	table.innerHTML = tr;
}
function deletePet(id) {
	console.log("delete pet " + id);
	var row = document.getElementById(id); //select element in html using id
	row.remove(); //remove element from html
	for (var i = 0; i < salon.pets.length; i++) {
		var indexDelete; //variable to store position
		if (salon.pets[i].id === id) {
			//search for id
			indexDelete = i; //update position value
		}
	}
	salon.pets.splice(indexDelete, 1); //delete element from array
}
function searchPet() {
	//by pet name
	var txtSearch = document.getElementById("searchInput").value;
	var searchString = txtSearch.toLowerCase();
	//travel the array
	salon.pets.forEach((pet) => {
		//compare the txtsearch with all pet names
		if (pet.name.toLowerCase() === searchString) {
			//highlight the result
			document.getElementById(pet.id).classList.add("highlight");
			searchInput.value = "";
		} else {
			document.getElementById(pet.id).classList.remove("highlight");
		}
	});
}
function init() {
	console.log("app.js");
	displayTable();
	//hook events
	document.querySelector(".btn-register").addEventListener("click", register);
	document.querySelector(".btn-search").addEventListener("click", searchPet);
}
window.onload = init;
