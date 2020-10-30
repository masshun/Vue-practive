<template>
  <v-container justifiy-content-center>
    <p>{{ subTitle | lowerCase }}</p>

    <div class="flex-center">
      <v-radio-group row v-model="selectedComponent">
        <v-radio type="radio" id="FormA" value="FormA" label="FormA" />
        <v-radio type="radio" id="FormB" value="FormB" label="FormB" />
      </v-radio-group>
    </div>
    <!-- 動的にコンポーネントを切り替えても値は保持されるss -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </v-container>
</template>

<script>
import commonMixin from '../helper/commonMixin';
import FormA from '../components/FormA.vue';
import FormB from '../components/FormB.vue';

export default {
  name: 'CustomContent',
  mixins: [commonMixin],
  components: {
    FormA,
    FormB,
  },
  data() {
    return {
      subTitle: 'Learning UX design',
      selectedComponent: '',
    };
  },
};
</script>

<style scoped>
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
