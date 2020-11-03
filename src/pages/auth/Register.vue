<template>
  <v-container>
    <!-- :width="width" で動的に変化 -->
    <v-card :width="600" class="mx-auto mt-5">
      <v-form class="p-5" @submit.prevent="register">
        <v-text-field
          type="text"
          :counter="128"
          v-model="email"
          :rules="emailRules"
          prepend-icon="mdi-mail"
          label="メールアドレス"
          placeholder="sample@email.com"
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          type="password"
          prepend-icon="mdi-lock"
          append-icon="mdi-eye-off"
          label="パスワード"
          placeholder="input password"
        />
        <v-card-actions>
          <v-btn type="submit" class="info">新規登録</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import FormValidation from '../../helper/FormValidation.vue';

export default {
  name: 'Register',
  mixins: [FormValidation],
  // width: '',
  data() {
    return {};
  },
  computed: {
    width() {
      let percent = '';
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          percent = '700';
          break;
        case 'sm':
          percent = '700';
          break;
        case 'md':
          percent = '600';
          break;
        case 'lg':
          percent = '600';
          break;
        case 'xl':
          percent = '500';
          break;
      }
      return percent;
    },
  },
  methods: {
    register() {
      this.$store.dispatch('register', {
        email: this.email,
        password: this.password,
      });
      this.email = '';
      this.password = '';
    },
  },
};
</script>
