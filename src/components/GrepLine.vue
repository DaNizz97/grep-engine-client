<template>
  <div class="line">
    <span v-for="line in lines">
      <span :class="{highlighted: line === matchedWord}">{{line}}</span>
    </span>
    <v-divider></v-divider>
  </div>
</template>

<script>
    export default {
        name: "GrepLine",
        props: {
            lines: Array,
            matchedWord: String
        },
        data() {
            return {}
        },
        methods: {
            checking() {
                if (typeof(this.lines) == 'string') {

                }
            }
        }
    }
</script>

<style scoped>
  .line {
    margin: 15px;
    font-size: 14px;
    font-family: Verdana;
    width: 100%;
  }
  .highlighted {
    color: red;
    font-weight:bold;
    font-style: italic;
  }
</style>
