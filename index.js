const express = require('express')
const app = express()
const port = 3023

let playersTable = {}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/update', (req, res) => {
    let data = req.body.data
    let playerId = data.playerId
    playersTable[`${playerId}`].Location = data.playerLocation
    res.send(200)
})

app.get('/request', (req, res) => {
    res.send(playersTable)
})

app.listen(port, (e) => {
    if (e) throw e;
    console.log(`Player Limit API :: Listening on port ${port}`)
})