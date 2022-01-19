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
        fixed
        ref="app_bar"
        elevate-on-scroll
        elevation="5"
        height="100px"
        class="pl-8 pr-8"
        v-scroll="onScrollAppBar"
      >
        <a class="app-bar-link">Willkommen</a>
        <a class="app-bar-link">Menü</a>
        <a class="app-bar-link">Getränke</a>
        
        <v-spacer/>
        <router-link
          to="/"
        >
        <v-img
          class="mx-2 ml-10"
          src="./assets/logo_black.png"
          max-height="100"
          max-width="100"
          contain
          v-show="true"
        />
        </router-link>
        <v-spacer/>
        <a class="app-bar-link">Karriere</a>
        <a class="app-bar-link">Kontakt</a>
        <a class="app-bar-link">Impressum</a>
      </v-app-bar>

      <transition name="fade">
      <v-layout 
        column 
        class="fab-menu"
        v-show="sideMenu"
      >
          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                dark 
                color="primary" 
                height="50px" 
                tile
                @click="onPhoneCallPressed"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-phone-outline</v-icon>
              </v-btn>
            </template>
            <span>Anrufen</span>
          </v-tooltip>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                dark 
                color="secondary" 
                height="50px" 
                tile
                @click="onOpenMail"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-email</v-icon>
              </v-btn>
            </template>
            <span>Email</span>
          </v-tooltip>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                dark 
                color="secondary" 
                height="50px" 
                tile
                @click="onOpenMaps"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-map-marker</v-icon>
              </v-btn>
            </template>
            <span>Maps</span>
          </v-tooltip>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                dark 
                color="secondary" 
                height="50px" 
                tile
                v-bind="attrs"
                v-on="on"
                to="/food"
              >
                <v-icon>mdi-silverware</v-icon>
              </v-btn>
            </template>
            <span>Speisekarte</span>
          </v-tooltip>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                dark 
                color="secondary" 
                height="50px" 
                tile
                v-bind="attrs"
                v-on="on"
                to="/drinks"
              >
                <v-icon>mdi-glass-wine</v-icon>
              </v-btn>
            </template>
            <span>Getränkekarte</span>
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
                <!-- <country-flag country="de" size="small"/> -->
                <p>{{ $i18n.locale }}</p>
              </v-btn>
            </template>
          
          <v-list
          >
            <v-list-item-group
              v-model="$i18n.locale"
            >
            <v-list-item
              v-for="(lang, i) in languages"
              :key="`Lang${i}`"
              :value="lang.code"
              link
            >
              <v-list-item-title>
                {{ lang.description }}
              </v-list-item-title>
            </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-layout>
      </transition>

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
          class="ma-0 pa-0 background"
        >
          <transition name="fade" mode="out-in">
          <router-view
            onscroll="onScrollMainContainer"
          />
          </transition>
          <Footer/>
        </v-container>
      </v-main>

      <v-overlay :value="isLoading">
        <v-progress-circular
          indeterminate
          size="64"
        >
      </v-progress-circular>
    </v-overlay>
    </v-app>          
</template>

<script>
import Footer from './components/Footer.vue'
import i18n from './i18n.js'

export default {
  name: 'App',

  data: () => ({
    appbar: {
      color: 'rgba(222,222,222,0.4) !important;',
      dark: true,
      logo: false,
      chip_phone_textcolor: 'white',
      navicon_color: 'white'
    },
    items: [
      { text: 'ESSEN', path: '/food' },
      { text: 'TRINKEN', path: '/food' },
      { text: 'MINIGOLF', path: '/food' },
      { text: 'IMPRESSUM', path: '/food' },
    ],
    languages: [
      { code: 'de', description: i18n.t('language.german'), icon: ''},
      { code: 'en', description: i18n.t('language.english'), icon: ''},
      { code: 'fr', description: i18n.t('language.french'), icon: ''},
    ],
    selectedLang: '',
    fab: false, 
    hidden: false,
    drawer: false,
    imagesToPreload: [
      'logo_white.png',
      'banner1.jpg',
      'banner2.jpg',
      'banner3.jpg',
      'food1.jpg',
      'logo_black.png',
      'welcome.jpg'
    ],
    isLoading: false,
    sideMenu: false
  }),

  components: {
    'Footer': Footer
  },

  methods: {
    onPhoneCallPressed() {
      window.location.href='tel:+4978328977'
    },

    onOpenMail() {
      window.location.href='mailto:info@waldsee-terrasse.de'
    },

    onOpenMaps() {
      window.open("https://goo.gl/maps/QDcXkUCpyon7ktaW8")
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
        this.appbar.chip_phone_textcolor = 'secondary'
        this.sideMenu = true
        this.appbar.navicon_color = 'secondary'
      }else if (top === 0){
        this.appbar.color="rgba(222,222,222,0.4) !important;"
        this.appbar.dark = true
        this.appbar.logo = false
        this.appbar.chip_phone_textcolor = 'white'
        this.sideMenu = false
        this.appbar.navicon_color = 'white'
      }
    },

    onChangeLanguage(){
      this.$i18n.locale = 'en'
    },

    loadImage() {
      // let iImagesLoaded = 0

      // this.imagesToPreload.forEach(imageurl => {
      //   let oImage = new Image()
      //   oImage.src = require("./assets/" + imageurl)
        
      //   oImage.onload = () => {
      //     iImagesLoaded++;

      //     if(iImagesLoaded === this.imagesToPreload.length) {
      //       console.log("loaded")
      //       this.isLoading = false
      //     }
      //   }
      // })
    }

  },

  created() {

  },

  mounted() {
    this.loadImage()
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
    opacity: 0.9;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}

</style>
