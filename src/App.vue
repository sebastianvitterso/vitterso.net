<template>
  <Menu />

  <div class="w-full h-full flex justify-center items-center">
    <div class="w-full max-w-(--breakpoint-lg) bg-white mx-auto px-2 sm:px-8">
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
import { ref } from 'vue';
import Face from './components/Face.vue';
import Menu from './components/Menu.vue';

const open = ref(false)

const links = [
  { name: 'scoreboard', href: 'https://scoreboard.vitterso.net' },
  { name: 'quiz-map', href: 'https://quiz-map.vitterso.net' },
  { name: 'quiz-drawing', href: 'https://quiz-drawing.vitterso.net' },
  { name: 'mini-jeopardy', href: 'https://mini-jeopardy.vitterso.net' },
  { name: 'music-quiz', href: 'https://music-quiz.vitterso.net/' },
  { name: 'buzzer', href: 'https://buzzer.vitterso.net' },
]
</script>

<style lang="css">
@import url('./base.css');
</style>
Face from './components/Face.vue';
import Menu from './components/Menu.vue';