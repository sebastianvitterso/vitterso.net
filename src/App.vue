<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="w-full max-w-screen-lg bg-white mx-auto px-2 sm:px-8">
      <header
        class="flex flex-col justify-center text-center items-center select-none py-32 gap-12"
      >
        <h1 class="text-4xl xs:text-7xl lg:text-8xl font-header">Sebastian Vittersø</h1>
        <h2 class="text-3xl xs:text-5xl lg:text-6xl font-header">
          Fullstack-utvikler med datateknologiutdanning.
        </h2>

        <a
          href="mailto:sebastian.vitters@gmail.com"
          target="_blank"
          class="text-4xl text-black hover:text-blue-800 visited:text-black font-header underline-offset-8 decoration-1"
          >Vil du sende meg en mail?</a
        >
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
