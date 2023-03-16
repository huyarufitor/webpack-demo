<template>
    <div>
        <div class="main">{{ msg }}</div>
        <router-view />
    </div>
</template>

<script>
import { add } from './components/commonData.js';
export default {
    name: 'MyComponent',
    data() {
        return {
            msg: '欢迎来到webpack!',
        };
    },
    mounted() {
        // add();
        console.log('组件 已经mounted');
    },
    methods: {
        handleClick() {
            // add();
        },
    },
};
</script>

<style scoped>
.main {
    color: red;
}
</style>