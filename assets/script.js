let weather = {
    apiKey :"f38c66ccfd014e56046b72fa87958ef2 ",
  fetchWeather: function (city){
    fetch( 
         "https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid=" 
         + this.apiKey
    )
    .then((response ) => response.json())
    .then ((data) => console.log(data));
},
    displayWeather: function (data) {
        const { name } = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name,icon,description,temp,humidity, speed)
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText= "Humidity:" + humidity + "%";
        document.querySelector(".wind").innerText= "Windspeed" + speed + "km /h";
        
    },
    search: function () {
        this.fetchWeather(document.querySelector(".searchbar").value);

    }
};

document
    .querySelector(".search button").addEventListener("click", function (){
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function (event){
    if (event.key == "Enter") {
        weather.search()
    }
})
