var http = require('http');
var url = require('url');

var paths = {
  "/api/parsetime": function(parsedUrl) {
    var parsedDate = parseDate(parsedUrl.query.iso);
    return {
      hour: parsedDate.getHours(),
      minute: parsedDate.getMinutes(),
      second: parsedDate.getSeconds()
    };
  },
  "/api/unixtime": function(parsedUrl) {
    var parsedDate = parseDate(parsedUrl.query.iso);
    return {unixtime: parsedDate.getTime()};
  }
}

function parseDate(isoDateString) {
  return new Date(isoDateString);  
}

server = http.createServer(function(req, res) {
  var parsedUrl = url.parse(req.url, true);
  pathHandler = paths[parsedUrl.pathname];
  if (resource) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(resource(parsedUrl)));
  }
  else {
    res.writeHead(404);
    res.end();
  }
});
server.listen(process.argv[2]);

/*
Official:
 var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))

*/