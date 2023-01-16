# MWA - Homework
You are in a technical interview for a fullstack engineer position:
1. The first question you will have to answer is explaining JS event loop, clarifying the synchronous and asynchronous parts, queues, priority, with examples. *Write your answer as if it were for a real interview.*
2. The follow up question is how may we convert a sync operation/function to become asynchronous?

Answer
1. 
-	JS event loop is a single-threaded loop that watches the call stack and checks if there's any code to run in the task queue. If it is empty, then it pushes callback function from microtask to the main stack to be executed.
-	Asynchronous means more than one process running simultaneously whereas Synchronous means one process is executing at a time.
-	Macro task Queues are queues that are not part of the JavaScript engine but added by the web API to extend the JavaScript feature and has least priority
-	Micro task queues used for promises and have priority after the synchronous functions and it is part of JavaScript engine
Example

2. 
Sync functions can be converted to asynchronous functions by wrapping the codes in the timers, converting callback function to Async/await function, and using promises that has resolved or rejected state

