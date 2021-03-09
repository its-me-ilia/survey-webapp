const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const port = 5000 || process.env.PORT;

console.log('Booting App');
server.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
});