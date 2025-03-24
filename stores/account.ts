import { ref } from "vue";
import { defineStore } from "pinia";
import type { AccountDetails } from "~/shared/types";

export const useAccountStore = defineStore("account", () => {
  const accountDetails = ref<AccountDetails | null>(null);

  async function fetchAccountDetails() {
    accountDetails.value = await useAPI<AccountDetails>("/api/v2/account");
  }

  return {
    accountDetails,
    fetchAccountDetails,
  };
});
