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
            { label: 'Rinderzunge in Madeira', price: '17,80', sides: 'mit hausgemachten Spätzle'},
            { label: 'Rumpsteak', price: '24,80', sides: 'mit Kräuterbutter, Zwiebeln, Pommes frites'},
            { label: 'Rumpsteak', price: '24,80', sides: 'in Pfefferrahmsauce mit hausgemachten Spätzle'},
        ]
    })
}
</script>