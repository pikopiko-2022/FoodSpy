import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Item from './Item'
import List from './List'
import Search from './Search'
import Nav from './Nav'
import Footer from './Footer'

function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/list" element={<List />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
