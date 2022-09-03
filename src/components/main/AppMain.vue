<script setup>
import AppStickerIcon from "@/components/icons/AppSticker.vue";
import AppTabs from "@/components/main/AppTabs.vue";
import FundRaiser from "@/components/main/AppFundRaiser.vue";
</script>

<template>
  <div class="">
    <div class="">
      <img
        src="../../assets/images/shayo and chike.jpg"
        alt=""
        class="w-full"
      />
    </div>
    <div
      class="flex justify-between py-2 px-4 sm:px-8 bg-highlight text-sm font-medium"
    >
      <p class="text-highlight-text">
        Organised by : <span class="text-main-text">Mustapha Mohammed</span>
      </p>
      <p class="text-highlight-text">One-Off</p>
    </div>

    <div class="px-4 text-sm">
      <div class="text-sm flex justify-between items-center mt-4">
        <p class="font-medium inline-flex items-center gap-2">
          <AppStickerIcon class="" /> Ceremony
        </p>
        <p class="text-highlight-text">10 days left</p>
      </div>

      <hr class="my-4" />

      <h1 class="header mt-4">Bless Chike and Shayo’s wedding</h1>

      <p class="text-main-text mt-2 text-base font-normal">
        I need to raise 5 million naira for a wedding ceremony, that is
        scheduled to hold on the 26th June 2020, i need this money to support
        this couple and their newly born quadruplets in th...<strong
          ><a href="#" class="">See more</a></strong
        >
      </p>
    </div>

    <div class="mt-8">
      <AppTabs />
    </div>

    <hr class="my-4" />

    <div class="mt-4 px-4">
      <FundRaiser />
    </div>
  </div>
</template>
