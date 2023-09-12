import { BASE, INGRIDIENTS1, INGRIDIENTS2, SAUCE, usedIngridients, price } from "../const/constants.js"

import { showPartOfPizza } from "../pizza-progress/pizza-progress.js";


export {
    ingridientOnTarget,
    pizzaBaseArr,
    ingridient1Arr,
    ingridient2Arr,
    sauceArr,
    ingridientsOnOrderArea,
    cleanOrderArea,
    removeFinalPrice,
    showFinalPriceOnOrderArea
}

const pizzaBaseArr = [];
const ingridient1Arr = [];
const ingridient2Arr = [];
const sauceArr = []
let ingridientsOnOrderArea = []

showFinalPriceOnOrderArea()

function ingridientOnTarget(event) {
    targetBase(event)
    targetIngridient1(event)
    targetIngridient2(event)
    targetSauce(event)
    addAllIngridientsOnOrderArea(ingridientsOnOrderArea)
    highlight(event)
    removeIngridients(event)
    maxCountOfHightlight()
    showPartOfPizza()
    // removeIngridientsOnSecondClick(event)
    


    if (!document.querySelector('.finalPrice')){
        showFinalPriceOnOrderArea()
    }else{
        removeFinalPrice()
        showFinalPriceOnOrderArea()
    }

    
}



function showFinalPriceOnOrderArea() {
    const finalPrice = document.createElement('div')
    finalPrice.classList.add('finalPrice')
    finalPrice.textContent = `${calculateFinalPrice()}$`
    price.append(finalPrice)
    
}

function calculateFinalPrice() {
    let result = ingridientsOnOrderArea.reduce((sum, current) => {
        return sum + current.price
    },0)
    return result
}

function removeFinalPrice() {
    const price = document.querySelector('.finalPrice')
        price.remove()
}

function spreadIngridients() {
    ingridientsOnOrderArea = [...pizzaBaseArr, ...ingridient1Arr, ...ingridient2Arr, ...sauceArr]
}


function targetBase(event) {
    if (event.target.classList.contains('basePizza') || event.target.classList.contains('containerIngridientBase')) {
        BASE.forEach((elem) => {
            if (elem.name === event.target.getAttribute('data-ingridient')) {
                if(pizzaBaseArr.length === 1) {
                    pizzaBaseArr.pop()
                    pizzaBaseArr.push(elem)
                    spreadIngridients()
                }else{
                    pizzaBaseArr.push(elem)
                    spreadIngridients()
                }
            }
        })
    }
    
}


function targetIngridient1(event) {
    if(event.target.classList.contains('firstIngridient') || event.target.classList.contains('containerIngridientIng1')) {
        INGRIDIENTS1.forEach((elem) => {
            if (elem.name === event.target.getAttribute('data-ingridient')) {
                if(ingridient1Arr.length < 2 && !ingridient1Arr.includes(elem)) {
                    ingridient1Arr.push(elem)
                    spreadIngridients()
                }else if(ingridient1Arr.length === 2 && !ingridient1Arr.includes(elem)) {
                    ingridient1Arr.shift()
                    ingridient1Arr.push(elem)
                    spreadIngridients()
                }
            }
        })
    }
}


function targetIngridient2(event) {
    if(event.target.classList.contains('secondIngridient') || event.target.classList.contains('containerIngridientIng2')) {
        INGRIDIENTS2.forEach((elem) => {
            if (elem.name === event.target.getAttribute('data-ingridient')) {
                if(ingridient2Arr.length < 2 && !ingridient2Arr.includes(elem)) {
                    ingridient2Arr.push(elem)
                    spreadIngridients()
                }else if(ingridient2Arr.length === 2 && !ingridient2Arr.includes(elem)) {
                    ingridient2Arr.shift()
                    ingridient2Arr.push(elem)
                    spreadIngridients()
                }
            }
        })
    }
}


function targetSauce(event) {
    if (event.target.classList.contains('sauceIngridient') || event.target.classList.contains('containerIngridientSauce')) {
        SAUCE.forEach((elem) => {
            if (elem.name === event.target.getAttribute('data-ingridient')) {
                if(sauceArr.length === 1) {
                    sauceArr.pop()
                    sauceArr.push(elem)
                    spreadIngridients()
                }else{
                    sauceArr.push(elem)
                    spreadIngridients()
                }
            }
        })
    }
}


