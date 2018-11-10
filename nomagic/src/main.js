require('../node_modules/bootstrap/dist/css/bootstrap.min.css')

import Vue from "vue";
import MyApp from "./App";
new Vue({
    el: "#app",
    components: { "custom": MyApp },
    template: "<custom />"
});