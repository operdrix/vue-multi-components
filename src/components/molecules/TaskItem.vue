<script setup lang="ts">
import { computed } from 'vue'
import Task from '@/models/Task'

const props = defineProps({
  task: {
    type: Task,
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})
const currentTask = defineModel<Task>()
currentTask.value = props.task

const isFinished = computed(() => {
  return props.task.finished ? 'line-through' : ''
})
</script>

<template>
  <div>
    <label>
      <h3 :class="isFinished">{{ currentTask?.label }}</h3>
      <input type="checkbox" v-model="currentTask.finished" />
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
  &.line-through {
    text-decoration: line-through;
  }
}

input {
  transform: scale(1.5);
}
</style>
