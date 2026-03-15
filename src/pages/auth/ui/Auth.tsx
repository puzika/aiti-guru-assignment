import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

export const Auth = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "500px",
      margin: "0 auto",
      minHeight: "100vh"
    }}>
      Auth
      <Outlet />
    </Box>
  )
}
