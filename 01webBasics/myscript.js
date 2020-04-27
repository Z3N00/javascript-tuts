// const myElement = document.querySelectorAll('.classone')
// console.log(myElement);

// const myPElement = document.querySelector('p')
// myPElement.textContent = 'i am being changed using js'
// console.log(myPElement);

const myPElement = document.querySelectorAll('p')

myPElement.forEach((p) => p.textContent = 'I am changed using loop Js' )


const myNewPara = document.createElement('p')
myNewPara.textContent = 'I was added via js'

document.querySelector('body').appendChild(myNewPara)

document.querySelector('button').addEventListener('click', (event) => {
    event.target.textContent = 'I was clicked'
    
})

// track input form
document.querySelector('#myform').addEventListener('change', () => {
    console.log(event.target.value);
    
})
