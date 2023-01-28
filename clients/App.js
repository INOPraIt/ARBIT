import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyOffice from './pages/Home/Home';
import Finance from './pages/Home/Home';
import Rates from './pages/Home/Home';
import Layout from './components/Layout';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path='/myoffice' element={<MyOffice />} />
      <Route path='/finance' element={<Finance />} />
      <Route path='/rates' element={<Rates />} />
    </Routes>
  )
}
