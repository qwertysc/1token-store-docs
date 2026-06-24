<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)
const imageSrc = ref('')
const imageAlt = ref('')

function isImageUrl(value: string) {
  try {
    const url = new URL(value, window.location.href)
    return /\.(avif|gif|jpe?g|png|svg|webp)$/i.test(url.pathname)
  } catch {
    return false
  }
}

function openLightbox(src: string, alt: string) {
  imageSrc.value = src
  imageAlt.value = alt
  isOpen.value = true
  document.documentElement.classList.add('image-lightbox-open')
}

function closeLightbox() {
  isOpen.value = false
  imageSrc.value = ''
  imageAlt.value = ''
  document.documentElement.classList.remove('image-lightbox-open')
}

function handleDocumentClick(event: MouseEvent) {
  const target = event.target

  if (!(target instanceof Element)) {
    return
  }

  const link = target.closest('.vp-doc a')
  const image = link?.querySelector('img')

  if (!(link instanceof HTMLAnchorElement) || !(image instanceof HTMLImageElement)) {
    return
  }

  if (!isImageUrl(link.href)) {
    return
  }

  event.preventDefault()
  openLightbox(link.href, image.alt || 'Preview image')
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape' && isOpen.value) {
    closeLightbox()
  }
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleKeydown)
  document.documentElement.classList.remove('image-lightbox-open')
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="image-lightbox"
      role="dialog"
      aria-modal="true"
      @click.self="closeLightbox"
    >
      <button class="image-lightbox__close" type="button" aria-label="Close image preview" @click="closeLightbox">
        <span aria-hidden="true"></span>
      </button>
      <img class="image-lightbox__image" :src="imageSrc" :alt="imageAlt" />
    </div>
  </Teleport>
</template>
