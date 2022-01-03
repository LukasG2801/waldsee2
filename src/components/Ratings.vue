<template>
    <v-slide-group
        v-model="rating_carousel"
        class="pa-4"
        show-arrows
    >
        <v-slide-item
            v-for="rating in ratings"
            :key="rating.id"
        >
            <v-card
                class="ma-2 rating-card"
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
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-slide-item>
    </v-slide-group>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data: () => ({
        rating_carousel: 0
    }),
    
    computed: {
        ...mapGetters({
            ratings: 'ratings/get_ratings'
        })
    },

    methods: {
        async fetchRatings() {
            let response = await this.$http.get('/wp-json/wp/v2/reviews')
            this.$store.commit('ratings/set_ratings', response.data)
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