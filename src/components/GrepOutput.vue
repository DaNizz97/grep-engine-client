<template>
  <div>
    <div class="settings">
      <v-container v-if="isVisible">
        <v-layout row wrap>

          <v-flex xs12 sm5>
            <v-text-field
                v-model="pattern"
                label="Pattern"
                outline
                class="mr-3"
            ></v-text-field>
          </v-flex>

          <v-flex xs12 sm5>
            <v-text-field
                v-model="maxLinesCount"
                label="Max count of lines"
                outline
                class="ml-3 mr-3"
            ></v-text-field>
          </v-flex>
          <v-flex xs 12 sm2>
            <v-btn
                outline
                large
                class="ml-3"
                @click="saveSettings"
            >save
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="output">
      <ol>
        <li v-for="ss in matchedLines">
          <grep-line
              :lines="ss"
              :matched-word="pattern"
          ></grep-line>
        </li>
      </ol>
    </div>
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
            path: String,
            isVisible: Boolean
        },

        data() {
            return {
                matchedLines: [],
                splittedLine: [],
                pattern: '',
                maxLinesCount: 100
            }
        },
        methods: {
            getData() {
                if (this.maxLinesCount == null || this.maxLinesCount <= 0) {
                    this.maxLinesCount = 50;
                }
                if (this.path) {
                    this.$http.post('http://localhost:8080/search', {
                        fileName: this.path,
                        pattern: this.pattern,
                        maxLinesCount: this.maxLinesCount,
                        revert: true
                    }).then(response => {
                        this.matchedLines = response.body.split('\n');
                        this.matchedLines.pop();
                        for (let i = 0; i < this.matchedLines.length; i++) {
                            this.matchedLines[i] = this.matchedLines[i].split(this.pattern)
                                .reduce((result, value, index) => {
                                    return (index !== 0) ? result.concat([this.pattern, value]) : result.concat(value)
                                }, []);
                        }
                    }, response => {
                        console.log(response.status, response.body.message)
                    })
                }
            },
            saveSettings() {
                if (this.path)
                    this.getData()
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