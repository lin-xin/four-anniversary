<template>
    <div class="heart">
        <div class="heart-circular left"></div>
        <div class="heart-circular right"></div>
        <div class="heart-square"></div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style scoped>
    .heart{
        position: relative;
        width: 40px;
        height: 40px;
    }
    .heart-circular{
        position: absolute;
        width: 20px;
        height: 30px;
        border-radius: 10px;
        background: red;
    }

    .heart-circular.left{
        left: 3px;
        transform: rotate(-45deg);
    }
    .heart-circular.right{
        left: 15px;
        transform: rotate(45deg);
    }
    .heart-square{
        position: absolute;
        left: 10px;
        top: 14px;
        width: 18px;
        height: 17px;
        background: red;
        transform: rotate(45deg);
    }
</style>