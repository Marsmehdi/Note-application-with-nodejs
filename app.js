console.log('start project');

const yargs = require ('yargs');
const notes =require('./notes.js');
 const argv =yargs.argv;


 let title = argv.title;
 let body = argv.body;
 let command = argv._[0];
  if (command ==='add'){
   
      console.log('adding note');
      notes.addingnote(title,body);

  }else if (command ==='remove')
  {console.log('removing note');
  if(title ==='undefined')
  {console.log('err')}
  else{notes.removenote(title)}
  }

  else if (command ==='list')
  {console.log('listing all notes');
  notes.getall();}
  else if (command ==='read')
   {console.log('reading note');
   notes.readnote(title);}
  else{
      console.log('Unknown command was used!')
  }
 