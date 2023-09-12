import { BASE, INGRIDIENTS1, INGRIDIENTS2, SAUCE, button, ingridient1, ingridient2, pizzaBase, sauce } from "./const/constants.js";
import { createBaseIgridients, createIngridient1, createIngridient2, createSauce } from "./create-ingridients-on-page/ingridients-on-page.js";

import { ingridientOnTarget } from "./add-ingridients-on-order-area/add-ingridients-on-order-area.js";

import { acceptOrder } from "./accept-order/click-on-button.js";


createBaseIgridients(BASE)
createIngridient1(INGRIDIENTS1)
createIngridient2(INGRIDIENTS2)
createSauce(SAUCE)

pizzaBase.addEventListener('click', ingridientOnTarget)
ingridient1.addEventListener('click', ingridientOnTarget)
ingridient2.addEventListener('click', ingridientOnTarget)
sauce.addEventListener('click', ingridientOnTarget)
button.addEventListener('click', acceptOrder)