<template>
  <v-app>
      <Menu/>
    <v-main>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Menu,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
