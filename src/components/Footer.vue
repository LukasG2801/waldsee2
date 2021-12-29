<template>
    <v-container
        fluid
        class="ma-0 pa-0" 
    >
        <v-parallax 
            src="../assets/footer_background.jpg"
            height="400"
        >
        
        <v-container
            class="footer d-flex flex-column justify-center align-center"
        >
        <v-img
          class="mx-2 ml-10"
          src="../assets/logo_white.png"
          max-height="150"
          max-width="150"
          contain
        />

        <div class="d-flex flex-row footer-content-container">
            
            <div class="footer-left">
                <p>Restaurant Waldsee-Terrasse</p>
                <p>Familie Rainer Müller</p>

                <div class="">
                    
                </div>
            </div>
            
            <div><h1>2</h1></div>
        </div>
        </v-container>
        </v-parallax>
    </v-container>
</template>

<script>
</script>

<style scoped>
.footer {
    min-height: 30vh;
    padding-top: 5vh;
}

.footer-left {
    color: white;
    width: 30vw;
}
</style>