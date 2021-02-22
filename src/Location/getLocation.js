
function getLocation(callBack) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {

      //Create query for the API.
      const latitude = "latitude=" + position.coords.latitude;
      const longitude = "&longitude=" + position.coords.longitude;
      const query = latitude + longitude + "&localityLanguage=en";
    
      const response = await fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?" + query);
      const data = await response.json();
      
      return callBack(data);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

  // return 'test';
}

export default getLocation;