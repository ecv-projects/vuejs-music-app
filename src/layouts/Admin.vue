<template>
  <div>
    <Navbar />
    <div class="container">
    <h1>Administration Space</h1>
      <div class="admin-content">
        <el-main>
          <transition name="fade" mode="out-in">
            <router-view />
          </transition>
          <AdminMenu />
        </el-main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import AdminMenu from "@/components/AdminMenu"

export default {
  components: {
    Navbar,
    AdminMenu
  },
};
</script>
