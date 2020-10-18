<template>
  <div>
    <h1>Todos</h1>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @delete-todo="$emit('delete-todo', todo.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';
export default {
  name: 'Todos',
  components: {
    TodoItem,
  },
  props: ['todos'],
};
</script>

<style scoped></style>
