import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as P from './pages/index'
import './style/reset.css'
import { useEffect } from "react";
import axios from "axios";
const url = 'https://port-0-gni-server-k19y2kljzsh19o.sel4.cloudtype.app';

const App = () => {
  async function tokenrefresh() {
    const refresh = JSON.parse(localStorage.getItem('tokens'))?.refreshToken;
    await axios.post(`${url}/common/token/refresh/`,
      { refresh: refresh })
      .then(e => {
        localStorage.setItem('tokens', JSON.stringify({ accessToken: e.data.access, refreshToken: refresh }))
        localStorage.setItem('logintime', new Date().getTime());
        axios.defaults.headers.common['Authorization'] = `Bearer ${e.data.access}`;
      })
      .catch(e => {
        console.log(e)
      })
  }
  async function getName() {
    await axios.get(`${url}/common/getuser`)
      .then(e => {
        localStorage.setItem('name', e.data[0]);
      }).catch(e => {
        console.log(e);
        localStorage.removeItem('name');
      })
  }
  useEffect(e => {
    if (new Date().getTime() - localStorage.getItem('logintime') >= 30 * 60000) {
      tokenrefresh();
    } else {
      axios.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem('tokens'))?.accessToken}`;
      console.log((new Date().getTime() - localStorage.getItem('logintime')) / 1000 / 60)
    }
    getName();
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