function addAllIngridientsOnOrderArea(ingridientsOnOrderArea) {
    cleanOrderArea()
    ingridientsOnOrderArea.forEach((elem) => {
        const ingridient = document.createElement('div')
        ingridient.classList.add('ingridient', 'onOrderIngrContainer')
        ingridient.setAttribute('data-ingridient', elem.name)
        usedIngridients.append(ingridient)
        const ingridientName = document.createElement('div')
        ingridientName.textContent = elem.name
        ingridientName.setAttribute('data-ingridient', elem.name)
        ingridient.append(ingridientName)
        const ingridientPrice = document.createElement('div')
        ingridientPrice.textContent = `${elem.price}$`
        ingridientPrice.setAttribute('data-ingridient', elem.name)
        ingridient.append(ingridientPrice)
    })
}

function cleanOrderArea() {
    const deleteIngridient = document.querySelectorAll('.ingridient')
    for (let i = 0; i < deleteIngridient.length; i++) {
        deleteIngridient[i].remove()
    }
}



function highlight(event) {
    if(!event.target.getAttribute('data-ingridient')) return 
    if(!event.target.classList.contains('highlight')) {
        if(event.target.classList.contains('containerIngridient')){
            event.target.classList.add('highlight')
        }else {
            event.target.classList.add('highlight')
            event.target.parentElement.classList.add('highlight')
        }
    }else if (event.target.classList.contains('highlight')) {
        if(event.target.classList.contains('containerIngridient')){
            event.target.classList.remove('highlight')
        }else{
            event.target.classList.remove('highlight')
            event.target.parentElement.classList.remove('highlight')
        }
        
    }
}



// function removeIngridientsOnSecondClick(event) {
//     const dataAtr = event.target.getAttribute('data-ingridient')
//     pizzaBaseArr.forEach((elem) => {
//         if(elem.name === dataAtr) {
//             pizzaBaseArr.splice(pizzaBaseArr.indexOf(elem),1)
//         }
//     })
//     ingridient1Arr.forEach((elem) => {
//         if(elem.name === dataAtr) {
//             ingridient1Arr.splice(ingridient1Arr.indexOf(elem),1)
//         }
//     })
//     ingridient2Arr.forEach((elem) => {
//         if(elem.name === dataAtr) {
//             ingridient2Arr.splice(ingridient2Arr.indexOf(elem),1)
//         }
//     })
//     sauceArr.forEach((elem) => {
//         if(elem.name === dataAtr) {
//             sauceArr.splice(sauceArr.indexOf(elem),1)
//         }
//     })
//     addAllIngridientsOnOrderArea()
//     spreadIngridients()
    


// }




// function removeIngridients(event) {
//     if(!event.target.classList.contains('highlight')) {
//         ingridientsOnOrderArea.forEach((elem) => {
//             if(elem.name === event.target.getAttribute('data-ingridient')){
//                 ingridientsOnOrderArea.splice(ingridientsOnOrderArea.indexOf(elem), 1)
//                 pizzaBaseArr.forEach((elem) => {
//                     if(elem.name === event.target.getAttribute('data-ingridient')) {
//                         pizzaBaseArr.splice(pizzaBaseArr.indexOf(elem),1)
//                     }
//                 })
    
//                 ingridient1Arr.forEach((elem) => {
//                     if(elem.name === event.target.getAttribute('data-ingridient')) {
//                         ingridient1Arr.splice(ingridient1Arr.indexOf(elem),1)
//                     }
//                 })
    
//                 ingridient2Arr.forEach((elem) => {
//                     if(elem.name === event.target.getAttribute('data-ingridient')) {
//                         ingridient2Arr.splice(ingridient2Arr.indexOf(elem),1)
//                     }
//                 })
    
//                 sauceArr.forEach((elem) => {
//                     if(elem.name === event.target.getAttribute('data-ingridient')) {
//                         sauceArr.splice(sauceArr.indexOf(elem),1)
//                     }
//                 })
//             }
//         })
//         addAllIngridientsOnOrderArea(ingridientsOnOrderArea)
//     } else if (event.target.classList.contains('highlight')) {
//         ingridientsOnOrderArea.forEach((elem) => {
//             if(elem.name === event.target.getAttribute('data-ingridient')){
//                 ingridientsOnOrderArea.splice(ingridientsOnOrderArea.indexOf(elem), 1)
//                 pizzaBaseArr.forEach((elem) => {
//                     if(elem.name === event.target.getAttribute('data-ingridient')) {
//                         pizzaBaseArr.splice(pizzaBaseArr.indexOf(elem),1)
//                     }
//                 })
    
//                 ingridient1Arr.forEach((elem) => {
//                     if(elem.name === event.target.getAttribute('data-ingridient')) {
//                         ingridient1Arr.splice(ingridient1Arr.indexOf(elem),1)
//                     }
//                 })
    
