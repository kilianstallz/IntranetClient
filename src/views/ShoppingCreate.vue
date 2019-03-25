<template>
  <div style="display: flex; justify-content: center; height: 70vh;">
    <md-empty-state
      md-label="Einkauf hinzufügen">
      <form novalidate @submit.prevent="createItem" class="md-layout md-gutter">

        <div class="md-layout-item md-size-33">
            <md-field>
              <label for="quantity">Menge</label>
              <md-input name="quantity" id="quantity" autocomplete="on" v-model="input.quantity" :disabled="sending" />
            </md-field>
          </div>
          <div class="md-layout-item md-size-67">
            <md-field>
              <label for="itemName">Name</label>
              <md-input name="itemName" id="itemName" autocomplete="off" v-model="input.itemName" :disabled="sending" />
            </md-field>
          </div>

          <!-- TODO: PANEL MODE -->

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <div class="md-layout-item md-size-100">
            <md-button type="submit" class="md-primary md-raised" :disabled="sending">Erstellen</md-button>
          </div>
    </form>
    </md-empty-state>
  </div>
</template>

<script>
import ShoppingRepo from '../repositories/shoppingRepository'
export default {
  data: () => ({
    sending: false,
    input: {
      itemName: null,
      quantity: null
    }
  }),
  methods: {
    createItem () {
      let payload = {
        creator: this.$store.getters.userProfile._id,
        name: this.input.itemName,
        quantity: this.input.quantity
      }
      ShoppingRepo.createItem(payload)
      this.$router.push('/shopping/default')
    }
  }
}
</script>

<style>

</style>
