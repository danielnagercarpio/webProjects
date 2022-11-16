$(document).ready(function() {
  updateCities();
  setInterval(updateCities, 60000);  
});
let app = {};
app.apikey = "e89876cdc001c833a224ec9d22c3e468";

// This function load Data
app.cargaDatos = function (apiurl,city) {
  $.ajax({
    url: apiurl,
    success: function(data) {
      app.datos = data;
      app.procesaDatos(city);
    },
    error: function () { alert("Ups, no puedo obtener información de la api"); }
  });
}

app.procesaDatos = function(capital) {
  app.temperatura = app.datos.main.temp, 10;
  app.icono = app.datos.weather[0].icon;
  app.muestra(capital);
}

app.muestra = function(capital){
    $('#mapaCatalunya').append(`
    <div id="${capital}">
      <div class='weather_temperature'>${capital} <br>${app.temperatura}º</div>
      <img src="http://openweathermap.org/img/wn/${app.icono}@2x.png"></img>
    </div>`);
}

function updateCities() {
  const CIUTATS = ['solsona', 'manresa', 'vic', 'balaguer', 'mataro'];
  console.log("test");
  CIUTATS.map( city => { setTimeout(update, 1000); })
}

function update() {
  app.url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app.apikey}&units=metric`;
  app.cargaDatos(app.url,city);
}