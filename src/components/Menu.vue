<template>
  <nav ref="root" class="fixed top-2 right-2 z-10 flex flex-col items-end">
    <button
      type="button"
      class="text-gray-600 opacity-20 hover:opacity-100 transition-opacity duration-300 p-2 leading-none cursor-pointer"
      :aria-expanded="open"
      aria-label="Menu"
      @click="open = !open"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    </button>

    <ul
      v-if="open"
      class="mt-1 flex flex-col items-stretch bg-white rounded-md shadow-lg ring-1 ring-black/10 py-2 min-w-44 overflow-hidden"
    >
      <li v-for="link in links" :key="link.href">
        <a
          :href="link.href"
          target="_blank"
          class="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100 hover:text-blue-800 visited:text-gray-800 no-underline"
          >{{ link.name }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const open = ref(false)
const root = ref<HTMLElement | null>(null)

const links = [
  { name: 'scoreboard', href: 'https://scoreboard.vitterso.net' },
  { name: 'quiz-map', href: 'https://quiz-map.vitterso.net' },
  { name: 'quiz-drawing', href: 'https://quiz-drawing.vitterso.net' },
  { name: 'mini-jeopardy', href: 'https://mini-jeopardy.vitterso.net' },
  { name: 'buzzer', href: 'https://buzzer.vitterso.net' },
  { name: 'music-quiz', href: 'https://music-quiz.vitterso.net/' },
]

function onOutsideClick(event: MouseEvent) {
  if (open.value && root.value && !root.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', onOutsideClick))
onBeforeUnmount(() => document.removeEventListener('click', onOutsideClick))
</script>
