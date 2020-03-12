const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const dist = express.static(path.join(__dirname, 'dist'));
app.use('/dist', dist)

app.get('/', (req, res, next)=>{
 res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, ()=>console.log(`listening on port: ${PORT}`))