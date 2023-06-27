<script setup lang="ts">
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

const showComponent = ref(true);
</script>

<template>
  <div>
    <button @click="showComponent = !showComponent">
      Toggle Child Component
    </button>
    <ChildComponent v-if="showComponent" />
  </div>
</template>
