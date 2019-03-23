<template>
  <div>
    <md-empty-state
      v-if="listIsEmpty"
      md-label="Erstelle Einkaufsliste">
        <md-button class="md-primary md-raised" @click="$router.push('/shopping')">Hinzufügen</md-button>
    </md-empty-state>

    <md-content style="width: 94vw; margin: 0 auto;" v-else>

      <md-table v-model="itemList" md-sort="name" md-card @md-selected="onSelect">
        <md-table-toolbar>
          <h1 class="md-title">Einkaufsliste</h1>
        </md-table-toolbar>

        <md-table-empty-state
          md-label="Liste ist leer!">
          <md-button class="md-primary md-raised" @click="$router.push('/shopping')">Hinzufügen</md-button>
        </md-table-empty-state>

        <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="multiple">
          <md-table-cell md-label="#" md-sort-by="quantity">{{ item.quantity }}</md-table-cell>
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Für" md-sort-by="creator">{{ item.creator }}</md-table-cell>
        </md-table-row>
      </md-table>

    </md-content>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  data: () => ({
    selected: {},
    itemList: [
      {
        id: 1,
        quantity: '2L',
        name: 'Milch',
        creator: 'Kilian'
      },
      {
        id: 2,
        quantity: '2L',
        name: 'Milch',
        creator: 'Kilian'
      },
      {
        id: 3,
        quantity: '2L',
        name: 'Milch',
        creator: 'Kilian'
      }
    ]
  }),
  props: {
    isSmall: Boolean
  },
  computed: {
    listIsEmpty () {
      if (!this.isSmall && this.itemList) {
        return true
      } else return false
    }
  },
  methods: {
    getClass: ({ id }) => ({
      'md-primary': id
    }),
    onSelect (item) {
      this.selected = item
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
