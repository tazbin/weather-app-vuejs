<template>
  <div class="relative mt-5">
    <input
      v-model="inputValue"
      class="py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-full"
      placeholder="Search city..."
    />
    <div class="absolute inset-y-0 left-0 flex items-center pl-2">
      <svg
        class="h-4 w-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </div>
    <ul
      v-if="showSuggestions && locationStore.locations.length"
      class="absolute z-10 mt-2 bg-white border border-gray-300 rounded-md w-full"
    >
      <li
        v-for="(location, index) in locationStore.locations"
        :key="index"
        @click="handleSuggestionClick(location)"
        class="px-4 py-2 cursor-pointer hover:bg-gray-100 transition duration-300"
      >
        {{
          `${location.name}, ${location.region ? location.region + ', ' : ''}${location.country}`
        }}
      </li>
    </ul>
  </div>
  <p v-if="showSuggestions && !locationStore.locations.length" class="pt-2 text-slate-700 italic">
    No city found...
  </p>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useLocationStore } from '@stores/location'
import { useWeatherStore } from '@stores/weather'

const locationStore = useLocationStore()
const weatherStore = useWeatherStore()

const inputValue = ref('')
const showSuggestions = ref(false)

watch(inputValue, (newVal) => {
  newVal = newVal.trim()
  if (newVal.length) {
    showSuggestions.value = true
    locationStore.searchLocation(newVal)
  } else {
    showSuggestions.value = false
  }
})

const handleSuggestionClick = (selectedSuggestion) => {
  weatherStore.getWeatherInfo(selectedSuggestion.id)
  showSuggestions.value = false
  inputValue.value = ''
}
</script>
