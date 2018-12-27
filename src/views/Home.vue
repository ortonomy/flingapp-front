<template>
  <div class="view-container">
    <md-app md-waterfall md-mode="overlap">
      <md-app-toolbar class="md-accent md-large">
        <div class="md-toolbar-row"><h1>Welcome, User</h1></div>
        <div class="md-toolbar-row"><h2>Acme Inc.</h2></div>
        <div class="md-toolbar-row">
          <p>Managing 30 Freelancers and 5 projects.</p>
        </div>
      </md-app-toolbar>
      <md-app-content>
        <md-content class="md-layout">
          <div class="md-layout-item"><h1>30 Freelancers</h1></div>
        </md-content>
        <md-content class="md-layout">
          <div class="md-layout-item"><h1>5 Projects</h1></div>
        </md-content>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted() {
    console.log(this)
    console.log(process.env)
    // this.$http.get('/').then(res => console.log(res))
  }
}
</script>

<style lang="scss" scoped>
.view-container {
  min-height: 100vh;
  background-color: #efefef;
  padding: 15px;
}

.md-content {
  padding: 15px;
  margin: 25px 0;
  border: 1px solid #ddd;

  &:first-child {
    margin-top: 0;
  }
}
</style>
