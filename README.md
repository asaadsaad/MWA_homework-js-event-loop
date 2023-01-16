# MWA - Homework

You are in a technical interview for a fullstack engineer position:

1. The first question you will have to answer is explaining JS event loop, clarifying the synchronous and asynchronous parts, queues, priority, with examples. _Write your answer as if it were for a real interview._

- The Js event loop is a while loop that is used to bring an async code from the macro queue and push it in to the execution context stack in the javascript engine.
  The event loop is paused until all synchronous code execution is completed or the javascript engine execution context stack is empty, then it begins its work.

- Javascript execution engine is not asynchronous by itself but it has an additional web api that handles the execution of javascript code asynchronously or in a scheduled manner and all asynchronous code is executed after finishing the execution of all synchronous code.

  e.g console.log(“Hello”) // synchronous
  setTimeout(()=>{ console.log(“Hello”)}, 0) //asynchronous

- There are two kinds of queues to store asynchronous code in javascript the Micro task queue which is handled and implemented right in the v8 engine, has a high priority from all the other queue and used to store promise based asynchronous code.
  e.g const promise = new Promise((resolve, reject)=>{
  resolve(“Promise result”)
  })

  const result = promise.then(data =>{return data}) // async code stored in micro task queue

- The second queue is known us the Macro task queue which is handled outside the js execution environment, uses the event loop to unquote asynchronous code and push it to the execution context, has low priority compared to the micro task queue and is used to store non promise based asynchronous code such us setTimeout() and setInterval()

  e.g setTimeout(()=>{ console.log(“Hello”)}, 0) //asynchronous code stored in macro task queue

2. The follow up question is how may we convert a sync operation/function to become asynchronous?

- There are many ways to convert a synchronous code in javascript to be executed asynchronously. The first and easies way its to place the code inside a setTimeout() callback method
  e.g console.log(“Hello”) // synchronous
  setTimeout(()=>{ console.log(“Hello”)}, 0) //asynchronous
- The second method is using a promise and wrapping the code we want to execute inside a promises resolve method
  e.g console.log(“Hello”) //synchronous
  const promise = new Promise((resolve, reject)=>{
  resolve(“Hello”)
  })

  promise.then(data => console.log(data)) // async code
