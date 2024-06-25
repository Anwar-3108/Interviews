** What is the nature is js ? **

JavaScript is is syncronous single threaded language 

Single threaded means js can only execute one command at a time.

Syncronous Single threaded means it can execute one command at a time and in a specific order.
it can go to the next line once the current line has been finished



** What is Execution Context? **
Execution Context is nothing but like a bigbox && it has two component in it 

the first one  is memory component and the second one is code component 
in the memory component alll the  variable and function are stored as a key value pairs 
and the code component is a place where the code is executed one line at a time  

after memory creating phase program runs again for code execution.

when we call a function another execution context is created inside the global execution context  and allocate the memory and execute the code 

all the things happens in callstack, global execution context is also created in call stack 
call stack  maintains the order of execution of the execution context
 when the whole code is executed the global execution context is deleted from the call stack