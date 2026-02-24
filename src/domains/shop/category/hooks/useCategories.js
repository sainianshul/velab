import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/category.api";

export const useCategories = (params) => {
    return useQuery({
        queryKey: ["categories", params],
        queryFn: () => getCategories(params),
        keepPreviousData: true,
    });
};