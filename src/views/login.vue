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
};
</script>

<style scoped>
.example {
    color: red;
}
</style>