<template>
    <div class="io-menu">
        <div class="content">
            <router-link to="/" class="vue-route">
                <q-icon 
                    class="icon" 
                    :class="selectedStyle('/')" 
                    name="home"
                    title="Página Inicial"
                    alt="Página Inicial"
                />
            </router-link>
            <br>
            <router-link to="/Servicos" class="vue-route">
                <!--<q-icon class="icon" name="build"/>
                <q-icon class="icon" name="handyman"/>-->
                <q-icon 
                    class="icon" 
                    :class="selectedStyle('/Servicos')" 
                    name="construction" 
                    title="Serviços"
                    alt="Serviços"
                />
            </router-link>
            <br>
            <router-link to="/Projetos-Internos" class="vue-route">
                <q-icon 
                    class="icon" 
                    :class="selectedStyle('/Projetos-Internos')" 
                    name="school"
                    title="Projetos Internos"
                    alt="Projetos Internos"
                />
            </router-link>
            <br>
            <router-link to="/Contato" class="vue-route">
                <q-icon 
                    class="icon" 
                    :class="selectedStyle('/Contato')" 
                    name="phone_enabled"
                    title="Contato"
                    alt="Contato"
                />
            </router-link>
            <br>
            <router-link to="/Avaliacao" class="vue-route">
                <q-icon 
                    class="icon" 
                    :class="selectedStyle('/Avaliacao')" 
                    name="message"
                    title="Avaliações dos Clientes"
                    alt="Avaliações dos Clientes"
                />
            </router-link>
            <br>
            <router-link to="/Equipe" class="vue-route">
                <q-icon 
                    class="icon" 
                    :class="selectedStyle('/Equipe')" 
                    name="group"
                    title="Equipe da I/O"
                    alt="Equipe da I/O"
                />
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IoMenu',
        methods: {
            selectedStyle(route) {
                if (route == this.route)
                    return "icon-active"
                else
                    return ""
            }
        },
        computed: {
            route() {
                return this.$route.path 
            }
        },
    }
</script>

<style scoped>
</style>