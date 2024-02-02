const http = require('http');     //requere a função http disponivel no JS
const express = require('express');     // framework "express"
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);      //cria o servidor com a função http, com o framework
const io = require('socket.io')(servidorHttp); // traz as funcionalidades do socket, e aplica no servidorHttp

io.addListener('connection', (socket) => {
    console.log('um usuário conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg)
    })
})

aplicacao.use(express.static('public'));   //aplicacao pode usar os recursos estaticos que estão na pasta public


servidorHttp.listen(1000, /*'endereço IPv4'*/);     //usa uma porta (a porta 1000) da placa de rede, pra armazenar o servidor