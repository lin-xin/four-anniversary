import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.use(VueRouter);

var app = Vue.extend(App),
    router = new VueRouter();
router.map({
    '/index':{
        component:function (resolve) {
            require(['./components/index.vue'], resolve)
        }
    },
    '/man':{
        component:function (resolve) {
            require(['./components/man.vue'], resolve)
        }
    },
    '/sky':{
        component:function (resolve) {
            require(['./components/sky.vue'], resolve)
        }
    },
    '/time':{
        component:function (resolve) {
            require(['./components/time.vue'], resolve)
        }
    }
});
router.redirect({
    '/':'index'
});
router.start(app,'#app');