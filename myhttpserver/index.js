const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(req, res){
  // console.log(req.url);
  res.writeHead(200, {'content-type': 'text/html'});

  let filepath;

  switch(req.url){
    case '/': 
            filepath="index.html";
            break;
    case '/profile':
            filepath="profile.html";
            break;
    default:
            filepath="404.html";
  }

  fs.readFile(filepath, function(err,data){
    if(err){
      return console.log("err:", err);
    }
    return res.end(data);
  })

}


const server = http.createServer(requestHandler);

server.listen(port,function(err){
   if(err){
    console.log(err);
    return;
   }

   console.log("Server is up and running on port: ", port);
 });