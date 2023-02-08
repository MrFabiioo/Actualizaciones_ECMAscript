const hellopromise = ()=>{return Promise((resolve,reject)=>{
    if (true){
        resolve('Hey');
    }else{
        reject('Nop');
    }
})}

console.log(hellopromise());