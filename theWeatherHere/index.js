const express = require('express');
const Datastore = require('nedb');
const app = express();
app.listen(3000, () => console.log("I am listening on 3000lalala"));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();
// database.insert()



//from all.html
app.get('/api', (request, response) =>{
    //调取database.sb里的所有东西
    database.find({}, (err, data) => {
        if (err){
            response.end();
            return;
        }
        response.json(data)
    })
  
})




//from index.html
app.post('/api', (request, response)=>{
    console.log("yaya")
    console.log(request.body);
    const data = request.body;
    //在已经返回的信息中加入date.now
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    // console.log(database);
    //发response给index.html
    response.json({
        status: 'success',
        timestamp: timestamp,
        lat: data.lat
    })
})