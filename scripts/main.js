//Mute - Unmute
function mute() {
     const video = document.querySelector('#video');
     video.muted = !video.muted;
}
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
     const getApiWeater ="https://api.openweathermap.org/data/2.5/weather?id=3674962&appid=62120a81c75c69d7134fb99e04276204&lang=es&units=metric";
     const getApiNews ='https://api.currentsapi.services/v1/latest-news?language=es&apiKey=pxRI0wVSqn4GpPn7Z5k4k9rh7qpnRcB-7a8Ga9lzYHQYHMBP';

     const toPrintWeater = document.querySelector('#weather');
     const toPrintNews = document.querySelector('#news');

     function weather() {
          fetch(getApiWeater)
               .then((response) => response.json())
               .then((data) => {
                    console.log("Perfect openweathermap", data);
                    toPrintWeater.innerHTML = `
                                        <div class="row container-weather">
                                             <div class="col-12 city margin-botton">
                                                  <p>Clima en: Medellín</p>
                                             </div>
                                             <div class="row cont-temp-desc">
                                                  <div class="col-6 temp">
                                                       <div><p>Temperatura:</p></div>
                                                       <div><p>${data.main.temp}ºC</p></div>
                                                  </div>
                                                  <div class="col-6 description">
                                                       <div><p>description:</p></div>
                                                       <div><p>${data.weather[0].description}</p></div>
                                             </div>
                                        </div>
                                        `; 
               })
               .catch("Algo aslió mal con la API openweathermap");
     }

     function news() {
          fetch(getApiNews)
               .then((response) => response.json())
               .then((data) => {
                    console.log("Perfect newsapi", data.news);
                    for (let i = 0; i < 10; i++) {                         
                         toPrintNews.innerHTML +=`<p class="simple-text">${data.news[i].title}</p>`;                         
                    }
               })
               .catch("Algo aslió mal con la API newsapi");
     }
     weather();
     news();
});