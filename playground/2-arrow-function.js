/* standard function
const square = function (x) {
      return x * x
}*/


// arrow function syntax - parmaters => function return

/* arrow function
const square = (x) => {
   return x * x
} */

// shorthand: don't need {} if one statement in function body
const square = (x) => x * x

// console.log(square(3))

// printGuestList - another syntax for functions (can't do => when using 'this')
const myEvent = {
    name: 'Birthday Party',
    guestList: ['Shira', 'Rivky', 'Malky'],
    printGuestList () {
        console.log('Guest list for ' + this.name)

        // arrow functions don't bind to their own this, 
        // so it binds to the entire myEvent obj
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

myEvent.printGuestList()