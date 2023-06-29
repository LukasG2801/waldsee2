<template>
    <v-list class="food-menu-list">
        <v-list-item
            v-for="soup in soups"
            :key="soup"
            class="mb-5"
        >
            <v-list-item-content>
                                
                <v-list-item-title
                    v-text="soup.label"
                    class="menu-dish-title"
                ></v-list-item-title>
                                
                <v-list-item-subtitle class="cursive" style="margin-top: 5px">{{ soup.sides }}</v-list-item-subtitle>
                <!-- <v-list-item-subtitle style="margin-top: 5px">{{ soup.price }} €</v-list-item-subtitle> -->
                           
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        soups: [
            { label: 'Kartoffelrahmsuppe', price: '5,20', sides: ''},
            { label: 'Kartoffelrahmsuppe', price: '6,20', sides: 'mit Würstchen'},
            { label: 'Kartoffelrahmsuppe', price: '6,20', sides: 'mit Räucherlachsstreifen'},
            { label: 'Kraftbrühe', price: '5,20', sides: 'mit Flädle'},
            { label: 'Kürbissuppe', price: '5,80', sides: 'mit Ingwer & Kokosmilch'},
            { label: 'Maronensuppe', price: '6,50', sides: 'mit Speck'}
        ]
    })
}
</script>