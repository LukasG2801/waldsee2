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
                <v-list-item-subtitle style="margin-top: 5px">{{ eis.price }} €</v-list-item-subtitle>
                           
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        eis: [
            { label: 'Schwarztee', price: '2,80', sides: ''},
            { label: 'Kamillentee', price: '2,80', sides: ''},
            { label: 'Kräutertee', price: '2,80', sides: ''},
            { label: 'Pfefferminztee', price: '2,80', sides: ''},
            { label: 'Früchtetee', price: '2,80', sides: ''},
            { label: 'Rooibus/Vanille/Orange', price: '2,80', sides: ''},
        ]
    })
}
</script>