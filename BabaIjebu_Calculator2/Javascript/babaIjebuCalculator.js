/* 
This is a Calcullator for Baba Ijebu

const subPremier = (a, b) => a - b
const addPremier = (a, b) => a + b
const mulPremierPercentage = a => a * 0.15
const mulGhanaPercentage = b => b * 0.20

function netPremierSales (premier, ghana) {
    premierGame = subPremier(premier, ghana);
    premierPercentage = mulPremierPercentage(premierGame) - premierGame;
    ghanaPercentage = mulGhanaPercentage(ghana) - ghana
    total = premierPercentage + ghanaPercentage
    return total
    
}

console.log(netPremierSales(20000, 4000))o
*/
const premierInput = document.getElementById('premier')
const ghanaInput = document.getElementById('ghana')
const totalResultInput = document.getElementById('totalResult')
const display1Result = document.getElementById('display__1')

const subPremier = (a, b) => a - b
const addPremier = (a, b) => a + b
const mulPremierPercentage = a => a * 0.15
const mulGhanaPercentage = b => b * 0.20


const calculatorB = (premier, ghana) => {

    ghana = Number(ghanaInput.value)
    console.log(ghana)
    premier = Number(premierInput.value)
    console.log(premier)
    const premierGame = subPremier(premier, ghana);
    console.log({ premierGame })
    const premierPercentage = mulPremierPercentage(premierGame) - premierGame;
    console.log({ premierPercentage })
    const ghanaPercentage = mulGhanaPercentage(ghana) - ghana
    console.log({ ghanaPercentage })
    const total = (premierPercentage + ghanaPercentage)
    totals = Math.abs(total)
    console.log({ totals })
    const paragraph = document.createElement('p')
    display1Result.appendChild(paragraph)
    totalResultInput.value =`#${totals.toFixed(2).toLocaleString('en-US')}`
    return total
}



function netPremierSales(premier, ghana) {
    premierGame = subPremier(premier, ghana);
    premierPercentage = mulPremierPercentage(premierGame) - premierGame;
    ghanaPercentage = mulGhanaPercentage(ghana) - ghana
    total = premierPercentage + ghanaPercentage
    return total
    console.log(total)

}

const calculate = (n1, operator, n2) => {
    const firstNum = parseFloat (n1)
    const secondNum = parseFloat (n2)
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'substract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
}


/*Calculator designs */
// First addEventsListners to all the keys to determine the keys that's press
// use query selectors to access the DO
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')


keys.addEventListener('click', e => {
    // Use the data caption to determine the type of key that is pressed
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent


    // change the display number 0 to keypress by user
    // know the key number that user press and the current displayed number
    const display = document.querySelector('.calculator__display')

    if (e.target.matches('button')) {
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        // if the keys doesn't have a data set it must be a number
        const createResultString = () => {

            if (!action) {
                console.log('number key!')
            return displayedNum === '0' ||
             previousKeyType === 'operator' ||
             previousKeyType === 'calculate' 
             ? keyContent
             :displayedNum + keyContent
            }
        }
            // let the data action of add, div, sub e.t.c to be known as key operator
        if (action === 'multiply' ||
            action === 'add' ||
            action === 'substract' ||
            action === 'divide'
        ) {
            let firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum

            // Note it's sufficient to check for firstalue and operator because secondalue always exist
            if (
                firstValue &&
                operator &&
                previousKeyType !== 'operator' ||
                previousKeyType !== 'calculate'
            ) {
                const calcValue = calculate(firstValue, operator, secondValue)
                display.textContent = calcValue
                // update calculated value as firstValue
                calculator.dataset.firstValue = calcValue
                // display.textContent = calculate(firstValue, operator, secondValue)
            } else {
                // If there are no calculations, set the displayedNum as the firstValue
                calculator.dataset.firstValue = displayedNum
            }

            key.classList.add('is-depressed')
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
            // to get the operator to work
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
            // save the first value 
            console.log('operator key!')
        }

        // calculate function to perform calculation and return function
        // also add parseFloat to covert strings to integer 


        //  also add the decimal, clear, and calculate to know the keypressed 
        if (action === 'decimal') {
            console.log('decimal key!')
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                display.textContent = '0.'
            }
            calculator.dataset.previousKeyType = 'decimal'
        }

        if (action === 'clear') {
            if (key.textContent === 'AC') {
                calculator.dataset.firstValue = ''
                calculator.dataset.modValue = ''
                calculator.dataset.operator = ''
                calculator.dataset.previousKeyType = ''
            } else {
                key.textContent ='AC'
            }
            display.textContent = 0
            key.textContent = 'AC'
            calculator.dataset.previousKeyType = 'clear'

            const clearButton = calculator.querySelector('[data-action=clear')
            clearButton.textContent = 'CE'
            console.log('clear key!')
        }
        if (action === 'calculate') {
            // this should display the second value of calculation mad
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            
            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue
                }
                display.textContent = calculate(firstValue, operator, secondValue)

        }
        // set modValue attribute
        calculator.dataset.modValue = secondValue
        
        calculator.dataset.previousKeyType = 'calculate'
            console.log('equal key!')
        }

        // do nothing if string hae a dot 


        // know the key number that user press and the current displayed number
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
        console.log("You're welcome")
    }

})











