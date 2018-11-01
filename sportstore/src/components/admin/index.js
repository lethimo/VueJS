import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../components/Store";
import ShoppingCart from "../components/ShoppingCart";
import Checkout from "../components/Checkout";
import OrderThanks from "../components/OrderThanks";

const Authentication = () =>
    import ("../components/admin/Authentication");
const Admin = () =>
    import ("..components/admin/Admin");
const OrderAdmin = () =>
    import ("../components/admin/OrderAdmin");
const ProductAdmin = () =>
    import ("../components/admin/ProductAdmin");
const ProductEditor = () =>
    import ("../components/admin/ProductEditor");

import data from "../store";
Vue.use(VueRouter);
export default new Vue({
    mode: history,
    routes: [
        { path: "/", component: Store },
        { path: "/cart", component: ShoppingCart },
        { path: "/checkout", component: Checkout },
        { path: "/thanks/:id", component: OrderThanks },
        { path: "/login", component: Authentication },
        {
            path: "/admin",
            components: Admin,
            before(to, from, next) {
                if (data.Store.state.autheticated) {
                    next();
                } else {
                    next("/login");
                }
            },
            children: [
                { path: "products/:op(create|edit)/:id(\\d+)?", component: ProductEditor },
                { path: "products", component: ProductAdmin },
                { path: "orders", component: OrderAdmin },
                { path: "", redirect: "/admin/products" }
            ]
        },
        { path: "*", redirect: "/" }

    ]

})