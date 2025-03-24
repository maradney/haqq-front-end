<script lang="ts" setup>
import { VueDraggableNext as draggable } from "vue-draggable-next";

const playlistStore = usePlaylistStore();

onMounted(async () => {
  await playlistStore.fetchMyPlaylists();
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
      <div v-if="playlistStore.myPlaylists">
        <draggable
          v-model="playlistStore.myPlaylists.items"
          class="flex flex-wrap content-baseline gap-6 p-4 h-full"
        >
          <div
            v-for="playlist in playlistStore.myPlaylists.items"
            :key="playlist.id"
            class="flex flex-col shadow-xl h-fit"
          >
            <div
              class="relative flex items-center justify-center w-[200px] h-[200px]"
            >
              <img
                class="absolute w-[200px] h-[200px] top-0 left-0 z-10 shadow rounded"
                :src="playlist.art_file_url ?? 'https://placehold.co/100x100'"
                onerror="this.onerror=null;this.src='https://placehold.co/100x100';"
              />
              <div
                class="absolute z-20 bg-[rgba(0,0,0,.7)] opacity-0 hover:opacity-100 flex items-center justify-center w-[200px] h-[200px]"
              >
                <UButton
                  class=""
                  color="info"
                  variant="outline"
                  :ui="{ base: 'font-bold text-lg shadow' }"
                  :to="`playlist/${playlist.id}`"
                >
                  View Playlist
                </UButton>
              </div>
            </div>
            <div class="p-4">
              <span class="text-sm font-bold">
                {{ playlist.name }}
              </span>
              <USwitch default-value />
              <span class="text-sm font-light">
                {{
                  playlist.project_songs_count === 1
                    ? `${playlist.project_songs_count} song`
                    : `${playlist.project_songs_count} songs`
                }}
              </span>
            </div>
          </div>
        </draggable>
      </div>
    </ClientOnly>
  </div>
</template>
