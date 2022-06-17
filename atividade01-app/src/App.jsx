import { Routes, Route } from "react-router-dom";
import Amazonas from "./pages/Amazonas";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Amazonas />} />
      </Routes>
    </>
  );
}

export default App;