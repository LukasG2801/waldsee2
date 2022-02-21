<template>
    <v-container
        fluid
        class="welcome-container d-flex flex-row align-center justify-center flex-wrap-reverse"
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
@import url('../styles/style.css');
</style>