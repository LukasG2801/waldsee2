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
                <v-list-item-subtitle style="margin-top: 5px">{{ salad.price }} €</v-list-item-subtitle>
                           
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        salads: [
            { label: 'Spaghetti con aglio e peperoncini  – vegetarisch', price: '12,80', sides: 'mit Tomaten, Paprika, Zucchini, Champignons, Oliven, Peperoni, Knoblauch, Parmesan'},
            { label: 'Spaghetti con aglio e peperoncini mit gebratener Hähnchenbrust', price: '16,80', sides: 'Tomaten, Paprika, Zucchini, Champignons, Oliven, Peperoni, Knoblauch, Parmesan'},
            { label: 'Spaghetti con aglio e peperoncini mit gebratenem Lachssteak, Doradenfilet, Garnele', price: '22,80', sides: 'Tomaten, Paprika, Zucchini, Champignons, Oliven, Peperoni, Knoblauch, Parmesan'},
            { label: 'Spaghetti con aglio e peperoncini mit gebratenem Lammfilet ', price: '22,80', sides: 'Tomaten, Paprika, Zucchini, Champignons, Oliven, Peperoni, Knoblauch, Parmesan'},
        ]
    })
}
</script>