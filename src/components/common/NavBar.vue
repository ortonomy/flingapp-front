<template>
  <md-tabs class="md-primary" md-sync-route>
    <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
    <md-tab
      id="tab-freelancers"
      md-label="Freelancers"
      to="/freelancers"
    ></md-tab>
    <md-tab id="tab-projects" md-label="Projects" to="/projects"></md-tab>
  </md-tabs>
</template>
<style lang="scss" scoped></style>
<script>
export default {
  name: 'nav-bar'
}
</script>
