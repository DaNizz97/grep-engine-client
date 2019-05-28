<template>
  <div>
    {{line}}
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

</style>