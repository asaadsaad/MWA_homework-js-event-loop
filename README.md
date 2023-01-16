# MWA - Homework
You are in a technical interview for a fullstack engineer position:
1. The first question you will have to answer is explaining JS event loop, clarifying the synchronous and asynchronous parts, queues, priority, with examples. *Write your answer as if it were for a real interview.*

2. The follow up question is how may we convert a sync operation/function to become asynchronous?


# Answers

1) The JavaScript engine executes tasks in a synchronous manner, one at a time. To handle asynchronous tasks, such as user input, network requests, and timers, a mechanism called the event loop is utilized. The event loop is a program within the JavaScript runtime that manages the scheduling and execution of asynchronous tasks. When an asynchronous function, such as setTimeout or Promise, is called, it is added to the message queue. The event loop checks the message queue for new events and adds them to the call stack for execution if the call stack is empty.
There are two types of queues: the microtask queue and the macro-task queue. The event loop ensures that the micro-task queue is processed before the macro-task queue. Microtasks such as Promises are given priority over macro-tasks such as setTimeout or DOM events.


2) We can convert a synchronous operation or function to become asynchronous in JavaScript:

- Using setTimeout/setInterval:
```javascript
console.log("Starting...");
setTimeout(() => {
   var result = 1+2;
   console.log(result); // 3
}, 2000);
console.log("Ending...");

```
- Using Promises:
```javascript
function add(a, b) {
   return new Promise(resolve => {
       setTimeout(function(){
           var result = a + b;
           resolve(result);
       }, 1000);
   });
}

add(1, 2).then(result => {
   console.log(result); // 3
});
```

- Using async/await:

```javascript
 async function add(a, b) {
   var result = await new Promise(resolve => setTimeout(() => resolve(a+b), 1000));
   console.log(result); // 3
  }
 add(1, 2);
```
