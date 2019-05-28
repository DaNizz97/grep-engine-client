<template>
  <v-app id="inspire">

    <v-toolbar
        color="blue"
        dark
        fixed
        app
        clipped-right
    >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Log viewer</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>

    <v-navigation-drawer v-model="drawer" fixed left app width="400px">
      <v-list two-line subheader>
        <v-subheader>Files Tree</v-subheader>
        <div class="layer">
          <files-view></files-view>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <!--афьююююю......... (ветер шумит)-->
      <grep-output></grep-output>
    </v-content>

    <v-footer color="blue" class="white--text" app>
      <span class="ml-1">Daniil Nizovkin</span>
      <v-spacer></v-spacer>
      <span class="mr-1">&copy; 2019</span>
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
                drawer: true
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