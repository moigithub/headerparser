// header parser
// {"ipaddress":"190.42.142.248","language":"en-US","software":"Windows NT 6.3; WOW64"}
// return ipaddress, language, Operative system client info

var express = require('express');
var path = require('path');

var app = express();
var server = require('http').createServer(app);

app.use(express.static(path.resolve(__dirname, 'public')));


 app.get("/api/whoami",function(req, res) {
   var data = {
     "ipaddress": req.headers["x-forwarded-for"],
     "language": req.headers["accept-language"].split(";")[0],
     "software": req.headers["user-agent"].match(/\(([^)]+)\)/)[1]
   }
      res.send(JSON.stringify(data));
      //console.log(JSON.stringify(data))
    });



server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("server on");
});
