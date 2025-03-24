<script setup lang="ts">
const router = useRouter();

const token = ref("");
const type = ref("All");

const types = ["All", "Songs", "Vidoes", "SFX", "Photos"];

function search() {
  router.push({
    path: "/search",
    query: { type: type.value, token: token.value },
  });
}
</script>

<template>
  <UButtonGroup>
    <UInput
      v-model.trim="token"
      size="xl"
      color="neutral"
      icon="i-heroicons-magnifying-glass-20-solid"
      placeholder="Search"
      autocomplete="off"
      :trailing="false"
      :ui="{
        base: '!rounded-l-full',
        trailing: 'pe-1',
      }"
    >
      <template v-if="token?.length" #trailing>
        <UButton
          color="neutral"
          variant="link"
          size="sm"
          icon="i-lucide-circle-x"
          aria-label="Clear input"
          @click="token = ''"
        />
      </template>
    </UInput>
    <USelectMenu v-model="type" :items="types" />
    <UButton
      color="success"
      size="xl"
      icon="i-heroicons-magnifying-glass"
      :ui="{
        base: '!rounded-r-full',
      }"
      @click="() => search()"
    />
  </UButtonGroup>
</template>
