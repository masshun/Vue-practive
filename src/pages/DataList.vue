<template>
  <div class="mt-5">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <!-- Via multiple directive modifiers -->
        <b-col><b-button v-b-toggle.collapse-a.collapse-b.quiz-result variant="outline-primary">クイズの結果</b-button></b-col>

        <!-- Via space separated string of IDs passed to directive value -->
        <b-col><b-button v-b-toggle="'collapse-c'">Other</b-button></b-col>

        <!-- Via array of string IDs passed to directive value -->
        <b-col><b-button v-b-toggle="['collapse-c']">Other</b-button></b-col>
      </b-row>
    </b-container>
    <!-- Elements to collapse -->
    <b-collapse id="collapse-a" class="mt-2">
      <b-card
        >累計回答数: <span>{{ getNumTotal }}</span></b-card
      >
    </b-collapse>
    <b-collapse id="collapse-b" class="mt-2">
      <b-card>累計正解数: {{ getNumCorrect }}</b-card>
    </b-collapse>
    <b-collapse id="quiz-result" class="mt-2">
      <b-card
        >正答率: <span v-if="0 < getNumTotal">{{ getCorrectAnswerRate }} %</span></b-card
      >
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-2">
      <b-card>Nothing</b-card>
    </b-collapse>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'dataList',
  computed: {
    ...mapGetters(['getNumCorrect', 'getNumTotal', 'getCorrectAnswerRate']),
  },
};
</script>

<style scoped></style>
