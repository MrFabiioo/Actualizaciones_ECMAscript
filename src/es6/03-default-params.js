// forma antigua:

function user(name, age, country){
    var name = name || 'Fabio';
    var age = age || 29;
    var country = country || 'CO';
    console.log(name,age,country);
}

user();
user('Jose',30,'CL');

//forma eficiente:

function newUser(name='Angie',age=25,country='HO'){
    console.log(name,age,country);
}

newUser();
newUser('Naomy',24,'USA');