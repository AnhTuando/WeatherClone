var weather = document.querySelector('.weather');
var search = document.querySelector('.search');
var content = document.querySelector('.content');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var time = document.querySelector('.time');
var temperature = document.querySelector('.temperature span');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var body = document.querySelector('body');

async function changeWeather(locationSearch, timeZone) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${locationSearch}&appid=4cbb8779d8eaad00a479a6c4b4a826d6`;
    let urlTime = `https://api.ipgeolocation.io/timezone?apiKey=069fa08d0a8b40fda0df5813cbde7ce8&location=${locationSearch},%20Asia`
   
    let locationTime = await fetch(urlTime).then(res => res.json())
    if(locationTime.month === 12) {
    time.innerText = locationTime.date_time;     
    }

   
    

    let data = await fetch(url).then(res => res.json())

    if(data.cod === 200) {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        let value = temperature.innerText = Math.round(data.main.temp - 273.15) ;
        shortDesc.innerText = data.weather[0].main;
        visibility.innerText = data.visibility + " (m)";
        wind.innerText = data.wind.speed + " (m/s)";
        sun.innerText = data.main.humidity + " (%)";
       
        if (value > 28) {
            body.setAttribute('class','hot')
            weather.classList.add('hot')
        }
        if (value <= 28) {
            body.setAttribute('class','cool')
            weather.classList.add('cool')

        }
        if (value <= 20 ) {
            body.setAttribute('class','warm')
            weather.classList.add('warm')

        }
        if (value <= 15) {
            body.setAttribute('class','cold')
            weather.classList.add('cold')

        }


    } 
    
}

search.addEventListener('keypress', function(e){
    if (e.code === "Enter") {
        var locationSearch = search.value.trim();
        changeWeather(locationSearch);
    }
})
changeWeather('ha noi')














