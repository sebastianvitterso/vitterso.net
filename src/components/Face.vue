<template>
  <div
    class="absolute inset-0 w-screen h-screen overflow-hidden"
    @dblclick="toggleFace"
    @mousemove="onMouseMove"
    @touchmove="onTouchMove"
  >
    <div
      v-if="enableFace"
      class="w-96 absolute bottom-0 left-1/2"
      :style="`translate: ${x}vw  ${y}vh;`"
    >
      <img :src="faceImage" alt="My face" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import faceImage from '../assets/face.png'

const enableFace = ref(false)
const x = ref(0)
const y = ref(0)

function toggleFace() {
  enableFace.value = !enableFace.value
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
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight
  const xRatio = xPos / windowWidth
  const yRatio = yPos / windowHeight

  x.value = xRatio * 50 - 50
  y.value = yRatio * 25 + 5
}
</script>

<style></style>
