// declarando clase
class User{};
// instanciando una clase
//const newUser = new User();

class user{
    greeting(){
        return 'Hello ♥';
    };
};

const MrFabio = new user();
console.log(MrFabio.greeting());

// concepto de herencia
const anotherUser = new user();
console.log(anotherUser.greeting());

// constructors

class user {
    constructor(){
        console.log('Nuevo Usuario');
    };
    greeting(){
        return 'Hello ♥';
    };
};

const  jose = new user();
console.log(jose.greeting());

// this

class user {
    constructor(name){
        this.name =  name;
    }
    //metodos
    speak(){
        return 'Hello ♥';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana =  new user('Ana');
console.log(ana.greeting());

// setters and getters

class user{
    // constructor
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){
        return 'Hello ♥';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set uAge(u){
        this.age=u;
    }
}

const usser1 = new user('Jose',30);
console.log(usser1.uAge)
console.log(usser1.uAge = 29);
console.log(usser1.speak() + 'mi nombre es: '+usser1.name + ' y tengo '+usser1.uAge + 'años ')