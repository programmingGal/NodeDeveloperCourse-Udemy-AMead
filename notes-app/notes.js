
const fs = require ('fs')
const chalk = require ('chalk')


const addNote =  (title, body) => {
      const notes = loadNotes()

      // filter returs an array of notes, so searches thru all even if match is found
     // const duplicateNotes = notes.filter((note) =>  note.title === title) // filters for duplicates
       
    // find returns the duplicate note w/o having to search e/t
        const duplicateNote = notes.find((note) => note.title === title)

      /*if (duplicateNotes.length === 0){
        notes.push ({
          title: title, 
          body: body
  
        }) */


        if (!duplicateNote) {  // undefined if no duplicates
          notes.push ({
            title: title, 
            body: body
          })
        
        saveNotes(notes)
        console.log('Note added!')
      }
      else {
        console.log('Note already exists')
      }
      
}

const removeNote = (title) => {
  const notes = loadNotes()

  
  const notesToKeep = notes.filter( (note) =>  note.title !== title)    // if title exists in list of notes, remove note
   
    // check if anything was filtered (removed)
  if (notesToKeep.length < notes.length) {
      
    // remove the note by overwriting the file with the filtered list
      saveNotes(notesToKeep)

      console.log(chalk.green.inverse('Note removed with title: ' + title))  // display with green background
  }

  else {
    console.log(chalk.red.inverse('Cannot remove. No such title exists'))
  }
  
}

const loadNotes = () => {

  try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
  } catch(e){
        return []
  }  
}

const saveNotes =  (notes) => {
  const dataJSON = JSON.stringify (notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
   const notes = loadNotes()

   console.log(chalk.bgMagenta.underline('Your notes:'))

   notes.forEach( (note)=> console.log(note.title))
}

// find the note with the specified title and read it out
const readNote = (title) => {

  try{
  const noteToRead = loadNotes().find((note) => note.title === title)
  console.log( 'Title: '+ chalk.inverse.blue(noteToRead.title) + '\nBody: '+ noteToRead.body)
  }
  catch(e){
         console.log(chalk.red('Title not found!'))
  }
}

//module.exports = getNotes  // other files can access this as the return object

// to assign multiple things to module.exports, assign it an object with multiple properties
module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}