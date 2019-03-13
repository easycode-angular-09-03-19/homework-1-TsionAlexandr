// Задача 1


function factorial(n: number): number {
    return (n != 1) ? n * factorial(n - 1) : 1;
}


console.log(factorial(5));



// Задача 2


function multiply(...numbers: number[]): number {
    if (numbers.length == 0) return 0;

    return numbers.reduce((a, b) => a * b);
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
