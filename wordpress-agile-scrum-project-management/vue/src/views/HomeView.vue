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

// Title change
document.title = 'WordPress Login Defender Plugin';
</script>

<template>
    <Home />
    <Footer /> 
</template>
