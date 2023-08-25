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

        <v-container class="d-flex justify-center pt-10">
            <v-breadcrumbs
                :items="aBreadcrumbs"
            ></v-breadcrumbs>
        </v-container>

        <v-container
            class="food-menu-container"
        >
            <p class="site-title">{{ $t('Food.Menu.Title')}}</p>
            <v-toolbar
                flat
                light
            >
                <v-spacer/>
                <!-- <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            icon
                            small
                            rounded
                            elevation="5"
                            class="mx-2"
                            color="secondary"
                            @click="onDownload"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-icon small>mdi-file-pdf-box</v-icon>
                        </v-btn>
                    </template>
                    
                    <span>Als PDF anzeigen</span>
                </v-tooltip> -->
            </v-toolbar>

            <v-container class="d-flex pl-10">
            <!-- <v-tabs vertical>
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
                                
                                <v-list-item-subtitle class="cursive" style="margin-top: 5px">{{ dish.acf.Beilage }}</v-list-item-subtitle>
                                <v-list-item-subtitle style="margin-top: 5px">{{ dish.acf.preis }} €</v-list-item-subtitle>
                           
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-tab-item>
            </v-tabs> -->
            <!-- <v-tabs 
                vertical
                v-model="tab"
            >
                <v-tab
                    v-for="categorie in fix_dish_categories"
                    :key="categorie.label"
                >
                    {{ categorie.label }}
                </v-tab>

                <v-tabs-items
                    v-model="tab"
                >
                <v-tab-item
                    v-for="categorie in fix_dish_categories"
                    :key="categorie.label"
                >
                    <component v-bind:is="categorie.component"/>
                </v-tab-item>
                </v-tabs-items>
            </v-tabs> -->

            <v-expansion-panels>
                <v-expansion-panel
                    v-for="(categorie, i) in fix_dish_categories"
                    :key="i"
                >
                    <v-expansion-panel-header>{{ categorie.label }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <component v-bind:is="categorie.component"></component>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>

            </v-container>
        </v-container>
    </v-container>
</template>
<script>
    import { mapGetters } from 'vuex'
    import SoupComp from '../components/foods/Suppen.vue'
    import SaladComp from '../components/foods/Salate.vue'
    import FishComp from '../components/foods/fish.vue'
    import PoultryComp from '../components/foods/poultry.vue'
    import PorkComp from '../components/foods/Pork.vue'
    import BeefComp from '../components/foods/beef.vue'
    import LambComp from '../components/foods/lamb.vue'
    import AsiaComp from '../components/foods/asia.vue'
    import SpaghettiComp from '../components/foods/spaghetti.vue'
    import KidsComp from '../components/foods/kids.vue'
    import VesperComp from '../components/foods/vesper.vue'
    import WurstComp from '../components/foods/wurst.vue'
    import EisComp from '../components/foods/Eis.vue'

    export default {
        data: () => ({
            dish_categories: [],
            extracted_dish_categories: [],
            sideMenu: {
                visible: true,
            },
            false: false,
            aBreadcrumbs: [
                {text: 'Startseite', disabled: false, href:"/"},
                {text: 'Speisekarte', disabled: true, href:"/food"}
            ],
            fix_dish_categories: [
                { label: 'Suppen', component: SoupComp },
                { label: 'Salate', component: SaladComp },
                { label: 'Fischteller', component: FishComp },
                { label: 'Geflügel', component: PoultryComp },
                { label: 'vom Schwein', component: PorkComp },
                { label: 'vom Rind', component: BeefComp },
                { label: 'vom Lamm', component: LambComp },
                { label: 'Asiateller', component: AsiaComp },
                { label: 'Spaghetti', component: SpaghettiComp},
                { label: 'für kleine Gäste', component: KidsComp},
                { label: 'Vesper', component: VesperComp},
                { label: "hier geht's um die WURST", component: WurstComp},
                { label: "Eis", component: EisComp}
            ],
            tab: null
        }),
        
        computed: {
            ...mapGetters({
                dishes: 'dishes/get_dishes'
            })
        },

        components: {
            SoupComp,
            SaladComp,
            FishComp,
            PoultryComp,
            PorkComp,
            BeefComp, 
            LambComp,
            AsiaComp,
            KidsComp,
            WurstComp,
            VesperComp,
            EisComp
        },

        methods: {

            /**
             * Fetching dishes from wordpress
             */
            async fetchDishes(){
                let response = await this.$http.get('/wp-json/wp/v2/dishes?per_page=100')
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

                aItems.sort(function(a, b){ return a - b })
                categorie.dishes = aItems
                return categorie
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
            },

            onShare() {
                
            },

            onPrint() {
                window.print()
            },

            onDownload() {
                var link = document.createElement('a');
                link.href = require("@/assets/SPEISEKARTE.pdf");
                link.download = 'Waldsee-Speisekarte.pdf';
                link.click()
            }
         },

        created () {
            // this.fetchDishCategories()
            // this.fetchDishes()
            // this.mergeCategories()
        }
    }
</script>

<style scoped>
</style>
