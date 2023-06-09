import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as P from './pages/index'
import './style/reset.css'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<P.Main />} />
          <Route path="/login" element={<P.Login />} />
          <Route path='/forgotpw' element={<P.ForgotPW />} />
          <Route path="/about" element={<P.About />} />
          <Route path="/signup" element={<P.SignUp />} />
          <Route path="/community" element={<P.Community />} />
          <Route path="/join" element={<></>} />
          <Route path="/search" element={<P.Search />} />
          <Route path="*" element={<P.NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default (App);
