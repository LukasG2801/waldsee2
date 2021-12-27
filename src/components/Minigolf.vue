<template>
    <v-parallax
        src="../assets/minigolf.jpg"
        height="600"
        dark
    >
        
        <v-container
            class="d-flex justify-start"
        >
            <h1 data-aos="fade-up">Minigolf</h1>
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
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all 4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(30px);
  opacity: 0;
}
</style>