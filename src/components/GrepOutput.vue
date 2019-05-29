<template>
  <div>
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
        props: {
          path: String
        },

        data() {
            return {
                s: []
            }
        },
        methods: {
            getData() {
                this.$http.post('http://localhost:8080/search', {
                    fileName: '/home/da-nizz/WebstormProjects/grep-engine-client/src/components/' + this.path,
                    pattern: 'console',
                    maxLinesCount: 100,
                    revert: true
                }).then(response => {
                    this.s = response.body.split('\n');
                }, response => {
                    console.log(response.status, response.body.message)
                })
            }
        },
        watch: {
            path: function () {
                this.getData();
            }
        }
    }
</script>

<style scoped>

</style>