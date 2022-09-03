<script setup>
import ChevronArrowRight from "@/components/icons/AppChevronArrowRight.vue";
import { ref } from "vue";

const currentTab = ref(0);
</script>

<template>
  <div class="px-4 bg-highlight whitespace-nowrap w-full overflow-x-scroll">
    <button @click="currentTab = 0" class="text-base font-semibold">
      <p
        class="py-4 px-6"
        :class="currentTab === 0 ? '' : 'text-disabled-text'"
      >
        Overview
      </p>
      <div
        :class="currentTab === 0 ? 'bg-primary pb-1 rounded-t-lg' : ''"
      ></div>
    </button>
    <button @click="currentTab = 1" class="text-base font-semibold">
      <p
        class="py-4 px-6"
        :class="currentTab === 1 ? '' : 'text-disabled-text'"
      >
        Blessors
      </p>
      <div
        :class="currentTab === 1 ? 'bg-primary pb-1 rounded-t-lg' : ''"
      ></div>
    </button>
    <button @click="currentTab = 2" class="text-base font-semibold">
      <p
        class="py-4 px-6"
        :class="currentTab === 2 ? '' : 'text-disabled-text'"
      >
        Rewards
      </p>
      <div
        :class="currentTab === 2 ? 'bg-primary pb-1 rounded-t-lg' : ''"
      ></div>
    </button>
    <button @click="currentTab = 3" class="text-base font-semibold">
      <p
        class="py-4 px-6"
        :class="currentTab === 3 ? '' : 'text-disabled-text'"
      >
        Comments
      </p>
      <div
        :class="currentTab === 3 ? 'bg-primary pb-1 rounded-t-lg' : ''"
      ></div>
    </button>
  </div>

  <div class="px-4 mt-6">
    <div class="flex justify-between items-center">
      <h1 class="header">Updates</h1>
      <button class="inline-flex items-center gap-3 text-base">
        View all
        <ChevronArrowRight />
      </button>
    </div>
    <div class="mt-3">
      <p class="text-base font-light">
        I need to raise 5 million naira for a wedding ceremony, that is
        scheduled to hold on the 26th June 2020, i need this money to support
        this couple and their newly born quadruplets in the earliest stages of
        their life.
      </p>
    </div>
    <div class="mt-4">
      <p class="text-base font-light">
        I appreaciate every little amount that you can use to bless me.
      </p>
      <strong class="underline"><a href="#" class="">Read More.</a></strong>
    </div>
  </div>
</template>
