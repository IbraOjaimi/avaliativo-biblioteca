const cep_endereco = require('../middlewares/cep_endereco.js')

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome!= undefined &&
        body.endereco != undefined &&
        body.matricula != undefined &&
        body.curso != undefined &&
        body.ano != undefined &&
        body.nome != "" &&
        body.endereco != "" &&
        body.matricula != "" &&
        body.curso != "" &&
        body.ano != "" &&
        body.ano != isNaN(body.ano)
    ) {
        return {
            id,
            nome: body.nome,
            endereco: body.endereco,
            cep: endereco,
            matricula: body.matricula,
            curso: body.curso,
            ano: body.ano
        }
    }
}

module.exports = model