const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/photo/:name', (req, res) => {
  const { name } = req.params

  if (name == "Ep") {
    res.send({ 'photo': 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160927_220%2F1004vuddks_1474988312840v2zMJ_JPEG%2F%25BF%25A1%25BA%25A3%25BC%25D2%25B1%25B3%25C8%25B8.jpg&type=sc960_832' })

  } else if (name == "Sm") {
    res.send({ 'photo': 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120716_124%2Fpastorum_134239126515599cN5_JPEG%2FS-%25BC%25AD%25B8%25D3%25B3%25AA%25B1%25B3%25C8%25B86.jpg&type=sc960_832' })

  } else if (name == "Pe") {
    res.send({ 'photo': 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMDhfMjA0%2FMDAxNjA3MzY5ODEwMzQ1.4Ce5ekkePRLjjtJaKaGyRNhVDH9gIx_qntYxm9LyDZEg.3SNg6zwx6LHoZyRqhGRm80M0Gsysg6XjDMywZIKAPJQg.JPEG.dgch3%2F%25B4%25D9%25BF%25EE%25B7%25CE%25B5%25E5.jpeg%25A3%25AD1.jpg&type=sc960_832' })

  } else if (name == "Th") {
    res.send({ 'photo': 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA5MTJfNDQg%2FMDAxNTk5OTAxNTExNjUw.IwzjL08jMfL0T3cR-RuFpP5va8kbLWhKjhK9FY7Ow9og.mY9AGEfETaJEwtZ-4DwGp6iAq2XzajUUcce8gkt1DDgg.JPEG.ain1225%2FSAM_1285.JPG&type=sc960_832' })

  } else if (name == "Sa") {
    res.send({ 'photo': 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20120806_267%2Freformer0301_13442589719583HR4j_JPEG%2F20120710_095817.jpg&type=sc960_832' })

  } else if (name == "Ph") {
    res.send({ 'photo': 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA0MjRfMzYg%2FMDAxNTg3Njg2NDEyMTgy.1A7RNZaEwaz0yrRGcJo8o4-CvYw_M5U1QsJ9-BcKyjUg.18HRxtupqKa1Ihk8DszZwN4aNhEb_-LhD5vhlpYgYrcg.PNG.dldpehd%2F3.png&type=sc960_832' })

  } else if (name == "La") {
    res.send({ 'photo': 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160927_298%2Fkim7323737_1474986907560ORdtW_PNG%2F%25B6%25F3%25BF%25C0%25B5%25F0%25B0%25D4%25BE%25C6%25B1%25B3%25C8%25B8.png&type=sc960_832' })

  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})