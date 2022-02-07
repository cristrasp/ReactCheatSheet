import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './container/home/Home';
import ReactTableContainer from './container/react-table-custom/ReactTableContainer';
import NoPage from './container/no-page/NoPage';
import ReactDOM from 'react-dom';
import NavbarComponent from './components/navbar/NavbarComponent';
import { Container } from 'reactstrap';
import ReactListCustom from './container/react-list-custom/ReactListCustom';
import ReactComponents from './container/react-components/ReactComponents';

export default function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="react-table" element={<ReactTableContainer />}></Route>
            <Route path="react-list" element={<ReactListCustom />}></Route>
            <Route path="react-components" element={<ReactComponents />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));