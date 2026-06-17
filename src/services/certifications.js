import { api } from "./api";

export const getCertifications = ({ offset = 0, limit = 10 } = {}, signal) => {
  const params = new URLSearchParams({ offset, limit });
  return api.get(`/certifications?${params}`, { signal }).then((res) => res.data);
};