<script setup lang="ts">
import type {NuxtLinkProps} from '#app'

interface MobileLinkProps extends NuxtLinkProps {}

interface MobileLinkEmits {
  (event: 'openChange', open: boolean): boolean
}

const emits = defineEmits<MobileLinkEmits>()
const props = defineProps<MobileLinkProps>()

</script>

<template>
  <NuxtLink
    v-bind="props"
    class="flex items-center"
    onClick='()=>emit("openChange",false)'
  >
</template>
