<template>    
    <v-container
        fluid
        class="d-flex justify-start minigolf-intro"
    >
        <div class="location-intro-text">
            <p class="location-intro-text-title">Minigolf</p>
            <p class="location-intro-text-subtitle">Nach oder vor dem Essen noch eine Runde Minigolf ?</p>
            <p class="location-intro-text-subtitle">Direkt neben unserem Restaurant bieten wir in unserem Außenbereich eine Minigolf-Bahn an</p>
        </div>
    </v-container>
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
    height: 100vh;
    width: 100%;
    background: linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url('../assets/minigolf_opt.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    padding-top: 60vh;
    padding-left: 2vw;
    box-shadow: 0px -4px 5px -1px gray;
}
</style>