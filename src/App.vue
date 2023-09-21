<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-full max-w-screen-lg bg-white mx-auto px-2 sm:px-8">
      <header class="flex flex-col justify-center text-center items-center select-none">
        <h1 class="text-4xl xs:text-7xl lg:text-8xl font-header mt-32 mb-12">Sebastian Vittersø</h1>
        <h2 class="text-3xl xs:text-5xl lg:text-6xl font-header mb-32">
          Fullstack-utvikler med datateknologiutdanning.
        </h2>
      </header>

      <Face />
    </div>
  </div>
</template>

<script setup lang="ts">
import Face from './components/Face.vue'
</script>

<style lang="css">
@import url('./base.css');
</style>
