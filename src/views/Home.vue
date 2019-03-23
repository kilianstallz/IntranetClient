<template>
  <div class="home">
    <h1 class="md-subtitle">{{ today }}</h1>
    <shopping-list :isSmall="true"/>
  </div>
</template>

<script>
import ShoppingList from '../components/ShoppingList.vue'
export default {
  name: 'home',
  components: {
    ShoppingList
  },
  computed: {
    today () {
      let date = new Date()
      let day = date.getDate()
      let month = date.getMonth()
      let year = date.getFullYear()
      return `Heute: ${day}.${month}.${year}`
    }
  }
}
</script>
