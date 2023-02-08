//flat

const array = [,1,2,3,4,[5,6,7,8,[9,10,11,12]]];
console.log(array.flat(3));

// flat map

const array_2=[1,2,3,4,5,6];
console.log(array_2.flatMap(v=>[v,v*2]));
