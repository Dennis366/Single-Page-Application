import { Routes, Route, Link } from "react-router-dom";
import { Button, Box } from "@mui/material";

import StatePage from "./components/StatePage";
import ApiPage from "./components/ApiPage";

function App() {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2, p: 2 }}>
        <Button component={Link} to="/">
          State Page
        </Button>

        <Button component={Link} to="/api">
          API Page
        </Button>
      </Box>

      <Routes>
        <Route path="/" element={<StatePage />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </>
  );
}

export default App;