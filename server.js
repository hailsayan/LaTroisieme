const express = require('express');
const users = require('./models/users');
const app = express();

app.get('/api/users', (req, res)=>{
    res.json({
        data: users,
        message: 'ok'
    });
})

const port = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`listening on port ${port}`);
});