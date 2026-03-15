import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Root</h1>} />
        <Route path="/auth">
          <Route path="sign-up" element={<h1>Sign up</h1>} />
          <Route path="sign-in" element={<h1>Sign in</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}