<template>
    <v-container 
        class="d-flex justify-center align-center flex-column footer"
        fluid
    >
        <v-img
          class="mx-2 ml-10"
          src="../assets/logo_white.png"
          max-height="100"
          max-width="100"
          contain
        />

        <div class="d-flex flex-row footer-content-container">
            
            <div class="footer-left">
                <p>Restaurant Waldsee-Terrasse</p>
                <p>Familie Rainer Müller</p>
            </div>
            
            <div><h1>2</h1></div>
        </div>
    </v-container>
</template>

<script>
</script>

<style scoped>
.footer {
    background-color: #878787;
    min-height: 30vh;
    padding-top: 5vh;
}

.footer-left {
    color: white;
    width: 30vw;
}
</style>