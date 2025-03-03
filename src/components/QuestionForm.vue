<template>
  <div class="w-full max-w-4xl mx-auto px-4 py-12">
    <!-- Question Container -->
    <div v-if="currentStep === 1" class="flex flex-col gap-24">
      <h2 class="text-5xl font-bold text-white text-center">
        Maakt u de melding voor uzelf, iemand anders of vanuit een instantie?
      </h2>
      <div class="grid grid-cols-1 gap-8">
        <label class="flex items-center gap-4 p-6 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition group">
          <div class="relative">
            <div class="w-8 h-8 border-4 border-white rounded-sm"></div>
            <div v-if="answers.forWho === 'self'" class="absolute inset-0 flex items-center justify-center">
              <div class="w-4 h-4 bg-white rounded-sm"></div>
            </div>
          </div>
          <span class="text-white text-2xl">Mijzelf</span>
          <input type="radio" v-model="answers.forWho" value="self" class="hidden">
        </label>
        <label class="flex items-center gap-4 p-6 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition group">
          <div class="relative">
            <div class="w-8 h-8 border-4 border-white rounded-sm"></div>
            <div v-if="answers.forWho === 'no'" class="absolute inset-0 flex items-center justify-center">
              <div class="w-4 h-4 bg-white rounded-sm"></div>
            </div>
          </div>
          <span class="text-white text-2xl">Iemand anders</span>
          <input type="radio" v-model="answers.forWho" value="no" class="hidden">
        </label>
      </div>
    </div>

    <div v-if="currentStep === 2" class="flex flex-col gap-8">
      <h2 class="text-5xl font-bold text-white text-center">
        Bij welk platform is het gebeurd?
      </h2>
      <div class="grid grid-cols-2 gap-8">
        <label v-for="platform in platforms" :key="platform" 
               class="flex items-center gap-4 p-6 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition group">
          <div class="relative">
            <div class="w-8 h-8 border-4 border-white rounded-sm"></div>
            <div v-if="answers.platform === platform" class="absolute inset-0 flex items-center justify-center">
              <div class="w-4 h-4 bg-white rounded-sm"></div>
            </div>
          </div>
          <span class="text-white text-2xl">{{ platform }}</span>
          <input type="radio" v-model="answers.platform" :value="platform" class="hidden">
        </label>
      </div>
    </div>

    <div v-if="currentStep === 3" class="flex flex-col gap-8">
      <h2 class="text-5xl font-bold text-white text-center">
        Onder welke categorie valt de post die je wilt verwijderen?
      </h2>
      <div class="grid grid-cols-1 gap-8">
        <label v-for="category in categories" :key="category" 
               class="flex items-center gap-4 p-6 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition group">
          <div class="relative">
            <div class="w-8 h-8 border-4 border-white rounded-sm"></div>
            <div v-if="answers.category === category" class="absolute inset-0 flex items-center justify-center">
              <div class="w-4 h-4 bg-white rounded-sm"></div>
            </div>
          </div>
          <span class="text-white text-2xl">{{ category }}</span>
          <input type="radio" v-model="answers.category" :value="category" class="hidden">
        </label>
      </div>
    </div>

    <!-- Review Step -->
    <div v-if="currentStep === 4" class="flex flex-col gap-8">
      <h2 class="text-5xl font-bold text-white text-center">
        Controleer uw antwoorden
      </h2>
      <div class="space-y-8 text-left">
        <div class="bg-white/10 rounded-lg p-6">
          <h3 class="text-white text-2xl font-semibold mb-2">Voor wie maakt u de melding?</h3>
          <p class="text-white text-xl">{{ answers.forWho === 'self' ? 'Mijzelf' : 'Iemand anders' }}</p>
        </div>
        <div class="bg-white/10 rounded-lg p-6">
          <h3 class="text-white text-2xl font-semibold mb-2">Platform</h3>
          <p class="text-white text-xl">{{ answers.platform }}</p>
        </div>
        <div class="bg-white/10 rounded-lg p-6">
          <h3 class="text-white text-2xl font-semibold mb-2">Categorie</h3>
          <p class="text-white text-xl">{{ answers.category }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-4 items-center">
        <button @click="submitForm" 
                class="w-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-medium text-2xl px-8 py-3 rounded-lg transform transition hover:scale-105">
          Verstuur melding
        </button>
        <button @click="resetForm" 
                class="w-full bg-white/10 hover:bg-white/20 text-white cursor-pointer font-medium text-2xl px-8 py-3 rounded-lg transform transition hover:scale-105">
          Begin opnieuw
        </button>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div v-if="currentStep !== 4" class="flex justify-between items-center mt-32">
      <button @click="previousStep" 
              :disabled="currentStep === 1"
              class="text-white text-4xl cursor-pointer p-4 disabled:opacity-50 hover:scale-110 transition-transform">
        Vorige
      </button>
      <button @click="nextStep" 
              :disabled="currentStep === totalSteps || !canProceed"
              class="text-white text-4xl cursor-pointer p-4 disabled:opacity-50 hover:scale-110 transition-transform">
        Volgende
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useRouter } from 'vue-router'

const router = useRouter()
const $toast = useToast()
const currentStep = ref(1)
const totalSteps = 4

const platforms = ['Facebook', 'Instagram', 'TikTok', 'Snapchat', 'Whatsapp', 'Telegram', 'Anders']
const categories = ['Criminaliteit', 'Pesten', 'Zeden']

const answers = ref({
  forWho: '',
  platform: '',
  category: ''
})

const resetForm = () => {
  currentStep.value = 1
  answers.value = {
    forWho: '',
    platform: '',
    category: ''
  }
}

const canProceed = computed(() => {
  switch (currentStep.value) {
    case 1:
      return answers.value.forWho !== ''
    case 2:
      return answers.value.platform !== ''
    case 3:
      return answers.value.category !== ''
    default:
      return false
  }
})

const nextStep = () => {
  if (currentStep.value < totalSteps && canProceed.value) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const submitForm = () => {
  console.log('Submitting answers:', answers.value)
  
  $toast.success('Melding gedaan!', {
    position: 'top',
    duration: 3000
  })

  setTimeout(() => {
    router.push('/')
  }, 2000)
}
</script>

<style scoped>
.group:has(input:checked) {
  background-color: rgba(255, 255, 255, 0.2);
}
</style> 