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



  //Scope Pollution
  const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = "Sirius";
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);



//Practice Good Scoping
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
      let region = 'The Arctic';
    if (region === "The Arctic") {
      let lightWaves = "Northern Lights";
      console.log(lightWaves);
    };
    console.log(lightWaves);
  };
  
  logVisibleLightWaves();



  