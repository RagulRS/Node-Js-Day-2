import http from 'http';

//creating a basic server
const server = http.createServer((req, res) => {
    res.end("Hii all, Iam Creating a basic server...");
});

const port = 8000;
server.listen(port, ()=>{
    console.log(Date().toString(),": server listineng on", port);
});