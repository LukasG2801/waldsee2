<template>
    <v-list class="food-menu-list">
        <v-list-item
            v-for="fish in fish"
            :key="fish"
            class="mb-5"
        >
            <v-list-item-content>
                                
                <v-list-item-title
                    v-text="fish.label"
                    class="menu-dish-title"
                ></v-list-item-title>
                                
                <v-list-item-subtitle class="cursive" style="margin-top: 5px">{{ fish.sides }}</v-list-item-subtitle>
                <v-list-item-subtitle style="margin-top: 5px">{{ fish.price }} €</v-list-item-subtitle>
                           
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        fish: [
            { label: 'Gebratenes Lachssteak, Doradenfilet und Garnele', price: '24,80', sides: 'Rosmarinkartoffeln, mediterranes Gemüse, Kräuter-Dip'}
        ]
    })
}
</script>