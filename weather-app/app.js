// asynchronous programming

// console.log('starting')

// // setTimeout() calls a function after a certain amount of time(in milliseconds)
// // here 2 seconds
// // node is non-blocking - doesn't wait for longer process to complete, so 'stopping' displays b4 2 second timer
// setTimeout ( () => {
//    console.log ('2 second timer')
// }, 2000)

// // also displays after 'stopping' but before '2 second timer'
// setTimeout ( () => {
//     console.log ('0 second timer')
// }, 0)

// console.log('stopping')

const request = require ('request')
const geocode = require ('./utils/geocode')
const forecast = require ('./utils/forecast')


const locationEntered = process.argv[2]


 // test out by calling geocode():
     if (locationEntered){
         
        geocode(locationEntered, (error, data) => {  
        
            if (error){
                return console.log(error)
            }
            forecast(data.latitude, data.longitude,  (error, forecastData) => {
                if(error){
                    return console.log(error)
                }
    
                console.log(data.location)
                console.log (forecastData)
              })
        })
        
     }
     else{
         console.log("Please enter a location.")
     }
     



