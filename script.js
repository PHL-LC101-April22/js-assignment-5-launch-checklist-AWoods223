// Write your JavaScript code here!

//const { validateInput } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

//const { formSubmission, myFetch, addDestinationInfo, pickPlanet } = require("./scriptHelper");

        // let pilotNameInput = document.querySelector("input[name=pilotName]");
        // let copilotNameInput = document.querySelector("input[name=copilotName]");
        // let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        // let cargoMassInput = document.querySelector("input[name=cargoMass");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("formSubmit", function(event) {
        
       if (pilotNameInput.value === "Empty" || copilotNameInput.value === "Empty" || fuelLevelInput.value === "Empty" || cargoMassInput.value === "Empty") {
          alert("All fields are required!");
          // stop the form submission
          event.preventDefault();
       }; 
    });

   let listedPlanets = "";
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    
       //event listener: formSubmission();
       pickPlanet();
       addDestinationInfo();
       
   })
   
});