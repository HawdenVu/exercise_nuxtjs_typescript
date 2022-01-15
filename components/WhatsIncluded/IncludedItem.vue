<template>
  <div>
    <v-row class="item">
      <v-col cols="2">
        <img class="logo" :src="coverDetailsImageLink">
      </v-col>
      <v-col cols="10">
        <div class="brand">
          <h1>{{ coverDetailsTitle }}</h1>
          <b>{{ Number(compareValue).toLocaleString('vi-VN') }}đ</b>
        </div>
        <ul class="content">
          <li v-for="(item, index) in coverDetailsContentList" :key="index">
            {{ item }}
          </li>
        </ul>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    coverDetailsImageLink: {
      type: String,
      default: "/v.png"
    },
    coverDetailsTitle: {
      type: String,
      default: ""
    },
    compareValue: {
      type: Number,
      default: 0
    },
    coverDetailsContentList: {
      type: Array,
      default: []
    },
  },
  setup(props: any) {
    const {
      coverDetailsImageLink,
      coverDetailsTitle,
      compareValue,
      coverDetailsContentList,
    } = props

    return {
      coverDetailsImageLink,
      coverDetailsTitle,
      compareValue,
      coverDetailsContentList,
    }
  }
}
</script>

<style scoped>
  .item {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .logo {
    width: 60px;
    margin: 0 auto;
  }
  .brand {}
  .brand h1 {
    font-size: 18px;
    margin-bottom: 7px;
    color: #FD7A40;
  }
  .brand b {
    font-size: 20px;
    color: #000000;
  }
  .content {
    list-style: none;
  }
  .content li:before {
    content: "-";
  }
</style>