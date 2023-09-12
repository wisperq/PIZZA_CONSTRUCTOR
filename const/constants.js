export {
    BASE,
    INGRIDIENTS1,
    INGRIDIENTS2,
    SAUCE,
    pizzaBase,
    ingridient1,
    ingridient2,
    sauce,
    basePizza,
    usedIngridients,
    price,
    allIngridients,
    button,
    wrapper
}

const BASE = [
    {name: 'Стандартное тесто', price: 5},
    {name: 'Тонкое тесто', price: 4},
    {name: 'Пышное тесто', price: 6},
    {name: 'C сырными бортами', price: 8}
]

const INGRIDIENTS1 = [
    {name: 'Ветчина', price: 3}, 
    {name: 'Салями', price: 3}, 
    {name: 'Курица', price: 3}, 
    {name: 'Пепперони', price: 3}
]

const INGRIDIENTS2 = [
    {name: 'Грибы', price: 2}, 
    {name: 'Халапеньо', price: 2}, 
    {name: 'Моцарелла', price: 3}, 
    {name: 'Ананас', price: 2}
]

const SAUCE  = [
    {name: 'Барбекю соус', price: 2}, 
    {name: 'Чесночный соус', price: 2}, 
    {name: 'Сырный соус', price: 2}, 
    {name: 'Томатный соус', price: 2}
]

const pizzaBase = document.querySelector('.pizzaBase')
const ingridient1 = document.querySelector('.ingridient1')
const ingridient2 = document.querySelector('.ingridient2')
const sauce = document.querySelector('.sauce')
const basePizza = document.querySelector('.basePizza')
const usedIngridients = document.querySelector('.usedIngridients')
const price = document.querySelector('.price')
const allIngridients = document.querySelector('.allIngridients')
const button = document.querySelector('.confirmBtn')
const wrapper = document.querySelector('.wrapper')
