import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import AboutPage from '../pages/about/AboutPage'
import ExperiencePage from '../pages/experience/experiencePage'
import HomePage from '../pages/home/HomePage'
import ProjectPage from '../pages/project/projectPage'
import { Env } from '../utils/Env'

const AppRouter = () => {
  const { HOST } = Env

  return (
    <BrowserRouter basename={`/${HOST}`}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
