<template>

        <v-container
            fluid
            class="ratings-container"
        >
            <p class="ratings-title mt-8" color="seccondary" style="text-align: center;">... Und was denken unsere Gäste von uns ?</p>
            
    <v-slide-group
        v-model="rating_carousel"
        class="pa-4 rating-carousel"
        show-arrows
        v-show="!loading"
    >
        <v-slide-item
            v-for="rating in ratings"
            :key="rating.id"
        >
            <v-card
                class="ma-2 rating-card elevation-5"
            >
                <v-card-title>
                    <v-icon large>{{ rating.acf.quelle | getSourceIcon }}</v-icon>
                </v-card-title>

                <v-divider></v-divider>

                <v-rating
                    :value="rating.acf.bewertung | stringToNumber"
                    color="yellow darken-3"
                    readonly
                ></v-rating>

                <v-card-subtitle>{{ rating.title.rendered }}</v-card-subtitle>

                <v-card-actions>
                    <v-btn
                        text
                        @click="openRating(rating.acf.rezension_link)"
                    >
                        Mehr
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-slide-item>
    </v-slide-group>

            <v-container class="d-flex justify-center">
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

    <v-container
        class="ratings-container-skeleton"
    >
        <v-skeleton-loader
            v-for="i in 5"
            :key="i"
            type="card"
            width="18%"
            class="mx-auto rating-skeleton-card"
            v-show="loading"
        />
    </v-container>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex' 

export default {
    data: () => ({
        rating_carousel: 0,
        loading: true,
        flag_no_data_fetched: false,
    }),
    
    computed: {
        ...mapGetters({
            ratings: 'ratings/get_ratings'
        })
    },

    methods: {
        async fetchRatings() {
            let response = await this.$http.get('/wp-json/wp/v2/rezension')
            this.$store.commit('ratings/set_ratings', response.data)
            this.loading = false
        },

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
        this.fetchRatings()
    }
}
</script>

<style scoped>
</style>