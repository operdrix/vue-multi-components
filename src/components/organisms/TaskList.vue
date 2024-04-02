<script setup lang="ts">
import TaskItem from '@/components/molecules/TaskItem.vue'
import Task from '@/models/Task'
import { ref } from 'vue'

const tasks = ref<Task[]>([
  new Task(1, 'Acheter du pain', false),
  new Task(2, 'Acheter du lait', false),
  new Task(3, 'Acheter du beurre', false),
  new Task(4, 'Acheter du fromage', false)
])
const handleUpdateTaskEvent = (data: { currentTask: Task, index: number }) => {
  tasks.value[data.index] = data.currentTask
}
</script>

<template>
  <div>
    <h1>Liste de tâches</h1>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id">
        <TaskItem :task="task" :index="index" @update:task="handleUpdateTaskEvent" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
