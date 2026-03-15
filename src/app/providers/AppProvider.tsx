import { type ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../shared/config/theme";

type AppProviderProps = {
  children: ReactNode | ReactNode[],
}

const queryClient = new QueryClient();

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </QueryClientProvider>
  )
}