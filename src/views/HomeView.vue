<template>
  <div class="flex flex-col items-center justify-center min-h-[80vh] px-4 gap-10 text-center">
    <h1 class="text-8xl font-bold text-white mb-16 tracking-wider font-jersey">
      TAKE THAT DOWN!
    </h1>
    
    <router-link to="/melding" 
      class="text-3xl bg-blue-500 hover:bg-blue-600 text-white font-jersey px-12 py-4 rounded-md shadow-lg transform transition-all hover:scale-105">
      Melding maken
    </router-link>
  </div>
</template>

<style scoped>
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
</style> 