import { createRouter,createWebHistory } from "vue-router"
import LandingPage from "./LandingPage.vue"

import Stocdetailedview from "./Stocdetailedview.vue"



const routes = [
{
path :"/" ,
component : LandingPage

},
{
    path :"/stocks/:symbol",
    component : Stocdetailedview
}
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
})


export default router 