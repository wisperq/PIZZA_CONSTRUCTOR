import { pizzaBase, ingridient1, ingridient2, sauce, button } from "../const/constants.js"
import { ingridientOnTarget } from "../add-ingridients-on-order-area/add-ingridients-on-order-area.js"

import { acceptOrder } from "../accept-order/click-on-button.js"

export {
    clickFinalBtn
}

function clickFinalBtn () {
    const finalWindowContainer = document.querySelector('.finalWindowContainer')
    finalWindowContainer.remove()
    pizzaBase.addEventListener('click', ingridientOnTarget)
    ingridient1.addEventListener('click', ingridientOnTarget)
    ingridient2.addEventListener('click', ingridientOnTarget)
    sauce.addEventListener('click', ingridientOnTarget)
    button.addEventListener('click', acceptOrder)
}