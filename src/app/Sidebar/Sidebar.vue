<template>
  <ul class="flex flex-col">
    <li class="flex justify-start items-center">
      <div class="icon-container flex justify-center items-center is-active">
        <DollarSignIcon class="sidebar-icon" />
      </div>
    </li>
    <li class="flex justify-start items-center">
      <div class="icon-container flex justify-center items-center">
        <ListIcon class="sidebar-icon" />
      </div>
    </li>
    <li class="flex justify-start items-center">
      <div class="icon-container flex justify-center items-center">
        <SettingsIcon class="sidebar-icon" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { DollarSignIcon, ListIcon, SettingsIcon } from "vue-feather-icons";

@Component({
  components: { DollarSignIcon, ListIcon, SettingsIcon },
})
export default class Sidebar extends Vue {}
</script>

<style lang="scss">
@import "@/assets/css/variables.scss";
@import "@/assets/css/colors.scss";

ul {
  height: 100%;
  background-color: $--color-secondary;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    width: $sidebar-width;
    height: 50px;

    .icon-container {
      width: 100%;
      height: 100%;
      cursor: pointer;
      color: $--color-text-regular;

      &.is-active {
        background-color: #fff;
      }

      .sidebar-icon {
        width: 20px;
        height: 20px;
      }

      &.is-active .sidebar-icon {
        color: $--color-primary;
      }
    }
  }
}
</style>
