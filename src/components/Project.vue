<template>
  <article class="flex flex-col md:flex-row items-center">
    <img 
      :src="project.imageUrl" 
      alt="Project image"
      class="w-56 h-56 xs:w-96 xs:h-96 md:w-64 md:h-64 border-gray-200 border-4"
    />
    <div class="px-2 md:px-4 mt-2 md:mt-0">
      <h4 class="text-2xl space-x-2">
        <span>{{project.title}}</span>
        <span 
          v-for="(icon, idx) in project.icons" :key="idx"
          class="text-gray-600 hover:text-gray-500"
        >
          <i :class="icon.class" :title="icon.title"></i>
        </span>
      </h4>
      <p v-html="project.description"/>
      <a 
        v-if="project.githubLink" :href="project.githubLink.link"
        class="text-gray-600 hover:text-gray-700 text-4xl"
      >
        <i 
          class="py-2"
          :class="project.githubLink.iconClass" 
          :title="project.githubLink.title" 
        />
      </a>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Project from '../types/project'

export default defineComponent({
  name: 'Project',
  props: {
    project: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
