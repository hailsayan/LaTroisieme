const express = require('express');
const users = require('./models/users');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res)=>{
    res.json({
        data: users,
        message: 'ok'
    });
});

app.get('/api/users/:id', (req, res)=>{
    const user = users.find((u) => u.id === parseInt(req.params.id)); //u.id == req.params.id);
    if(!user) return res.status(404).json({ data: null, meassage: '404 not found' })
    res.json({
        data: user,
        message: 'ok'
    });
});

app.post('/api/users', (req, res)=>{
    users.push({id: users.length + 1, ...req.body});
    res.json({
        data: users,
        message: 'ok'
    });
});

const port = process.env.PORT || 3000;
app.listen(3000, ()=>{
    console.log(`listening on port ${port}`);
});