<template>
    <v-app>
      
      <v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
        width="60vw"
        app
        style="z-index: 99;"
      >
        <div
          class="side-nav-container"
        > 
        
          <div class="side-menu-menu-container">
            
            <router-link to="/">
              <img 
                :src="require('./assets/logo_black.png')" 
                class="side-menu-menu-logo"
              />
            </router-link>
            
            <!-- <p class="side-menu-menu-title">Menu</p> -->
            <ul class="side-menu-menu">
              <li 
                v-for="item in items"
                :key="item.text"
              >
                <router-link :to="item.path">
                  <p class="side-menu-menu-link">{{ item.text }}</p>
                </router-link>
              </li>
            </ul>

            <v-btn
              icon
              @click="drawer = !drawer"
              x-large
              style="margin-top: 50px;"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>

            <div
              class="side-menu-social-container"
            >
              <v-btn
                color="primary"
                icon
                rounded
                x-large
              >
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn
                color="primary"
                icon
                rounded
                x-large
              >
                <v-icon>mdi-instagram</v-icon>
              </v-btn>

              <v-btn
                color="primary"
                icon
                rounded
                x-large
                @click="onOpenMail"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>

              <v-btn
                color="primary"
                icon
                rounded
                x-large
              >
                <v-icon>mdi-google</v-icon>
              </v-btn>
            </div>

          </div>
          
          <div class="side-menu-image-container">
            <v-img :src="require('./assets/welcome.jpg')" class="side-menu-image"/>
          </div>
        
        </div>
      </v-navigation-drawer>

      <v-app-bar
        :dark="appbar.dark"
        fixed
        class="landing-app-bar"
        ref="app_bar"
        v-scroll="onScrollAppBar"
        :color="appbar.color"
        style="z-index: 99;"
      >
        
        <v-app-bar-nav-icon
          x-large
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-img
          class="mx-2 ml-10"
          src="./assets/logo_black.png"
          max-height="100"
          max-width="100"
          contain
          v-show="appbar.logo"
        />

        <v-spacer/>
        
        <v-chip
          class="ma-2"
          color="green"
          outlined
        > 
          <v-icon
            left
          >
            mdi-clock
          </v-icon>
          Geöffnet
        </v-chip>

        <v-chip
          class="ma-2"
          color="primary"
          :text-color="appbar.chip_phone_textcolor"
          outlined
        >
          <v-icon
            left
          >
            mdi-phone-outline
          </v-icon>
          +49 7832-8977

        </v-chip>
      
      </v-app-bar>

      <v-layout column class="fab-menu">
          <v-btn dark color="primary" height="50px" tile>
            <v-icon>mdi-phone-outline</v-icon>
          </v-btn>
          <v-btn dark color="secondary" height="50px" tile>
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn dark color="secondary" height="50px" tile>
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                dark 
                color="secondary" 
                height="50px" 
                tile
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-silverware</v-icon>
              </v-btn>
            </template>
            <span>Speisekarte</span>
          </v-tooltip>

          <v-menu
            rounded="false"
            offset-x
          >
            <template v-slot:activator="{ attrs, on }">
              <v-btn 
                dark 
                color="secondary" 
                height="50px" 
                tile
                v-bind="attrs"
                v-on="on"
              >
                <country-flag country="de" size="small"/>
              </v-btn>
            </template>
          
          <v-list>
            <v-list-item
              v-for="language in languages"
              :key="language.code"
            >
              <v-list-item-title>
                {{ language.code }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-layout>

      <v-btn
        fab
        fixed
        bottom 
        right
        v-scroll="onScroll"
        v-show="fab"
        color="primary"
        @click="toTop"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>

      <v-main id="main">
        <v-container 
          fluid
          class="ma-0 pa-0"
        >
          <router-view
          onscroll="onScrollMainContainer"/>
        </v-container>
      </v-main>

      <v-footer 
        app 
        fixed
        class="footer"
      >
        <!-- <v-layout>
          <v-container
            class="d-flex justify-content"
          >
            <p>Impressum</p>
          </v-container>
        </v-layout> -->
        <!-- <v-btn
          icon
          dark
        >
          <v-icon>mdi-phone-outline</v-icon>
        </v-btn> -->
      </v-footer>
    </v-app>          
</template>

<script>
// import Footer from './components/Footer.vue'

export default {
  name: 'App',

  data: () => ({
    appbar: {
      color: 'rgba(222,222,222,0.4) !important;',
      dark: true,
      logo: false,
      chip_phone_textcolor: 'white'
    },
    items: [
      { text: 'ESSEN', path: '/food' },
      { text: 'TRINKEN', path: '/food' },
      { text: 'MINIGOLF', path: '/food' },
      { text: 'IMPRESSUM', path: '/food' },
    ],
    languages: [
      { code: 'de'},
      { code: 'gb'},
      { code: 'fr'}
    ],
    fab: false, 
    hidden: false,
    drawer: false,
    imagesToPreload: [
      "./assets/logo_white.png",
      "../assets/logo_black.png",
      "../assets/welcome.jpg",
      "../assets/location1.jpg",
      "../assets/food_banner.jpg",
      "../assets/food1.jpg",
      "../assets/banner_cropped.jpg"
    ],
    isLoading: false
  }),

  methods: {
    onPhoneCallPressed() {
      window.location.href='tel:+4978328977'
    },

    onOpenMail() {
      window.location.href='mailto:info@waldsee-terrasse.de'
    },

    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },

    toTop () {
      this.$vuetify.goTo(0)
    },

    onScrollAppBar(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0

      if(top > 20) {
        this.appbar.color = "white"
        this.appbar.dark = false
        this.appbar.logo = true
        this.appbar.chip_phone_textcolor = 'black'
      }else if (top === 0){
        this.appbar.color="rgba(222,222,222,0.4) !important;"
        this.appbar.dark = true
        this.appbar.logo = false
        this.appbar.chip_phone_textcolor = 'white'
      }
    }

  },

  components: {
    // 'Footer': Footer
  },

  mounted() {
  },

  created() {
  }
};

</script>

<style>
@import url('./styles/style.css');

@font-face {
  font-family: "Bergell";
  src: url('./fonts/Bergell Std Regular.otf') format('truetype');
}
li {
  list-style: none;
}

a {
  text-decoration: none;
}

.footer{
  background: transparent !important;
  opacity: 0.8;
}

.side-menu-menu-container {
  float: left;
  width: 45%;
  text-align: center;
  padding-top: 20vh;
}

.side-menu-menu li p {
  font-family: "Merienda";
  font-size: 1.5rem;
}

.side-menu-menu li {
  padding-bottom: 1.5vh;
}

.side-menu-image-container {
  width: 55%;
  height: 100%;
  padding: 0; 
  margin: 0;
  float: right; 
}

.side-menu-image {
  height: 100%;
}

.side-nav-container {
  width: 100%;
  height: 100vh;
}

.side-menu-menu-title {
  font-family: "Bergell";
  font-size: 3.5rem;
  margin-bottom: 5vh;
  color: #5e5e5e;
}

.side-menu-social-container {
  margin-top: 5vh;
}

.side-menu-menu-link{
  color: black;
}

.side-menu-menu-logo{
  height: 80px;
  margin-bottom: 50px;
}

.header-navbar-logo{
  height: 50px;
  width: auto;
}

.landing-app-bar{
  /* background: rgba(222,222,222,0.4) !important; */
  background: transparent !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}

.fab-menu{
    position: fixed;
    top: 20vh;
    right: 0;
    z-index: 99;
}
</style>
