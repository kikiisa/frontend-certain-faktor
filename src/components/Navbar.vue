<template>
    <div class="Navbar">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top border-primary primary-old">
            <div class="container">
                <router-link to="/"  class="navbar-brand">
                    <i class="fas fa-medkit"></i>
                    SPPK
                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-start mt-1" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/checkup" class="nav-link active">checkup</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link active">about</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:"Navbar"
}
</script>:
<style scoped>
    .active {
        font-weight:500;
    }
    .navbar-brand{
        font-weight: 600;
    }
</style>

