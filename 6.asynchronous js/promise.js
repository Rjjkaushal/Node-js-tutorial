const promise = new Promise((resolve, reject)=>{
    //start some ASYNC work
    //...
    setTimeout(() => {
        // resolve(1);
        reject(new Error('Error in the message'));
    }, 2000);
});

promise
    .then(result=>{
        console.log("Result is ",result);
    })
    .catch(err=>{
        console.log(err.message);
    })