<template>
  <div>
    <v-text-field
        label="Doc/Dir name"
        required
        v-model="path"
    ></v-text-field>
    <v-text-field
        label="Postfix"
        required
        v-model="postfix"
    ></v-text-field>
    <v-btn small outline color="indigo" class="ml-0" v-on:click="getFiles">Search</v-btn>
    <v-divider class="mt-3 mb-3"></v-divider>
    <ul v-if="!isError">
      <tree-item
          class="item"
          :item="treeData"
      ></tree-item>
    </ul>
    <p v-if="isError" class="red--text"> {{ errMessage }}</p>
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
                isError: false,
                errMessage: ''
            }
        },
        created() {

        },
        methods: {
            getFiles: function () {
                this.isError = false;
                this.$http.post('http://localhost:8080/files', {
                    path: this.path,
                    postfix: this.postfix
                }).then(response => {
                        this.treeData = response.body;
                    }, response => {
                        this.isError = true;
                        this.errMessage = response.body.message;
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>