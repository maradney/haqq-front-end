<script setup lang="ts">
import { onClickOutside, useLocalStorage } from "@vueuse/core";
import type { TeamAccount } from "~/shared/types";

const menu = useTemplateRef<HTMLElement>("menu");
const accountStore = useAccountStore();

const showMenu = ref(false);
const showProjectsSubMenu = ref(false);
const selectedProject = useLocalStorage<TeamAccount>(
  "selected-project",
  {} as TeamAccount
);

const projects = computed(() => {
  return (
    accountStore.accountDetails?.teams
      .map((team) => {
        return team.team_accounts;
      })
      .flat() ?? []
  );
});

function setSelectedProject(channelId: string) {
  const findProject =
    accountStore.accountDetails?.teams
      .map((team) => team.team_accounts.map((teamAccount) => teamAccount))
      .flat()
      .find((teamAccount) => teamAccount.channel_id === channelId) ?? null;
  selectedProject.value = findProject ?? ({} as TeamAccount);
}

onClickOutside(menu, () => {
  showMenu.value = false;
  showProjectsSubMenu.value = false;
});

onMounted(async () => {
  await accountStore.fetchAccountDetails();
  console.log(accountStore.accountDetails);
});
</script>

<template>
  <div ref="menu" class="text-white">
    <div
      class="flex gap-4 cursor-pointer"
      @click="
        () => {
          showMenu = !showMenu;
          showProjectsSubMenu = false;
        }
      "
    >
      <UAvatar size="xl" src="https://github.com/benjamincanac.png" />
      <div class="flex flex-col gap-1">
        <span>{{ accountStore.accountDetails?.profile_name }}</span>
        <div class="text-xs font-thin">{{ selectedProject?.title ?? "" }}</div>
      </div>
    </div>
    <div
      v-show="showProjectsSubMenu"
      class="fixed top-16 right-0 w-sm bg-white text-black shadow flex flex-col gap-2 justify-center p-4"
    >
      <div
        v-for="project in projects"
        :key="project.id"
        class="flex gap-4 items-center cursor-pointer"
        @click="() => setSelectedProject(project.channel_id)"
      >
        <img
          :src="project.profile_image_url"
          onerror="this.onerror=null;this.src='https://placehold.co/100x100';"
        />
        <div class="flex flex-col gap-1 justify-center">
          <span>
            {{ project.title }}
          </span>
          <span class="text-xs font-light">
            Subscribers: {{ project.subscriber_count }}
          </span>
          <span class="text-xs font-light">
            Videos: {{ project.video_count }}
          </span>
        </div>
      </div>
    </div>
    <div
      v-show="showMenu"
      class="fixed top-16 right-0 w-sm bg-[rgba(0,0,0,.9)] flex flex-col gap-2 justify-center items-center p-4"
    >
      <div
        v-if="selectedProject"
        class="flex gap-4 items-center cursor-pointer"
      >
        <img
          :src="selectedProject.profile_image_url"
          onerror="this.onerror=null;this.src='https://placehold.co/100x100';"
        />
        <div class="flex flex-col gap-1 justify-center">
          <span>
            {{ selectedProject.title }}
          </span>
          <span class="text-xs font-light">
            Subscribers: {{ selectedProject.subscriber_count }}
          </span>
          <span class="text-xs font-light">
            Videos: {{ selectedProject.video_count }}
          </span>
        </div>
      </div>
      <UButton
        class="flex justify-center items-center gap-2 border border-white p-2 cursor-pointer mb-4"
        :ui="{
          base: 'bg-transparent hover:bg-transparent',
        }"
        @click="
          () => {
            showMenu = false;
            showProjectsSubMenu = true;
          }
        "
      >
        <UIcon name="i-lucide-arrow-left-right" />
        <span>Switch Project</span>
      </UButton>

      <div class="flex items-center gap-2 w-full">
        <UIcon name="i-lucide-badge-check" />
        <NuxtLink to="404"> Licenses & Downloads </NuxtLink>
      </div>
      <div class="flex items-center gap-2 w-full">
        <UIcon name="i-lucide-bookmark" />
        <NuxtLink to="404"> My Playlists </NuxtLink>
      </div>
      <div class="flex items-center gap-2 w-full">
        <UIcon name="i-lucide-flame" />
        <NuxtLink to="404"> Trackfluencer </NuxtLink>
      </div>
      <div class="flex items-center gap-2 w-full">
        <UIcon name="i-lucide-monitor" />
        <NuxtLink to="404"> Your Points </NuxtLink>
      </div>
      <div class="flex items-center gap-2 w-full">
        <UIcon name="i-lucide-cog" />
        <NuxtLink to="404"> Settings </NuxtLink>
      </div>
      <div class="flex items-center gap-2 w-full">
        <UIcon name="i-lucide-log-out" />
        <NuxtLink to="404"> Logout </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
