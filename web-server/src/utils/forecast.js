// getting current weather from weatherstack api.

const request = require ('request')

// // response comes back with a ton of info. in json, so need to parse it. 
// //challenge: Print "it is currently 9 degrees out. It feels like 5 degrees out."
//     // only one of these parameters get populated: either error or response:
//     // low level OS errors - like can't connect to newtwork will populate error, 
//     // but other errors will populate response.body.error. 
//     // if get error, need to print nice message, not crash:

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// challenge: restructure - here can extract body property from response in request header 
// because only using that property
const forecast = (lat, long, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=dbf48ed96a9c35b734fdd9695070026b&query=' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '&units=f'

            // we give the properties extracted from the data object a default, otherwise will crash if there is an error
    request ({url, json: true }, (error, {body} = {} ) => {
             
        if (error){
    
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error){
            callback('Unable to find location', undefined)
        }
       else{
    
             callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature 
                      + ' degrees out. It feels like ' + body.current.feelslike 
                      + ' degrees out.' )
        }
    })
}




module.exports = forecast

// test out by calling forecast
// forecast(44.1545, -75.7088,  (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })