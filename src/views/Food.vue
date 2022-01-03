<template>
    <v-container 
        fluid
        class="ma-0 pa-0"
    >
        <v-container
            fluid
            class="food-banner d-flex"
            fill-height
            ref="banner_container"
        >
            <v-container class="d-flex flex-column">
                <p class="food-banner-subtitle"></p>
            </v-container>
        </v-container>

        <v-container
            class="food-menu-container"
        >
            <p class="food-menu-title">{{ $t('Food.Menu.Title')}}</p>
            <v-toolbar
                flat
                light
            >
                <v-spacer/>
                <v-btn
                    icon
                    small
                    rounded
                    elevation="5"
                    class="mx-2"
                    color="secondary"
                >
                    <v-icon small>mdi-printer</v-icon>
                </v-btn>
                <v-btn
                    icon
                    small
                    rounded
                    elevation="5"
                    class="mx-2"
                    color="secondary"
                >
                    <v-icon small>mdi-share-variant</v-icon>
                </v-btn>
            </v-toolbar>
            <v-tabs vertical>
                <v-tab
                    v-for="categorie in dish_categories"
                    :key="categorie.id"
                    :ref="categorie.id"
                    :id="categorie.id"
                >
                    {{ categorie.name }}
                </v-tab>

                <v-tab-item
                    v-for="categorie in dish_categories"
                    :key="categorie.id"
                    
                >
                    <v-list class="food-menu-list">
                        <v-list-item
                            v-for="dish in categorie.dishes"
                            :key="dish.id"
                            :v-show="itemInCategorie(categorie.id)"
                            class="mb-5"
                        >
                            <v-list-item-content>
                                
                                <v-list-item-title
                                    v-text="dish.title.rendered"
                                    class="menu-dish-title"
                                ></v-list-item-title>
                                
                                <v-list-item-subtitle class="cursive" style="margin-top: 5px">{{ dish.acf.Beilagen }}</v-list-item-subtitle>
                                <v-list-item-subtitle style="margin-top: 5px">{{ dish.acf.Preis }} €</v-list-item-subtitle>
                           
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-tab-item>
            </v-tabs>
        </v-container>
    </v-container>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        data: () => ({
            dish_categories: [],
            extracted_dish_categories: [],
            sideMenu: {
                visible: true,
            },
            false: false
        }),
        
        computed: {
            ...mapGetters({
                dishes: 'dishes/get_dishes'
            })
        },

        methods: {

            /**
             * Fetching dishes from wordpress
             */
            async fetchDishes(){
                let response = await this.$http.get('/wp-json/wp/v2/gerichte?per_page=100')
                this.$store.commit('dishes/set_dishes', response.data)
                this.fetchDishCategories()
            },

            /**
             * Fetching all existing categories from wordpress
             * and returning the parent categories
             */
            async fetchDishCategories(){
                let response = await this.$http.get('/wp-json/wp/v2/categories')

                response.data.forEach(item => {
                    if(item.parent != 0) {
                        this._getConcerningDishes(item)
                        this.dish_categories.push(item)
                    }
                })

                console.log(this.dish_categories)
            },

            _getConcerningDishes(categorie) {
                let aItems = []
                if(this.dishes){
                    console.log(this.dishes)
                    this.dishes.forEach(dish => {
                        if(dish.categories.includes(categorie.id)){
                            aItems.push(dish)
                        }
                    })
                }
                categorie.dishes = aItems
                return categorie
            },

            goto(id) {
                document.getElementById(id).scrollIntoView({
                    behavior: 'smooth'
                })
            },

            /**
             * This function is going to extract the categories
             * from the fetched data
             */
            mergeCategories(){
                if (this.dish_categories) {
                    
                    this.dish_categories.forEach(item => {
                        
                        if (item.parent != 0){
                            
                            let oCategorie = {
                                id: item.id,
                                name: item.name
                            }

                            this.extracted_dish_categories.push(oCategorie)
                        }
                    })
                }
            },

            onScrollSideMenu() {
                // if (typeof window === 'undefined') return
                // const top = window.pageYOffset || e.target.scrollTop || 0

                // if(top > 350) {
                //     this.sideMenu.visible = true

                // }else if (top < 500){
                //     this.sideMenu.visible = false
                // }
            },

            itemInCategorie(categorie){
                return categorie
            }
         },

        created () {
            // this.fetchDishCategories()
            this.fetchDishes()
            this.mergeCategories()
        }
    }
</script>

<style scoped>

.food-main-container{
    margin: 30;
    display: grid; 
    grid-template-columns: 1fr 2fr 1fr;
}

.food-menu-list{
    padding-left: 12vw;
}

.food-banner {
    height: 70vh;
    width: 100%;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/food_welcome.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 2;
    box-shadow: 0 4px 5px -1px gray;
}

.food-banner-subtitle{
    color:white;
}

.food-menu-container{
    background: white;
    margin-top: 5vh;
}

.food-menu-title{
    text-align: center;
    font-family: 'Satisfy', cursive;
    font-size: 2.5rem;
    color: #6e602f;
}

.food-menu-sidemenu{
    /* position: fixed;
    top: 50vh;
    left: 20vw;
    display: flex; 
    flex-direction: column;
    padding: 1vw;
    width: auto;
    z-index: 1; */
    position: sticky;
    top: 0px;
}

.fade-enter-active {
  transition: opacity .8s;
}

.fade-enter {
  opacity: 0;
}

.food-menu-sidemenu-links {
    color: #6e602f;
    padding-bottom: 1vh;
    font-style: italic;
}

.menu-categorie-title {
    padding-bottom: 5vh;
    padding-top: 10vh;
    text-decoration: underline;
}

.cursive{
    font-style: italic;
}

.menu-dish-title{
    color: #6e602f;
}
</style>
