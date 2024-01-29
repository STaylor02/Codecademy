//Scope

//Blocks and scope
const city = "New York City";

function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
};

console.log(logCitySkyline())


//Global Scope
var satellite = "The Moon";
var galaxy = "The Milky Way";
var stars = "North Star";

function callMyNightSky() {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
};

console.log(callMyNightSky());



//Block Scope
function logVisibleLightWaves() {
    const lightWaves = "Moonlight";
    console.log(lightWaves);
  };
  
  console.log(logVisibleLightWaves());
  console.log(lightWaves); //ReferenceError