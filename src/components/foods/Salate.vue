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
            { label: 'Kleiner Salatteller', price: '5,70', sides: 'mit Rohkost- und Blattsalaten'},
            { label: 'Großer Salatteller', price: '9,80', sides: 'mit Rohkost- und Blattsalaten'},
            { label: 'Salatteller', price: '15,80', sides: 'mit Rohkost- und Blattsalaten, Frischkäse gefüllte Röstirollen'},
            { label: 'Salatteller "ASIA"', price: '15,80', sides: 'Blattsalate mit Frühlingsrollen, warmes Wokgemüse und Chili-Dip'},
            { label: 'Salatteller mit Schnitzelstreifen', price: '16,80', sides: 'Rohkost- und Blattsalate, Kräuter-Dip'},
            { label: 'Salatteller "SOMMERZEIT"', price: '16,80', sides: 'Rohkost- und Blattsalate, Hähnchenbrust, Kräuter-Dip'},
            { label: 'Salatteller mit Zanderknusperlis', price: '16,80', sides: 'Rohkost- und Blattsalate, Honig-Senf-Dip'},
            { label: 'Salatteller "WALDSEE"', price: '17,80', sides: 'Rohkost- und Blattsalate, Räucherlachs, Garnelen, Zanderknusperlis, Tintenfischringe' },
            { label: 'Salatteller', price: '20,80', sides: 'mit gebratenem Lachssteak, Doradenfilet, Garnele, Rohkost- und Blattsalate, Kräuter-Dip, Honig-Senf-Dip'},
            { label: 'Salatteller', price: '20,80', sides: 'mit gebratenem Lammfilet, Rohkost- und Blattsalate, mediterranes Gemüse'}
        ]
    })
}
</script>