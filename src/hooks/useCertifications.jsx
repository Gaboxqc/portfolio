import { useQuery } from "@tanstack/react-query";
import { getCertifications } from "../services/certifications";

const useCertifications = ({ offset = 0, limit = 100 } = {}) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["certifications", offset, limit],
    queryFn: ({ signal }) => getCertifications({ offset, limit }, signal),
    retry: 2,
  });

  return { certifications: data ?? [], loading: isLoading, error: error?.message ?? null };
};

export default useCertifications;