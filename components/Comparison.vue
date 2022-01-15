<template>
  <div class="Comparison">
    <h1>Product Comparison</h1>
    <v-row>
      <v-col class="title" col="2" />
      <v-col col="5">
        <img class="logo" src="/v.png" />
      </v-col>
      <v-col col="5">
        <img class="logo" src="/v.png" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="title" col="2" />
      <v-col col="5">
        <b>{{ nameTarget }}</b>
      </v-col>
      <v-col col="5">
        <b>{{ compareName }}</b>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="title" col="2">Death</v-col>
      <v-col col="5">
        {{ searchCompareValue(list, "Death due to illness, diseases, maternity") || "Not cover" }}
      </v-col>
      <v-col col="5">
        {{ searchCompareValue(compareTarget, "Death due to illness, diseases, maternity") || "Not cover" }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="title" col="2">Permanent Disability</v-col>
      <v-col col="5">
        {{ searchCompareValue(list, "Total permanent disability due to illness, diseases") || "Not cover" }}
      </v-col>
      <v-col col="5">
        {{ searchCompareValue(compareTarget, "Total permanent disability due to illness, diseases") || "Not cover" }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="title" col="2">Total permanent disability by accident</v-col>
      <v-col col="5">
        {{ searchCompareValue(list, "Total permanent disability by accident") || "Not cover" }}
      </v-col>
      <v-col col="5">
        {{ searchCompareValue(compareTarget, "Total permanent disability by accident") || "Not cover" }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="title" col="2">Partial permanent disability by accident</v-col>
      <v-col col="5">
        {{ searchCompareValue(list, "Partial permanent disability by accident") || "Not cover" }}
      </v-col>
      <v-col col="5">
        {{ searchCompareValue(compareTarget, "Partial permanent disability by accident") || "Not cover" }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="title" col="2">Temporary injury</v-col>
      <v-col col="5">
        {{ searchCompareValue(list, "Temporary injury") || "Not cover" }}
      </v-col>
      <v-col col="5">
        {{ searchCompareValue(compareTarget, "Temporary injury") || "Not cover" }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="title" col="2">Inpatient treatment</v-col>
      <v-col col="5">
        {{ searchCompareValue(list, "Inpatient treatment") || "Not cover" }}
      </v-col>
      <v-col col="5">
        {{ searchCompareValue(compareTarget, "Inpatient treatment") || "Not cover" }}
      </v-col>
    </v-row>
    <v-row>
      <v-col class="title" col="2" />
      <v-col col="5">
        <v-btn
          rounded
          color="warning"
          dark
          min-width="100px"
        >
          Get it
        </v-btn>
      </v-col>
      <v-col col="5">
        <v-btn
          rounded
          color="warning"
          dark
          min-width="100px"
        >
          Get it
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    compareTarget: {
      type: Array,
      default: []
    },
    nameTarget: {
      type: String,
      default: ""
    },
    compareName: {
      type: String,
      default: ""
    }
  },
  setup(props: any) {
    const { list, compareTarget } = props
    return { list, compareTarget }
  },
  methods: {
    searchCompareValue(target: any, titleSearch: String) {
      const data = target.find((item: any) => item.coverDetailsTitle === titleSearch)
      if (data && data !== undefined) {
        return Number(data.compareValue).toLocaleString('vi-VN')
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>
  .Comparison {
    text-align: center;
    margin-top: 40px;
  }
  .Comparison h1 {
    text-align: left;
    font-size: 24px;
    margin-bottom: 20px;
  }
  .title {
    text-align: left;
    font-weight: 600;
  }
  .logo {
    width: 70px;
    margin: 0 auto;
  }
</style>