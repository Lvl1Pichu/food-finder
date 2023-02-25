import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ResultPage from './pages/ResultPage'
import StartPage from './pages/StartPage'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
      <Route path="/start-page" element={<StartPage/>} />
      <Route path="/result-page" element={<ResultPage ingredients={[]} />} />
      <Route path="*" element={<h2>404 not found</h2>} />

    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
