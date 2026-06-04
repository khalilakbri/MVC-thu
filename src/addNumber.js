
// always put the promise inside a function
const addNumber = (a,b)=>{
    
    const mypromise = new Promise((resolve,reject)=>{
        // heavy task here
        if(typeof(a)=="number" && typeof(b)=="number"){
            resolve(a+b)
        }else{
            reject("Please provide only numbers")
        }
    })
    return mypromise
}

export {addNumber}