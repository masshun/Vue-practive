<template>
  <div class="hello">
    <h1>FormA</h1>

    <input type="text" v-model="name" placeholder="input your name" />

    <input type="text" v-model="msg" placeholder="input message" />

    Name:{{ name }}

    Message:{{ msg }}
    <button v-on:click="check">Check</button>
  </div>
</template>

<script>
export default {
  name: 'FormA',
  data() {
    return {
      name: '',
      msg: '',
    };
  },
  methods: {
    check() {
      alert('Your name is ' + this.name);
    },
  },
};
</script>
