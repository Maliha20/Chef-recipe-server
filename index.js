const express = require('express')

const app =express();
const port = 5000
const cors =require('cors')

const chef = require('./data/chef.json')


app.use(cors())
app.get('/chef', (req,res)=>{
    res.send(chef)

})

app.get('/chef/:id', (req,res)=>{
    const id = req.params.id;
    const selectedChef = chef.find(p=> p.id === id)
    res.send(selectedChef)
    console.log(id)
})

app.get('/', (req,res)=>{
    res.send("hello from chef's server")
})

app.listen(5000, ()=>{
    console.log(`my server is running on port: ${port}`)
})