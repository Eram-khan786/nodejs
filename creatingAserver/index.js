
// Without express:

// const http = require('http');
// const fs = require("fs");
// const url=require("url")
// const myServer = http.createServer((req, res) => {
//     if(req.url==="/favicon.ico") return res.end();
//     const log = `${Date.now()}:${req.url} New Req Received\n`;
//     const myUrl=url.parse(req.url,true);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err) => {
//         switch(myUrl.pathname){
//             case "/" :
//                 if (req.method==='GET') res.end("HomePage");
//                 break;
//             case "/about":
//                 const username=myUrl.query.myname;
//                 res.end(`Hi ${username}}`);
//                 break;
//             case "/search":
//                 const seach=myUrl.query.search_query;
//                 res.end("Here are your results for " + search);
//                 break;
//             case "/signup":
//                 if (req.method==="GET")  res.end("This is a signup form");
//                 else if (req.method==="POST"){
//                     res.end("success");
//                 }
//             default : 
//                   res.end("Page not found");
//         }
//     });  
// });
// myServer.listen(8080, () => console.log("Server is working"));



// NOW using by express


const http=require("http");
const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    console.log(res);
    return res.send("Hello From Home Page");
})
app.get("/about",(req,res)=>{
    return res.send(`Hello ${req.query.name}`)
})

const myServer=http.createServer(app);
myServer.listen(8060,()=>console.log("Server Started"));
