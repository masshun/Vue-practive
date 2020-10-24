<template>
  <div>
    <div class="question-box-container">
      <b-jumbotron>
        <template slot="lead">
          {{ currentQuestion.question }}
        </template>

        <hr class="my-4" />

        <b-list-group>
          <!-- answerを削除するアクションをとるとindexがおかしくなるが、ここでは一旦無視 -->
          <b-list-group-item
            v-for="(answer, index) in shuffledAnswers"
            :key="index"
            @click="selectAnswer(index)"
            :class="answerClass(index)"
          >
            {{ answer }}
          </b-list-group-item>
        </b-list-group>

        <b-button variant="primary" @click="submitAnswer" :disabled="selectedIndex === null || answered">Submit</b-button>
        <b-button @click="next" variant="success">Next</b-button>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'QuestionBox',
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
    };
  },
  //   mounted() {
  //     // mountした段階ではcurrentQuestionは値を持たないため、undefinedとなる
  //     console.log(this.currentQuestion);
  //   },
  computed: {
    // answers() {
    //   let answers = [...this.currentQuestion.incorrect_answers];
    //   answers.push(this.currentQuestion.correct_answer);
    //   return answers;
    // },
  },
  watch: {
    currentQuestion: {
      // true: 初期読み込み時にも呼び出す
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
      this.shuffledAnswers = _.shuffle(answers);
      this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
    },
    submitAnswer() {
      let isCorrect = false;
      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }
      this.answered = true;
      this.increment(isCorrect);
      this.next();
    },
    answerClass(index) {
      let answerClass = '';
      if (this.selectedIndex === index) {
        answerClass = 'selected';
      } else if (this.correctIndex === index) {
        answerClass = 'correct';
      } else if (this.selectedIndex === index && this.correctIndex !== index) {
        answerClass = 'incorrect';
      }

      return answerClass;
    },
  },
};
</script>

<style scoped>
.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: lightblue;
}

.correct {
  background-color: lightgreen;
}

.incorrect {
  background-color: red;
}
</style>
