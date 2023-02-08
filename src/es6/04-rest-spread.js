// arrays desctricturing:

let fruits = ['Orange','Banana'];
let [a,b] = fruits;
console.log(a,fruits[1]);

// objec destructuring:

let user = {
    name:'Fabio',
    lastname:'Ortega'
};
let {name,lastname} = user;
console.log(name,lastname);

// spread operator

let person = {
    name:'Naomy',
    age: 25
};
let country = 'Honduras';

let data ={
    id:1.,
    ...person,
    country
};
console.log(data);

// rest:

function multip(num, ...values){
    console.log(values);
    console.log(num+values[0]);
    return num*values[2];
}

multip(2,1,2,3,4);


// ejercicio :

let json1 = {
    name: "Mr. Michi",
    food: "Pescado"
  };
  
  let json2 = {
      age: 12,
      color: "Blanco"
  };
  
  
function solution(json1, json2) {
    let data = { ...json1, ...json2 };
    console.log(data);
  }
  
  solution(json1, json2);