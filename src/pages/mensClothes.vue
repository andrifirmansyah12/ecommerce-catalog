<script>
import axios from "axios";
export default {
  props: ['id'],
  data: function () {
      return {
        products: [],
        numberNext: this.id,
        number: 1,
        isloaded: false,
        mens: "men's clothing",
        womens: "women's clothing",
      }
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.isloaded = true;
        }, 2000);
      }
    };
    this.getProducts();
  },
  methods: {
    getProducts() {
      if (this.number > 20) {
        this.isloaded = false;
        setTimeout(() => {
          this.isloaded = true;
        }, 2000);
        this.$router.go();
      } else if (this.numberNext > 20) {
        this.isloaded = false;
        setTimeout(() => {
          this.isloaded = true;
        }, 2000);
        this.$router.go();
      } else {
        if (this.id) {
          axios
            .get("https://fakestoreapi.com/products/" + this.numberNext++)
            .then((response) => {
              if (response.data.category === this.mens) {
                this.isloaded = false;
                this.products = response.data;
                setTimeout(() => {
                  this.isloaded = true;
                }, 2000);
              } else if (response.data.category === this.womens) {
                this.isloaded = false;
                this.products = response.data;
                setTimeout(() => {
                  this.isloaded = true;
                }, 2000);
              } else {
                this.$router.push({
                  name: "Unavailable",
                  params: {
                    id: response.data.id,
                    next: response.data.id + 1,
                  },
                });
              }
            });
        } else {
          axios
            .get("https://fakestoreapi.com/products/" + this.number++)
            .then((response) => {
              if (response.data.category === this.mens) {
                this.isloaded = false;
                this.products = response.data;
                setTimeout(() => {
                  this.isloaded = true;
                }, 2000);
              } else if (response.data.category === this.womens) {
                this.isloaded = false;
                this.products = response.data;
                setTimeout(() => {
                  this.isloaded = true;
                }, 2000);
              } else {
                this.isloaded = false;
                setTimeout(() => {
                  this.isloaded = true;
                }, 2000);
                this.$router.push({
                  name: "Unavailable",
                  params: {
                    id: response.data.id,
                    next: response.data.id + 1,
                  },
                });
              }
            });
        }
      }
    },
  },
};
</script>

<template>
  <div
    v-if="!isloaded"
    class="fixed z-50 left-0 top-0 w-full h-full overflow-hidden"
    style="background-color: rgba(0, 0, 0, 0.5)"
  >
    <div class="absolute inset-1/2">
      <svg
        aria-hidden="true"
        class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  </div>

  <section class="body-font overflow-hidden bg-white bg-container">
    <div class="container px-5 py-24 mx-auto">
      <div
        class="lg:w-4/5 mx-auto flex bg-white flex-wrap border p-4 md:p-10 shadow-md rounded-md"
      >
        <div class="lg:w-1/2 w-full">
          <img
            alt="ecommerce"
            class="w-full image-product object-contain object-center rounded"
            :src="products.image"
          />
        </div>
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <!-- // Mens Clothing -->
          <h1 v-if="products.category == this.mens"
            class="text-3xl title-font font-medium mb-1"
            style="color: var(--color-4)"
          >
            {{ products.title }}
          </h1>
          <!-- // Mens Clothing -->

          <!-- // Womens Clothing -->
          <h1 v-else-if="products.category == this.womens"
            class="text-3xl title-font font-medium mb-1"
            style="color: var(--color-1)"
          >
            {{ products.title }}
          </h1>
          <!-- // Womens Clothing -->
          <div class="flex justify-between mb-4 border-b">
            <span class="flex py-2 border-gray-200">
              <span style="color: var(--color-6)">{{ products.category }}</span>
            </span>

            <!-- // Mens Clothing -->
            <span class="flex items-center" v-if="products.category == this.mens">
              <span class="mr-3" v-if="!isloaded" style="color: var(--color-6)"
                >0/5</span
              >
              <span class="mr-3" v-else>{{ products.rating.rate }}/5</span>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-4)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-4)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-4)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-4)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-4)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </span>
            <!-- // Mens Clothing -->

            <!-- // Womens Clothing -->
            <span class="flex items-center" v-else-if="products.category == this.womens">
              <span class="mr-3" v-if="!isloaded" style="color: var(--color-6)"
                >0/5</span
              >
              <span class="mr-3" v-else>{{ products.rating.rate }}/5</span>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-1)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-1)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-1)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-1)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4"
                style="color: var(--color-1)"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>
            </span>
            <!-- // Womens Clothing -->
          </div>
          <p class="leading-relaxed" style="color: var(--color-3)">
            {{ products.description }}
          </p>
          <div class="flex mt-6 items-center pb-5 border-b mb-5"></div>
          <div>

            <!-- // Mens Clothing -->
            <span
              v-if="products.category == this.mens"
              class="title-font font-medium text-2xl"
              style="color: var(--color-4)"
              >${{ products.price }}</span
            >
            <!-- // Mens Clothing -->

            <!-- // Womens Clothing -->
            <span
              v-else-if="products.category == this.womens"
              class="title-font font-medium text-2xl"
              style="color: var(--color-4)"
              >${{ products.price }}</span
            >
            <!-- // Womens Clothing -->

            <!-- // Mens Clothing -->
            <div class="mt-4 flex justify-between items-center" v-if="products.category == this.mens">
              <button
                class="text-white border py-2.5 px-8 md:px-14 focus:outline-none rounded"
                style="background: var(--color-4)"
              >
                Buy Now
              </button>
              <button
                @click="getProducts()"
                class="py-2 px-8 md:px-14 focus:outline-none rounded"
                style="border: 3px solid var(--color-4); color: var(--color-4)"
              >
                Next Product
              </button>
            </div>
            <!-- // Mens Clothing -->

            <!-- // Womens Clothing -->
            <div class="mt-4 flex justify-between items-center" v-else-if="products.category == this.womens">
              <button
                class="text-white border py-2.5 px-8 md:px-14 focus:outline-none rounded"
                style="background: var(--color-1)"
              >
                Buy Now
              </button>
              <button
                @click="getProducts()"
                class="py-2 px-8 md:px-14 focus:outline-none rounded"
                style="border: 3px solid var(--color-1); color: var(--color-1)"
              >
                Next Product
              </button>
            </div>
            <!-- // Womens Clothing -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.bg-container {
  background: linear-gradient(var(--color-2) 50%, #ffff 50%);
}

.image-product {
  height: 440px;
}
</style>
