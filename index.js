const express = require('express')
const routes_items = require('./Routes/items')

const app = express()

app.use(express.json())

app.use('/items',routes_items)

app.get("/",(req,res)=>{
    res.send("welkom op mijn <i>pagina</i>")
})

app.listen(3000,()=>console.log("server is running on port 3000"))