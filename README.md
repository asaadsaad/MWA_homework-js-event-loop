# MWA - Homework
You are in a technical interview for a fullstack engineer position:
1. The first question you will have to answer is explaining JS event loop, clarifying the synchronous and asynchronous parts, queues, priority, with examples. *Write your answer as if it were for a real interview.*
2. The follow up question is how may we convert a sync operation/function to become asynchronous?



# Answers

## 1.
Inorder to explain the JS event loop, some points must clearly be explained first.

### Stack
Stack is the location in memory where functions are called. The order of operations is important in the stack; events and functions are executed in such an order.

### Heap
Heap is a location in memory(usually large) where the order doesnt matter and objects are located and saved in the heap memory.

### Synchronous Events
are functions that are executed in order and line by line. One line must fully be executed before proceeding to the next line. JS is originally a synchronous language and the asynchronous part has been added for more functionality using web apis.

### Asynchronous Events
is an important functionality where some events are initiated as promise and the compiler proceeds to next line until the promise provides some result, which may be a resolve or reject. The resolve and reject parts of a promise are the only asynchronous executions. multiple processes are running in asynchronous

### Queue(Macro Tasks Queue)
js runtime uses queue to execute call back functions. Call back functions are put in the queue in order and wait for the event loop to call them.

### Event Loop
Now that we have talked about these important terms, we can see how the event loop works. As its name denotes, the event loop is just a while loop that doesnt execute the queued functions while the stack is not empty. 

### MicroTasks Queue
As previously explained, the macro tasks queue is not part of V8 engine but rather a functionality added using web apis. Micro Tasks queue on the otherhand, is part of V8 engine and queues promises, and gives more priority to promises after synchronous functions.

### Example Code
```
1 const promise = new Promise((resolve, reject) => {
2   console.log(`Promise starts`);
3   resolve(`Promise result`);
4   console.log(`Promise ends`);
5  });
6  console.log(`Code starts`);
7  promise.then(console.log);
8  console.log(`Code ends`);

```

The above code contains synchronous and asynchronous events. The code inside promise is generally synchronous except for the resolve part. So the order of the lines executed is:

#### Output
```
Promise starts
Promise ends
Code starts
Code ends
Promise result
```

## 2.
A synchronous function may be converted to asynchronous function in several ways. One way would be wrapping your code inside a promise. Another way would be using call back functions to run your code and wrapping them in asynchronous functions such as setTimeout().


