<template>
  <div class="bg-red-500 bg-opacity-10 text-red-500 p-4 rounded-lg shadow-sm">
    <p>Opps...</p>
    {{ props.message }}
    <p>{{ props.message ?? 'Something went wrong!' }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String
  }
})
</script>
