const fs = require('fs');
const chalk = require('chalk');
const notes = function getNotes(){
    return 'Your Notes...'
}

const addNote = function(title,body){
//Add note fucntion that passes to app.js which will access the title and body

    const notes = loadNotes();
const duplicateNote = notes.filter(function (note){
    return note.title ===title 
})
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
//filter will check the same title if given by the user and store it in duplicateNote

if (duplicateNote.length ===0 ) {
    notes.push ({
        title: title,
        body: body
    })
     console.log(notes);
     saveNote(notes)
     console.log(chalk.green.inverse('New note Added'));
    
} else {
    console.log(chalk.red.inverse('Note Taken!'));
}
 
}

const saveNote = function(notes){

    //save the note JASON format

    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('note.JSON',dataJson)
}

const loadNotes = function(){

    //Loading the Notes and cheching it into object
   try {
    const dataBuffer = fs.readFileSync('note.JSON')
    const stringData = dataBuffer.toString()
    return JSON.parse(stringData)
   } catch (error) {
       return []
   }
   

}

const removeNote = function(title){
   const removingNote = loadNotes()
   const duplicateRemoveNote = removingNote.filter(function(rnotes){
       return rnotes.title!==title
   })
   if (removingNote.length>duplicateRemoveNote.length) {
       console.log(chalk.green("Note removed"));
       
   } else {
       console.log(chalk.red("Note does not exict"));
   }
   saveNote(duplicateRemoveNote)
     console.log(title);
     console.log(duplicateRemoveNote);
}
    
    module.exports = {
       notes,
       addNote,
       removeNote
    }