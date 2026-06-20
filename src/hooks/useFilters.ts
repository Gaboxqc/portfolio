import { useQuery } from '@tanstack/react-query'
import { getFilterOptions } from '../services/filters'
import type { FilterOption } from '../types'

const useFilters = (endpoint: string) => {
  const { data, isLoading, error } = useQuery<FilterOption[], Error>({
    queryKey: ['filters', endpoint],
    queryFn: ({ signal }) => getFilterOptions(endpoint, signal),
    staleTime: Infinity,
  })

  return { options: data ?? [], loading: isLoading, error: error?.message ?? null }
}

export default useFilters
