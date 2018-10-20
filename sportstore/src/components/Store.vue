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
                <CategoryControls />
            </div>
            <div class="col-9 p-2">
                <product-list />
            </div>
        </div>

    </div>
</template>
<script>
import ProductList from "./ProductList";  //danh sach san pham
import CategoryControls from './CategoryControls';   //phan trang
import CartSummary from './CartSummary';   //icon gio hang

export default{
    components:{
        ProductList,CategoryControls,CartSummary
    }
}
</script>