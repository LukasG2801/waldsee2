<template>
    <v-container
        fluid
        class="ma-0 pa-0"
    >
        <v-container
            fluid
            class="imprint-screen ma-0 pa-0"
        >
        </v-container>
        
        <v-container class="d-flex justify-center pt-10">
            <v-breadcrumbs
                :items="aBreadcrumbs"
            >
                <template v-slot:item="{ item }">
                    <v-breadcrumbs-item
                        :href="item.href"
                        :disabled="item.disabled"
                >
                    {{ $t(item.text) }}
                    </v-breadcrumbs-item>
                </template>
            </v-breadcrumbs>
        </v-container>

        <v-container class="pt-10">
            <p class="site-title">{{ $t('Imprint.Title')}}</p>
        </v-container>
        <v-container class="d-flex flex-column align-center pt-10">
            <p>
                Verantwortlich für den Inhalt dieser Website:
            </p>
            <p>
                Restaurant Waldsee-Terrasse
            </p>
            <p>
                Familie Rainer Müller
            </p>
            <P>
                Waldseeweg 25
            </P>
            <p>
                77716 Haslach
            </p>
            <p>
                Telefon 07832/8977
            </p>
            <p>
                e-mail waldseeterrasse@web.de
            </p>
            <p>
                web www.waldsee-terrasse.de
            </p>
        </v-container>
        <v-container class="d-flex flex-column align-center pt-10">
            <h3>Haftungsausschluss</h3>
            <v-container class="disclaimer">
                Der Autor übernimmt keinerlei Gewähr für die
                Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller, immaterieller Art beziehen.
            </v-container>
        </v-container>
    </v-container>
</template>
<script>
export default({
    data: () => ({
        aBreadcrumbs: [
            {text: 'Breadcrumbs.node.Welcome', disabled: false, href:"/"},
            {text: 'Breadcrumbs.node.Imprint', disabled: true, href:"/imprint"}
        ]
    })
})
</script>
<style scoped>
.imprint-screen{
    height: 80vh;
    width: 100%;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1) ), url('../assets/banner2_opt.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    box-shadow: 0 4px 5px -1px gray;
}

.disclaimer {
    text-align: justify;
    justify-content: center;
    width: 20vw;
    padding-bottom: 20vh;
}
</style>