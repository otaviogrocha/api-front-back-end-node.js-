const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors()) 

app.get('/', async function(req, res){
    

    try {
        const {data} = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data)
        return res.json(data)
    } catch (error) {
        console.error(error)
    }
    
    // return res.json([
    //     { name: 'Otávio'},
    //     { name: 'Ricardo'},
    //     { name: 'Diego'}
    // ])

})

app.listen('4567')
