<template>
  <div
    class="w-full max-w-96 shadow-2xl rounded-lg p-5"
    :class="{
      'bg-gradient-to-br from-blue-300 via-blue-4   00 to-blue-500 text-white':
        weatherStore.weatherInfo.current?.is_day,
      'bg-gradient-to-br from-indigo-800 via-indigo-900 to-purple-900 text-white':
        !weatherStore.weatherInfo.current?.is_day
    }"
  >
    <div class="flex justify-between">
      <div>
        {{ weatherStore.weatherInfo.location?.name }}
        <br />
        {{ weatherStore.weatherInfo.location?.country }}
      </div>
      <div>
        {{
          new Date(weatherStore.weatherInfo.location?.localtime).toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          })
        }}
        <br />
        {{
          new Date(weatherStore.weatherInfo.location?.localtime).toLocaleString('en-US', {
            weekday: 'long'
          })
        }}
      </div>
    </div>

    <div class="text-center">
      <img
        :src="weatherStore.weatherInfo.current?.condition.icon"
        class="mx-auto w-24 h-24"
        alt="weather icon"
      />
      <p class="text-7xl">{{ weatherStore.weatherInfo.current?.temp_c }}&deg;</p>
      <p class="text-2xl mt-2">
        {{ weatherStore.weatherInfo.current?.condition.text }}
      </p>
    </div>

    <div class="relative">
      <div
        class="w-full h-px my-6 bg-gradient-to-r from-transparent via-white to-transparent"
      ></div>
    </div>

    <div
      class="flex justify-between items-center"
      v-for="forecast in weatherStore.weatherInfo.forecast?.forecastday"
      :key="forecast.date"
    >
      <div class="flex-1">
        {{ new Date(forecast.date).toLocaleDateString('en-us', { weekday: 'long' }) }}
      </div>
      <div class="flex-1">
        <img
          :src="forecast.day.condition.icon"
          class="mx-auto h-9 w-9"
          :alt="forecast.day.condition.text"
        />
      </div>
      <div class="flex-1 text-right">
        {{ forecast.day.maxtemp_c }} /
        {{ forecast.day.mintemp_c }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWeatherStore } from '@stores/weather'

const weatherStore = useWeatherStore()
</script>
