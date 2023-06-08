import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as P from './pages/index'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<P.Main />} />
          <Route path="/login" element={<P.Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
