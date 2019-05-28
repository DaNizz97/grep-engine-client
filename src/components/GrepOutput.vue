<template>
  <div>
    <v-btn color="indigo" v-on:click="getData">Get</v-btn>
    <ol>
      <li v-for="ss in s">
        <grep-line :line="ss"></grep-line>
      </li>
    </ol>
  </div>
</template>

<script>
    import GrepLine from "./GrepLine";

    export default {
        components: {GrepLine},
        comments: {
            GrepLine
        },
        name: "GrepOutput",
        data() {
            return {
                s: []
            }
        },
        methods: {
            getData() {
                this.$http.post('http://localhost:8080/search', {
                    fileName: '/home/da-nizz/WebstormProjects/grep-engine-client/.gitignore',
                    pattern: '*',
                    maxLinesCount: 100,
                    revert: true
                }).then(response => {
                    this.s = response.body.split('\n');
                    console.log(this.s);
                }, response => {
                    console.log(response.status, response.body.message)
                })
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>