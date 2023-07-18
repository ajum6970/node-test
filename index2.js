const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/sound/:name', (req, res) => {
    const { name } = req.params

    if (name == "dog") {
        res.send({ 'sound': '멍멍' })

    } else if (name == "cat") {
        res.send({ 'sound': '야옹' })

    } else if (name == "pig") {
        res.send({ 'sound': '꿀꿀' })

    } else if (name == "cow") {
        res.send({ 'sound': '음매' })

    } else if (name == "fox") {
        res.send({ 'sound': '앍호로로로로' })

    } else {
        res.send({ 'sound': '알수없음' })
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})