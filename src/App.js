import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
