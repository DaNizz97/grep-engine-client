<template>
  <div class="output">
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
                if (this.path) {
                    this.$http.post('http://localhost:8080/search', {
                        fileName: this.path,
                        pattern: 'console',
                        maxLinesCount: 20,
                        revert: true
                    }).then(response => {
                        this.s = response.body.split('\n');
                        this.s.pop()
                    }, response => {
                        console.log(response.status, response.body.message)
                    })
                }
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
  .output {
    margin: 15px;
    font-family: Verdana;
    font-size: 14px;
  }

</style>