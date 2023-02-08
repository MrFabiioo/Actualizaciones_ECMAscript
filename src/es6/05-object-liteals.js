//Enahced object literals

function newUser(user,age,country,uId){
    return{
        user,
        age,
        country,
        id:uId
    };
};

console.log(newUser('MrFabio',29,'CO',0.1));