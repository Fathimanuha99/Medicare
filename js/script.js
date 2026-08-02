const searchBox = document.getElementById("doctorSearch");


if(searchBox){

searchBox.addEventListener("keyup", function(){

let value = searchBox.value.toLowerCase();


let doctors = document.querySelectorAll(".doctor-card");


doctors.forEach(function(card){


let text = card.innerText.toLowerCase();


if(text.includes(value)){

card.style.display="block";

}

else{

card.style.display="none";

}


});


});


}

// Appointment Form Validation


const appointmentForm = document.getElementById("appointmentForm");


if(appointmentForm){


appointmentForm.addEventListener("submit", function(event){


event.preventDefault();



let name = document.getElementById("name").value;

let email = document.getElementById("email").value;

let phone = document.getElementById("phone").value;

let doctor = document.getElementById("doctor").value;

let date = document.getElementById("date").value;



let message = document.getElementById("message");



if(
name === "" ||
email === "" ||
phone === "" ||
doctor === "" ||
date === ""
){


message.style.color="red";

message.innerHTML="Please fill all fields!";


}

else{


message.style.color="green";

message.innerHTML=
"Appointment booked successfully! We will contact you soon.";



appointmentForm.reset();


}



});


}

