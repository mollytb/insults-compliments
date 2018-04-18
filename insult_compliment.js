const http = require("http");
// 65535 TCP ports
const PORT1 = 7500;
var meanThings = ["You are dumb!", "You have no class.", "You can't do simple math.", "You're an ugly pile of crap!"];
var server = http.createServer(function(req,res) {
    //process the request and respond
    var mean = meanThings[Math.floor(Math.random()*meanThings.length)];
    res.end(mean)
});
//listen for inbound connections
server.listen(PORT1, function(err){
    if (err){
        console.log.error
    }else{
    console.log("We are now listening on port " + PORT1);
    }
});
const PORT2 = 7000;
var niceThings = ["You are so beautiful!", "You're a hottie!", "You're really smart", "I think your tractor's sexy", "I love your style"];


var server = http.createServer(function(req,res) {
    //process the request and respond
    var nice = niceThings[Math.floor(Math.random()*niceThings.length)];
    res.end(nice)
});
//listen for inbound connections
server.listen(PORT2, function(err){
    if (err){
        console.log.error
    }else{
    console.log("We are now listening on port " + PORT2);
    }
});