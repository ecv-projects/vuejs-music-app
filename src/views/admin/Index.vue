<template>
  <b-menu class="admin-menu">
    <b-menu-list label="Edition menu">
        <b-menu-item label="Albums" icon="link" tag="router-link" target="_blank" to="/admin/albums"></b-menu-item>
        <b-menu-item label="Artists" icon="link" tag="router-link" target="_blank" to="/admin/artists"></b-menu-item>
        <b-menu-item label="Concerts" icon="link" tag="router-link" target="_blank" to="/admin/concerts"></b-menu-item>
        <b-menu-item label="News" icon="link" tag="router-link" target="_blank" to="/admin/news"></b-menu-item>
    </b-menu-list>

    <b-menu-list label="Actions">
      <b-menu-item label="Logout"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>
