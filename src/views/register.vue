<template >
    <div>
        <h1>注册</h1>
        <form @submit.prevent="register">
            <div>
                <label for="newUsername">用户名</label>
                <input type="text" id="newUsername" v-model="newUsername" required />
            </div>
            <div>
                <label for="newPassword">密码</label>
                <input type="password" id="newPassword" v-model="newPassword" required />
            </div>
            <div>
                <label for="confirmPassword">验证密码</label>
                <input type="password" id="confirmPassword" v-model="confirmPassword" required />
            </div>
            
            <button type="submit">注册</button>
            <hr />
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
    mounted() {
        console.log('注册页面');
    },
    methods:{
        register() {
            // 注册逻辑
            console.log('Register button clicked');
            console.warn('注册', this.newUsername, this.newPassword, this.confirmPassword);
            
        },
    }
};
</script>

<style scoped>
.example {
    color: red;
}
</style>