<template>
  <div>
    <md-empty-state
      md-label="Im Intranet Anmelden">
      <form novalidate class="md-layout" @submit.prevent="login">

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

          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-button type="submit" class="md-primary" :disabled="sending">Anmelden</md-button>
    </form>
    </md-empty-state>
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
    // async create () {
    //   this.$store.dispatch('register', { name: this.name })
    // },
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
