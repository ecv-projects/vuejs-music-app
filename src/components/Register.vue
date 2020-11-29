<template>
  <div>
    <Navbar />
    <div id="register">
      <h1 class="title is-h1">Register</h1>
      <b-field label="Prénom">
        <b-input v-model="name"></b-input>
      </b-field>
      <b-field label="Nom">
        <b-input v-model="lastname"></b-input>
      </b-field>
      <b-field label="Email">
        <b-input v-model="email"></b-input>
      </b-field>
      <b-field label="Mot de passe">
        <b-input type="password" v-model="password"></b-input>
      </b-field>
      <b-button type="is-success" @click="submit">Register</b-button>
      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar";

export default {
  data() {
    return {
      email: "",
      password: "",
      name: "",
      lastname: "",
      error: null,
    };
  },
  components: {
    Navbar,
  },
  methods: {
    submit() {
      axios
        .post("http://localhost:3000/register", {
          email: this.email,
          password: this.password,
          name: this.name,
          lastname: this.lastname,
          role: "user",
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
#register {
  max-width: 50%;
  margin: 30px auto;
}
</style>