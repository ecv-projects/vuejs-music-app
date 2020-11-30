<template>
  <div id="profile">
    <h2 class="title is-4">Mon profil</h2>
    <p>Nom : {{ profile.name }} {{profile.lastname}} </p>
    <p>Rôle : {{ profile.role }}</p>
    <b-button class="is-danger is-light"  @click="logout">Logout</b-button>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: ["profile"],
   methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style>

#profile {
    background-color: #fff;
    padding: 15px;
    border-radius: 10px;
    margin-top: 20px;
}

</style>