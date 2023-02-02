var socket = io.connect('http://localhost:6680',{ forceNew: true });

socket.on('mensajes', function(data){
console.log(data);
render(data);
});

function render (data){
    var html = data.map(function(mensajes, index){
        return (`
        <div id="mensajes">
        <strong>${mensajes.nickname}</strong>
        <p>${mensajes.text}</p>
        </div>
        `);
}).join('');
      var div_mensajes = document.getElementById('mensajes').innerHTML = html;
      div_mensajes.innerHTML = html;
      div_mensajes.scrollop = div_mensajesScrol
    }

    function AddMensajes(e) {
        var mensajes = {
            nickname: document.getElementById('nickname').value,
            text: document.getElementById('text').value

        };

        document.getElementById('nickname').style.display = 'none';
        socket.emit('AddMensaje', mensajes);
        return false;     
        
}