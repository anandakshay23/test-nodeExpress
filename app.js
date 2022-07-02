const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(req);   
    res.write("This is a code to write");
    res.end();
})

server.listen(5050);