<template>
  <div>
    <Navbar />
    <div class="container">
      <h1 class="title is-1">Administration Space</h1>
      <div class="admin-content">
        <el-main>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
          <AdminMenu :profile="profile">
          </AdminMenu>
            <Profile  />
        </el-main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import AdminMenu from "@/components/AdminMenu";
import Profile from "@/components/Profile";
import { mapState, mapActions } from "vuex";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default {
  components: {
    Navbar,
    AdminMenu,
    Profile,
  },
  data() {
    return {
      profile: {},
    };
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile,
    }),
  },
  methods: {
    async verifyUser() {
      const { sub } = jwt_decode(localStorage.getItem("token"));
      const token = localStorage.getItem("token");
      axios
        .get(`http://localhost:3000/users/${sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          this.profile = res.data;
        });
    },
  },
  mounted() {
    this.verifyUser();
  },
};
</script>
