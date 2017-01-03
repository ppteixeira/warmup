// You and some friends usually play a gathering game (like a scavenger hunt)
//using geo-coordinates in a park, but it has gotten so popular that many people
//want to join in. One of your friends created an API.

// An API is a way us getting data from a service. for people to add items hidden
//in the park, but now you want to build an App to help people decide what to find in the park.
//
// You are given the following set of data as a result back from an API request
// and you want to sort those results in terms of proximity to the user of your site.

// Write a loop that takes some results and a current location, i.e. lat and
//long and returns the results in order of proximity to the currentLocation.
//Note: you should choose this current location.

var myResults = [ {name: "six pack of beer", location: {lat: 37.767182, long: -122.5}},
                  {name: "whacky glasses", location: {lat: 37.767182, long: -122.51}},
                  {name: "whiskey bottle", location: {lat: 37.767282, long: -122.49}},
                  {name: "diving goggles", location: {lat: 37.770282, long: -122.503}},
                  {name: "running shoes", location: {lat: 37.7669, long: -122.457}},
                  {name: "paint brushes", location: {lat: 37.76800, long: -122.4580}}];

var start = {name: "Starting Point", location: {lat: 37.767183, long: -122.47}};


function distance(lat1, lon1, lat2, lon2, unit) {
	var radlat1 = Math.PI * lat1/180
	var radlat2 = Math.PI * lat2/180
	var theta = lon1-lon2
	var radtheta = Math.PI * theta/180
	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist)
	dist = dist * 180/Math.PI
	dist = dist * 60 * 1.1515
	if (unit=="K") { dist = dist * 1.609344 }
	if (unit=="N") { dist = dist * 0.8684 }
	return dist
}

function findCloser(origin,destinations){
  var closerPoint;
  var closerDistance = 1000000000000000;
  for (var i = 0; i < destinations.length; i++) {
    var latOri = origin.location.lat;
    var longOri = origin.location.long;
    var latDes = destinations[i].location.lat;
    var longDes = destinations[i].location.long;
    var unit = 'K';
    var total = distance(latOri,longOri,latDes,longDes,unit);

    if (total < closerDistance) {
      closerDistance = total;
      closerPoint = destinations[i];
    }
  }
  var result = [closerPoint,closerDistance];
  return result

}



console.log("Starting point: ");
console.log("Latitude: " + start.location.lat);
console.log("Longitude: " + start.location.long);
var closer = findCloser(start,myResults);
var total = distance(start.location.lat, start.location.long,myResults[1].location.lat,myResults[1].location.long,'K');
console.log("\nClosest Point: " + closer[0].name);
console.log("Distance: " + closer[1]);
