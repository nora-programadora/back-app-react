const express = require('express')
const router = express.Router()

const usuarios = [
    {
        id:1,
        name: "Emilio",
        lastname: "Sanchez",
        position: "Employee"
    },
    {
        id:2,
        name: "Alan",
        lastname: "Gonzalez",
        position: "Sistem andmin"
    },
    {
        id:3,
        name: "Nora",
        lastname: "Aguirre",
        position: "Developer"
    },
    {
        id:4,
        name: "Emilio",
        lastname: "Sanchez",
        position: "Employee"
    }
]

router.get('/',(req,res) => {
    res.send(usuarios)
})

module.exports = router