<template>
    <div class="ioMenu">
        <router-link to="/">
            <q-icon class="icon" name="home"/>
        </router-link>
        <br>
        <router-link to="/about">
            <!--<q-icon class="icon" name="build"/>
            <q-icon class="icon" name="handyman"/>-->
            <q-icon class="icon" name="construction"/>
        </router-link>
        <br>
        <router-link to="/about">
            <q-icon class="icon" name="school"/>
        </router-link>
        <br>
        <router-link to="/about">
            <q-icon class="icon" name="phone_enabled"/>
        </router-link>
        <br>
        <router-link disabled to="/about">
            <q-icon class="icon" name="message"/>
            <!--<q-icon class="icon" name="edit"/>-->
        </router-link>
        <br>
        <router-link to="/about">
            <q-icon class="icon" name="group"/>
        </router-link>
        <br>
    </div>
</template>

<script>
    export default {
        name: 'IoMenu',
        
    }
</script>

<style scoped>
.ioMenu{
    border-radius: 2vw;
    width: 4vw;
    background-color: #ffffff;
    position: fixed;
    top: 25vh; 
    left: 1vw;
    z-index: 500;
    text-align: center;
}
.icon {
    font-size: 3vw;
    color: black;
    padding: 4px;
}
</style>