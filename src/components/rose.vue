<template>
    <div class="rose">
        <div class="petal"></div>
        <div class="leaf"></div>
        <div class="stem"></div>
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
    .rose{
        position: relative;
    }
    .rose .petal{
        position: absolute;
        left: 10px;
        top: 20px;
        width: 20px;
        height: 20px;
        background: #fd2d2d;
        border-radius: 5px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: -1px -1px 5px #d42a2a inset;
    }
    .rose .petal:before,.rose .petal:after{
        content: '';
        position: absolute;
        top: -2px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background: #fd2d2d;
    }
    .rose .petal:before{
        left: 0;
    }
    .rose .petal:after{
        right: 0;
    }
    .rose .leaf:before,.rose .leaf:after{
        content: '';
        position: absolute;
        width: 15px;
        height: 4px;
        background:#15b115;
    }
    .rose .leaf:before{
        left: 5px;
        top: 59px;
        transform: rotate(45deg) skew(74deg);
    }
    .rose .leaf:after{
        left: 21px;
        top: 51px;
        transform: rotate(-45deg) skew(-74deg);
    }
    .rose .stem{
        position: absolute;
        left: 18px;
        top: 39px;
        width: 4px;
        height: 50px;
        background: #15b115;
        box-shadow: 0 -1px 1px green inset;
    }
</style>