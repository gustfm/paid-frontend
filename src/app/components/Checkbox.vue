<template>
  <div class="checkbox-container flex items-center">
    <input :id="componentId" class="checkbox" type="checkbox" />
    <label class="checkbox-label" :for="componentId" />
    <label class="label" :for="componentId"> {{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { v4 as uuidv4 } from "uuid";

@Component({
  components: {},
})
export default class Checkbox extends Vue {
  @Prop({ required: true }) public readonly label: string;

  public get componentId(): string {
    return `checkbox-component-${uuidv4()}`;
  }
}
</script>

<style lang="scss">
.checkbox-container {
  input {
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
  }
  label {
    display: inline-block;
  }
  .checkbox-label {
    position: relative;
    top: 1px;
    width: 20px;
    height: 20px;
    border: 1px solid #c8ccd4;
    border-radius: 50px;
    vertical-align: middle;
    transition: background 0.1s ease;
    cursor: pointer;
    margin-bottom: 1px;

    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 7px;
      width: 5px;
      height: 11px;
      opacity: 0;
      transform: rotate(45deg) scale(0);
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      transition: all 0.3s ease;
      transition-delay: 0.15s;
    }
  }
  .checkbox[type="checkbox"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    display: none;
  }
  .checkbox:checked ~ .checkbox-label {
    border-color: transparent;
    background: #6871f1;
    animation: jelly 0.6s ease;
  }
  .checkbox:checked ~ .checkbox-label:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
  .label {
    margin-left: 8px;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
    width: 90%;
  }
}
@keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
</style>
