const fnAsync = () =>{
    return new Promise((si_si,si_no)=>{
        (true)
            ? setTimeout(()=>si_si('Funcionó'),3000)
            : si_no(new Error('NO funcionó'));
    });
}

const fn = async() =>{
    const something =  await fnAsync();
    console.log(something);
    console.log("🚀 something");
    
    
}

console.log('Before');
fn();
console.log('After');
