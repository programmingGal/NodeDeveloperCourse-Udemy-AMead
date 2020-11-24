// require function is used to load in other modules
// fs (file system) is a node module 
/*const fs = require('fs')

fs.writeFileSync('notes.txt', 'This file was created by Node.js')
*/

/*const add = require('./utils.js')
const sum = add(4, -2)
console.log ('sum is ' + sum)
*/

const notes = require('./notes.js')
//const validator = require('validator')
const chalk = require ('chalk')
const yargs = require('yargs')



/*const notesToPrint = theNotes()
console.log(notesToPrint)

console.log('Adina')

console.log(validator.isEmail('example.com'))
console.log(validator.isURL('https/aaa.com'))


console.log(chalk.green('Success!'))

console.log(process.argv[2]) // argv is an array of arguments passed to the command line. 2 is 3rd argument. command code: node app.js add
*/

/*const command = process.argv[2]
if (command === 'add') {
    console.log('Adding note!')
}*/

//console.log(process.argv)  // print out all arguments passed to the command line
//console.log(yargs.argv)  // prints out the parsed arguments. more useful

// customize yargs version
yargs.version('1.1.0') 


// create ur own yargs commands that users can pass in on the command line:
// add command: users pass in 'node app.js add'
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {                   // builder is object used to give options for certain commands
        title:{
            describe: 'Note title',
            demandOption: true,   // false by default. if set to true, must pass in title with argument. node app.js add --title="My Title"
            type: 'string'        // must be string passed in for title
        },
        body:{
            describe: "Body of Note",
            demandOption: true,
            type: 'string'
        }
    },
    handler:  (argv) => notes.addNote(argv.title, argv.body)  
})

// remove command:
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
       title:{
           describe: 'note title',
           demandOption: true,
           type: 'string'
       }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

//list command
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: () => notes.listNotes()
    
})

// read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    builder: {
        title: {
           describe: 'note title',
           demandOption: true,
           type: 'string'

        }
    },
    handler: (argv) => notes.readNote(argv.title)
    
})

//console.log(yargs.argv)
yargs.parse()
