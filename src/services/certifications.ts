import { api } from './api'
import type { Certification } from '../types'

interface GetCertificationsParams {
  offset?: number
  limit?: number
}

export const getCertifications = (
  { offset = 0, limit = 10 }: GetCertificationsParams = {},
  signal?: AbortSignal,
): Promise<Certification[]> => {
  const params = new URLSearchParams({ offset: String(offset), limit: String(limit) })
  return api.get<Certification[]>(`/certifications?${params}`, { signal }).then((res) => res.data)
}
