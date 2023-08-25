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
            { label: 'Gebratene Wurst', price: '4,50', sides: 'mit Baguette'},
            { label: 'Gebratene Wurst', price: '8,50', sides: 'mit Kartoffelsalat oder Pommes frites'},
            { label: 'Currywurst', price: '4,80', sides: 'mit Baguette'},
            { label: 'Currywurst', price: '8,80', sides: 'mit Kartoffelsalat oder Pommes frites'},
            { label: 'Frische Bratwürste', price: '9,80', sides: 'mit Zwiebeln und Brot'},
            { label: 'Frische Bratwürste', price: '13,80', sides: 'mit Zwiebeln und Kartoffelsalat oder Pommes frites'},
        ]
    })
}
</script>