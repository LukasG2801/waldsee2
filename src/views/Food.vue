<template>
    <v-container 
        fluid
        class="ma-0 pa-0"
        style="position:relative;"
    >
        <v-container
            fluid
            class="food-banner d-flex justify-center"
            fill-height
        >
            <v-container class="d-flex justify-center align-center flex-column">
                <p class="food-banner-subtitle">Entdecken Sie unsere kulinarischen Köstlichkeiten</p>
            </v-container>
        </v-container>

        <v-container
            class="food-menu-container"
        > 
            <p class="food-menu-title">Speisekarte</p>

            <v-list
                v-for="categorie in dish_categories"
                :key="categorie.id"
            >
                <v-list-item
                    v-for="dish in dishes"
                    :key="dish.id"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ dish.title.rendered }}</v-list-item-title>
                        <v-list-item-subtitle>{{ dish.acf.Beilagen }}</v-list-item-subtitle>
                        <v-spacer></v-spacer>
                        <p>{{ dish.acf.Preis }}</p>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-container>

        <v-container class="food-menu-sidemenu">
            <p># Unsere Waldsee Klassiker</p>
            <p># Unsere Waldsee Klassiker</p>
            <p># Unsere Waldsee Klassiker</p>
            <p># Unsere Waldsee Klassiker</p>
        </v-container>
    </v-container>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        data: () => ({
            dish_categories: []
        }),
        
        computed: {
            ...mapGetters({
                dishes: 'dishes/get_dishes'
            })
        },

        methods: {
            async fetchDishes(){
                let response = await this.$http.get('/wp-json/wp/v2/gerichte')
                console.log(response.data)
                this.$store.commit('dishes/set_dishes', response.data)
            },

            async fetchDishCategories(){
                let response = await this.$http.get('/wp-json/wp/v2/categories')
                this.dish_categories = response.data
            },

            mergeCategories(){
                if (this.dishes && this.dish_categories) {
                }
            }
        },

        created () {
            this.fetchDishCategories()
            this.fetchDishes()
            this.mergeCategories()
        }
    }
</script>

<style scoped>
.food-banner {
    height: 70vh;
    width: 100%;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/food_welcome.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    box-shadow: 0 4px 5px -1px gray;
}

.food-banner-subtitle{
    color:white;
}

.food-menu-container{
    background: white;
    width: 50vw;
    left: 25vw;
    margin-top: 5vh;
}

.food-menu-title{
    text-align: center;
    font-family: 'Satisfy', cursive;
    font-size: 2.5rem;
    color: #6e602f;
}

.food-menu-sidemenu{
    position: fixed;
    top: 50vh;
    left: 3vw;
    z-index: 99;
}

</style>