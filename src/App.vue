<template>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class=" md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">Intranet</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>home</md-icon>
            <router-link tag="span" class="md-list-item-text" to="/">Übersicht</router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>list</md-icon>
            <router-link tag="span" class="md-list-item-text" to="/shopping/default">Einkaufsliste</router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item @click="logout">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Log Out</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="md-scrollbar">
        <router-view></router-view>
      </md-app-content>
    </md-app>
</template>

<script>
import Axios from 'axios'
export default {
  data: () => ({
    menuVisible: false
  }),
  created () {
    Axios.interceptors.response.use(undefined, function (err) {
      return new Promise(function (resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch('logout')
        }
        throw err
      })
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('logout')
        .then(() => {
          this.menuVisible = !this.menuVisible
        })
        .then(() => this.$router.replace('/auth/create'))
    }
  }
}
</script>

<style lang="scss">
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, .12);
}
</style>
