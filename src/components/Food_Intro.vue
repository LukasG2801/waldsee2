<template>
    <v-container
        fluid
        class="ma-0 pa-0 d-flex flex-column"
    >
    <v-container
        fluid
        class="food-intro d-flex justify-center align-center flex-row"
        height="50vh"
    >
        <img 
            src="../assets/food1.jpg" 
            class="food-intro-image"
            v-show="!loading"
        />

        <v-skeleton-loader
            width="500"
            height="30vh"
            type="image"
            v-show="loading"
        />

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
                to="/food"
            >   
                <v-icon left>
                    mdi-silverware
                </v-icon>
                {{ $t('LandingPage.food.button.menu')}}
            </v-btn>
        </div>
    </v-container>
    
    <v-container class="d-flex justify-center">
        <v-container
            v-show="!loading"
            v-for="(img, i) in intro_images"
            :key="i"
            class="food-intro-image-container"
        >
        <img 
            :src="img.path"
            class="food-intro-image-hover"
        />
        <div class="overlay">
            <div class="overlay-content">
                <v-icon dark>mdi-silverware</v-icon>
                <p>{{ $t(img.text) }}</p>
            </div>
        </div>
        </v-container>
        <v-container
            v-for="i in 3"
            :key=i
            v-show="loading"
        >
            <v-skeleton-loader
                width="100%"
                type="image"
            />
        </v-container>
    </v-container>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        intro_images: [
            { path: require('../assets/food_intro1.jpg'), text: 'Food.Intro.Image.regional'},
            { path: require('../assets/food_intro2.jpg'), text: 'Food.Intro.Image.seasonal'},
            { path: require('../assets/food_intro3.jpg'), text: 'Food.Intro.Image.fresh'}
        ],
        imagesToPreload: [
            'food_intro1.jpg',
            'food_intro2.jpg',
            'food_intro3.jpg'
        ],
    }),
    
    methods: {
        loadImages() {
            let iImagesLoaded = 0

            this.imagesToPreload.forEach(imageurl => {
                let oImage = new Image()
                oImage.src = require("../assets/" + imageurl)
        
                oImage.onload = () => {
                iImagesLoaded++;

                if(iImagesLoaded === this.imagesToPreload.length) {
                    this.loading = false
                }
            }
            })
        }
    },

    mounted () {
        this.loadImages()
    }
}
</script>

<style scoped>
.food-intro-image-hover {
    display: block;
    width: 100%;
}

.food-intro-image-container{
    position: relative;
    padding: 0;
    margin: 0;
}

.overlay {
    position: absolute; 
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: #878787;
    opacity: 0.8;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: .5s ease;
}

.food-intro-image-container:hover .overlay {
    bottom: 0;
    height: 100%;
}

.overlay-content{
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
}
</style>