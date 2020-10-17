const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


var array = new Array()
array.push = function (){
    if (this.length >= 10) {
        this.shift();
    }
    return Array.prototype.push.apply(this,arguments);
}

app.get('/', (req, res) => {
  res.send("Running");
});


io.on('connection',(socket)=>{
	console.log('a user connected');
});

http.listen(process.env.PORT, () => {
  console.log('listening on ${process.env.PORT}');
});