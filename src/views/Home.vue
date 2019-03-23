<template>
  <div class="home">
    <h1>Home</h1>
    <shopping-list />
  </div>
</template>

<script>
import ShoppingList from '../components/ShoppingList.vue'
export default {
  name: 'home',
  components: {
    ShoppingList
  }
}
</script>
