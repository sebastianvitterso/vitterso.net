<template>
  <div class="absolute inset-0 w-screen h-screen overflow-hidden pointer-events-none">
    <div
      v-if="enableFace"
      id="face"
      class="w-96 absolute top-0 left-0"
      :style="`translate: ${x}px  ${y}px;`"
    >
      <img :src="faceImage" alt="My face" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import faceImage from '../assets/face.png'

const enableFace = ref(true)
const x = ref(0)
const y = ref(0)

function toggleFace() {
  enableFace.value = !enableFace.value
  document.body.style.cursor = enableFace.value ? 'none' : 'auto'
}
function onTouchMove(event: TouchEvent) {
  const xPos = event.touches[0].clientX
  const yPos = event.touches[0].clientY
  moveFace(xPos, yPos)
}
function onMouseMove(event: MouseEvent) {
  const xPos = event.clientX
  const yPos = event.clientY
  moveFace(xPos, yPos)
}
function moveFace(xPos: number, yPos: number) {
  const faceWidth = 384
  const faceHeight = 512
  x.value = xPos - faceWidth / 2
  y.value = yPos - faceHeight / 2
}

onMounted(() => {
  document.addEventListener('dblclick', toggleFace)
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('touchmove', onTouchMove)
  document.body.style.cursor = 'none'
})
onBeforeUnmount(() => {
  document.removeEventListener('dblclick', toggleFace)
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('touchmove', onTouchMove)
  document.body.style.cursor = 'auto'
})

watch(enableFace, (newValue) => {})
</script>

<style>
:root {
  --y-dist: 20px;
}

@keyframes float {
  100%,
  0% {
    translate: 0;
  }

  50% {
    translate: 0 calc(var(--y-dist));
  }
}

#face > img {
  animation: float 3s ease-in-out infinite alternate;
}
</style>
