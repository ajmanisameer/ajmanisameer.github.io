<template>
  <div class=" about py-14 mx-10 md:mx-36 lg:mx-80">
    <div class="content mx-10">
      <h1 class="text-4xl">{{date}}</h1>
      <div class="content text-xl mt-6">
        <p>
         {{title}}
        </p>
        <p>
         {{description}}
        </p>
      </div>
      
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

