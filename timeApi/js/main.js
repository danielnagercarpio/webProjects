$(document).ready(function() {
  updateCities();
  setInterval(updateCities, 60000);  
});
let app = {
  loadData: null,
  processData: null,
  showData: null,
  apiKey: "e89876cdc001c833a224ec9d22c3e468",
  url: null
};
let dataResponse = {
  data: null
}
app.loadData = function (apiurl, city) {
  $.ajax({
    url: apiurl,
    success: function(data) {
      dataResponse.data = data;
      app.processData(city);
    },
    error: function () { alert("Ups, no puedo obtener información de la api"); }
  });
}

app.processData = function(capital) {
  app.temperatura = dataResponse.data.main.temp, 10;
  app.icono = dataResponse.data.weather[0].icon;
  app.showData(capital);
}

app.showData = function(capital){
    $('#mapaCatalunya').append(`
    <div id="${capital}">
      <div class='weather_temperature'>${capital} <br>${app.temperatura}º</div>
      <img src="http://openweathermap.org/img/wn/${app.icono}@2x.png"></img>
    </div>`);
}

function updateCities() {
  const CIUTATS = ['solsona', 'manresa', 'vic', 'balaguer', 'mataro'];
  console.log("test");
  CIUTATS.map( city => { setTimeout(update(city), 10000); })
}

function update(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app.apiKey}&units=metric`;
  console.log(url)
  return app.loadData(url,city);
}