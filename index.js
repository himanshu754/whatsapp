const express = require("express")
const path = require('path')

const app = express();

app.use('/css', express.static(path.join(__dirname, '/css')))
app.use('/js', express.static(path.join(__dirname, '/js')))
app.use('/img', express.static(path.join(__dirname, '/img')))
 app.use('/bootstrap', express.static(path.join(__dirname, '/bootstrap')))
 app.use('/bootstrap', express.static(path.join(__dirname, '/bootstrap/css')))
 app.use('/bootstrap', express.static(path.join(__dirname, '/bootstrap/js')))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
});

app.listen(5000, () => {
  console.log('Listening on port ' + 5000);
});


// const http = require('http')
// const fs = require('fs');
// const port =8000;
//  const fileContent = fs.readFileSync('index.html')

//  const server = http.createServer((req,res)=>{
//    res.writeHead(200, {'content-type':'text/html'});
//    res.end(fileContent)
//  })
// server.listen(process.env.PORT || port, () => console.log('Listening at 8000'));
