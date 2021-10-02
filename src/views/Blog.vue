<template>
  <main
    v-if="!loading"
    class="
      min-h-full
      mx-10
      grid grid-flow-row md:grid-cols-2 sm:grid-cols-1
      auto-rows-auto
      gap-10
    "
  >
    <div v-for="post in posts" :key="post.id" class="content w-6/6">
      <p class="italic my-4">{{ post.date }}</p>

      <a
        @click="persist(post.id)"
        class="my-4 cursor-pointer text-3xl hover:underline font-semibold"
      >
        {{ post.title }}
      </a>
      <div class="content mt-4 w-5/6">
        <p class="text-lg " v-html="post.description.substring(0, 100) + `..`"></p>
        <!-- {{post.description}} -->
      </div>
      <p  class="my-3 underline italic">
        <a @click="persist(post.id)" class="cursor-pointer">Read More</a>
      </p>
    </div>
  </main>

  <main v-else class="h-screen align-center justify-center text-center">
    <div class="text-gray-500 text-3xl mb-6">Fetching Data</div>
    <img :src="loadingImage" class="w-24 m-auto" alt />
  </main>
</template>

<script>
// @ is an alias to /src
import postsData from "../blogs.json";
// import { NotionRenderer, getPageBlocks } from "vue-notion";
// import Post from '@/views/Post.vue';

export default {
  name: "Blog",
  data() {
    return {
      loading: true,
      loadingImage: require("../assets/hourglass.gif"),
      posts: postsData,
      error: "",
      text: "",
    };
  },
  methods: {
    persist(id) {
      this.posts.forEach((post) => {
        if (post.id == id) {
          localStorage.setItem("title", post.title);
          localStorage.setItem("description", post.description);
          localStorage.setItem("date", post.date);
          this.$router.push({ path: `post` });
        }
      });
    },
  },
  async created() {
    this.loading = false;
    // try{
    //   console.log("here")
    // //   this.posts = await PostService.getPosts()
    //  // this.posts = this.posts.filter(post => post.publish == false)
    // //   console.log(this.posts)

    // } catch (err){
    //   this.error = err.message
    // }
  },
};
</script>

<style scoped>
</style>
