
<template>
  <div class="flex flex-col min-h-screen" id="app">
    <header >
    <Header />

    </header>
    <main class="flex-grow tracking-wider">
    <router-view />

    </main>
    <footer class="">
      <Footer />
    </footer>
  </div>
</template>

  <script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style >
#app {
  /* font-family: Apercu, Avenir, -apple-system, BlinkMacSystemFont,
    "Helvetica Neue", Helvetica, "Calibri", "Roboto", Arial, sans-serif; */
    font-family: "orpheus-pro",Optima,sans-serif ;
  /* font-weight: 400; */
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.4em;
  -webkit-font-smoothing: antialiased;
  /* font-size: calc((2 - 1) * 1.2vh + 1rem); */
}
</style>


