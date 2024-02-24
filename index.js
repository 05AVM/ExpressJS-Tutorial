const express = require('express')
const path=require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
//middleware..
app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' +reqp.arams.name)
})

app.get('/about', (req, res) => {
    //res.send('ABOUT!')
    res.sendFile(path.join(__dirname,'index.html'));
    res.status(500);
    res.json({"avishek":0o5})
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})