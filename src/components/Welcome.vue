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
            <p style="padding-top: 5vh;">Wir freuen uns, Sie bei uns, in der Waldsee Terrasse begrüßen zu dürfen. Neben unserem einzigartigen Ambiente bieten 
                wir ihnen regionale und saisonale Köstlichkeiten.
            </p>
            <!-- <p style="padding-bottom: 2vh; font-weight: bold;">Vom 21.08.2023 bis zum 05.09.2023 haben wir aufgrund von Betriebsferien geschlossen.</p> -->
            <p>Unsere Öffnungszeiten finden Sie hier:</p>
            <v-btn
                color="secondary"
                outlined
                class="mt-5"
                to="/contact"
            >
                <v-icon left>
                    mdi-clock
                </v-icon>
                Öffnungszeiten
            </v-btn>
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