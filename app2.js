console.log('start project');


const notes =require('./notes2.js');
 const argv =process.argv;


 let title = argv[4];
 let body = argv[6];
 let command = argv[2];
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