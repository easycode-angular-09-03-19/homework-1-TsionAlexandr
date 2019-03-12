// Задача 1


function factorial(n: number): number {
    return (n != 1) ? n * factorial(n - 1) : 1;
}


console.log(factorial(5));



// Задача 2


function multiply(): number {
    if(!arguments.length) return 0; 
    
    let a = 1;

    for(let i = 0; i < arguments.length; i++){
        if (typeof arguments[i] === 'number') {
            a *= arguments[i];
        }
    }

    return a;
}



// Задача 3


function reverseStr(str: string): string {
    return str.split("").reverse().join("")
}
   
    
reverseStr("New string");


// Задача 4


interface Admin {
    name: string;
    email: string;
    password: string;
    type?: string;
    

}