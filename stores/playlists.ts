import { ref } from "vue";
import { defineStore } from "pinia";
import type { PlaylistDetails, PlaylistPagination } from "~/shared/types";

export const usePlaylistStore = defineStore("playlists", () => {
  const playlistDetails = ref<PlaylistDetails | null>(null);
  const myPlaylists = ref<PlaylistPagination | null>(null);
  const featuredPlaylists = ref<PlaylistPagination | null>(null);

  async function fetchPlaylistDetails(id: number | string) {
    playlistDetails.value = await useAPI<PlaylistDetails>(
      `/api/v2/projects/${id}`
    );
  }

  async function fetchMyPlaylists() {
    myPlaylists.value = await useAPI<PlaylistPagination>("/api/v2/projects", {
      params: {
        songs: true,
        mine: true,
      },
    });
  }

  async function fetchFeaturedPlaylists() {
    featuredPlaylists.value = await useAPI<PlaylistPagination>(
      "/api/v2/projects?featured_only=true"
    );
  }

  async function editPlaylist(
    id: string,
    data: { name?: string; description?: string }
  ) {
    await useAPI<PlaylistDetails>(`/api/v2/projects/${id}`, {
      method: "PUT",
      body: data,
    });
  }

  return {
    playlistDetails,
    fetchPlaylistDetails,

    myPlaylists,
    fetchMyPlaylists,

    featuredPlaylists,
    fetchFeaturedPlaylists,

    editPlaylist,
  };
});
