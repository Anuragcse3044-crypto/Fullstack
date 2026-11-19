async function val1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('foo');
        }, 1000);    
});
}

async function val22(str) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`val 2${str}`);
        }, 1000);
    });
}