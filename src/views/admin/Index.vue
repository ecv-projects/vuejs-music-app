<template>
<div class="container-admin">
  <div class="admin-content">
    <p>Home page admin</p>
  </div>
  <b-menu class="admin-menu">
    <b-menu-list label="Edition menu">
      <b-menu-item label="Albums" icon="link" tag="router-link"  to="/admin/albums"></b-menu-item>
      <b-menu-item label="Artists" icon="link" tag="router-link"  to="/admin/artists"></b-menu-item>
      <b-menu-item label="Concerts" icon="link" tag="router-link"  to="/admin/concerts"></b-menu-item>
      <b-menu-item label="News" icon="link" tag="router-link"  to="/admin/news"></b-menu-item>
    </b-menu-list>

    <b-menu-list label="Actions">
      <b-menu-item label="Logout"></b-menu-item>
    </b-menu-list>
  </b-menu>
</div>

</template>

<style>
  .container-admin {
    display: flex;
    justify-content: space-between;
  }

  .admin-content {
    padding: 10px;
  }

</style>
