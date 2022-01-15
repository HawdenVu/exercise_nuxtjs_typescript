<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <h1 class="title">{{ item.exclusionDetailsTitle }}</h1>
      <p v-for="(content, index_i) in item.exclusionDetailsContentList" :key="index_i">
        {{ content }}
      </p>
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
    const { list } = props
    return { list }
  }
}
</script>

<style scoped>
  .title {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
</style>