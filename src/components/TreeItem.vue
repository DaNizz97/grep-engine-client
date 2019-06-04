<template>
  <li>
    <div
        class="item2"
        :class="{fileOpened: isFileOpen}"
        @click="toggle(); searchByFile(); highlightOpenedFile();">
      <i v-if="isFolder && isOpen" class="material-icons-two-tone">folder</i>
      <i v-if="isFolder && !isOpen" class="material-icons">folder</i>
      <i v-if="!isFolder" class="material-icons-two-tone">file_copy</i>
      {{ item.name }}
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <tree-item
          class="item"
          v-for="(child, index) in item.children"
          :key="index"
          :item="child"
          @searchByFile="$emit('searchByFile', $event)"
      ></tree-item>
    </ul>
  </li>
</template>

<script>
    export default {
        name: "TreeItem",
        props: {
            item: Object
        },
        data: function () {
            return {
                isOpen: false,
                isFileOpen: false,
                isPrevFileOpen: false
            }
        },
        computed: {
            isFolder: function () {
                return this.item.children &&
                    this.item.children.length
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.isOpen = !this.isOpen
                }
            },
            searchByFile() {
                if (!this.isFolder) {
                    this.$emit('searchByFile', this.item.file)
                }
            },
            highlightOpenedFile() {
                //TODO: implement canceling the highlighting after opening another file
                if (!this.isFolder) {
                    this.isFileOpen = true;
                }
            }
        }
    }
</script>

<style scoped>
  .material-icons {
    font-size: 16px;
    line-height: 1;
    letter-spacing: normal;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .material-icons-two-tone {
    font-size: 16px;
    line-height: 1;
    letter-spacing: normal;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .item2 {
  }

  .item2:hover {
    cursor: pointer;
    background-color: aliceblue;
  }

  .fileOpened {
    background-color: #DDF8FF;
  }
</style>
