const [fs, url, path, http] = [require('fs'), require('url'), require('path'), require('http')];

const root = path.resolve(process.argv[2] || '.');

console.log(`static root dir: ${root}`);

const server = http.createServer((request, response) => {
    const pathname = url.parse(request.url).pathname;
    const filepath = path.join(root, pathname);
    fs.stat(filepath, (err, stats) => {
        if (!err && stats.isFile()) {
            console.log(`200 ${request.url}`);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
            console.log(`404 ${request.url}`);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    })
})

server.listen(3000);

console.log('Server is running at http://127.0.0.1:3000/index.html');