const Emitter= require('events');

class Logger extends Emitter{
    sayHello(name){
        console.log("hi, my name is "+ name);
        this.emit('messagelogged',{id:1, url:"http://hi"});
    }
}


module.exports.sayHello = Logger;