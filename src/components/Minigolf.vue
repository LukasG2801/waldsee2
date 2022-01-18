<template>
    <v-parallax
        src="../assets/minigolf.jpg"
        height="600"
        dark
    >
        
        <v-container
            class="d-flex justify-start minigolf-intro"
        >
            <div class="location-intro-text">
                <p class="location-intro-text-title">Minigolf</p>
                <p class="location-intro-text-subtitle">Nach oder vor dem Essen noch eine Runde Minigolf ?</p>
                <p class="location-intro-text-subtitle">Direkt neben unserem Restaurant bieten wir in unserem Außenbereich eine Minigolf-Bahn an</p>
            </div>
        </v-container>
        
    </v-parallax>
</template>
<script>
export default {
    data: () => ({

    }),

    methods: {
        test() {
            console.log("transition")
        }
    },

    created() {

    }
}

</script>
<style scoped>
.minigolf-intro{
    padding-left: 2vw;
    margin: 0;
}
</style>