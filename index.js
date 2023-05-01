const express = require('express')

const app =express();
const port = 5000

app.get('/', (req,res)=>{
    res.send("hello from chef's server")
})

app.listen(5000, ()=>{
    console.log(`my server is running on port: ${port}`)
})