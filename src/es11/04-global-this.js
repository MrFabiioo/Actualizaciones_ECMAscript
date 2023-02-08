try{
    console.log(window);                  // navegador
}catch{
    console.log('No funciona')
}
console.log('GLOBAL:'+global);                       // node
console.log('SELF:'+self);                         //webkorker
console.log(globalThis); //  NO AÑADIR CONCATENACIONES 