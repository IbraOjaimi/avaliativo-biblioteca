let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.titulo!= undefined &&
        body.autor != undefined &&
        body.matricula != undefined &&
        body.genero != undefined &&
        body.ano != undefined &&
        body.titulo != "" &&
        body.autor != "" &&
        body.matricula != "" &&
        body.genero != "" &&
        body.ano != "" &&
        body.ano != isNaN(body.ano)
    ) {
        return {
            id,
            titulo: body.titulo,
            autor: body.autor,
            matricula: body.matricula,
            genero: body.genero,
            ano: body.ano
        }
    }
}

module.exports = model