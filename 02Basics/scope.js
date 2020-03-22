// let iAmGlobal = 'somevalue'

// if (true){
//     var iAmUnique = 'fixedValue'
//     let iAmLocal = 'someMorevalue'
//     iAmGlobal = 'changeValue'
//     console.log(iAmGlobal)
//     console.log(iAmLocal)
// }
// console.log(iAmUnique)
// console.log(iAmGlobal)

//Kings problem

var king = 'John'

if (true){
    let king = 'Sam'

    if (true){
       let king = 'Ram'
        console.log(king)
    
    }
    console.log(king)
}

if (true){
    console.log("i am second part : " + king)
}
