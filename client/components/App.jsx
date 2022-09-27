import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Item from './Item'
import Items from './Items'
import List from './List'
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
          <Route path="/items" element={<Items />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
