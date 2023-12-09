import http from "http";


import {generateLovePercent} from "./features.js";
console.log(generateLovePercent());

const server = http.createServer((req, res)=>{
    if(req.url === "/about"){
        res.end(`<h1>Love is ${generateLovePercent()} </h1>`);
    } else {
        res.end("<h1> Page Not Found </h1>");
    }
});

server.listen(5000,()=>{
    console.log("server is working");
});
