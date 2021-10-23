<template>
  <nav class="p-10 px-15 flex items-center">
    <div id="title" class="flex w-10/12 items-center">
      <a class="text-4xl">
        <router-link to="/"> Sameer <span class="italic">Ajmani</span></router-link>
      </a>
    </div>
    <div id="nav" class="items-center hidden md:flex md:mr-12">
      <a class="inline-block text-lg px-3">
        <router-link to="/about">about</router-link>
      </a>
      <a class="inline-block text-lg px-3">
        <router-link to="/">blog</router-link>
      </a>
      <a class="inline-block text-lg px-3">
        <router-link to="/work">work</router-link>
      </a>
    </div>
    <div
      @click="(isActive = !isActive), (isOpen = !isOpen)"
      v-bind:class="{ active: isActive }"
      class="button_container md:hidden items-center"
      id="toggle"
    >
      <span class="top"></span><span class="middle"></span
      ><span class="bottom"></span>
    </div>
    <div v-bind:class="{ open: isOpen }" class="overlay" id="overlay">
      <nav class="overlay-menu">
        <ul>
          <li>
            <a @click="(isActive = !isActive), (isOpen = !isOpen)" class="">
              <router-link to="/about">about</router-link>
            </a>
          </li>
          <li>
            <a @click="(isActive = !isActive), (isOpen = !isOpen)" class="">
              <router-link to="/">blog</router-link>
            </a>
          </li>
          <li>
            <a @click="(isActive = !isActive), (isOpen = !isOpen)" class="">
              <router-link to="/work">work</router-link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isActive: false,
    };
  },
};
</script>

<style scoped>
#title {
  font-family: "brandon-grotesque";
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

.container {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  top: 40%;
  left: 0;
  margin: 0 auto;
}
.container p {
  font-size: 20px;
}
.container a {
  display: inline-block;
  position: relative;
  text-align: center;
  color: #42b983;
  text-decoration: none;
  font-size: 20px;
  overflow: hidden;
  top: 5px;
}
.container a:after {
  content: "";
  position: absolute;
  background: #1abc9c;
  height: 2px;
  width: 0%;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0;
  transition: 0.35s ease;
}
.container a:hover:after,
.container a:focus:after,
.container a:active:after {
  width: 100%;
}
h1 {
  position: relative;
  text-align: center;
}
.button_container {
  position: fixed;
  /* top: 6.6%; */
  right: 8%;
  height: 20px;
  width: 35px;
  cursor: pointer;
  z-index: 100;
  transition: opacity 0.25s ease;
}
.button_container:hover {
  opacity: 0.7;
}
.button_container.active .top {
  transform: translateY(11px) translateX(0) rotate(45deg);
  background: #fff;
}
.button_container.active .middle {
  opacity: 0;
  background: #fff;
}
.button_container.active .bottom {
  transform: translateY(-11px) translateX(0) rotate(-45deg);
  background: #fff;
}
.button_container span {
  background: #42b983;
  border: none;
  height: 4px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.35s ease;
  cursor: pointer;
}
.button_container span:nth-of-type(2) {
  top: 11px;
}
.button_container span:nth-of-type(3) {
  top: 22px;
}
.overlay {
  position: fixed;
  background: #42b983;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.35s, visibility 0.35s, height 0.35s;
  overflow: hidden;
}
.overlay.open {
  opacity: 0.9;
  visibility: visible;
  height: 100%;
}
.overlay.open li {
  animation: fadeInRight 0.5s ease forwards;
  animation-delay: 0.35s;
}
.overlay.open li:nth-of-type(2) {
  animation-delay: 0.4s;
}
.overlay.open li:nth-of-type(3) {
  animation-delay: 0.45s;
}
.overlay.open li:nth-of-type(4) {
  animation-delay: 0.5s;
}
.overlay nav {
  position: relative;
  height: 70%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  /* font-family: 'Varela Round', serif; */
  font-weight: 400;
  text-align: center;
}
.overlay ul {
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  height: 100%;
}
.overlay ul li {
  display: block;
  height: 25%;
  height: calc(100% / 3);
  min-height: 50px;
  position: relative;
  opacity: 0;
}
.overlay ul li a {
  /* display: block; */
  position: relative;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
}
.overlay ul li a:hover:after,
.overlay ul li a:focus:after,
.overlay ul li a:active:after {
  width: 100%;
}
.overlay ul li a:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  transform: translateX(-50%);
  height: 3px;
  background: #fff;
  transition: 0.35s;
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
</style>
