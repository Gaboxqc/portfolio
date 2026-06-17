// hooks/useFilters.jsx
import { useQuery } from "@tanstack/react-query";
import { getFilterOptions } from "../services/filters.js";

const useFilters = (endpoint) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["filters", endpoint],
        queryFn: ({ signal }) => getFilterOptions(endpoint, signal),
        staleTime: Infinity,
    });

    return { options: data ?? [], loading: isLoading, error: error?.message ?? null };
};

export default useFilters;