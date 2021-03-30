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
     const getApi =
          "https://api.openweathermap.org/data/2.5/weather?id=3674962&appid=62120a81c75c69d7134fb99e04276204&lang=es&units=metric";
     const toPrint = document.querySelector('#weather');

     function weather() {
          fetch(getApi)
               .then((response) => response.json())
               .then((data) => {
                    console.log("Perfect", data);
                    //toPrint.innerHTML = `Hello`; Aqui va lo que se va a imprimir
               })
               .catch("Algo aslió mal");
     } //Consumiendo la API
     weather();
});
