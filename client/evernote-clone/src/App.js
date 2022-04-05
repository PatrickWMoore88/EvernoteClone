import "./App.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./login/Login";
import LandingPage from "./components/Landing";
import NotesPage from "./notes/Notes";
import MainNav from "./components/layout/MainNav";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div>
        <MainNav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
