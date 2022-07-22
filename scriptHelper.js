// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  let destination = document.getElementById('missionTarget')
  destination.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
   
};

function validateInput(testInput) {
   if (testInput ===''){
      return 'Empty';
  } else if (isNaN(testInput)){
      return 'Not a number';
  } else if (!isNaN(testInput)){
      return 'Is a number'; 
  }
};



function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
let fuelStatus = document.getElementById('fuelStatus');
let pilotStatus = document.getElementById('pilotStatus');
let copilotStatus = document.getElementById('copilotStatus');
let cargoStatus = document.getElementById('cargoStatus');   
list = document.getElementById('faultyItems'); //move this
let launchStatus = document.getElementById('launchStatus');
   
console.log(1);
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
      console.log(2);
      alert("All fields are required!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
      console.log(3);
      alert("Invalid entry: cannot be a number!");
   } else if (validateInput(fuelLevel) === "Is Not a Number" || validateInput(cargoLevel) === "Is Not a Number") {
      console.log(4);
      alert("Invalid entry: only numbers allowed!");
   } else { 
      console.log(5);
      list.style.visibility = "visible";
      pilotStatus.innerHTML = `Pilot ${pilot} ready for takeoff.`;
      copilotStatus.innerHTML = `Copilot ${copilot} ready for takeoff.`;

   if (fuelLevel < 10000) {
    
    fuelStatus.innerHTML = `Fuel level is too low!`;
    launchStatus.innerHTML = 'Shuttle not ready for launch!';
    launchStatus.style.color= "red";
    
    
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
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
        
    return planetsReturned;
};

function pickPlanet(planets) {
        let index = Math.floor(Math.random() * planets.length);

        return planets[index];
    
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
