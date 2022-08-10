<template>
  <div id="app">
    <div class="app-container">
      <router-view class="pages-container p-3" />
      <!-- <Sidebar /> -->
    </div>
  </div>
</template>

<script lang="ts">
import Sidebar from "@/app/Sidebar/Sidebar.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { Sidebar },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";
@import "@/assets/css/colors.scss";

#app {
  .app-container {
    font-family: "Inter" sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 100vh;
    display: grid;
    grid-template-columns: 1fr $sidebar-width;

    .pages-container {
      width: 100vw;
      background: #ffffff;
    }
  }
}
</style>
