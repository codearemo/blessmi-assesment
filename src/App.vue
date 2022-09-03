<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppMain from "@/components/main/AppMain.vue";
import AppAside from "@/components/aside/AppAside.vue";
</script>

<template>
  <header class="">
    <AppHeader />
  </header>
  <div class="sm:px-10">
    <main class="mt-6 lg:w-8/12 lg:float-left lg:pr-3">
      <div class="border rounded-lg pb-8">
        <AppMain />
      </div>
      <br />
      <br />
    </main>
    <!-- <div class="lg:w-1/12"></div> -->
    <aside class="mt-6 lg:w-4/12 lg:float-right lg:pl-3">
      <div class="border rounded-lg">
        <AppAside />
      </div>
    </aside>
  </div>
</template>

<style scoped></style>
