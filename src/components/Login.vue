<template>
  <div>
    <Navbar />
    <div  id="login">
      <h1 class="title is-h1">Login</h1>
      <b-field label="Email" v-model="email">
        <b-input></b-input>
      </b-field>
      <b-field label="Mot de passe" v-model="password">
        <b-input type="password"></b-input>
      </b-field>
      <b-button type="is-success" @click="login">Login</b-button>
      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import apiUsers from "../api/users";
import Navbar from "@/components/Navbar";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    login() {
      axios
        .post("http://localhost:3000/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          this.$router.push({ name: "index" });
        })
        .catch((er) => {
          this.error = "Une erreur est survenue";
        });
    },
  },
};
</script>

<style>
#login {
  max-width: 50%;
  margin: 30px auto;
}
</style>