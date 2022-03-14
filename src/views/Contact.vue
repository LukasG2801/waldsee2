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
            <p class="site-title">{{ $t('Contact.Title')}}</p>
        </v-container>
        <v-container class="d-flex flex-column align-center pt-10">
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
                waldseeterrasse@web.de
            </p>
            <p>
                www.waldsee-terrasse.de
            </p>
        </v-container>
        <v-container class="pt-10">
            <p class="site-subtitle">{{ $t('Contact.OpeningHours')}}</p>
        </v-container>
        <v-container class="d-flex flex-column align-center pt-10">
            <p>
                Montag & Dienstag: Ruhetag
            </p>
            <p>
                Mittwoch: 11:00 Uhr - 21:00 Uhr
            </p>
            <P>
                Donnerstag: 11:00 Uhr - 21:00 Uhr
            </P>
            <p>
                Freitag: 11:00 Uhr - 21:00 Uhr
            </p>
            <p>
                Samstag: 11:00 Uhr - 21:00 Uhr
            </p>
            <p>
                Sonn- und Feiertags: 11:00 Uhr - 20:00 Uhr
            </p>
            <br/>
            <p>Durchgehend warme Küche:</p>
            <p>Werktags von 11:30 Uhr - 20:30 Uhr</p>
            <p>Sonn- und Feiertags von 11:30 Uhr - 19:30 Uhr</p>
        </v-container>
        <v-container class="d-flex flex-column align-center pt-10 pb-10">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2655.8713398337436!2d8.092477051182762!3d48.26685045002537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41090f8fe230b2eb%3A0xf89fc1a6b17b199a!2sRestaurant%20Waldsee-Terrasse!5e0!3m2!1sen!2sde!4v1646768577357!5m2!1sen!2sde" width="600" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </v-container>
    </v-container>
</template>
<script>
export default({
    data: () => ({
        aBreadcrumbs: [
            {text: 'Breadcrumbs.node.Welcome', disabled: false, href:"/"},
            {text: 'Breadcrumbs.node.Contact', disabled: true, href:"/contact"}
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