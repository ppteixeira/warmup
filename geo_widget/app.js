//
var my_key = "0a05e13307e9d3d24f45af70e21d7a2b"
var lat, lon;
var openWeatherMap = 'http://api.openweathermap.org/data/2.5/weather'

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  $.ajax({
    url: openWeatherMap,
    dataType: "json",
    data: {
      APPID: my_key,
      lat: lat,
      lon: lon,
      units: 'metric'
    }
  }).done(function(res) {
    debugger;
    var temp = res.main.temp;
    var location = res.name;
    console.log(temp);
    console.log(location);
    $('#temp').text(temp);
    $('#location').text(location);
  })

});
