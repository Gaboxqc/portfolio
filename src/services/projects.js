import { api } from "./api";

export const getProjects = (
  { difficultyIds = [], typeIds = [], tagIds = [], search = "", offset = 0, isMain, limit = 100 } = {},
  signal
) => {
  const params = new URLSearchParams({ offset, limit });
  if (isMain !== undefined) params.append("is_main", isMain);
  difficultyIds.forEach((id) => params.append("difficulty_level_id", id));
  typeIds.forEach((id) => params.append("project_type_id", id));
  tagIds.forEach((id) => params.append("tag_id", id));
  if (search.trim()) params.append("search", search.trim());

  return api.get(`/projects?${params}`, { signal }).then((res) => res.data);
};