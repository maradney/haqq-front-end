<script lang="ts" setup>
const route = useRoute();
const accountStore = useAccountStore();
const playlistStore = usePlaylistStore();

const startEditingName = ref(false);
const startEditingDescription = ref(false);

const editedName = ref("");
const editedDescription = ref("");

onMounted(async () => {
  if (typeof route.params.id === "string") {
    await playlistStore.fetchPlaylistDetails(route.params.id);
    editedName.value = playlistStore.playlistDetails?.name ?? "";
    editedDescription.value = playlistStore.playlistDetails?.description ?? "";
  }
});
</script>

<template>
  <div class="h-screen flex justify-center">
    <div
      v-if="playlistStore.playlistDetails"
      class="w-[600px] h-fit flex rounded-xl gap-10 px-6 shadow-2xl"
    >
      <img
        class="rounded-xl w-[250px] h-[250px]"
        :src="playlistStore.playlistDetails.art_file_url"
        onerror="this.onerror=null;this.src='https://placehold.co/100x100';"
      />

      <div class="flex flex-col gap-1">
        <span class="text-lg font-light">PLAYLIST</span>
        <div v-if="!startEditingName" class="flex gap-2">
          <span class="font-bold">
            {{ editedName }}
          </span>
          <span
            class="font-black rounded-full border border-black w-fit h-fit flex items-center justify-center p-1 cursor-pointer"
            @click="
              () => {
                startEditingName = true;
              }
            "
          >
            <UIcon name="i-lucide-pencil" size="10" />
          </span>
        </div>
        <div v-else>
          <UInput v-model="editedName" class="rounded-none" variant="ghost" />
          <UButton
            class="rounded-none"
            @click="
              () => {
                startEditingName = false;
                if (typeof $route.params.id === 'string') {
                  playlistStore.editPlaylist($route.params.id, {
                    name: editedName,
                  });
                }
              }
            "
            >Save</UButton
          >
          <UButton
            class="rounded-none"
            variant="ghost"
            :onclick="
              () => {
                startEditingName = false;
                editedName = playlistStore.playlistDetails?.name ?? '';
              }
            "
            >Cancel</UButton
          >
        </div>
        <span class="text-sm font-light">
          {{ playlistStore.playlistDetails.project_songs_count }}
        </span>
        <span
          v-if="accountStore.accountDetails"
          class="italic text-sm font-thin"
        >
          This 3 playlist from
          {{ accountStore.accountDetails.profile_name }} features the best
          copyright-free songs for YouTube videos, social media, and podcasts.
        </span>
        <div
          v-if="
            playlistStore.playlistDetails.description &&
            playlistStore.playlistDetails.description.length > 0
          "
          class="flex gap-2"
        >
          <span class="font-bold">
            {{ playlistStore.playlistDetails.description }}
          </span>
          <span
            class="font-black rounded-full border border-black w-fit h-fit flex items-center justify-center p-1 cursor-pointer"
            @click="
              () => {
                startEditingDescription = true;
              }
            "
          >
            <UIcon name="i-lucide-pencil" size="10" />
          </span>
        </div>
        <div v-else>
          <UButton
            color="info"
            variant="link"
            class="cursor-pointer"
            @click="
              () => {
                startEditingDescription = true;
              }
            "
            >Add description</UButton
          >
        </div>

        <USwitch default-value label="Inspire others" />
      </div>
    </div>
  </div>
</template>
