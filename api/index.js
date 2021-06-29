const express = require("express")
const bodyParser = require("body-parser")
const config = require('config')
const NaoEncontrado = require('./erros/NaoEncontrado')

const app = express()

app.use(bodyParser.json())

const roteador = require('./rotas/fornecedores')
app.use('/api/fornecedores', roteador)

app.use((erro, requisicao, resposta, proximo)=>{
    if (erro instanceof NaoEncontrado) {
        resposta.status(404)
    }else{
        resposta.status(400)
    }
    resposta.send(
        JSON.stringify({
            mensagem: erro.menssage,
            id: erro.idErro
        })
    )
})

app.listen(config.get('api.porta'), ()=>{
    console.log("Servidor funcionando !")
})