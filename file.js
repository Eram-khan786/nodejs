// const fs=require("fs");

// //Sync...
// // fs.writeFileSync("./text.txt","I am Eram Khan");


// //ASYNC 
// // fs.writeFile("./text.txt","I a girl",()=>{})

// //SYNC
// // const result=fs.readFileSync("./contact.js","utf-8");
// // console.log(result)

// //ASYNC

// // fs.readFile("./contact.js","utf-8",(err,result)=>{
// //     if (err){
// //         console.log("Error",err);
// //     }
// //     else{
// //         console.log(result)
// //     }
// // })


// // fs.appendFileSync("./text.txt",`${Date.now()}I am from Sangam vihar\n`);
// // fs.cpSync("./text.txt","./copy.txt");
// // fs.unlinkSync("./copy.txt")
// // console.log(fs.statSync("./text.txt"));
// fs.mkdirSync("my-docs");


const fs = require("fs");
const os=require("os")
console.log(os.cpus().length)
// const directoryName = "my-docs";

// fs.mkdirSync("my-docs1/a/b",{recursive:true});
