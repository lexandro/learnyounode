var net = require('net')
var server = net.createServer(function (socket) {
	socket.end(getDate() + '\n');
});

server.listen(process.argv[2]);

/*
*/
function getDate()  {
	var date = new Date();
    var result = date.getFullYear();
    result += "-" + pad(date.getMonth()+1);
    result += "-" + pad(date.getDate());
    result += " " + pad(date.getHours());
    result += ":" + pad(date.getMinutes());
	return result;
}
    
function pad(number) {
   	return (number < 10 ? '0' : '') + number;
}