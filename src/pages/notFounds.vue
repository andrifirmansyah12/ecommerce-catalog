<script>
export default {
  methods: {
    routeHome() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-container">
    <div class="row md:w-3/4 w-4/5 bg-white lg:px-32 lg:py-32 py-32 bg-cover bg-center error-bg border shadow-md rounded-md">
      <div class="col-sm-8 offset-sm-2 text-gray-50 text-center">
        <div class="relative">
          <h1
            class="text-black relative text-9xl tracking-tighter-less text-shadow font-sans font-bold"
          >
            <span>4</span><span>0</span><span>4</span>
          </h1>
          <span
            class="absolute top-0 -ml-12 text-black font-semibold text-black"
            >Oops!</span
          >
        </div>
        <h5 class="text-black font-semibold -mr-10 -mt-3">Page not found</h5>
        <p class="text-black mt-2 mb-6">
          we are sorry, but the page you requested was not found
        </p>
        <a
          @click="routeHome()"
          class="border-2 cursor-pointer border-black px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-black rounded-full hover:shadow-lg"
          style="color: var(--color-6)"
        >
          Got to Home
        </a>
      </div>
    </div>
  </div>
</template>

<style>
.bg-container {
    background: linear-gradient(var(--color-2) 50%, #ffff 50%)
}

.error-bg {
  background-image: url("../assets/image/sad-face.png");
}
</style>
