// src/router.tsx
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import AboutPage from '../pages/about/AboutPage'
import HomePage from '../pages/home/HomePage'
import { Env } from '../utils/Env'

const AppRouter: React.FC = () => {
  const { HOST } = Env

  return (
    <BrowserRouter basename={`/${HOST}`}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
