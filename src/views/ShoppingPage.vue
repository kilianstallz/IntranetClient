<template>
  <div>
    <shopping-list :isSmall="false" :itemList="itemList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingList from '@/components/ShoppingList.vue'
export default {
  name: 'ShoppingPage',
  components: {
    ShoppingList
  },
  created () {
    this.$store.dispatch('fetchItems')
  },
  computed: {
    ...mapGetters(['itemList'])
  }
}
</script>

<style>

</style>
