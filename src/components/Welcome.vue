<template>
    <v-container
        fluid
        class="welcome-container d-flex flex-row align-center justify-center"
    >

        <img
            src="../assets/welcome_opt.jpg"
            class="welcome-img elevation-10"
        />

        <v-container class="welcome-text-container">
            <h2 class="welcome-text-heading">Herzlich Willkommen</h2>
            <p style="padding-top: 5vh;">Wir freuen uns, Sie bei uns, in der Waldsee Terrasse begrüßen zu dürfen.</p>
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
    padding: 0; 
    margin: 0;
}

.welcome-text-container {
    text-align:center;
    margin: 5vw;
    padding: 0;
    width: 20vw;
}

.welcome-text-heading{
    font-family: "Bergell";
    color: #6e602f;
}
</style>