const express = require('express')
const exphbs=require('express-handlebars')


const path=require('path')
const app = express()
const port = 3000


app.engine('handlebars',exphbs())
app.set("view engine", "handlebars")

app.use(express.static(path.join(__dirname, 'static')))
//middleware..
const blogRouter = require('./routes/blog');
app.use('/', blogRouter);



app.listen(port, () => {
  console.log(`Blog app listening at http://localhost:${port}`)
})