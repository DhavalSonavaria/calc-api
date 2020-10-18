const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

//limit queue
var array = new Array()
array.push = function (){
    if (this.length >= 10) {
        this.shift();
    }
    return Array.prototype.push.apply(this,arguments);
}
//server check
app.get('/', (req, res) => {
  res.send("Running");
});

//connect and broadcast
io.on('connection',(socket)=>{

	socket.emit('connection',JSON.stringify(array))
	socket.on('calculation',(calc)=>{
		array.push(calc);
		io.emit('calculation',JSON.stringify(array));
	})
});


//console check
http.listen(process.env.PORT, () => {
  console.log('listening on ${process.env.PORT}');
});