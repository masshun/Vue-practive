// 本来はQuestionBoxに収めるが、コンポーネントの練習のため分離
<template>
  <div>
    <b-nav tabs>
      <b-nav-item>counter: {{ numCorrect }} / {{ numTotal }}</b-nav-item>
    </b-nav>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="12">
          <QuestionBox v-if="0 < questions.length" :currentQuestion="questions[index]" :next="next" :increment="increment" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import QuestionBox from './QuestionBox.vue';
import axios from 'axios';

export default {
  name: 'Question',
  components: {
    QuestionBox,
  },
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    };
  },

  async created() {
    await axios
      .get('https://opentdb.com/api.php?amount=10')
      .then((res) => {
        this.questions = res.data.results;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        // 本来はstoreとコンポーネント内の同一のdataとは共有しない
        this.numCorrect++;
        // this.$store.commit('addNumCorrect', this.numCorrect);
        this.$store.dispatch('addNumCorrect', this.numCorrect);
      }
      this.numTotal++;
      //   this.$store.commit('addNumTotal', this.numTotal);
      this.$store.dispatch('addNumTotal', this.numTotal);
    },
  },
};
</script>
