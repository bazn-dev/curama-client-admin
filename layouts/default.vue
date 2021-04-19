<template>
  <v-app>
    <div
      class="ct-container"
      :class="{'reduced-width': !$vuetify.breakpoint.smAndDown}"
    >
      <v-app-bar dark elevate-on-scroll style="height: 64px;">
        <v-toolbar-title class="font-weight-black">Tester</v-toolbar-title>
      </v-app-bar>

      <nuxt/>
    </div>
  </v-app>
</template>

<script>
  export default {
    methods: {
      redirectTo (name) {
        this.$router.push({
          name: `admin-${name}`
        });
      }
    }
  }
</script>

<style>
  .navigation-drawer-header {
    min-height: 63px !important;
  }
</style>
