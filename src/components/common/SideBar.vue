<template>
  <div class="component-layout">
    <md-content>
      <md-field>
        <label>Search</label>
        <md-input v-model="type"></md-input>
        <md-icon>search</md-icon>
        <span class="md-helper-text">for freelancers, projects, more...</span>
      </md-field>
    </md-content>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data: function() {
    return {
      type: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.component-layout {
  padding: 10px;
  width: 100%;
}
</style>
