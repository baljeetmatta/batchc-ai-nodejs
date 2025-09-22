// const EventEmitter=require("events");
// //console.log(events);
// const emitter=new EventEmitter();
// //Raise an event
// emitter.emit("done");

// emitter.on("done",(msg)=>{
//     console.log("Done event occurred ",msg);
// })

// emitter.emit("done",{message:"Hello World",success:true});
//SOLUTION 1
// const EventEmitter=require("events");
// const eventEmitter=new EventEmitter();
// const log=()=>{
//     console.log("Log event occurred");
//     eventEmitter.emit("messageLogged");

// }
// module.exports.log=log;
// module.exports.eventEmitter=eventEmitter;

//solution 2
const EventEmitter=require("events");
class Logger extends EventEmitter{
    log=()=>{
        console.log("Log event occurred");
        this.emit("messageLogged");

    }
}
module.exports=new Logger();




