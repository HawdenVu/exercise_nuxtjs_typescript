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
  setup(props: any) {
    const { list, isVI } = props

    const filtersList = ref(list)
    const searchValue = ref("")
    
    function OnSearch(event: any): void {
      searchValue.value = event.target.value
    }
    
    watch(searchValue, (value: String) => {
      filtersList.value = props.list.filter((item: any) => item.coverDetailsTitle.toLowerCase().includes(value.toLowerCase()))
    })

    watch(() => props.list, (value) => {
      filtersList.value = value
    })

    return { filtersList, searchValue, OnSearch }
  },
  // data(): any {
  //   const self: any = this;
  //   return {
  //     filtersList: self.list,
  //     searchValue: "",
  //   }
  // },
  // methods: {
  //   OnSearch(event: any): void {
  //     const self: any = this;
  //     self.searchValue = event.target.value
  //   }
  // },
  // watch: {
  //   searchValue: function (value: String): void {
  //     const self: any = this;
  //     self.filtersList = self.list.filter((item: any) => item.coverDetailsTitle.toLowerCase().includes(value.toLowerCase()))
  //   },
  //   list: function (): void {
  //     const self: any = this;
  //     self.filtersList = this.list
  //   },
  // }
}
</script>

<style scoped>
  .title {
    font-size: 24px;
  }
</style>