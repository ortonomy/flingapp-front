<template>
  <div id="app" class="page-container">
    <md-toolbar class="md-transparent primary-tool md-layout">
      <div class="logo-container md-layout-item">
        <img class="md-image" src="./assets/images/primary_logo.svg" />
      </div>
    </md-toolbar>
    <md-app>
      <md-app-toolbar class="md-primary"> <nav-bar></nav-bar> </md-app-toolbar>
      <md-app-drawer class="md-accent" md-permanent="clipped">
        <md-toolbar md-elevation="0" class="md-transparent">
          <side-bar></side-bar>
        </md-toolbar>
      </md-app-drawer>
      <md-app-content> <router-view /> </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
// MATERIAL THEME SETUP
@import '~vue-material/dist/theme/engine';

@include md-register-theme(
  'default',
  (
    primary: #ffc700,
    accent: md-get-palette-color(gray, 800)
  )
);

@import '~vue-material/dist/theme/all'; // Apply the theme

// FONTS SET UP
@import 'styles/fonts';

body {
  font-family: 'Adelle Sans Light', Roboto, Helvetica, Arial, sans-serif !important;
}

.primary-tool {
  height: 80px;

  & .logo-container {
    height: calc(100% - 10px);

    img {
      height: 100%;
    }
  }
}

#app {
  .md-app-drawer {
    max-width: 300px;
    min-height: 100vh;
  }

  .md-app-content {
    padding: 0;
  }

  .md-app-toolbar {
    min-height: auto;
  }
}
</style>
