<script setup lang="ts">
import { computed, ref } from 'vue'
import Task from '@/models/Task'

const props = defineProps<{
  task: Task,
  index: Number
}>()
const currentTask = ref(props.task);
const classFinished = computed(() => {
  return props.task.finished ? 'finished' : ''
})
</script>

<template>
  <div>
    <label>
      <h3 :class="classFinished">{{ currentTask.label }}</h3>
      <input 
        type="checkbox" 
        v-model="currentTask.finished" 
        @change="$emit('update:task', {currentTask, index})"
      />
    </label>
  </div>
</template>

<style scoped>
label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

h3 {
  margin: 0;
  &.finished {
    text-decoration: line-through;
  }
}

input {
  transform: scale(1.5);
}
</style>
