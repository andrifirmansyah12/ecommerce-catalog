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
    <div
      class="row md:w-3/4 w-4/5 bg-white lg:px-32 lg:py-44 py-32 bg-cover bg-center error-bg border shadow-md rounded-md"
    >
      <div class="offset-sm-2 text-gray-50 text-center">
        <p class="text-black mt-2 mb-6">This product is unavailable to show</p>
        <a
          @click="routeHome()"
          class="border-2 cursor-pointer font-bold rounded-md border-black px-16 lg:px-36 py-3 text-sm shadow-sm font-medium tracking-wider text-black hover:shadow-lg"
          style="color: var(--color-6)"
        >
          Next product
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
