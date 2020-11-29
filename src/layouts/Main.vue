<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="main-content">
        <el-main>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
        </el-main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapState, mapActions } from "vuex";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapState({
        profile: (state) => state.profile,
      }),
  },
  methods: {
    ...mapActions({
      fetchProfile : 'profile/fetchProfile'
    }),
    verifyUser() {
      const datas = {
        sub : jwt_decode(localStorage.getItem("token")).sub,
        token : localStorage.getItem("token")
      };
       this.fetchProfile(datas)
     },
  },
  mounted() {
    this.verifyUser()
  }
};
</script>
