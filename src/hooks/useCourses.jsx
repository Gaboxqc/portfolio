import {keepPreviousData, useQuery} from "@tanstack/react-query";
import {getCourses} from "../services/courses";

const useCourses = ({categoryIds = [], tagIds = []} = {}) => {
    const sortedCategoryIds = [...categoryIds].sort()
    const sortedTagIds = [...tagIds].sort()

    const {data, isLoading, isFetching, error} = useQuery({
        queryKey: ["courses", sortedCategoryIds, sortedTagIds],
        queryFn: ({signal}) => getCourses({categoryIds: sortedCategoryIds, tagIds: sortedTagIds, limit: 100}, signal),
        retry: 2,
        placeholderData: keepPreviousData,
    });

    return {courses: data ?? [], loading: isLoading, isFetching, error: error?.message ?? null}
}

export default useCourses;