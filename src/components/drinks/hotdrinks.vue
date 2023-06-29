<template>
    <v-list class="food-menu-list">
        <v-list-item
            v-for="eis in eis"
            :key="eis"
            class="mb-5"
        >
            <v-list-item-content>
                                
                <v-list-item-title
                    v-text="eis.label"
                    class="menu-dish-title"
                ></v-list-item-title>
                                
                <v-list-item-subtitle class="cursive" style="margin-top: 5px">{{ eis.sides }}</v-list-item-subtitle>
                <!-- <v-list-item-subtitle style="margin-top: 5px">{{ eis.price }} €</v-list-item-subtitle> -->
                           
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        eis: [
            { label: 'Tasse Kaffee', price: '2,50', sides: ''},
            { label: 'Tasse Kaffe', price: '2,50', sides: 'koffeinfrei'},
            { label: 'Kännchen Kaffe', price: '4,80', sides: ''},
            { label: 'Kännchen Kaffe', price: '4,80', sides: 'koffeinfrei'},
            { label: 'Milchkaffee', price: '3,30', sides: ''},
            { label: 'Cappucino', price: '2,80', sides: 'mit Milchschaum'},
            { label: 'Cappucion', price: '2,80', sides: 'mit Sahne'},
            { label: 'Latte Macchiato', price: '3,30', sides: ''},
            { label: 'Espresso', price: '2,20', sides: ''},
            { label: 'Heiße Schokolade', price: '3,30', sides: ''}
        ]
    })
}
</script>