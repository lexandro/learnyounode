var http = require('http');
var done = 0;
var result=[];
//
function httpGet(index) {
	http.get(process.argv[index+2], function (response) {
		response.setEncoding('utf8');		
		// reset data
		result[index]="";
      	response.on('data', function(data) {
      		result[index]+=data;
      	});
      	response.on('end', function(){      		
 			done++;
 			if (done == 3) {
 				printData();
			}
 			
      	});
	  });
}

function printData(){
	for (var i=0;i<3;i++) {
		console.log(result[i]);
	}
};

for (var i = 0; i < 3; i++) {
   	httpGet(i);
}



/*
 var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
    
          results[index] = data.toString()
          count++
    
          if (count == 3)
            printResults()
        }))
      })
    }
    
    for (var i = 0; i < 3; i++)
      httpGet(i)
*/