import { api } from "./api";

export const getCourses = ({ categoryIds = [], tagIds = [], offset = 0, limit = 10 } = {}, signal) => {
  const params = new URLSearchParams({ offset, limit });
  categoryIds.forEach((id) => params.append("category_id", id));
  tagIds.forEach((id) => params.append("tag_id", id));

  return api.get(`/courses?${params}`, { signal }).then((res) => res.data);
};