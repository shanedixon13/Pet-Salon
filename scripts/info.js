function displayInfo() {
	document.getElementById("info").innerHTML = `
    <h3>Welcome to ${salon.name}</h3>
    <p>${salon.address.state}, ${salon.address.city}. ${salon.address.street}, ${salon.address.zip}</p>
    `;
}
displayInfo();
