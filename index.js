
var  express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'))

app.get('/index.html', function(req, res){
 res.status(200).send('hola mundo desde una ruta')
});


var mensajes =[{
    id: 1,
    tex: 'bienvenido al chat de belu',
    nickname: 'Bel Ramone'
}];

io.on('connection', function(socket){
    console.log("el cliente con la IP:" + socket.handshake.addres+" se a conectado ...");

    socket.emit('mensajes', mensajes);

   socket.on('AddMensajes', function(data){
       mensajes.push(data);

       io.socket.emit('mensajes' , mensajes);
   });
});

server.listen(6680, function(){ 
 console.log(` servidor esta funcionando en http://localhost:6680`)
 
});


