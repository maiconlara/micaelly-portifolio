"use client";

import { SuspenseProvider } from "@/components/ui/suspense-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
interface ProvidersProps {
  children: ReactNode;
}

const MINUTE = 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 0 * MINUTE,
      staleTime: 0 * MINUTE,
      retry: true,
    },
  },
});

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuspenseProvider>{children}</SuspenseProvider>
    </QueryClientProvider>
  );
};
