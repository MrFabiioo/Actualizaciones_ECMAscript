const user = {
    name:'Fabio',
    age:'30',
    country:'CO'
};
const {name,...values}=user;
console.log("🚀 ~ file: 01-spread.js:7 ~ values", values)
console.log("🚀 ~ file: 01-spread.js:7 ~ name", name);

