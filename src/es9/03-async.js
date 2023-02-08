async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const another = anotherGenerator();
another.next().then(x => console.log(x.value));
another.next().then(x => console.log(x.value));
another.next().then(x => console.log(x.value));
console.log('Hi Dear♥');

async function names(arr){
    for await(let value of arr){
        console.log("🚀 ~ file: 03-async.js:15 ~ forawait ~ value", value)
        
    }
}
const nombres = names(['fabio','jose','joselito']);
console.log('paranguacutirimicuaro♥♥♥♥');