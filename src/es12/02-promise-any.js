const promise1 =  new Promise((resolve,reject)=> reject('rechazado!'));
const promise2 =  new Promise((resolve,reject)=> resolve('aprobado!'));
const promise3 =  new Promise((resolve,reject)=> resolve('aprobado de nuevo !'));

Promise.any([promise1,promise2,promise3]).then(x=>console.log(x));