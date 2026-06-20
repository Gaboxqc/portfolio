import { api } from './api'
import type { Course } from '../types'

interface GetCoursesParams {
  categoryIds?: number[]
  tagIds?: number[]
  offset?: number
  limit?: number
}

export const getCourses = (
  { categoryIds = [], tagIds = [], offset = 0, limit = 10 }: GetCoursesParams = {},
  signal?: AbortSignal,
): Promise<Course[]> => {
  const params = new URLSearchParams({ offset: String(offset), limit: String(limit) })
  categoryIds.forEach((id) => params.append('category_id', String(id)))
  tagIds.forEach((id) => params.append('tag_id', String(id)))

  return api.get<Course[]>(`/courses?${params}`, { signal }).then((res) => res.data)
}
