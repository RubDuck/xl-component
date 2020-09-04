<template>
  <div class="picker-column">
    <ul class="picker-column_main">
      <li class="picker-column__message" ref="messageColumn" v-for="(item, index) in columns" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'xlPickerColumn',
  props: {
    columns: Array
  },
  data () {
    return {
      itemHeight: ''
    };
  },
  methods: {
    getItemHeight () {
      return this.itemHeight;
    }
  },
  mounted () {
    this.itemHeight = this.$refs.messageColumn[0].offsetHeight;
  }
};
</script>
