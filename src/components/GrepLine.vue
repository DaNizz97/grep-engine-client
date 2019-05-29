<template>
  <div class="line">
    {{line}}
    <v-divider></v-divider>
  </div>
</template>

<script>
    export default {
        name: "GrepLine",
        props: {
            line: String,
            matchedWord: String
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
  .line {
    margin: 10px;
    font-size: 14px;
    font-family: Verdana;
    width: 100%;
  }
</style>
