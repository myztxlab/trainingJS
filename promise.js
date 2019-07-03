setTimeout(() => {
    console.log("Tick");
  }, 1000);

  const doSomething = function(){  
    return new Promise((resolve, reject) => {    
        /*    
        TODO: try to do something asynchronously    
        and resolve or reject according to    
        operation result.    
        */  
    })
};

// Call doSomething and receive a Promise as return
let doIt = doSomething()

// Wait for the promise to get resolved...
doIt.then(response => {  
    // Use response
})

// ... or to get rejected
doIt.catch(error => {  
    // Deal with error
})

const setTimeoutPromise = (duration) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
});

setTimeoutPromise(3000).then(() => console.log("tick"));

setTimeoutPromise(5000).then(() => console.log("tick"));

