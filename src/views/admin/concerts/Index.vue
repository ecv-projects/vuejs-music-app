<template>
    <div class="container-admin">
        <div class="admin-content concerts">
            <h1>Admin Concert Index</h1>
            <h2>All concerts</h2>
            <div>
              <ul>
                <li
                  v-for="item in concerts"
                  :key="item.id"
                  >
                    <router-link
                    :to="{name: '', params: {id: item.id}}"
                    >
                      {{ item.name }} {{ item.date }}
                    </router-link>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>

<style>
  .container-admin {
    width: 70%;
  }

  .admin-content {
    padding: 10px;
  }

  .admin-content .el-main {
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchAllConcerts: 'concerts/fetchAllConcerts'
    })
  },
  computed: {
    ...mapState({
      concerts: state => state.concerts.allConcerts
    })
  },
  mounted () {
    console.log(this.concerts);
    this.fetchAllConcerts();
  }
}
</script>
