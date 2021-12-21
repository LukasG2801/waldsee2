<template>
    <v-container 
        fluid
        class="ma-0 pa-0"
    >   
        <v-container 
            fluid
            class="welcome-screen d-flex justify-center"
            fill-height
            onscroll="onScrollMainContainer"
        >
            <div class="d-flex justify-center align-center flex-column">
                <v-img src="../assets/logo_white.png" max-width="400px"></v-img>
                <p class="slogan-subtitle">"{{ $t('LandingPage.slogan') }}"</p>
            </div>
        </v-container>

        <v-lazy
            v-model="foodPartActive"
            :options="{
                threshold: .5
            }"
            transition="fade-transition"
        >
        <v-container
            fluid
            class="food-intro d-flex justify-center align-center flex-row"
            height="50vh"
        >
            <img src="../assets/food1.jpg" height="350px"/>

            <div class="food-intro-text">
                <p class="food-intro-text-title">{{ $t('LandingPage.food.title') }}</p>
                <p class="food-intro-text-title" color="seccondary" style="font-size: 1.5rem">●</p>
                <p class="food-intro-text-subtitle">
                    {{ $t('LandingPage.food.subtitle1') }}
                    <br/>
                    {{ $t('LandingPage.food.subtitle2') }}
                </p>
                <v-btn
                    outlined
                    color="secondary"
                    class="mt-5"
                >   
                    <v-icon left>
                        mdi-silverware
                    </v-icon>
                    {{ $t('LandingPage.food.button.menu')}}
                </v-btn>
            </div>
        </v-container>
        </v-lazy>
        
        <v-container 
            fluid
            class="location-intro"
            height="100vh"
        >
            <div class="location-intro-text">
                <p class="location-intro-text-title">Was zeichnet uns eigentlich aus ?</p>
            </div>
        </v-container>
        
        <v-container
            fluid
            height="50vh"
            class="ratings-container"
        >
            <p class="ratings-title mt-8" color="seccondary" style="text-align: center;">... Und was denken unsere Gäste von uns ?</p>
            <v-container
                class="d-flex flex-row" 
            >
                <v-card 
                    width="10vw"
                    class="ma-2"
                    v-for="rating in ratings"
                    :key="rating.id"
                >
                    <v-card-title><v-icon large>{{ rating.acf.quelle | getSourceIcon }}</v-icon></v-card-title>
                    <!-- <v-card-title><i class="fa fa-tripadvisor" aria-hidden="true"></i></v-card-title> -->
                    <v-divider></v-divider>
                    <v-rating
                        :value="rating.acf.bewertung | stringToNumber"
                        color="yellow darken-3"
                        readonly
                    >
                    </v-rating>
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
            </v-container>
        </v-container>

    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data: () => ({
            rating_carousel: 0,
            foodPartActive: false
        }),

        computed: {
            ...mapGetters({
                ratings: 'ratings/get_ratings'
            })
        },

        methods:{
            onScrollMainContainer() {
                alert("onscroll")
            },
            
            /**
             * get ratings from wordpress and set them to the store
             */
            async fetchRatings() {
                let response = await this.$http.get('/wp-json/wp/v2/reviews')
                this.$store.commit('ratings/set_ratings', response.data)
            },

            openRating(url){
                window.open(url)
            }
        },

        filters: {
            stringToNumber: function(value) {
                if(!value) return
                return parseInt(value)
            },

            getSourceIcon: function(value) {
                if(value === "Google") {
                    console.log("test")
                    return 'mdi-google'
                }else if(value === "Tripadvisor") {
                    return 'fa-tripadvisor'
                }
            }
        },

        created () {
            this.fetchRatings()
        }
    }
</script>

<style scoped>

.content-container {
    padding: 0;
    margin: 0;
}

.welcome-screen {
    height: 100vh;
    width: 100%;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) ), url('../assets/banner2.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 0 4px 5px -1px gray;
}

.ratings-container{
    width: 100%;
    box-shadow: 0 4px 5px -1px gray;
}

.ratings-title{
    font-family: 'Satisfy', cursive;
    font-size: 2.5rem;
    color: #6e602f;
}

.location-intro{
    height: 100vh; 
    width: 100%;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/location1.jpg');
    /* background: url('../assets/location1.jpg'); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 40vh;
    padding-left: 2vw;
}

.location-intro-text-title{
    color: white;
    font-family: 'Satisfy', cursive;
    font-size: 2.5rem
}

.food-intro{
    height: 50vh;
    box-shadow: 0 4px 5px -1px gray;
    background-color: #E7E7E6;
}

.food-intro-text {
    margin: 5vw;
    text-align: center;
}

.welcome-screen-center{
    position: absolute;
    top: 50%;
    left: 50%;
}

.fab-container{
    position: fixed;
    bottom: 0;
    right: 0;
}

.welcome-text p{
    -webkit-animation: fadein 3s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 3s; /* Firefox < 16 */
    -ms-animation: fadein 3s; /* Internet Explorer */
    -o-animation: fadein 3s; /* Opera < 12.1 */
        animation: fadein 3s;
}

.slogan-title{
    color: white;
    font-family: 'Cardo', serif;
    font-size: 4rem;
}

.slogan-subtitle{
    color: white;
    font-family: 'Satisfy', cursive;
    font-size: 1.5rem;
    margin-top: 5vh;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

.food-intro-text-title{
    font-family: 'Satisfy', cursive;
    font-size: 2.5rem;
    color: #6e602f;
}

.food-into-text-subtitle {
    text-align: justify;
}
</style>