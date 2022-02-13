<template>
    <v-container
        fluid
        class="welcome-container d-flex flex-row justify-center align-center"
    >

        <img
            src="../assets/welcome_opt.jpg"
            class="welcome-img"
        />

        <v-container class="welcome-text-container">
            <h2 class="welcome-text-heading">Herzlich Willkommen</h2>
        </v-container>
    
    </v-container>
</template>

<script>
export default {
    data: () => ({
    })
}
</script>

<style>
.welcome-container{
    height: 70vh;
}

.welcome-img{
    height: 449px;
}

.welcome-text-container {
    text-align:center;
    margin: 5vw;
}

.welcome-text-heading{
    font-family: "Bergell";
    color: #6e602f;
}
</style>