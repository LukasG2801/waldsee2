<template>
    <v-list class="food-menu-list">
        <v-list-item
            v-for="salad in salads"
            :key="salad"
            class="mb-5"
        >
            <v-list-item-content>
                                
                <v-list-item-title
                    v-text="salad.label"
                    class="menu-dish-title"
                ></v-list-item-title>
                                
                <v-list-item-subtitle class="cursive" style="margin-top: 5px">{{ salad.sides }}</v-list-item-subtitle>
                <!-- <v-list-item-subtitle style="margin-top: 5px">{{ salad.price }} €</v-list-item-subtitle> -->
                           
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        salads: [
            { label: 'Wurstsalat', price: '9,80', sides: ''},
            { label: 'Straßburger Wurstsalat', price: '9,80', sides: ''},
            { label: 'Wurstsalat', price: '13,80', sides: 'mit Rosmarinkartoffeln und Kräuter-Dip'},
            { label: 'Strammer Max', price: '12,80', sides: 'mit Bauernbrot, Spiegelei, rohem Schinken'},
            { label: 'Rindfleischsalat vom Tafelspitz', price: '14,80', sides: 'mit Rosmarinkartoffeln, Kräuter-Dip'},
        ]
    })
}
</script>