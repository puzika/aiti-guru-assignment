import { type ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../../shared/config/theme";

type AppProviderProps = {
  children: ReactNode | ReactNode[],
}

const queryClient = new QueryClient();

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme} defaultMode="light">
        <CssBaseline />
        { children }
      </ThemeProvider>
    </QueryClientProvider>
  )
}