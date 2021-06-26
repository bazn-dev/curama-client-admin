<template>
  <v-app>
    <v-navigation-drawer fixed permanent floating>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 font-weight-bold mt-2">Curama</v-list-item-title>
          <v-list-item-title class="text-h6 font-weight-bold">Admin.</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list dense nav>
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          link
          @click="redirectTo(item.name)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <section class="main-section">
      <v-app-bar flat elevate-on-scroll class="main-section__app-bar">
        <v-toolbar-title class="main-section__app-bar-title">{{ 'Planner' }}</v-toolbar-title>
      </v-app-bar>
      <nuxt/>
    </section>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        navItems: [
          { title: 'Dashboard', name: 'module-dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Интерфейс', name: 'module-interface', icon: 'mdi-xml' },
          { title: 'База данных', name: 'module-database', icon: 'mdi-xml' },
          { title: 'Диалоги', name: 'module-dialogs', icon: 'mdi-xml' },
          { title: 'API', name: 'module-api', icon: 'mdi-xml' },
          { title: 'Функционал', name: 'module-functional', icon: 'mdi-xml' },
          { title: 'Интеграции', name: 'module-integrations', icon: 'mdi-xml' },
          { title: 'Виджеты', name: 'module-widgets', icon: 'mdi-xml' },
          { title: 'Настройки', name: 'settings', icon: 'mdi-xml' },
        ],
        right: null,
      }
    },
    computed: {
      getTitle() {
        return this.navItems?.filter(item => item?.name === this.$route.name)[0]?.title;
      }
    },
    methods: {
      redirectTo (name) {
        this.$router.push({
          name: `${name}`
        });
      }
    }
  }
</script>

<style lang="scss">
  .main-section {
    width: calc(100% - 256px);
    margin-left: 256px;
    background-color: #f6f6f9;

    &__app-bar {
      height: 64px;
      background-color: #f6f6f9 !important;
    }

    &__app-bar-title {
      font-size: 18px;
      font-weight: 500;
      color: #626366;
    }
  }
</style>
