<template>
  <div>Home</div>
  {{ user }}
</template>

<script setup lang="ts">
const user = useSupabaseUser();
</script>
