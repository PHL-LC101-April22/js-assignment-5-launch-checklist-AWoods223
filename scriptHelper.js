// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  let destination = document.getElementById('missionTarget').innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">`;
   
}

function validateInput(testInput) {
   if (testInput === ""){
      return "Empty";
     }
   if (isNaN(testInput)){
      return "Is Not a Number";
   }
   if (!isNaN(Number(testInput))){ //===false
      return "Is a Number"
   }
}

// let fuelReady = false;
// let cargoReady = false;
//let crewReady = false;
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //GOES ON SCRIPT.JS
   // let pilotName = document.querySelector("input[name=pilotName]");
   // let copilotName = document.querySelector("input[name=copilotName]");
   // let fuelLevel = document.querySelector("input[name=fuelLevel]");
   // let cargoMass = document.querySelector("input[name=cargoMass");
let fuelStatus = document.getElementById('fuelStatus');
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let cargoStatus = document.getElementById('cargoStatus');   
let list = document.getElementById('faultyItems');
let launchStatus = document.getElementById('launchStatus');
   
//event.preventDefault()????
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
      alert("All fields are required!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
      alert("Invalid entry: cannot be a number!");
   } else if (validateInput(fuelLevel) === "Is Not a Number" || validateInput(cargoLevel) === "Is Not a Number") {
      alert("Invalid entry: only numbers allowed!");
   } else { 
      list.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot} ready for takeoff.`;
      copilotStatus.innerHTML = `Copilot ${copilot} ready for takeoff.`;

   if (fuelLevel < 10000) {
    
    fuelStatus.innerHTML = `Fuel level is too low!`;
    launchStatus.innerHTML = 'Shuttle not ready for launch!';
    launchStatus.style.color= "red";
    fuelReady = false;
    
   } else if (cargoMass > 10000){ 
     
    cargoStatus.innerHTML = `There is too much cargo.!`;
    launchStatus.innerHTML = 'Shuttle not ready for launch!';
    launchStatus.style.color= "red";
    
        
   }else{ 
      
    launchStatus.innerHTML = `Shuttle is ready for launch`;
    launchStatus.style.color = 'green';
   }
 }
};

async function myFetch() {
  
      let planetsReturned ;
   let json = [];
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        json = response.json();
        });
        
    return json;
};

function pickPlanet(planets) {
   json = [];
        let index = Math.floor(Math.random() * json.length);
        console.log(json.name);
    
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
