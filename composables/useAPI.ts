/* eslint-disable @typescript-eslint/no-explicit-any */

export async function useAPI<T>(
  url: string,
  options?: {
    method?: "GET" | "POST" | "PUT";
    params?: any;
    query?: any;
    headers?: any;
    body?: any;
  }
) {
  return await $fetch<T>(url, {
    baseURL: "https://staging-api.hellothematic.com",
    headers: {
      Authorization: "a9aaa5f5bab6e11243886744d2cac81b",
      ...options?.headers,
    },
    ...options,
  });
}
