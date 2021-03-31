$(document).ready(function () {
     //Slider
     $(".slider").slick({
          dots: true,
          infinite: true,
          speed: 500,
          fade: true,
          cssEase: "linear",
     });

     //Getting the API
     const getApi ="https://api.openweathermap.org/data/2.5/weather?id=3674962&appid=62120a81c75c69d7134fb99e04276204&lang=es&units=metric";
     const toPrint = document.querySelector('#weather');

     function weather() {
          fetch(getApi)
               .then((response) => response.json())
               .then((data) => {
                    console.log("Perfect", data);
                    toPrint.innerHTML = `
                                        <div class="row container-weather">
                                             <div class="col-12 city text-align-c margin-botton">
                                                  <p>Clima en: Medellín</p>
                                             </div>
                                             <div class="row cont-temp-desc">
                                                  <div class="col-6 temp">
                                                       <p>Temperatura:</p>
                                                       <p>${data.main.temp}ºC</p>
                                                  </div>
                                             <div class="col-6 description">
                                                       <p>description:</p>
                                                       <p>${data.weather[0].description}</p>
                                             </div>
                                        </div>
                                        `; 
               })
               .catch("Algo aslió mal");
     }

     function news() {

     }
     news();
     weather();
});
