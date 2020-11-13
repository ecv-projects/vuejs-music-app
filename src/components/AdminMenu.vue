<template>
    <div class="admin-menu">
        <b-menu class="admin-menu-content">
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

    .admin-menu {
        width: 25%;
    }

    .admin-menu-content {
        height: 100vh;
        padding: 20px 40px;
        background-color: lightgrey;
    }
</style>
        
        
