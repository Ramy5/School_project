import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages";
import { Header, Nav } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
