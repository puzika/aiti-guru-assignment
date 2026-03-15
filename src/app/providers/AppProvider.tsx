import { type ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

type AppProviderProps = {
  children: ReactNode | ReactNode[],
}

const queryClient = new QueryClient();

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      { children }
    </QueryClientProvider>
  )
}