import { createMutationHook } from "@/core/query/createMutationHook";
import {
    createCategory,
    updateCategory,
    deleteCategory,
} from "../api/category.api";

export const useCreateCategory =
    createMutationHook(createCategory, ["categories"]);

export const useUpdateCategory =
    createMutationHook(({ id, data }) => updateCategory(id, data), ["categories"]);

export const useDeleteCategory =
    createMutationHook(deleteCategory, ["categories"]);