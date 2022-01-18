<template>
  <div class="Overview">
    <v-row>
      <img class="logo" src="/v.png">
      <div class="brand">
        <h1>{{ productName }}</h1>
        <b>{{ productType }}</b>
      </div>
    </v-row>
    <p class="note">Our Basic plan gives you standard protection and is great to get started with.</p>
    <v-list class="information">
      <v-list-item>
        <v-list-item-content>
          <span>Premium fee</span>
        </v-list-item-content>
        <v-list-item-content>
          <span class="content-01">{{ premium.toLocaleString('vi-VN') }}đ</span>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <span>Sum insured</span>
        </v-list-item-content>
        <v-list-item-content>
          <span class="content-02">{{ sumInsured.toLocaleString('vi-VN') }}đ</span>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <span>Insurer</span>
        </v-list-item-content>
        <v-list-item-content>
          <span class="content">Bao Minh</span>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-content>
          <span>Insurer period</span>
        </v-list-item-content>
        <v-list-item-content>
          <span class="content">{{ insuredPeriod }} year</span>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
    </v-list>
  </div>
</template>
<script lang="ts">

export default {
  name: 'Overview',
  props: {
    productName: {
      type: String,
      default: "."
    },
    productType: {
      type: String,
      default: "."
    },
    insurer: {
      type: String,
      default: "Bao Minh"
    },
    premium: {
      type: Number,
      default: 0,
    },
    sumInsured: {
      type: Number,
      default: 0,
    },
    insuredPeriod: {
      type: Number,
      default: 0,
    },
  },
  setup (props: any) {
    const { insurer, premium, sumInsured, insuredPeriod, productName, productType } = props
  }
}
</script>

<style scoped>
  .logo {
    height: 60px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .brand {
    margin-bottom: 40px;
  }
  .brand h1 {
    font-size: 18px;
    margin-top: 4px;
  }
  .brand b {
    font-size: 14px;
    color: #BBBBBB;
  }
  .note {
    font-size: 16px;
  }
  .information {
    margin-top: 5px;
  }
  .content {
    text-align: right;
  }
  .content-01 {
    font-weight: 800;
    text-align: right;
    font-size: 20px;
  }
  .content-02 {
    font-weight: 800;
    text-align: right;
    font-size: 20px;
    color: #FD7A40;
  }
</style>