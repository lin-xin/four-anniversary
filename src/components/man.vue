<template>
    <div class="wrapper">
        <div class="bg-left"></div>
        <div class="bg-right"></div>
        <div class="man">
            <div class="head">
                <div class="hair"></div>
                <div class="face">
                    <div class="eyebrow left"></div>
                    <div class="eyebrow right"></div>
                    <div class="eye left"></div>
                    <div class="eye right"></div>
                    <div class="ear left"></div>
                    <div class="ear right"></div>
                    <div class="nose"></div>
                </div>
                <div class="mouth"></div>
            </div>
            <div class="body">
                <div class="shirt"></div>
                <div class="tie"></div>
                <div class="arm left"></div>
                <div class="arm right"></div>
            </div>
            <div class="take-rose"><rose></rose></div>
            <div class="show-heart"><heart></heart></div>
            <div class="show-heart small"><heart></heart></div>
        </div>
        <div class="font-box">
            <p>给，送你一朵小花</p>
        </div>
        <a v-link="{path:'/time'}" class="btn-received">收下</a>
    </div>
</template>

<script>
    import Rose from './rose.vue';
    import Heart from './heart.vue';
export default {
    data: function() {
        return {
            
        }
    },
    components:{
        rose:Rose,
        heart:Heart
    }
}
</script>

<style scoped src="../../static/css/man.css">
    /*@import "";*/
</style>
