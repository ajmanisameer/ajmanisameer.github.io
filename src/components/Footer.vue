<template>
  <nav class=" px-10 py-5 flex items-center">
      <div id="title" class="flex w-10/12 items-center">
        <a class="text-md"> © {{ date }} SAMEER AJMANI  </a>
      </div>

      <div id="nav" class="items-center flex">
        <!-- <a class="inline-block px-2">
          <router-link to="/">EMAIL</router-link> 
        </a>
         <a class="inline-block px-2">
           |
        </a>
        <a class="inline-block px-2">
          <router-link to="/about">INSTAGRAM</router-link>
        </a> -->
      </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

