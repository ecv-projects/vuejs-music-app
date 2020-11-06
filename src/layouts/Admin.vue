<template>
  <div>
    <Navbar />
    <div class="container">
    <h1>Admin</h1>
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

export default {
  components: {
    Navbar,
  },
};
</script>

