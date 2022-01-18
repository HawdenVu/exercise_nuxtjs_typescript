<template>
  <div>
    <h1 class="title">What's included</h1>
    <v-text-field
      :placeholder="isVI ? 'tìm kiếm...' : 'search...'"
      :model="searchValue"
      @keyup="OnSearch"
    />
    <div v-for="(item, index) in filtersList" :key="index">
      <IncludedItem
        :coverDetailsTitle="item.coverDetailsTitle"
        :compareValue="item.compareValue"
        :coverDetailsContentList="item.coverDetailsContentList"
        :coverDetailsContentArgList="item.coverDetailsContentArgList"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { watch, ref, watchEffect } from '@nuxtjs/composition-api'
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    isVI: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      filtersList: this.list,
      searchValue: "",
    }
  },
  methods: {
    OnSearch(event: any): void {
      this.searchValue = event.target.value
    }
  },
  watch: {
    searchValue: function (value: String): void {
      this.filtersList = this.list.filter((item: any) => item.coverDetailsTitle.toLowerCase().includes(value.toLowerCase()))
    },
    list: function (): void {
      this.filtersList = this.list
    },
  }
}
</script>

<style scoped>
  .title {
    font-size: 24px;
  }
</style>