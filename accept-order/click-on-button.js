import { pizzaBaseArr, ingridient1Arr, ingridient2Arr, sauceArr, ingridientsOnOrderArea, cleanOrderArea, removeFinalPrice, showFinalPriceOnOrderArea, ingridientOnTarget} from "../add-ingridients-on-order-area/add-ingridients-on-order-area.js";

import { resetOpacity } from "../pizza-progress/pizza-progress.js";

import { wrapper, pizzaBase, ingridient1, ingridient2, sauce, button } from "../const/constants.js";
import { clickFinalBtn } from "../final-window/final-window.js";

export {
    acceptOrder
}

function acceptOrder() {
    if(pizzaBaseArr.length > 0 && ingridient1Arr.length > 0 &&ingridient2Arr.length > 0 && sauceArr.length > 0) {
        const finalPizza = [...ingridientsOnOrderArea]
        console.log(finalPizza);
        clearArrays()
        cleanOrderArea()
        removeFinalPrice()
        showFinalPriceOnOrderArea()
        clearContainerHiglight()
        clearIngHiglight()
        resetOpacity()
        createFinalWindow()
    }
    const finalCloseBtn = document.querySelector('.finalCloseBtn')
    finalCloseBtn.addEventListener('click', clickFinalBtn)
    pizzaBase.removeEventListener('click', ingridientOnTarget)
    ingridient1.removeEventListener('click', ingridientOnTarget)
    ingridient2.removeEventListener('click', ingridientOnTarget)
    sauce.removeEventListener('click', ingridientOnTarget)
    button.removeEventListener('click', acceptOrder)

}

function clearArrays() {
    pizzaBaseArr.length = 0
    ingridient1Arr.length = 0
    ingridient2Arr.length = 0
    sauceArr.length = 0
    ingridientsOnOrderArea.length = 0
}

function clearContainerHiglight() {
    const container = document.querySelectorAll('.containerIngridient')
    container.forEach((elem) => {
        elem.classList.remove('highlight')
    })
}

function clearIngHiglight() {
    const ing = document.querySelectorAll('.ing')
    ing.forEach((elem) => {
        elem.classList.remove('highlight')
    })
}

function createFinalWindow() {
    const finalWindowContainer = document.createElement('div')
    finalWindowContainer.classList.add('finalWindowContainer')
    wrapper.append(finalWindowContainer)
    const finalText = document.createElement('div')
    finalText.classList.add('finalText')
    finalText.textContent = 'Спасибо за заказ!'
    finalWindowContainer.append(finalText)
    const smile = document.createElement('img')
    smile.classList.add('smileImg')
    smile.src = 'img/smile.svg'
    finalWindowContainer.append(smile)
    const finalCloseBtn = document.createElement('button')
    finalCloseBtn.classList.add('finalCloseBtn')
    finalCloseBtn.textContent = 'Закрыть'.toLocaleUpperCase()
    finalWindowContainer.append(finalCloseBtn)

}