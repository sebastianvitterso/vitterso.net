<template>
  <div class="w-full bg-gray-100">
    <div class="w-full max-w-screen-lg bg-white mx-auto px-2 sm:px-8">
      <header class="flex flex-col justify-center text-center">
        <h1 class="text-4xl xs:text-7xl lg:text-8xl font-header mt-32 mb-12">Sebastian Vittersø</h1>
        <h2 class="text-3xl xs:text-5xl lg:text-6xl font-header mb-32">Datateknologistudent ved NTNU.</h2>
      </header>

      
      <h3 class="text-4xl text-gray-700 mb-4 text-center md:text-left">Prosjekter:</h3>
      <div class="space-y-8 mb-12">
        <ProjectArticle 
          v-for="(project, idx) in projects" :key="idx"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectArticle from './components/Project.vue';
import projects from './projects';

export default defineComponent({
  name: 'App',
  components: {
    ProjectArticle
  },
  data: () => ({
    projects,
  }),
});
</script>

<style lang="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;


  a {
    @apply underline;
    @apply text-blue-700;

    &:hover {
      @apply text-blue-900;
    }
    &:visited {
      @apply text-purple-900;
    }
  }
</style>
