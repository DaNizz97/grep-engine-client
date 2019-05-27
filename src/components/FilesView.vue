<template>
  <div>
    <v-text-field
        label="Doc/Dir name"
        required
    ></v-text-field>
    <v-text-field
        label="Postfix"
        required
    ></v-text-field>
    <v-btn small outline color="indigo" class="ml-0">Search</v-btn>
    <ul>
      <tree-item
          class="item"
          :item="treeData"
      ></tree-item>
    </ul>
  </div>
</template>

<script>
    import TreeItem from './TreeItem';

    export default {
        components: {
            TreeItem
        },
        name: "FilesView",
        data() {
            return {
                treeData: {},
                path: '',
                postfix: '',
            }
        },
        created() {
            this.$http.post('http://192.168.1.4:8080/files', {
                path: '/home/da-nizz/IdeaProjects/text-search-engine',
                postfix: ''
            }).then(response => {
                    this.treeData = response.body;
                }
            )
        }
    }
</script>

<style scoped>

</style>