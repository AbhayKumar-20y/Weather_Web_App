const cityname = document.getElementById('city-input');
const btn = document.getElementById('btn');
let city_name = document.getElementById('city-name');
let date = document.getElementById('date');
let temperature = document.getElementById('temperature');
let description= document.getElementById('description');
let wind_speed = document.getElementById('wind-speed');
let info = document.getElementById('weather-info');


async function getdata(cityvalue) {
 const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=5a31d212dc31473b89043617252110&q=${cityvalue}&aqi=yes`);
 return await promise.json(); 
}


btn.addEventListener('click',async ()=>{

   const value = cityname.value;
   const result = await getdata(value);
   info.style.display = 'block';

   city_name.innerText = `${result.location.name} , ${result.location.region} - ${result.location.country}`
   date.innerText = `${result.location.localtime}`
   temperature.innerText = `${result.current.temp_c} 'C` 

   // description.innerText = `${result.current.condition.text}`

   let text1 = result.current.condition.text.toLowerCase();
   description.innerText = text1;
   wind_speed.innerText = `${result.current.wind_kph} km/h`

text1 = text1.toLowerCase();

 let w_icon =  document.getElementById("weather-icon");

if(text1.includes("sunny")){
 w_icon.src = "/Beginner/Weather/images/sunny.png"
}
else if(text1.includes("mist")){
    w_icon.src  = "/Beginner/Weather/images/mist.png"
}
else if(text1.includes("overcast")){
    w_icon.src  = "/Beginner/Weather/images/overcast.png"
}
else if(text1.includes("rain")){
   w_icon.src  = "/Beginner/Weather/images/rainy-day.png"
}
else if(text1.includes("snowy")){
  w_icon.src  = "/Beginner/Weather/images/snow.png"
}
else if(text1.includes("cloudy")){
   w_icon.src= "/Beginner/Weather/images/clouds.png"
}
else if(text1.includes("clear")){
   w_icon.src= "/Beginner/Weather/images/clear-sky.png"
}
else if(text1.includes("clear")){
   w_icon.src= "/Beginner/Weather/images/thunderstorm.png"
}
else{
   w_icon.src= "/Beginner/Weather/images/cloud-server.png"
}

});





