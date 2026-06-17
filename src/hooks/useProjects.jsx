import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProjects } from "../services/projects.js";
import useDebounce from "./useDebounce.jsx";

const useProjects = ({ typeIds = [], difficultyIds = [], tagIds = [], search = "", isMain, limit = 100 } = {}) => {
  const debouncedSearch = useDebounce(search);
  const sortedTypeIds = [...typeIds].sort();
  const sortedDifficultyIds = [...difficultyIds].sort();
  const sortedTagIds = [...tagIds].sort();

  const { data, isLoading, error } = useQuery({
    queryKey: ["projects", sortedTypeIds, sortedDifficultyIds, sortedTagIds, debouncedSearch, limit],
    queryFn: ({ signal }) =>
      getProjects(
        { typeIds: sortedTypeIds, difficultyIds: sortedDifficultyIds, tagIds: sortedTagIds, search: debouncedSearch, limit, isMain },
        signal
      ),
    placeholderData: keepPreviousData,
    retry: 2,
  });

  return { projects: data ?? [], loading: isLoading, error: error?.message ?? null };
};

export default useProjects;