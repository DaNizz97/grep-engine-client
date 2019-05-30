<template>
  <v-app id="inspire">

    <v-toolbar
        color="blue-grey darken-1"
        dark
        fixed
        app
        clipped-right
    >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Log viewer</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small outline
             @click="isSettingsVisible = !isSettingsVisible">
        <v-icon dark>settings</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" fixed left app width="400px">
      <v-list two-line subheader>
        <v-subheader>Files Tree</v-subheader>
        <div class="layer">
          <files-view
              @searchByFile="searchByFile"
          ></files-view>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-content style="overflow: scroll; overflow-y: hidden">
      <grep-output
          :path="path"
          :is-visible="isSettingsVisible"
      ></grep-output>
    </v-content>

    <v-footer color="blue-grey darken-1" class="white--text" app>
      <span class="ml-2">Daniil Nizovkin</span>
      <v-spacer></v-spacer>
      <span class="mr-2">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
    import FilesView from './FilesView.vue';
    import GrepOutput from './GrepOutput.vue';

    export default {
        components: {
            FilesView,
            GrepOutput
        },
        name: "MainFrame",
        data() {
            return {
                drawer: true,
                isSettingsVisible: true,
                path: ''
            }
        },
        methods: {
            searchByFile(path) {
                this.path = path
            }
        }
    }
</script>

<style scoped>
  .layer {
    overflow: scroll;
    overflow-y: hidden;
    width: 400px;
    min-height: 100%;
    padding: 5px;
    /*border: solid 1px black; */
  }
</style>