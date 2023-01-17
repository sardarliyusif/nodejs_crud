const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

const users = [
    {id:1, name:'Yusif'},
    {id:2, name:'Veli'},
    {id:3, name:'Ali'},
]

const port = 4000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})