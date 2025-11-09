import { Route, Routes } from "react-router-dom";
import SpotifyFirstXI from "./components/Preview";
import Callback from "./pages/Callback";
import Dashboard from "./pages/Test";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/" element={<SpotifyFirstXI />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
