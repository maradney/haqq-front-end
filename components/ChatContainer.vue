<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
const menu = useTemplateRef<HTMLElement>("menu");

const openChat = ref(false);
const startConverstaion = ref(false);

onClickOutside(menu, () => {
  openChat.value = false;
  startConverstaion.value = false;
});
</script>

<template>
  <div class="fixed z-30 bottom-6 left-6 space-y-4">
    <div ref="menu">
      <div
        v-if="openChat"
        class="shadow-xl h-[600px] w-[300px] bg-white p-4 flex flex-col gap-4"
      >
        <SvgLogo class="w-12 h-12" />
        <div class="flex flex-col gap-2 shadow p-2">
          <span class="font-bold text-4xl">Hello ✋</span>
          <span class="">Got a question? We would love to help you!</span>
        </div>

        <div class="flex flex-col gap-2 shadow p-2">
          <span class="font-bold">Start a conversation</span>
          <div class="flex items-center gap-2">
            <img
              class="w-10 h-10 rounded-full"
              alt="Thematic Team"
              src="https://ucarecdn.com/e525b10d-01a3-4f59-a030-b5f0d34e5dde/"
            />
            We'll be back: 18:00
          </div>
          <UButton
            color="info"
            :ui="{ base: '!w-full' }"
            @click="
              () => {
                startConverstaion = true;
                openChat = false;
              }
            "
          >
            Start conversation
          </UButton>
        </div>
      </div>

      <div
        v-if="startConverstaion"
        class="shadow-xl relative h-[600px] w-[300px] bg-white p-4 flex flex-col gap-4"
      >
        <div
          class="absolute w-full top-0 left-0 rounded-t p-4 bg-[#f21b91] text-white flex items-center"
        >
          <UIcon name="i-lucide-move-left" size="25" />
          <SvgLogo class="w-12 h-12" />
          <span class="ml-6">Thematic team</span>
        </div>
        <!-- <div class="absolute w-full top-[79px] left-0 " /> -->
        <div class="absolute w-full bottom-0 left-0">
          <UTextarea
            :autoresize="false"
            class="w-full"
            :ui="{
              base: '!rounded-none',
            }"
          />
        </div>
      </div>
    </div>

    <UButton
      :ui="{
        base: '!rounded-full h-16 w-16 flex justify-center items-center',
      }"
      @click="
        () => {
          openChat = true;
        }
      "
    >
      <UIcon name="i-lucide-message-circle" size="50" />
    </UButton>
  </div>
</template>
