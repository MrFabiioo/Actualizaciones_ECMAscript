function* iterate(arr){
    for(let value of arr){
        yield value;
    }
}

const it = iterate(['fabio','jose','alejandra','martha']);
console.log("🚀 ~ file: 09-generator.js:8 ~ it", it.next().value);
console.log("🚀 ~ file: 09-generator.js:8 ~ it", it.next().value);
console.log("🚀 ~ file: 09-generator.js:8 ~ it", it.next().value);
console.log("🚀 ~ file: 09-generator.js:8 ~ it", it.next().value);
console.log("🚀 ~ file: 09-generator.js:8 ~ it", it.next().value);


function* getId(arr) {
    for (let value of arr) {
      yield value;
    }
  }
  
  const id = getId([1, 2, 3]);
  console.log(id.next().value);
  console.log(id.next().value);
  console.log(id.next().value);