<template>
  <p>{{ subTitle | lowerCase }}</p>
</template>

<script>
import commonMixin from '../helper/commonMixin';

export default {
  name: 'CustomContent',
  mixins: [commonMixin],
  data() {
    return {
      subTitle: 'Learning UX design',
    };
  },
};
</script>
