<template>
    <div>
        <h1>登录</h1>
        <form @submit.prevent="login">
            <div>
                <label for="username">用户名</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div>
                <label for="password">密码</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit">登录</button>
        </form>
        <hr />
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            newUsername: '',
            newPassword: '',
            confirmPassword: '',
        };
    },
    methods: {
        login() {
            // 登录逻辑
            console.warn('登录', this.username, this.password);
            console.log('Login button clicked');
        },
        
    },
};
</script>