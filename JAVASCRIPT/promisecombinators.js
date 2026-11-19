const promise1=Promise.reject(3);
const promise2=42;
const promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'foo');
});

Promise.any([promise1,promise2,promise3]).then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
});

