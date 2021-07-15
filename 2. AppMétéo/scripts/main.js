const APIKEY = '9b23cd7ae00ccb286bb4947e731419dc'; 

let resultAPI; 

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
   })

}

