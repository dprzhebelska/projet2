import React from 'react';
import './App.css';
import './style2.css';
import 'antd/dist/antd.less';
import './styles.less';

import Search from './Search';
import Nav from './Nav';
import {Routes, Route, Link} from 'react-router-dom'
import Overview from './Overview';
import Home from './Home';
import Articles from './Articles';
import Help from './Help';
import Contact from './Contact';

import 'antd/dist/antd.css';

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;


function App() {


  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route exact path="projet2/" element={<Home />} />
        <Route exact path="projet2/Search" element={<Search />} />
        <Route exact path="projet2/Overview" element={<Overview />} />
        <Route exact path="projet2/Articles" element={<Articles />} />
        <Route exact path="projet2/Help" element={<Help />} />
        <Route exact path="projet2/Contact" element={<Contact />} />
      
      </Routes>
    </div>
  );
}

export default App;
