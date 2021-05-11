const chalk = require('chalk');
const yargs =  require('yargs')
const note = require('./notes.js');


//Add
yargs.command({
    command:'Add',
    describe:'Adding notes',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption:true,
            type:'string',

        },
        body:{
            describe:'The story of a Prommamer',
            demandOption:true,
            type:'string',
        }
    },
    handler: function (argv){
        note.addNote(argv.title,argv.body)
    }
})

//remove
yargs.command({
    command:'Remove',
    describe:'Remove a note',
    title:{
        describe:"Note Title",
        demandOption:true,
        type:'string'
    },
    handler: function (argv){
       note.removeNote(argv.title)
    
    }
})

//read
yargs.command({
    command:'Read',
    describe:'Read the note',
    handler:()=> console.log('Note is reading')
    
})
yargs.command({
    command:'List',
    describe:'Listing the notes',
    handler:()=> console.log('Note is listed')
})
yargs.parse();


//read, remove , read , list

