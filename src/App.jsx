import { Routes, Route } from 'react-router-dom'
import './App.css'

import Layout from './Layout'

import MultiSelectPage from './pages/MultiSelectPage'
import Main from './pages/Main'

function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/multipleselect" element={<MultiSelectPage />} />
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  )
}

export default App