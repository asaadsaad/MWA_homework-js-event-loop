# MWA - Homework
You are in a technical interview for a fullstack engineer position:
1. The first question you will have to answer is explaining JS event loop, clarifying the synchronous and asynchronous parts, queues, priority, with examples. *Write your answer as if it were for a real interview.*
2. The follow up question is how may we convert a sync operation/function to become asynchronous?


# Solution

### Question 1

Although javaScript is single-threaded, outside the Javascript engine, we use the concept of an event loop to handle async code. This allows us to perform non-blocking tasks such as setTimeout, http requests etc. The event loop is a continuous loop that checks the event queue for new events (functions) to process. 

The event loop starts by executing the synchronous code on the main thread. Once the synchronous code is finished and the main thread is free, it looks at the macro task queue and adds the function in the queue using FIFO rule and starts it's execution by putting it on the main thread stack. The macro task queue is mainly for tasks such as timers (setTimeout, setInterval, etc).

On the other hand, there is another queue maintiained by the javascript engine itself called the micro task queue. The micro task queue is reserved for function calls that came from promises and they are given priority over the function calls on the macro task queue.

For Example,

        const promise = new Promise((resolve, reject) => {
            resolve('Promise result')
        });

        setTimeout(() => { 
            console.log("Set Timeout")
        }, 0);

        promise.then((result) => {
            console.log(result);
        })

Expected Result

        Promise result
        Set Timeout

The promise is given priority because it was stored on the high priority queue (called micro task queue) while the setTimeout was stored on the lower priority queue (call macro task queue).


### Question 2


There are a few different ways of change synchronous operation to asynchronous

1. using the setTimeout() or setInterval() function to schedule the synchronous code to run at a later time. 

2. using Promises, which allow us to run synchronous code in a separate thread and provide a callback function to handle the result.

3. using async/await, which are basically a better syntax for promises



