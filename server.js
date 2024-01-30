const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('nlp');
    console.log('---------');
})