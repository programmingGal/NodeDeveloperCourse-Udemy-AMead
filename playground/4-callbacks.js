
// asynchronous callback
// setTimeout(() => {
//     console.log('Two seconds are up')
// }, 2000)

// synchronous callback - function passed in to filter function
const names = ['Adina', 'Shira', 'Rivky', 'Eli']
const shortNames = names.filter ( (name) => {
    return name.length <=4
})

const geocode = (address, callback) => {

    setTimeout( () => {
        const data = {
            latitude: 0,
            longtitude: 0
        }

        // return data - setTimeout returns this, not geocode() so undefined
        callback(data)

    }, 2000)
    
}

geocode('Philadelphia', (data) => {
    console.log(data)
})


//
// Challenge: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add = (num1, num2, callback) => {

    setTimeout ( () => {
        const sum = num1 + num2
        callback(sum)

    }, 2000)
   
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})