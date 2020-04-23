let sayHello = function(name){
    console.log(`Greetings message for ${name}`);
    console.log(`Hey ${name}`);
}

//sayHello('john')

let fullNameMaker = function(firstName, lastName){
    console.log(`Welcome to LCO`)
    console.log(`Happy to have you, ${firstName} ${lastName}`)    
}

//fullNameMaker('John', 'Doe')


let myAdder = function(num1, num2){

    let result = num1 + num2;
    return result
}

//console.log(myAdder(3, 5))

function guestUser(name = 'unName', courseCount = 0){
    return 'Hello ' + name + ' and your course count is ' + courseCount
}

console.log(guestUser('John', 1))