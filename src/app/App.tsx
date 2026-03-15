import { AppProvider } from "./providers"
import { AppRouter } from "./routers"

export default function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}