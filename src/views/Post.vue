<template>
  <div class=" about py-5 mx-10 md:mx-36 lg:mx-80 divide-y divide-gray-300">
    <div class="content ">
      <h1 class="text-lg italic">{{date}}</h1>
      <div class="content text-xl mt-4">
        <p class="text-4xl mb-9 font-bold">
         {{title}}
        </p>
        <p class="leading-8 text-xl " v-html="description">
        </p>
      </div>

      
      
    </div>
    <div class="my-10">
        
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Post",
  components: {},
   data(){
    return {
      title: '',
      date:'',
      description: ''
    }
  },
   mounted(){
    this.title = localStorage.title
    this.description = localStorage.description
    this.date = localStorage.date

  }
};
</script>

