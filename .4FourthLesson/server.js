const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set header content type


    //res.setHeader('Content-Type', 'text/html');
    
    //res.write('<head><link rel ="stylesheet" href ="#"></head>');
    //res.write('<p>Hello, mythos.</p>');
    //res.write('<p>Hello again, mythos.</p>');
    //res.end();


    
    res.setHeader('Content-Type', 'text/html');
    
    let path = './views/';//to switch what html file gets displayed
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': //redirect
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    //send HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});