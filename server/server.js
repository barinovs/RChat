var WebSocketServer = new require('ws');

var wss = new WebSocketServer.Server({port: 8088});

if (wss.readyState === 1) console.log('Зопушшен сервер');
console.log(wss._server._connectionKey);

var clients = [];
wss.on('connection', function(ws) {
    var id = clients.length;
    clients[id] = ws;
    // console.log("Новое соединение № " + id);
    clients[id].send("Привет! Ваш идентификатор " + id);
    // console.log(clients);
    for (var key in clients) {
        if(key != id) {
            clients[key].send("К нам присоединился № " + id);
        }
    };
	
	ws.on('message', message => {
		console.log('Получено сообшение ', message);
		for (let key in clients) {
			clients[key].send(message);
		}
		// ws.send(message);
	})
	ws.send('ho!')
	
});

