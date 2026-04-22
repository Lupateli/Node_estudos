const http = require('http')

const port = 8080;

const server = http.createServer((req, res) =>{
    if(req.url === '/home'){
        res.writeHead(200, { "content-type": "text/html"});
        res.end("<h1>home page</h1>");
    }

    if(req.url === "/users"){
        const  users = [
            {
                name: "Joao pao",
                email: "jpap@pao.com"
            },
            {
                name: "Maria pao",
                email: "Maria@pao.com"
            }
        ];
        
        res.writeHead(200, { "content-type": "application/json"});
        res.end(JASON.stringfy(users));
    }
})

server.listen(port, () => console.log(`Rodando na porta ${port}!`));