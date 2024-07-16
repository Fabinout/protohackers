const net = require('net');

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.setEncoding(null);

    socket.on('data', (data) => {
        console.log(data.length);
        console.log(`Données recues : ${data}`);
        socket.write(data);
    });

    socket.on('end', () => {
        console.log(`Le client arrête d'envoyer des données`);
        socket.end();
    });

    socket.on('finish', () => {
        console.log(`Fini de traiter les données`);
        socket.end();
    });

    socket.on('error', (err) => {
        console.error(`Erreur de socket : ${err}`);
    });
});

server.maxConnections = 5;

// 1871 La Commune
const PORT = 1871;
server.listen(PORT, () => {
    console.log(`Le serveur écoute sur ${PORT}`);
});

server.on('error', (err) => {
    console.error(`Erreur Serveur: ${err}`);
    server.close();
});

