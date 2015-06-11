var http = require('http');
var bl = require('bl');
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      var result = "";
      response.on('data', function(data) {
      	result+=data;
      });
      response.on('end', function(){
 		console.log(result.length);
    	console.log(result);
      });
    })
/*
Official: 
    var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))  
    })

*/