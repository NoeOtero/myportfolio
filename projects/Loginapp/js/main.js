var objPeople = [
	{
		username: "Noe",
		password: "coder"
	},
	{
		username: "Rachel",
		password: "design"
	},
	{
		username: "Sandra",
		password: "google"
	},
	{
		username: "Santiago",
		password: "fedex"
	}
]

// login functionality
function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
	// loop through all the objecsts an confirm username and password
	for(i=0; i<objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password){
			alert(username + " is logged in")
			return
		}
	} 
	// error is username and password do not match
	console.log("incorrect username or password")
	alert("incorrect username or password")
	}

function registerUser() {
	var registerUser = document.getElementById("newUser").value
	var registerPassword = document.getElementById("newPassword").value
	var newUser = {
		username: registerUser,
		password: registerPassword
	}

	for(i = 0; i < objPeople.length; i++) {
		if(registerUser == objPeople[i].username){
			alert("that username is already in use, please choose another")
			return
		} else if (registerPassword.length < 8) {
			alert('that password is too short, include 8 characters or more')
			return
		}
	}
	objPeople.push(newUser)
	console.log(objPeople)
	
}