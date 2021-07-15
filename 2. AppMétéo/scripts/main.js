import jourSemaineDynamique from "./Utilitaire/gestionTemps.js";

const APIKEY = '9b23cd7ae00ccb286bb4947e731419dc'; 

let resultAPI;

//Select DOM

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');

const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');
const joursDiv = document.querySelectorAll('.jour-prevision-nom')
const tempJoursDiv = document.querySelectorAll('.jour-prevision-temps');
const imgIcone = document.querySelector('.logo-meteo');


if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(position =>{

      console.log(position)
      let long = position.coords.longitude
      let lat = position.coords.latitude

      callApi(long, lat)

   }, () => {
      alert('vous avez refusé la géoloc')
   })
}

function callApi(long, lat){

   fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${APIKEY}`)
   .then((response) => {
      return response.json()
   })
   .then((data) =>{
      console.log(data)
      let resultApi = data

      temps.innerText = resultApi.current.weather[0].description
      temperature.innerText = `${Math.trunc(resultApi.current.temp)}°`
      localisation.innerText = resultApi.timezone;

      //Heure calcul
      let now = new Date().getHours();

      for(let i =0; i < heure.length; i++){
         let heureInc = now + i*3

         if(heureInc > 24){
            heure[i].innerText = `${heureInc - 24} h`
         }else if(heureInc === 24){
            heure[i].innerText = "00h"
         } else{
            heure[i].innerText = `${heureInc} h`
         }
      }

      //Temps calcul
      for(let j = 0; j < tempPourH.length; j++){
         tempPourH[j].innerText = `${Math.trunc(resultApi.hourly[j * 3].temp)}°`
      }

      for(let k = 0; k < jourSemaineDynamique.length; k++) {
         joursDiv[k].innerText = jourSemaineDynamique[k].slice(0,3);
     }

      // Temp par jour
      for(let m = 0; m < 7; m++){
         tempJoursDiv[m].innerText = `${Math.trunc(resultApi.daily[m + 1].temp.day)}°`
      }

      // Icone dynamique 
      if(now >= 6 && now < 21) {
         imgIcone.src = `ressources/jour/${resultApi.current.weather[0].icon}.svg`
      } else  {
         imgIcone.src = `ressources/nuit/${resultApi.current.weather[0].icon}.svg`
      }
   })

}