//                 ingridient2Arr.forEach((elem) => {
//                     if(elem.name === event.target.getAttribute('data-ingridient')) {
//                         ingridient2Arr.splice(ingridient2Arr.indexOf(elem),1)
//                     }
//                 })
    
//                 sauceArr.forEach((elem) => {
//                     if(elem.name === event.target.getAttribute('data-ingridient')) {
//                         sauceArr.splice(sauceArr.indexOf(elem),1)
//                     }
//                 })
//             }
//         })
//         addAllIngridientsOnOrderArea(ingridientsOnOrderArea)
//     }
// }




function removeIngridients(event) {
    if(!event.target.classList.contains('highlight')) {
        ingridientsOnOrderArea.forEach((elem) => {
            if(elem.name === event.target.getAttribute('data-ingridient')){
                ingridientsOnOrderArea.splice(ingridientsOnOrderArea.indexOf(elem), 1)
                pizzaBaseArr.forEach((elem) => {
                    if(elem.name === event.target.getAttribute('data-ingridient')) {
                        pizzaBaseArr.splice(pizzaBaseArr.indexOf(elem),1)
                    }
                })
    
                ingridient1Arr.forEach((elem) => {
                    if(elem.name === event.target.getAttribute('data-ingridient')) {
                        ingridient1Arr.splice(ingridient1Arr.indexOf(elem),1)
                    }
                })
    
                ingridient2Arr.forEach((elem) => {
                    if(elem.name === event.target.getAttribute('data-ingridient')) {
                        ingridient2Arr.splice(ingridient2Arr.indexOf(elem),1)
                    }
                })
    
                sauceArr.forEach((elem) => {
                    if(elem.name === event.target.getAttribute('data-ingridient')) {
                        sauceArr.splice(sauceArr.indexOf(elem),1)
                    }
                })
            }
        })
        // addAllIngridientsOnOrderArea(ingridientsOnOrderArea)

    }
    addAllIngridientsOnOrderArea(ingridientsOnOrderArea)
}



usedIngridients.addEventListener('click', (event) => {
    const dataAttribute = event.target.getAttribute('data-ingridient')
    const highlight = document.querySelectorAll('.highlight')
    highlight.forEach((elem) => {
        if(elem.classList.contains('highlight')){
            if(elem.getAttribute('data-ingridient') === dataAttribute){
                elem.classList.remove('highlight')
            }
            
        }
    })

    ingridientsOnOrderArea.forEach((elem) => {
        if(elem.name === dataAttribute){
            ingridientsOnOrderArea.splice(ingridientsOnOrderArea.indexOf(elem), 1)
            pizzaBaseArr.forEach((elem) => {
                if(elem.name === event.target.getAttribute('data-ingridient')) {
                    pizzaBaseArr.splice(pizzaBaseArr.indexOf(elem),1)
                }
            })

            ingridient1Arr.forEach((elem) => {
                if(elem.name === dataAttribute) {
                    ingridient1Arr.splice(ingridient1Arr.indexOf(elem),1)
                }
            })

            ingridient2Arr.forEach((elem) => {
                if(elem.name === dataAttribute) {
                    ingridient2Arr.splice(ingridient2Arr.indexOf(elem),1)
                }
            })

            sauceArr.forEach((elem) => {
                if(elem.name === dataAttribute) {
                    sauceArr.splice(sauceArr.indexOf(elem),1)
                }
            })
        }

        
    })

    
    addAllIngridientsOnOrderArea(ingridientsOnOrderArea)
    removeFinalPrice()
    showFinalPriceOnOrderArea()
    showPartOfPizza()
})


function maxCountOfHightlight() {
    const ingrWithHighlight = []
    const orderAreaNames = []
    const container = document.querySelectorAll('.containerIngridient')
    container.forEach((elem) => {
        if (elem.classList.contains('highlight')) {
            ingrWithHighlight.push(elem)
        }
    })

    ingridientsOnOrderArea.forEach((elem) => {
        orderAreaNames.push(elem.name)
    })

    ingrWithHighlight.forEach((elem) => {
        if (!orderAreaNames.includes(elem.getAttribute('data-ingridient'))) {
            elem.classList.remove('highlight')
            ingrWithHighlight.splice(ingrWithHighlight.indexOf(elem),1)
        }
    })
    // console.log(ingrWithHighlight);
    // console.log(orderAreaNames);
    console.log(pizzaBaseArr);
    console.log(ingridientsOnOrderArea);
}

