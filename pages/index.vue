<template>
  <div>
    <overview
      :premium="data ? data.premium : 0"
      :sumInsured="data ? data.sumInsured : 0"
      :insuredPeriod="data ? Number(data.insuredPeriod) : 0"
    />
    <div class="spacer" />
    <WhatsIncluded :list="data ? data.planDetails.en.whatIncluded.list : []" />
    <Document :list="data ? data.planDetails.en.exclusionDetails : []" />
    <Comparison
      :nameTarget="data ? data.productNameEn : name "
      :compareName="data ? data.productNameEn : name "
      :list="data ? data.planDetails.en.whatIncluded.list : []"
      :compareTarget="compareTarget ? compareTarget.planDetails.en.whatIncluded.list : []"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref
} from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  layout: 'phone',
  data() {
    return {
      name: "",
    }
  },
  setup() {
    const data: any = ref(null)
    const compareTarget: any = ref(null)

    useFetch(async () => {
      const response = await axios.get('http://localhost:3000/data/data.json')
      .then(res => res.data);
      data.value = response[0]
      compareTarget.value = response[1]
    })

    return { data, compareTarget }
  },
})
</script>

<style scoped>
  .spacer {
    height: 20px;
  }
</style>
