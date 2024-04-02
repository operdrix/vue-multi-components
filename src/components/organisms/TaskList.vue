<script setup lang="ts">
import TaskItem from '@/components/molecules/TaskItem.vue'
import Task from '@/models/Task'
import { ref } from 'vue'

const tasks = ref<Task[]>([
  { id: 1, label: 'Acheter du pain', finished: false },
  { id: 2, label: 'Acheter du lait', finished: false },
  { id: 3, label: 'Acheter du beurre', finished: false },
  { id: 4, label: 'Acheter du fromage', finished: false }
])
</script>

<template>
  <div>
    <h1>Liste de tâches</h1>
    <ul>
      <li v-for="(task, index) in tasks" :key="task.id">
        <TaskItem :task="task" :index="index" />
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
