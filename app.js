
const express= require('express');

const app= express();

// Conexao com BD MySQL
const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : '.....',
    password : '#####',
    database : 'vvvvv'
  });

//INSERINDO ELEMENTOS NO BANCO
connection.connect(function(err){
    if(err) console.error("Erro ao realizar a conexão!" + err.stack); return;
});

//INSERT INTO
connection.query("INSERT INTO users () VALUES ()", function(err, result){
    if(!err){
        console.log("Usuario cadastrado!")
    } else{
        console.log("Erro ao cadastrar o usuario!")
    }
})

//UPDATE
connection.query("UPDATE [] SET nome = [] WHERE id = []", 
function(err, result){
    if(!err){
        console.log("Usuario editado com sucesso!")
    } else{
        console.log("Erro: O usuario não foi editado com sucesso!")
    }
})

//DELETE
connection.query("DELETE FROM [] WHERE id = []", 
function(err, result){
    if(!err){
        console.log("Usuario excluido com sucesso!")
    } else{
        console.log("Erro: O usuario não foi excluido com sucesso!")
    }
})

//Tabela users
connection.query('SELECT * FROM []', function(err, rows, fields){
    if(!err){
        console.log("Resultado: ", rows);
    }else{
        console.log("Erro ao realizar a consulta!");
    }
});

// Rotas
app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html");
//#dirname# |C:\Users\....\....\...\....\Rotas| #dirname# |/src/index.html|
})

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/src/contato.html");
})

app.get("/apresentacao", function(req, res){
    res.sendFile(__dirname + "/src/apresentacao.html");
})

//localhost: 8080
app.listen(8080)