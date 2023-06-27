<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const dataVAttribs = ref<string[]>([]);
const rootRef = ref<HTMLDivElement | null>(null);

onMounted(async () => {
  if (!rootRef.value) return;

  await nextTick();
  dataVAttribs.value = Object.keys(rootRef.value.dataset);
});

console.log(
  "Referencing this changes the data-v attribute hash",
  import.meta.env.SSR
);
</script>

<template>
  <div class="root" ref="rootRef">
    <div>Howdy, my data-v-* attribs are: {{ dataVAttribs }}</div>
  </div>
</template>

<style scoped>
.root {
  color: red;
}
</style>
