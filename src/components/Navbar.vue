<template>
  <div>
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ name: 'index' }">
          Home
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'admin.index' }">
          Espace admin
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'news.index' }">
          News
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'artists.index' }">
          Artists
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'login' }">
          Login
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ name: 'register' }">
          Register
        </b-navbar-item>
        <b-button @click="logout"> Logout </b-button>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
