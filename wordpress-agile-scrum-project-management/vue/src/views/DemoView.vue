<script setup>
import { onMounted } from 'vue'
import Footer from '@/components/Footer.vue'
import DemoYouTube from '@/components/DemoYouTube.vue'

onMounted(() => {
   document.title = 'WordPress Plugin Demo - Project Management';
})
</script>

<template>
  <div id="primary" class="content-area">
        <main id="main" class="container" role="main">
              
        <div class="container-nav text-center">
            <router-link to="/">
                <img :src="'./imgs/logo.png'" alt="WordPress Plugin - Agile Scrum Kanban Board">
            </router-link>
            <nav>
              <router-link class="button button-shadow" to="/">HOME</router-link> | 
              <a class="button button-shadow" target="_blank" href="https://codecanyon.net/item/agile-scrum-project-issue-management/36720961">Purchase</a>
            </nav>
        </div>

        <h1 class="text-center">Video Demo</h1>
        
        <article class="text-center content">
          <DemoYouTube />
        </article>
  
        </main>
    </div>

    <Footer /> 
</template>

<style>
h1 {
    margin-bottom: 20px;
}

.container-nav {
    padding-top:10px;
    padding-bottom: 15px;
    display:flex;
    justify-content:space-between;
    align-items: center;
}

.container-nav img {
    display:inline-block;
}

article.content img {
    display:inline-block;
}

article {
    display: flex;
    justify-content: center;
}

@media only screen and (max-width: 750px) {
    .container-nav {
        flex-wrap: wrap;
    }

    .container-nav img {
        margin-bottom:10px;   
    }
    
    .button {
        padding: 16px 16px;
    }

    h1 {
        font-size: 24px;
    }
}
</style>