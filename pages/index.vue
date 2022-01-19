<template>
  <div>
    <v-app-bar>
      <v-spacer></v-spacer>
      <v-btn text @click="ChangeLang">
        {{ isVI ? "Tiếng Anh" : "Vietnamese"}}
      </v-btn>
    </v-app-bar>
    <v-spacer />
    <div v-if="!isOpenCompare">
      <v-card class="product-card" color="#FEEFE9" v-for="(item, index) in data" :key="index">
        <v-card-title class="text-h5">
          {{ isVI ? item.productNameVi : item.productNameEn }}
        </v-card-title>
        <v-card-subtitle>{{ item.premium.toLocaleString('vi-VN') }}đ</v-card-subtitle>
        <v-card-actions>
          <v-btn text @click="$router.push(`/detail?id=${item.id}`)">
            {{ isVI ? "Xem thêm..." : "Learn more..." }}
          </v-btn>
          <v-spacer />
          <v-btn text @click="addToCompareList(item)" v-if="!isExistInCompareList(item)">
            {{ isVI ? 'So sánh' : 'Compare' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div v-else>
      <v-btn @click="onCloseCompare"><h3>{{ isVI ? "TRỞ VỀ DANH SÁCH" : "BACK TO LIST" }}</h3></v-btn>
      <Comparison
        :idTarget="compareList[0].id"
        :compareId="compareList[1].id"
        :nameTarget="isVI ? compareList[0].productNameVi : compareList[0].productNameEn"
        :compareName="isVI ? compareList[1].productNameVi : compareList[1].productNameEn"
        :list="compareList[0].planDetails.en.whatIncluded.list"
        :compareTarget="compareList[1].planDetails.en.whatIncluded.list"
        :isVI="isVI"
      />
    </div>
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

export default defineComponent({
  layout: 'phone',
  setup() {
    const { isVI, ChangeLang, initLang } = useChangeLanguage();
    initLang()

    const data: any = ref(null)

    useFetch(async () => {
      data.value = await axios.get('/data/data.json')
      .then(res => res.data);
    })

    const compareList = ref([]);
    const isOpenCompare = ref(false)

    function addToCompareList(target: never): void {
      compareList.value.push(target);
      if (compareList.value.length >= 2) {
        isOpenCompare.value = true
      }
    }

    function isExistInCompareList(target: any): Boolean {
      const existItem = compareList.value.find((item: any) => item.id === target.id);
      if (existItem && existItem !== undefined) {
        return true
      } else {
        return false
      }
    }

    function onCloseCompare(): void {
      isOpenCompare.value = false;
      compareList.value.length = 0;
    }

    return { data, isVI, ChangeLang, addToCompareList, compareList, isExistInCompareList, isOpenCompare, onCloseCompare }
  },
})
</script>

<style scoped>
  .spacer {
    height: 20px;
  }
  .product-card {
    margin-bottom: 10px;
  }
</style>
