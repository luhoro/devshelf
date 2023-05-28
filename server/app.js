const express = require('express')

const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send('Bonjour mademosel babyyyy')
})

app.listen(port, () => {
    console.log(`Hearing the port localhost://${port}`)
})