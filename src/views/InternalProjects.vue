<template>
    <div>
        <h1>Projetos Internos</h1>
        <ul>
            <li v-for="value in info" :key="value.id">
                <h4>{{ value.name }}</h4>
                <p>{{ value.description }}</p>
                <p>Criado em: {{ value.created_at }}</p>
                <p>Atualizado em: {{ value.updated_at }}</p>
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