import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '../components/ui/NavBar'
import ExperiencePage from '../pages/experience/ExperiencePage'
import HomePage from '../pages/home/HomePage'
import JsonFormatterPage from '../pages/json-formatter/JsonFormatterPage'
import ProjectPage from '../pages/project/ProjectPage'
import ToolsPage from '../pages/tools/ToolsPage'
import { Env } from '../utils/Env'

const AppRouter = () => {
  const { HOST } = Env

  return (
    <BrowserRouter basename={`/${HOST}`}>
      <Routes>
        <Route path="" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/json-formatter" element={<JsonFormatterPage />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/json-formatter" element={<JsonFormatterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
