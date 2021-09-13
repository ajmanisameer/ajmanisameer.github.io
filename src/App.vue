
<template>
<div  id="app">
   <Header />
    <router-view />
  <Footer />
</div>
 

</template>

  <script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style >
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

#app {
  font-family: futura-pt;
  /* font-weight: 400; */
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.4em;
  -webkit-font-smoothing: antialiased;
  /* font-size: calc((2 - 1) * 1.2vh + 1rem); */
}

</style>


