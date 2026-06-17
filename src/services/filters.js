import { api } from "./api";

export const getFilterOptions = (endpoint, signal) =>
  api.get(`/${endpoint}`, { signal }).then((res) => res.data);