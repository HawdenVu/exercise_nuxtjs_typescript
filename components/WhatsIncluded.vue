<template>
  <div>
    <h1 class="title">What's included</h1>
    <div v-for="(item, index) in list" :key="index">
      <IncludedItem
        :coverDetailsTitle="item.coverDetailsTitle"
        :compareValue="item.compareValue"
        :coverDetailsContentList="item.coverDetailsContentList"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  setup(props: any) {
    const { list } = props;
    return { list }
  }
}
</script>

<style scoped>
  .title {
    font-size: 24px;
  }
</style>