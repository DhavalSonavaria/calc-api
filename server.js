const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://dhavalsonavaria.github.io"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
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