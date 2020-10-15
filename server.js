const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

var array = new Array()
array.push = function (){
    if (this.length >= 10) {
        this.shift();
    }
    return Array.prototype.push.apply(this,arguments);
}


app.get('/',function(req,res)=> {
	res.send('this is working');
})
app.listen(process.env.PORT|| 8080,()=>{
	console.log('app is running on port ${process.env.PORT}');

})

app.post('/calculate',function(req,res)=>{
	array.push(req.body.calculation)
})

app.get('/logs',function(req,res)=>{
	res.send(array);
})