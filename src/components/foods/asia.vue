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
            { label: 'Asiatischer Gemüseteller', price: '16,80', sides: 'mit Basmatireis und Frühlingsrollen'},
            { label: 'Asiatischer Gemüseteller', price: '17,80', sides: 'mit Basmatireis und Hähnchenbruststreifen'},
            { label: 'Asiatischer Gemüseteller', price: '18,80', sides: 'mit Basmatireis und Zanderknusperlis'},
            { label: 'Asiatischer Gemüseteller', price: '23,80', sides: 'mit Basmatireis, gebratenem Lachs, Doradenfilet und Garnele'}
        ]
    })
}
</script>