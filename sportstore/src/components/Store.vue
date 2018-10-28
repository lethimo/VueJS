<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORTS STORE</a>
                <cart-summary />
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <CategoryControls class="mb-5" />
                <button class="btn btn-block btn-warning mt-5" v-on:click="setShowSearch(true)">Search</button>
            </div>
            <div class="col-9 p-2">
                <Search />   
                <product-list />
            </div>
        </div>

    </div>
</template>
<script>
import ProductList from "./ProductList";  //danh sach san pham
import CategoryControls from './CategoryControls';   //phan trang
import CartSummary from './CartSummary';   //icon gio hang
import {mapMutations} from "vuex";   //vì component Search sử dụng thư viện mapMutation nên phải import kèm vào
import Search from './Search';   

export default{
    components:{
        ProductList,CategoryControls,CartSummary,Search
    },
    methods:{
        ...mapMutations(["setShowSearch"])

    }
}
</script>