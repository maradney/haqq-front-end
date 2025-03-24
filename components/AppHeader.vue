<script setup lang="ts"></script>

<template>
  <header
    class="fixed z-40 left-0 top-0 h-16 bg-black shadow-black shadow w-screen flex items-center px-5"
  >
    <div class="flex items-center gap-4 mr-auto">
      <NuxtLink to="/">
        <SvgLogo class="w-12 h-12" />
      </NuxtLink>
      <UButton
        class="rounded-full !bg-[#DEF244] !text-black font-bold h-fit"
        color="neutral"
        to="404"
      >
        Upgrade Plan
      </UButton>
    </div>
    <HeaderSearch class="mx-4" />
    <ul class="flex gap-2 text-white">
      <li><NuxtLink to="/discover">Discover</NuxtLink></li>
      <li><NuxtLink to="/songs">Songs</NuxtLink></li>
      <li><NuxtLink to="/playlists">Playlists</NuxtLink></li>
    </ul>
    <HeaderDropDown class="mx-4" />
  </header>
</template>

<style lang="css" scoped>
li {
  display: inline;
  list-style-type: none !important;
}
</style>
