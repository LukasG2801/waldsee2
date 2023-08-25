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
                    class="menu-dish-title text-wrap"
                ></v-list-item-title>
                                
                <v-list-item-subtitle class="cursive text-wrap" style="margin-top: 5px">{{ eis.sides }}</v-list-item-subtitle>
                <!-- <v-list-item-subtitle style="margin-top: 5px">{{ eis.price }} €</v-list-item-subtitle> -->
                           
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>
<script>
export default {
    data: () => ({
        eis: [
            { label: '1 Kugel Eis', price: '1,50', sides: ''},
            { label: 'Kinder-Eis', price: '3,00', sides: '2 Kugeln'},
            { label: 'Gemischtes Eis', price: '4,50', sides: '3 Kugeln'},
            { label: 'Gemischtes Eis mit Sahne', price: '5,30', sides: '3 Kugeln'},
            { label: 'Portion Sahne', price: '0,80', sides: ''},
            { label: 'Eiskaffee', price: '5,20', sides: ''},
            { label: 'Eisschokolade', price: '5,20', sides: ''},
            { label: 'Früchtebecher', price: '6,80', sides: 'gemischtes Eis mit Früchten und Sahne'},
            { label: 'Brasil', price: '6,80', sides: 'Vanille/Stracciatella und Schokoladeneis, Eierlikör, Sahne'},
            { label: 'Schwarzwaldbecher', price: '6,80', sides: 'Vanilleeis, Sauerkirschen, Kirschwasser, Sahne'},
            { label: 'Joghurtbecher', price: '6,80', sides: 'Joghurteis, Naturjoghurt, frische Früchte'},
            { label: 'Erdbeerbecher', price: '6,80', sides: 'Vanilleeis, frische Erdbeeren, Sahne'},
            { label: 'Krokantbecher', price: '6,80', sides: 'Vanilleeis, Espresso-Krokanteis, Walnusseis, Schokolikör, Sahne'}
        ]
    })
}
</script>