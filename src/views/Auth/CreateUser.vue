<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="login">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Log In</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="name" :disabled="sending" />
              </md-field>
            </div>
          </div>

          <md-field>
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="password" :disabled="sending" />
          </md-field>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Create user</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: '',
      sending: false
    }
  },
  methods: {
    async create () {
      this.$store.dispatch('register', { name: this.name })
    },
    async login () {
      this.sending = true
      this.$store.dispatch('login', { name: this.name, password: this.password })
        .then(() => {
          this.$router.replace('/')
          this.sending = false
        })
        .catch(err => {
          console.error(err)
          this.sending = false
        })
    }
  }
}
</script>

<style>

</style>
