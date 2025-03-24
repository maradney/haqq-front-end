<script lang="ts" setup>
const playlistStore = usePlaylistStore();

onMounted(async () => {
  await playlistStore.fetchFeaturedPlaylists();
});
</script>

<template>
  <div class="h-screen">
    <div class="w-full flex gap-4 px-10">
      <RouterLink
        to="playlists"
        active-class="border-b-2 border-b-blue-950"
        class="text-2xl flex items-center gap-1"
      >
        <UIcon name="i-lucide-gem" />
        <span>Thematic Collections</span>
      </RouterLink>
      <RouterLink
        to="my-playlists"
        active-class="border-b-2 border-b-blue-950"
        class="text-2xl flex items-center gap-1"
      >
        <UIcon name="i-lucide-bookmark" />
        <span>My Playlists</span>
      </RouterLink>
    </div>

    <ClientOnly>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 h-full"
      >
        <div
          v-for="featuredPlaylist in playlistStore.featuredPlaylists?.items"
          :key="featuredPlaylist.id"
          class="flex flex-col gap-1"
        >
          <div class="relative flex items-center justify-center w-full h-full">
            <img
              class="absolute w-full h-full top-0 left-0 z-10 shadow rounded"
              :src="
                featuredPlaylist.art_file_url ?? 'https://placehold.co/100x100'
              "
              onerror="this.onerror=null;this.src='https://placehold.co/100x100';"
            />
            <div
              class="absolute z-20 bg-[rgba(0,0,0,.7)] opacity-0 hover:opacity-100 flex items-center justify-center w-full h-full"
            >
              <UButton
                class=""
                color="info"
                variant="outline"
                :ui="{ base: 'font-bold text-lg shadow' }"
              >
                View Playlist
              </UButton>
            </div>
          </div>
          <span class="font-bold">
            {{ featuredPlaylist.name }}
          </span>
        </div>
      </div>
    </ClientOnly>
  </div>
</template>
