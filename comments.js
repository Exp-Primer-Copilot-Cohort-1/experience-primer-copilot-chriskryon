// Create web server
// Importa o módulo HTTP
const http = require('http');

// Cria o servidor
const server = http.createServer((req, res) => {
    // Define o status da resposta como 200 (OK)
    res.statusCode = 200;
    
    // Define o tipo de conteúdo da resposta como texto simples
    res.setHeader('Content-Type', 'text/plain');
    
    // Envia a resposta com a mensagem "Olá, Mundo!"
    res.end('Olá, Mundo!\n');
});

// Faz o servidor escutar na porta 3000 e no endereço IP 127.0.0.1
server.listen(3000, '127.0.0.1', () => {
    // Imprime uma mensagem no console quando o servidor começa a escutar
    console.log('Servidor rodando em http://127.0.0.1:3000/');
});