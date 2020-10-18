<template>
  <div id="app">
    <AddTodo @add-todo="addTodo" />
    <!-- props名="渡したいキー" -->
    <Todos :todos="todos" @delete-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from '../components/Todos.vue';
import AddTodo from '../components/AddTodo.vue';
import axios from 'axios';

export default {
  name: 'Top',
  components: {
    Todos,
    AddTodo,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    deleteTodo(id) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((this.todos = this.todos.filter((todo) => todo.id !== id)))
        .catch((err) => console.log(err));
    },
    addTodo(newTodo) {
      // 分割代入
      const { title, completed } = newTodo;
      axios
        .post('https://jsonplaceholder.typicode.com/todos', {
          title,
          completed,
        }) // postした後で返ってくるdataを既存のtodosに格納する
        .then((res) => (this.todos = [...this.todos, res.data]))
        .catch((err) => console.log(err));
    },
  },
  // APIコールやDOMへのマウントが完了して画面が描画されるまでのローディングの表示処理を記述
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => (this.todos = res.data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: white;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
