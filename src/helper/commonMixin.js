export default {
  data() {
    return {
      mixinObject: {
        name: 'Learning mixin',
        difficulty: 'hard',
        number: 0,
      },
    };
  },
  // thisは使えない 再描画が頻繁に発生する箇所では用いない
  // パフォーマンス重視ならcomputed
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    },
  },
};
