<template>
  <!-- ログアウト状態はメニューが表示されずUIが変になるが、通常ログイン画面をメニューバー無しで用意するので今回は修正しない -->
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-3"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
      </template>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title style="height: 100px">Vue-Practice</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon large class="mr-8">mdi-magnify</v-icon>
      </v-btn>

      <template>
        <v-btn v-if="!isAuthenticated" icon @click="toRegister">
          <v-icon large class="mr-4">mdi-plus-circle-outline</v-icon>
        </v-btn>

        <!-- st -->

        <div class="text-center">
          <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-on="on" v-bind="attrs">
                <v-icon large>mdi-account-circle</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-navigation-drawer permanent dark src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
                <v-list>
                  <v-list-item>
                    <v-list-item-avatar>
                      <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>John Leider</v-list-item-title>
                      <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list v-if="!isAuthenticated">
                  <v-list-item link @click="toLogin">
                    <v-list-item-icon>
                      <v-icon>mdi-plus</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>ログイン</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
                <v-list v-if="isAuthenticated">
                  <v-list-item link @click="toLogout">
                    <v-list-item-icon>
                      <v-icon>mdi-minus</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                      <v-list-item-title>ログアウト</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>

                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn text @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn color="primary" text @click="menu = false">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-navigation-drawer>
            </v-card>
          </v-menu>
        </div>
      </template>
      <!-- end -->

      <template v-if="isAuthenticated" v-slot:extension>
        <v-tabs align-with-title>
          <v-tab><router-link class="routerlink" to="/" active-class="f20" exact>Top</router-link></v-tab>
          <v-tab><router-link class="routerlink" to="/calc" active-class="f20" exact>Calc</router-link></v-tab>
          <v-tab><router-link class="routerlink" to="/weather" active-class="f20" exact>Weather</router-link></v-tab>
          <v-tab><router-link class="routerlink" to="/question" active-class="f20" exact>Question</router-link></v-tab>
          <v-tab><router-link class="routerlink" to="/datalist" active-class="f20" exact>DataList</router-link></v-tab>
          <v-tab><router-link class="routerlink" to="/calendar" active-class="f20" exact>Calendar</router-link></v-tab>
          <v-tab>
            <router-link class="routerlink" to="/customcontent" active-class="f20" exact>Custom</router-link>
          </v-tab>
          <v-tab>
            <router-link class="routerlink" to="/comments" active-class="f20" exact>Comments</router-link>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="600">
      <v-container style="height: 225px"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.idToken !== null;
    },
  },
  methods: {
    toRegister() {
      this.$router.push('/register');
    },
    toLogin() {
      this.$router.push('/login');
    },
    toLogout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
.header a {
  color: white;
}

.routerlink {
  color: white;
  text-decoration: none;
}

.f20 {
  font-size: 20px;
}
</style>
