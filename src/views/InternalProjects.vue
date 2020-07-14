<template>
    <div class="internal-projects">
        <h1>Projetos Internos</h1>
        <ul>
            <li class="project" v-for="value in info" :key="value.id">
                <h2>{{ value.name }}</h2>
                <p>{{ value.description }}</p>
                <a :href="value.html_url" target="_blank">Repositório do projeto no Github</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ProjetosInternos',
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