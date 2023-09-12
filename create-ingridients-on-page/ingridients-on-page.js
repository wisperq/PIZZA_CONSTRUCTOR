import { pizzaBase, ingridient1, ingridient2, sauce} from "../const/constants.js";





export {
    createBaseIgridients,
    createIngridient1,
    createIngridient2,
    createSauce
}




function createBaseIgridients(BASE) {
    BASE.forEach((elem) => {
        const baseIngridient = document.createElement('div')
        baseIngridient.classList.add('baseIngridient', 'containerIngridient', 'containerIngridientBase')
        baseIngridient.setAttribute('data-ingridient', elem.name)
        pizzaBase.append(baseIngridient)
        const baseName = document.createElement('div')
        baseName.classList.add('basePizza', 'ing')
        baseName.setAttribute('data-ingridient', elem.name)
        baseName.textContent = elem.name
        baseIngridient.append(baseName)
        const basePrice = document.createElement('div')
        basePrice.textContent = `${elem.price}$`
        basePrice.setAttribute('data-ingridient', elem.name)
        basePrice.classList.add('price', 'basePizza', 'ing')
        baseIngridient.append(basePrice)
    })
}


function createIngridient1(INGRIDIENTS1) {
    INGRIDIENTS1.forEach((elem) => {
        const firstIngridient = document.createElement('div')
        firstIngridient.classList.add('baseIngridient', 'containerIngridient', 'containerIngridientIng1')
        firstIngridient.setAttribute('data-ingridient', elem.name)
        ingridient1.append(firstIngridient)
        const firstIngridientName = document.createElement('div')
        firstIngridientName.textContent = elem.name
        firstIngridientName.setAttribute('data-ingridient', elem.name)
        firstIngridientName.classList.add('firstIngridient', 'ing')
        firstIngridient.append(firstIngridientName)
        const firstIngridientPrice = document.createElement('div')
        firstIngridientPrice.textContent = `${elem.price}$`
        firstIngridientPrice.setAttribute('data-ingridient', elem.name)
        firstIngridientPrice.classList.add('price', 'firstIngridient', 'ing')
        firstIngridient.append(firstIngridientPrice)

    })
}

function createIngridient2(INGRIDIENTS2) {
    INGRIDIENTS2.forEach((elem) => {
        const secondIngridient = document.createElement('div')
        secondIngridient.classList.add('baseIngridient','containerIngridient', 'containerIngridientIng2')
        secondIngridient.setAttribute('data-ingridient', elem.name)
        ingridient2.append(secondIngridient)
        const secondIngridientName = document.createElement('div')
        secondIngridientName.textContent = elem.name
        secondIngridientName.setAttribute('data-ingridient', elem.name)
        secondIngridientName.classList.add('secondIngridient', 'ing')
        secondIngridient.append(secondIngridientName)
        const secondIngridientPrice = document.createElement('div')
        secondIngridientPrice.textContent = `${elem.price}$`
        secondIngridientPrice.setAttribute('data-ingridient', elem.name)
        secondIngridientPrice.classList.add('price', 'secondIngridient', 'ing')
        secondIngridient.append(secondIngridientPrice)

    })
}

function createSauce(SAUCE) {
    SAUCE.forEach((elem) => {
        const sauceIngridient = document.createElement('div')
        sauceIngridient.classList.add('baseIngridient', 'containerIngridient', 'containerIngridientSauce')
        sauceIngridient.setAttribute('data-ingridient', elem.name)
        sauce.append(sauceIngridient)
        const sauceName = document.createElement('div')
        sauceName.textContent = elem.name
        sauceName.setAttribute('data-ingridient', elem.name)
        sauceName.classList.add('sauceIngridient', 'ing')
        sauceIngridient.append(sauceName)
        const saucePrice = document.createElement('div')
        saucePrice.textContent = `${elem.price}$`
        saucePrice.setAttribute('data-ingridient', elem.name)
        saucePrice.classList.add('price', 'sauceIngridient', 'ing')
        sauceIngridient.append(saucePrice)
    })
}

