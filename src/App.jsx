import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home'

function App() {
  return (
    // <div className='flex items-center justify-center'>
      <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
