import { useQuery } from '@tanstack/react-query'
import { getCertifications } from '../services/certifications'
import type { Certification } from '../types'

interface UseCertificationsParams {
  offset?: number
  limit?: number
}

const useCertifications = ({ offset = 0, limit = 100 }: UseCertificationsParams = {}) => {
  const { data, isLoading, error } = useQuery<Certification[], Error>({
    queryKey: ['certifications', offset, limit],
    queryFn: ({ signal }) => getCertifications({ offset, limit }, signal),
    retry: 2,
  })

  return { certifications: data ?? [], loading: isLoading, error: error?.message ?? null }
}

export default useCertifications
