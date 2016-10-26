<template>
    <div class="wrapper">
        <div class="circular-box">
            <div class="circular-cont">
                <div class="hand-woman">
                    <div class="palm">
                        <span></span>
                    </div>
                </div>
                <div class="hand-man" style="display: block">
                    <div class="palm">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="woman-finger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="shadow-line"></div>
                <div class="rings"></div>
            </div>
        </div>
        <a class="enter-btn" v-link="{path:'/man'}">开启浪漫之旅</a>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {}
        }
    }
</script>

<style scoped src="../../static/css/index.css"></style>