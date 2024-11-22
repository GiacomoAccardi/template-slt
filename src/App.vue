<script>
import AppHeader from './components/AppHeader.vue'
import AppResume from './components/AppResume.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppResume,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <AppResume />
  <AppFooter />
</template>

<style>
@import './styles/generals.scss';
</style>
