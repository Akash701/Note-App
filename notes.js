const fs = require('fs');
const chalk = require('chalk');
const json = require('./note.JSON')

const addNote =(title,body)=>{
//Add note fucntion that passes to app.js which will access the title and body

    const notes = loadNotes();
const duplicateNote = notes.filter( (note)=>note.title === title 
)
const duplicate = notes.find((note)=>note.title===title)
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
//filter will check the same title if given by the user and store it in duplicateNote

if (!duplicate) {
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

const saveNote =(notes)=>{

    //save the note JASON format

    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('note.JSON',dataJson)
}

const loadNotes =()=>{

    //Loading the Notes and cheching it into object
   try {
    const dataBuffer = fs.readFileSync('note.JSON')
    const stringData = dataBuffer.toString()
    return JSON.parse(stringData)
   } catch (error) {
       return []
   }
   

}

const removeNote = (title)=>{
   const removingNote = loadNotes()
   const duplicateRemoveNote = removingNote.filter((rnotes)=>rnotes.title!==title
   )
   if (removingNote.length>duplicateRemoveNote.length) {
       console.log(chalk.green("Note removed"));
       
   } else {
       console.log(chalk.red("Note does not exict"));
   }
   saveNote(duplicateRemoveNote)
     console.log(title);
     console.log(duplicateRemoveNote);
}

const list =()=>{
    console.log(chalk.yellow.inverse('Your notes'))
    // const bufferData = fs.readFileSync('note.JSON')
    // const stringJson =bufferData.toString()
    // JSON.parse(stringJson)
    // // const duplicate = notes.filter() 
    // if (stringJson.length===0) {
    //    return console.log('No notes added');
    // } else {
    //    return console.log(stringJson);
    // }
     const notes = loadNotes()
     notes.forEach((note)=>{
         console.log(note.title);
     })
}
    
const readNote = (title)=>{
    console.log("Reading notes");
    const notes = loadNotes()
    const ReadNote = notes.find((note)=>note.title===title)
    //find() is likr filter it will check the arrey for the same value 
    //The only differnce is when it get the value it will stop looking ie it will not look the whole arrey


    if (ReadNote) {
        console.log(chalk.green(ReadNote.title));
        console.log(ReadNote.body);
        
    } else {
        console.log(chalk.red('No note found'));
    }
}

    module.exports = {
       addNote,
       removeNote,
       list,
       readNote
    }