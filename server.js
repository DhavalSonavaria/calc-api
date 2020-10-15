const express = require('express')
const cors = require('cors')
const app = express();

var array = new Array()
array.push = function (){
    if (this.length >= 10) {
        this.shift();
    }
    return Array.prototype.push.apply(this,arguments);
}

app.use(cors())

app.get('/',(req,res)=> {
	res.send('this is working');
})
app.listen(process.env.PORT|| 8080,()=>{
	console.log('app is running on port ${process.env.PORT}');

})

app.post('/calculate',(req,res)=>{
	array.push(req.body.calculation);
	res.send(array);
})

app.get('/logs',(req,res)=>{
	res.send(array);
})