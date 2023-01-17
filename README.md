# MWA - Homework
You are in a technical interview for a fullstack engineer position:
1. The first question you will have to answer is explaining JS event loop, clarifying the synchronous and asynchronous parts, queues, priority, with examples. *Write your answer as if it were for a real interview.*
2. The follow up question is how may we convert a sync operation/function to become asynchronous?


# Answers

## Question 1

### JS Event loop

JavaScript event loop is a mechanism that is constantly checking *while(true){...}* if the stack in the execution context is empty then starts to push async functions from the macrotask queue/ callback-task queue to the main call stack one after another and then executed synchronously. It pushes functions only when the stack is empty, i.e when all synchronous functions have finished execution.

### Synchronous v Asynchronous

Synchronous functions are loaded in the global excution context function stack, whereas asynchronous functions are kept in macrotask queue/ callback-task queue waiting for execution. Synchronous execution happens line after line, asynchronous execution can run many processes simultaneously.

### Queues

Macrotask queue and callback-task queue are queues for callback functions waiting for execution.

### Priority

The priority of execution is as dollow:
1. Synchronous functions
2. Asynchronous functions/Promises' functions
3. Timers and Events from the browser.

## Question 2

__1. Using asynchronous operations like Timers__
By setting the timing, a function can be executed asynchronously(in the future), but when it runs it will be synchronous.

```javascript
setTimeout(() => {
    console.log('Do something.')
}, 1000)
console.log('Hello world!')
```
__2. Move the function inside another that you run as child and communicate back the result(Not recommended)__

```javascript
function fx(callback){
    setTimeout(() => {
        console.log('Inside fx');
        callback();
    }, 1000);
}
fx(() => console.log('fx Done!'))
```

__3. Using Promises__

A promise is an object that gives us a value in the future. Everything in a promise object runs synchronously except resolve and reject parts. Promise functions are pushed to microtask queue instead of macrotask queue.

```javascript
const downloadFile = () =>{
    return new Promise((resolve, reject) => {
        console.log('Downloading in progress...');
        resolve('5MB Downloaded.');
    })
}

console.log('Do something else...')
downloadFile()
.then(() => console.log('File downloaded successfully'))
console.log('Keep doing something else..')
```

__4. Using async ... await along with fetch API__

```javascript
console.log('Start...')
fetch('https://endpoi.nt/api/customers/1')
.then(async response => {
    const result = await response.json()
    return result
})
.then(data => console.log(data))
console.log('End...')
```

