import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
