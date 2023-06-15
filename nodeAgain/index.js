const express = require('express');
const app = express();
app.listen(3000, () => console.log("I am listening on 3000lalala"));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

const database = [];

app.post('/api', (request, response)=>{
    console.log("yaya")
    console.log(request.body);
    const data = request.body;
    database.push(data);
    console.log(database);
    //发response给index。html
    response.json({
        status: 'success',
        lat: data.lat
    })
})