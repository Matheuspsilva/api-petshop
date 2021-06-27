const Modelo = require('./ModeloTabelaFornecedor')

module.exports = {
    listar(){
        return Modelo.findAll()
    },
    inserir(fornecedor){
        return Modelo.create(fornecedor)
    },
    async findById(id){
        const fornecedorEncontrado = await Modelo.findOne({
            where: {
                id: id
            }
        })
        if (!fornecedorEncontrado) {
            throw new Error("Fornecedor não encontrado")
        }
        return fornecedorEncontrado
    }, 
    atualizar(id, dadosParaAtualizar){
        return Modelo.update(
            dadosParaAtualizar,
            {
                where: { id: id }
            }
        )
    }
}