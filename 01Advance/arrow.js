// const sayHello = function(name){
//     return "Hey there, " + name + "!"
// }

// console.log(sayHello('Sammy'));

// const sayHello = (name) =>  `Hey there, ${name} !`


// console.log(sayHello('Sammy'));


const todos = [{
    title: 'Buy Bread',
    isDone: true
}, {
    title: 'Go to Gym',
    isDone: true
}, {
    title: 'Record videos',
    isDone: false
}]

//const thingsDone = todos.filter((todo) => todo.isDone === true).forEach((todo) => console.log(todo.title)) 

//console.log(thingsDone);

const cameras = {
    price: 600,
    weight: 200,
    myDesc: () =>{
        return `This canon camera is of ${this.price} $`
    }
}

console.log(cameras.myDesc());
