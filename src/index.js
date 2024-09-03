const express = require('express')
const aluguel_router = require('../routers/aluguel.js')
const estudante_router = require('../routers/estudante.js')
const livro_router = require('../routers/livro.js')

const app = express()
const port = 5000

app.use(express.json())
app.use('/alguel', aluguel_router)
app.use('/estudante', estudante_router)
app.use('/livro', livro_router)

app.listen(port, () =>(
    console.log(`Server running in ${port} port`)
))