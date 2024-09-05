/* Asynchronous programming allows tasks to be executed without blocking the main thread.
 It allows multiple operations to run in the background, so the program can continue executing
  the next lines of code without waiting for these operations to complete */

  /* Non-Blocking: The code does not wait for an operation to complete. It continues running the next lines.
    Concurrent Execution: Multiple tasks can be handled concurrently. Long-running operations can be executed in the background.
    Improves Performance: By not blocking the main thread, asynchronous programming improves the responsiveness 
    and performance of applications, especially in web development. */

    console.log("Start");

    setTimeout(() => {
    console.log("This runs after 2 seconds");
    }, 2000); // Asynchronous operation: runs after 2 seconds

    console.log("End");
