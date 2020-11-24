// callback with geocoding:

const request = require ('request') 

// // Geocoding: 
// // user enters address -> geocoding converts to lat/long -> then u can give weather.

// // challenge: print lat, long for los angeles
// //challenge: add error handling
// const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRpbmEtc2Nod2FydHoiLCJhIjoiY2tndGtma3d6MDRjODJybXc3MXdqOGhlZiJ9.yRy10ppNQEbHOFi_wCWptQ&limit=1'

// // altered url to test error handling - no location:
// //const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/-.json?access_token=pk.eyJ1IjoiYWRpbmEtc2Nod2FydHoiLCJhIjoiY2tndGtma3d6MDRjODJybXc3MXdqOGhlZiJ9.yRy10ppNQEbHOFi_wCWptQ&limit=1'

// challenge: use property shorthand and destructuring in ur weather app
// ex. property shorthand: url instead of url:url
// ex. destructuring: passing {body}={} to the callback instead of response

const geocode = (address , callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRpbmEtc2Nod2FydHoiLCJhIjoiY2tndGtma3d6MDRjODJybXc3MXdqOGhlZiJ9.yRy10ppNQEbHOFi_wCWptQ&limit=1'
    
             // we give the properties extracted from the data object a default, otherwise will crash if there is an error
    request ({url, json: true }, (error, {body} = {} ) => {
      if (error){
          callback('Unable to connect to location services', undefined)
      }
      else if( body.features.length === 0){
          callback('Unable to find location', undefined)
      }
      else {
          callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0] ,
          location: body.features[0].place_name  
          })
      }
    })

 }

 module.exports = geocode