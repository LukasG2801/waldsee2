<template>
        <v-container
            fluid
            class="ratings-container"
        >
            <p class="ratings-title mt-8" color="seccondary" style="text-align: center;">... Und was denken unsere Gäste von uns ?</p>

            <v-container class="d-flex justify-center" style="padding-bottom: 10vh;">
                <v-btn 
                    outlined
                    class="pa-2 ma-2"
                    color="secondary"
                    dark
                    fab
                    elevation="5"
                    @click="open('Google')"
                >
                    <v-icon>mdi-google</v-icon>
                </v-btn>
                <v-btn 
                    outlined
                    class="pa-2 ma-2"
                    color="secondary"
                    fab
                    elevation="5"
                    @click="open('Tripadvisor')"
                >
                    <v-icon>fa-tripadvisor</v-icon>
                </v-btn>
                <v-btn 
                    outlined
                    class="pa-2 ma-2"
                    color="secondary"
                    fab
                    elevation="5"
                    @click="open('Yelp')"
                >
                    <v-icon>fa-yelp</v-icon>
                </v-btn>
            </v-container>

    </v-container>
</template>

<script>

export default {
    data: () => ({

    }),
    
    methods: {

        openRating(link) {
            window.open(link, "_blank").focus()
        },

        open(Dest) {
            if(Dest === 'Google'){
                window.open("https://www.google.de/maps/place/Restaurant+Waldsee-Terrasse/@48.2668469,8.0946711,15z/data=!4m7!3m6!1s0x0:0xf89fc1a6b17b199a!8m2!3d48.2669149!4d8.0946255!9m1!1b1", "_blank").focus()
            }
            else if(Dest === 'Tripadvisor') {
                window.open("https://www.tripadvisor.com/Restaurant_Review-g2291703-d8406904-Reviews-Restaurant_Waldsee_Terrasse-Haslach_im_Kinzigtal_Baden_Wurttemberg.html", "_blank").focus()
            }
            else if(Dest === 'Yelp') {
                window.open("https://www.yelp.de/biz/waldsee-terrasse-haslach", "_blank").focus()
            }
        }
    },

    filters: {
        stringToNumber(value) {
            if(!value) return
            return parseInt(value)
        },

        getSourceIcon(value) {
            if(value === 'Google') {
                return 'mdi-google'
            }else if(value === 'Tripadvisor') {
                return 'fa-tripadvisor'
            }
        }
    },

    mounted() {
        
    }
}
</script>

<style scoped>
</style>