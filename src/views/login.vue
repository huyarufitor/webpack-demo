<template >
    <div>
        <div class="example">{{ msg }}</div>
        <!-- <div>name:{{ data.name }}</div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello world!',
        };
    },
    mounted(){
        console.log('登录页面');
        this.msg = 'webpack login页面'
    }
};
</script>

<style scoped>
.example {
    color: red;
}
</style>