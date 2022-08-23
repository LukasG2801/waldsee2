<template>
    <v-container
        fluid
        class="ma-0 pa-0"
    >
        <v-container
            fluid
            class="drink-banner d-flex"
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
            <p class="site-title">Getränke</p>
            <v-toolbar
                flat
                light
            >
                <v-spacer/>
                <v-tooltip bottom>
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
                </v-tooltip>
            </v-toolbar>

        <v-container class="d-flex pl-10">
            <v-tabs 
                vertical
                v-model="tab"
            >
                <v-tab
                    v-for="drink in drinks"
                    :key="drink.label"
                >
                    {{ drink.label }}
                </v-tab>

                <v-tabs-items
                    v-model="tab"
                >
                <v-tab-item
                    v-for="drink in drinks"
                    :key="drink.label"
                >
                    <component v-bind:is="drink.component"/>
                </v-tab-item>
                </v-tabs-items>
            </v-tabs>

        </v-container>
        </v-container>
    </v-container>
</template>
<script>
import hotDrinksComp from '../components/drinks/hotdrinks.vue'
import teaComp from '../components/drinks/tea.vue'

export default {
    data: () => ({
        aBreadcrumbs: [
            {text: 'Startseite', disabled: false, href:"/"},
            {text: 'Getränkekarte', disabled: true, href:"/drinks"}
        ],
        drinks: [
            { label: 'Warme Getränke', component: hotDrinksComp },
            { label: 'SAMOVA BIO TEE', component: teaComp}
        ],
        tab: null
    }),
    components: {
        hotDrinksComp
    }
}
</script>

<style scoped>
@import url('../styles/style.css');

.drink-banner{
    height: 80vh;
    width: 100%;
    background: url('../assets/drink_welcome_opt.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    z-index: 2;
    box-shadow: 0 4px 5px -1px gray;
}
</style>