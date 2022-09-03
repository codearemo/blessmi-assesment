<script setup>
import FacebookIcon from "@/components/icons/AppFacebookIcon.vue";
import TwitterIcon from "@/components/icons/AppTwitterIcon.vue";
import InstagramIcon from "@/components/icons/AppInstagramIcon.vue";
import YoutubeIcon from "@/components/icons/AppYoutubeIcon.vue";
import FlagIcon from "@/components/icons/AppFlagIcon.vue";
import FavouriteFilledIcon from "@/components/icons/AppFavouriteFilledIcon.vue";
</script>

<template>
  <div class="">
    <h1 class="header">Fundraiser Members</h1>

    <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div class="flex gap-3">
        <p
          class="p-3 rounded-full text-base font-semibold text-disabled-text"
          style="background-color: #e0f2ff"
        >
          HJ
        </p>
        <div class="">
          <p class="text-highlight-text font-normal">Organiser</p>
          <p class="font-semibold">Fawale Gbolahan T</p>
        </div>
      </div>
      <div class="flex gap-3">
        <p
          class="p-3 rounded-full text-base font-semibold text-disabled-text"
          style="background-color: #ffe3e7; color: #a0616a"
        >
          GB
        </p>
        <div class="">
          <p class="text-highlight-text font-normal">Beneficiary</p>
          <p class="font-semibold">Fawale Gbolahan T</p>
        </div>
      </div>
      <div class="flex gap-3">
        <p
          class="p-3 rounded-full text-base font-semibold text-disabled-text"
          style="background-color: #e8f5ff; color: #1f90e1"
        >
          LK
        </p>
        <div class="">
          <p class="text-highlight-text font-normal">Observer</p>
          <p class="font-semibold">Fawale Gbolahan T</p>
        </div>
      </div>
      <div class="flex gap-3">
        <p
          class="p-3 rounded-full text-base font-semibold text-disabled-text"
          style="background-color: #e3e2ff; color: #545384"
        >
          EM
        </p>
        <div class="">
          <p class="text-highlight-text font-normal">Observer</p>
          <p class="font-semibold">Fawale Gbolahan T</p>
        </div>
      </div>
    </div>

    <hr class="my-6" />

    <div class="">
      <h1 class="header">Fundraiser on Social Media</h1>
      <div class="flex gap-2 items-center mt-4">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YoutubeIcon />
      </div>
    </div>

    <hr class="my-6" />

    <div class="">
      <p class="text-highlight-text font-medium">
        Fundraiser ID: <span class="text-main-text">548757458ID</span>
      </p>
      <div class="mt-4 flex justify-between items-center">
        <a
          href="#"
          class="underline underline-offset-4 inline-flex gap-2 items-center"
          ><FlagIcon />Report Project</a
        >
        <p class="text-red-500 inline-flex items-center gap-1">
          <FavouriteFilledIcon /> 2.3k
        </p>
      </div>
    </div>
  </div>
</template>
