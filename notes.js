const fs = require('fs');


let fetchnote =()=>{
    try {return JSON.parse(fs.readFileSync('note.txt'))
        
    } catch (error) {
        return [];
    }
}


let addingnote=(title,body)=>{
    let notes = fetchnote();
    let note ={
        title,
        body

    };
    
    let double = notes.filter((note)=>note.title !==title);
    if(double.length === 0){
        notes.push(note);
    fs.writeFileSync('note.txt',JSON.stringify(notes));
   lognote(note)
    }
    else{
        console.log('--help        Show help')
        console.log('--titel, -t   TItle of note')
        console.log('--body, -b    Body of note')
        console.log('Missing required argument : title , body')
    }
}
let removenote =(title)=>{
    let notes = fetchnote();
    let filterremov =notes.filter((note) => note.title !== title)
    if(filterremov.length === 0){

  fs.writeFileSync('note.txt',JSON.stringify(filterremov));
}else{
    console.log('--help      Show help')
    console.log('--titel, -t TItle of note')
    console.log('Missing required argument : title')
}}
let readnote =(title)=>{
    let notes = fetchnote();
    

filternote =    notes.filter((note) => note.title === title);
if(filternote.length !== 0){
lognote(filternote[0])}else{
    console.log('--help      Show help')
    console.log('--titel, -t TItle of note')
    console.log('Missing required argument : title')
}}
let getall =()=>{
    let notes = fetchnote();
    notes.forEach((note) => lognote(note));
}
let lognote =(note)=>{
    console.log('*************************')
    console.log(`Title: ${note.title} `)
    console.log(`Body :${note.body}`)



}

module.exports={
    addingnote ,
    removenote,
    readnote,
    getall
}
