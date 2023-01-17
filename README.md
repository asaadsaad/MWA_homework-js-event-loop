# MWA - Homework
You are in a technical interview for a fullstack engineer position:
1. The first question you will have to answer is explaining JS event loop, clarifying the synchronous and asynchronous parts, queues, priority, with examples. *Write your answer as if it were for a real interview.*

The event loop is endlessly running single-threaded loop that runs on the main JavaScript thread and listens for the different events. Its job is to accept callback functions and execute them on the main thread.
Asynchronous means more than one process running simultaneously. 
Synchronous means one process is executing at a time.
The macrotask queue is a queue of the callback function waiting to be executed. The event loop pushes oldest queued callback functions (FIFO) from macrotask queue on to the main call stack one at the time where they are executed synchronously. Event loop only pushes a callback function to the stack when the stack is empty or when the main thread is not busy.

For example:
console.log(`Start`);
setTimeout(() => { //async
    console.log("1");
    console.log("2");
    console.log("3");
}, 0); 
console.log(`End`);


//output in console will be
//Start
//End
//1
//2
//3

Here in this example, Sychronous operation are executed first that is "Start" is printed. Since settime operation is asynchronous, it will be added to the macro queue after 0 miliseconds. Then, "End" is printed to console as it is synchronous operation. When all synchronous operation are done, and the stack gets empty then the event loop will push the operation inside the setTimeout from queue to the main stack and executes synchronously one at a time. So, "1" ,"2" gets printed respectively.

2. The follow up question is how may we convert a sync operation/function to become asynchronous?

We can convert a sync operation/function to become asynchronous by wrapping the function inside the setTimeout or setInterval functions.
