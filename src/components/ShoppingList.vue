<template>
  <div>
    <md-empty-state
      v-if="listIsEmpty"
      md-label="Erstelle Einkaufsliste">
        <md-button class="md-primary md-raised" @click="$router.push('/shopping/create')">Hinzufügen</md-button>
    </md-empty-state>

    <md-content style="width: 94vw; margin: 0 auto;" v-else>

      <md-table v-model="itemList" md-sort="name" md-card @md-selected="onSelect">
        <md-table-toolbar>
          <h1 class="md-title">Einkaufsliste</h1>
          <md-button @click="$router.push('/shopping/default')" style="float: right; position: relative; margin-right: 3vw;" class="md-fab md-dense md-primary md-fab-fixed">
            <md-icon>more_horiz</md-icon>
          </md-button>
          <md-button @click="$router.push('/shopping/create')" style="float: right; position: relative; margin-right: 3vw;" class="md-fab md-dense md-primary md-fab-fixed">
            <md-icon>add</md-icon>
          </md-button>
          <md-button @click="deleteItems" style="float: right; position: relative;" class="md-fab md-dense md-error md-fab-fixed">
            <md-icon>delete</md-icon>
          </md-button>
        </md-table-toolbar>

        <md-table-empty-state
          md-label="Liste ist leer!">
          <md-button class="md-primary md-raised" @click="$router.push('/shopping/create')">Hinzufügen</md-button>
        </md-table-empty-state>

        <md-table-row slot="md-table-row" slot-scope="{ item }" :class="getClass(item)" md-selectable="multiple">
          <md-table-cell md-label="#" md-sort-by="quantity">{{ item.quantity }}</md-table-cell>
          <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Für" md-sort-by="creator">{{ item.creator.name }}</md-table-cell>
        </md-table-row>
      </md-table>

    </md-content>
  </div>
</template>

<script>
export default {
  name: 'ShoppingList',
  data: () => ({
    selected: []
  }),
  props: {
    isSmall: Boolean,
    itemList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    listIsEmpty () {
      if (this.isSmall && this.itemList) {
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
    },
    deleteItems () {
      if (this.selected) {
        this.$store.dispatch('deleteItems', this.selected)
      } else {
        console.log('Nothing Selected')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
