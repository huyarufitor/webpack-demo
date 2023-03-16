<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required />
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required />
            <button type="submit">Login</button>
        </form>
        <hr />
        <h1>Register</h1>
        <form @submit.prevent="register">
            <label for="newUsername">Username</label>
            <input type="text" id="newUsername" v-model="newUsername" required />
            <label for="newPassword">Password</label>
            <input type="password" id="newPassword" v-model="newPassword" required />
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" v-model="confirmPassword" required />
            <button type="submit">Register</button>
        </form>
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
            // TODO: 实现登录逻辑
            console.warn('登录',this.username,this.password);
            console.log('Login button clicked');
        },
        register() {
            // TODO: 实现注册逻辑
            console.warn('注册',this.newUsername,this.newPassword,this.confirmPassword);
            console.log('Register button clicked');
        },
    },
};
</script>