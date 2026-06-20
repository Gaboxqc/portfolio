import { api } from './api'
import type { FilterOption } from '../types'

export const getFilterOptions = (endpoint: string, signal?: AbortSignal): Promise<FilterOption[]> =>
  api.get<FilterOption[]>(`/${endpoint}`, { signal }).then((res) => res.data)
