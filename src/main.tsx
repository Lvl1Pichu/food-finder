import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import './index.css'
import ResultPage from './pages/ResultPage'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="result/:ings" element={<ResultPage />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>,
)
