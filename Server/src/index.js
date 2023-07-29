
const PORT = 3001;
const server = require('./app.js')


server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

