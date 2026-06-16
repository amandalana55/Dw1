const express = require('express')
const multer = require('multer')
const path = require('path')

const app = express()

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname))
    }

})

const upload = multer({ storage: storage })

app.post('/aluno', upload.single('foto'), (req, res) => {

    const { ra, nome, nota1, nota2, nota3, nota4 } = req.body

    const media =
        (
            Number(nota1) +
            Number(nota2) +
            Number(nota3) +
            Number(nota4)
        ) / 4

    let situacao

    if (media >= 6) {
        situacao = 'Aprovado'
    } else {
        situacao = 'Reprovado'
    }

    res.send(`
        Nome: ${nome} <br>
        Média: ${media.toFixed(2)} <br>
        Situação: ${situacao}
    `)

})

app.listen(3000, () => {
    console.log('Servidor rodando')
})