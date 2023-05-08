const initCounter = 0
let counter = 0
const buttonIncrease = document.querySelector('.increase-counter_btn')
const buttonReduce = document.querySelector('.reduce-counter_btn')
const buttonReset = document.querySelector('.reset-counter_btn')
const counterText = document.querySelector ('.counter')

buttonIncrease.addEventListener('click', function(){
    counter = counter + 1
    counterText.innerText = counter
    // console.log (counter)
} )

buttonReduce.addEventListener('click', function(){
    counter = counter - 1

    if (counter < 0) {
        counter = initCounter
    }
    counterText.innerText = counter
    // console.log (counter)
} )

buttonReset.addEventListener('click', function(){
    counterText.innerText = initCounter
    // console.log (counter)
} )
