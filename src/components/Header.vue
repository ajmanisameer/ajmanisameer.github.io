<template>
  <nav class="p-10 px-15 flex  items-center">
      <div id="title" class="flex w-11/12 items-center">
        <a class="text-3xl ">  <router-link to="/">  Sameer Ajmani </router-link> </a>
      </div>
      <div id="nav" class="items-center md:mr-12 sm:mr-5 flex">
         <a class="inline-block text-lg px-4">
          <router-link to="/work">Work</router-link> 
        </a>
        <a class="inline-block text-lg px-4">
          <router-link to="/">Blog</router-link> 
        </a>
        <a class="inline-block text-lg px-4">
          <router-link to="/about">About</router-link>
        </a>
      </div>
  </nav>
</template>

<style scoped>


#title {
  font-family: "orpheus-pro",Optima, sans-serif;
    font-weight: 500;
    font-style: normal;
    letter-spacing: 0em;
    text-transform: none;
    line-height: 1.4em;
  -webkit-font-smoothing: antialiased;
  font-size: calc((2 - 1) * 1.2vh + 1rem);
}



a {
  cursor: pointer;
}

#nav-links a {
  /* font-weight: bold; */
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
