<template>
    <v-container
        fluid
        class="ma-0 pa-0"
    >
        <v-container
            fluid
            class="drink-banner d-flex"
            fill-height
            ref="banner_container"
        >
            <v-container class="d-flex flex-column">
                <p class="food-banner-subtitle"></p>
            </v-container>
        </v-container>

        <v-container class="d-flex justify-center pt-10">
            <v-breadcrumbs
                :items="aBreadcrumbs"
            ></v-breadcrumbs>
        </v-container>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        aBreadcrumbs: [
            {text: 'Startseite', disabled: false, href:"/"},
            {text: 'Getränkekarte', disabled: true, href:"/drinks"}
        ]
    })
}
</script>

<style scoped>
@import url('../styles/style.css');

.drink-banner{
    height: 80vh;
    width: 100%;
    background: url('../assets/drink_welcome_opt.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    z-index: 2;
    box-shadow: 0 4px 5px -1px gray;
}
</style>