const express = require('express');

const app = express();


app.get('/',(req,res)=>{
res.send('API just started ')
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log('server started on PORT 5000'));