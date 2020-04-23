// const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

// // for(let i = 0; i<days.length; i++ ){
// //     console.log(days[i])
// // }
// // let sayHello = function(){
// //     console.log("test hello")
// // }
// days.forEach(function(days, index){
//     console.log(`starts with ${index+1} -- ${days}`)
// })

const  myTodos = []
myTodos.unshift("Buy protein")
myTodos.unshift("Go to the gym")
myTodos.unshift("Do some programming")

// myTodos.forEach(function(todos, index){
//     console.log(`your task no. ${index + 1} is ${todos}`)
// })
let num = 1
for(let i = myTodos.length - 1; i >=0; i--){
    console.log(`your task no. ${num} is ${myTodos[i]}`)
    num += 1
}
