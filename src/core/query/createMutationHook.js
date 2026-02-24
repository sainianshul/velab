import { useMutation, useQueryClient } from "@tanstack/react-query";

export const createMutationHook = (mutationFn, invalidateKey) => {
    return () => {
        const queryClient = useQueryClient();

        return useMutation({
            mutationFn,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: invalidateKey });
            },
        });
    };
};