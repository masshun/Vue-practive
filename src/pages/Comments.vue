<template>
  <v-container>
    <br />
    <h3>メモを投稿する</h3>
    <v-form ref="form" lazy-validation @submit.prevent="createComment">
      <v-text-field counter="20" label="ハンドルネーム" v-model="name" />
      <br />
      <v-textarea filled label="コメント" v-model="comment" auto-grow />
      <v-btn color="primary" style="color: white" type="submit" depressed>
        Submit
      </v-btn>
    </v-form>

    <br /><br />
    <h3>掲示板</h3>
    <div v-for="post in posts" :key="post.id">
      <br />
      <div>名前:{{ post.fields.name.stringValue }}</div>
      <div>コメント:{{ post.fields.comment.stringValue }}</div>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import { uuid } from 'vue-uuid';

export default {
  name: 'Comments',
  data() {
    return {
      id: uuid.v4(),
      name: '',
      comment: '',
      posts: [],
    };
  },
  computed: {
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  methods: {
    createComment() {
      // 第二引数は送りたいデータ 今回はfirestore特有の表現
      // firebase特有のaddなどはaxiosを用いている
      axios
        .post(
          '/comments',
          {
            fields: {
              id: {
                stringValue: this.id,
              },
              name: {
                stringValue: this.name,
              },
              comment: {
                stringValue: this.comment,
              },
            },
          },
          {
            headers: {
              Authorization: `Bearer ${this.idToken}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      this.name = '';
      this.comment = '';
    },
  },
  async created() {
    await axios
      .get('/comments', {
        headers: {
          Authorization: `Bearer ${this.idToken}`,
        },
      })
      .then((response) => {
        this.posts = response.data.documents;
      });
  },
};
</script>
