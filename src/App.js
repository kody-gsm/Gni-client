import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as P from './pages/index'
import './style/reset.css'
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(e => {
    axios.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('tokens'))?.accessToken;
    console.log('헤더 설정됨')
  })
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
          <Route path="/join" element={<P.Join />} />
          <Route path="/search" element={<P.Search />} />
          <Route path="/profile" element={<P.Profile />} />
          <Route path="/bookmark" element={<P.Bookmark />} />
          <Route path="/edit" element={<P.Edit />} />
          <Route path="/write" element={<>write</>} />
          <Route path="*" element={<P.NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default (App);
