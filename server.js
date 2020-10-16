const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const app = express();

app.use(cors());
app.use(bodyParser.json());

var array = new Array()
array.push = function (){
    if (this.length >= 10) {
        this.shift();
    }
    return Array.prototype.push.apply(this,arguments);
}


const server = app.listen(process.env.PORT,function(){
	console.log('app is running on port ${process.env.PORT}');
});

app.use(express.static("public"));

// Socket setup
const io = socket(server);

io.on("connection", function (socket) {
  console.log("Made socket connection");
});

app.get('/',(req,res)=> {
	res.send('this is working');
})

app.post('/calculate',(req,res)=>{
	array.push(req.body.calculation)
	res.send(JSON.stringify(array));
})

app.get('/logs',(req,res)=>{
	res.send(JSON.stringify(array));
})