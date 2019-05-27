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
        <v-subheader>All documents</v-subheader>
        <div class="layer">
          <files-view></files-view>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      афьююююю......... (ветер шумит)
    </v-content>

    <v-footer color="blue" class="white--text" app>
      <span>Daniil Nizovkin</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
    import FilesView from './FilesView.vue';

    export default {
        components: {
            FilesView
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