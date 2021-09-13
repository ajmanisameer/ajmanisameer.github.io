<template>
  <nav class="p-10 px-15 flex  items-center">
      <div id="title" class="flex w-11/12 items-center">
        <a>  <router-link to="/">  SAMEER AJMANI </router-link> </a>
      </div>

      <div id="nav" class="items-center mr-auto flex">
        <a class="inline-block text-lg px-6">
          <router-link to="/">Blog</router-link> 
        </a>
        <a class="inline-block text-lg px-2">
          <router-link to="/about">About</router-link>
        </a>
      </div>
  </nav>
</template>

<style scoped>
#title {
  font-family: futura-pt;
  font-weight: 400;
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
