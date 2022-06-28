<script setup>
import { onMounted } from 'vue'
import Home from '@/components/Home.vue'
import Footer from '@/components/Footer.vue'

onMounted(() => {
   let script = document.createElement('script')
   script.async = true
   script.src = 'https://wordpress-plugins-world.github.io/wordpress-agile-scrum-project-management/assets/home.min.js'
   document.head.appendChild(script)
})
</script>

<template>
    <Home />
    <Footer /> 
</template>
