import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as P from './pages/index'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<P.Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
