import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

import StarBackground from "./components/StarBackground.tsx";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SpaceTheme from "./components/SpaceTheme.ts";

function App() {
  return (
    <ThemeProvider theme={SpaceTheme}>
      <StarBackground>
        <CssBaseline />
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
      </StarBackground>
    </ThemeProvider>
  );
}

export default App;
