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
                <!-- <v-subheader>{{ categorie.name }}</v-subheader> -->
                <v-toolbar-title
                    class="menu-categorie-title"
                >
                    {{ categorie.name }}
                </v-toolbar-title>
                
                <v-list-item
                    v-for="item in dishes"
                    :key="item.name"
                    :v-if="itemInCategorie(categorie.id, item.categories)"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title.rendered"></v-list-item-title>
                        <v-list-item-subtitle>{{ item.acf.Beilagen }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ item.acf.Preis }} €</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-container>

        <transition name="fade">
            <v-container 
                class="food-menu-sidemenu"
                v-scroll="onScrollSideMenu"
                v-show="sideMenu.visible"
            >
                <!-- <v-btn
                    text 
                    :href="item.id"
                    v-for="item in dish_categories" 
                    :key="item.id"
                >
                    # {{ item.name }}
                </v-btn> -->
                <v-list dense>
                    <v-subheader>Unsere Auswahl</v-subheader>
                    <v-list-item
                        v-for="item in dish_categories"
                        :key="item.id"
                        link
                        :href="'/food/' + item.slug"
                    >
                        <v-list-item-icon>
                            <v-icon small>mdi-pound</v-icon>
                        </v-list-item-icon>
                        
                        <v-list-item-content>
                            <v-list-item-title v-text="item.name"></v-list-item-title>
                        </v-list-item-content>
                        
                    </v-list-item>
                </v-list>
            </v-container>
        </transition>
    </v-container>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        data: () => ({
            dish_categories: [],
            extracted_dish_categories: [],
            sideMenu: {
                visible: false,
            },
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
                let response = await this.$http.get('/wp-json/wp/v2/gerichte')
                this.$store.commit('dishes/set_dishes', response.data)
            },

            /**
             * Fetching all existing categories from wordpress
             * and returning the parent categories
             */
            async fetchDishCategories(){
                let response = await this.$http.get('/wp-json/wp/v2/categories')

                response.data.forEach(item => {
                    if(item.parent != 0) {
                        this.dish_categories.push(item)
                    }
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

            onScrollSideMenu(e) {
                if (typeof window === 'undefined') return
                const top = window.pageYOffset || e.target.scrollTop || 0

                if(top > 350) {
                    this.sideMenu.visible = true

                }else if (top < 500){
                    this.sideMenu.visible = false
                }            
            },

            itemInCategorie(categorie, itemcategories){
                console.log(itemcategories.includes(categorie))
               return itemcategories.includes(categorie)
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
    z-index: 2;
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
    text-align: center;
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
    left: 8vw;
    display: flex; 
    flex-direction: column;
    padding: 1vw;
    width: auto;
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
}
</style>
