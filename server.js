const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
var array = new Array()
array.push = function (){
    if (this.length >= 10) {
        this.shift();
    }
    return Array.prototype.push.apply(this,arguments);
}



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