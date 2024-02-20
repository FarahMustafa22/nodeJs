/*console.log("hi")
const http = require('http')

http.createServer(function(req, res)

{
    res.end("Hello from my server")
}).listen(7000)

console.log("start server")*/

const express =require('express')
var app = express()



app.get("/",function(req,res)
{
    res.send("start server")
   
})

function fact(t)
{
    for(let i = t-1 ; i>=1 ; i--)
    {
        t*=i
        
    }
    return t;

}


 app.get('/fact/:num' ,function(req,res)
 {
    var num = parseInt(req.params.num);
    var result = fact(num);
   res.json("factorial is : " + result )
   
 })


 

 function multi(t)
{
    let multiTable = [];

    for(let i = 0 ; i<=10 ; i++)
    {
       
        multiTable.push(i * t); 

    }
    return multiTable;

}

app.get('/multi/:num' ,function(req,res)
 {
    var num = parseInt(req.params.num);
    var result = multi(num);
   res.json("Multiplication table is : " + result )
   
   
 })

 function comSum(t)
{
    for(let i = t-1 ; i>=1 ; i--)
    {
        t+=i
        
    }
    return t;

}

app.get('/sum/:num' ,function(req,res)
 {
    var num = parseInt(req.params.num);
    var result = comSum(num);
   res.json("Multiplication table is : " + result )
   
   
 })


 function fib(n) 
{ 
if (n <= 1) 
{
    return n
}
else
{
return fib(n-1) + fib(n-2) 
}
} 

app.get('/fib/:num' ,function(req,res)
 {
    var num = parseInt(req.params.num);
    var result = fib(num);
   res.json("Multiplication table is : " + result )
   
   
 })

 function reverse(word)
{
    word = word.toLowerCase();
    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;

}

app.get('/reverse/:word' ,function(req,res)
 {
    var w = req.params.word;
    var result = reverse(w);
   res.json("Multiplication table is : " + result )
   
   
 })



var server = app.listen(7000,function()
{
    var host = server.address().address//local one
    var port = server.address().port
})