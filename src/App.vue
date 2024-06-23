<template>
    <navbar></navbar>
    <person></person>
    <TheLayout>
        <router-view></router-view>
    </TheLayout>
    <Footer></Footer>
</template>
<script setup>
import "./assets/font/font.css"
import "./assets/base.css";
import navbar from "./components/NavBar.vue"
import person from "./components/Person.vue"
import TheLayout from "./components/TheLayout.vue"
import Footer from "../src//components/Footer.vue"

</script>
