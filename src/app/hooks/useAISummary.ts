import { useMutation, useQueryClient } from "@tanstack/react-query";
import { generateAISummary } from "../services/aiSummary";
import type { AISummaryResponse } from "../services/aiSummary";
import type { Shift } from "../types/Shift";

interface UseAISummaryOptions {
  onSuccess?: (data: AISummaryResponse) => void;
  onError?: (error: Error) => void;
}

interface GenerateSummaryParams {
  shift: Shift;
  language?: string;
}

export const useAISummary = (options?: UseAISummaryOptions) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ shift, language = "en" }: GenerateSummaryParams) => 
      generateAISummary(shift, language),
    onSuccess: (data) => {
      queryClient.setQueryData(["ai-summary", data.shiftId], data);
      options?.onSuccess?.(data);
    },
    onError: (error: Error) => {
      console.error("AI Summary Error:", error);
      options?.onError?.(error);
    },
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });

  return {
    generateSummary: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    data: mutation.data,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    reset: mutation.reset,
  };
};

export default useAISummary;
