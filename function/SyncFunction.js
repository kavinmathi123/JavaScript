/* Synchronous programming means that tasks are executed one after the other, in a sequence. 
Each operation must wait for the previous one to complete before it starts. In other words,
 code runs in a blocking manner. */

 /* Blocking: The code execution stops at each step until that step is completed.
    Sequential Execution: Each line of code runs one after another in the order they are written.*/

    console.log("Start");

    function waitForSeconds(seconds) {
    const start = new Date().getTime(); // Get the current time
    while (new Date().getTime() < start + seconds * 1000); // Block the code for specified seconds
    }

    waitForSeconds(3); // This will block the code for 3 seconds

    console.log("End");

    // Start and then During the 3-second wait, nothing else can happen; the code is blocked.
    //End