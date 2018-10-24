<template>
    <div class="m-2 text-center">
        <h2>Thanks</h2>
        <p> Thanks for place your order, which is #{{orderId}}.</p>
        <p>We will ship your good as soon as possible</p>
        <router-link to="/" class="btn btn-primary">Return to store</router-link>
    </div>
</template>
<script>
export default {
    computed:{
        orderId(){
            return this.$route.params.id;
        }
    }
}
</script>
