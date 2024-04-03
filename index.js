
// Importa el módulo http
const http = require('http');
const connectToDatabase = require('./config/bd');

// Crea un servidor HTTP que muestra "Hola Mundo!" en el puerto 3000
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hola Mundo!');
    res.end();
});

connectToDatabase().then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
}).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

// Escucha en el puerto 3000
server.listen(3000, function() {
    console.log('Servidor escuchando en el puerto 3000');
});