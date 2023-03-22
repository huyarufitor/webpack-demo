<template>
    <div>
        <div class="main">{{ msg }}</div>
        <div class="content">
            <el-button class="login" @click="$router.push('/')">首页</el-button>
            <el-button class="login" @click="$router.push('/login')">登录</el-button>
            <el-button class="register" @click="$router.push('/register')">注册</el-button>
        </div>
       
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
    margin-bottom: 100px;
}
.login{
    margin-right: 10px;
   
}
.content{
    margin-bottom: 40px;
}
</style>