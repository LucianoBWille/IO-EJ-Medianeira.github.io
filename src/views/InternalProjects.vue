<template>
    <div>
        Projetos Internos
        <ul>
            <li v-for="value in info" :key="value.id">{{ value.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        computed: {
            info() {
                return this.$store.state.repoInfo 
            }
        },
    }
</script>

<style scoped>

</style>