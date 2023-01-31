import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyOffice from './pages/MyOffice/MyOffice';
import Finance from './pages/Finance/Finance';
import Rates from './pages/Rates/Rates';
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
