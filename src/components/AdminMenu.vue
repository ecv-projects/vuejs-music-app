<template>
    <div class="admin-menu">
        <b-menu class="admin-menu-content">
            <b-menu-list label="Edition menu">
                <b-menu-item label="Albums" icon="link" tag="router-link"  to="/admin/albums"></b-menu-item>
                <b-menu-item label="Artists" icon="link" tag="router-link"  to="/admin/artists"></b-menu-item>
                <b-menu-item label="Concerts" icon="link" tag="router-link"  to="/admin/concerts"></b-menu-item>
                <b-menu-item label="News" icon="link" tag="router-link"  to="/admin/news"></b-menu-item>
            </b-menu-list>
            <Profile :profile="profile"></Profile>
            
        </b-menu>
    </div>
</template>

<script>
import Profile from "@/components/Profile";

export default {
    props: [
        'profile'
    ],
    components: {
        Profile,
    }
}
</script>

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
        
        
