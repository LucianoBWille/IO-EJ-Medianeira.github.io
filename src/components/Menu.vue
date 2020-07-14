<template>
    <div class="io-menu">
        <div class="content">
            <router-link to="/" title="Página Inicial">
                <q-icon class="icon" :class="selectedStyle('/')" name="home"/>
            </router-link>
            <br>
            <router-link to="/Servicos" title="Serviços">
                <!--<q-icon class="icon" name="build"/>
                <q-icon class="icon" name="handyman"/>-->
                <q-icon class="icon" :class="selectedStyle('/Servicos')" name="construction"/>
            </router-link>
            <br>
            <router-link to="/Projetos-Internos" title="Projetos Internos">
                <q-icon class="icon" :class="selectedStyle('/Projetos-Internos')" name="school"/>
            </router-link>
            <br>
            <router-link to="/Contato" title="Contato">
                <q-icon class="icon" :class="selectedStyle('/Contato')" name="phone_enabled"/>
            </router-link>
            <br>
            <router-link to="/Avaliacao" title="Avaliações dos Clientes">
                <q-icon class="icon" :class="selectedStyle('/Avaliacao')" name="message"/>
                <!--<q-icon class="icon" name="edit"/>-->
            </router-link>
            <br>
            <router-link to="/Equipe" title="Equipe da I/O">
                <q-icon class="icon" :class="selectedStyle('/Equipe')" name="group"/>
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