// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    window.addEventListener("load", function() {
        let form = document.querySelector("form");
        form.addEventListener("formSubmit", function(event) {
           let pilotNameInput = document.querySelector("input[name=pilotName]");
           let copilotNameInput = document.querySelector("input[name=copilotName]");
           let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
           let cargoMassInput = document.querySelector("input[name=cargoMass");
           if (pilotNameInput.value === "" || copilotNameInput.value === "" || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value) ) {
              alert("All fields are required!");
              // stop the form submission
              event.preventDefault();
           } 
        });
     });
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   validateInput();
   document.getElementById('pilotStatus').innerHTML = `Pilot ${pilotNameInput.value} Ready`;
   document.getElementById('copilotStatus').innerHTML = `Copilot ${copilotNameInput.value} Ready`;

   if (Number(fuelLevelInput.value) < 10000){
    document.getElementById('faultyItems').style.visibility = "visible"
    document.getElementById('fuelStatus').innerHTML = `There is not enough fuel for the journey`;
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch!';
    document.getElementById('launchStatus').style.color= "red";
   }

   if (Number(cargoMassInput.value) > 10000) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById('cargoStatus').innerHTML = `There is too much mass for the shuttle to take off.`
    document.getElementById('launchStatus').innerHTML = 'Shuttle not ready for launch!';
    document.getElementById('launchStatus').style.color= "red";
   }

   if (readyToGo){
    document.getElementById('faultyItems').style.visibility = 'visible';
    document.getElementById('launchStatus').innerHTML = `Shuttle is ready for launch`;
    document.getElementById('launchStatus').style.color = 'green';
   }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
