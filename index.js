const fs = require('fs');
const http = require('http');
const path = require('path');
const PORT = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        fs.readFile(path.join(__dirname, 'public', "index.html"), 'utf-8', (err, data) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type':"text/html"});
            res.end(data);
        })
    }
    else if(req.url === "/about"|| req.url==="/about.html"){
        fs.readFile(path.join(__dirname, "public", "about.html"), "utf-8", (err, data) => {
            if(err) throw err;
            res.writeHead(200, {"Content-Type":"text/html"});
            res.write(data);
            res.end();
        })
    }
    else if(req.url==="/contact" || req.url==="/contact.html"){
        fs.readFile(path.join(path.dirname(__filename), 'public', "contact.html"), "utf-8", (err, data)=>{
            if(err) throw err;
            res.writeHead(301, {"Location":"https://proankush.github.io/business-card-app/"});
            res.end();
        })
    }else if(path.extname(req.url) ===".css"){
        console.log(req.url);
        fs.readFile(path.join(__dirname, 'public', req.url), 'utf-8', (err, data) => {
            if(err) throw err;
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(data);
        })
    }
    else{
        fs.readFile(path.join(__dirname, "public", "fourOfour.html"), "utf-8", (err, data)=>{
            if(err) throw err;
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end(data);
        });
    }
});


server.listen(PORT, ()=>{
    console.log(`Server started on port: ${PORT}`);
})