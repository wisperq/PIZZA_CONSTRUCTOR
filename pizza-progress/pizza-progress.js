import { ingridientsOnOrderArea, pizzaBaseArr, ingridient1Arr, ingridient2Arr, sauceArr} from "../add-ingridients-on-order-area/add-ingridients-on-order-area.js";


export{showPartOfPizza, resetOpacity}

function showPartOfPizza() {
    const part1 = document.querySelector('.part1')
    const part2 = document.querySelector('.part2')
    const part3 = document.querySelector('.part3')
    const part4 = document.querySelector('.part4')
    resetOpacity()

    if (pizzaBaseArr.length > 0 || ingridient1Arr.length > 0 || ingridient2Arr.length > 0 || sauceArr.length > 0) {
        part1.style.opacity = 1
    }

    if (ingridientsOnOrderArea.length === 2) {
        if (ingridient1Arr.length === 2 || ingridient2Arr.length === 2) {
            part1.style.opacity = 1
        }else {
            part1.style.opacity = 1
            part2.style.opacity = 1
        }
    }
    
    if (ingridientsOnOrderArea.length === 3) {
        if (ingridient1Arr.length === 2 || ingridient2Arr.length === 2) {
            part1.style.opacity = 1
            part2.style.opacity = 1
        }else {
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
        }
    }

    if (ingridientsOnOrderArea.length === 4) {
        if(ingridient1Arr.length === 2 && ingridient2Arr.length === 2) {
            part1.style.opacity = 1
            part2.style.opacity = 1
        } else if(ingridient1Arr.length === 2 && ingridient2Arr.length === 1) {
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
        }else if(ingridient1Arr.length === 1 && ingridient2Arr.length === 2){
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
        }else if (ingridient1Arr.length === 0 && ingridient2Arr.length === 2) {
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
        }else if (ingridient1Arr.length === 2 && ingridient2Arr.length === 0) {
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
        }else{
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
            part4.style.opacity = 1
        }
    }

    if (ingridientsOnOrderArea.length === 5) {
        if (ingridient1Arr.length === 2 && ingridient2Arr.length === 2) {
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
        } else if (ingridient1Arr.length === 1 && ingridient2Arr.length === 2) {
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
            part4.style.opacity = 1
        } else if (ingridient1Arr.length === 2 && ingridient2Arr.length === 1) {
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
            part4.style.opacity = 1
        }
    }

    if (ingridientsOnOrderArea.length === 6) {
        if (ingridient1Arr.length === 2 && ingridient2Arr.length === 2) {
            part1.style.opacity = 1
            part2.style.opacity = 1
            part3.style.opacity = 1
            part4.style.opacity = 1
        }
    }

}

function resetOpacity () {
    const part1 = document.querySelector('.part1')
    const part2 = document.querySelector('.part2')
    const part3 = document.querySelector('.part3')
    const part4 = document.querySelector('.part4')
    part1.style.opacity = 0
    part2.style.opacity = 0
    part3.style.opacity = 0
    part4.style.opacity = 0
}
