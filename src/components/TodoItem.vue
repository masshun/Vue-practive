<template>
  <div class="todo-item" :class="{ 'is-complete': todo.completed }">
    <p>
      <input type="checkbox" @change="markComplete" />
      {{ todo.title }}
      <button @click="deleteTodo" class="del">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    deleteTodo() {
      this.$emit('delete-todo', this.todo.id);
    },
  },
};
</script>

<style scoped>
.todo-item {
  background: white;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
