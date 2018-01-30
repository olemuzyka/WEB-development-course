<template>
  <v-app  id="inspire">
    <app-header></app-header>
    <app-loader></app-loader>
    <v-content>
      <router-view/>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from './components/shared/Header'
import Footer from './components/shared/Footer'
import Loader from './components/shared/Loader'

export default {
  name: 'App',
  components: {
  	'app-header': Header,
    'app-footer': Footer,
		'app-loader': Loader
  }
}
</script>
