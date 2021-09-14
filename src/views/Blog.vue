<template>
  <main
    v-if="!loading"
    class="
      min-h-full
      mx-10
      grid grid-flow-row grid-cols-2
      auto-rows-auto
      gap-10
    "
  >
    <div v-for="post in posts" :key="post.id" class="content">
      <p class="italic my-4">{{ post.date }}</p>
      <p class="my-4 w-6/6 text-3xl">{{ post.title }}</p>
      <div class="content w-4/6">
        <p class="" v-html="post.description.substring(0, 140) + `..`"></p>
        <!-- {{post.description}} -->
      </div>
      <p @click="persist(post.id)" class="my-3 cursor-pointer underline italic">
        <a>Read More</a>
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
// import postsData from '../blogs.json';
// import { NotionRenderer, getPageBlocks } from "vue-notion";
// import Post from '@/views/Post.vue';

export default {
  name: "Blog",
  data() {
    return {
      loading: true,
      loadingImage: require("../assets/hourglass.gif"),
      posts: [
        {
          id: 23,
          date: "2nd Sep 2021",
          title: "Title one",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        },
        {
          id: 22133,
          date: "2nd June 2021",
          title: "Title one",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        },
        {
          id: 23,
          date: "5nd dec 2021",
          title: "Title one",
          description:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
        },
      ],
      error: "",
      text: "",
    };
  },
  methods: {
    persist(id) {
      this.posts.forEach((post) => {
        if (post.id == id) {
          console.log(post);
          localStorage.setItem("title", post.title);
          localStorage.setItem("description", post.description);
          localStorage.setItem("date", post.date);
          this.$router.push({ path: `post` });
        }
      });
    },
  },
  async created() {
    console.log(this.posts);
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
