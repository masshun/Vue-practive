<template>
  <div class="hello">
    <h1>FormB</h1>

    <input type="text" v-model="age" placeholder="input your age" />

    <input type="text" v-model="address" placeholder="input your address" />

    Age:{{ age }}

    Address:{{ address }}
    <button v-on:click="check">Check</button>
  </div>
</template>

<script>
export default {
  name: 'FormB',
  data() {
    return {
      age: '',
      address: '',
    };
  },
  methods: {
    check() {
      alert('Your age is ' + this.age + '\nYour address is ' + this.address);
    },
  },
};
</script>
