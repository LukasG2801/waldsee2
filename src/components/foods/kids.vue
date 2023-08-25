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
                    class="menu-dish-title text-wrap"
                ></v-list-item-title>
                                
                <v-list-item-subtitle class="cursive text-wrap" style="margin-top: 5px">{{ salad.sides }}</v-list-item-subtitle>
                <!-- <v-list-item-subtitle style="margin-top: 5px">{{ salad.price }} €</v-list-item-subtitle> -->
                           
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        salads: [
            { label: 'Portion Pommes', price: '4,80', sides: 'mit Ketchup'},
            { label: 'Spätzle', price: '5,80', sides: 'mit Rahmsauce'},
            { label: 'Spaghetti', price: '7,80', sides: 'mit Tomatensauce'},
            { label: 'Fischstäbchen', price: '7,80', sides: 'mit Kartoffelsalat'},
            { label: 'Chicken Nuggets', price: '8,80', sides: 'mit Pommes frites'},
            { label: 'Kleines Schnitzel', price: '9,80', sides: 'mit Pommes frites'},
            { label: 'Rahmschnitzel', price: '9,80', sides: 'mit Spätzle'},
        ]
    })
}
</script>