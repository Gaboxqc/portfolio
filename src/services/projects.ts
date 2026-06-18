import { api } from "./api";
import type { Project } from "../types";

interface GetProjectsParams {
  difficultyIds?: number[];
  typeIds?: number[];
  tagIds?: number[];
  search?: string;
  offset?: number;
  isMain?: boolean;
  limit?: number;
}

export const getProjects = (
  { difficultyIds = [], typeIds = [], tagIds = [], search = "", offset = 0, isMain, limit = 100 }: GetProjectsParams = {},
  signal?: AbortSignal
): Promise<Project[]> => {
  const params = new URLSearchParams({ offset: String(offset), limit: String(limit) });
  if (isMain !== undefined) params.append("is_main", String(isMain));
  difficultyIds.forEach((id) => params.append("difficulty_level_id", String(id)));
  typeIds.forEach((id) => params.append("project_type_id", String(id)));
  tagIds.forEach((id) => params.append("tag_id", String(id)));
  if (search.trim()) params.append("search", search.trim());

  return api.get<Project[]>(`/projects?${params}`, { signal }).then((res) => res.data);
};
