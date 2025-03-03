<template>
  <div class="flex items-start justify-center">
    <div class="w-full max-w-4xl px-4 py-8">
      <h1 class="text-7xl font-bold text-white text-center mb-4">FAQ</h1>
      <h2 class="text-2xl text-white text-center mb-16">Antwoorden op de meestgesteld vragen</h2>

      <div class="mt-8">
        <h3 class="text-4xl font-bold text-white mb-8">Algemeen</h3>
        
        <div class="space-y-4">
          <!-- FAQ Item -->
          <div class="border-b border-white/20">
            <button @click="toggleFaq('wie')" 
                    class="w-full py-4 text-left text-white text-xl flex justify-between items-center">
              <span>Wie zijn wij?</span>
              <span class="transform transition-transform text-2xl font-light" :class="{ 'rotate-180': openFaqs.wie }">^</span>
            </button>
            <div v-if="openFaqs.wie" class="pb-4 text-white">
              Wij zijn een organisatie die samenwerken met de Gemeente Rotterdam om online zedenzaken makkelijk op te sporen en te verwijderen.
            </div>
          </div>

          <!-- FAQ Item -->
          <div class="border-b border-white/20">
            <button @click="toggleFaq('doel')" 
                    class="w-full py-4 text-left text-white text-xl flex justify-between items-center">
              <span>Wat is ons doel?</span>
              <span class="transform transition-transform text-2xl font-light" :class="{ 'rotate-180': openFaqs.doel }">^</span>
            </button>
            <div v-if="openFaqs.doel" class="pb-4 text-white">
              Ons doel is om het proces van het melden en verwijderen van ongepaste online content te vereenvoudigen.
            </div>
          </div>

          <!-- FAQ Item -->
          <div class="border-b border-white/20">
            <button @click="toggleFaq('samenwerking')" 
                    class="w-full py-4 text-left text-white text-xl flex justify-between items-center">
              <span>Met wie werken wij samen?</span>
              <span class="transform transition-transform text-2xl font-light" :class="{ 'rotate-180': openFaqs.samenwerking }">^</span>
            </button>
            <div v-if="openFaqs.samenwerking" class="pb-4 text-white">
              We werken samen met verschillende instanties waaronder de Gemeente Rotterdam.
            </div>
          </div>

          <!-- FAQ Item -->
          <div class="border-b border-white/20">
            <button @click="toggleFaq('data')" 
                    class="w-full py-4 text-left text-white text-xl flex justify-between items-center">
              <span>Wat gebeurt er met mijn data?</span>
              <span class="transform transition-transform text-2xl font-light" :class="{ 'rotate-180': openFaqs.data }">^</span>
            </button>
            <div v-if="openFaqs.data" class="pb-4 text-white">
              Uw gegevens worden veilig behandeld en alleen gebruikt voor het afhandelen van uw melding.
            </div>
          </div>

          <!-- FAQ Item -->
          <div class="border-b border-white/20">
            <button @click="toggleFaq('melding')" 
                    class="w-full py-4 text-left text-white text-xl flex justify-between items-center">
              <span>Wat gebeurt er na het maken van een melding?</span>
              <span class="transform transition-transform text-2xl font-light" :class="{ 'rotate-180': openFaqs.melding }">^</span>
            </button>
            <div v-if="openFaqs.melding" class="pb-4 text-white">
              Na uw melding nemen wij contact op met de betreffende platforms en zorgen we voor een snelle afhandeling.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openFaqs = ref({
  wie: false,
  doel: false,
  samenwerking: false,
  data: false,
  melding: false
})

const toggleFaq = (key) => {
  openFaqs.value[key] = !openFaqs.value[key]
}
</script>

<style scoped>
.border-b {
  border-bottom-width: 1px;
}
</style> 