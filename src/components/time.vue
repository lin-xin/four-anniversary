<template>
    <div class="wrapper">
        <div class="rose-box">
            <div class="day">{{day}}</div>
            <rose class="rose1"></rose>
            <rose class="rose2"></rose>
            <rose class="rose3"></rose>
            <rose class="rose4"></rose>
            <rose class="rose5"></rose>
            <rose class="rose6"></rose>
            <rose class="rose7"></rose>
            <rose class="rose8"></rose>
            <rose class="rose9"></rose>
            <rose class="rose10"></rose>
        </div>
        <a v-link="{path:'/sky'}" class="title">Happy fourth anniversary</a>
    </div>
</template>

<script>
    import rose from './rose.vue';
    export default {
        data: function () {
            return {
                day:''
            }
        },
        components:{
            rose:rose
        },
        created:function(){
            var time=Date.parse(new Date()),
                lasttime=Date.parse("2012-10-31"),
                day=parseInt((time-lasttime)/(1000*60*60*24));
            this.day = day+'day';
        }
    }
</script>

<style scoped src="../../static/css/time.css"></style>