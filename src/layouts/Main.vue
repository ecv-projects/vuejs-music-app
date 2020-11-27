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
  }
};
</script>
