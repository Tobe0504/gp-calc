"use client";

import { useRouter } from "next/navigation";

const useUpdateSearchParams = () => {
  const router = useRouter();

  const updateSearchParam = (
    key: string,
    value?: string,
    method?: "set" | "delete" | "get"
  ) => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (method === "get") {
      return params.get(key);
    }

    if (method === "delete") {
      params.delete(key);
    } else if (value) {
      params.set(key, value);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    router.push(newUrl);
  };

  return updateSearchParam;
};

export default useUpdateSearchParams;
