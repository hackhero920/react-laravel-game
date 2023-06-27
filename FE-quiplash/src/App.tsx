import { Routes, Route } from "react-router-dom";

import { LandingPage, PageNotFound, LobbyPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
