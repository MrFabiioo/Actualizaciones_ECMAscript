const regex = /\b(de)+\b/g;

const azteca = `Esta cultura proviene de la civilización Mesoamericana
 la palabra Azteca procede de una legendaria tierra del norte llamada Aztlán. 
 Los Aztecas fueron un pueblo que por medio de alianzas militares con otros grupos y 
 poblaciones se expandieron rápidamente y dominaron el área central y sur del actual 
 México entre los siglos XIV y XVI. `;

 for(let match of azteca.matchAll(regex)){
    console.log(match);
 }