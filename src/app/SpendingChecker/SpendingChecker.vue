<template>
  <DefaultContainer title="Expenses checker">
    <Checkbox class="mb-4" label="Pagar conta de luz" />
    <Checkbox class="mb-4" label="Pagar conta de internet" />
    <Checkbox class="mb-4" label="Pagar imposto de renda" />
  </DefaultContainer>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Checkbox from "../components/Checkbox.vue";
import DefaultContainer from "@/app/components/Layout/DefaultContainer.vue";

@Component({
  components: { DefaultContainer, Checkbox },
})
export default class SpendingChecker extends Vue {}
</script>

<style lang="scss">
.spending-item {
  color: #33373a;
  font-size: 14px;

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }
}
</style>
