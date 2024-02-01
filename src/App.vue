<script setup>
import SearchBar from '@components/search-bar.vue'
import weatherInfoCard from '@components/weather-info-card.vue'
import { useWeatherStore } from '@stores/weather'
import { onMounted } from 'vue'

const weatherStore = useWeatherStore()

onMounted(() => {
  weatherStore.getWeatherInfo()
})
</script>

<template>
  <div class="container w-full md:mx-auto px-4 md:w-3/4 lg:w-2/3 xl:w-2/3">
    <SearchBar />
    <hr class="my-5" />
    <weatherInfoCard />
  </div>
</template>
