<template>
    <v-container
        fluid
        class="ma-0 pa-0" 
    >
        <v-parallax 
            src="../assets/footer_background_opt.jpg"
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

        <v-container>
            <v-row no-gutters justify="center">
            <v-col cols="3">

            <div class="footer-left">
                <p style="margin-bottom: 3px;">Restaurant Waldsee-Terrasse</p>
                <p>Familie Rainer Müller</p>

                <v-container>
                    <v-row no-gutters>
                        <v-col 
                            cols="1"
                        >
                            <v-icon dark>mdi-map-marker</v-icon>
                        </v-col>
                        <v-col 
                            cols="5"
                        >
                            <v-container class="ma-0 pa-0">
                                <p style="margin-bottom: 3px">Waldseeweg 25</p>
                                <p>77716 Haslach</p>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col 
                            cols="1"
                        >
                            <v-icon dark>mdi-phone</v-icon>
                        </v-col>
                        <v-col 
                            cols="5"
                        >
                            <v-container class="ma-0 pa-0">
                                <p class="footer-text">+49 (0) 7832 8977</p>
                            </v-container>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col 
                            cols="1"
                        >
                            <v-icon dark>mdi-email</v-icon>
                        </v-col>
                        <v-col 
                            cols="5"
                        >
                            <v-container class="ma-0 pa-0">
                                <p class="footer-text">waldseeterrasse@web.de</p>
                            </v-container>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            </v-col>
            
            <v-col cols="1">
            <div>
                <v-container class="d-flex">
                    <a class="footer-link">Impressum</a>
                    <a class="footer-link">Karriere</a>
                    <a class="footer-link">Datenschutz</a>
                </v-container>
                <v-container class="d-flex">
                    <v-btn
                        color="white"
                        icon
                        rounded
                        large
                    >
                        <v-icon>mdi-google</v-icon>
                    </v-btn>
                    <v-btn
                        color="white"
                        icon
                        rounded
                        large
                    >
                        <v-icon>fa-tripadvisor</v-icon>
                    </v-btn>
                    <v-btn
                        color="white"
                        icon
                        rounded
                        large
                    >
                        <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn
                        color="white"
                        icon
                        rounded
                        large
                    >
                        <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                </v-container>
            </div>
            </v-col>
        </v-row>
        </v-container>
        </v-container>
        </v-parallax>

        <v-container
            class="d-flex justify-center"
        >
            <v-img
                class="mx-2 ml-10"
                src="../assets/fuerstenberg_logo.png"
                max-height="150"
                max-width="150"
                contain
            />
            <v-img
                class="mx-2 ml-10"
                src="../assets/haslach_logo.png"
                max-height="150"
                max-width="150"
                contain
            />
            <v-img
                class="mx-2 ml-10"
                src="../assets/gastliches_kinzigtal.png"
                max-height="150"
                max-width="150"
                contain
            />
        </v-container>
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

.footer-link{
    margin-right: 20px;
    color: white;
}

</style>