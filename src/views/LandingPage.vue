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
            <!-- <div class="d-flex justify-center align-center flex-column">
                <v-img src="../assets/logo_white.png" max-width="400px" elevation="5"></v-img>
                <p class="slogan-subtitle">"{{ $t('LandingPage.slogan') }}"</p>
            </div> -->
        </v-container>

        <FoodIntro/>
        
        <Location/>
        
        <v-container
            fluid
            height="50vh"
            class="ratings-container"
        >
            <p class="ratings-title mt-8" color="seccondary" style="text-align: center;">... Und was denken unsere Gäste von uns ?</p>
            <Ratings/>
            
            <v-container class="d-flex justify-center">
                <v-btn 
                    outlined
                    class="pa-2 ma-2"
                    color="secondary"
                    dark
                    fab
                    elevation="5"
                >
                    <v-icon>mdi-google</v-icon>
                </v-btn>
                <v-btn 
                    outlined
                    class="pa-2 ma-2"
                    color="secondary"
                    fab
                    elevation="5"
                >
                    <v-icon>fa-tripadvisor</v-icon>
                </v-btn>
                <v-btn 
                    outlined
                    class="pa-2 ma-2"
                    color="secondary"
                    fab
                    elevation="5"
                >
                    <v-icon>fa-yelp</v-icon>
                </v-btn>
            </v-container>
        </v-container>

        <Minigolf/>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Ratings from '../components/Ratings'
    import Minigolf from '../components/Minigolf'
    import Location from '../components/Location'
    import FoodIntro from '../components/Food_Intro'

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

        components: {
            'Ratings': Ratings,
            'Minigolf': Minigolf,
            'Location': Location,
            FoodIntro
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
@import url('../styles/style.css');

.content-container {
    padding: 0;
    margin: 0;
}

.welcome-screen {
    height: 80vh;
    width: 100%;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) ), url('../assets/food_landing_banner.jpg');
    /* background: url('../assets/food_landing_banner.jpg'); */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    box-shadow: 0 4px 5px -1px gray;
}

.ratings-container{
    width: 100%;
    box-shadow: 0 4px 5px -1px gray;
}

.ratings-title{
    /* font-family: 'Satisfy', cursive; */
    font-family: "Bergell";
    font-size: 2.5rem;
    color: #6e602f;
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

</style>