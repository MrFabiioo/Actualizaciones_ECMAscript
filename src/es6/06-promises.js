// promises

const anotherFuncion = ()=>{
    return new Promise((resolve,reject)=>{
        if (false) {
            resolve('Hello ♥ !');
        }else{
            reject('Get out ☻ !');
        }
    })
}

anotherFuncion().then(response => console.log(response))
.catch(error=>console.error(error));