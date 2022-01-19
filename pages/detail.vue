<template>
  <div>
    <v-app-bar>
      <v-btn text @click="$router.push('/')">
        {{ isVI ? "Danh sách" : "List"}}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="ChangeLang">
        {{ isVI ? "Tiếng Anh" : "Vietnamese"}}
      </v-btn>
    </v-app-bar>
    <div style="height: 50px" />
    <overview
      :productName="!data ? '.' : isVI ? data.productNameVi : data.productNameEn"
      :productType="!data ? '.' : isVI ? data.planNameVi : data.planNameEn"
      :premium="data ? data.premium : 0"
      :sumInsured="data ? data.sumInsured : 0"
      :insuredPeriod="data ? Number(data.insuredPeriod) : 0"
    />
    <div class="spacer" />
    <WhatsIncluded :list="data ?
      isVI ? data.planDetails.vi.whatIncluded.list : data.planDetails.en.whatIncluded.list : []"
      :isVI="isVI"
    />
    <Document :list="data ? isVI ? data.planDetails.vi.exclusionDetails : data.planDetails.en.exclusionDetails : []" />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  useFetch,
  ref
} from '@nuxtjs/composition-api'
import axios from 'axios'
import { useChangeLanguage } from '../hook'

export default {
  layout: 'phone',
  async asyncData(Context: any) {
    const { id } = Context.query;
    const response = await axios
      .get(`/data/data.json`)
      .then(res => res.data);
    const data = response.find((item: any) => item.id === id)
    return { data };
  },
  setup() {
    const { isVI, ChangeLang, initLang } = useChangeLanguage();
    initLang()
    return { isVI, ChangeLang }
  },
}
</script>

<style scoped>
  .spacer {
    height: 20px;
  }
</style>
