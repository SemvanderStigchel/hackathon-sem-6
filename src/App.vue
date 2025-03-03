<script setup>
import { ref } from 'vue'
import QuestionForm from './components/QuestionForm.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-400 to-blue-300">
    <!-- Navigation -->
    <nav class="p-6">
      <div class="w-full mx-auto flex justify-between items-center">
        <router-link to="/" 
          class="w-64 h-16 flex items-center justify-center text-2xl font-jersey rounded-md border-2 border-white transition-all"
          :class="$route.path === '/' ? 'bg-white text-blue-400' : 'bg-blue-400 text-white hover:bg-white hover:text-blue-400'">
          Home
        </router-link>
        <router-link to="/melding" 
          class="w-64 h-16 flex items-center justify-center text-2xl font-jersey rounded-md border-2 border-white transition-all"
          :class="$route.path === '/melding' ? 'bg-white text-blue-400' : 'bg-blue-400 text-white hover:bg-white hover:text-blue-400'">
          Melding maken
        </router-link>
        <router-link to="/gemeente" 
          class="w-64 h-16 flex items-center justify-center text-2xl font-jersey rounded-md border-2 border-white transition-all"
          :class="$route.path === '/gemeente' ? 'bg-white text-blue-400' : 'bg-blue-400 text-white hover:bg-white hover:text-blue-400'">
          Gemeente
        </router-link>
        <router-link to="/faq" 
          class="w-64 h-16 flex items-center justify-center text-2xl font-jersey rounded-md border-2 border-white transition-all"
          :class="$route.path === '/faq' ? 'bg-white text-blue-400' : 'bg-blue-400 text-white hover:bg-white hover:text-blue-400'">
          FAQ
        </router-link>
        <router-link to="/ernst" 
          class="w-64 h-16 flex items-center justify-center text-2xl font-jersey rounded-md border-2 border-white transition-all"
          :class="$route.path === '/ernst' ? 'bg-white text-blue-400' : 'bg-blue-400 text-white hover:bg-white hover:text-blue-400'">
          Ernst
        </router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jersey+25&display=swap');

.font-jersey {
  font-family: 'Jersey 25', sans-serif;
}

/* Apply Jersey font to all text by default */
* {
  font-family: 'Jersey 25', sans-serif;
}

.router-link-active {
  transform: scale(1.05);
}
</style>
