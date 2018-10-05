const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const express = require('express')
const app = express()

//
const port = 3000
var x, y, z;
var url = 'https://www.overpass-api.de/api/interpreter?data=[out:json];node[tourism~hotel](around:'

app.post('/get/:x/:y/:z', (req, res) => {
  x = req.params.x;
  y = req.params.y;
  z = req.params.z;
  url += x+','+y+','+z+');out%20meta;';
  let Httpreq = new XMLHttpRequest(); // a new request
  Httpreq.open("GET",url,false);
  Httpreq.send(null);
  let letresponse =  JSON.parse(Httpreq.responseText);
  res.send({ message: letresponse });
});

app.post('/create', (req, res) => {
  res.send({ message: 'Post request' });
})

app.put('/update', (req, res) => {
  res.send({ message: 'Put request' });
})

app.delete('/delete', (req, res) => {
  res.send({ message: 'Delete request' });
})

app.listen(port, () => {
  console.log('Example app listening on port ' + port)
})
