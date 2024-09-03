const estudante = require("../controllers/estudante.js")
const livro = require("../controllers/livro.js")

let nextId = 1

const model = (body, id = nextId++) => {

    let data_aluguel = new Date()
    let result = data_aluguel.toISOString().split("T")[0]
    console.log(result)

    let devolucao = new Date()
    let result2 = devolucao.toISOString()
    console.log(result2)

    if (livro.show(body.livro_id) &&
        body.livro_id != undefined &&
        estudante.show(body.estudante_id) &&
        body.estudante_id != undefined &&
        data_aluguel != undefined &&
        data_devolucao != undefined &&
        body.livro_id != "" &&
        body.estudante_id != "" &&
        data_aluguel != "" &&
        data_aluguel != isNaN(data_aluguel) &&
        data_devolucao != "" &&
        data_devolucao != isNaN(data_devolucao)
    ) {
        return {
            id,
            livro_id: body.livro_id,
            estudante_id: body.estudante_id,
            data_aluguel: data_aluguel,
            data_devolucao: data_devolucao
        }
    }
}

module.exports = model