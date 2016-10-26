<template>
    <div class="wrapper">
        <div class="fonts">我想你了</div>
        <div class="sky">
            <div class="moon"></div>
            <div class="star">
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
            </div>
            <div class="meteor"></div>
        </div>
        <div class="land"></div>
        <div class="windmill-1">
            <windmill></windmill>
        </div>
        <div class="windmill-2">
            <windmill></windmill>
        </div>
        <div class="windmill-3">
            <windmill></windmill>
        </div>
    </div>
</template>

<script>
    import windmill from './windmill.vue'
    export default {
        data: function () {
            return {}
        },
        components:{
            windmill:windmill
        }
    }
</script>

<style scoped src="../../static/css/sky.css">

</style>